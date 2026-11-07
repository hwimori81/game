// 스위치 2 젤다의 전설: 시간의 오카리나 (2026) - 메인 프론트엔드 애플리케이션 컨트롤러

import { chapters } from "./data/walkthrough.js";
import { goldSkulltulas, heartPieces, sideQuests, skulltulaRewards } from "./data/collectibles.js";
import { OCARINA_NOTES, songs, bonusSongs } from "./data/songs.js";
import { ProgressStorage } from "./storage.js";
import { OcarinaAudioEngine } from "./ocarina-audio.js";

const storage = new ProgressStorage();
const audio = new OcarinaAudioEngine();

const state = {
  activeTab: "walkthrough",       // "walkthrough" | "collectibles" | "songs" | "remake"
  collectibleSubtab: "skulltulas", // "skulltulas" | "hearts" | "sidequests"
  sideQuestFilter: "all",          // "all" | "bottles" | "masks" | "biggoron" | "fairies" | "switch2"
  searchQuery: "",
  eraFilter: "all",                // "all" | "child" | "adult"
  regionFilter: "all",
  statusFilter: "all",             // "all" | "unchecked" | "checked"
  collapsedChapters: new Set(),
  ocarinaBuffer: [],
  playingSongId: null
};

// 총 체크 항목 수 계산
const TOTAL_STEPS = chapters.reduce((acc, ch) => acc + ch.steps.length, 0);
const TOTAL_SKULLTULAS = goldSkulltulas.length; // 100
const TOTAL_HEARTS = heartPieces.length;        // 36
const TOTAL_SONGS = songs.length;               // 12
const TOTAL_SIDEQUESTS = sideQuests.length;     // 21

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getEraBadge(era, customLabel) {
  if (era === "child") {
    return `<span class="badge badge-child">${escapeHtml(customLabel || "소년기")}</span>`;
  }
  if (era === "adult") {
    return `<span class="badge badge-adult">${escapeHtml(customLabel || "청년기")}</span>`;
  }
  return `<span class="badge badge-both">${escapeHtml(customLabel || "소년·청년 공통")}</span>`;
}

function renderNoteToken(btnKey, extraId = "") {
  const note = OCARINA_NOTES[btnKey];
  if (!note) return "";
  const cls = btnKey === "A" ? "note-A" : "note-C";
  const idAttr = extraId ? `id="${extraId}"` : "";
  return `<span class="note-token ${cls}" ${idAttr} title="${escapeHtml(note.switch2Button)} (${escapeHtml(note.pitchName)})">${note.label}</span>`;
}

// ============================================================================
// 상단 전체 진행률 대시보드 업데이트
// ============================================================================
function updateProgressDashboard() {
  const doneSteps = storage.getCount("steps");
  const doneSkulltulas = storage.getCount("skulltulas");
  const doneHearts = storage.getCount("heartPieces");
  const doneSongs = storage.getCount("songs");
  const doneSideQuests = storage.getCount("sideQuests");

  const totalItems = TOTAL_STEPS + TOTAL_SKULLTULAS + TOTAL_HEARTS + TOTAL_SONGS + TOTAL_SIDEQUESTS;
  const totalDone = doneSteps + doneSkulltulas + doneHearts + doneSongs + doneSideQuests;
  const pct = totalItems > 0 ? ((totalDone / totalItems) * 100).toFixed(1) : "0.0";

  const pctEl = document.getElementById("overall-progress-pct");
  const fillEl = document.getElementById("overall-progress-fill");
  if (pctEl) pctEl.textContent = `${pct}%`;
  if (fillEl) fillEl.style.width = `${pct}%`;

  const setStat = (id, cur, max) => {
    const el = document.getElementById(id);
    if (el) el.textContent = `${cur} / ${max}`;
  };

  setStat("stat-steps", doneSteps, TOTAL_STEPS);
  setStat("stat-skulltulas", doneSkulltulas, TOTAL_SKULLTULAS);
  setStat("stat-hearts", doneHearts, TOTAL_HEARTS);
  setStat("stat-songs", doneSongs, TOTAL_SONGS);
  setStat("stat-sidequests", doneSideQuests, TOTAL_SIDEQUESTS);

  // 탭 카운트 업데이트
  const setTabCount = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };
  setTabCount("tab-count-walkthrough", `${doneSteps}/${TOTAL_STEPS}`);
  setTabCount("tab-count-collectibles", `${doneSkulltulas + doneHearts + doneSideQuests}/${TOTAL_SKULLTULAS + TOTAL_HEARTS + TOTAL_SIDEQUESTS}`);
  setTabCount("tab-count-songs", `${doneSongs}/${TOTAL_SONGS}`);
}

// ============================================================================
// 지역 드롭다운 필터 목록 동기화
// ============================================================================
function updateRegionFilterOptions() {
  const select = document.getElementById("region-filter-select");
  if (!select) return;

  let regions = [];
  if (state.activeTab === "walkthrough") {
    regions = [...new Set(chapters.map((c) => c.region))];
  } else if (state.activeTab === "collectibles") {
    if (state.collectibleSubtab === "skulltulas") {
      regions = [...new Set(goldSkulltulas.map((g) => g.region))];
    } else if (state.collectibleSubtab === "hearts") {
      regions = [...new Set(heartPieces.map((h) => h.region))];
    } else {
      regions = [...new Set(sideQuests.map((s) => s.categoryLabel))];
    }
  } else if (state.activeTab === "songs") {
    regions = [...new Set(songs.map((s) => s.categoryLabel))];
  }

  const currentVal = state.regionFilter;
  let html = `<option value="all">모든 지역 / 분류 (${regions.length})</option>`;
  for (const r of regions) {
    const selected = r === currentVal ? "selected" : "";
    html += `<option value="${escapeHtml(r)}" ${selected}>${escapeHtml(r)}</option>`;
  }
  select.innerHTML = html;
  if (!regions.includes(currentVal)) {
    state.regionFilter = "all";
    select.value = "all";
  }
}

// ============================================================================
// 1. 메인 스토리 & 던전 공략 렌더링
// ============================================================================
function renderWalkthroughTab() {
  const jumpBar = document.getElementById("chapter-jump-bar");
  const listContainer = document.getElementById("walkthrough-chapter-list");
  if (!listContainer || !jumpBar) return;

  const q = state.searchQuery.trim().toLowerCase();

  // 점프 바 렌더링
  jumpBar.innerHTML = chapters
    .map((ch) => {
      const doneCount = ch.steps.filter((s) => storage.isChecked("steps", s.id)).length;
      const isAllDone = doneCount === ch.steps.length;
      return `<a href="#${ch.id}" class="chapter-jump-link ${isAllDone ? "chapter-Jump-done" : ""}" data-jump-chapter="${ch.id}">
        ${ch.order}장. ${escapeHtml(ch.dungeonName.split("(")[0].trim())} (${doneCount}/${ch.steps.length})
      </a>`;
    })
    .join("");

  const filteredChapters = chapters.filter((ch) => {
    if (state.eraFilter !== "all" && ch.era !== "both" && ch.era !== state.eraFilter) {
      return false;
    }
    if (state.regionFilter !== "all" && ch.region !== state.regionFilter) {
      return false;
    }
    const doneCount = ch.steps.filter((s) => storage.isChecked("steps", s.id)).length;
    const isAllDone = doneCount === ch.steps.length;
    if (state.statusFilter === "unchecked" && isAllDone) return false;
    if (state.statusFilter === "checked" && !isAllDone) return false;

    if (q) {
      const haystack = [
        ch.title,
        ch.subtitle,
        ch.dungeonName,
        ch.region,
        ch.summary,
        ...ch.keyItems,
        ...ch.switch2Changes,
        ...(ch.boss ? [ch.boss.name, ch.boss.weakness, ...ch.boss.strategy] : []),
        ...ch.steps.map((s) => `${s.title} ${s.detail}`)
      ]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });

  if (filteredChapters.length === 0) {
    listContainer.innerHTML = `<div class="empty-state">조건에 일치하는 스토리 챕터나 던전이 없습니다. 검색어나 필터를 초기화해 보세요.</div>`;
    return;
  }

  listContainer.innerHTML = filteredChapters
    .map((ch) => {
      const doneCount = ch.steps.filter((s) => storage.isChecked("steps", s.id)).length;
      const isAllDone = doneCount === ch.steps.length;
      const isCollapsed = state.collapsedChapters.has(ch.id);

      const stepsHtml = ch.steps
        .map((step, idx) => {
          const checked = storage.isChecked("steps", step.id);
          return `
            <div class="step-item ${checked ? "checked" : ""}" data-toggle-category="steps" data-toggle-id="${step.id}" id="step-card-${step.id}">
              <input type="checkbox" class="step-checkbox" ${checked ? "checked" : ""} aria-label="${escapeHtml(step.title)}" />
              <div class="step-content">
                <div class="step-title">Step ${idx + 1}. ${escapeHtml(step.title)}</div>
                <div class="step-detail">${escapeHtml(step.detail)}</div>
              </div>
            </div>
          `;
        })
        .join("");

      const sw2Html =
        ch.switch2Changes && ch.switch2Changes.length > 0
          ? `
          <div class="sw2-changes-box">
            <div class="sw2-changes-title">
              <span class="badge badge-sw2">Switch 2 변경점</span>
              <span>2026 리메이크 핵심 체크 포인트</span>
            </div>
            <ul class="sw2-changes-list">
              ${ch.switch2Changes.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
            </ul>
          </div>
        `
          : "";

      const bossHtml = ch.boss
        ? `
          <div class="boss-box">
            <div class="boss-header">
              <div class="boss-name">⚔️ 보스전: ${escapeHtml(ch.boss.name)}</div>
              <div class="boss-weakness">핵심 약점: ${escapeHtml(ch.boss.weakness)}</div>
            </div>
            <ul class="boss-strategy-list">
              ${ch.boss.strategy.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}
            </ul>
            <div class="boss-hall-tip">
              <strong>🏆 패배한 적의 전당 (보스 리매치) 팁:</strong> ${escapeHtml(ch.boss.hallOfFoesTip)}
            </div>
          </div>
        `
        : "";

      return `
        <article class="chapter-card ${isAllDone ? "chapter-completed" : ""}" id="${ch.id}">
          <div class="chapter-header" data-chapter-toggle="${ch.id}">
            <div class="chapter-header-left">
              <div class="chapter-meta-row">
                ${getEraBadge(ch.era, ch.eraLabel)}
                <span class="chapter-region">📍 ${escapeHtml(ch.region)} · ${escapeHtml(ch.dungeonName)}</span>
              </div>
              <h3 class="chapter-title">${escapeHtml(ch.title)}</h3>
              <p class="chapter-subtitle">${escapeHtml(ch.subtitle)}</p>
            </div>
            <div class="chapter-header-right">
              <span class="chapter-progress-badge">${doneCount} / ${ch.steps.length} 완료</span>
              <button type="button" class="btn" data-check-all-chapter="${ch.id}">
                ${isAllDone ? "챕터 체크 해제" : "챕터 일괄 완료"}
              </button>
            </div>
          </div>
          <div class="chapter-body ${isCollapsed ? "collapsed" : ""}">
            <p class="chapter-summary">${escapeHtml(ch.summary)}</p>
            <div class="info-strip">
              <div class="info-box">
                <div class="info-box-label">핵심 입수 아이템 & 준비물</div>
                <div class="info-box-content">${escapeHtml(ch.keyItems.join(", "))}</div>
              </div>
              <div class="info-box">
                <div class="info-box-label">클리어 보상</div>
                <div class="info-box-content">${escapeHtml(ch.reward)}</div>
              </div>
            </div>
            ${sw2Html}
            <div class="steps-container">
              ${stepsHtml}
            </div>
            ${bossHtml}
          </div>
        </article>
      `;
    })
    .join("");
}

// ============================================================================
// 2. 100% 수집 요소 탭 렌더링 (스탈튤라 100 / 하트 조각 36 / 서브 퀘스트)
// ============================================================================
function renderCollectiblesTab() {
  const container = document.getElementById("collectibles-content-area");
  const rewardsContainer = document.getElementById("skulltula-rewards-area");
  if (!container || !rewardsContainer) return;

  // 서브탭 버튼 활성 상태
  document.querySelectorAll("[data-collectible-subtab]").forEach((btn) => {
    const sub = btn.getAttribute("data-collectible-subtab");
    btn.classList.toggle("active", sub === state.collectibleSubtab);
  });

  // 서브탭 카운트 표시
  const skDone = storage.getCount("skulltulas");
  const hpDone = storage.getCount("heartPieces");
  const sqDone = storage.getCount("sideQuests");
  const elSk = document.getElementById("subtab-count-skulltulas");
  const elHp = document.getElementById("subtab-count-hearts");
  const elSq = document.getElementById("subtab-count-sidequests");
  if (elSk) elSk.textContent = `${skDone}/100`;
  if (elHp) elHp.textContent = `${hpDone}/36`;
  if (elSq) elSq.textContent = `${sqDone}/${TOTAL_SIDEQUESTS}`;

  const q = state.searchQuery.trim().toLowerCase();

  if (state.collectibleSubtab === "skulltulas") {
    // 스탈튤라 보상 배너 표시
    rewardsContainer.style.display = "block";
    rewardsContainer.innerHTML = `
      <div class="rewards-banner">
        <h3>🕷️ 카카리코 마을 '스탈튤라의 집' 누적 토큰 보상 (현재 ${skDone} / 100마리)</h3>
        <div class="rewards-grid">
          ${skulltulaRewards
            .map(
              (tier) => `
              <div class="reward-tier ${skDone >= tier.tokens ? "unlocked" : ""}">
                <div class="reward-tier-tokens">${tier.tokens}마리 달성 ${skDone >= tier.tokens ? "✓" : ""}</div>
                <div><strong>${escapeHtml(tier.reward)}</strong></div>
                <div style="color: var(--text-muted); font-size: 0.76rem; margin-top: 0.15rem;">${escapeHtml(tier.note)}</div>
              </div>
            `
            )
            .join("")}
        </div>
      </div>
    `;

    const filtered = goldSkulltulas.filter((item) => {
      const checked = storage.isChecked("skulltulas", item.id);
      if (state.eraFilter !== "all" && item.era !== "both" && item.era !== state.eraFilter) return false;
      if (state.regionFilter !== "all" && item.region !== state.regionFilter) return false;
      if (state.statusFilter === "unchecked" && checked) return false;
      if (state.statusFilter === "checked" && !checked) return false;
      if (q) {
        const text = `#${item.number} ${item.region} ${item.title} ${item.condition} ${item.description}`.toLowerCase();
        if (!text.includes(q)) return false;
      }
      return true;
    });

    if (filtered.length === 0) {
      container.innerHTML = `<div class="empty-state">조건에 해당하는 황금 스탈튤라가 없습니다.</div>`;
      return;
    }

    container.innerHTML = `<div class="collectibles-grid">${filtered
      .map((item) => {
        const checked = storage.isChecked("skulltulas", item.id);
        const numStr = String(item.number).padStart(3, "0");
        return `
          <div class="collectible-card ${checked ? "checked" : ""}" data-toggle-category="skulltulas" data-toggle-id="${item.id}" id="card-${item.id}">
            <input type="checkbox" class="step-checkbox" ${checked ? "checked" : ""} aria-label="황금 스탈튤라 #${numStr} ${escapeHtml(item.title)}" />
            <div class="collectible-body">
              <div class="collectible-top-row">
                <span class="collectible-number">#${numStr}</span>
                ${getEraBadge(item.era)}
                <span class="collectible-region">📍 ${escapeHtml(item.region)}</span>
              </div>
              <div class="collectible-title">${escapeHtml(item.title)}</div>
              <div class="collectible-req">조건/준비물: ${escapeHtml(item.condition)}</div>
              <div class="collectible-desc">${escapeHtml(item.description)}</div>
            </div>
          </div>
        `;
      })
      .join("")}</div>`;
  } else if (state.collectibleSubtab === "hearts") {
    rewardsContainer.style.display = "none";

    const filtered = heartPieces.filter((item) => {
      const checked = storage.isChecked("heartPieces", item.id);
      if (state.eraFilter !== "all" && item.era !== "both" && item.era !== state.eraFilter) return false;
      if (state.regionFilter !== "all" && item.region !== state.regionFilter) return false;
      if (state.statusFilter === "unchecked" && checked) return false;
      if (state.statusFilter === "checked" && !checked) return false;
      if (q) {
        const text = `#${item.number} ${item.region} ${item.title} ${item.requirement} ${item.description}`.toLowerCase();
        if (!text.includes(q)) return false;
      }
      return true;
    });

    if (filtered.length === 0) {
      container.innerHTML = `<div class="empty-state">조건에 해당하는 하트 조각이 없습니다.</div>`;
      return;
    }

    container.innerHTML = `<div class="collectibles-grid">${filtered
      .map((item) => {
        const checked = storage.isChecked("heartPieces", item.id);
        const numStr = String(item.number).padStart(2, "0");
        return `
          <div class="collectible-card ${checked ? "checked" : ""}" data-toggle-category="heartPieces" data-toggle-id="${item.id}" id="card-${item.id}">
            <input type="checkbox" class="step-checkbox" ${checked ? "checked" : ""} aria-label="하트 조각 #${numStr} ${escapeHtml(item.title)}" />
            <div class="collectible-body">
              <div class="collectible-top-row">
                <span class="collectible-number">❤️ #${numStr}</span>
                ${getEraBadge(item.era, item.eraLabel)}
                <span class="collectible-region">📍 ${escapeHtml(item.region)}</span>
              </div>
              <div class="collectible-title">${escapeHtml(item.title)}</div>
              <div class="collectible-req">필요 조건: ${escapeHtml(item.requirement)}</div>
              <div class="collectible-desc">${escapeHtml(item.description)}</div>
            </div>
          </div>
        `;
      })
      .join("")}</div>`;
  } else {
    // 핵심 서브 퀘스트 & 장비
    rewardsContainer.style.display = "none";

    const filtered = sideQuests.filter((item) => {
      const checked = storage.isChecked("sideQuests", item.id);
      if (state.eraFilter !== "all" && item.era !== "both" && item.era !== state.eraFilter) return false;
      if (state.regionFilter !== "all" && item.categoryLabel !== state.regionFilter) return false;
      if (state.statusFilter === "unchecked" && checked) return false;
      if (state.statusFilter === "checked" && !checked) return false;
      if (q) {
        const text = `${item.categoryLabel} ${item.title} ${item.location} ${item.requirement} ${item.description}`.toLowerCase();
        if (!text.includes(q)) return false;
      }
      return true;
    });

    if (filtered.length === 0) {
      container.innerHTML = `<div class="empty-state">조건에 해당하는 서브 퀘스트 항목이 없습니다.</div>`;
      return;
    }

    container.innerHTML = `<div class="collectibles-grid">${filtered
      .map((item) => {
        const checked = storage.isChecked("sideQuests", item.id);
        return `
          <div class="collectible-card ${checked ? "checked" : ""}" data-toggle-category="sideQuests" data-toggle-id="${item.id}" id="card-${item.id}">
            <input type="checkbox" class="step-checkbox" ${checked ? "checked" : ""} aria-label="${escapeHtml(item.title)}" />
            <div class="collectible-body">
              <div class="collectible-top-row">
                <span class="badge badge-both">${escapeHtml(item.categoryLabel)}</span>
                ${getEraBadge(item.era, item.eraLabel)}
              </div>
              <div class="collectible-title">${escapeHtml(item.title)}</div>
              <div class="collectible-req">📍 ${escapeHtml(item.location)} · 조건: ${escapeHtml(item.requirement)}</div>
              <div class="collectible-desc">${escapeHtml(item.description)}</div>
            </div>
          </div>
        `;
      })
      .join("")}</div>`;
  }
}

// ============================================================================
// 3. 오카리나 악보 & 연주 스튜디오 탭 렌더링
// ============================================================================
function renderSongsTab() {
  const grid = document.getElementById("songs-cards-grid");
  const bonusGrid = document.getElementById("bonus-songs-grid");
  if (!grid || !bonusGrid) return;

  const q = state.searchQuery.trim().toLowerCase();

  const filteredSongs = songs.filter((song) => {
    const checked = storage.isChecked("songs", song.id);
    if (state.eraFilter !== "all" && song.era !== state.eraFilter) return false;
    if (state.regionFilter !== "all" && song.categoryLabel !== state.regionFilter) return false;
    if (state.statusFilter === "unchecked" && checked) return false;
    if (state.statusFilter === "checked" && !checked) return false;
    if (q) {
      const text = `${song.name} ${song.englishName} ${song.location} ${song.teacher} ${song.usage} ${song.switch2Tip}`.toLowerCase();
      if (!text.includes(q)) return false;
    }
    return true;
  });

  if (filteredSongs.length === 0) {
    grid.innerHTML = `<div class="empty-state">조건에 일치하는 오카리나 악보가 없습니다.</div>`;
  } else {
    grid.innerHTML = filteredSongs
      .map((song) => {
        const checked = storage.isChecked("songs", song.id);
        const notesHtml = song.buttons
          .map((btnKey, idx) => renderNoteToken(btnKey, `song-note-${song.id}-${idx}`))
          .join("");

        return `
          <article class="song-card ${checked ? "checked" : ""}" id="card-${song.id}">
            <div class="song-card-header">
              <div>
                <div style="display:flex; gap:0.4rem; align-items:center; margin-bottom:0.25rem;">
                  <span class="badge ${song.category === "warp" ? "badge-adult" : "badge-both"}">${escapeHtml(song.categoryLabel)}</span>
                  ${getEraBadge(song.era)}
                </div>
                <h3 class="song-name">${song.number}. ${escapeHtml(song.name)}</h3>
                <div class="song-en">${escapeHtml(song.englishName)}</div>
              </div>
              <label style="display:flex; align-items:center; gap:0.35rem; font-size:0.8rem; cursor:pointer; color:var(--text-secondary);">
                <input type="checkbox" class="step-checkbox" data-toggle-category="songs" data-toggle-id="${song.id}" ${checked ? "checked" : ""} />
                <span>습득 완료</span>
              </label>
            </div>
            <div class="song-notes-strip">
              ${notesHtml}
            </div>
            <div class="song-meta">
              <div><strong>📍 습득 장소:</strong> ${escapeHtml(song.location)} (${escapeHtml(song.teacher)})</div>
              <div><strong>✨ 주요 효과:</strong> ${escapeHtml(song.usage)}</div>
              <div style="color: var(--goron-amber);"><strong>🎮 Switch 2 팁:</strong> ${escapeHtml(song.switch2Tip)}</div>
            </div>
            <div class="song-actions">
              <button type="button" class="btn btn-gold" data-play-song="${song.id}" id="play-btn-${song.id}">
                ▶ 멜로디 듣기
              </button>
              <button type="button" class="btn" data-load-to-studio="${song.id}">
                스튜디오에 입력
              </button>
            </div>
          </article>
        `;
      })
      .join("");
  }

  bonusGrid.innerHTML = bonusSongs
    .map(
      (b) => `
      <div class="remake-feature-card">
        <h3>🎵 ${escapeHtml(b.name)}</h3>
        <p style="margin-bottom:0.4rem;"><strong>📍 위치:</strong> ${escapeHtml(b.location)}</p>
        <p style="margin-bottom:0.4rem;">${escapeHtml(b.description)}</p>
        <p style="color:var(--gold-primary);"><strong>💡 추천 멜로디 / 순서:</strong> ${escapeHtml(b.recommendedMelody)}</p>
      </div>
    `
    )
    .join("");
}

// ============================================================================
// 오카리나 인터랙티브 스튜디오 입력 처리
// ============================================================================
function handleOcarinaPadInput(noteKey) {
  audio.stopSequence();
  audio.playNote(noteKey, 0.38);

  state.ocarinaBuffer.push(noteKey);
  if (state.ocarinaBuffer.length > 8) {
    state.ocarinaBuffer.shift();
  }

  renderOcarinaBuffer();

  const matched = audio.matchSongFromBuffer(state.ocarinaBuffer);
  const banner = document.getElementById("ocarina-recognized-banner");
  if (matched && banner) {
    banner.innerHTML = `✨ 연주 성공: <strong>[${escapeHtml(matched.name)}]</strong> (${escapeHtml(matched.englishName)}) 발동!`;
    setTimeout(() => {
      audio.playSuccessChime();
    }, 320);
  } else if (banner) {
    banner.textContent = "오카리나 버튼(A, ⬆️, ⬇️, ⬅️, ➡️)을 눌러 연주해 보세요.";
  }
}

function renderOcarinaBuffer() {
  const row = document.getElementById("ocarina-played-notes");
  if (!row) return;
  if (state.ocarinaBuffer.length === 0) {
    row.innerHTML = `<span style="color: var(--text-muted); font-size: 0.85rem;">입력된 음표가 여기에 표시됩니다 (최대 8음)</span>`;
    return;
  }
  row.innerHTML = state.ocarinaBuffer.map((k) => renderNoteToken(k)).join("");
}

// ============================================================================
// 전체 화면 리렌더링
// ============================================================================
function renderAll() {
  updateProgressDashboard();
  updateRegionFilterOptions();

  // 탭 활성화 전환
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    const tab = btn.getAttribute("data-tab");
    btn.classList.toggle("active", tab === state.activeTab);
  });

  document.querySelectorAll(".tab-panel").forEach((panel) => {
    const panelTab = panel.getAttribute("data-panel");
    panel.classList.toggle("active", panelTab === state.activeTab);
  });

  // 리메이크 탭에서는 시대/상태 필터가 불필요하므로 숨김 제어
  const filterToolbar = document.getElementById("main-filter-toolbar");
  if (filterToolbar) {
    filterToolbar.style.display = state.activeTab === "remake" ? "none" : "flex";
  }

  if (state.activeTab === "walkthrough") {
    renderWalkthroughTab();
  } else if (state.activeTab === "collectibles") {
    renderCollectiblesTab();
  } else if (state.activeTab === "songs") {
    renderSongsTab();
  }
}

// ============================================================================
// 이벤트 리스너 바인딩
// ============================================================================
function initEvents() {
  // 메인 탭 클릭
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");
      if (targetTab && targetTab !== state.activeTab) {
        state.activeTab = targetTab;
        state.regionFilter = "all";
        renderAll();
      }
    });
  });

  // 수집품 서브탭 클릭
  document.querySelectorAll("[data-collectible-subtab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const sub = btn.getAttribute("data-collectible-subtab");
      if (sub && sub !== state.collectibleSubtab) {
        state.collectibleSubtab = sub;
        state.regionFilter = "all";
        renderAll();
      }
    });
  });

  // 검색창 입력
  const searchInput = document.getElementById("global-search-input");
  const clearBtn = document.getElementById("search-clear-btn");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      if (clearBtn) clearBtn.classList.toggle("visible", state.searchQuery.length > 0);
      renderAll();
    });
  }
  if (clearBtn && searchInput) {
    clearBtn.addEventListener("click", () => {
      state.searchQuery = "";
      searchInput.value = "";
      clearBtn.classList.remove("visible");
      renderAll();
    });
  }

  // 단축키 Ctrl+K / Cmd+K 검색 포커스 및 오카리나 키보드 연주
  window.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (searchInput) searchInput.focus();
      return;
    }

    // 입력 필드에 포커스 중이면 오카리나 키보드 연주 무시
    const activeTag = document.activeElement ? document.activeElement.tagName : "";
    if (activeTag === "INPUT" || activeTag === "SELECT" || activeTag === "TEXTAREA") return;

    if (state.activeTab === "songs") {
      const keyMap = {
        ArrowUp: "UP",
        ArrowDown: "DOWN",
        ArrowLeft: "LEFT",
        ArrowRight: "RIGHT",
        a: "A",
        A: "A",
        " ": "A"
      };
      if (keyMap[e.key]) {
        e.preventDefault();
        handleOcarinaPadInput(keyMap[e.key]);
      }
    }
  });

  // 필터 드롭다운 변경
  const eraSelect = document.getElementById("era-filter-select");
  const regionSelect = document.getElementById("region-filter-select");
  const statusSelect = document.getElementById("status-filter-select");

  if (eraSelect) {
    eraSelect.addEventListener("change", (e) => {
      state.eraFilter = e.target.value;
      renderAll();
    });
  }
  if (regionSelect) {
    regionSelect.addEventListener("change", (e) => {
      state.regionFilter = e.target.value;
      renderAll();
    });
  }
  if (statusSelect) {
    statusSelect.addEventListener("change", (e) => {
      state.statusFilter = e.target.value;
      renderAll();
    });
  }

  // 오카리나 스튜디오 패드 버튼
  document.querySelectorAll("[data-ocarina-key]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const noteKey = btn.getAttribute("data-ocarina-key");
      if (noteKey) handleOcarinaPadInput(noteKey);
    });
  });

  const clearStudioBtn = document.getElementById("ocarina-clear-btn");
  if (clearStudioBtn) {
    clearStudioBtn.addEventListener("click", () => {
      audio.stopSequence();
      state.ocarinaBuffer = [];
      renderOcarinaBuffer();
      const banner = document.getElementById("ocarina-recognized-banner");
      if (banner) banner.textContent = "오카리나 버튼(A, ⬆️, ⬇️, ⬅️, ➡️)을 눌러 연주해 보세요.";
    });
  }

  // 위임 클릭 이벤트 (체크박스 토글, 챕터 접기/펴기, 챕터 일괄 완료, 악보 재생)
  document.body.addEventListener("click", (e) => {
    // 1) 챕터 일괄 완료 버튼
    const batchBtn = e.target.closest("[data-check-all-chapter]");
    if (batchBtn) {
      e.stopPropagation();
      const chId = batchBtn.getAttribute("data-check-all-chapter");
      const ch = chapters.find((c) => c.id === chId);
      if (ch) {
        const stepIds = ch.steps.map((s) => s.id);
        const allDone = stepIds.every((id) => storage.isChecked("steps", id));
        storage.setBatch("steps", stepIds, !allDone);
        renderAll();
      }
      return;
    }

    // 2) 챕터 헤더 접기/펴기
    const chHeader = e.target.closest("[data-chapter-toggle]");
    if (chHeader) {
      const chId = chHeader.getAttribute("data-chapter-toggle");
      if (state.collapsedChapters.has(chId)) {
        state.collapsedChapters.delete(chId);
      } else {
        state.collapsedChapters.add(chId);
      }
      renderWalkthroughTab();
      return;
    }

    // 3) 악보 재생 버튼
    const playBtn = e.target.closest("[data-play-song]");
    if (playBtn) {
      const songId = playBtn.getAttribute("data-play-song");
      const song = songs.find((s) => s.id === songId);
      if (!song) return;

      // 이전 하이라이트 제거
      document.querySelectorAll(".note-token.active-playing").forEach((el) => {
        el.classList.remove("active-playing");
      });

      audio.playSong(song, (noteIdx) => {
        document.querySelectorAll(".note-token.active-playing").forEach((el) => {
          el.classList.remove("active-playing");
        });
        if (noteIdx >= 0) {
          const tokenEl = document.getElementById(`song-note-${song.id}-${noteIdx}`);
          if (tokenEl) tokenEl.classList.add("active-playing");
        }
      });
      return;
    }

    // 4) 스튜디오에 악보 로드
    const loadStudioBtn = e.target.closest("[data-load-to-studio]");
    if (loadStudioBtn) {
      const songId = loadStudioBtn.getAttribute("data-load-to-studio");
      const song = songs.find((s) => s.id === songId);
      if (!song) return;
      state.ocarinaBuffer = [...song.buttons];
      renderOcarinaBuffer();
      const banner = document.getElementById("ocarina-recognized-banner");
      if (banner) {
        banner.innerHTML = `✨ 선택된 악보: <strong>[${escapeHtml(song.name)}]</strong> — 멜로디를 재생합니다!`;
      }
      audio.playSong(song);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // 5) 체크박스 및 카드 토글
    const toggleTarget = e.target.closest("[data-toggle-category]");
    if (toggleTarget) {
      const category = toggleTarget.getAttribute("data-toggle-category");
      const id = toggleTarget.getAttribute("data-toggle-id");
      if (category && id) {
        storage.toggle(category, id);
        renderAll();
      }
    }
  });

  // 진행도 내보내기 (JSON 다운로드)
  const exportBtn = document.getElementById("btn-export-progress");
  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      const dataStr = storage.exportJSON();
      const blob = new Blob([dataStr], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `zelda-oot-switch2-progress-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    });
  }

  // 진행도 불러오기 (JSON 업로드)
  const importBtn = document.getElementById("btn-import-progress");
  const importFileInput = document.getElementById("input-import-file");
  if (importBtn && importFileInput) {
    importBtn.addEventListener("click", () => importFileInput.click());
    importFileInput.addEventListener("change", (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          storage.importJSON(String(reader.result));
          renderAll();
          alert("진행도 데이터를 성공적으로 불러왔습니다!");
        } catch (err) {
          alert("진행도 파일을 불러오지 못했습니다: " + err.message);
        }
      };
      reader.readAsText(file);
      importFileInput.value = "";
    });
  }

  // 진행도 전체 초기화
  const resetBtn = document.getElementById("btn-reset-progress");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("저장된 모든 체크리스트 진행도를 초기화하시겠습니까?")) {
        storage.resetAll();
        renderAll();
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderOcarinaBuffer();
  initEvents();
  renderAll();
});

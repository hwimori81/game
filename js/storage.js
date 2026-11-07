// 스위치 2 젤다의 전설: 시간의 오카리나 (2026) - 진행도 로컬 저장소 관리 모듈

const STORAGE_KEY = "zelda_oot_sw2_progress_v1";

const DEFAULT_STATE = {
  steps: {},       // { "ch01-s1": true, ... }
  skulltulas: {},  // { "gs-001": true, ... }
  heartPieces: {}, // { "hp-01": true, ... }
  songs: {},       // { "song-01": true, ... }
  sideQuests: {},  // { "sq-bottle-1": true, ... }
  updatedAt: null
};

export class ProgressStorage {
  constructor() {
    this.state = this.load();
  }

  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return structuredClone(DEFAULT_STATE);
      const parsed = JSON.parse(raw);
      return {
        steps: parsed.steps || {},
        skulltulas: parsed.skulltulas || {},
        heartPieces: parsed.heartPieces || {},
        songs: parsed.songs || {},
        sideQuests: parsed.sideQuests || {},
        updatedAt: parsed.updatedAt || null
      };
    } catch (err) {
      console.warn("진행도 데이터를 불러오지 못해 초기 상태를 사용합니다:", err);
      return structuredClone(DEFAULT_STATE);
    }
  }

  save() {
    this.state.updatedAt = new Date().toISOString();
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (err) {
      console.warn("진행도 저장 중 오류 발생:", err);
    }
  }

  isChecked(category, id) {
    return Boolean(this.state[category] && this.state[category][id]);
  }

  toggle(category, id) {
    if (!this.state[category]) {
      this.state[category] = {};
    }
    const next = !this.state[category][id];
    if (next) {
      this.state[category][id] = true;
    } else {
      delete this.state[category][id];
    }
    this.save();
    return next;
  }

  setBatch(category, ids, value) {
    if (!this.state[category]) {
      this.state[category] = {};
    }
    for (const id of ids) {
      if (value) {
        this.state[category][id] = true;
      } else {
        delete this.state[category][id];
      }
    }
    this.save();
  }

  getCount(category) {
    if (!this.state[category]) return 0;
    return Object.keys(this.state[category]).length;
  }

  resetAll() {
    this.state = structuredClone(DEFAULT_STATE);
    this.save();
  }

  exportJSON() {
    return JSON.stringify(this.state, null, 2);
  }

  importJSON(jsonStr) {
    const parsed = JSON.parse(jsonStr);
    if (typeof parsed !== "object" || parsed === null) {
      throw new Error("유효하지 않은 진행도 파일 형식입니다.");
    }
    this.state = {
      steps: parsed.steps || {},
      skulltulas: parsed.skulltulas || {},
      heartPieces: parsed.heartPieces || {},
      songs: parsed.songs || {},
      sideQuests: parsed.sideQuests || {},
      updatedAt: new Date().toISOString()
    };
    this.save();
  }
}

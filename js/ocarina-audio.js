// 스위치 2 젤다의 전설: 시간의 오카리나 (2026) - Web Audio API 오카리나 신디사이저 및 연주 엔진

import { OCARINA_NOTES, songs } from "./data/songs.js";

export class OcarinaAudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlayingSequence = false;
    this.abortController = null;
  }

  ensureContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
    return this.ctx;
  }

  /**
   * 단일 오카리나 음 재생 (따뜻한 목관/도자기 오카리나 음색 합성)
   * @param {string} noteKey - "A" | "UP" | "DOWN" | "LEFT" | "RIGHT"
   * @param {number} duration - 초 단위 길이
   */
  playNote(noteKey, duration = 0.42) {
    const ctx = this.ensureContext();
    if (!ctx) return;

    const noteInfo = OCARINA_NOTES[noteKey];
    if (!noteInfo) return;

    const now = ctx.currentTime;
    const freq = noteInfo.freq;

    // 메인 오실레이터 (Sine + Triangle 블렌드로 부드러운 오카리나 배음 형성)
    const oscMain = ctx.createOscillator();
    const oscSub = ctx.createOscillator();
    oscMain.type = "triangle";
    oscSub.type = "sine";
    oscMain.frequency.setValueAtTime(freq, now);
    oscSub.frequency.setValueAtTime(freq * 2, now); // 2차 배음 살짝 추가

    // 비브라토 LFO (오카리나 특유의 은은한 떨림)
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.frequency.setValueAtTime(5.2, now);
    lfoGain.gain.setValueAtTime(3.2, now);
    lfo.connect(lfoGain);
    lfoGain.connect(oscMain.frequency);

    // 로우패스 필터로 날카로운 고역 억제
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1350, now);

    // 엔벨로프 게인
    const mainGain = ctx.createGain();
    const subGain = ctx.createGain();
    subGain.gain.setValueAtTime(0.06, now);

    mainGain.gain.setValueAtTime(0.001, now);
    mainGain.gain.linearRampToValueAtTime(0.28, now + 0.045);
    mainGain.gain.setValueAtTime(0.24, now + Math.max(0.06, duration - 0.08));
    mainGain.gain.exponentialRampToValueAtTime(0.0008, now + duration);

    oscMain.connect(filter);
    oscSub.connect(subGain);
    subGain.connect(filter);
    filter.connect(mainGain);
    mainGain.connect(ctx.destination);

    oscMain.start(now);
    oscSub.start(now);
    lfo.start(now + 0.08);

    oscMain.stop(now + duration + 0.02);
    oscSub.stop(now + duration + 0.02);
    lfo.stop(now + duration + 0.02);
  }

  /**
   * 정답 곡 인식 시 나오는 특유의 성공 효과음 재생
   */
  playSuccessChime() {
    const ctx = this.ensureContext();
    if (!ctx) return;

    const chimeNotes = [587.33, 659.25, 783.99, 1174.66]; // D5 - E5 - G5 - D6
    chimeNotes.forEach((freq, idx) => {
      const now = ctx.currentTime + idx * 0.09;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.16, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.36);
    });
  }

  stopSequence() {
    if (this.abortController) {
      this.abortController.abort();
      this.abortController = null;
    }
    this.isPlayingSequence = false;
  }

  /**
   * 악보 전체 시퀀스 재생 (단계별 시각 콜백 지원)
   */
  async playSong(song, onNoteIndexChange) {
    this.stopSequence();
    this.isPlayingSequence = true;
    const controller = new AbortController();
    this.abortController = controller;

    try {
      for (let i = 0; i < song.buttons.length; i++) {
        if (controller.signal.aborted) break;
        const btn = song.buttons[i];
        const dur = (song.durations && song.durations[i]) || 0.4;
        if (onNoteIndexChange) onNoteIndexChange(i, btn);
        this.playNote(btn, dur);
        await new Promise((resolve) => setTimeout(resolve, dur * 1000 + 70));
      }
    } finally {
      if (!controller.signal.aborted) {
        if (onNoteIndexChange) onNoteIndexChange(-1, null);
        this.isPlayingSequence = false;
      }
    }
  }

  /**
   * 사용자가 입력한 버튼 배열과 일치하는 오카리나 곡 검색
   * @param {string[]} buffer - 최근 입력된 버튼 키 배열
   */
  matchSongFromBuffer(buffer) {
    for (const song of songs) {
      const len = song.buttons.length;
      if (buffer.length >= len) {
        const tail = buffer.slice(buffer.length - len);
        if (tail.every((val, idx) => val === song.buttons[idx])) {
          return song;
        }
      }
    }
    return null;
  }
}

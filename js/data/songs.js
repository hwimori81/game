// 스위치 2 젤다의 전설: 시간의 오카리나 (2026) - 오카리나 악보 및 음계 데이터
// 실제 인게임 오카리나 5음계 (D Dorian / D Minor 기반)
// A = D4 (293.66Hz), DOWN = F4 (349.23Hz), RIGHT = A4 (440.00Hz), LEFT = B4 (493.88Hz), UP = D5 (587.33Hz)

export const OCARINA_NOTES = {
  A: {
    key: "A",
    label: "A",
    switch2Button: "A 버튼 (또는 L/R 트리거 변주)",
    pitchName: "레 (D4)",
    freq: 293.66,
    color: "#3b82f6"
  },
  DOWN: {
    key: "DOWN",
    label: "⬇️",
    switch2Button: "C-⬇️ (우측 스틱 아래 / 방향키 아래)",
    pitchName: "파 (F4)",
    freq: 349.23,
    color: "#eab308"
  },
  RIGHT: {
    key: "RIGHT",
    label: "➡️",
    switch2Button: "C-➡️ (우측 스틱 오른쪽 / 방향키 오른쪽)",
    pitchName: "라 (A4)",
    freq: 440.00,
    color: "#eab308"
  },
  LEFT: {
    key: "LEFT",
    label: "⬅️",
    switch2Button: "C-⬅️ (우측 스틱 왼쪽 / 방향키 왼쪽)",
    pitchName: "시 (B4)",
    freq: 493.88,
    color: "#eab308"
  },
  UP: {
    key: "UP",
    label: "⬆️",
    switch2Button: "C-⬆️ (우측 스틱 위 / 방향키 위)",
    pitchName: "높은 레 (D5)",
    freq: 587.33,
    color: "#eab308"
  }
};

export const songs = [
  {
    id: "song-01",
    number: 1,
    category: "normal",
    categoryLabel: "일반 진행곡",
    name: "젤다의 자장가",
    englishName: "Zelda's Lullaby",
    era: "child",
    location: "하이랄 성 안뜰 (임파에게 습득)",
    teacher: "임파 (Impa)",
    buttons: ["LEFT", "UP", "RIGHT", "LEFT", "UP", "RIGHT"],
    durations: [0.45, 0.25, 0.7, 0.45, 0.25, 0.85],
    usage: "하이랄 왕가의 문양(트라이포스 문양) 위에서 연주하여 잠긴 문 개방, 조라의 강 폭포 개방, 대요정의 샘 소환, 가십 스톤 및 부서진 간판 복구",
    switch2Tip: "스위치 2 리메이크에서는 왕가의 문양 위에 서면 바닥 문양이 은은하게 빛나며 오카리나 연주 힌트 아이콘이 표시됩니다."
  },
  {
    id: "song-02",
    number: 2,
    category: "normal",
    categoryLabel: "일반 진행곡",
    name: "에포나의 노래",
    englishName: "Epona's Song",
    era: "child",
    location: "론론 목장 중앙 목초지",
    teacher: "마론 (Malon)",
    buttons: ["UP", "LEFT", "RIGHT", "UP", "LEFT", "RIGHT"],
    durations: [0.35, 0.35, 0.75, 0.35, 0.35, 0.85],
    usage: "청년기에 에포나 호출(하이랄 평원, 론론 목장, 하이랄 호수, 겔드 계곡), 젖소 앞에서 연주 시 빈 병에 무료로 론론 우유 채우기",
    switch2Tip: "하이랄 성에서 젤다 공주를 만난 직후 바로 론론 목장에 방문해 배워두면, 동굴 속 젖소에게서 초반 회복 아이템인 우유를 쉽게 수급할 수 있습니다."
  },
  {
    id: "song-03",
    number: 3,
    category: "normal",
    categoryLabel: "일반 진행곡",
    name: "사리아의 노래",
    englishName: "Saria's Song",
    era: "child",
    location: "미지의 숲 너머 숲의 성역",
    teacher: "사리아 (Saria)",
    buttons: ["DOWN", "RIGHT", "LEFT", "DOWN", "RIGHT", "LEFT"],
    durations: [0.25, 0.25, 0.55, 0.25, 0.25, 0.75],
    usage: "고론 시티 족장 다루니아의 기분을 풀어주어 고론의 팔찌 획득, 미지의 숲 해골 소년에게 연주하여 하트 조각 획득, 언제든 사리아와 텔레파시 대화",
    switch2Tip: "리메이크에서는 '시간의 실타래(Threads of Time)'가 길 안내를 대신하지만, 사리아의 노래를 연주하면 사리아의 풀 보이스 성우 연기가 담긴 특별 대화를 들을 수 있습니다."
  },
  {
    id: "song-04",
    number: 4,
    category: "normal",
    categoryLabel: "일반 진행곡",
    name: "태양의 노래",
    englishName: "Sun's Song",
    era: "child",
    location: "카카리코 묘지 왕가의 무덤",
    teacher: "작곡가 형제 (샤프 & 플랫)의 비석",
    buttons: ["RIGHT", "DOWN", "UP", "RIGHT", "DOWN", "UP"],
    durations: [0.25, 0.25, 0.65, 0.25, 0.25, 0.8],
    usage: "낮과 밤을 즉시 전환, 리데드(ReDead)와 기브도(Gibdo)를 일정 시간 경직시킴, 큰 요정의 샘에서 생명력·마력 전체 회복 요정 소환",
    switch2Tip: "스위치 2 버전에서는 낮/밤 주기가 원작보다 훨씬 길어졌고 마을 안에서도 시간이 흐릅니다. 침대에서 자거나 태양의 노래를 사용해 황금 스탈튤라 출현 시간(밤)을 즉시 맞추세요."
  },
  {
    id: "song-05",
    number: 5,
    category: "normal",
    categoryLabel: "일반 진행곡",
    name: "시간의 노래",
    englishName: "Song of Time",
    era: "child",
    location: "하이랄 성 해자 (영석 3개 수집 후 이벤트)",
    teacher: "젤다 공주 (Princess Zelda)",
    buttons: ["RIGHT", "A", "DOWN", "RIGHT", "A", "DOWN"],
    durations: [0.5, 0.9, 0.45, 0.5, 0.9, 0.7],
    usage: "시간의 신전 시간의 문 개방, 던전 및 필드 곳곳의 푸른 '시간의 블록(Time Block)' 이동/소멸",
    switch2Tip: "시간의 오카리나 입수와 함께 자동으로 습득합니다. 일부 황금 스탈튤라와 하트 조각은 시간의 블록 뒤에 숨겨져 있습니다."
  },
  {
    id: "song-06",
    number: 6,
    category: "normal",
    categoryLabel: "일반 진행곡",
    name: "폭풍의 노래",
    englishName: "Song of Storms",
    era: "adult",
    location: "카카리코 마을 풍차 오두막 (청년기에 습득 후 소년기에 사용)",
    teacher: "풍차지기 (ぐるぐる / Guru-Guru)",
    buttons: ["A", "DOWN", "UP", "A", "DOWN", "UP"],
    durations: [0.25, 0.25, 0.7, 0.25, 0.25, 0.85],
    usage: "소년기에 풍차 오두막에서 연주하여 우물 바닥 배수, 마법콩 새싹에 비를 내려 루피/요정 획득, 폭풍 반응형 비밀 동굴(Grotto) 개방, 사막의 오아시스 생성",
    switch2Tip: "스위치 2 리메이크에서는 비밀 동굴(Grotto) 입구가 지상에서 육안으로 구분되며, 폭풍의 노래로 여는 구멍은 바람 소용돌이 이펙트가 표시되어 쉽게 구분할 수 있습니다."
  },
  {
    id: "song-07",
    number: 7,
    category: "warp",
    categoryLabel: "신전 워프곡",
    name: "숲의 미뉴에트",
    englishName: "Minuet of Forest",
    era: "adult",
    location: "숲의 성역 (숲의 신전 입구 앞)",
    teacher: "시크 (Sheik)",
    buttons: ["A", "UP", "LEFT", "RIGHT", "LEFT", "RIGHT"],
    durations: [0.35, 0.35, 0.5, 0.3, 0.3, 0.85],
    usage: "언제든 숲의 성역(숲의 신전 앞)으로 즉시 워프",
    switch2Tip: "카카리코 묘지에서 훅샷을 얻은 뒤 미지의 숲을 통과해 숲의 성역에 도착하면 시크가 가르쳐 줍니다."
  },
  {
    id: "song-08",
    number: 8,
    category: "warp",
    categoryLabel: "신전 워프곡",
    name: "불의 볼레로",
    englishName: "Bolero of Fire",
    era: "adult",
    location: "데스마운틴 화구 (불의 신전 입구 앞)",
    teacher: "시크 (Sheik)",
    buttons: ["DOWN", "A", "DOWN", "A", "RIGHT", "DOWN", "RIGHT", "DOWN"],
    durations: [0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.75],
    usage: "언제든 데스마운틴 화구 중앙 제단(불의 신전 앞)으로 즉시 워프",
    switch2Tip: "소년기에도 불의 볼레로를 사용해 화구 안쪽 마법콩 심는 곳으로 바로 이동할 수 있습니다. (리메이크에서는 화구 타이머 대신 몸에 불이 붙는 시각 효과로 열기 한계가 표시됩니다.)"
  },
  {
    id: "song-09",
    number: 9,
    category: "warp",
    categoryLabel: "신전 워프곡",
    name: "물의 세레나데",
    englishName: "Serenade of Water",
    era: "adult",
    location: "얼음 동굴 최심부 (헤비 부츠 상자 획득 시)",
    teacher: "시크 (Sheik)",
    buttons: ["A", "DOWN", "RIGHT", "RIGHT", "LEFT"],
    durations: [0.45, 0.45, 0.45, 0.45, 0.9],
    usage: "언제든 하일리아 호수 중앙 섬(물의 신전 입구 위)으로 즉시 워프",
    switch2Tip: "얼음 동굴에서 푸른 불꽃을 최소 2~3병 챙긴 뒤 이 노래를 배워 두면 조라 킹 해동 및 물의 신전 진입이 매우 빨라집니다."
  },
  {
    id: "song-10",
    number: 10,
    category: "warp",
    categoryLabel: "신전 워프곡",
    name: "영혼의 레퀴엠",
    englishName: "Requiem of Spirit",
    era: "adult",
    location: "사악한 거대사신상 (영혼의 신전 입구 앞)",
    teacher: "시크 (Sheik)",
    buttons: ["A", "DOWN", "A", "RIGHT", "DOWN", "A"],
    durations: [0.45, 0.25, 0.35, 0.45, 0.45, 0.9],
    usage: "언제든 사악한 거대사신상(Evil Desert Colossus / 영혼의 신전 앞)으로 즉시 워프",
    switch2Tip: "청년기에 환영의 사막을 건너 이 노래를 배운 뒤, 시간의 신전으로 돌아가 소년 링크가 되어 영혼의 레퀴엠을 연주해야 영혼의 신전 전반부(은 글러브 획득)를 진행할 수 있습니다."
  },
  {
    id: "song-11",
    number: 11,
    category: "warp",
    categoryLabel: "신전 워프곡",
    name: "어둠의 녹턴",
    englishName: "Nocturne of Shadow",
    era: "adult",
    location: "카카리코 마을 (숲·불·물의 신전 모두 클리어 후 진입 시)",
    teacher: "시크 (Sheik)",
    buttons: ["LEFT", "RIGHT", "RIGHT", "A", "LEFT", "RIGHT", "DOWN"],
    durations: [0.5, 0.4, 0.35, 0.35, 0.35, 0.35, 0.9],
    usage: "언제든 카카리코 묘지 상단 절벽(어둠의 신전 입구 앞)으로 즉시 워프",
    switch2Tip: "어둠의 신전 입구 횃불 24개를 동시에 켜려면 딘의 불꽃이 필수이므로, 어둠의 녹턴으로 워프하기 전에 마력 게이지를 꼭 확인하세요."
  },
  {
    id: "song-12",
    number: 12,
    category: "warp",
    categoryLabel: "신전 워프곡",
    name: "빛의 프렐류드",
    englishName: "Prelude of Light",
    era: "adult",
    location: "시간의 신전 (숲의 신전 클리어 후 방문 시)",
    teacher: "시크 (Sheik)",
    buttons: ["UP", "RIGHT", "UP", "RIGHT", "LEFT", "RIGHT"],
    durations: [0.3, 0.55, 0.3, 0.3, 0.35, 0.85],
    usage: "언제든 시간의 신전으로 즉시 워프 (소년기 ↔ 청년기 시간 이동의 핵심 이동 수단)",
    switch2Tip: "숲의 신전을 클리어한 직후 시간의 신전에 들러 빛의 프렐류드를 배워야 마스터 소드를 꽂아 소년기로 돌아갈 수 있습니다."
  }
];

export const bonusSongs = [
  {
    id: "song-scarecrow",
    name: "허수아비의 노래 (Scarecrow's Song)",
    era: "both",
    location: "하일리아 호수 남쪽 밭 (보오라 & 피에르)",
    description: "소년기에 하일리아 호수의 아랫배 허수아비(보오라) 앞에서 원하는 8음절 멜로디(단, 한 음만 8번 반복하거나 기존 12곡과 겹치면 안 됨)를 들려준 뒤, 청년기에 같은 허수아비에게 똑같은 8음절을 한 번 더 들려주면 활성화됩니다.",
    recommendedMelody: "A ➡️ A ➡️ A ➡️ A ➡️ (기억하기 쉬운 교차 8음 추천)",
    usage: "내비(Navi)가 아무것도 없는 높은 난간이나 허공에서 초록색으로 빛날 때 연주하면 허수아비 피에르가 솟아올라 훅샷/롱샷 타깃이 되어 줍니다. 황금 스탈튤라 및 하트 조각 100% 수집의 필수 요소입니다."
  },
  {
    id: "song-frogs",
    name: "조라의 강 개구리 합창단 (Frog Choir)",
    era: "child",
    location: "조라의 강 통나무 위",
    description: "소년기에 조라의 강 통나무 위에서 오카리나를 꺼내면 물속에서 개구리 5마리가 나옵니다.1) 폭풍의 노래 연주 시 하트 조각 #18 획득, 2) 젤다의 자장가·에포나의 노래·사리아의 노래·태양의 노래·시간의 노래 5곡을 모두 연주해 개구리들을 키운 뒤, 벌레 잡기 미니게임(A → ⬅️ → ➡️ → ⬇️ → ⬅️ → ➡️ → ⬇️ → A → ⬇️ → A → ⬇️ → ➡️ → ⬅️ → A)을 클리어하면 하트 조각 #19를 얻습니다.",
    recommendedMelody: "위 미니게임 고정 시퀀스 (14음절) 순서대로 빠르게 입력",
    usage: "하트 조각 총 2개 및 보라 루피(50루피) 다수 획득"
  }
];

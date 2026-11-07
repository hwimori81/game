// 스위치 2 젤다의 전설: 시간의 오카리나 (2026) - 100% 수집 요소 데이터
// 포함 항목: 하트 조각 36개, 황금 스탈튤라 100마리, 빈 병 4개, 가면 거래, 빅고론도(대장군검), 대요정의 샘 6곳, 스위치 2 전용 신규 아이템

export const heartPieces = [
  // 1. 미지의 숲 (2개)
  {
    id: "hp-01",
    number: 1,
    region: "미지의 숲",
    era: "child",
    eraLabel: "소년기",
    requirement: "사리아의 노래",
    title: "해골 소년(스컬키드)과의 합주",
    description: "코키리의 숲에서 미지의 숲으로 들어간 직후 왼쪽 구역으로 가면 그루터기 위에 해골 소년이 있습니다. 그루터기 위에 서서 '사리아의 노래'를 들려주면 하트 조각을 줍니다."
  },
  {
    id: "hp-02",
    number: 2,
    region: "미지의 숲",
    era: "child",
    eraLabel: "소년기",
    requirement: "오카리나",
    title: "해골 소년 2인조 즉흥 합주 세션",
    description: "미지의 숲 입구에서 오른쪽으로 이동해 사다리를 내려가면 해골 소년 두 명이 있습니다. 오카리나를 꺼내 이들이 부는 음계를 3라운드 연속 똑같이 따라 연주하면 획득합니다."
  },
  // 2. 하이랄 평원 (2개)
  {
    id: "hp-03",
    number: 3,
    region: "하이랄 평원",
    era: "both",
    eraLabel: "공통",
    requirement: "폭탄, 은 비늘(또는 헤비 부츠), 10루피",
    title: "하일리아 호수 입구 앞 비밀 동굴 데크 스크럽",
    description: "하이랄 평원 남서쪽(하일리아 호수 입구 바로 앞) 울타리로 둘러싸인 한가운데에 폭탄을 놓아 비밀 동굴을 엽니다. 데크 스크럽의 씨앗을 방패로 튕겨내 제압한 뒤 10루피에 하트 조각을 구매하고, 물속 바닥으로 잠수해 회수합니다."
  },
  {
    id: "hp-04",
    number: 4,
    region: "하이랄 평원",
    era: "both",
    eraLabel: "공통",
    requirement: "폭탄, 부메랑(또는 헤비 부츠 + 훅샷)",
    title: "겔드 계곡 입구 근처 나무 밑 비밀 동굴",
    description: "하이랄 평원 북서쪽, 겔드 계곡으로 흐르는 강줄기 북쪽의 외딴 나무 옆에 폭탄을 터뜨려 구멍을 엽니다(스위치 2에서는 바닥 균열 표시로 쉽게 식별 가능). 물속 거미줄을 넘어 바닥의 하트 조각을 잠수 또는 부메랑으로 회수합니다."
  },
  // 3. 하이랄 성하마을 (3개)
  {
    id: "hp-05",
    number: 5,
    region: "하이랄 성하마을",
    era: "child",
    eraLabel: "소년기 (밤)",
    requirement: "밤 시간대",
    title: "뒷골목 리처드(흰 강아지) 찾아주기",
    description: "밤에 성하마을 뒷골목 집의 아주머니와 대화한 뒤, 시장 광장 북동쪽 가판대 근처에 있는 흰색 강아지(리처드)에게 다가가 뒤따라오게 한 후 아주머니의 집으로 데려가면 보상으로 받습니다. (스위치 2에서는 강아지에게 말을 걸어 쓰다듬으면 따라옵니다.)"
  },
  {
    id: "hp-06",
    number: 6,
    region: "하이랄 성하마을",
    era: "child",
    eraLabel: "소년기",
    requirement: "30루피",
    title: "폭탄츄 볼링장 랜덤 경품",
    description: "성하마을 서쪽 폭탄츄 볼링장에서 30루피를 내고 3단계를 모두 명중시키면 경품 중 하나로 하트 조각이 나옵니다. (스위치 2에서는 승리할수록 장애물 난이도가 올라가므로 첫 방문 시 바로 노리는 것을 추천합니다.)"
  },
  {
    id: "hp-07",
    number: 7,
    region: "하이랄 성하마을",
    era: "child",
    eraLabel: "소년기 (밤)",
    requirement: "10루피, 진실의 렌즈(권장)",
    title: "보물상자 가게 5연속 선택 승리",
    description: "밤에만 여는 성하마을 보물상자 가게에서 두 상자 중 열쇠가 든 상자를 5방 연속 고르면 마지막 방 상자에서 획득합니다. '진실의 렌즈'를 얻은 뒤 방문하면 상자 속 내용물을 투시해 100% 확률로 한 번에 클리어할 수 있습니다."
  },
  // 4. 론론 목장 (1개)
  {
    id: "hp-08",
    number: 8,
    region: "론론 목장",
    era: "child",
    eraLabel: "소년기",
    requirement: "없음",
    title: "목장 남서쪽 벽돌 탑 창고 상자 퍼즐",
    description: "론론 목장 가장 안쪽 남서쪽 끝에 있는 벽돌 창고에 들어갑니다. 우유 상자들을 당기고 밀어 안쪽 작은 구멍을 드러낸 뒤 기어들어가 둥지 위 하트 조각을 획득합니다."
  },
  // 5. 카카리코 마을 & 묘지 (8개)
  {
    id: "hp-09",
    number: 9,
    region: "카카리코 마을",
    era: "child",
    eraLabel: "소년기",
    requirement: "데스마운틴 등반 (케포라 게보라)",
    title: "임파의 집 지붕 위 (부엉이 활강)",
    description: "데스마운틴 정상에서 부엉이 케포라 게보라의 다리를 잡고 내려오면 임파의 집 지붕 위에 착지합니다. 지붕 오른쪽 난간을 따라 걸어 창문으로 들어가면 젖소 옆의 하트 조각을 얻습니다. (청년기에는 훅샷으로 지붕에 올라가 획득 가능)"
  },
  {
    id: "hp-10",
    number: 10,
    region: "카카리코 마을",
    era: "child",
    eraLabel: "소년기 (밤 18~21시)",
    requirement: "10루피 (평균 50~100루피)",
    title: "담페의 두근두근 무덤 파기 투어",
    description: "소년기 밤 18:00~21:00 사이에 카카리코 묘지의 묘지기 담페에게 말을 걸어 부드러운 흙 패치 위에서 땅을 파게 합니다. (스위치 2 리메이크에서는 담페가 걸어가길 기다리는 대신 직접 원하는 흙 위치로 담페를 유도해 즉시 파낼 수 있도록 개선되었습니다!)"
  },
  {
    id: "hp-11",
    number: 11,
    region: "카카리코 마을",
    era: "both",
    eraLabel: "공통",
    requirement: "태양의 노래",
    title: "카카리코 묘지 리데드 무덤",
    description: "카카리코 묘지 입구 기준으로 위쪽 줄 오른쪽에서 두 번째 무덤을 당겨 엽니다. 안쪽의 리데드 1마리를 처치하고 제단 위에서 '태양의 노래'를 연주하면 보물상자가 나타납니다."
  },
  {
    id: "hp-12",
    number: 12,
    region: "카카리코 마을",
    era: "adult",
    eraLabel: "청년기",
    requirement: "마법콩(소년기 식재) 또는 부메랑",
    title: "카카리코 묘지 상단 절벽 나무 상자",
    description: "소년기에 묘지 왼쪽 구석 부드러운 흙에 마법콩을 심어 두었다면, 청년기에 콩 줄기를 타고 절벽 위로 올라가 나무 상자를 구르기로 부숴 획득합니다. (스위치 2에서는 소년기에 절벽 아래에서 부메랑으로 상자를 맞춘 뒤 부메랑으로 끌어올 수도 있습니다.)"
  },
  {
    id: "hp-13",
    number: 13,
    region: "카카리코 마을",
    era: "adult",
    eraLabel: "청년기",
    requirement: "없음 (담페의 무덤 경유 또는 훅샷)",
    title: "카카리코 풍차 오두막 상단 발판",
    description: "담페의 무덤 경주 후 출구로 나오면 풍차 오두막 상단 난간으로 이어져 바로 주울 수 있습니다. 또는 풍차 안 회전하는 발판에서 청년 링크로 점프/부메랑을 사용해 획득합니다."
  },
  {
    id: "hp-14",
    number: 14,
    region: "카카리코 마을",
    era: "adult",
    eraLabel: "청년기",
    requirement: "훅샷",
    title: "담페의 유령 경주 1분 이내 주파",
    description: "훅샷을 얻은 뒤 담페의 무덤에 다시 들어가 담페의 유령과 한번 더 경주합니다. 코너에서 대각선 구르기와 스위치 2의 수동 점프를 활용해 **1분 00초 이내**에 결승점에 들어오면 획득합니다."
  },
  {
    id: "hp-15",
    number: 15,
    region: "카카리코 마을",
    era: "adult",
    eraLabel: "청년기",
    requirement: "훅샷",
    title: "카카리코 지붕 위의 남자",
    description: "카카리코 마을 사격장/물약 상점 지붕 위로 훅샷을 쏘아 올라간 뒤, 지붕 위에서 경치를 구경하고 있는 남자에게 말을 걸면 하트 조각을 줍니다."
  },
  {
    id: "hp-16",
    number: 16,
    region: "카카리코 마을",
    era: "both",
    eraLabel: "공통",
    requirement: "황금 스탈튤라 토큰 50개",
    title: "스탈튤라의 집 50마리 달성 보상",
    description: "황금 스탈튤라 토큰을 총 50개 모은 뒤 카카리코 마을 스탈튤라의 집에서 저주가 풀린 다섯 번째 아들에게 말을 걸면 보상으로 받습니다."
  },
  // 6. 데스마운틴 & 고론 시티 (4개)
  {
    id: "hp-17",
    number: 17,
    region: "데스마운틴 & 고론 시티",
    era: "child",
    eraLabel: "소년기",
    requirement: "데크의 가지, 폭탄",
    title: "고론 시티 최하층 회전 항아리",
    description: "고론 시티 1층 다루니아의 방 횃불에서 데크의 가지로 불을 옮겨 방 밖의 횃불 4개를 모두 밝히면 거대 고론 항아리가 회전하기 시작합니다. 2층에서 회전하는 항아리 입구로 폭탄을 3번 던져 넣으면 웃는 얼굴 면에서 하트 조각이 튀어나옵니다."
  },
  {
    id: "hp-18",
    number: 18,
    region: "데스마운틴 & 고론 시티",
    era: "both",
    eraLabel: "공통",
    requirement: "마법콩(소년기 식재) 또는 백덤블링",
    title: "도동고의 동굴 입구 위 절벽",
    description: "소년기에 도동고의 동굴 입구 옆 부드러운 흙에 마법콩을 심고, 청년기에 자란 콩 줄기를 타고 올라가 바위 위 하트 조각을 얻습니다. (소년기에도 절벽 위 울타리 끝에서 각도를 맞춰 백덤블링/수동 점프로 바로 내려앉아 획득 가능)"
  },
  {
    id: "hp-19",
    number: 19,
    region: "데스마운틴 & 고론 시티",
    era: "both",
    eraLabel: "공통",
    requirement: "없음",
    title: "데스마운틴 화구 절벽 벽감(니치)",
    description: "데스마운틴 정상(또는 고론 시티)에서 화구로 들어간 뒤, 오른쪽 절벽 가장자리에서 사다리를 타고 아래로 내려가면 절벽 중간 구멍에 하트 조각이 놓여 있습니다."
  },
  {
    id: "hp-20",
    number: 20,
    region: "데스마운틴 & 고론 시티",
    era: "adult",
    eraLabel: "청년기",
    requirement: "마법콩(소년기 식재) + 불의 볼레로",
    title: "데스마운틴 화구 중앙 화산봉 꼭대기",
    description: "불의 볼레로를 배운 뒤 소년기로 돌아가 화구 워프 지점 바로 앞 흙에 마법콩을 심습니다. 다시 청년기로 와서 콩 줄기를 타고 솟아오르는 두 개의 화산 기둥 중 높은 기둥 꼭대기에 내려 획득합니다."
  },
  // 7. 조라의 강·마을·샘 (6개)
  {
    id: "hp-21",
    number: 21,
    region: "조라의 강 & 마을",
    era: "child",
    eraLabel: "소년기",
    requirement: "꼬꼬 (또는 청년기 호버 부츠)",
    title: "조라의 강 입구 근처 원형 기둥 위",
    description: "조라의 강 입구 근처에 있는 흰색 꼬꼬를 들고 강 중류의 좁은 길을 따라 올라간 뒤, 절벽 끝에서 꼬꼬를 잡고 활강하여 강 한가운데 솟은 기둥 위 하트 조각에 착지합니다."
  },
  {
    id: "hp-22",
    number: 22,
    region: "조라의 강 & 마을",
    era: "child",
    eraLabel: "소년기",
    requirement: "꼬꼬 (또는 청년기 메가톤 해머 + 호버 부츠)",
    title: "조라의 강 폭포 옆 높은 절벽",
    description: "꼬꼬를 들고 조라의 마을로 들어가는 폭포 앞 플랫폼까지 올라간 뒤, 남동쪽 절벽 위 사다리가 있는 선반으로 활강해 올라가 획득합니다."
  },
  {
    id: "hp-23",
    number: 23,
    region: "조라의 강 & 마을",
    era: "child",
    eraLabel: "소년기",
    requirement: "폭풍의 노래",
    title: "조라의 강 개구리 합창단 #1 (폭풍의 노래)",
    description: "조라의 강 중류 물속 통나무 위에 서서 오카리나를 꺼내 개구리 5마리를 부른 뒤 '폭풍의 노래(A ⬇️ ⬆️ A ⬇️ ⬆️)'를 연주하면 즉시 하트 조각을 줍니다."
  },
  {
    id: "hp-24",
    number: 24,
    region: "조라의 강 & 마을",
    era: "child",
    eraLabel: "소년기",
    requirement: "일반 오카리나 5곡 모두 습득",
    title: "조라의 강 개구리 합창단 #2 (벌레 잡기 게임)",
    description: "개구리들에게 젤다의 자장가, 에포나의 노래, 사리아의 노래, 태양의 노래, 시간의 노래를 모두 들려주어 5마리를 전부 크게 키웁니다. 이후 다시 오카리나를 꺼내 나비가 앉은 개구리에 해당하는 음(A → ⬅️ → ➡️ → ⬇️ → ⬅️ → ➡️ → ⬇️ → A → ⬇️ → A → ⬇️ → ➡️ → ⬅️ → A)을 제한 시간 내에 연주하면 획득합니다."
  },
  {
    id: "hp-25",
    number: 25,
    region: "조라의 강 & 마을",
    era: "child",
    eraLabel: "소년기",
    requirement: "데크의 가지",
    title: "조라의 마을 폭포 뒤 횃불 4개 점화",
    description: "조라의 마을 상점 옆 횃불에서 데크의 가지에 불을 붙여, 계단 아래·얕은 물가·폭포 뒤쪽의 꺼진 횃불 4개를 제한 시간 내에 순서대로 모두 켜면 폭포 뒤쪽에 큰 보물상자가 나타납니다."
  },
  {
    id: "hp-26",
    number: 26,
    region: "조라의 샘",
    era: "adult",
    eraLabel: "청년기",
    requirement: "빈 병 (푸른 불꽃)",
    title: "얼음 동굴 내부 붉은 얼음 해동",
    description: "조라의 샘 얼음 동굴에서 푸른 불꽃을 병에 담은 뒤, 나침반이 있는 남쪽 방의 붉은 얼음을 녹여 획득합니다."
  },
  {
    id: "hp-27",
    number: 27,
    region: "조라의 샘",
    era: "adult",
    eraLabel: "청년기",
    requirement: "없음",
    title: "조라의 샘 빙산 발판 위",
    description: "청년기에 조라의 샘에서 얼음 동굴로 건너가는 유빙 발판들 중 동쪽 끝에 떠 있는 작은 유빙 위에 놓여 있습니다."
  },
  {
    id: "hp-28",
    number: 28,
    region: "조라의 샘",
    era: "adult",
    eraLabel: "청년기",
    requirement: "조라의 옷, 헤비 부츠",
    title: "조라의 샘 호수 가장 깊은 바닥",
    description: "조라의 옷과 헤비 부츠를 착용하고 조라의 샘 물속 가장 깊은 바닥으로 내려가면 리치(거머리)들이 지키는 바닥 한가운데에 하트 조각이 있습니다."
  },
  // 8. 하일리아 호수 (3개)
  {
    id: "hp-29",
    number: 29,
    region: "하일리아 호수",
    era: "child",
    eraLabel: "소년기",
    requirement: "20루피",
    title: "하일리아 호수 낚시터 대어(10파운드 이상) 낚기",
    description: "소년기에 하일리아 호수 낚시터에서 가장 깊은 중앙 통나무 근처의 가장 큰 물고기(10파운드 이상)를 낚아 주인에게 보여주면 보상으로 하트 조각을 받습니다."
  },
  {
    id: "hp-30",
    number: 30,
    region: "하일리아 호수",
    era: "adult",
    eraLabel: "청년기",
    requirement: "마법콩(소년기 식재) 또는 허수아비의 노래 + 훅샷",
    title: "하일리아 호수 연구소 지붕 전망대 위",
    description: "소년기에 호수 연구소 옆 흙에 마법콩을 심어 두고 청년기에 타고 올라가거나, 연구소 위쪽에서 '허수아비의 노래'를 불러 훅샷으로 지붕 위로 올라간 뒤 사다리를 타고 전망대 꼭대기에 오르면 있습니다."
  },
  {
    id: "hp-31",
    number: 31,
    region: "하일리아 호수",
    era: "adult",
    eraLabel: "청년기",
    requirement: "금 비늘 (성인기 낚시터 보상)",
    title: "호수 연구소 수조 바닥 잠수 (수심 15m)",
    description: "청년기에 낚시터에서 대어를 낚아 '금 비늘(잠수 시간 8초)'을 얻은 뒤, 호수 연구소 안 수조 바닥 끝까지 맨몸 잠수(헤비 부츠 착용 시 무효!)로 닿아 바닥을 찍고 올라와 박사에게 말을 걸면 줍니다."
  },
  // 9. 겔드 계곡·요새·사막 (5개)
  {
    id: "hp-32",
    number: 32,
    region: "겔드 계곡",
    era: "child",
    eraLabel: "소년기",
    requirement: "없음 (꼬꼬 활강)",
    title: "겔드 계곡 폭포 뒤 동굴 사다리 위",
    description: "겔드 계곡 입구에서 꼬꼬를 잡고 계곡 북쪽 큰 폭포 쪽으로 뛰어내린 뒤, 폭포 물줄기 뒤의 숨겨진 통로로 헤엄쳐 들어가 사다리를 올라가면 획득합니다."
  },
  {
    id: "hp-33",
    number: 33,
    region: "겔드 계곡",
    era: "child",
    eraLabel: "소년기",
    requirement: "꼬꼬 (또는 청년기 마법콩/롱샷)",
    title: "겔드 계곡 절벽 아래 나무 상자 속",
    description: "꼬꼬를 잡고 겔드 계곡 남동쪽 절벽 중간 선반에 있는 나무 상자 쪽으로 활강해 내려앉은 뒤, 구르기로 나무 상자를 부수면 안에 들어 있습니다."
  },
  {
    id: "hp-34",
    number: 34,
    region: "겔드의 요새",
    era: "adult",
    eraLabel: "청년기",
    requirement: "허수아비의 노래 + 훅샷(또는 호버 부츠)",
    title: "겔드의 요새 최상층 지붕 위 보물상자",
    description: "겔드의 요새 가장 높은 곳으로 올라간 뒤 북쪽 큰 보물상자가 보이는 맞은편 난간에서 '허수아비의 노래'를 연주해 피에르를 부르고, 훅샷으로 건너가 상자를 엽니다."
  },
  {
    id: "hp-35",
    number: 35,
    region: "겔드의 요새",
    era: "adult",
    eraLabel: "청년기",
    requirement: "에포나, 요정의 활, 20루피",
    title: "기마 양궁장 1,000점 이상 달성",
    description: "에포나를 타고 겔드의 요새 동쪽 기마 양궁장으로 가서 20루피를 내고 미니게임에 도전합니다. 과녁과 항아리를 맞춰 **1,000점 이상**을 기록하면 하트 조각을 얻습니다(1,500점 달성 시 최대 화살통 추가 보상)."
  },
  {
    id: "hp-36",
    number: 36,
    region: "사악한 거대사신상",
    era: "adult",
    eraLabel: "청년기",
    requirement: "마법콩(소년기 식재) + 영혼의 레퀴엠",
    title: "사악한 거대사신상 돌 아치 꼭대기",
    description: "소년기에 영혼의 레퀴엠으로 사신상에 워프해 신전 입구 오른쪽 흙에 마법콩을 심습니다. 다시 청년기로 돌아와 움직이는 마법콩 잎사귀를 타고 사막 상공을 날아 중앙 돌 아치 위에 내려앉아 마지막 36번째 하트 조각을 획득합니다!"
  }
];

// 황금 스탈튤라 100마리 전체 데이터 (지역별·던전별 완비)
export const goldSkulltulas = [
  // [A] 코키리의 숲 (3마리)
  { id: "gs-001", number: 1, region: "코키리의 숲", category: "field", era: "child", condition: "밤 시간대", title: "쌍둥이 자매의 집 뒤편", description: "소년기 밤에 코키리 상점 남동쪽에 있는 쌍둥이 자매의 집 뒤편 외벽에 붙어 있습니다." },
  { id: "gs-002", number: 2, region: "코키리의 숲", category: "field", era: "child", condition: "빈 병 (벌레)", title: "코키리 상점 옆 부드러운 흙", description: "코키리 상점 바로 오른쪽의 부드러운 흙 패치에 빈 병에 담은 벌레를 풀어주면 땅속에서 튀어나옵니다." },
  { id: "gs-003", number: 3, region: "코키리의 숲", category: "field", era: "adult", condition: "밤 시간대, 훅샷", title: "미도의 집 지붕 위", description: "청년기 밤에 미도의 집 정면 지붕 양옆에 숨어 있습니다. 훅샷으로 직접 타격해 토큰을 회수합니다." },

  // [B] 데크나무님 속 (4마리)
  { id: "gs-004", number: 4, region: "데크나무님 속", category: "dungeon", era: "child", condition: "요정의 새총", title: "3F 나침반 방 구석", description: "3층 나침반이 있는 방의 가장 안쪽 플랫폼 바위 벽면에 붙어 있습니다." },
  { id: "gs-005", number: 5, region: "데크나무님 속", category: "dungeon", era: "child", condition: "없음", title: "B1 수로 격자 철망 위", description: "1층 거미줄을 뚫고 떨어진 지하 1층(B1) 물가 옆 하수구 철망에 붙어 있습니다." },
  { id: "gs-006", number: 6, region: "데크나무님 속", category: "dungeon", era: "child", condition: "요정의 새총", title: "B1 덩굴 벽면", description: "지하 1층에서 위로 올라가는 덩굴 벽면에 붙어 있습니다. 새총으로 잡고 덩굴을 올라가 회수합니다." },
  { id: "gs-007", number: 7, region: "데크나무님 속", category: "dungeon", era: "child", condition: "스위치 2 완화 적용", title: "B1 거미줄 방 안쪽 비밀방", description: "지하 1층 횃불로 거미줄을 태우는 방의 오른쪽 벽 뒤 방입니다. (스위치 2 리메이크에서는 폭탄/부메랑 없이 첫 방문에 바로 획득 가능하도록 변경되었습니다!)" },

  // [C] 미지의 숲 & 숲의 성역 (4마리)
  { id: "gs-008", number: 8, region: "미지의 숲", category: "field", era: "child", condition: "빈 병 (벌레)", title: "미지의 숲 서쪽(해골 소년 아래) 흙", description: "입구에서 왼쪽 → 왼쪽으로 이동한 다리 밑 구역의 부드러운 흙에 벌레를 풀어 잡습니다." },
  { id: "gs-009", number: 9, region: "미지의 숲", category: "field", era: "child", condition: "빈 병 (벌레)", title: "숲의 스테이지 앞 부드러운 흙", description: "입구에서 오른쪽 → 왼쪽 → 오른쪽 → 왼쪽 → 왼쪽으로 간 구역의 흙에 벌레를 풀어 잡습니다. (청년기 전에 소년기에 미리 마법콩도 함께 심어두세요!)" },
  { id: "gs-010", number: 10, region: "미지의 숲", category: "field", era: "adult", condition: "밤, 마법콩(소년기 식재)", title: "숲의 스테이지 위 높은 난간", description: "소년기에 심어둔 마법콩 줄기를 청년기 밤에 타고 올라가 높은 절벽 위에서 처치합니다." },
  { id: "gs-011", number: 11, region: "미지의 숲", category: "field", era: "adult", condition: "밤 시간대, 훅샷", title: "숲의 성역 미로 동쪽 벽", description: "청년기 밤에 숲의 성역 계단 위로 올라간 뒤 동쪽 높은 외벽에 붙은 스탈튤라를 훅샷으로 잡습니다." },

  // [D] 하이랄 평원 (2마리)
  { id: "gs-012", number: 12, region: "하이랄 평원", category: "field", era: "both", condition: "폭탄, 부메랑/훅샷", title: "카카리코 마을 입구 앞 나무 밑 동굴", description: "카카리코 마을 계단 바로 남쪽 나무 옆에 폭탄을 터뜨려 구멍에 들어간 뒤 거대 거미줄 뒤의 황금 스탈튤라를 잡습니다." },
  { id: "gs-013", number: 13, region: "하이랄 평원", category: "field", era: "both", condition: "폭탄, 딘의 불꽃/불의 화살, 부메랑/훅샷", title: "겔드 계곡 입구 돌기둥 원형 동굴", description: "겔드 계곡 다리 동쪽의 작은 돌들이 원형으로 둘러싼 곳에 폭탄을 놓아 구멍을 엽니다. 안쪽 거미줄과 젖소 방 위쪽 벽면을 딘의 불꽃으로 태워 숨겨진 황금 스탈튤라를 잡습니다." },

  // [E] 하이랄 성 & 성하마을 (4마리)
  { id: "gs-014", number: 14, region: "하이랄 성 & 성하마을", category: "field", era: "child", condition: "구르기", title: "보초병의 방 나무 상자", description: "성하마을 입구 바로 오른쪽 보초병의 방 구석에 있는 나무 상자를 앞구르기로 부수면 나옵니다." },
  { id: "gs-015", number: 15, region: "하이랄 성 & 성하마을", category: "field", era: "child", condition: "구르기", title: "하이랄 성 입구 첫 나무", description: "하이랄 성 정문을 지나 마론을 만났던 덩굴 앞의 첫 번째 나무에 앞구르기 박치기를 하면 떨어집니다." },
  { id: "gs-016", number: 16, region: "하이랄 성 & 성하마을", category: "field", era: "child", condition: "폭풍의 노래, 폭탄, 부메랑", title: "하이랄 성 해자 모퉁이 나무 옆 비밀 동굴", description: "하이랄 성 정원 해자 바깥쪽 북서쪽 나무 옆에서 '폭풍의 노래'를 연주해 구멍을 엽니다. 지하 방의 가짜 벽을 폭탄으로 부수고 안쪽 벽의 스탈튤라를 잡습니다." },
  { id: "gs-017", number: 17, region: "하이랄 성 & 성하마을", category: "field", era: "adult", condition: "훅샷", title: "가논의 성 입구 무너진 아치 뒤", description: "청년기에 가논의 성으로 가는 다리 입구 돌 아치 기둥 뒤편에 붙어 있습니다. 훅샷으로 회수합니다." },

  // [F] 론론 목장 (4마리)
  { id: "gs-018", number: 18, region: "론론 목장", category: "field", era: "child", condition: "구르기", title: "목초지 북동쪽 나무", description: "론론 목장 말 우리 오른쪽의 외딴 나무에 앞구르기 박치기를 하면 떨어집니다." },
  { id: "gs-019", number: 19, region: "론론 목장", category: "field", era: "child", condition: "밤 시간대", title: "말 우리 뒤편 판자 울타리", description: "소년기 밤에 중앙 목초지 바깥쪽 북쪽 나무 판자 벽에 붙어 있습니다." },
  { id: "gs-020", number: 20, region: "론론 목장", category: "field", era: "child", condition: "밤 시간대, 부메랑", title: "탈론의 집 외벽 창문 위", description: "소년기 밤에 입구 왼쪽 건물 창문 위 외벽에 있습니다. 부메랑으로 잡고 회수합니다." },
  { id: "gs-021", number: 21, region: "론론 목장", category: "field", era: "child", condition: "밤 시간대, 부메랑", title: "목장 남서쪽 외곽 돌담", description: "소년기 밤에 벽돌 창고 북쪽의 높은 외곽 돌담 벽면에 붙어 있습니다. 부메랑으로 회수합니다." },

  // [G] 카카리코 마을 & 묘지 (8마리)
  { id: "gs-022", number: 22, region: "카카리코 마을", category: "field", era: "child", condition: "구르기", title: "마을 입구 나무", description: "카카리코 마을에 들어서자마자 보이는 정면 나무에 앞구르기 박치기를 하면 떨어집니다." },
  { id: "gs-023", number: 23, region: "카카리코 마을", category: "field", era: "child", condition: "밤 시간대", title: "스탈튤라의 집 외벽", description: "소년기 밤에 스탈튤라의 집 남쪽 외벽에 붙어 있습니다." },
  { id: "gs-024", number: 24, region: "카카리코 마을", category: "field", era: "child", condition: "밤 시간대", title: "공사 중인 건물 벽돌 더미", description: "소년기 밤에 마을 중앙 공사장(훗날 사격장)의 벽돌 더미에 붙어 있습니다." },
  { id: "gs-025", number: 25, region: "카카리코 마을", category: "field", era: "child", condition: "밤 시간대", title: "바자회/보초소 옆 집 외벽", description: "소년기 밤에 데스마운틴 입구 계단 왼쪽 집 외벽에 붙어 있습니다." },
  { id: "gs-026", number: 26, region: "카카리코 마을", category: "field", era: "child", condition: "밤 시간대", title: "높은 망루 사다리", description: "소년기 밤에 마을 남동쪽 높은 나무 망루 사다리 중간에 붙어 있습니다. 새총으로 맞히고 올라갑니다." },
  { id: "gs-027", number: 27, region: "카카리코 마을", category: "field", era: "adult", condition: "밤 시간대, 훅샷", title: "임파의 집 지붕 위 외벽", description: "청년기 밤에 사격장 지붕에서 임파의 집 지붕으로 훅샷을 쏴 올라간 뒤 옆 벽면에서 잡습니다." },
  { id: "gs-028", number: 28, region: "카카리코 마을", category: "field", era: "child", condition: "빈 병 (벌레)", title: "카카리코 묘지 부드러운 흙", description: "묘지 왼쪽 아래 부드러운 흙에 벌레를 풀어 잡습니다." },
  { id: "gs-029", number: 29, region: "카카리코 마을", category: "field", era: "child", condition: "밤 시간대, 부메랑", title: "카카리코 묘지 남동쪽 벽면", description: "소년기 밤에 묘지 입구 오른쪽의 높은 돌담 벽에 붙어 있습니다. 부메랑으로 회수합니다." },

  // [H] 데스마운틴·고론 시티·화구 (8마리)
  { id: "gs-030", number: 30, region: "데스마운틴 & 고론 시티", category: "field", era: "both", condition: "폭탄", title: "데스마운틴 등산로 입구 오른쪽 가짜 벽", description: "등산로 초입 오른쪽의 색이 다른 벽을 폭탄으로 터뜨리면 안에 숨어 있습니다." },
  { id: "gs-031", number: 31, region: "데스마운틴 & 고론 시티", category: "field", era: "child", condition: "빈 병 (벌레)", title: "도동고의 동굴 입구 앞 부드러운 흙", description: "도동고의 동굴 바로 앞 흙 패치에 벌레를 풀어 잡습니다." },
  { id: "gs-032", number: 32, region: "데스마운틴 & 고론 시티", category: "field", era: "adult", condition: "밤 시간대, 메가톤 해머", title: "도동고의 동굴 위쪽 폭탄꽃 언덕 바위 밑", description: "청년기 밤에 도동고의 동굴 위쪽 폭탄꽃이 있던 자리를 막고 있는 붉은 바위를 메가톤 해머로 부수면 나옵니다." },
  { id: "gs-033", number: 33, region: "데스마운틴 & 고론 시티", category: "field", era: "adult", condition: "밤 시간대, 메가톤 해머", title: "등산로 낙석 구간 붉은 바위 밑", description: "청년기 밤에 데스마운틴 정상으로 올라가는 불타는 낙석 구간의 붉은 바위를 메가톤 해머로 깨면 나옵니다." },
  { id: "gs-034", number: 34, region: "데스마운틴 & 고론 시티", category: "field", era: "child", condition: "폭탄", title: "고론 시티 최상층 바위 미로 끝 상자", description: "고론 시티 최상층 북동쪽 방에서 바위들을 폭탄으로 깨고 끝까지 들어가 나무 상자를 구르기로 부수면 나옵니다." },
  { id: "gs-035", number: 35, region: "데스마운틴 & 고론 시티", category: "field", era: "adult", condition: "밤 시간대, 훅샷", title: "고론 시티 중앙 매달린 플랫폼 뒷면", description: "청년기 밤에 고론 시티 최상층 밧줄을 건너 중앙 돔 구조물 뒤편에 붙은 스탈튤라를 훅샷으로 잡습니다." },
  { id: "gs-036", number: 36, region: "데스마운틴 & 고론 시티", category: "field", era: "child", condition: "구르기", title: "데스마운틴 화구 입구 나무 상자", description: "데스마운틴 정상에서 화구로 들어간 직후 바로 앞에 있는 나무 상자를 구르기로 깨면 나옵니다." },
  { id: "gs-037", number: 37, region: "데스마운틴 & 고론 시티", category: "field", era: "child", condition: "불의 볼레로, 빈 병 (벌레)", title: "데스마운틴 화구 워프 지점 옆 흙", description: "소년기에 불의 볼레로로 화구 중앙에 워프한 뒤 바로 앞 부드러운 흙에 벌레를 풀어 잡습니다." },

  // [I] 도동고의 동굴 (5마리)
  { id: "gs-038", number: 38, region: "도동고의 동굴", category: "dungeon", era: "both", condition: "폭탄 (베이비 도동고 유인)", title: "1F 동쪽 복도 베이비 도동고 비밀방", description: "1층 동쪽 복도에서 베이비 도동고를 금 간 벽 앞까지 유인해 터뜨린 뒤 안쪽 방에서 잡습니다." },
  { id: "gs-039", number: 39, region: "도동고의 동굴", category: "dungeon", era: "both", condition: "폭탄, 새총/부메랑", title: "2F 해골 바위 방 덩굴 위", description: "1층 동쪽 복도 끝에서 계단이 있는 방 2층 덩굴 벽면에 붙어 있습니다." },
  { id: "gs-040", number: 40, region: "도동고의 동굴", category: "dungeon", era: "both", condition: "폭탄", title: "1F 북쪽 거대 계단 옆 폭탄 벽", description: "북쪽 거대 계단이 내려오기 전, 계단 왼쪽 아래 폭탄 벽을 터뜨리고 들어가 잡습니다." },
  { id: "gs-041", number: 41, region: "도동고의 동굴", category: "dungeon", era: "both", condition: "부메랑 또는 훅샷", title: "2F 거대 계단 방 상단 덩굴 알코브", description: "거대 계단 꼭대기에서 덩굴 위 벽감에 있는 스탈튤라를 부메랑(소년) 또는 훅샷(청년)으로 회수합니다." },
  { id: "gs-042", number: 42, region: "도동고의 동굴", category: "dungeon", era: "adult", condition: "허수아비의 노래 + 훅샷", title: "1F 동쪽 복도 높은 난간", description: "청년기에 1층 동쪽 베이비 도동고 복도 중간에서 내비가 초록색으로 빛나는 높은 난간을 향해 '허수아비의 노래'를 연주하고 훅샷으로 올라가 잡습니다." },

  // [J] 조라의 강·마을·샘 (8마리)
  { id: "gs-043", number: 43, region: "조라의 강 & 마을", category: "field", era: "child", condition: "구르기", title: "조라의 강 입구 나무", description: "조라의 강 입구 마법콩 장수 근처 나무에 앞구르기 박치기를 하면 떨어집니다." },
  { id: "gs-044", number: 44, region: "조라의 강 & 마을", category: "field", era: "child", condition: "밤 시간대", title: "조라의 강 폭포 아래 사다리", description: "소년기 밤에 조라의 마을 입구 폭포 아래 절벽으로 올라가는 긴 사다리에 붙어 있습니다." },
  { id: "gs-045", number: 45, region: "조라의 강 & 마을", category: "field", era: "adult", condition: "밤 시간대, 훅샷", title: "조라의 강 남서쪽 높은 암벽", description: "청년기 밤에 강 중류 나무다리 위 작은 울타리 위에 올라가 남쪽 높은 암벽의 스탈튤라를 훅샷으로 잡습니다." },
  { id: "gs-046", number: 46, region: "조라의 강 & 마을", category: "field", era: "adult", condition: "밤 시간대, 훅샷", title: "조라의 강 다리 앞 왼쪽 높은 벽", description: "청년기 밤에 조라의 마을 폭포로 가는 나무다리 바로 앞 높은 절벽 위 스탈튤라를 훅샷으로 잡습니다." },
  { id: "gs-047", number: 47, region: "조라의 강 & 마을", category: "field", era: "adult", condition: "밤 시간대, 훅샷", title: "조라의 마을 얼어붙은 폭포 위쪽", description: "청년기 밤에 킹 조라의 방 왼쪽 다이빙 절벽 끝에서 얼어붙은(또는 해빙된) 폭포 옆 벽면을 훅샷으로 쏴 잡습니다." },
  { id: "gs-048", number: 48, region: "조라의 샘", category: "field", era: "child", condition: "구르기", title: "조라의 샘 남동쪽 구석 나무", description: "조라의 샘 대요정의 샘 입구 앞에 있는 나무에 앞구르기 박치기를 하면 떨어집니다." },
  { id: "gs-049", number: 49, region: "조라의 샘", category: "field", era: "child", condition: "밤 시간대, 부메랑", title: "조라의 샘 쓰러진 통나무 끝 벽", description: "소년기 밤에 조라의 샘 남서쪽 물 위 통나무 끝으로 걸어가 벽면의 스탈튤라를 부메랑으로 잡습니다." },
  { id: "gs-050", number: 50, region: "조라의 샘", category: "field", era: "adult", condition: "밤 시간대, 은 글러브", title: "조라의 샘 대요정 앞 거대 회색 바위 아래", description: "청년기 밤에 대요정의 샘 앞 거대한 회색 바위를 '은 글러브'로 들어 던지고 지하 비밀 계단으로 내려가 투명 스탈튤라들을 뚫고 맨 꼭대기에서 잡습니다." },

  // [K] 자부자부님 뱃속 (4마리)
  { id: "gs-051", number: 51, region: "자부자부님 뱃속", category: "dungeon", era: "child", condition: "부메랑", title: "B1 수위 상승 스위치 방 덩굴", description: "스위치를 밟아 물이 차오르는 방의 덩굴 벽면에 붙어 있습니다." },
  { id: "gs-052", number: 52, region: "자부자부님 뱃속", category: "dungeon", era: "child", condition: "부메랑", title: "B1 루토가 떨어진 구멍 방 벽면 #1", description: "루토를 처음 만났던 구멍 아래층 벽면에 두 마리가 나란히 붙어 있습니다(첫 번째)." },
  { id: "gs-053", number: 53, region: "자부자부님 뱃속", category: "dungeon", era: "child", condition: "부메랑", title: "B1 루토가 떨어진 구멍 방 벽면 #2", description: "루토를 처음 만났던 구멍 아래층 벽면의 두 번째 스탈튤라입니다." },
  { id: "gs-054", number: 54, region: "자부자부님 뱃속", category: "dungeon", era: "child", condition: "부메랑", title: "1F 보스방 앞 덩굴 벽면", description: "보스방 바로 전 방에서 나무 상자를 밟고 올라가는 덩굴 벽면에 붙어 있습니다." },

  // [L] 하일리아 호수 (5마리)
  { id: "gs-055", number: 55, region: "하일리아 호수", category: "field", era: "child", condition: "빈 병 (벌레)", title: "호수 연구소 앞 부드러운 흙", description: "호수 연구소 바로 바깥의 부드러운 흙에 벌레를 풀어 잡습니다." },
  { id: "gs-056", number: 56, region: "하일리아 호수", category: "field", era: "child", condition: "밤 시간대, 부메랑", title: "불의 화살 섬 작은 기둥", description: "소년기 밤에 호수 남쪽의 작은 네모난 섬(두 개의 기둥이 있는 곳)으로 헤엄쳐 가 기둥에 붙은 스탈튤라를 잡습니다." },
  { id: "gs-057", number: 57, region: "하일리아 호수", category: "field", era: "child", condition: "밤 시간대, 부메랑", title: "호수 연구소 뒤편 외벽", description: "소년기 밤에 호수 연구소 건물 뒤쪽 벽면에 붙어 있습니다. 부메랑으로 회수합니다." },
  { id: "gs-058", number: 58, region: "하일리아 호수", category: "field", era: "adult", condition: "헤비 부츠, 훅샷", title: "호수 연구소 수조 바닥 나무 상자", description: "청년기에 헤비 부츠를 신고 호수 연구소 실내 수조 바닥으로 가 나무 상자를 구르기로 부수고 훅샷으로 잡습니다." },
  { id: "gs-059", number: 59, region: "하일리아 호수", category: "field", era: "adult", condition: "밤 시간대, 롱샷", title: "물의 신전 위 거대 고목 꼭대기", description: "청년기 밤에 호수 중앙 섬의 말라붙은 거대 나무 나뭇가지 위로 '롱샷'을 쏴 올라가 몸통에서 잡습니다." },

  // [M] 숲의 신전 (5마리)
  { id: "gs-060", number: 60, region: "숲의 신전", category: "dungeon", era: "adult", condition: "훅샷", title: "1F 입구 정원 오른쪽 덩굴 위", description: "신전 첫 방 오른쪽 나무를 타고 올라갈 때 오른쪽 벽면 높은 곳에 붙어 있습니다." },
  { id: "gs-061", number: 61, region: "숲의 신전", category: "dungeon", era: "adult", condition: "훅샷", title: "1F 중앙 홀 북쪽 계단 오른쪽 벽", description: "포우 4자매 이벤트가 나오는 중앙 홀의 북쪽 문 오른쪽 벽면에 있습니다." },
  { id: "gs-062", number: 62, region: "숲의 신전", category: "dungeon", era: "adult", condition: "훅샷", title: "1F 동쪽 정원 북동쪽 아치 기둥 위", description: "우물 스위치로 가는 동쪽 야외 정원에서 가장 안쪽 돌기둥 위 상자 타깃으로 훅샷을 쏴 건너가 잡습니다." },
  { id: "gs-063", number: 63, region: "숲의 신전", category: "dungeon", era: "adult", condition: "훅샷", title: "2F 서쪽 정원 발코니 벽면", description: "파란 포우를 잡은 뒤 비틀린 복도를 펴고 내려가는 서쪽 정원 위쪽 발코니에서 훅샷으로 잡습니다." },
  { id: "gs-064", number: 64, region: "숲의 신전", category: "dungeon", era: "adult", condition: "요정의 활 / 훅샷", title: "B2 지하 회전하는 방 숨겨진 벽감", description: "보스방 직전 지하 회전 방을 돌리다 보면 열리는 작은 골방 안쪽 벽면에 붙어 있습니다." },

  // [N] 불의 신전 (5마리)
  { id: "gs-065", number: 65, region: "불의 신전", category: "dungeon", era: "adult", condition: "시간의 노래, 훅샷", title: "1F 용암 다리 방 시간의 블록 위 방", description: "중앙 용암 다리 방 동쪽의 푸른 시간의 블록 위에서 시간의 노래를 연주해 블록을 옮기고 올라가 라이크라이크 방 벽면에서 잡습니다." },
  { id: "gs-066", number: 66, region: "불의 신전", category: "dungeon", era: "adult", condition: "폭탄", title: "3F 굴러다니는 바위 미로 폭탄 벽", description: "3층 바위 미로 동쪽의 소리가 다른 벽에 폭탄을 놓아 뚫고 들어가 잡습니다." },
  { id: "gs-067", number: 67, region: "불의 신전", category: "dungeon", era: "adult", condition: "허수아비의 노래 + 훅샷", title: "4F 바위 미로 상층 허수아비 승강장 #1", description: "3층 바위 미로 위층에서 내비가 초록색으로 빛나는 난간에서 '허수아비의 노래'를 연주해 훅샷으로 올라간 뒤, 다시 밧줄 플랫폼을 타고 올라간 4층 벽면에서 잡습니다." },
  { id: "gs-068", number: 68, region: "불의 신전", category: "dungeon", era: "adult", condition: "허수아비의 노래 + 훅샷", title: "5F 해골 모양 원형 방 중앙", description: "위 67번 위치에서 문으로 들어가 해골 모양의 높은 원형 방 중앙 구조물 벽면에서 잡습니다." },
  { id: "gs-069", number: 69, region: "불의 신전", category: "dungeon", era: "adult", condition: "메가톤 해머", title: "1F 입구 왼쪽 석상 뒤 미니보스 방 전", description: "입구 로비 계단 왼쪽 석상을 메가톤 해머로 부수고 들어간 첫 번째 방 벽면에 붙어 있습니다." },

  // [O] 얼음 동굴 (3마리)
  { id: "gs-070", number: 70, region: "얼음 동굴", category: "dungeon", era: "adult", condition: "훅샷", title: "회전 얼음 칼날 방 오른쪽 고드름 뒤", description: "은 루피를 모으는 회전 얼음 칼날 방의 동쪽 벽 높은 곳에 붙어 있습니다." },
  { id: "gs-071", number: 71, region: "얼음 동굴", category: "dungeon", era: "adult", condition: "훅샷", title: "나침반 방(하트 조각 방) 벽면", description: "남쪽 나침반과 하트 조각이 있는 방의 얼음 벽면에 붙어 있습니다." },
  { id: "gs-072", number: 72, region: "얼음 동굴", category: "dungeon", era: "adult", condition: "훅샷", title: "얼음 블록 밀기 퍼즐 방 높은 곳", description: "서쪽 얼음 블록을 밀어 은 루피를 모으는 방의 남동쪽 높은 벽에 붙어 있습니다." },

  // [P] 물의 신전 (5마리)
  { id: "gs-073", number: 73, region: "물의 신전", category: "dungeon", era: "adult", condition: "회전베기, 훅샷", title: "1F 남쪽 통로 결정 스위치 철창 방", description: "1층 남쪽 폭탄 바닥을 뚫고 들어간 방에서 철창 앞 결정 스위치를 회전베기로 작동시켜 철창을 열고 동시에 안쪽 스탈튤라를 잡습니다." },
  { id: "gs-074", number: 74, region: "물의 신전", category: "dungeon", era: "adult", condition: "롱샷", title: "중앙 탑 내부 최상단 천장 근처", description: "롱샷을 얻은 뒤 중앙 탑 내부 가장 높은 벽면에 붙은 스탈튤라를 롱샷으로 잡습니다." },
  { id: "gs-075", number: 75, region: "물의 신전", category: "dungeon", era: "adult", condition: "롱샷", title: "3F 서쪽 움직이는 발판 방 오른쪽 벽", description: "다크 링크 방으로 가기 전 움직이는 발판들을 건너는 방의 오른쪽 멀리 있는 벽면을 롱샷으로 쏴 잡습니다." },
  { id: "gs-076", number: 76, region: "물의 신전", category: "dungeon", era: "adult", condition: "롱샷, 헤비 부츠", title: "소용돌이 수로(강) 벽면", description: "롱샷 상자 뒤 시간의 블록을 지우고 내려간 지하 강물 구간에서 오른쪽 벽면에 붙은 스탈튤라를 롱샷으로 잡습니다." },
  { id: "gs-077", number: 77, region: "물의 신전", category: "dungeon", era: "adult", condition: "헤비 부츠, 롱샷", title: "1F 북쪽 굴러떨어지는 바위 폭포", description: "보스 열쇠를 얻으러 가는 북쪽 구역에서 거대한 바위들이 폭포수에서 떨어지는 지점 옆 철창 너머 벽면에 있습니다." },

  // [Q] 우물 바닥 (3마리)
  { id: "gs-078", number: 78, region: "우물 바닥", category: "dungeon", era: "child", condition: "작은 열쇠, 부메랑", title: "중앙 십자로 왼쪽 잠긴 문(블레이드 트랩 방)", description: "우물 중앙 십자로 서쪽의 작은 열쇠 문을 열고 들어가 부메랑으로 벽면의 스탈튤라를 잡습니다." },
  { id: "gs-079", number: 79, region: "우물 바닥", category: "dungeon", era: "child", condition: "작은 열쇠, 진실의 렌즈, 부메랑", title: "중앙 십자로 오른쪽 잠긴 문(보이지 않는 바닥 방)", description: "십자로 동쪽 작은 열쇠 문을 열고 진실의 렌즈로 구멍을 피해 안쪽 벽에서 잡습니다." },
  { id: "gs-080", number: 80, region: "우물 바닥", category: "dungeon", era: "child", condition: "작은 열쇠, 부메랑", title: "북동쪽 거미줄/불박쥐 방 안쪽 라이크라이크 방", description: "우물 북동쪽 작은 열쇠 문을 연 뒤 데크의 가지로 거미줄을 태우며 끝까지 들어가 라이크라이크가 있는 골방에서 잡습니다." },

  // [R] 어둠의 신전 (5마리)
  { id: "gs-081", number: 81, region: "어둠의 신전", category: "dungeon", era: "adult", condition: "롱샷", title: "B2 투명 회전 낫 방 철창 뒤", description: "보이지 않는 거대 낫이 도는 방의 적들을 모두 잡으면 열리는 왼쪽 골방 벽면에 있습니다." },
  { id: "gs-082", number: 82, region: "어둠의 신전", category: "dungeon", era: "adult", condition: "롱샷", title: "B2 떨어지는 가시 천장 방 감옥", description: "가시 천장이 내려오는 방의 철창 감옥 안쪽에 붙어 있습니다." },
  { id: "gs-083", number: 83, region: "어둠의 신전", category: "dungeon", era: "adult", condition: "롱샷", title: "B2 불타는 단일 해골 항아리 방 뒤", description: "거대한 불타는 해골 항아리에 폭탄을 던져 넣는 방의 해골 바로 뒤 벽면에 있습니다." },
  { id: "gs-084", number: 84, region: "어둠의 신전", category: "dungeon", era: "adult", condition: "허수아비의 노래 + 롱샷", title: "B4 명계의 배 선착장 맞은편 난간", description: "명계의 배가 정박해 있는 곳 왼쪽 난간에서 '허수아비의 노래'를 연주해 건너편 높은 곳으로 날아가 잡습니다." },
  { id: "gs-085", number: 85, region: "어둠의 신전", category: "dungeon", era: "adult", condition: "롱샷", title: "B4 회전하는 3개 불타는 해골 항아리 뒤", description: "보스방 직전 좁은 나무다리 건너편 방의 회전하는 3개 해골 기둥 뒤편 벽면에서 잡습니다." },

  // [S] 겔드 계곡·요새·사막 (10마리)
  { id: "gs-086", number: 86, region: "겔드 계곡", category: "field", era: "child", condition: "밤 시간대, 부메랑", title: "겔드 계곡 입구 나무 판자 다리 오른쪽 작은 폭포", description: "소년기 밤에 입구 판자 다리에서 오른쪽 작은 물줄기 벽면을 보면 붙어 있습니다. 부메랑으로 잡습니다." },
  { id: "gs-087", number: 87, region: "겔드 계곡", category: "field", era: "child", condition: "빈 병 (벌레)", title: "겔드 계곡 강가(젖소 옆) 부드러운 흙", description: "소년기에 꼬꼬를 잡고 계곡 바닥 강가로 내려가 젖소 근처의 부드러운 흙에 벌레를 풀어 잡습니다." },
  { id: "gs-088", number: 88, region: "겔드 계곡", category: "field", era: "adult", condition: "밤 시간대, 훅샷", title: "목수들의 텐트 바로 뒤편 암벽", description: "청년기 밤에 다리 건너 목수 텐트 뒤쪽 바위 벽에 붙어 있습니다." },
  { id: "gs-089", number: 89, region: "겔드 계곡", category: "field", era: "adult", condition: "밤 시간대, 훅샷", title: "끊어진 다리 건너편 돌기둥 아치 안쪽", description: "청년기 밤에 다리 서쪽 끝 거대한 바위 기둥 뒤쪽 면에 붙어 있습니다." },
  { id: "gs-090", number: 90, region: "겔드의 요새", category: "field", era: "adult", condition: "밤 시간대, 훅샷", title: "겔드의 요새 북동쪽 높은 벽면", description: "청년기 밤에 요새 중간 지붕으로 올라가 북쪽 높은 바위 벽면에 붙은 스탈튤라를 훅샷으로 잡습니다." },
  { id: "gs-091", number: 91, region: "겔드의 요새", category: "field", era: "adult", condition: "밤 시간대, 에포나, 훅샷", title: "기마 양궁장 북쪽 먼 과녁 기둥", description: "청년기 밤에 기마 양궁장 북쪽 끝에 있는 커다란 나무 과녁에 붙어 있습니다. 훅샷/롱샷으로 회수합니다." },
  { id: "gs-092", number: 92, region: "미라지 사막 & 사신상", category: "field", era: "both", condition: "훅샷 또는 부메랑", title: "미라지 사막 중앙 돌 유적(유령 가이드 건물) 지하", description: "유령 가이드가 나타나는 사막 중앙의 돌 유적 계단으로 내려가 횃불 방 벽면에서 잡습니다." },
  { id: "gs-093", number: 93, region: "미라지 사막 & 사신상", category: "field", era: "child", condition: "영혼의 레퀴엠, 빈 병 (벌레)", title: "사악한 거대사신상 입구 오른쪽 흙", description: "소년기에 영혼의 레퀴엠으로 워프해 신전 입구 오른쪽 부드러운 흙에 벌레를 풀어 잡습니다." },
  { id: "gs-094", number: 94, region: "미라지 사막 & 사신상", category: "field", era: "adult", condition: "밤 시간대, 훅샷", title: "사악한 거대사신상 남동쪽 마른 야자수 위", description: "청년기 밤에 사신상 남쪽 오아시스(폭풍의 노래로 물 채우기 가능) 옆 야자수 꼭대기에서 잡습니다." },
  { id: "gs-095", number: 95, region: "미라지 사막 & 사신상", category: "field", era: "adult", condition: "밤, 마법콩(소년기 식재), 훅샷", title: "사악한 거대사신상 서쪽 바위 언덕 위", description: "청년기 밤에 마법콩 잎사귀를 타고 날아다니다 사신상 남서쪽의 평평한 바위 언덕 위에 내려 잡습니다." },

  // [T] 영혼의 신전 (5마리)
  { id: "gs-096", number: 96, region: "영혼의 신전", category: "dungeon", era: "child", condition: "부메랑", title: "[소년기] 1F 금속 철망(애너비스 방) 건너편", description: "소년기 구간에서 폭탄츄로 바위를 터뜨려 빛을 비춘 뒤 오른쪽 문 안쪽 금속 철망에 붙은 스탈튤라를 부메랑으로 잡습니다." },
  { id: "gs-097", number: 97, region: "영혼의 신전", category: "dungeon", era: "child", condition: "부메랑", title: "[소년기] 1F 은 루피 수집 수직 통로", description: "소년기 덩굴을 타고 올라가며 은 루피 5개를 모으는 수직 방의 최상단 뒤쪽 벽면에 있습니다." },
  { id: "gs-098", number: 98, region: "영혼의 신전", category: "dungeon", era: "child", condition: "없음 (새총/부메랑)", title: "[소년기] 2F 첫 번째 아이언 너클 방 직전 계단", description: "소년기 해골 스위치와 태양 블록 방을 지나 아이언 너클 방으로 올라가는 계단 위 벽면에 있습니다." },
  { id: "gs-099", number: 99, region: "영혼의 신전", category: "dungeon", era: "adult", condition: "시간의 노래, 롱샷", title: "[청년기] 1F 굴러오는 바위 방 시간의 블록 뒤", description: "청년기 구역에서 은 루피와 굴러오는 바위가 있는 방의 푸른 시간의 블록을 '시간의 노래'로 지우면 나타납니다." },
  { id: "gs-100", number: 100, region: "영혼의 신전", category: "dungeon", era: "adult", condition: "허수아비의 노래 + 롱샷", title: "[청년기] 3F 중앙 거대 사신상 홀 북동쪽 높은 난간", description: "중앙 거대 사신상 방 3층에서 '허수아비의 노래'를 연주해 반대편 높은 플랫폼으로 롱샷을 쏴 건너가면 대망의 100번째 황금 스탈튤라를 획득합니다!" }
];

// 주요 서브 퀘스트, 빈 병, 가면 거래, 빅고론도, 대요정의 샘, 스위치 2 신규 요소
export const sideQuests = [
  // 1. 빈 병 4개
  {
    id: "sq-bottle-1",
    category: "bottles",
    categoryLabel: "빈 병 (4개)",
    era: "child",
    eraLabel: "소년기",
    title: "빈 병 #1: 론론 목장 슈퍼 꼬꼬 찾기",
    location: "론론 목장 입구 왼쪽 창고",
    requirement: "10루피",
    description: "탈론을 하이랄 성에서 깨운 뒤 론론 목장 창고에 있는 탈론에게 말을 걸어 30초 안에 일반 꼬꼬들 사이에 섞인 '슈퍼 꼬꼬 3마리'를 찾아내면 첫 번째 빈 병(론론 우유 포함)을 받습니다."
  },
  {
    id: "sq-bottle-2",
    category: "bottles",
    categoryLabel: "빈 병 (4개)",
    era: "child",
    eraLabel: "소년기",
    title: "빈 병 #2: 카카리코 마을 꼬꼬 숙녀(안주)의 꼬꼬 7마리 모으기",
    location: "카카리코 마을 묘지 입구 앞 울타리",
    requirement: "없음",
    description: "낮에 카카리코 마을 곳곳(입구, 데스마운틴 계단 앞, 나무 상자 속, 사다리 위, 지붕 너머 울타리 안 등)에 흩어진 꼬꼬 7마리를 모두 안아 묘지 입구 앞 울타리 안에 던져 넣으면 안주가 두 번째 빈 병을 줍니다."
  },
  {
    id: "sq-bottle-3",
    category: "bottles",
    categoryLabel: "빈 병 (4개)",
    era: "child",
    eraLabel: "소년기",
    title: "빈 병 #3: 하일리아 호수 바닥 '루토의 편지'",
    location: "하일리아 호수 북쪽 수중 지름길 앞",
    requirement: "은 비늘",
    description: "조라의 마을에서 다이빙 게임으로 은 비늘을 얻은 뒤, 수중 통로를 통해 하일리아 호수로 나와 물속에 가라앉은 병을 줍습니다. 조라의 마을 킹 조라에게 편지를 보여주면 빈 병으로 사용할 수 있습니다."
  },
  {
    id: "sq-bottle-4",
    category: "bottles",
    categoryLabel: "빈 병 (4개)",
    era: "adult",
    eraLabel: "청년기",
    title: "빈 병 #4: 하이랄 평원 빅 포우(Big Poe) 10마리 사냥",
    location: "하이랄 평원 전역 & 성하마을 입구 고스트 샵",
    requirement: "에포나, 요정의 활, 빈 병 최소 1개",
    description: "에포나를 타고 하이랄 평원의 특정 지점 10곳(외딴 나무, 표지판, 갈림길, 바위, 개울가 등)을 지나갈 때 나타나는 거대한 유령 '빅 포우'가 도망치기 전에 말 위에서 활을 2발 쏘아 잡고 빈 병에 담습니다. 성하마을 입구 유령 상인에게 10마리(1,000포인트)를 모두 팔면 마지막 네 번째 빈 병을 줍니다."
  },

  // 2. 행복의 가면 상점 거래 (소년기 + 스위치 2 청년기 연동)
  {
    id: "sq-mask-1",
    category: "masks",
    categoryLabel: "행복의 가면 거래",
    era: "child",
    eraLabel: "소년기",
    title: "가면 1단계: 키튼 가면 (Keaton Mask)",
    location: "카카리코 마을 데스마운틴 입구 경비병",
    requirement: "젤다의 편지 전달 완료",
    description: "성하마을 '행복의 가면 상점'에서 키튼 가면을 빌린 뒤, 카카리코 마을 데스마운틴 문 앞 경비병에게 쓰고 말을 걸면 아들에게 주겠다며 15루피에 사갑니다. 상점에 대금을 갚습니다."
  },
  {
    id: "sq-mask-2",
    category: "masks",
    categoryLabel: "행복의 가면 거래",
    era: "child",
    eraLabel: "소년기 (밤)",
    title: "가면 2단계: 해골 가면 (Skull Mask)",
    location: "미지의 숲 서쪽 그루터기 위 해골 소년",
    requirement: "사리아의 노래 연주 경험",
    description: "해골 가면을 빌려 쓰고 미지의 숲 왼쪽 구역의 해골 소년에게 말을 걸면 10루피에 사갑니다(차액 10루피는 본인 부담으로 상점에 20루피 납부). 착용 중에는 키스(박쥐)가 공격하지 않으며, 숲의 스테이지에서 착용 시 데크의 가지 소지량이 늘어납니다."
  },
  {
    id: "sq-mask-3",
    category: "masks",
    categoryLabel: "행복의 가면 거래",
    era: "child",
    eraLabel: "소년기 (낮)",
    title: "가면 3단계: 으스스한 가면 (Spooky Mask)",
    location: "카카리코 묘지 낮 시간에 돌아다니는 소년",
    requirement: "낮 시간대",
    description: "으스스한 가면을 빌려 쓰고 낮에 카카리코 묘지에서 담페 흉내를 내며 막대기를 휘두르는 소년에게 말을 걸면 30루피에 사갑니다."
  },
  {
    id: "sq-mask-4",
    category: "masks",
    categoryLabel: "행복의 가면 거래",
    era: "child",
    eraLabel: "소년기",
    title: "가면 4단계: 토끼 후드 (Bunny Hood) → 진실의 가면 해금!",
    location: "하이랄 평원을 달리는 마라톤맨 (영석 3개 수집 후 등장)",
    requirement: "영석 3개 모두 보유 + 밤 시간대",
    description: "영석 3개를 모두 모은 뒤 토끼 후드를 빌려, 하이랄 평원 길을 따라 달리는 마라톤맨이 밤에 쉬고 있을 때 말을 걸면 지갑을 가득 채워줄 만큼의 루피를 주며 사갑니다! 상점에 50루피를 갚으면 가십 스톤과 대화가 가능하고 **스위치 2 리메이크에서 청년 링크도 착용해 NPC들의 속마음을 읽을 수 있는 '진실의 가면(Mask of Truth)'**과 고론·조라·겔드 가면이 해금됩니다."
  },

  // 3. 성인 물물교환: 빅고론도 (대장군검)
  {
    id: "sq-biggoron-1",
    category: "biggoron",
    categoryLabel: "빅고론도 (대장군검)",
    era: "adult",
    eraLabel: "청년기",
    title: "빅고론도 1~3단계: 포켓 달걀 → 포켓 꼬꼬 → 파란 닭 코지로",
    location: "카카리코 마을 (꼬꼬 숙녀 → 탈론 → 그로그)",
    requirement: "태양의 노래",
    description: "1) 청년기에 카카리코 마을 꼬꼬 숙녀(안주)에게 '포켓 달걀'을 받습니다. 2) 태양의 노래를 불러 부화시킨 '포켓 꼬꼬'로 마을 남동쪽 집 안에서 자고 있는 탈론을 깨웁니다. 3) 안주에게 돌아가면 오빠의 파란 닭 '코지로'를 맡깁니다."
  },
  {
    id: "sq-biggoron-2",
    category: "biggoron",
    categoryLabel: "빅고론도 (대장군검)",
    era: "adult",
    eraLabel: "청년기",
    title: "빅고론도 4~6단계: 수상한 버섯(3분 타임어택) → 수상한 약 → 밀렵꾼의 톱",
    location: "미지의 숲 ↔ 카카리코 마녀의 물약 상점",
    requirement: "에포나 권장 (워프 노래 사용 금지!)",
    description: "4) 미지의 숲 왼쪽 그루터기에 앉아 있는 그로그에게 코지로를 보여주면 '수상한 버섯'을 주며 3분 타이머가 시작됩니다(워프 노래를 부르면 상하므로 도보/에포나로 이동). 5) 카카리코 마을 물약 상점 뒤 문을 통해 할머니의 마녀 상점으로 가서 '수상한 약'으로 바꿉니다. 6) 다시 미지의 숲 그루터기로 돌아가 그로그 대신 서 있는 코키리 소녀(파도)에게 약을 주면 '밀렵꾼의 톱'을 받습니다."
  },
  {
    id: "sq-biggoron-3",
    category: "biggoron",
    categoryLabel: "빅고론도 (대장군검)",
    era: "adult",
    eraLabel: "청년기",
    title: "빅고론도 7~9단계: 부러진 고론의 칼 → 처방전 → 눈알 개구리(3분 타임어택)",
    location: "겔드 계곡 → 데스마운틴 정상 → 조라의 마을(킹 조라)",
    requirement: "킹 조라 해동 완료 (푸른 불꽃)",
    description: "7) 겔드 계곡 끊어진 다리 앞 텐트 밖 목수 두목(무토)에게 톱을 주면 '부러진 고론의 칼'을 받습니다. 8) 데스마운틴 정상 거대한 고론 '빅고론'에게 칼을 보여주면 눈이 따갑다며 '처방전'을 줍니다. 9) 해동된 킹 조라에게 처방전을 주면 '눈알 개구리'를 주며 다시 3분 타이머가 작동합니다!"
  },
  {
    id: "sq-biggoron-4",
    category: "biggoron",
    categoryLabel: "빅고론도 (대장군검)",
    era: "adult",
    eraLabel: "청년기",
    title: "빅고론도 10단계(완성): 세상에서 제일가는 안약(4분 타임어택) → 빅고론도 획득!",
    location: "하일리아 호수 연구소 → 데스마운틴 정상 빅고론",
    requirement: "에포나 (워프 금지!)",
    description: "10) 에포나를 타고 하일리아 호수 연구소 박사에게 개구리를 전달해 '세상에서 제일가는 안약'을 받습니다. 제한 시간 **4분 안에** 워프 없이 에포나로 카카리코 마을 → 데스마운틴 등산로 → 정상 빅고론에게 달려가 안약을 건네주면 '빅고론도 교환권'을 받고, 태양의 노래를 6번(3일 경과) 연주한 뒤 말을 걸면 마스터 소드 공격력의 2배이자 절대 부러지지 않는 최강 양손검 **'빅고론도(대장군검)'**를 얻습니다!"
  },

  // 4. 대요정의 샘 6곳 (스위치 2 루피 기부 시스템 반영)
  {
    id: "sq-fairy-1",
    category: "fairies",
    categoryLabel: "대요정의 샘 (6곳)",
    era: "both",
    eraLabel: "공통",
    title: "대요정 #1: 데스마운틴 정상 (마력 게이지 & 회전베기)",
    location: "데스마운틴 정상 폭탄 벽 뒤",
    requirement: "폭탄, 젤다의 자장가, 스위치 2 루피 기부",
    description: "도동고의 동굴 클리어 직후 정상 왼쪽 바위를 폭탄으로 부수고 들어갑니다. 스위치 2 리메이크에서는 대요정 해금 시 소정의 루피 기부가 필요하므로 지갑을 채워 방문하세요."
  },
  {
    id: "sq-fairy-2",
    category: "fairies",
    categoryLabel: "대요정의 샘 (6곳)",
    era: "child",
    eraLabel: "소년기",
    title: "대요정 #2: 하이랄 성 유적 옆 (공격 마법 '딘의 불꽃')",
    location: "하이랄 성 진입로 오른쪽 막다른 길 바위 뒤",
    requirement: "폭탄, 젤다의 자장가, 루피 기부",
    description: "주변을 불바다로 만들어 어둠의 신전 개방과 물의 신전·가논의 성 횃불 퍼즐에 필수적인 '딘의 불꽃(Din's Fire)'을 얻습니다."
  },
  {
    id: "sq-fairy-3",
    category: "fairies",
    categoryLabel: "대요정의 샘 (6곳)",
    era: "child",
    eraLabel: "소년기",
    title: "대요정 #3: 조라의 샘 남동쪽 (워프 마법 '필로네의 바람')",
    location: "조라의 샘 남동쪽 섬 폭탄 바위 뒤",
    requirement: "폭탄, 젤다의 자장가, 루피 기부",
    description: "던전 내부 특정 방에 워프 포인트를 설치하고 언제든 입구나 해당 지점으로 이동할 수 있는 '필로네의 바람(Farore's Wind)'을 얻습니다."
  },
  {
    id: "sq-fairy-4",
    category: "fairies",
    categoryLabel: "대요정의 샘 (6곳)",
    era: "adult",
    eraLabel: "청년기",
    title: "대요정 #4: 데스마운틴 화구 내부 (마력 게이지 2배 확장)",
    location: "데스마운틴 화구 서쪽 붉은 바위(메가톤 해머) 뒤",
    requirement: "메가톤 해머, 젤다의 자장가, 루피 기부",
    description: "불의 신전에서 메가톤 해머를 얻은 직후 화구 안쪽의 붉은 바위 2개를 깨고 들어가면 마력 게이지 길이가 2배로 늘어납니다."
  },
  {
    id: "sq-fairy-5",
    category: "fairies",
    categoryLabel: "대요정의 샘 (6곳)",
    era: "both",
    eraLabel: "공통",
    title: "대요정 #5: 사악한 거대사신상 북동쪽 (방어 마법 '정령의 사랑')",
    location: "사악한 거대사신상 북동쪽 두 그루 야자수 사이 폭탄 벽",
    requirement: "폭탄, 젤다의 자장가, 루피 기부",
    description: "일정 시간 동안 모든 적의 공격으로부터 무적이 되는 푸른 결계 마법 '정령의 사랑(Nayru's Love)'을 얻습니다."
  },
  {
    id: "sq-fairy-6",
    category: "fairies",
    categoryLabel: "대요정의 샘 (6곳)",
    era: "adult",
    eraLabel: "청년기",
    title: "대요정 #6: 가논의 성 외곽 (방어력 2배 - 흰색 하트 테두리)",
    location: "가논의 성 입구 다리 건너 왼쪽 거대 검은 기둥 뒤",
    requirement: "금 글러브 (가논의 성 어둠의 결계 내부 획득), 루피 기부",
    description: "거대한 검은 돌기둥을 '금 글러브'로 들어 던지고 들어가면 모든 피격 대미지를 절반으로 줄여주는 '방어력 2배' 축복을 받습니다."
  },

  // 5. 스위치 2 리메이크 전용 신규 아이템 & 특전 (2026)
  {
    id: "sq-sw2-1",
    category: "switch2",
    categoryLabel: "스위치 2 신규 요소",
    era: "both",
    eraLabel: "스위치 2 전용",
    title: "메아리 돌 (Echo Gem) - 황금 스탈튤라 탐지기",
    location: "카카리코 마을 스탈튤라의 집 보상",
    requirement: "황금 스탈튤라 토큰 20개",
    description: "원작의 '고통의 돌(진동 팩 연동)'을 대체하여 스위치 2 리메이크에 새롭게 추가된 핵심 수집 보조 아이템입니다. 현재 구역이나 던전에 아직 잡지 않은 황금 스탈튤라가 남아 있으면 맑은 공명음과 HD 진동2로 알려주어 100마리 올클리어를 크게 도와줍니다!"
  },
  {
    id: "sq-sw2-2",
    category: "switch2",
    categoryLabel: "스위치 2 신규 요소",
    era: "both",
    eraLabel: "스위치 2 전용",
    title: "장사꾼 데크 씨앗 (Business Scrub Seed) - 이동식 상점 소환",
    location: "필드 비밀 동굴 데크 스크럽 이벤트",
    requirement: "소지금 루피",
    description: "던전 바깥 필드 어디서나 사용하면 땅속에서 장사꾼 데크 스크럽을 즉시 소환해 화살, 폭탄, 데크의 열매, 물약 등을 보충할 수 있는 스위치 2 신규 편의 도구입니다. 물건을 사지 않고 닫으면 씨앗을 그대로 돌려줍니다."
  },
  {
    id: "sq-sw2-3",
    category: "switch2",
    categoryLabel: "스위치 2 신규 요소",
    era: "both",
    eraLabel: "스위치 2 전용",
    title: "패배한 적의 전당 (Hall of Fallen Foes) & 3대 보스 런",
    location: "하이랄 전역의 침대 (링크의 집, 론론 목장, 고론 시티 등)",
    requirement: "각 던전 보스 클리어",
    description: "스위치 2 리메이크에서 링크는 마을의 침대에서 잠을 자 체력을 회복하거나 시간을 보낼 수 있으며, 꿈속 포털을 통해 '패배한 적의 전당'에 입장할 수 있습니다. 처치한 적과 보스의 3D 피규어 도감을 감상하고, 보스 타임어택 리매치 및 3가지 난이도의 연속 보스 러시 챌린지에 도전하세요!"
  }
];

export const skulltulaRewards = [
  { tokens: 10, reward: "성인의 지갑 (최대 500루피 소지)", note: "스위치 2에서는 초기 지갑이 200루피이며 10마리 보상도 대폭 상향됨" },
  { tokens: 20, reward: "메아리 돌 (Echo Gem)", note: "스위치 2 신규: 주변 황금 스탈튤라 유무를 소리와 HD 진동으로 탐지" },
  { tokens: 30, reward: "거인의 지갑 (최대 999루피 소지)", note: "대요정 루피 기부 및 미니게임 올클리어 필수" },
  { tokens: 40, reward: "폭탄츄 (Bombchu) 10개 번들", note: "영혼의 신전 및 가논의 성 퍼즐 진행용" },
  { tokens: 50, reward: "하트 조각 (#16)", note: "100% 하트 그릇 완성의 필수 조건" },
  { tokens: 100, reward: "무제한 골드 루피 (200루피) 지급", note: "방문할 때마다 200루피씩 무제한 수령 및 시간의 실타래 100% 태피스트리 해금" }
];

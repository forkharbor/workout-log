const storageKey = "simple-workout-log-v1";

const workoutPresets = [
  {
    area: "胸",
    equipment: "プレス系",
    muscles: "胸・肩前部・三頭",
    exercises: ["ベンチプレス", "ダンベルプレス", "チェストプレス", "インクラインプレス", "プッシュアップ"],
  },
  {
    area: "背中",
    equipment: "プル系",
    muscles: "背中・二頭",
    exercises: ["ラットプルダウン", "シーテッドロウ", "ワンハンドロウ", "懸垂", "デッドリフト"],
  },
  {
    area: "肩",
    equipment: "ショルダー系",
    muscles: "肩・三頭",
    exercises: ["ショルダープレス", "サイドレイズ", "リアレイズ", "フロントレイズ", "フェイスプル"],
  },
  {
    area: "脚",
    equipment: "スクワット / レッグ系",
    muscles: "脚・臀部",
    exercises: ["スクワット", "レッグプレス", "ランジ", "レッグエクステンション", "レッグカール"],
  },
  {
    area: "腕",
    equipment: "アーム系",
    muscles: "二頭・三頭・前腕",
    exercises: ["ダンベルカール", "ケーブルカール", "トライセプスプレスダウン", "フレンチプレス", "リストカール"],
  },
  {
    area: "体幹",
    equipment: "腹筋 / 体幹",
    muscles: "腹部・体幹",
    exercises: ["クランチ", "アブローラー", "プランク", "レッグレイズ", "バックエクステンション", "トーソローテーション"],
  },
  {
    area: "全身",
    equipment: "フリーウェイト",
    muscles: "全身",
    exercises: ["デッドリフト", "クリーン", "スラスター", "ケトルベルスイング", "ファーマーズウォーク"],
  },
  {
    area: "有酸素",
    equipment: "カーディオ",
    muscles: "心肺",
    exercises: ["ランニング", "ウォーキング", "バイク", "クロストレーナー", "インターバル"],
  },
  {
    area: "ケア",
    equipment: "ストレッチ",
    muscles: "回復",
    exercises: ["ストレッチ", "フォームローラー", "モビリティ", "軽い有酸素", "休養"],
  },
  {
    area: "脚",
    equipment: "アブダクター/アダクター",
    muscles: "ヒップ・内もも",
    exercises: ["ヒップアブダクション", "ヒップアダクション"],
  },
  {
    area: "脚",
    equipment: "レッグエクステンション/カール",
    muscles: "太もも",
    exercises: ["レッグエクステンション", "レッグカール"],
  },
  {
    area: "脚",
    equipment: "シーテッドレッグプレス",
    muscles: "脚",
    exercises: ["シーテッドレッグプレス"],
  },
  {
    area: "背中",
    equipment: "アシストディップチン",
    muscles: "背中・腕",
    exercises: ["アシストチンニング", "アシストディップ"],
  },
  {
    area: "背中",
    equipment: "ラットプルダウン/ロウ・ロー",
    muscles: "背中",
    exercises: ["ラットプルダウン", "ロウ・ロー"],
  },
  {
    area: "胸",
    equipment: "チェストプレス",
    muscles: "腕・胸",
    exercises: ["チェストプレス"],
  },
  {
    area: "背中",
    equipment: "シーテッドロー",
    muscles: "背中",
    exercises: ["シーテッドロー"],
  },
  {
    area: "胸",
    equipment: "リアデルトイド/フライ",
    muscles: "胸・背中",
    exercises: ["ペックフライ", "リアデルトイド"],
  },
  {
    area: "肩",
    equipment: "ショルダープレス",
    muscles: "肩・腕",
    exercises: ["ショルダープレス"],
  },
  {
    area: "体幹",
    equipment: "アジャスタブルディクラインベンチ",
    muscles: "腹部",
    exercises: ["デクラインクランチ", "デクラインシットアップ"],
  },
  {
    area: "体幹",
    equipment: "アブドミナル",
    muscles: "腹部",
    exercises: ["アブドミナルクランチ"],
  },
  {
    area: "体幹",
    equipment: "トーソローテーション",
    muscles: "腹部",
    exercises: ["トーソローテーション"],
  },
  {
    area: "背中",
    equipment: "バックエクステンション",
    muscles: "背中",
    exercises: ["バックエクステンション"],
  },
  {
    area: "有酸素",
    equipment: "アセントトレーナー",
    muscles: "心肺・全身",
    details: "1台",
    exercises: ["アセントトレーナー"],
  },
  {
    area: "有酸素",
    equipment: "アップライトバイク",
    muscles: "心肺・脚",
    details: "2台",
    exercises: ["アップライトバイク"],
  },
  {
    area: "有酸素",
    equipment: "リカンベントバイク",
    muscles: "心肺・脚",
    details: "1台",
    exercises: ["リカンベントバイク"],
  },
  {
    area: "有酸素",
    equipment: "トレッドミル",
    muscles: "心肺・脚",
    details: "8台",
    exercises: ["ランニング", "ウォーキング"],
  },
  {
    area: "胸",
    equipment: "アジャスタブルベンチ",
    muscles: "胸・肩・腕",
    details: "4台",
    exercises: ["ダンベルベンチプレス", "インクラインダンベルプレス", "ダンベルフライ"],
  },
  {
    area: "全身",
    equipment: "パワーラック",
    muscles: "全身",
    details: "3台",
    exercises: ["スクワット", "ベンチプレス", "デッドリフト", "オーバーヘッドプレス"],
  },
  {
    area: "全身",
    equipment: "スミスマシン垂直",
    muscles: "全身",
    details: "1台",
    exercises: ["スミスマシンスクワット", "スミスマシンベンチプレス", "スミスマシンショルダープレス"],
  },
  {
    area: "腕",
    equipment: "シーテッドアームカール",
    muscles: "腕",
    details: "1台",
    exercises: ["シーテッドアームカール"],
  },
  {
    area: "背中",
    equipment: "アイソラテラル・DYロー",
    muscles: "背中",
    details: "1台",
    exercises: ["アイソラテラル・DYロー"],
  },
  {
    area: "背中",
    equipment: "アイソラテラル・ワイドプルダウン",
    muscles: "背中",
    details: "1台",
    exercises: ["アイソラテラル・ワイドプルダウン"],
  },
  {
    area: "背中",
    equipment: "アイソラテラル・フロントプルダウン",
    muscles: "背中",
    details: "1台",
    exercises: ["アイソラテラル・フロントプルダウン"],
  },
  {
    area: "胸",
    equipment: "アイソラテラル・ワイド・チェスト",
    muscles: "胸",
    details: "1台",
    exercises: ["アイソラテラル・ワイド・チェスト"],
  },
  {
    area: "胸",
    equipment: "アイソラテラル・インクライン・プレス",
    muscles: "胸",
    details: "1台",
    exercises: ["アイソラテラル・インクライン・プレス"],
  },
  {
    area: "脚",
    equipment: "リニア・レッグ・プレス",
    muscles: "脚",
    details: "1台",
    exercises: ["リニア・レッグ・プレス"],
  },
  {
    area: "全身",
    equipment: "ダンベル",
    muscles: "全身",
    details: "1kg〜10kg・12kg〜50kg",
    exercises: ["ダンベルプレス", "ダンベルロウ", "ダンベルカール", "ダンベルショルダープレス", "ダンベルランジ"],
  },
  {
    area: "全身",
    equipment: "ケーブルマシン",
    muscles: "全身",
    details: "1台",
    exercises: ["ケーブルフライ", "ケーブルロウ", "ケーブルカール", "トライセプスプレスダウン", "フェイスプル"],
  },
  {
    area: "ケア",
    equipment: "ストレッチマット",
    muscles: "回復・柔軟性",
    details: "3枚",
    exercises: ["ストレッチ", "モビリティ"],
  },
  {
    area: "ケア",
    equipment: "ストレートポール",
    muscles: "回復・姿勢",
    details: "2本",
    exercises: ["ストレートポール"],
  },
  {
    area: "体幹",
    equipment: "腹筋ローラー",
    muscles: "腹部・体幹",
    details: "1個",
    exercises: ["アブローラー"],
  },
  {
    area: "ケア",
    equipment: "筋膜ローラー",
    muscles: "回復",
    details: "1本",
    exercises: ["筋膜リリース"],
  },
];

const form = document.querySelector("#workoutForm");
const historyList = document.querySelector("#historyList");
const template = document.querySelector("#workoutItemTemplate");
const filterButtons = document.querySelectorAll(".filter-button");
const formTitle = document.querySelector("#formTitle");
const submitButton = document.querySelector("#submitButton");

const fields = {
  date: document.querySelector("#dateInput"),
  area: document.querySelector("#areaInput"),
  equipment: document.querySelector("#equipmentInput"),
  exercise: document.querySelector("#exerciseInput"),
  reps: document.querySelector("#repsInput"),
  note: document.querySelector("#noteInput"),
};

let workouts = loadWorkouts();
let activeFilter = "all";
let editingId = null;

const dateFormatter = new Intl.DateTimeFormat("ja-JP", { month: "long", day: "numeric", weekday: "short" });
const fullDateFormatter = new Intl.DateTimeFormat("ja-JP", { year: "numeric", month: "long", day: "numeric", weekday: "short" });

function getTodayString() {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
}

function loadWorkouts() {
  try {
    const current = localStorage.getItem(storageKey);
    const anytime = localStorage.getItem("anytime-workout-log-records-v2");
    const original = localStorage.getItem("workout-log-records-v1");
    const stored = current ? JSON.parse(current) : anytime ? JSON.parse(anytime) : original ? JSON.parse(original) : [];
    if (!Array.isArray(stored)) return [];

    const normalized = stored.map((workout) => ({
      ...workout,
      id: workout.id == null ? crypto.randomUUID() : String(workout.id),
      createdAt: workout.createdAt || `${workout.date}T00:00:00.000Z`,
    }));
    localStorage.setItem(storageKey, JSON.stringify(normalized));
    return normalized;
  } catch {
    return [];
  }
}

function saveWorkouts() {
  localStorage.setItem(storageKey, JSON.stringify(workouts));
}

function startOfWeek(date) {
  const target = new Date(date);
  const diff = target.getDay() === 0 ? -6 : 1 - target.getDay();
  target.setDate(target.getDate() + diff);
  target.setHours(0, 0, 0, 0);
  return target;
}

function isThisWeek(dateString) {
  const start = startOfWeek(new Date());
  const end = new Date(start);
  end.setDate(start.getDate() + 7);
  const date = new Date(`${dateString}T00:00:00`);
  return date >= start && date < end;
}

function selectedEquipment() {
  return workoutPresets.find((item) => item.area === fields.area.value && item.equipment === fields.equipment.value);
}

function fillSelect(select, values) {
  select.innerHTML = "";
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.append(option);
  });
}

function populateAreas() {
  fillSelect(fields.area, [...new Set(workoutPresets.map((item) => item.area))]);
  populateEquipment();
}

function populateEquipment() {
  const currentItems = workoutPresets.filter((item) => item.area === fields.area.value);
  fillSelect(fields.equipment, currentItems.map((item) => item.equipment));
  populateExercises();
}

function populateExercises() {
  const equipment = selectedEquipment();
  fillSelect(fields.exercise, equipment ? equipment.exercises : []);
}

function renderGuide() {
  const guide = document.querySelector("#equipmentGuide");
  guide.innerHTML = "";
  workoutPresets.forEach((item) => {
    const card = document.createElement("article");
    card.className = "guide-item";
    card.innerHTML = `
      <span>${item.area}</span>
      <h3>${item.equipment}</h3>
      <p>${[item.muscles, item.details].filter(Boolean).join("・")}</p>
    `;
    guide.append(card);
  });
}

function updateSummary() {
  const weeklyWorkouts = workouts.filter((workout) => isThisWeek(workout.date));
  const weeklyReps = weeklyWorkouts.reduce((total, workout) => total + Number(workout.reps || 0), 0);
  const latestDate = workouts[0]?.date;
  const latestEquipment = new Set(workouts.filter((workout) => workout.date === latestDate).map((workout) => workout.equipment || workout.exercise));
  const best = workouts.reduce((currentBest, workout) => (!currentBest || Number(workout.reps) > Number(currentBest.reps) ? workout : currentBest), null);

  document.querySelector("#todayLabel").textContent = dateFormatter.format(new Date());
  document.querySelector("#weekCount").textContent = `${weeklyWorkouts.length}回`;
  document.querySelector("#weeklyReps").textContent = `${weeklyReps.toLocaleString("ja-JP")}回`;
  document.querySelector("#equipmentCount").textContent = latestEquipment.size;
  document.querySelector("#bestReps").textContent = best ? `${best.exercise} ${best.reps}回` : "-";
}

function getFilteredWorkouts() {
  return activeFilter === "week" ? workouts.filter((workout) => isThisWeek(workout.date)) : workouts;
}

function renderHistory() {
  historyList.innerHTML = "";
  const items = getFilteredWorkouts();

  if (items.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = activeFilter === "week" ? "今週の記録はまだありません。" : "最初のトレーニングを記録しましょう。";
    historyList.append(empty);
    return;
  }

  const workoutsByDate = new Map();
  items.forEach((workout) => {
    if (!workoutsByDate.has(workout.date)) workoutsByDate.set(workout.date, []);
    workoutsByDate.get(workout.date).push(workout);
  });

  [...workoutsByDate.entries()].forEach(([dateString, dayWorkouts], dayIndex) => {
    const day = document.createElement("section");
    const dayReps = dayWorkouts.reduce((total, workout) => total + Number(workout.reps || 0), 0);
    day.className = "history-day";
    day.dataset.dayColor = dayIndex % 4;
    day.innerHTML = `
      <div class="history-day-heading">
        <h3>${fullDateFormatter.format(new Date(`${dateString}T00:00:00`))}</h3>
        <span>${dayWorkouts.length}件・合計 ${dayReps.toLocaleString("ja-JP")}回</span>
      </div>
      <div class="history-day-items"></div>
    `;
    const dayItems = day.querySelector(".history-day-items");

    dayWorkouts.forEach((workout) => {
      const node = template.content.firstElementChild.cloneNode(true);
      node.dataset.id = workout.id;
      node.querySelector("time").remove();
      node.querySelector("h3").textContent = workout.exercise;
      node.querySelector(".machine-name").textContent = [workout.area, workout.equipment].filter(Boolean).join(" / ");
      node.querySelector(".workout-stats").innerHTML = `<span>${workout.reps}回</span>`;

      const note = node.querySelector(".workout-note");
      if (workout.note) {
        note.textContent = workout.note;
      } else {
        note.remove();
      }
      dayItems.append(node);
    });
    historyList.append(day);
  });
}

function resetForm() {
  editingId = null;
  form.reset();
  formTitle.textContent = "トレーニング記録";
  submitButton.textContent = "記録する";
  fields.date.value = getTodayString();
  populateAreas();
}

function selectValue(select, value) {
  if (![...select.options].some((option) => option.value === value)) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.append(option);
  }
  select.value = value;
}

function editWorkout(workout) {
  editingId = workout.id;
  fields.date.value = workout.date;
  selectValue(fields.area, workout.area);
  populateEquipment();
  selectValue(fields.equipment, workout.equipment);
  populateExercises();
  selectValue(fields.exercise, workout.exercise);
  fields.reps.value = workout.reps;
  fields.note.value = workout.note || "";
  formTitle.textContent = "履歴を編集";
  submitButton.textContent = "変更を保存";
  form.scrollIntoView({ behavior: "smooth", block: "start" });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const previousWorkout = workouts.find((workout) => workout.id === editingId);
  const workout = {
    id: editingId || crypto.randomUUID(),
    date: fields.date.value,
    area: fields.area.value,
    equipment: fields.equipment.value,
    exercise: fields.exercise.value,
    reps: Number(fields.reps.value),
    note: fields.note.value.trim(),
    createdAt: previousWorkout?.createdAt || new Date().toISOString(),
  };

  workouts = editingId
    ? workouts.map((current) => (current.id === editingId ? workout : current))
    : [workout, ...workouts];
  workouts.sort((a, b) => b.date.localeCompare(a.date) || b.createdAt.localeCompare(a.createdAt));
  saveWorkouts();
  renderHistory();
  updateSummary();
  resetForm();
});

document.querySelector("#clearForm").addEventListener("click", resetForm);
fields.area.addEventListener("change", populateEquipment);
fields.equipment.addEventListener("change", populateExercises);

historyList.addEventListener("click", (event) => {
  const item = event.target.closest(".workout-item");
  if (!item) return;

  if (event.target.closest(".edit-button")) {
    const workout = workouts.find((current) => current.id === item.dataset.id);
    if (workout) editWorkout(workout);
    return;
  }

  if (event.target.closest(".delete-button")) {
    workouts = workouts.filter((workout) => workout.id !== item.dataset.id);
    if (editingId === item.dataset.id) resetForm();
    saveWorkouts();
    renderHistory();
    updateSummary();
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((current) => current.classList.toggle("active", current === button));
    renderHistory();
  });
});

fields.date.value = getTodayString();
populateAreas();
renderGuide();
updateSummary();
renderHistory();

const storageKey = "anytime-shibuya-workout-log-v1";

const shibuyaEquipment = [
  {
    area: "マシン",
    equipment: "Life Fitness チェスト系",
    muscles: "胸・肩・三頭",
    exercises: ["チェストプレス", "インクラインチェストプレス", "ペックフライ"],
  },
  {
    area: "マシン",
    equipment: "Life Fitness 背中系",
    muscles: "背中・二頭",
    exercises: ["ラットプルダウン", "シーテッドロウ", "ローイング"],
  },
  {
    area: "マシン",
    equipment: "Life Fitness 肩系",
    muscles: "肩・三頭",
    exercises: ["ショルダープレス", "リアデルト"],
  },
  {
    area: "マシン",
    equipment: "Life Fitness 脚系",
    muscles: "脚・臀部",
    exercises: ["レッグプレス", "レッグエクステンション", "レッグカール", "ヒップアブダクション", "ヒップアダクション"],
  },
  {
    area: "マシン",
    equipment: "Life Fitness 体幹系",
    muscles: "腹部・体幹",
    exercises: ["アブドミナル", "トーソローテーション", "バックエクステンション"],
  },
  {
    area: "フリーウェイト",
    equipment: "パワーラック",
    muscles: "全身",
    exercises: ["スクワット", "ベンチプレス", "デッドリフト", "オーバーヘッドプレス"],
  },
  {
    area: "フリーウェイト",
    equipment: "ダンベル / ベンチ",
    muscles: "全身",
    exercises: ["ダンベルプレス", "インクラインダンベルプレス", "ダンベルロウ", "ダンベルカール", "サイドレイズ"],
  },
  {
    area: "ファンクショナル",
    equipment: "ケーブルマシン",
    muscles: "全身",
    exercises: ["ケーブルフライ", "ケーブルロウ", "トライセプスプレスダウン", "フェイスプル", "ケーブルカール"],
  },
  {
    area: "ファンクショナル",
    equipment: "バトルロープ / バランスボール",
    muscles: "心肺・体幹",
    exercises: ["バトルロープ", "バランスボールクランチ", "プランク"],
  },
  {
    area: "有酸素",
    equipment: "トレッドミル",
    muscles: "心肺",
    exercises: ["ウォーキング", "ランニング", "インターバル走"],
  },
  {
    area: "有酸素",
    equipment: "クロストレーナー / バイク",
    muscles: "心肺・下半身",
    exercises: ["クロストレーナー", "アップライトバイク", "リカンベントバイク"],
  },
  {
    area: "ケア",
    equipment: "ストレッチ / マッサージ器具",
    muscles: "回復",
    exercises: ["ストレッチ", "フォームローラー", "マッサージ"],
  },
];

const form = document.querySelector("#workoutForm");
const historyList = document.querySelector("#historyList");
const template = document.querySelector("#workoutItemTemplate");
const filterButtons = document.querySelectorAll(".filter-button");

const fields = {
  date: document.querySelector("#dateInput"),
  area: document.querySelector("#areaInput"),
  equipment: document.querySelector("#equipmentInput"),
  exercise: document.querySelector("#exerciseInput"),
  weight: document.querySelector("#weightInput"),
  reps: document.querySelector("#repsInput"),
  sets: document.querySelector("#setsInput"),
  note: document.querySelector("#noteInput"),
};

let workouts = loadWorkouts();
let activeFilter = "all";

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
    return current ? JSON.parse(current) : anytime ? JSON.parse(anytime) : original ? JSON.parse(original) : [];
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

function formatKg(value) {
  return `${Number(value).toLocaleString("ja-JP", { maximumFractionDigits: 1 })} kg`;
}

function calculateVolume(workout) {
  return Number(workout.weight) * Number(workout.reps) * Number(workout.sets);
}

function selectedEquipment() {
  return shibuyaEquipment.find((item) => item.equipment === fields.equipment.value);
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
  fillSelect(fields.area, [...new Set(shibuyaEquipment.map((item) => item.area))]);
  populateEquipment();
}

function populateEquipment() {
  const currentItems = shibuyaEquipment.filter((item) => item.area === fields.area.value);
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
  shibuyaEquipment.forEach((item) => {
    const card = document.createElement("article");
    card.className = "guide-item";
    card.innerHTML = `
      <span>${item.area}</span>
      <h3>${item.equipment}</h3>
      <p>${item.muscles}</p>
    `;
    guide.append(card);
  });
}

function updateSummary() {
  const weeklyWorkouts = workouts.filter((workout) => isThisWeek(workout.date));
  const weeklyVolume = weeklyWorkouts.reduce((total, workout) => total + calculateVolume(workout), 0);
  const latestDate = workouts[0]?.date;
  const latestEquipment = new Set(workouts.filter((workout) => workout.date === latestDate).map((workout) => workout.equipment || workout.exercise));
  const best = workouts.reduce((currentBest, workout) => (!currentBest || Number(workout.weight) > Number(currentBest.weight) ? workout : currentBest), null);

  document.querySelector("#todayLabel").textContent = dateFormatter.format(new Date());
  document.querySelector("#weekCount").textContent = `${weeklyWorkouts.length}回`;
  document.querySelector("#weeklyVolume").textContent = formatKg(weeklyVolume);
  document.querySelector("#equipmentCount").textContent = latestEquipment.size;
  document.querySelector("#bestLift").textContent = best ? `${best.exercise} ${formatKg(best.weight)}` : "-";
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
    empty.textContent = activeFilter === "week" ? "今週の記録はまだありません。" : "最初のセットを記録しましょう。";
    historyList.append(empty);
    return;
  }

  items.forEach((workout) => {
    const node = template.content.firstElementChild.cloneNode(true);
    const date = new Date(`${workout.date}T00:00:00`);
    node.dataset.id = workout.id;
    node.querySelector("time").textContent = fullDateFormatter.format(date);
    node.querySelector("h3").textContent = workout.exercise;
    node.querySelector(".machine-name").textContent = [workout.area, workout.equipment].filter(Boolean).join(" / ");
    node.querySelector(".workout-stats").innerHTML = `
      <span>${formatKg(workout.weight)}</span>
      <span>${workout.reps}回 x ${workout.sets}セット</span>
      <span>合計 ${formatKg(calculateVolume(workout))}</span>
    `;

    const note = node.querySelector(".workout-note");
    if (workout.note) {
      note.textContent = workout.note;
    } else {
      note.remove();
    }
    historyList.append(node);
  });
}

function resetForm() {
  form.reset();
  fields.date.value = getTodayString();
  fields.sets.value = 3;
  populateAreas();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const workout = {
    id: crypto.randomUUID(),
    date: fields.date.value,
    area: fields.area.value,
    equipment: fields.equipment.value,
    exercise: fields.exercise.value,
    weight: Number(fields.weight.value),
    reps: Number(fields.reps.value),
    sets: Number(fields.sets.value),
    note: fields.note.value.trim(),
    createdAt: new Date().toISOString(),
  };

  workouts = [workout, ...workouts].sort((a, b) => b.date.localeCompare(a.date) || b.createdAt.localeCompare(a.createdAt));
  saveWorkouts();
  renderHistory();
  updateSummary();
  resetForm();
});

document.querySelector("#clearForm").addEventListener("click", resetForm);
fields.area.addEventListener("change", populateEquipment);
fields.equipment.addEventListener("change", populateExercises);

historyList.addEventListener("click", (event) => {
  const button = event.target.closest(".delete-button");
  if (!button) return;
  const item = button.closest(".workout-item");
  workouts = workouts.filter((workout) => workout.id !== item.dataset.id);
  saveWorkouts();
  renderHistory();
  updateSummary();
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

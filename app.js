const KEY = "vivan-academy-v1";
const main = document.querySelector("#main");
let calendarOffset = 0;
let filter = "all";

function localDate(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function parseDate(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}
function dateShift(value, amount) {
  const date = parseDate(value);
  date.setDate(date.getDate() + amount);
  return localDate(date);
}
function readState() {
  try {
    const data = JSON.parse(localStorage.getItem(KEY));
    if (data && typeof data === "object" && data.days && data.activity) return data;
  } catch (_) { /* A fresh state is safer than crashing on damaged browser data. */ }
  return { days: {}, activity: {}, startDate: null };
}
let state = readState();
function save() {
  try { localStorage.setItem(KEY, JSON.stringify(state)); }
  catch (_) { document.querySelector("#storage-warning")?.removeAttribute("hidden"); }
}
function record(day) {
  const today = localDate();
  state.startDate ||= today;
  state.days[day] ||= { started: today, completed: null };
  state.activity[today] ||= { attempted: [], completed: [] };
  if (!state.activity[today].attempted.includes(day)) state.activity[today].attempted.push(day);
  save();
}
function complete(day) {
  record(day);
  const today = localDate();
  state.days[day].completed = today;
  if (!state.activity[today].completed.includes(day)) state.activity[today].completed.push(day);
  save();
}
function stats() {
  const today = localDate();
  const attempts = Object.keys(state.activity).filter(date => state.activity[date]?.attempted?.length && date <= today).sort();
  const set = new Set(attempts);
  let longest = 0, run = 0, previous = "";
  for (const date of attempts) {
    run = previous && dateShift(previous, 1) === date ? run + 1 : 1;
    longest = Math.max(longest, run);
    previous = date;
  }
  let current = 0;
  let cursor = set.has(today) ? today : dateShift(today, -1);
  while (set.has(cursor)) { current++; cursor = dateShift(cursor, -1); }
  let missed = 0;
  if (state.startDate && state.startDate < today) {
    for (let date = state.startDate; date < today; date = dateShift(date, 1)) if (!set.has(date)) missed++;
  }
  return { attempted: attempts.length, missed, current, longest, completed: Object.values(state.days).filter(day => day.completed).length };
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}
function calendar() {
  const today = new Date();
  const month = new Date(today.getFullYear(), today.getMonth() + calendarOffset, 1);
  const year = month.getFullYear(), monthIndex = month.getMonth();
  const first = (month.getDay() + 6) % 7;
  const length = new Date(year, monthIndex + 1, 0).getDate();
  let cells = "Mon Tue Wed Thu Fri Sat Sun".split(" ").map(day => `<div class="weekday">${day}</div>`).join("");
  cells += "<div></div>".repeat(first);
  for (let day = 1; day <= length; day++) {
    const date = localDate(new Date(year, monthIndex, day));
    const entry = state.activity[date];
    const status = entry?.completed?.length ? "completed" : entry?.attempted?.length ? "attempted" : state.startDate && date >= state.startDate && date < localDate() ? "missed" : "";
    const label = `${date}: ${status || "no activity"}`;
    cells += `<div class="day ${status} ${date === localDate() ? "today" : ""}" title="${label}" aria-label="${label}">${day}</div>`;
  }
  return `<div class="calendar-head"><button id="prev-month" aria-label="Previous month">←</button><strong>${month.toLocaleDateString(undefined, { month: "long", year: "numeric" })}</strong><button id="next-month" aria-label="Next month" ${calendarOffset >= 0 ? "disabled" : ""}>→</button></div><div class="calendar" aria-label="Activity calendar">${cells}</div><div class="legend"><span><i class="key" style="background:#b9dfd3"></i>Attempted</span><span><i class="key" style="background:#458c81"></i>Completed</span><span><i class="key" style="background:#f6d6c9"></i>Missed</span></div>`;
}
function dashboard() {
  const data = stats();
  const next = LESSONS.find(lesson => !state.days[lesson.day]?.completed) || LESSONS[83];
  const percent = Math.round(data.completed / 84 * 100);
  main.innerHTML = `<section class="hero"><div><div class="eyebrow">84 days · 12 weeks · 1 hour a day</div><h1>Hey Vivan, ready<br>to make something?</h1><p>Learn how designers turn a small idea into a real object. Sketch, build in 3D, test, improve, and have fun along the way.</p><a class="btn" href="#lesson/${next.day}">${data.completed ? "Continue learning" : "Start Day 1"} <span aria-hidden="true">→</span></a></div><div class="hero-art" aria-hidden="true"><div class="orbit"></div><div class="cube"></div></div></section>
  <div class="section-head"><div><div class="eyebrow">Your journey</div><h2>Keep the momentum</h2></div></div>
  <section class="stats" aria-label="Learning statistics"><div class="stat"><strong>${data.completed}<small>/84</small></strong><span>Lessons completed</span></div><div class="stat"><strong>${data.current} 🔥</strong><span>Current streak</span></div><div class="stat"><strong>${data.longest}</strong><span>Longest streak</span></div><div class="stat"><strong>${data.attempted} / ${data.missed}</strong><span>Attempted / missed days</span></div></section>
  <div class="dashboard-grid"><section class="panel"><div class="eyebrow">Up next · Day ${next.day}</div><div class="next"><div><h2>${escapeHtml(next.title)}</h2><p class="subtle">${escapeHtml(next.idea)}</p></div><a class="btn secondary" href="#lesson/${next.day}">Open lesson →</a></div><div class="progress-track" role="progressbar" aria-label="Course progress" aria-valuenow="${data.completed}" aria-valuemin="0" aria-valuemax="84"><div class="progress-fill" style="width:${percent}%"></div></div><p class="subtle small">${percent}% of the academy complete</p></section><section class="panel"><h3>Activity history</h3>${calendar()}</section></div>
  <div class="section-head"><div><div class="eyebrow">The full path</div><h2>Explore the course</h2></div><a href="#course">See all 84 lessons →</a></div><div class="course-grid">${[1, 4, 8].map(week => `<a class="lesson-card" href="#course"><span class="number">WEEK ${week}</span><h3>${WEEKS[week - 1]}</h3><p>${week === 1 ? "Learn to see shapes and space like a designer." : week === 4 ? "Turn practical ideas into useful everyday objects." : "Prepare designs for real-world prototypes."}</p><span class="pill">Explore lessons →</span></a>`).join("")}</div><p id="storage-warning" class="warning" hidden>Your browser could not save progress. Check browser storage settings before continuing.</p>`;
  document.querySelector("#prev-month").onclick = () => { calendarOffset--; dashboard(); };
  document.querySelector("#next-month").onclick = () => { if (calendarOffset < 0) calendarOffset++; dashboard(); };
}
function course() {
  const shown = LESSONS.filter(lesson => filter === "all" || (filter === "done" ? !!state.days[lesson.day]?.completed : !state.days[lesson.day]?.completed));
  main.innerHTML = `<div class="eyebrow">The course</div><h1>84 days to your first product</h1><p class="subtle">Start anywhere, revisit any lesson, and take as many days as you need. Each lesson has a complete 60-minute plan.</p><div class="filterbar" role="group" aria-label="Filter lessons">${[["all","All lessons"],["open","To do"],["done","Completed"]].map(([value,label]) => `<button data-filter="${value}" aria-pressed="${filter === value}">${label}</button>`).join("")}</div><div class="course-grid">${shown.map(lesson => `<a class="lesson-card" href="#lesson/${lesson.day}"><span class="number">DAY ${lesson.day} · WEEK ${lesson.week}</span><h3>${escapeHtml(lesson.title)}</h3><p>${escapeHtml(lesson.idea)}</p><span class="pill ${state.days[lesson.day]?.completed ? "done" : state.days[lesson.day] ? "started" : ""}">${state.days[lesson.day]?.completed ? "Completed ✓" : state.days[lesson.day] ? "In progress" : "60 minutes"}</span></a>`).join("")}</div>`;
  document.querySelectorAll("[data-filter]").forEach(button => button.onclick = () => { filter = button.dataset.filter; course(); });
}
function lessonPage(day) {
  const lesson = LESSONS[day - 1];
  if (!lesson) { location.hash = "#course"; return; }
  const started = !!state.days[day];
  const done = !!state.days[day]?.completed;
  const options = day % 2 ? [lesson.correct, lesson.wrong] : [lesson.wrong, lesson.correct];
  main.innerHTML = `<div class="breadcrumbs"><a href="#home">Dashboard</a> / <a href="#course">All lessons</a> / Day ${day}</div><div class="lesson-top"><div><div class="eyebrow">Week ${lesson.week}: ${WEEKS[lesson.week - 1]} · Day ${day} of 84</div><h1>${escapeHtml(lesson.title)}</h1></div><span class="pill ${done ? "done" : started ? "started" : ""}">${done ? "Completed ✓" : started ? "In progress" : "Ready to start"}</span></div>
  <section class="lesson-intro"><div class="eyebrow">Today's big idea</div><p>${escapeHtml(lesson.idea)}</p><p><strong>Why this matters:</strong> ${escapeHtml(WEEK_COACHING[lesson.week - 1])}</p></section>
  <div class="lesson-layout"><div><section class="lesson-block"><span class="time">00–10 min · Discover</span><h2>Look, think, sketch</h2><p>${escapeHtml(lesson.idea)}</p><ol><li>Read the big idea aloud and explain it in your own words.</li><li>Find one example around you, then make a quick labelled sketch in your design notebook.</li><li>Predict what might be tricky before you start building.</li></ol></section>
  <section class="lesson-block"><span class="time">10–35 min · Guided practice</span><h2>Make it step by step</h2><ol><li>Gather your notebook, ruler and the safe materials named in the task. Open Tinkercad if this lesson uses a digital model.</li><li>${escapeHtml(lesson.guided)}</li><li><strong>Worked example:</strong> ${escapeHtml(lesson.example)}</li><li>Check the result from at least two viewpoints. Write one measurement or observation.</li></ol><p class="subtle small">Take a short stretch break if you need one; return to the same step afterward.</p></section>
  <section class="lesson-block"><span class="time">35–55 min · Maker challenge</span><h2>Your turn</h2><p>${escapeHtml(lesson.challenge)}</p><p>Try it independently. If something does not work, sketch what happened and change one thing. Save the model or photograph the paper prototype so you can compare versions later.</p><div class="success-check"><strong>Success check</strong><p>${escapeHtml(lesson.success)}</p></div></section>
  <section class="lesson-block quiz"><span class="time">55–60 min · Knowledge check</span><h2>What did you learn?</h2><p>${escapeHtml(lesson.question)}</p><fieldset style="border:0;padding:0"><legend class="small">Choose one answer</legend>${options.map((option,index) => `<label><input type="radio" name="answer" value="${escapeHtml(option)}"> ${escapeHtml(option)}</label>`).join("")}</fieldset><button class="btn secondary" id="check-answer">Check answer</button><p id="feedback" class="feedback" role="status" aria-live="polite"></p></section>
  <div class="lesson-actions"><button class="btn" id="${done ? "completed-button" : "complete-button"}" ${done ? "disabled" : ""}>${done ? "Completed ✓" : "Mark lesson complete"}</button></div><div class="footer-links">${day > 1 ? `<a href="#lesson/${day - 1}">← Day ${day - 1}</a>` : `<a href="#course">← All lessons</a>`}${day < 84 ? `<a href="#lesson/${day + 1}">Day ${day + 1} →</a>` : `<a href="#course">All lessons →</a>`}</div></div>
  <aside class="side-note"><div class="panel"><h3>Today's plan</h3><p class="subtle small">10 min discover + video<br>25 min guided practice<br>20 min maker challenge<br>5 min knowledge check</p><button class="btn secondary" id="start-button" ${started ? "disabled" : ""}>${started ? "Started ✓" : "Start today's lesson"}</button></div><div class="panel video-card"><span class="eyebrow">Watch and notice</span><h3>${escapeHtml(lesson.video.title)}</h3><p class="subtle small">${escapeHtml(lesson.video.creator)} · Watch during the first 10 minutes. Pause when you spot today's idea, then explain it in your own words.</p><a class="btn secondary" href="https://www.youtube.com/watch?v=${lesson.video.id}" target="_blank" rel="noopener noreferrer" aria-label="Watch ${escapeHtml(lesson.video.title)} on YouTube in a new tab">Watch on YouTube ↗</a><p class="subtle small">An adult can choose how Vivan watches YouTube.</p></div><div class="panel"><h3>Maker reminder</h3><p class="subtle small">Your first try does not need to be perfect. Keep your sketches, test your ideas, and ask an adult before using tools or a 3D printer.</p></div><div class="panel"><h3>Your notes</h3><label for="lesson-notes" class="small">What did you notice or want to change?</label><textarea id="lesson-notes" rows="5" style="width:100%;margin-top:8px;border:1px solid #cad9d4;border-radius:8px;padding:9px" placeholder="Write your idea here..."></textarea><p id="note-status" class="subtle small" role="status">Saved on this device.</p></div></aside></div><p id="storage-warning" class="warning" hidden>Your browser could not save progress. Check browser storage settings before continuing.</p>`;
  const note = document.querySelector("#lesson-notes");
  note.value = state.days[day]?.note || "";
  note.addEventListener("input", () => { record(day); state.days[day].note = note.value; save(); document.querySelector("#note-status").textContent = "Saved on this device."; });
  document.querySelector("#start-button").onclick = () => { record(day); lessonPage(day); };
  document.querySelector("#check-answer").onclick = () => {
    record(day);
    const selected = document.querySelector('input[name="answer"]:checked');
    const feedback = document.querySelector("#feedback");
    if (!selected) { feedback.textContent = "Choose an answer first."; feedback.className = "feedback try"; return; }
    const correct = selected.value === lesson.correct;
    feedback.textContent = correct ? "You got it! Explain why in your notebook." : `Good try. The answer is: ${lesson.correct}. Read the big idea once more.`;
    feedback.className = `feedback ${correct ? "good" : "try"}`;
  };
  if (!done) document.querySelector("#complete-button").onclick = () => { complete(day); lessonPage(day); };
}
function about() {
  main.innerHTML = `<div class="eyebrow">For Vivan and family</div><h1>How the academy works</h1><p class="subtle">One hour a day, 84 lessons, and plenty of room to learn by trying.</p><div class="about-grid"><section class="panel"><h3>1. Discover</h3><p class="subtle">Read a small idea and spot it in the real world.</p></section><section class="panel"><h3>2. Make</h3><p class="subtle">Follow a guided build, then try an independent challenge.</p></section><section class="panel"><h3>3. Improve</h3><p class="subtle">Answer the question, save notes, and change one thing.</p></section></div><section class="panel"><h2>What you need</h2><p class="subtle">A notebook, pencil, ruler, paper, cardboard, tape and access to <a href="https://www.tinkercad.com/learn" target="_blank" rel="noopener noreferrer">Tinkercad's learning area</a>. An adult can help set up a supervised account and any physical tools. A 3D printer is optional; many prototypes use paper or cardboard.</p><h3>How progress works</h3><p class="subtle">Starting, answering a quiz or writing notes marks a day attempted. Marking a lesson complete updates your course progress. Streaks count consecutive calendar days with an attempt. A missed day is a past calendar day after your first attempt with no activity; today is never counted as missed. You can open lessons in any order and revisit them.</p><div class="warning"><strong>Progress stays in this browser.</strong> This site saves to localStorage on this device only. It does not sync to another device or account. Clearing browser data, using private browsing, or changing browsers may erase progress.</div></section>`;
}
function route() {
  const hash = location.hash.replace(/^#/, "") || "home";
  if (hash === "home") dashboard();
  else if (hash === "course") course();
  else if (hash === "about") about();
  else if (hash.startsWith("lesson/")) lessonPage(Number(hash.split("/")[1]));
  else dashboard();
  window.scrollTo(0, 0);
  main.focus({ preventScroll: true });
}
window.addEventListener("hashchange", route);
route();

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
  const guide = GUIDES[day - 1];
  if (!lesson) { location.hash = "#course"; return; }
  const started = !!state.days[day];
  const done = !!state.days[day]?.completed;
  const options = day % 2 ? [lesson.correct, lesson.wrong] : [lesson.wrong, lesson.correct];
  const checks = state.days[day]?.checks || [];
  const evidence = state.days[day]?.note || "";
  const quizPassed = !!state.days[day]?.quizPassed;
  main.innerHTML = `<div class="breadcrumbs"><a href="#home">Dashboard</a> / <a href="#course">All lessons</a> / Day ${day}</div><div class="lesson-top"><div><div class="eyebrow">Week ${lesson.week}: ${WEEKS[lesson.week - 1]} · Day ${day} of 84</div><h1>${escapeHtml(lesson.title)}</h1></div><span class="pill ${done ? "done" : started ? "started" : ""}">${done ? "Completed ✓" : started ? "In progress" : "Ready to start"}</span></div>
  <section class="lesson-intro"><div class="eyebrow">Your mission today</div><p>${escapeHtml(lesson.idea)}</p><p><strong>Why it matters:</strong> ${escapeHtml(WEEK_COACHING[lesson.week - 1])}</p><p class="small">Work down the page in order. Tick each stage after you actually do it. Your work saves on this device.</p></section>
  <div class="lesson-layout"><div><section class="lesson-block"><span class="time">00–10 min · Discover</span><h2>1. See the idea</h2><p><strong>Get ready:</strong> ${escapeHtml(guide.materials)}.</p><p>${escapeHtml(guide.setup)}</p><div class="worked"><strong>Think like a designer</strong><p>${escapeHtml(lesson.example)}</p></div><label class="stage-check"><input type="checkbox" data-stage="0" ${checks[0] ? "checked" : ""}> I can explain today's idea and have my materials ready.</label></section>
  <section class="lesson-block"><span class="time">10–35 min · Guided build</span><h2>2. Build with help from the page</h2><p><strong>Start here:</strong> ${escapeHtml(lesson.guided)}</p><p><strong>Follow through:</strong> ${escapeHtml(guide.actions)}</p><div class="success-check"><strong>Check your result</strong><p>${escapeHtml(guide.test)}</p></div><details class="help"><summary>If you get stuck</summary><p>${escapeHtml(guide.rescue)}</p></details><label class="stage-check"><input type="checkbox" data-stage="1" ${checks[1] ? "checked" : ""}> I made and checked the guided version.</label></section>
  <section class="lesson-block"><span class="time">35–55 min · Independent challenge</span><h2>3. Try your own version</h2><p>${escapeHtml(lesson.challenge)}</p><p>Give yourself at least two attempts. Keep the first version or a sketch of it, change one thing, and test again.</p><div class="success-check"><strong>Success check</strong><p>${escapeHtml(lesson.success)}</p></div><label class="stage-check"><input type="checkbox" data-stage="2" ${checks[2] ? "checked" : ""}> I attempted the challenge and checked my result.</label><label class="evidence-label" for="lesson-notes">What did you make, test, or change? Write at least one specific sentence.</label><textarea id="lesson-notes" rows="4" placeholder="Example: My first stand tipped backward, so I widened its base by 10 mm.">${escapeHtml(evidence)}</textarea><p id="note-status" class="subtle small" role="status">Saved on this device.</p></section>
  <section class="lesson-block quiz"><span class="time">55–60 min · Check understanding</span><h2>4. Explain what you learned</h2><p>${escapeHtml(lesson.question)}</p><fieldset><legend>Choose the best answer</legend>${options.map(option => `<label><input type="radio" name="answer" value="${escapeHtml(option)}"> ${escapeHtml(option)}</label>`).join("")}</fieldset><button class="btn secondary" id="check-answer">Check answer</button><p id="feedback" class="feedback ${quizPassed ? "good" : ""}" role="status" aria-live="polite">${quizPassed ? "Question passed. You can explain why in your notebook." : ""}</p><p><strong>Say it in your own words:</strong> ${escapeHtml(guide.test)}</p></section>
  <div class="lesson-actions"><button class="btn" id="complete-button" ${done || !checks[0] || !checks[1] || !checks[2] || evidence.trim().length < 20 || !quizPassed ? "disabled" : ""}>${done ? "Completed ✓" : "Finish lesson"}</button><p id="completion-hint" class="subtle small" role="status">${done ? "Great work. Keep your model or sketch for later." : "Finish all three stages, write one specific sentence, and answer correctly to unlock completion."}</p></div><div class="footer-links">${day > 1 ? `<a href="#lesson/${day - 1}">← Day ${day - 1}</a>` : `<a href="#course">← All lessons</a>`}${day < 84 ? `<a href="#lesson/${day + 1}">Day ${day + 1} →</a>` : `<a href="#course">All lessons →</a>`}</div></div>
  <aside class="side-note"><div class="panel"><h3>Your 60-minute route</h3><p class="subtle small">10 min discover<br>25 min guided build<br>20 min own challenge<br>5 min understanding check</p><p id="stage-progress" class="pill">${checks.filter(Boolean).length}/3 stages checked</p><p class="subtle small">You may pause and return later. The times are guides, not a race.</p></div>
  <div class="panel video-card"><span class="eyebrow">Optional video helper</span><h3>${escapeHtml(lesson.video.title)}</h3><p class="subtle small">${escapeHtml(lesson.video.creator)}</p><p><strong>Watch for:</strong> ${escapeHtml(lesson.video.focus)}</p><p class="subtle small">This is a related example. Build today's project using the steps on this page.</p><a class="btn secondary" href="https://www.youtube.com/watch?v=${lesson.video.id}${lesson.video.start ? `&t=${lesson.video.start}s` : ""}" target="_blank" rel="noopener noreferrer">Watch the relevant part ↗</a><p class="subtle small">An adult can choose how Vivan watches YouTube.</p></div>
  <div class="panel"><h3>Maker reminder</h3><p class="subtle small">A prototype teaches you something even when it fails. Ask an adult before using cutting tools or a 3D printer.</p></div></aside></div><p id="storage-warning" class="warning" hidden>Your browser could not save progress. Check browser storage settings before continuing.</p>`;
  const note = document.querySelector("#lesson-notes");
  function refreshCompletion() {
    const entry = state.days[day] || {};
    const ready = entry.checks?.every(Boolean) && entry.checks?.length === 3 && (entry.note || "").trim().length >= 20 && entry.quizPassed;
    document.querySelector("#complete-button").disabled = !!entry.completed || !ready;
    document.querySelector("#stage-progress").textContent = `${(entry.checks || []).filter(Boolean).length}/3 stages checked`;
  }
  note.addEventListener("input", () => { record(day); state.days[day].note = note.value; save(); refreshCompletion(); });
  document.querySelectorAll("[data-stage]").forEach(box => box.addEventListener("change", () => {
    record(day);
    state.days[day].checks ||= [false, false, false];
    state.days[day].checks[Number(box.dataset.stage)] = box.checked;
    save();
    refreshCompletion();
  }));
  document.querySelector("#check-answer").onclick = () => {
    const selected = document.querySelector('input[name="answer"]:checked');
    const feedback = document.querySelector("#feedback");
    if (!selected) { feedback.textContent = "Choose an answer first."; feedback.className = "feedback try"; return; }
    record(day);
    const correct = selected.value === lesson.correct;
    state.days[day].quizAttempts = (state.days[day].quizAttempts || 0) + 1;
    if (correct) state.days[day].quizPassed = true;
    save();
    feedback.textContent = correct ? "You got it! Explain why in your notebook." : `Good try. The answer is: ${lesson.correct}. Read the big idea once more.`;
    feedback.className = `feedback ${correct ? "good" : "try"}`;
    refreshCompletion();
  };
  if (!done) document.querySelector("#complete-button").onclick = () => { complete(day); lessonPage(day); };
}
function about() {
  main.innerHTML = `<div class="eyebrow">For Vivan and family</div><h1>How the academy works</h1><p class="subtle">Each day is a guided 60-minute route. Pause when needed; learning matters more than speed.</p><div class="about-grid"><section class="panel"><h3>1. Discover</h3><p class="subtle">Read one idea, gather the listed materials and work through a concrete example.</p></section><section class="panel"><h3>2. Make and test</h3><p class="subtle">Follow the build steps, use the troubleshooting hint, then test your own version.</p></section><section class="panel"><h3>3. Explain</h3><p class="subtle">Write what changed, answer the knowledge check and keep your sketch or model.</p></section></div><section class="panel"><h2>What you need</h2><p class="subtle">A notebook, pencil, ruler, paper, cardboard, tape and access to <a href="https://www.tinkercad.com/learn" target="_blank" rel="noopener noreferrer">Tinkercad's learning area</a>. Each lesson lists its specific materials. An adult should help set up a supervised account and any cutting or printing tools. A 3D printer is optional; many prototypes use paper or cardboard.</p><h3>How progress works</h3><p class="subtle">Checking a stage, writing a note or answering a quiz marks that day attempted. To finish a lesson, check all three work stages, write one specific sentence about your work and answer the knowledge question correctly. This encourages reflection but does not prove mastery. Streaks count consecutive calendar days with an attempt. A missed day is a past calendar day after your first attempt with no activity; today is never counted as missed. You can revisit lessons at any time.</p><div class="warning"><strong>Progress stays in this browser.</strong> This site saves to localStorage on this device only. It does not sync to another device or account. Clearing browser data, using private browsing, or changing browsers may erase progress.</div></section>`;
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

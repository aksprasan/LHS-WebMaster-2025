window.addEventListener("DOMContentLoaded", () => {
  const EVENTS = [
    { name:"Animatronics", tags:["build","electronics","coding","prototype","team","submission"] },
    { name:"Architectural Design", tags:["cad","design","visual","presentation","team","submission"] },
    { name:"Audio Podcasting", tags:["media","audio","editing","creative","submission"] },
    { name:"Biotechnology Design", tags:["science","research","report","presentation","team","submission"] },
    { name:"Board Game Design", tags:["creative","design","testing","team","submission"] },
    { name:"Chapter Team", tags:["leadership","speaking","team","onsite","test"] },
    { name:"Children’s Stories", tags:["creative","writing","design","submission"] },
    { name:"Coding", tags:["coding","logic","onsite","test","fast"] },
    { name:"Computer-Aided Design (CAD), Architecture", tags:["cad","design","visual","onsite","precision"] },
    { name:"Computer-Aided Design (CAD), Engineering", tags:["cad","design","visual","onsite","precision"] },
    { name:"Data Science and Analytics", tags:["data","research","logic","tools","report","submission"] },
    { name:"Debating Technological Issues", tags:["speaking","debate","research","team","onsite"] },
    { name:"Digital Video Production", tags:["media","video","editing","creative","submission"] },
    { name:"Dragster Design", tags:["build","design","testing","physics","onsite","submission"] },
    { name:"Drone Challenge (UAV)", tags:["build","electronics","coding","testing","team","onsite","submission"] },
    { name:"Engineering Design", tags:["build","research","prototype","report","presentation","team","submission"] },
    { name:"Extemporaneous Speech", tags:["speaking","onsite","fast"] },
    { name:"Fashion Design and Technology", tags:["design","creative","build","visual","presentation","team","submission"] },
    { name:"Flight Endurance", tags:["build","testing","physics","onsite","submission"] },
    { name:"Forensic Science", tags:["science","logic","onsite","test","fast"] },
    { name:"Future Technology and Engineering Teacher", tags:["teaching","speaking","presentation","research","submission"] },
    { name:"Geospatial Technology", tags:["data","research","maps","tools","presentation","submission"] },
    { name:"Manufacturing Prototype", tags:["build","prototype","precision","team","submission"] },
    { name:"Music Production", tags:["media","audio","editing","creative","submission"] },
    { name:"On Demand Video", tags:["media","video","editing","creative","onsite","fast"] },
    { name:"Photographic Technology", tags:["media","photo","editing","creative","submission"] },
    { name:"Prepared Presentation", tags:["speaking","presentation","research","onsite"] },
    { name:"Promotional Design", tags:["design","branding","graphics","creative","submission"] },
    { name:"Robotics", tags:["build","electronics","coding","testing","team","onsite","submission"] },
    { name:"Senior Solar Sprint", tags:["build","physics","testing","team","onsite","submission"] },
    { name:"Software Development", tags:["coding","project","research","presentation","team","submission"] },
    { name:"STEM Mass Media", tags:["media","writing","speaking","story","team","onsite","submission"] },
    { name:"Structural Design and Engineering", tags:["build","physics","testing","team","onsite","submission"] },
    { name:"System Control Technology", tags:["build","electronics","coding","team","onsite","fast"] },
    { name:"Technology Bowl", tags:["test","logic","team","onsite","fast"] },
    { name:"Technology Problem Solving", tags:["logic","build","team","onsite","fast"] },
    { name:"Transportation Modeling", tags:["design","build","visual","submission"] },
    { name:"Video Game Design", tags:["coding","game","design","creative","team","submission"] },
    { name:"Virtual Reality Simulation (VR)", tags:["vr","3d","design","coding","creative","submission"] },
    { name:"Webmaster", tags:["web","design","coding","research","team","submission"] }
  ];

  const QUESTIONS = [
    {
      id:"interest",
      title:"What do you enjoy most?",
      hint:"Pick up to two.",
      type:"multi",
      max:2,
      options:[
        {label:"Coding and logic puzzles", desc:"Programming, debugging, algorithms.", add:["coding","logic"]},
        {label:"Design and visuals", desc:"Layout, graphics, CAD, style.", add:["design","visual","cad","creative"]},
        {label:"Building and testing", desc:"Prototyping, experiments, iteration.", add:["build","testing","physics","prototype","electronics"]},
        {label:"Speaking and performing", desc:"Presentations, interviews, debate.", add:["speaking","debate","presentation"]},
        {label:"Media and storytelling", desc:"Video, photo, audio, editing.", add:["media","editing","creative","writing","story"]}
      ]
    },
    {
      id:"team",
      title:"Do you prefer to work solo or with a team?",
      hint:"Choose one.",
      type:"single",
      options:[
        {label:"Mostly solo", desc:"I like owning my part end-to-end.", add:["solo"]},
        {label:"Mostly team", desc:"I like splitting roles and collaborating.", add:["team"]},
        {label:"Either is fine", desc:"I can adapt.", add:["solo","team"]}
      ]
    },
    {
      id:"onsite",
      title:"Do you want an on-site component?",
      hint:"Choose one.",
      type:"single",
      options:[
        {label:"Yes", desc:"I like live competition.", add:["onsite"]},
        {label:"No", desc:"I prefer submission-style events.", add:["submission"]},
        {label:"Either", desc:"No preference.", add:["onsite","submission"]}
      ]
    },
    {
      id:"time",
      title:"How much time can you realistically spend each week?",
      hint:"Choose one.",
      type:"single",
      options:[
        {label:"1–2 hours", desc:"Light workload.", add:["lowTime","fast"]},
        {label:"3–5 hours", desc:"Steady progress.", add:["medTime"]},
        {label:"6+ hours", desc:"Big builds and heavy docs are okay.", add:["highTime"]}
      ]
    },
    {
      id:"tools",
      title:"Which tools do you want to use?",
      hint:"Pick up to two.",
      type:"multi",
      max:2,
      options:[
        {label:"Web tools", desc:"HTML/CSS/JS, organizing content.", add:["web","design","coding","research"]},
        {label:"CAD / 3D modeling", desc:"Modeling, drawings, precision.", add:["cad","3d","design","visual","precision"]},
        {label:"Cameras / editing", desc:"Video/photo/audio editing.", add:["media","editing","creative"]},
        {label:"Data tools", desc:"Charts, analysis, evidence.", add:["data","research","logic","tools","report"]},
        {label:"Hardware", desc:"Electronics, prototyping.", add:["electronics","build","prototype","testing"]}
      ]
    },
    {
      id:"output",
      title:"What outcome sounds most satisfying?",
      hint:"Choose one.",
      type:"single",
      options:[
        {label:"A polished final product", desc:"Clean design and presentation.", add:["design","visual","branding","presentation"]},
        {label:"A working prototype", desc:"It functions and can be tested.", add:["build","prototype","testing","electronics"]},
        {label:"A strong performance", desc:"Speaking/judging energy.", add:["speaking","onsite","fast"]},
        {label:"A smart solution with evidence", desc:"Research + reasoning.", add:["research","report","logic","data"]}
      ]
    }
  ];

  const elTop = document.getElementById("top");
  const elBar = document.getElementById("bar");
  const elStepPill = document.getElementById("stepPill");
  const elModePill = document.getElementById("modePill");
  const elScreen = document.getElementById("screenQuiz");
  const elBack = document.getElementById("backBtn");
  const elReset = document.getElementById("resetBtn");
  const elNext = document.getElementById("nextBtn");
  const elQuizHeader = document.getElementById("quizHeader");
  const elNavRow = document.getElementById("navRow");

  const state = { step: 0, answers: Object.create(null) };

  function keyOf(q){ return q.id; }

  function getSelections(q){
    const v = state.answers[keyOf(q)];
    if (v === undefined || v === null) return [];
    return Array.isArray(v) ? v : [v];
  }

  function setSelections(q, arr){
    state.answers[keyOf(q)] = q.type === "single" ? (arr[0] ?? null) : arr;
  }

  function canGoNext(){
    const q = QUESTIONS[state.step];
    const sel = getSelections(q);
    if(q.type === "single") return sel.length === 1;
    if(q.type === "multi") return sel.length >= 1 && sel.length <= (q.max ?? 99);
    return true;
  }

  function renderStep(){
    const total = QUESTIONS.length;
    const stepNum = state.step + 1;
    elStepPill.textContent = `Step ${stepNum} of ${total}`;

    const pct = Math.round((state.step / total) * 100);
    elBar.style.width = `${pct}%`;

    const q = QUESTIONS[state.step];
    elModePill.textContent = q.type === "multi" ? `Pick up to ${q.max ?? 99}` : "Pick one";

    elScreen.innerHTML = "";

    const h = document.createElement("h2");
    h.className = "qtitle";
    h.textContent = q.title;

    const hint = document.createElement("p");
    hint.className = "qhint";
    hint.textContent = q.hint;

    const opts = document.createElement("div");
    opts.className = "options";
    opts.setAttribute("role", q.type === "multi" ? "listbox" : "radiogroup");
    opts.setAttribute("aria-label", q.title);

    const selected = new Set(getSelections(q));

    q.options.forEach((o, idx) => {
      const opt = document.createElement("div");
      opt.className = "opt";
      opt.tabIndex = 0;
      opt.setAttribute("role", q.type === "multi" ? "option" : "radio");
      opt.setAttribute("aria-checked", selected.has(idx) ? "true" : "false");

      const mark = document.createElement("div");
      mark.className = "mark";
      mark.innerHTML = `<svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M16.6 6.2l-7.1 7.2-3.1-3.1" stroke="white" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

      const txt = document.createElement("div");
      txt.className = "otxt";

      const lab = document.createElement("div");
      lab.className = "olab";
      lab.textContent = o.label;

      const desc = document.createElement("div");
      desc.className = "odesc";
      desc.textContent = o.desc;

      txt.appendChild(lab);
      txt.appendChild(desc);

      opt.appendChild(mark);
      opt.appendChild(txt);

      function toggle(){
        const current = new Set(getSelections(q));
        if(q.type === "single"){
          setSelections(q, [idx]);
        }else{
          if(current.has(idx)) current.delete(idx);
          else{
            const max = q.max ?? 99;
            if(current.size >= max) return;
            current.add(idx);
          }
          setSelections(q, Array.from(current));
        }
        renderStep();
      }

      opt.addEventListener("click", toggle);
      opt.addEventListener("keydown", (e) => {
        if(e.key === "Enter" || e.key === " "){
          e.preventDefault();
          toggle();
        }
      });

      opts.appendChild(opt);
    });

    elScreen.appendChild(h);
    elScreen.appendChild(hint);
    elScreen.appendChild(opts);

    elBack.classList.toggle("disabled", state.step === 0);
    elNext.textContent = state.step === QUESTIONS.length - 1 ? "Submit" : "Next";
    elNext.classList.toggle("disabled", !canGoNext());
  }

  function collectTags(){
    const tags = [];
    for(const q of QUESTIONS){
      const sel = getSelections(q);
      for(const idx of sel){
        const opt = q.options[idx];
        if(opt && opt.add) tags.push(...opt.add);
      }
    }
    return tags;
  }

  function scoreEventsTop5(){
    const tags = collectTags();
    const counts = new Map();
    for(const t of tags) counts.set(t, (counts.get(t) || 0) + 1);

    const wantsOnsite = counts.has("onsite");
    const wantsSubmission = counts.has("submission");
    const time = counts.has("highTime") ? "High" : counts.has("medTime") ? "Medium" : counts.has("lowTime") ? "Low" : null;

    const heavy = new Set([
      "Animatronics","Architectural Design","Biotechnology Design","Engineering Design","Manufacturing Prototype",
      "Robotics","Software Development","Drone Challenge (UAV)","Virtual Reality Simulation (VR)","Video Game Design","STEM Mass Media"
    ]);

    const scored = EVENTS.map(ev => {
      let s = 0;
      for(const t of ev.tags){
        if(counts.has(t)) s += counts.get(t);
      }
      if(wantsOnsite && ev.tags.includes("onsite")) s += 2;
      if(wantsSubmission && ev.tags.includes("submission")) s += 1;

      if(time === "Low" && heavy.has(ev.name)) s -= 2;
      if(time === "Medium" && heavy.has(ev.name)) s -= 1;
      if(time === "High" && !heavy.has(ev.name)) s += 1;

      return { name: ev.name, score: s };
    }).sort((a,b)=> b.score - a.score);

    const top = scored.slice(0, 5);
    return top.map((it, i) => ({
      name: it.name,
      badge: i < 2 ? { text:"Great fit", cls:"great" } : { text:"Good fit", cls:"good" }
    }));
  }

  function showResults(){
    elBar.style.width = "100%";
    elQuizHeader.style.display = "none";
    elNavRow.style.display = "none";
    elTop.style.display = "none";

    elScreen.innerHTML = "";

    const wrap = document.createElement("div");
    wrap.className = "resultsWrap";

    const title = document.createElement("div");
    title.className = "resultsTitle";
    title.textContent = "Recommended Events";

    const list = document.createElement("div");
    list.className = "results";

    const ranked = scoreEventsTop5();
    ranked.forEach(item => {
      const row = document.createElement("div");
      row.className = "result";

      const name = document.createElement("p");
      name.className = "rName";
      name.textContent = item.name;

      const badge = document.createElement("div");
      badge.className = `badge ${item.badge.cls}`;
      badge.textContent = item.badge.text;

      row.appendChild(name);
      row.appendChild(badge);
      list.appendChild(row);
    });

    const btnRow = document.createElement("div");
    btnRow.className = "row";

    const resetBtn = document.createElement("button");
    resetBtn.className = "primary";
    resetBtn.type = "button";
    resetBtn.textContent = "Reset";
    resetBtn.addEventListener("click", resetAll);

    const backToBtn = document.createElement("button");
    backToBtn.className = "ghost";
    backToBtn.type = "button";
    backToBtn.textContent = "Back to Chapter";
    backToBtn.addEventListener("click", () => {
        window.location.href = "../chapter/chapter.html";
    });

    btnRow.appendChild(resetBtn);
    btnRow.appendChild(backToBtn);

    wrap.appendChild(title);
    wrap.appendChild(list);
    wrap.appendChild(btnRow);

    elScreen.appendChild(wrap);
  }

  function resetAll(){
    state.step = 0;
    state.answers = Object.create(null);
    elTop.style.display = "";
    elQuizHeader.style.display = "";
    elNavRow.style.display = "";
    renderStep();
  }

  elBack.addEventListener("click", () => {
    if(state.step === 0) return;
    state.step -= 1;
    renderStep();
  });

  elNext.addEventListener("click", () => {
    if(!canGoNext()) return;
    if(state.step === QUESTIONS.length - 1){
      showResults();
      return;
    }
    state.step += 1;
    renderStep();
  });

  elReset.addEventListener("click", resetAll);

  renderStep();
});
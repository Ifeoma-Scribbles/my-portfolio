// Chapters and case studies.
// - Two levels of full-screen layers use the browser's built-in <dialog> (handles Esc and keyboard focus):
//     chapter  (#pm, #qa)          opened from the two big cards
//     case     (#pm/venstoc, ...)  a side panel opened from a project card
// - Each level has its own address, so the Back button steps out one level and a link can open one directly.
(function () {
  var chapters = { pm: document.getElementById("chapter-pm"), qa: document.getElementById("chapter-qa") };
  var cases = {};
  document.querySelectorAll("dialog.case").forEach(function (d) { cases[d.id.replace("case-", "")] = d; });
  if (!chapters.pm || !chapters.qa || !chapters.pm.showModal) return;

  var cur = { chapter: null, kase: null };
  var lastTrigger = null;

  function setOrigin(dlg, el) {
    var r = el ? el.getBoundingClientRect() : null;
    dlg.style.setProperty("--ox", (r ? r.left + r.width / 2 : window.innerWidth / 2) + "px");
    dlg.style.setProperty("--oy", (r ? r.top + r.height / 2 : window.innerHeight / 2) + "px");
  }

  // Bring the screen in line with (chapter, case). Closes and opens whatever differs.
  function apply(chapter, kase, trigger) {
    if (cur.kase && cur.kase !== kase) { var oc = cur.kase; cur.kase = null; cases[oc].close(); }
    if (cur.chapter && cur.chapter !== chapter) { var och = cur.chapter; cur.chapter = null; chapters[och].close(); }
    if (chapter && !cur.chapter) {
      var dlg = chapters[chapter];
      setOrigin(dlg, trigger);
      dlg.scrollTop = 0;
      dlg.showModal();
      cur.chapter = chapter;
    }
    if (chapter && kase && cur.kase !== kase) {
      cases[kase].scrollTop = 0;
      cases[kase].showModal();
      cur.kase = kase;
    }
    document.body.classList.toggle("chapter-open", !!cur.chapter);
    if (!cur.chapter && lastTrigger) {
      if (document.contains(lastTrigger)) lastTrigger.focus();
      lastTrigger = null;
    }
  }

  function openChapter(key, trigger) {
    if (cur.chapter === key) return;
    if (!cur.chapter) lastTrigger = trigger;
    history[cur.chapter ? "replaceState" : "pushState"]({ chapter: key }, "", "#" + key);
    apply(key, null, trigger);
  }

  function openCase(id) {
    if (!cur.chapter || !cases[id]) return;
    history.pushState({ chapter: cur.chapter, kase: id }, "", "#" + cur.chapter + "/" + id);
    apply(cur.chapter, id, null);
  }

  // Esc and the close buttons all end up here: the dialog closed itself, so sync our state and the address bar.
  function onUserClose(level, key) {
    if (level === "kase") {
      if (cur.kase !== key) return;           // closed by apply(), nothing to do
      cur.kase = null;
      if (history.state && history.state.kase) history.back();
    } else {
      if (cur.chapter !== key) return;
      cur.chapter = null;
      document.body.classList.remove("chapter-open");
      if (history.state && history.state.chapter) history.back();
      else history.replaceState(null, "", "#paths");
      apply(null, null, null);                 // restores focus
    }
  }
  Object.keys(chapters).forEach(function (k) { chapters[k].addEventListener("close", function () { onUserClose("chapter", k); }); });
  Object.keys(cases).forEach(function (k) { cases[k].addEventListener("close", function () { onUserClose("kase", k); }); });

  document.addEventListener("click", function (e) {
    var t;
    if ((t = e.target.closest("[data-open]"))) { openChapter(t.getAttribute("data-open"), t); return; }
    if ((t = e.target.closest("[data-case]"))) { openCase(t.getAttribute("data-case")); return; }
    if (e.target.closest("[data-close-case]")) { if (cur.kase) cases[cur.kase].close(); return; }
    if (e.target.closest("[data-close]")) { if (cur.chapter) chapters[cur.chapter].close(); return; }
    if ((t = e.target.closest("[data-goto]"))) {
      // Leave the chapter and scroll to a section on the main page. Back returns to the chapter.
      e.preventDefault();
      var id = t.getAttribute("data-goto"), target = document.getElementById(id);
      var oc = cur.kase, och = cur.chapter;
      cur.kase = null; cur.chapter = null; lastTrigger = null;
      if (oc) cases[oc].close();
      if (och) chapters[och].close();
      document.body.classList.remove("chapter-open");
      history.pushState(null, "", "#" + id);
      if (target) { target.scrollIntoView(); target.setAttribute("tabindex", "-1"); target.focus({ preventScroll: true }); }
    }
  });

  function fromHash() {
    var m = /^#(pm|qa)(?:\/([\w-]+))?$/.exec(location.hash);
    var chapter = m ? m[1] : null;
    var kase = m && m[2] && cases[m[2]] ? m[2] : null;
    apply(chapter, kase, null);
  }
  window.addEventListener("popstate", fromHash);
  fromHash();   // direct link such as /#pm/venstoc
})();

// Scroll reveals. Content is fully visible without JavaScript, with an unsupported browser,
// or when the visitor has asked for reduced motion.
(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;

  var groups = [".about__grid > *", ".paths__head > *", ".paths__cards > *", ".story__steps > li", ".story__takeaway",
                ".freelance__grid > *", ".contact__grid > *"];
  var items = [];
  groups.forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el, i) {
      el.classList.add("reveal");
      el.style.setProperty("--d", (i * 90) + "ms");
      items.push(el);
    });
  });
  document.documentElement.classList.add("js");

  var heardBack = false;
  var io = new IntersectionObserver(function (entries) {
    heardBack = true;
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target;
      io.unobserve(el);
      el.classList.add("is-in");
      // Hand the element back to its normal styles (hover effects etc.) once the entrance is done.
      setTimeout(function () { el.classList.remove("reveal", "is-in"); el.style.removeProperty("--d"); }, 1400);
    });
  }, { threshold: 0.12 });
  items.forEach(function (el) { io.observe(el); });

  // Safety net: a working browser reports back straight away. If it never does, show everything.
  setTimeout(function () {
    if (heardBack) return;
    document.documentElement.classList.remove("js");
    items.forEach(function (el) { el.classList.remove("reveal"); el.style.removeProperty("--d"); });
  }, 1500);
})();

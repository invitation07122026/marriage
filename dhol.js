(function () {
  "use strict";
  function initDhol() {
    const btn = document.getElementById("dholBeatBtn");
    const count = document.getElementById("dholCount");
    const percent = document.getElementById("dholPercent");
    const fill = document.getElementById("dholProgressFill");
    const message = document.getElementById("dholMessage");
    const unlocked = document.getElementById("dholUnlocked");
    if (!btn || !count || !percent || !fill || !message || !unlocked) return;

    let beats = 0;
    let done = false;
    let lastActivation = 0;
    const dhol = new Audio("./asset/dhol-hit.wav");
    dhol.preload = "auto";
    dhol.volume = 0.95;

    const messages = [
      "🔥 Beat 1 — Let the celebration begin!",
      "🔥 Beat 2 — The dhol has your attention!",
      "🔥 Beat 3 — More energy, more joy!",
      "🔥 Beat 4 — Halfway to the big reveal!",
      "🔥 Beat 5 — The celebration is getting louder!",
      "🔥 Beat 6 — One final beat…!",
      "🎉 Beat 7 — CELEBRATION UNLOCKED!"
    ];

    function playDhol() {
      try {
        dhol.currentTime = 0;
        const p = dhol.play();
        if (p && p.catch) p.catch(() => {});
      } catch (_) {}
    }

    function confetti() {
      for (let i = 0; i < 42; i++) {
        const el = document.createElement("span");
        el.className = "dhol-confetti";
        el.style.left = (Math.random() * 100) + "vw";
        el.style.setProperty("--dx", ((Math.random() * 2 - 1) * 180) + "px");
        el.style.background = ["#9e2a2b", "#c89643", "#e8a33b", "#f5d7a0"][i % 4];
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 1900);
      }
    }

    function beat() {
      if (done) return;
      const now = Date.now();
      if (now - lastActivation < 90) return;
      lastActivation = now;

      beats += 1;
      playDhol();
      count.textContent = String(beats);
      const pct = Math.round((beats / 7) * 100);
      percent.textContent = pct + "%";
      fill.style.width = pct + "%";
      message.textContent = messages[beats - 1];

      btn.classList.remove("dhol-hit");
      void btn.offsetWidth;
      btn.classList.add("dhol-hit");
      if (navigator.vibrate) { try { navigator.vibrate(30); } catch (_) {} }

      if (beats === 7) {
        done = true;
        unlocked.hidden = false;
        unlocked.classList.add("show");
        confetti();
      }
    }

    btn.addEventListener("click", function (e) { e.preventDefault(); beat(); }, false);
    if (window.PointerEvent) {
      btn.addEventListener("pointerup", function (e) {
        if (e.pointerType === "mouse") return;
        e.preventDefault(); beat();
      }, false);
    }
    btn.addEventListener("touchend", function (e) { e.preventDefault(); beat(); }, { passive: false });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initDhol, { once: true });
  else initDhol();
})();

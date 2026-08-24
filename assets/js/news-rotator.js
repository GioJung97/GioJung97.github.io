// Home page news rotator: shows one item at a time and cycles through the
// most recent few. Markup comes from _includes/news_rotator.liquid.
(function () {
  "use strict";

  // Long enough to outlast the CSS transition on .news-rotator__item.
  var LEAVE_MS = 550;

  function init(root) {
    var slides = Array.prototype.slice.call(root.querySelectorAll("[data-news-slide]"));
    var dots = Array.prototype.slice.call(root.querySelectorAll("[data-news-dot]"));

    // A single item has nothing to rotate through; leave the markup as served.
    if (slides.length < 2) {
      return;
    }

    var interval = parseInt(root.getAttribute("data-news-interval"), 10) || 6000;
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    var current = 0;
    var timer = null;
    var leaveTimer = null;
    var paused = true;

    slides.forEach(function (slide, i) {
      if (slide.classList.contains("is-active")) {
        current = i;
      }
    });

    root.style.setProperty("--news-rotate-interval", interval + "ms");

    // Restart the progress fill on the active dot from zero.
    function restartTick() {
      root.classList.remove("is-ticking");
      // force a reflow so the animation replays rather than continuing
      void root.offsetWidth;
      if (!paused) {
        root.classList.add("is-ticking");
      }
    }

    function show(next) {
      if (next === current) {
        return;
      }

      var from = slides[current];
      var to = slides[next];

      window.clearTimeout(leaveTimer);
      slides.forEach(function (slide) {
        slide.classList.remove("is-leaving");
      });

      from.classList.remove("is-active");
      from.setAttribute("aria-hidden", "true");

      if (!reduceMotion.matches) {
        from.classList.add("is-leaving");
        leaveTimer = window.setTimeout(function () {
          from.classList.remove("is-leaving");
        }, LEAVE_MS);
      }

      to.classList.add("is-active");
      to.removeAttribute("aria-hidden");

      dots.forEach(function (dot, i) {
        dot.classList.toggle("is-active", i === next);
        if (i === next) {
          dot.setAttribute("aria-current", "true");
        } else {
          dot.removeAttribute("aria-current");
        }
      });

      current = next;
      restartTick();
    }

    function advance() {
      show((current + 1) % slides.length);
    }

    function stop() {
      paused = true;
      root.classList.add("is-paused");
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    function start() {
      if (timer) {
        window.clearInterval(timer);
      }
      paused = false;
      root.classList.remove("is-paused");
      timer = window.setInterval(advance, interval);
      restartTick();
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () {
        var wasRunning = !paused;
        show(i);
        // a manual jump restarts the dwell time on the item just picked
        if (wasRunning) {
          start();
        }
      });
    });

    // Hovering does not pause: the rotation keeps running under the cursor.
    // Keyboard focus still holds it, so an item cannot swap out from under
    // someone tabbing through a link inside it. Clicking a dot focuses that
    // button as well, and that must not pause, so only :focus-visible counts.
    function isKeyboardFocusInside() {
      var active = document.activeElement;
      if (!active || !root.contains(active)) {
        return false;
      }
      try {
        return active.matches(":focus-visible");
      } catch (err) {
        // no :focus-visible support, so treat any focus as held
        return true;
      }
    }

    function resumeIfIdle() {
      if (document.hidden || isKeyboardFocusInside()) {
        return;
      }
      start();
    }

    root.addEventListener("focusin", function () {
      if (isKeyboardFocusInside()) {
        stop();
      }
    });
    root.addEventListener("focusout", function () {
      // activeElement is still settling during focusout, so check on the next tick
      window.setTimeout(resumeIfIdle, 0);
    });

    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        stop();
      } else {
        resumeIfIdle();
      }
    });

    start();
  }

  function boot() {
    Array.prototype.slice.call(document.querySelectorAll("[data-news-rotator]")).forEach(init);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();

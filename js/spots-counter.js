/* =============================================================
   FOUNDING-MEMBER SPOTS COUNTER — single source of truth

   To update the count as applications come in:
   change the SPOTS_CLAIMED number below, save, refresh.

   The new number, the "X left" count, and the progress-bar fill
   all sync automatically across every page that loads this file
   (index.html pricing card + apply.html price callout).
   ============================================================= */
(function () {
  const SPOTS_CLAIMED = 7;   // ← edit this number only
  const SPOTS_TOTAL   = 20;  //   (keep this at 20 unless the cap itself moves)

  const left = Math.max(0, SPOTS_TOTAL - SPOTS_CLAIMED);
  const pct  = Math.max(0, Math.min(100, (SPOTS_CLAIMED / SPOTS_TOTAL) * 100));

  function apply() {
    document.querySelectorAll('[data-spots="claimed"]').forEach(el => el.textContent = SPOTS_CLAIMED);
    document.querySelectorAll('[data-spots="total"]').forEach(el => el.textContent = SPOTS_TOTAL);
    document.querySelectorAll('[data-spots="left"]').forEach(el => el.textContent = left);
    document.querySelectorAll('[data-spots="bar"]').forEach(el => el.style.width = pct + '%');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', apply);
  } else {
    apply();
  }
})();

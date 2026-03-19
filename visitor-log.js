/**
 * visitor-log.js
 * Add <script src="visitor-log.js"></script> in your portfolio's <head>
 * It silently pings your InfinityFree logger on every page load.
 */

(function () {
  const LOG_URL = "https://cv-resume.infinityfreeapp.com/log.php";

  const page = window.location.pathname || "/";

  fetch(LOG_URL + "?page=" + encodeURIComponent(page), {
    method: "GET",
    mode: "cors",
    cache: "no-store",
  }).catch(function () {});
})();

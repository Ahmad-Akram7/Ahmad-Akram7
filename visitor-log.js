/**
 * visitor-log.js
 * Uses an invisible image ping instead of fetch — bypasses CORS entirely.
 */

(function () {
  const LOG_URL = "https://cv-resume.infinityfreeapp.com/log.php";
  const page = window.location.pathname || "/";

  var img = new Image();
  img.src = LOG_URL + "?page=" + encodeURIComponent(page);
  // No CORS, no fetch, no errors — browser just silently fires the request
})();

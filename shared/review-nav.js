/* Review-only: small "back to all drafts" button. Remove this script tag when a draft is chosen. */
(function () {
  var css = ".review-back{position:fixed;top:calc(8px + env(safe-area-inset-top));left:8px;z-index:9999;width:32px;height:32px;border-radius:50%;display:grid;place-items:center;" +
    "background:rgba(10,20,14,.62);color:#fff;text-decoration:none;font:600 20px/1 system-ui,sans-serif;border:1px solid rgba(255,255,255,.3);" +
    "-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);box-shadow:0 2px 8px rgba(0,0,0,.25)}.review-back span{transform:translateX(-1px) translateY(-1px)}";
  var s = document.createElement("style"); s.textContent = css; document.head.appendChild(s);
  var a = document.createElement("a");
  a.href = "../"; a.className = "review-back"; a.title = "All drafts"; a.setAttribute("aria-label", "Back to all drafts");
  a.innerHTML = "<span>‹</span>";
  document.body.appendChild(a);
})();

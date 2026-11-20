(() => {
 const grid = document.querySelector("[data-social-grid]");
 if (!grid) return;
 const all = grid.dataset.socialGrid === "all";
 const links = window.AYLOY_SOCIAL_VIDEOS || [];
 const dialog = document.createElement("dialog");
 dialog.className = "social-dialog";
 dialog.setAttribute("aria-label", "Sosyal video");
 const close = document.createElement("button");
 close.type = "button"; close.className = "social-close";
 close.textContent = "×"; close.setAttribute("aria-label", "Videoyu kapat");
 const viewer = document.createElement("div");
 dialog.append(close, viewer); document.body.append(dialog);
 close.addEventListener("click", () => dialog.close());
 dialog.addEventListener("click", e => { if(e.target === dialog) dialog.close(); });
 dialog.addEventListener("close", () => viewer.replaceChildren());
 const makePlayer = (id, preview) => {
  const frame = document.createElement("iframe");
  frame.src = "https://www.tiktok.com/player/v1/" + id +
   "?autoplay=0&loop=0&description=0&music_info=0&rel=0" + (preview ? "&muted=1" : "");
  frame.title = "TikTok video";
  frame.loading = "lazy";
  frame.allow = "fullscreen; encrypted-media; picture-in-picture";
  frame.allowFullscreen = true;
  if(preview) { frame.tabIndex = -1; frame.setAttribute("aria-hidden", "true"); }
  return frame;
 };
 const lazy = new IntersectionObserver(entries => entries.forEach(entry => {
  if (!entry.isIntersecting || !entry.target.getBoundingClientRect().width) return;
  const card = entry.target;
  card.querySelector(".social-preview").append(makePlayer(card.dataset.videoId, true));
  lazy.unobserve(card);
 }), {rootMargin: "100px"});
 const resize = new ResizeObserver(entries => entries.forEach(({target}) => {
  target.style.setProperty("--video-scale", target.clientWidth / 325);
 }));
 links.slice(0, all ? links.length : 6).forEach((link, index) => {
  let url; try { url = new URL(link); } catch { return; }
  const match = url.pathname.match(/^\/@([^/]+)\/video\/(\d+)\/?$/);
  if(!match || url.hostname !== "www.tiktok.com") return;
  const card = document.createElement("article");
  card.className = "social-card"; card.dataset.videoId = match[2];
  const preview = document.createElement("div"); preview.className = "social-preview";
  const button = document.createElement("button");
  button.type = "button"; button.className = "social-play";
  button.setAttribute("aria-label", match[1] + " videosunu oynat");
  button.innerHTML = '<span aria-hidden="true">▶</span>';
  const source = document.createElement("a");
  source.href = url.href; source.target = "_blank"; source.rel = "noopener noreferrer";
  source.className = "social-source"; source.textContent = "@" + match[1];
  button.addEventListener("click", () => {
   const frame = makePlayer(match[2], false);
   viewer.replaceChildren(frame);
   dialog.showModal(); close.focus();
  });
  card.append(preview, button, source); grid.append(card);
  resize.observe(preview); lazy.observe(card);
 });
 // A preview hidden by the phone layout should load when returning to desktop.
 matchMedia("(max-width: 700px)").addEventListener("change", () => {
  grid.querySelectorAll(".social-card").forEach(card => {
   if(!card.querySelector("iframe")) lazy.observe(card);
  });
 });
})();

// Rotating typewriter subtitle on the homepage.
// Without JavaScript, or with "reduce motion" on, the welcome line simply shows as is.
(() => {
  const el = document.querySelector(".type-text");
  const nameLink = document.querySelector(".name");
  if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const phrases = [
    "welcome! click around to learn more about me",
    "cs student @ uga",
    "a people person who happens to write code",
    "building ai agents that ask before they act",
    "saturday mornings = arsenal",
    "probably on a run with nest",
  ];
  const TYPE_MS = 55, DELETE_MS = 25, HOLD_MS = 2200, WELCOME_HOLD_MS = 4500;
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  async function type(text) {
    for (const ch of text) { el.textContent += ch; await sleep(TYPE_MS); }
  }
  async function erase() {
    while (el.textContent.length) { el.textContent = el.textContent.slice(0, -1); await sleep(DELETE_MS); }
  }

  async function run() {
    el.textContent = "";
    // Wait for the intro (objects landing, name appearing) before typing.
    await sleep(document.documentElement.classList.contains("intro") ? 1750 : 400);
    for (let i = 0; ; i = (i + 1) % phrases.length) {
      await type(phrases[i]);
      if (i === 0 && nameLink) {
        // Welcome line done: pop the name like a button so visitors know to click it.
        nameLink.classList.add("nudge");
        setTimeout(() => nameLink.classList.remove("nudge"), 700);
      }
      await sleep(i === 0 ? WELCOME_HOLD_MS : HOLD_MS);
      await erase();
      await sleep(300);
    }
  }
  run();
})();

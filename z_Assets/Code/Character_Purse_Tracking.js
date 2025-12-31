const c = dv.current();
const totalGold = c.purse ?? 0;

// Convert total gold into denominations
let remaining = totalGold;
const pp = Math.floor(remaining / 10);
remaining -= pp * 10;

const gp = Math.floor(remaining);
remaining -= gp;

const ep = Math.floor(remaining / 0.5);
remaining -= ep * 0.5;

const sp = Math.floor(remaining / 0.1);
remaining -= sp * 0.1;

const cp = Math.round(remaining / 0.01);

// Format display with icons or simple labels
dv.el("div", `
<div class="money-summary">

  <div class="coin-box" data-coin="pp" data-multiplier="10">
    <div class="coin-label">Platinum</div>
    <div class="coin-controls">
      <input type="number" class="coin-input" placeholder="±" />
      <button class="coin-btn apply">Apply</button>
    </div>
    <div class="coin-value">${pp}</div>
  </div>

  <div class="coin-box" data-coin="gp" data-multiplier="1">
    <div class="coin-label">Gold</div>
    <div class="coin-controls">
      <input type="number" class="coin-input" placeholder="±" />
      <button class="coin-btn apply">Apply</button>
    </div>
    <div class="coin-value">${gp}</div>
  </div>

  <div class="coin-box" data-coin="ep" data-multiplier="0.5">
    <div class="coin-label">Electrum</div>
    <div class="coin-controls">
      <input type="number" class="coin-input" placeholder="±" />
      <button class="coin-btn apply">Apply</button>
    </div>
    <div class="coin-value">${ep}</div>
  </div>

  <div class="coin-box" data-coin="sp" data-multiplier="0.1">
    <div class="coin-label">Silver</div>
    <div class="coin-controls">
      <input type="number" class="coin-input" placeholder="±" />
      <button class="coin-btn apply">Apply</button>
    </div>
    <div class="coin-value">${sp}</div>
  </div>

  <div class="coin-box" data-coin="cp" data-multiplier="0.01">
    <div class="coin-label">Copper</div>
    <div class="coin-controls">
      <input type="number" class="coin-input" placeholder="±" />
      <button class="coin-btn apply">Apply</button>
    </div>
    <div class="coin-value">${cp}</div>
  </div>

  <img src="z_Assets/Misc/goldPurse2.png" class="gold-purse-bg" />
</div>
`, { cls: "money-summary-block" });

let inputValue = 0;
let multiplier = 1;
const deltaGp = inputValue * multiplier;

dv.el("div", `
<div class="money-quick-actions">
  <button class="quick-btn" data-gp="-10">-10 gp</button>
  <button class="quick-btn" data-gp="-25">-25 gp</button>
  <button class="quick-btn" data-gp="-50">-50 gp</button>
  <button class="quick-btn" data-gp="-100">-100 gp</button>
  <button class="quick-btn" data-gp="+10">+10 gp</button>
  <button class="quick-btn" data-gp="+25">+25 gp</button>
  <button class="quick-btn" data-gp="+50">+50 gp</button>
  <button class="quick-btn" data-gp="+100">+100 gp</button>
</div>
`);

// ===============================
// Gold Adjustment Wiring
// ===============================

const file = app.workspace.getActiveFile();

// Helper: safely update purse
async function updatePurse(deltaGp) {
  const page = dv.current();
  const current = page.purse ?? 0;
  const updated = Math.max(0, +(current + deltaGp).toFixed(2));

  const content = await app.vault.read(file);

  const newContent = content.replace(
    /purse:\s*[0-9.]+/,
    `purse: ${updated}`
  );

  await app.vault.modify(file, newContent);
}

// Remove any existing handler
if (window._moneyClickHandler) {
  document.removeEventListener("click", window._moneyClickHandler);
}

// Define handler ONCE
window._moneyClickHandler = async function (e) {
  const applyBtn = e.target.closest(".coin-btn.apply");
  const quickBtn = e.target.closest(".quick-btn");

  if (applyBtn) {
    const box = applyBtn.closest(".coin-box");
    const input = box.querySelector(".coin-input");

    const amount = parseFloat(input.value);
    if (isNaN(amount) || amount === 0) return;

    const multiplier = parseFloat(box.dataset.multiplier);
    const deltaGp = amount * multiplier;

    const verb = deltaGp < 0 ? "Spent" : "Gained";
    new window.Notice(`${verb} ${Math.abs(deltaGp)} gp`);

    await updatePurse(deltaGp);
    input.value = "";
    return;
  }

  if (quickBtn) {
    const deltaGp = parseFloat(quickBtn.dataset.gp);
    if (isNaN(deltaGp) || deltaGp === 0) return;

    const verb = deltaGp < 0 ? "Spent" : "Gained";
    new window.Notice(`${verb} ${Math.abs(deltaGp)} gp`);

    await updatePurse(deltaGp);
  }
};

// Attach fresh
document.addEventListener("click", window._moneyClickHandler);


// --- Gold Comment Logic ---
const gold = dv.current().purse || 0;
const lvl = dv.current().Level || 1;

// Dynamic scaling: thresholds grow with level
const brokeCap = 25 * lvl;
const gettingByCap = 125 * lvl;
const comfortableCap = 500 * lvl;
const wealthyCap = 2000 * lvl;

// Determine category
let category = "";
if (gold < brokeCap) category = "broke";
else if (gold < gettingByCap) category = "getting_by";
else if (gold < comfortableCap) category = "comfortable";
else if (gold < wealthyCap) category = "wealthy";
else category = "loaded";

// Load and normalize comments note
const commentsPage = dv.page("z_Assets/Strings/Gold_Comments");

// Dataview sometimes treats frontmatter as an object under .file.frontmatter
const fm = commentsPage?.file?.frontmatter ?? {};
const comments = fm[category];

// Pick a random comment
let comment = "";
if (comments && comments.length > 0) {
  comment = comments[Math.floor(Math.random() * comments.length)];
} else {
  comment = comments;
}

// Append comment below the coin boxes
const commentDiv = dv.el("div", comment, { cls: "gold-comment" });
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
  <div class="coin-box">
    <div class="coin-label">Platinum</div>
    <div class="coin-value">${pp}</div>
  </div>
  <div class="coin-box">
    <div class="coin-label">Gold</div>
    <div class="coin-value">${gp}</div>
  </div>
  <div class="coin-box">
    <div class="coin-label">Electrum</div>
    <div class="coin-value">${ep}</div>
  </div>
  <div class="coin-box">
    <div class="coin-label">Silver</div>
    <div class="coin-value">${sp}</div>
  </div>
  <div class="coin-box">
    <div class="coin-label">Copper</div>
    <div class="coin-value">${cp}</div>
  </div>
  <img src="z_Assets/Misc/goldPurse2.png" class="gold-purse-bg" />
</div>
`, { cls: "money-summary-block" });


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
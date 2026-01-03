// ================================================
// 1. STYLE MAPS (unchanged)
// ================================================

const SANS_ITALIC_MAP = {
  'A': '𝘈','B': '𝘉','C': '𝘊','D': '𝘋','E': '𝘌','F': '𝘍','G': '𝘎','H': '𝘏','I': '𝘐','J': '𝘑',
  'K': '𝘒','L': '𝘓','M': '𝘔','N': '𝘕','O': '𝘖','P': '𝘗','Q': '𝘘','R': '𝘙','S': '𝘚','T': '𝘛',
  'U': '𝘜','V': '𝘝','W': '𝘞','X': '𝘟','Y': '𝘠','Z': '𝘡',
  'a': '𝘢','b': '𝘣','c': '𝘤','d': '𝘥','e': '𝘦','f': '𝘧','g': '𝘨','h': '𝘩','i': '𝘪','j': '𝘫',
  'k': '𝘬','l': '𝘭','m': '𝘮','n': '𝘯','o': '𝘰','p': '𝘱','q': '𝘲','r': '𝘳','s': '𝘴','t': '𝘵',
  'u': '𝘶','v': '𝘷','w': '𝘸','x': '𝘹','y': '𝘺','z': '𝘻'
};

const BOLD_ITALIC_SANS_MAP = {
  'A': '𝘼','B': '𝘽','C': '𝘾','D': '𝘿','E': '𝙀','F': '𝙁','G': '𝙂','H': '𝙃','I': '𝙄','J': '𝙅',
  'K': '𝙆','L': '𝙇','M': '𝙈','N': '𝙉','O': '𝙊','P': '𝙋','Q': '𝙌','R': '𝙍','S': '𝙎','T': '𝙏',
  'U': '𝙐','V': '𝙑','W': '𝙒','X': '𝙓','Y': '𝙔','Z': '𝙕',
  'a': '𝙖','b': '𝙗','c': '𝙘','d': '𝙙','e': '𝙚','f': '𝙛','g': '𝙜','h': '𝙝','i': '𝙞','j': '𝙟',
  'k': '𝙠','l': '𝙡','m': '𝙢','n': '𝙣','o': '𝙤','p': '𝙥','q': '𝙦','r': '𝙧','s': '𝙨','t': '𝙩',
  'u': '𝙪','v': '𝙫','w': '𝙬','x': '𝙭','y': '𝙮','z': '𝙯',
  '0': '𝟬','1': '𝟭','2': '𝟮','3': '𝟯','4': '𝟰','5': '𝟱','6': '𝟲','7': '𝟳','8': '𝟴','9': '𝟵'
};

// ================================================
// 2. REVERSE MAPS (Undo)
// ================================================

const REVERSE_MAPS = {
  ...Object.fromEntries(Object.entries(SANS_ITALIC_MAP).map(([k, v]) => [v, k])),
  ...Object.fromEntries(Object.entries(BOLD_ITALIC_SANS_MAP).map(([k, v]) => [v, k])),
  'ℎ': 'h'
};

// ================================================
// 3. CHAR TRANSFORMER
// ================================================

function getUnicodeChar(char, styleType) {
  const code = char.codePointAt(0);

  if (styleType === "transform-clear") {
    if (REVERSE_MAPS[char]) return REVERSE_MAPS[char];

    if (code >= 0x1D5D4 && code <= 0x1D5ED) return String.fromCodePoint(code - 0x1D5D4 + 65);
    if (code >= 0x1D5EE && code <= 0x1D607) return String.fromCodePoint(code - 0x1D5EE + 97);
    if (code >= 0x1D7EC && code <= 0x1D7F5) return String.fromCodePoint(code - 0x1D7EC + 48);

    if (code >= 0x1D434 && code <= 0x1D44D) return String.fromCodePoint(code - 0x1D434 + 65);
    if (code >= 0x1D44E && code <= 0x1D467) return String.fromCodePoint(code - 0x1D44E + 97);

    return char;
  }

  if (styleType === "transform-italic-sans") return SANS_ITALIC_MAP[char] || char;
  if (styleType === "transform-bold-italic") return BOLD_ITALIC_SANS_MAP[char] || char;

  if (styleType === "transform-bold") {
    if (code >= 65 && code <= 90) return String.fromCodePoint(0x1D5D4 + code - 65);
    if (code >= 97 && code <= 122) return String.fromCodePoint(0x1D5EE + code - 97);
    if (code >= 48 && code <= 57) return String.fromCodePoint(0x1D7EC + code - 48);
  }

  if (styleType === "transform-italic") {
    if (char === 'h') return 'ℎ';
    if (code >= 65 && code <= 90) return String.fromCodePoint(0x1D434 + code - 65);
    if (code >= 97 && code <= 122) return String.fromCodePoint(0x1D44E + code - 97);
  }

  return char;
}

// ================================================
// 4. ACCESSIBLE WRAPPER (semantic intent applied)
// ================================================

function createAccessibleStyledNode(originalText, styledText, semanticIntent="text") {
  const wrapper = document.createElement("span");

  // ---------------------
  // 1. Visual layer
  // ---------------------
  const visual = document.createElement("span");
  visual.textContent = styledText;
  visual.setAttribute("aria-hidden", "true");
  wrapper.appendChild(visual);

  // ---------------------
  // 2. Semantic (SR) layer
  // ---------------------
  if (semanticIntent !== "clear") {
    const srSpan = document.createElement("span");
    srSpan.textContent = originalText;
    srSpan.className = "crc-sr-only";

    // Hide visually but keep accessible
    srSpan.style.position = "absolute";
    srSpan.style.width = "1px";
    srSpan.style.height = "1px";
    srSpan.style.overflow = "hidden";
    srSpan.style.clip = "rect(0 0 0 0)";
    srSpan.style.whiteSpace = "nowrap";

    // Optional: semantic role
    if (semanticIntent !== "text") srSpan.setAttribute("role", semanticIntent);

    wrapper.appendChild(srSpan);
  }

  return wrapper;
}

// ================================================
// 5. MESSAGE HANDLER
// ================================================

chrome.runtime.onMessage.addListener((request) => {
  if (request.action !== "transform") return;

  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return;

  const range = selection.getRangeAt(0);
  const originalText = range.toString();
  if (!originalText) return;

  const styledText = Array.from(originalText)
    .map(c => getUnicodeChar(c, request.style))
    .join("");

  // Use semantic intent from request (from background.js)
  const semanticIntent = request.intent?.semantic || "text";

  const node = createAccessibleStyledNode(originalText, styledText, semanticIntent);

  range.deleteContents();
  range.insertNode(node);
  selection.removeAllRanges();
});

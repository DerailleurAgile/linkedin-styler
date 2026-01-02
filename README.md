# ✍️ LinkedIn Unicode Styler

**Stop posting boring plain-text updates.** This Chrome Extension allows you to bypass LinkedIn's lack of native formatting by using Mathematical Alphanumeric Unicode symbols. 

Unlike other "fancy text" generators, this is built directly into your right-click menu and handles the "broken" LinkedIn editor logic (Draft.js) perfectly.

---

## ✨ Features

- **Bold Sans**: `𝗕𝗼𝗹𝗱 𝗔𝗻𝘆𝘁𝗵𝗶𝗻𝗴` - Perfect for hooks and headlines.
- **Italic Serif**: `𝑄𝑢𝑜𝑡𝑒 𝑦𝑜𝑢𝑟 𝑖𝑛𝑠𝑖𝑔ℎ𝑡𝑠` - Great for testimonials and quotes.
- **Italic Sans**: `𝘈𝘤𝘵𝘪𝘰𝘯 𝘐𝘵𝘦𝘮𝘴` - Clean, modern emphasis.
- **Bold Italic Sans**: `𝘼𝙩𝙩𝙚𝙣𝙩𝙞𝙤𝙣 𝙂𝙧𝙖𝙗𝙗𝙚𝙧𝙨` - For maximum impact.
- **🧼 Clear Styles**: Instantly reverts any Unicode styling back to standard plain text.

## 🛠️ Installation (Developer Mode)

Since this is a custom tool, you can install it in seconds:

1. **Download** this repository as a `.zip` and extract it.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Toggle **Developer mode** (top right corner).
4. Click **Load unpacked** and select the folder containing these files.
5. Refresh your LinkedIn tab and start styling!

## 🧠 The Technical Challenge
LinkedIn's editor often breaks when you manually inject HTML. This extension uses `document.execCommand('insertText')` and **Unicode-aware mapping** (handling 32-bit surrogate pairs) to ensure your text stays perfectly formatted without breaking the editor's internal state. 

It specifically solves the "inverted casing" and "Planck's Constant 'h'" bugs found in many standard Unicode generators.

---

## 📜 License
MIT - Feel free to use, modify, and share!

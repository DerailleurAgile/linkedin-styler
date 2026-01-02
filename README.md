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

## 🛠️ Installation

The easiest way to install the styler is to use the pre-packaged release:

1. **Download the Extension**: Go to the [Releases](https://github.com/YOUR-USERNAME/linkedin-styler/releases) page and download the `linkedin-styler-v1.0.zip` file.
2. **Extract**: Unzip the file into a folder on your computer.
3. **Open Extensions**: In Chrome, go to `chrome://extensions/`.
4. **Enable Developer Mode**: Toggle the **Developer mode** switch in the top right corner.
5. **Load Extension**: Click the **Load unpacked** button and select the folder where you extracted the files.
6. **Start Styling**: Refresh your LinkedIn tab, highlight some text, and right-click!



## 🧠 The Technical Challenge
LinkedIn's editor often breaks when you manually inject HTML. This extension uses `document.execCommand('insertText')` and **Unicode-aware mapping** (handling 32-bit surrogate pairs) to ensure your text stays perfectly formatted without breaking the editor's internal state. 

It specifically solves the "inverted casing" and "Planck's Constant 'h'" bugs found in many standard Unicode generators by using hardcoded mapping for non-contiguous character blocks.

---

## 📜 License
MIT - Feel free to use, modify, and share!
# ✍️ CRC's LinkedIn Text-Style Fixer

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

1. **Download the Extension**: Go to the [Releases](https://github.com/DerailleurAgile/linkedin-styler/releases) page and download the `crc-linkedin-text-style-fixer.zip
` file.
2. **Extract**: Unzip the file into a folder on your computer.
3. **Open Extensions**: In Chrome, go to `chrome://extensions/`.
4. **Enable Developer Mode**: Toggle the **Developer mode** switch in the top right corner.
5. **Load Extension**: Click the **Load unpacked** button and select the folder where you extracted the files.
6. **Start Styling**: Refresh your LinkedIn tab, highlight some text, and right-click!


## 📖 How to Use

Once installed, using the styler is as easy as a right-click.

1. **Start a Post**: Open the LinkedIn "Start a post" box or start a comment.
2. **Type & Highlight**: Type your text as usual, then highlight the specific word or sentence you want to style.
3. **Right-Click**: Open the context menu and find the **✍️ CRC's LinkedIn Text-Style Fixer** menu item.
4. **Select a Style**: Choose from Bold, Italic, or Bold-Italic. The text will transform instantly!
5. **To Undo**: Highlight any styled text and select the Fight Club soap bar **🧼 Clear Styles (Plain)** to return it to standard LinkedIn text.


## 🧠 The Technical Challenge
LinkedIn's editor often breaks when you manually inject HTML. This extension uses `document.execCommand('insertText')` and **Unicode-aware mapping** (handling 32-bit surrogate pairs) to ensure your text stays perfectly formatted without breaking the editor's internal state. 

It specifically solves the "inverted casing" and "Planck's Constant 'h'" bugs found in many standard Unicode generators by using hardcoded mapping for non-contiguous character blocks.


### ⚠️ A Note on Unicode

This tool uses Mathematical Alphanumeric Symbols. While it looks like "font styling," it is actually changing the characters themselves.

* **Search**: Styled text may not show up in standard LinkedIn keyword searches.
* **Accessibility**: Use bolding sparingly for key terms so that users with screen readers can still follow the core of your message.

---

## 📜 License
MIT - Feel free to use, modify, and share!

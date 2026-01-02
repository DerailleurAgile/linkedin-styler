chrome.runtime.onInstalled.addListener(() => {
  // Parent Menu with a distinctive icon
  chrome.contextMenus.create({
    id: "li-styler",
    title: "CRC's LinkedIn Text-Style Fixer", 
    contexts: ["selection"]
  });

  // Styled Children
  chrome.contextMenus.create({ 
    id: "transform-bold", 
    parentId: "li-styler", 
    title: "Bold Sans (𝗕𝗼𝗹𝗱)", 
    contexts: ["selection"] 
  });

  chrome.contextMenus.create({ 
    id: "transform-bold-italic", 
    parentId: "li-styler", 
    title: "Bold Italic Sans (𝘉𝘰𝘭𝘥𝘐𝘵𝘢𝘭𝘪𝘤)", 
    contexts: ["selection"] 
  });

  chrome.contextMenus.create({ 
    id: "transform-italic", 
    parentId: "li-styler", 
    title: "Italic Serif (𝑄𝑢𝑜𝑡𝑒𝑠)", 
    contexts: ["selection"] 
  });

  chrome.contextMenus.create({ 
    id: "transform-italic-sans", 
    parentId: "li-styler", 
    title: "Italic Sans (𝘈𝘤𝘵𝘪𝘰𝘯)", 
    contexts: ["selection"] 
  });

  // The "Undo" button
  chrome.contextMenus.create({ 
    id: "transform-clear", 
    parentId: "li-styler", 
    title: "🧼 Clear Styles (Plain)", 
    contexts: ["selection"] 
  });

});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  chrome.tabs.sendMessage(tab.id, { 
    action: "transform", 
    style: info.menuItemId 
  });
});
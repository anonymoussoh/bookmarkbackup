function recent_bookmarks(treenode){
console.log(treenode);
}

chrome.bookmarks.getRecent(10,recent_bookmarks);

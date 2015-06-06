console.log('test');
function recent_bookmarks(treenode){
console.log(treenode);
}

function all_items(treenode){
console.log(treenode);
var jsoned = JSON.stringify(treenode[0].children[0].children);
console.log(jsoned);
}

//chrome.bookmarks.getRecent(10,recent_bookmarks);
chrome.bookmarks.getTree(all_items);
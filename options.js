function all_items(treenode){
console.log(treenode);
var jsoned = JSON.stringify(treenode[0].children[0].children);
console.log(jsoned);
document.getElementById("json_field").value = jsoned;
}

chrome.bookmarks.getTree(all_items);

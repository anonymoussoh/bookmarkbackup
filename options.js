function all_items(treenode){
console.log(treenode);
var jsoned = JSON.stringify(treenode[0].children);
//console.log(jsoned);
document.getElementById("json_field").value = jsoned;
}

chrome.bookmarks.getTree(all_items);

function save_localstorage(){
  var jsoned_bookmark_tree = document.getElementById("json_field").value;
  console.log(jsoned_bookmark_tree);
  chrome.storage.local.set({'value':jsoned_bookmark_tree});
}


document.getElementById("save").addEventListener("click",save_localstorage,false);

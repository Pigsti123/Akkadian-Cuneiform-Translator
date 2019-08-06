var node_list = document.getElementsByTagName('input');
for (var i = 0; i < node_list.length; i++) {
    var node = node_list[i];
        if(node.getAttribute('type') == "translator"){
          ST();
        }
} 

function st(){
  var input = document.createElement("TEXTAREA");
  var output = document.createElement("TEXTAREA");
  document.body.appendChild(input);
  document.body.appendChild(output);
}

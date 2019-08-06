window.onload = function() {
var node_list = document.getElementsByTagName('input');
for (var i = 0; i < node_list.length; i++) {
    var node = node_list[i];
        if(node.getAttribute('type') == "translator"){
          ST();
        }
} 
}

function ST(){
  var input = document.createElement("TEXTAREA");
  var output = document.createElement("TEXTAREA");
  document.body.appendChild(input);
  document.body.appendChild(output);
}



input[type="translator"],input[type="output"]{
  width:49%;
  height:100px;
}

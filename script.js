window.onload = function() {
var node_list = document.getElementsByTagName('input');
for (var i = 0; i < node_list.length; i++) {
    var node = node_list[i];
        if(node.getAttribute('type') == "translator"){
          ST();
            node.style.display = "none";
        }
} 
}

function ST(){
    var input = document.createElement("TEXTAREA");
    var output = document.createElement("TEXTAREA");
    input.style.height="100px";
    input.style.width="49%";
    input.style.resize = "none";
    output.style.height="100px";
    output.style.width="49%";
    output.style.resize = "none";
    document.body.appendChild(input);
    document.body.appendChild(output);
}

window.onload = function() {
var node_list = document.getElementsByTagName('input');
for (var i = 0; i < node_list.length; i++) {
    var node = node_list[i];
        if(node.getAttribute('type') == "translator"){
            node.style.display = "none";
            ST();
        }
} 
}

function ST(){
    var input = document.createElement("TEXTAREA");
    var output = document.createElement("TEXTAREA");
    input.style.height="100px";
    input.style.width="49%";
    input.style.resize="none";
    input.placeholder="Text";
    input.id="translateinput";
    input.onkeyup=function(){translate()};
    output.style.height="100px";
    output.style.width="49%";
    output.style.resize="none";
    output.placeholder="Translation";
    output.id="translateoutput";
    document.body.appendChild(input);
    document.body.appendChild(output);
}

function translate(){
    var input = document.getElementById("translateinput");
    var value = translate(input.value);
    document.getElementById("translateoutput").value=value;
}

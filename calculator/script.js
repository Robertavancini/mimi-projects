function insert(num){
    document.getElementById('output').innerHTML += num;
}


function clean() {
    document.getElementById('output').innerHTML = "";
}

function backspace() {
    var output = document.getElementById('output').innerHTML;
    document.getElementById('output').innerHTML = output.substring(0, output.length - 1);

}

function calc() {
     var output = document.getElementById('output').innerHTML;

     if(output) {
        document.getElementById('output').innerHTML = eval(output);
     } else {
         document.getElementById('output').innerHTML = "0";
     }
}
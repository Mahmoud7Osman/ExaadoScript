var startbutton = document.getElementById("s");
var startwindow = document.getElementById("sw");

var pc          = document.getElementById("pc");
var pcwind      = document.getElementById("pcwind");

startbutton.onclick = function(){
    if (startwindow.style.display == 'none'){
        startwindow.style.display = 'inline'
        return;
    }
    startwindow.style.display = 'none';
};

pc.onclick = function(){
    if (pcwind.style.display == 'none'){
        pcwind.style.display = 'inline'
        return;
    }
    pcwind.style.display = 'none';
};
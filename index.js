let scr=document.getElementById('screen');
function input(x) {
     scr.value=scr.value+x;
}

function allclear(){
     scr.value=' ';
}

function del() {
     scr.value=scr.value.slice(0,-1);
}
function equal() {
    try{
     scr.value=eval(scr.value);
    }
    catch{
         scr.value="ERROR";
    }
}
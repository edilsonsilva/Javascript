var pos = 1;
function esquerda(){
    if(pos <=1){
        pos = 1;
    }
    else{
        pos--;
    }
    document.getElementById("foto").innerHTML="<img src=img/foto"+pos+".jpg>";
}

function direita(){
    pos++;
    document.getElementById("foto").innerHTML="<img src=img/foto"+pos+".jpg>";
}
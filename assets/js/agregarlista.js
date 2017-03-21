function agreagarLi(){
    var texto=document.getElementById('linew').value;
    var li=document.createElement('LI');
    li.innerHTML=texto==''?'(nada)':texto;
    document.getElementById('lista').appendChild(li);
}

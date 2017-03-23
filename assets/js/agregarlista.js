function agreagarLi(){
    var texto=document.getElementById('linew').value;

    if (texto== ""){
      alert("NO ESTAS AGREGANDO NADA!!!!!");
    } else {
      var li=document.createElement('LI');
      li.innerHTML=texto;
      document.getElementById('lista').appendChild(li);
      document.getElementById("linew").value="";
    }

}

function borrar(){
    lis=document.getElementById('lista').getElementsByTagName('li');
    for(var i=0; i<lis.length;i++){
        lis[i].onclick=function(){
            if(confirm('¿quieres borrar esta fruta???'))
            this.parentNode.removeChild(this);
        };
    }

}

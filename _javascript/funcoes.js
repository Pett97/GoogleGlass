function mudaFoto(foto){
    document.getElementById("icone").src = foto;
  };

 
  function calcularTotal(){
    var qtd = parseInt(document.getElementById("cQtd").value);
    var total = qtd * 1500;
    document.getElementById("cValorTotal").value = total;

  }
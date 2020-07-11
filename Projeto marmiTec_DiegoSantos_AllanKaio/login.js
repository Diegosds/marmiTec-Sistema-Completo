 
		
	function login() {
	var login = document.getElementById('nome_login').value;
   var senha = document.getElementById('email_login').value;
	if (login == "diego" && senha == "diego" ) {
	
	   
	   redirecionar();
	}else {
	
	alert ("Senha ou Login incorretos, tente novamente");
	}
	}
	
	function redirecionar (){
		
		
		
		  window.location.replace("marmiTecSistema/index.html");
		
	}  
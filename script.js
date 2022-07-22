function Logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "Admin" && senha == "AdminFesta"){
        alert("Login feito com sucesso!!")
        location.href = "Menu.html";
    }else{
        alert("Usuario ou senha incorretos")
    }
}
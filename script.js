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

function Produto(){
    var produto = document.getElementById("product").value;

    alert(produto);
}


function CalculaMais(){
    switch (document.getElementById("product").value){
        case "jogo": document.getElementById("total").innerHTML = parseFloat(document.getElementById("total").innerHTML) + 3.00; break;
        case "inflavel": document.getElementById("total").innerHTML = parseFloat(document.getElementById("total").innerHTML) + 3.00; break;
        case "agua": document.getElementById("total").innerHTML = parseFloat(document.getElementById("total").innerHTML) + 2.50; break;
        case "quentao": document.getElementById("total").innerHTML = parseFloat(document.getElementById("total").innerHTML) + 3.00; break;
        case "refrigerante": document.getElementById("total").innerHTML = parseFloat(document.getElementById("total").innerHTML) + 3.50; break;
        case "cachorro": document.getElementById("total").innerHTML = parseFloat(document.getElementById("total").innerHTML) + 3.00; break;
        case "pinhao": document.getElementById("total").innerHTML = parseFloat(document.getElementById("total").innerHTML) + 3.00; break;
        case "pipoca": document.getElementById("total").innerHTML = parseFloat(document.getElementById("total").innerHTML) + 3.00; break;
        case "pizza": document.getElementById("total").innerHTML = parseFloat(document.getElementById("total").innerHTML) + 3.00; break;
        case "carreteiro": document.getElementById("total").innerHTML = parseFloat(document.getElementById("total").innerHTML) + 3.50; break;
        case "bolo": document.getElementById("total").innerHTML = parseFloat(document.getElementById("total").innerHTML) + 2.50; break;
        case "algodao": document.getElementById("total").innerHTML = parseFloat(document.getElementById("total").innerHTML) + 3.50; break;
    }
}

function CalculaMenos(){
    switch (document.getElementById("product").value){
        case "jogo": document.getElementById("total").innerHTML = parseFloat(document.getElementById("total").innerHTML) - 3.00; break;
        case "inflavel": document.getElementById("total").innerHTML = parseFloat(document.getElementById("total").innerHTML) - 3.00; break;
        case "agua": document.getElementById("total").innerHTML = parseFloat(document.getElementById("total").innerHTML) - 2.50; break;
        case "quentao": document.getElementById("total").innerHTML = parseFloat(document.getElementById("total").innerHTML) - 3.00; break;
        case "refrigerante": document.getElementById("total").innerHTML = parseFloat(document.getElementById("total").innerHTML) - 3.50; break;
        case "cachorro": document.getElementById("total").innerHTML = parseFloat(document.getElementById("total").innerHTML) - 3.00; break;
        case "pinhao": document.getElementById("total").innerHTML = parseFloat(document.getElementById("total").innerHTML) - 3.00; break;
        case "pipoca": document.getElementById("total").innerHTML = parseFloat(document.getElementById("total").innerHTML) - 3.00; break;
        case "pizza": document.getElementById("total").innerHTML = parseFloat(document.getElementById("total").innerHTML) - 3.00; break;
        case "carreteiro": document.getElementById("total").innerHTML = parseFloat(document.getElementById("total").innerHTML) - 3.50; break;
        case "bolo": document.getElementById("total").innerHTML = parseFloat(document.getElementById("total").innerHTML) - 2.50; break;
        case "algodao": document.getElementById("total").innerHTML = parseFloat(document.getElementById("total").innerHTML) - 3.50; break;
    }
}
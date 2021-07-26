function salvar(){
    var nome = document.getElementById('nome').value
    var endereco = document.getElementById('endereco').value
    var email = document.getElementById('email').value
    if (!email | !nome | !endereco) {
        alert("Preencha o campo email")
        return
    }else{
        let usuario = new Array()

    
        usuario.push({ 
            email: email,
            nome: nome,
            endereco: endereco 
        })

    /* Salva o item */
        localStorage.setItem("usuario", JSON.stringify(usuario))
        alert("email cadastrado com sucesso")
    }
  
}
function EnviarDados(){

let user = document.getElementById('NomeUser').value
let dataNascimento = document.getElementById('IdadeUser').value
let email = document.getElementById('EmailUser').value
let senha = document.getElementById('SenhaUser').value
let notificar = document.querySelector("input[name='sim_ou_nao']:checked").value

alert(`Seu nome é: ${user} \nSua data de nascimento é: ${dataNascimento} \nSeu email é: ${email} \nSua senha registrada: ${senha}\nVocê quer receber notificações: ${notificar}`)
}
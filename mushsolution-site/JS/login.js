

//Expressão CPF
var cnpjReg = /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/;
//Expressão Senha
var senhaReg = /^(?=.*[0-9]{3})(?=.*[A-Z]{1})(?=.*[a-z]{1})[a-zA-Z0-9]{6,}$/;

function validacao_cnpj_login(){
    // Variáveis Login
    var cnpj_login = ipt_cnpj_login.value;
    // Verifica CPF
    if (cnpj_login.match(cnpjReg)){
        msg_cnpj_validation_login.innerHTML = '';
        msg_cnpj_validation_login.style.color = 'var(--green)';
        ipt_cnpj_login.style.border = '1px solid var(--green)';
        ipt_cnpj_login.style.color = 'var(--green)';
        cnpj_login_true.style.display = 'block';   
        cnpj_login_false.style.display = 'none';
    } else{
        msg_cnpj_validation_login.innerHTML = 'Insira um CPF válido';
        msg_cnpj_validation_login.style.color = 'var(--redText)';
        ipt_cnpj_login.style.color = 'var(--redText)';
        ipt_cnpj_login.style.border = '1px solid var(--red)';
        cnpj_login_false.style.color = 'var(--red)';
        cnpj_login_false.style.display = 'block';
        cnpj_login_true.style.display = 'none';
    }
}
// Visualizar Senha
function display_show_password(){
    form_show_password.style.display = 'none';
    form_hidden_password.style.display = 'block';
    ipt_senha_login.type = 'text';
    
}
function display_hidden_password(){
    form_show_password.style.display = 'block';
    form_hidden_password.style.display = 'none';
    ipt_senha_login.type = 'password';
}
function validacao_senha_login(){
    // Variáveis Senha
    var senha_login = ipt_senha_login.value;
    // Verifica Senha
    if (senha_login.match(senhaReg)){
        msg_senha_validation_login.innerHTML = '';
        msg_senha_validation_login.style.color = 'var(--green)';
        ipt_senha_login.style.border = '1px solid var(--green)';
        ipt_senha_login.style.color = 'var(--green)';
        icon_senha_login_true.style.display = 'block';
        icon_senha_login_false.style.display = 'none';
    } else{
        msg_senha_validation_login.innerHTML = 'Insira uma senha válida';
        msg_senha_validation_login.style.color = 'var(--redText)';
        ipt_senha_login.style.color = 'var(--redText)';
        ipt_senha_login.style.border = '1px solid var(--red)';
        icon_senha_login_false.style.color = 'var(--red)';
        icon_senha_login_false.style.display = 'block';
        icon_senha_login_true.style.display = 'none';
    }
}
// Validação no Botão
function validacao_login(){
    var cnpj_login = ipt_cnpj_login.value;
    var senha_login = ipt_senha_login.value;
    if(cpf_login.match(cpfReg) && senha_login.match(senhaReg)){
        window.location.href = 'dashboard.html';
        msg_login.style.display = 'none';
    } else{
        msg_login.style.display = 'block';
        msg_login.innerHTML =  'CPF ou Senha inválida. Tente novamente';
    }
}

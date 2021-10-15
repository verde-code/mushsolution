

    //Expressão CPF
    var cpfReg = /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/;

    //Expressão Senha
    var senhaReg = /^(?=.*[0-9]{3})(?=.*[A-Z]{1})(?=.*[a-z]{1})[a-zA-Z0-9]{6}$/;

    var cpf_login,senha_login;

    function validacao_cpf_login() {
        // Variáveis Login
        cpf_login = ipt_cpf_login.value;
        cnpj_login = cpf_login;
        senha_login = ipt_senha_login.value;
        // Verifica CPF
        if (cpf_login.match(cpfReg)) {
            msg_cpf_validation_login.innerHTML = '';
            icon_cpf_login_true.style.display = 'block';
            icon_cpf_login_false.style.display = 'none';
        } else {
            msg_cpf_validation_login.innerHTML = '<span style="color: #ff0000;">Insira um CPF válido</span>';
            icon_cpf_login_false.style.display = 'block';
            icon_cpf_login_true.style.display = 'none';
        }
    }
    // Visualizar Senha
    function display_show_password() {
        form_show_password.style.display = 'none';
        form_hidden_password.style.display = 'block';
        ipt_senha_login.type = 'text';

    }
    function display_hidden_password() {
        form_show_password.style.display = 'block';
        form_hidden_password.style.display = 'none';
        ipt_senha_login.type = 'password';
    }
    function validacao_senha_login() {
        // Verifica Senha
        if (senha_login.match(senhaReg)) {
            msg_senha_validation_login.innerHTML = '';
            senha_login_true.style.display = 'block';
            senha_login_false.style.display = 'none';
        } else {
            msg_senha_validation_login.innerHTML = '<span style="color: #ff0000;">Insira uma senha válida</span>';
            senha_login_false.style.display = 'block';
            senha_login_true.style.display = 'none';
        }
    }
    // Validação no Botão
    function validacao_login() {
        cnpj_login = ipt_cnpj_login.value;
        if (cnpj_login.match(cnpjReg) && senha_login.match(senhaReg)) {
            msg_login.style.display = 'none';
        } else {
            msg_login.style.display = 'block';
            msg_login.innerHTML = 'CNPJ ou Senha inválida. Tente novamente';
        }
    }function validar(){
        cpf_login = ipt_cpf_login.value;
        senha_login = ipt_senha_login.value;
        if(cpf_login == '123.456.789-01' && senha_login == 'Mushsolution'){
                window.location.href = './dashboard.html';
        }else{
                alert('Login invalido')
        }
    }
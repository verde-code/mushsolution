
    //Expressão CNPJ
    var cnpjReg = /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\.?[0-9]{4}\-?[0-9]{2}$/;
   
    var senhaReg = /^(?=.*[0-9]{3})(?=.*[A-Z]{1})(?=.*[a-z]{1})[a-zA-Z0-9]{6,}$/;

    function validacao_cnpj_register() {
        // Variáveis Login
        var cnpj_login = input_cnpj.value;
        // Verifica CNPJ
        if (cnpj_login.match(cnpjReg)) {
            msg_cnpj_validation.innerHTML = '';
            cnpj_register_true.style.display = 'block';
            cnpj_register_false.style.display = 'none';
        } else {
            msg_cnpj_validation.innerHTML = '<span style="color: #ff0000;">Insira um CNPJ válido</span>';
            cnpj_register_false.style.display = 'block';
            cnpj_register_true.style.display = 'none';
        }
    }

    function validacao_senha_login() {
        // Variáveis Senha
        var senha_login = ipt_senha_login.value;
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

    //Expressão CPF
    var cpfReg = /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/;

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
        }else if(cpf_login == ''){
            msg_cpf_validation_login.innerHTML = '';
            msg_login.style.display = 'none';
        }else {
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

    // Validação no Botão
    function validacao_login() {
        cnpj_login = ipt_cnpj_login.value;
        if (cnpj_login.match(cnpjReg) && senha_login.match(senhaReg)) {
            msg_login.style.display = 'none';
        } else {
        }
    }function validar(){
        cpf_login = ipt_cpf_login.value;
        senha_login = ipt_senha_login.value;

        console.log("FORM LOGIN: ", cpf_login);
        console.log("FORM SENHA: ", senha_login);

        fetch("/usuarios/autenticar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                cpfServer: cpf_login,
                senhaServer: senha_login
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));

                    sessionStorage.CPF_USUARIO = json.cpf;
                    sessionStorage.SENHA_USUARIO = json.senha;
                    sessionStorage.ID_USUARIO = json.idFuncionario;
                    window.location = '../dashboard.html'
                });

            } else {
                msg_login.style.display = 'block';
                msg_login.style.color = '#ff0000';
                msg_login.innerHTML = 'CPF ou Senha inválida. Tente novamente.';
                console.log("Houve um erro ao tentar realizar o login!");

                resposta.text().then(texto => {
                    console.error(texto);
                    finalizarAguardar(texto);
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })

        return false;
    }
    

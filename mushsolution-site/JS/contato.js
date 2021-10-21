function enviar(){
    var nome = ipt_nome.value;
    var sobrenome = ipt_sobrenome.value;
    var empresa = ipt_empresa.value;
    var email = ipt_email.value;
    var tel = ipt_tel.value;
    var descricao = ipt_descricao.value;
    var assunto = ipt_assunto.value;
    if(nome == "" || sobrenome == "" || empresa == "" 
    || email == "" || tel == "" || descricao == "" || assunto == ""){
        alert(`Preencha todos os campos!`)
    }else{
        alert(`${nome}, sua mensagem foi enviada com sucesso!`)
        ipt_nome.value = "";
        ipt_sobrenome.value = "";
        ipt_empresa.value = "";
        ipt_email.value = "";
        ipt_tel.value = "";
        ipt_descricao.value = "";
        ipt_assunto.value = "";
    }
}
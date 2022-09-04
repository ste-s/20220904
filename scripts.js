function criaMascara(mascaraInput) 
{
    const maximoInput = document.getElementById(`${mascaraInput}Input`).maxLength;
    let valorInput = document.getElementById(`${mascaraInput}Input`).value;
    let valorSemPonto = document.getElementById(`${mascaraInput}Input`).value.replace(/([^0-9])+/g, "");
    const mascaras = {
      CPF: valorInput.replace(/[^\d]/g, "").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
    };

    valorInput.length === maximoInput ? document.getElementById(`${mascaraInput}Input`).value = mascaras[mascaraInput] : document.getElementById(`${mascaraInput}Input`).value = valorSemPonto;
};



function processar()
{
    var CPF, nome, sexo, email, ifsp, selecao, NE, DV, DA, DMO, DME, NHM, T, EX, H, B, ED, Jardinagem, Artesanato, Leitura, Escrita, Musica, Pintura, RedesSociais, Viagens, Series, Academia, Outros, sugestoes, msg;
    CPF = document.formulario.cpf.value;
    nome = document.formulario.nome.value;
    sexo = document.formulario.sexo.value;
    email = document.formulario.email.value;
    ifsp = document.formulario.IFSP.checked;
    selecao = document.formulario.select.value;
    NE = document.formulario.NE.value;
    DV = document.formulario.DV.checked;
    DA = document.formulario.DA.checked;
    DMO = document.formulario.DMO.checked;
    DME = document.formulario.DME.checked;
    NHM =  document.formulario.NHM.checked;
    T = document.formulario.T.checked;
    EX = document.formulario.EX.checked;
    H = document.formulario.H.checked;
    B = document.formulario.B.checked;
    ED = document.formulario.ED.checked;
    Jardinagem = document.formulario.JAR.checked;
    Artesanato = document.formulario.ART.checked;
    Leitura = document.formulario.LEI.checked;
    Escrita = document.formulario.ESC.checked;
    Musica = document.formulario.MUS.checked;
    Pintura = document.formulario.PIN.checked;
    RedesSociais = document.formulario.RED.checked;
    Viagens = document.formulario.VIA.checked;
    Series = document.formulario.SER.checked;
    Academia = document.formulario.ACA.checked;
    Outros = document.formulario.OUT.checked;
    sugestoes = document.formulario.sugestoes.value;
    msg = (sexo =="F"?" Sr. ":" Sra. ") + nome + ", confirme se os dados abaixo condizem com suas respostas. <br> CPF: " + CPF + "<br> E-mail: " + email + 
    "<br> É aluno IFSP? " + (ifsp == true? "Sim": "Não") + "<br> Câmpus IFSP: " + selecao + 
    "<br> Necessidades especiais? " + (NE == true? "Sim": "Não") + "<br> Quais? " + (DV == true? "Deficiência Visual ": "") + (DA == true? "Deficiência Auditiva ": "") + (DMO == true? "Deficiência Motora ": "") + (DME == true? "Deficiência Mental ": "") + (NHM == true? "Nenhuma": "") + 
    "<br> Área(s) de Interesse: " +  (T == true? "Tecnologia ": "") + (EX == true? "Exatas ": "") + (H == true? "Humanas ": "") + (B == true? "Biológicas ": "") + (ED == true? "Educação ": "") + 
    "<br> Hobbie(s): " +  (Jardinagem == true? "Jardinagem ": "") + (Artesanato == true? "Artesanato ": "") + (Leitura == true? "Leitura ": "") + (Escrita == true? "Escrita ": "") + (Musica == true? "Música ": "") + (Pintura == true? "Pintura ": "") + (RedesSociais == true? "Redes Sociais ": "") + (Viagens == true? "Viagens ": "") + (Series == true? "Séries ": "") + (Academia == true? "Academia ": "") + (Outros == true? "Outros ": "") +
    "<br> Sugestões: " + sugestoes;
    document.getElementById("destino").innerHTML = msg;

    const retorno = document.getElementById('retorno')
    retorno.style.display = "block";
    const container = document.getElementById('container')
    container.style.display = "none";
}   

function confirmacao()
{
    const retorno = document.getElementById('retorno')
    retorno.style.display = "none";
    const confirmacao = document.getElementById('confirmacao')
    confirmacao.style.display = "block";
}

function voltar()
{
    const retorno = document.getElementById('retorno')
    retorno.style.display = "none";
    const container = document.getElementById('container')
    container.style.display = "block";
}




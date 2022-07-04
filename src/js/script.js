foco_input_altura();

/*---------- VARIÁVEIS GLOBAIS----------*/

let imc=0;
let imc_formatado=0;
let altura;
let peso;
let botao_radio_selecionado;
let valor_imc=document.getElementById("valor-imc");
let grau_imc=document.getElementById("grau-imc");
let container_imagem=document.getElementById("container-imagem");
let container_grau_imc=document.getElementById("container-grau-imc");
let faixa_imc_01=document.getElementById("faixa-imc-01");
let faixa_imc_02=document.getElementById("faixa-imc-02");
let faixa_imc_03=document.getElementById("faixa-imc-03");
let faixa_imc_04=document.getElementById("faixa-imc-04");
let faixa_imc_05=document.getElementById("faixa-imc-05");
let faixa_imc_06=document.getElementById("faixa-imc-06");
let faixa_imc_07=document.getElementById("faixa-imc-07");

/*---------- FUNÇÃO PRINCIPAL----------*/

function calcular_imc(){

    altura=parseFloat(document.getElementById("altura").value);
    peso=parseFloat(document.getElementById("peso").value);

    /* VERIFICA SE OS VALORES SÃO VÁLIDOS E CALCULA O IMC */
    if( (isNaN(altura) || isNaN(peso))  ||  (altura <=0 || peso <=0) ){
        valores_invalidos();
    }else{
        imc=peso/(altura**2);
        imc_formatado=imc.toFixed(2);
    };
    
    valor_imc.innerHTML = imc_formatado;

    tocar_som_click();
    remover_classe();
    adicionar_imagem();
    trocar_cor_container_imagem();
    trocar_cor_container_grau_imc();
    adicionar_grau_imc();
    adicionar_classe(); 
}


/*---------- FUNÇÕES AUXILIARES ----------*/

function valores_invalidos(){
    imc_formatado="*?*";
    imagem_pessoa=document.getElementById("imagem-pessoa").src="src/imagens/pessoa-00.png";
    container_imagem.style.background="#f0ce12";
    container_grau_imc.style.background="#f0ce12";
    grau_imc.innerHTML="*?*";
}

function tocar_som_click(){
    const audio = new Audio("src/audios/click.mp3");
    audio.currentTime=.2;
    audio.play();
}

function foco_input_altura(){
    document.getElementById("altura").focus();
}

function remover_classe(){
    faixa_imc_01.classList.remove("faixa-selecionada");
    faixa_imc_02.classList.remove("faixa-selecionada");
    faixa_imc_03.classList.remove("faixa-selecionada");
    faixa_imc_04.classList.remove("faixa-selecionada");
    faixa_imc_05.classList.remove("faixa-selecionada");
    faixa_imc_06.classList.remove("faixa-selecionada");
    faixa_imc_07.classList.remove("faixa-selecionada");
}

function adicionar_classe(){
    if(imc_formatado<17){faixa_imc_01.classList.add("faixa-selecionada");}
        else if(imc_formatado>=17 && imc_formatado<=18.49){faixa_imc_02.classList.add("faixa-selecionada");}
        else if(imc_formatado>=18.50 && imc_formatado<=24.99){faixa_imc_03.classList.add("faixa-selecionada");}
        else if(imc_formatado>=25 && imc_formatado<=29.99){faixa_imc_04.classList.add("faixa-selecionada");}
        else if(imc_formatado>=30 && imc_formatado<=34.99){faixa_imc_05.classList.add("faixa-selecionada");}
        else if(imc_formatado>=35 && imc_formatado<=39.99){faixa_imc_06.classList.add("faixa-selecionada");}
        else if(imc_formatado>=40){faixa_imc_07.classList.add("faixa-selecionada");}  
}

function adicionar_imagem(){

    botao_radio_selecionado = document.querySelector("input[name='sexo']:checked").value;
    
    if(botao_radio_selecionado == 'F'){

        if(imc_formatado<17){imagem_pessoa=document.getElementById("imagem-pessoa").src="src/imagens/pessoa-01.png";}
        else if(imc_formatado>=17 && imc_formatado<=18.49){imagem_pessoa=document.getElementById("imagem-pessoa").src="src/imagens/pessoa-02.png";}
        else if(imc_formatado>=18.50 && imc_formatado<=24.99){imagem_pessoa=document.getElementById("imagem-pessoa").src="src/imagens/pessoa-03.png";}
        else if(imc_formatado>=25 && imc_formatado<=29.99){imagem_pessoa=document.getElementById("imagem-pessoa").src="src/imagens/pessoa-04.png";}
        else if(imc_formatado>=30 && imc_formatado<=34.99){imagem_pessoa=document.getElementById("imagem-pessoa").src="src/imagens/pessoa-05.png";}
        else if(imc_formatado>=35 && imc_formatado<=39.99){imagem_pessoa=document.getElementById("imagem-pessoa").src="src/imagens/pessoa-06.png";}
        else if(imc_formatado>=40){imagem_pessoa=document.getElementById("imagem-pessoa").src="src/imagens/pessoa-07.png";}
    }else{
        if(imc_formatado<17){imagem_pessoa=document.getElementById("imagem-pessoa").src="src/imagens/pessoa-08.png";}
        else if(imc_formatado>=17 && imc_formatado<=18.49){imagem_pessoa=document.getElementById("imagem-pessoa").src="src/imagens/pessoa-09.png";}
        else if(imc_formatado>=18.50 && imc_formatado<=24.99){imagem_pessoa=document.getElementById("imagem-pessoa").src="src/imagens/pessoa-10.png";}
        else if(imc_formatado>=25 && imc_formatado<=29.99){imagem_pessoa=document.getElementById("imagem-pessoa").src="src/imagens/pessoa-11.png";}
        else if(imc_formatado>=30 && imc_formatado<=34.99){imagem_pessoa=document.getElementById("imagem-pessoa").src="src/imagens/pessoa-12.png";}
        else if(imc_formatado>=35 && imc_formatado<=39.99){imagem_pessoa=document.getElementById("imagem-pessoa").src="src/imagens/pessoa-13.png";}
        else if(imc_formatado>=40){imagem_pessoa=document.getElementById("imagem-pessoa").src="src/imagens/pessoa-14.png";}
    }
}

function trocar_cor_container_imagem(){
    if(imc_formatado<17){container_imagem.style.background="linear-gradient(0deg, #00978b  0%, #f0ce12 65%)";}
        else if(imc_formatado>=17 && imc_formatado<=18.49){container_imagem.style.background="linear-gradient(0deg, #009746  0%, #f0ce12 65%)";}
        else if(imc_formatado>=18.50 && imc_formatado<=24.99){container_imagem.style.background="linear-gradient(0deg, #85c441  0%, #f0ce12 65%)";}
        else if(imc_formatado>=25 && imc_formatado<=29.99){container_imagem.style.background="linear-gradient(0deg, #c9da2a  0%, #f0ce12 65%)";}
        else if(imc_formatado>=30 && imc_formatado<=34.99){container_imagem.style.background="linear-gradient(0deg, #f9a61a  0%, #f0ce12 65%)";}
        else if(imc_formatado>=35 && imc_formatado<=39.99){container_imagem.style.background="linear-gradient(0deg, #f58020  0%, #f0ce12 65%)";}
        else if(imc_formatado>=40){container_imagem.style.background="linear-gradient(0deg, #d21921  0%, #f0ce12 65%)";}
}

function trocar_cor_container_grau_imc(){
    if(imc_formatado<17){container_grau_imc.style.background="#00978b";}
        else if(imc_formatado>=17 && imc_formatado<=18.49){container_grau_imc.style.background="#009746";}
        else if(imc_formatado>=18.50 && imc_formatado<=24.99){container_grau_imc.style.background="#85c441";}
        else if(imc_formatado>=25 && imc_formatado<=29.99){container_grau_imc.style.background="#c9da2a";}
        else if(imc_formatado>=30 && imc_formatado<=34.99){container_grau_imc.style.background="#f9a61a";}
        else if(imc_formatado>=35 && imc_formatado<=39.99){container_grau_imc.style.background="#f58020";}
        else if(imc_formatado>=40){container_grau_imc.style.background="#d21921";}  
}

function adicionar_grau_imc(){
    if(imc_formatado<17){grau_imc.innerHTML="MUITO ABAIXO DO PESO";}
        else if(imc_formatado>=17 && imc_formatado<=18.49){grau_imc.innerHTML="ABAIXO DO PESO";}
        else if(imc_formatado>=18.50 && imc_formatado<=24.99){grau_imc.innerHTML="PESO NORMAL";}
        else if(imc_formatado>=25 && imc_formatado<=29.99){grau_imc.innerHTML="ACIMA DO PESO";}
        else if(imc_formatado>=30 && imc_formatado<=34.99){grau_imc.innerHTML="OBESIDADE GRAU I";}
        else if(imc_formatado>=35 && imc_formatado<=39.99){grau_imc.innerHTML="OBESIDADE GRAU II";}
        else if(imc_formatado>=40){grau_imc.innerHTML="OBESIDADE GRAU III";}
}

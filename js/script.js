function verificar(){
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById('txtano');
  var res = document.querySelector('div#res');
  var fsex = document.getElementsByName('radsex');
  var idade = ano - Number(fano.value);
  if (fsex[0].checked == true) {
    var genero = 'homem';
  }else if (fsex[1].checked == true) {
    var genero = 'mulher';}
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    //caso o campo esteja vazio ou ano seja maior que atual
    res.innerText = 'Verifique os dados e tente novamente!';
  }
  else if (genero == 'homem' && idade >= 0 && idade <= 4) {
    //bebe homem
        res.innerHTML = `Detectamos um ${genero} de ${idade} anos. <br> Você é um bebê! <br> <img id="img_res" src="bb_m.png" alt="Criança">`;}
  else if (genero == 'mulher' && idade >= 0 && idade <= 4) {
    //bebe mulher
        res.innerHTML = `Detectamos uma ${genero} de ${idade} anos. <br> Você é um bebê! <br> <img id="img_res" src="bb_f.png" alt="Criança">`;}
  else if (genero == 'homem' && idade >= 5 && idade <= 12) {
    //criança homem
        res.innerHTML = `Detectamos um ${genero} de ${idade} anos. <br> Você é uma criança! <br> <img id="img_res" src="cri_m.png" alt="Criança">`;}
  else if (genero == 'mulher' && idade >= 5 && idade <= 12) {
    //criança mulher
      res.innerHTML = `Detectamos uma ${genero} de ${idade} anos. <br> Você é uma criança! <br> <img id="img_res" src="cri_f.png" alt="Criança">`;}
  else if (genero == 'homem' && idade >= 13 && idade <= 17) {
    //adolescente homem
        res.innerHTML = `Detectamos um ${genero} de ${idade} anos. <br> Você é um adolescente! <br> <img id="img_res" src="adol_m.png" alt="Criança">`;}
  else if (genero == 'mulher' && idade >= 13 && idade <= 17) {
    //adolescente mulher
        res.innerHTML = `Detectamos uma ${genero} de ${idade} anos. <br> Você é uma adolescente! <br> <img id="img_res" src="adol_f.png" alt="Criança">`;}
  else if (genero == 'homem' && idade >= 18 && idade <= 30) {
    //jovem homem
        res.innerHTML = `Detectamos um ${genero} de ${idade} anos. <br> Você é um jovem! <br> <img id="img_res" src="jovem_m.png" alt="Criança">`;}
  else if (genero == 'mulher' && idade >= 18 && idade <= 30) {
    //jovem mulher
        res.innerHTML = `Detectamos uma ${genero} de ${idade} anos. <br> Você é uma jovem! <br> <img id="img_res" src="jovem_f.png" alt="Criança">`;}
  else if (genero == 'homem' && idade >= 31 && idade <= 59) {
    //adulto homem
        res.innerHTML = `Detectamos um ${genero} de ${idade} anos. <br> Você é um adulto! <br> <img id="img_res" src="adulto.png" alt="Criança">`;}
  else if (genero == 'mulher' && idade >= 31 && idade <= 59) {
    //adulto mulher
        res.innerHTML = `Detectamos uma ${genero} de ${idade} anos. <br> Você é uma adulta! <br> <img id="img_res" src="adulta.png" alt="Criança">`;}
  else if (genero == 'homem' && idade >= 60 && idade <= 110) {
    //idoso homem
        res.innerHTML = `Detectamos um ${genero} de ${idade} anos. <br> Você é um idoso! <br> <img id="img_res" src="idoso.png" alt="Criança">`;}
  else if (genero == 'mulher' && idade >= 60 && idade <= 110) {
    //idoso mulher
        res.innerHTML = `Detectamos uma ${genero} de ${idade} anos. <br> Você é uma idosa! <br> <img id="img_res" src="idosa.png" alt="Criança">`;}
}

function contar(){

  var inicio = Number(document.getElementById("inicio_num").value)
  var inicio_html = document.getElementById("inicio_num").value
  var fim = Number(document.getElementById("fim_num").value)
  var step = Number(document.getElementById("step_num").value)
  var step_html = document.getElementById("step_num").value
  var res_cont = document.getElementById("res_cont")
  var txt = []
  var ini_fim = inicio - fim
  if (ini_fim > 0){
    ini_fim = true
  }
  else {
    ini_fim = false
  }

  if (inicio < 0 || inicio_html == "" || fim == "" || step_html == "" || inicio > fim){
    ini_fim = true
  } else { 
      if (step == 0){
        alert("Passo inválido. Considerando passo 1!")
        step = 1
        for (i = inicio; i <= fim; i+= step){
          txt.push(i + " &#128073 ")}}
      else {
        for (i = inicio; i <= fim; i+= step){
          txt.push(i + " &#128073 ")}
        }
      }
  if (inicio == 0 || inicio_html == "" || fim == "" || step_html == "" || inicio > fim){
    res_cont.innerHTML = "Verifique os dados e tente novamente!"
  }
  else{
      document.getElementById("res_txt").innerHTML = `A contagem de ${inicio} até ${fim} de ${step} em ${step} é:`
      res_cont.innerHTML = txt + "&#127937"}
      res_cont.innerHTML = res_cont.innerHTML.replace(/,/g,"")
  }
 
function tabuada(){
  var valor_tab = Number(document.getElementById("tab_num").value)
  var tabuada = ''

  for(var contador = 1; contador < 11; contador++){
    tabuada += `${valor_tab} x ${contador} = ${valor_tab * contador} <br>`
  }

  var texto = document.getElementById("tabuada_pronta")
  document.getElementById("tabuada_pronta").innerHTML = tabuada

  texto.setAttribute(
    "style",
    "text-align: left; position: relative; left: 10rem"
  )
  }

var lista = []
function add_anal(){
  var num = Number(document.getElementById("anal_num").value)

  if (lista.indexOf(num)>=0){
    alert("Número ja adicionado")
    document.getElementById("anal_num").value = ""
    document.getElementById("anal_num").focus()
  }
  else if (document.getElementById("anal_num").value == ""){
    alert("Isira um número para adicionar!")
    document.getElementById("anal_num").focus()
  }
  else if (num > 100 || num < 1){
    alert("Número fora do intervalo permitido!")
    document.getElementById("anal_num").value = ""
    document.getElementById("anal_num").focus()
  }
  else{
    document.getElementById("lista_anal").insertAdjacentHTML("beforeend", `<option value="item${num}">Número ${num}</option>`)
    lista.push(num)
    document.getElementById("anal_num").value = ""
    document.getElementById("anal_num").focus()
    document.getElementById("resultado_anal").innerHTML = ""
  }

}

function finalizar_anal(){
  lista.sort(function(a, b){return a - b});
  let soma_anal = 0;
  for (let i = 0; i < lista.length; i++){
    soma_anal += lista[i]
  }

  if (document.getElementById("lista_anal").innerHTML.trim() != ""){
    document.getElementById("resultado_anal").innerHTML = `
    <p>Ao todo tivemos <strong>${lista.length}</strong> números adicionados</p>
    <p>O <strong>maior</strong> valor informado foi ${lista[lista.length - 1]}</p>
    <p>O <strong>menor</strong> valor informado foi ${lista[0]}</p>
    <p>A <strong>soma</strong> entre os valores é de ${soma_anal}</p>
    <p>A <strong>média</strong> dos valores é ${parseFloat(soma_anal / lista.length).toFixed(2)}</p>
    `
  }
  else  {
    alert("Adicione valores para finalizar!")
  }
}


function muda_place(){
  let placeholder_value = document.getElementsByName("lista_temp")[0].value

  if (placeholder_value === "celsius"){
    document.getElementById("temp-input-value").placeholder="°F"
    document.getElementById("temp-input-value").value=""
  }
  else {
    document.getElementById("temp-input-value").placeholder="°C"
    document.getElementById("temp-input-value").value=""
  }
}

function convertemp(){
  let placeholder_value = document.getElementsByName("lista_temp")[0].value
  let temp_value = Number(document.getElementById("temp-input-value").value)
  if (placeholder_value === "celsius"){
    temp_converted = (temp_value - 32) * 5/9
    document.getElementById("res-temp").innerHTML = `${temp_value}°F são ${parseInt(temp_converted)}°C`
  }
  else {
    temp_converted = (temp_value * 9/5) + 32
    document.getElementById("res-temp").innerHTML = `${temp_value}°C são ${parseInt(temp_converted)}°F`
  }
}

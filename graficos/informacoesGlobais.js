const url='https://github.com/guilhermeonrails/api/blob/main/dados-globais.json'
async function visualizarInformacoesGlobais(){
  const res= await fetch(url)
  const dados= await res.json()
  console.log(dados);
  const paragrafo = document.createElement('p')
  paragrafo.classList.add('graficos-container_texto')

  paragrafo.innerHTML=
}

console.log(url);

document.querySelector('.busca').addEventListener('submit',async (event)=>{
let resultado = document.querySelector('#result') 

let cidade = document.querySelector('#cidade')
let uf = document.querySelector('#uf')
let bairro = document.querySelector('#bairro')
let localidade = document.querySelector('#localidade')


    
    event.preventDefault()
   let input = document.querySelector('#buscar-cep').value

   let url = `http://viacep.com.br/ws/${encodeURI(input)}/json/`

   let resposta =  await fetch(url)
   let json = await resposta.json()
  
   // console.log(json.logradouro)
   // resultado.innerHTML=input

   console.log(json)
cidade.value=json.logradouro
uf.value=json.uf
bairro.value=json.bairro
localidade.value=json.localidade
})
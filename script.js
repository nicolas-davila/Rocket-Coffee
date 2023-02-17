function clicou () {
  const botaoOpen = document.getElementById('botaoOpen')
  const botaoClose = document.getElementById('botaoClose')
  const listaAberta = document.querySelector('.lista')
  const footerSumir = document.querySelector('footer')
    
  if(botaoClose.innerHTML === `<img src="./imagens/menu-buguer-close.svg">`) {
    botaoClose.innerHTML = ''
  }else {
    botaoClose.innerHTML = `<img src="./imagens/menu-buguer-close.svg">`
  }
  botaoOpen.classList.toggle('abrir');
  listaAberta.classList.toggle('lista-aberta')
  footerSumir.classList.toggle('footer-sumir')
}
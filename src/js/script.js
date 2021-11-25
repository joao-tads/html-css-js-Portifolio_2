var hamburguer = document.querySelector('.hamburguer')

hamburguer.addEventListener('click', () => {
  var sidebar = document.querySelector('.sidebar').classList.toggle('show')
})

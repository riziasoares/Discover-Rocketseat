function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light") //para mudar o tema de light para dark apertando o botão

  const img = document.querySelector("#profile img") //para pegar a tag img

  // substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/avatar-light.png") // se estiver em light mode, add a img light
  } else {
    img.setAttribute("src", "./assets/assets/avatar.png") //se estiver em dark mode, manter a img
  }
}

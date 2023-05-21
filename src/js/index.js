/* 
Essa função altera entre o modo light ou dark
substituindo as imagens a partir da tag img
*/

function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")


  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.jpeg")
  } else {
    img.setAttribute("src", "./assets/avatar.jpg")
  }
}

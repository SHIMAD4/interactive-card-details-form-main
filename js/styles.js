let link = document.getElementById("styles").getAttribute('href')    // Получение содержимого link.href
console.log(link)

const screenWidth = window.screen.width    // Получение ширины экрана

if(screenWidth !== 1400){
  link.href = '/style/mobile.css'
}

function width() {
  console.log(screenWidth)
}

setInterval(width, 1000);
document.addEventListener('DOMContentLoaded', () => {

  const inputElement = document.querySelector('.cardnumber') // ищем наш единственный input
  const inputMask = { // создаем объект параметров
    mask: '0000 0000 0000 0000' // задаем единственный параметр mask
  }

  const month = document.querySelector('.card_mm')
  const monthMask = {
    mask: '00'
  }

  const year = document.querySelector('.card_yy')
  const yearMask = {
    mask: '0000'
  }

  const card_cvc = document.querySelector('.card_cvc')
  const card_cvcMask = {
    mask: '000'
  }

  IMask(inputElement, inputMask) // запускаем плагин с переданными параметрами
  IMask(month, monthMask)
  IMask(year, yearMask)
  IMask(card_cvc, card_cvcMask)

})
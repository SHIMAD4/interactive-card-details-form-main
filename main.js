document.addEventListener('DOMContentLoaded', () => {

  const mask = (dataValue, options) => {                                          // создаем универсальную функцию
    const elements = document.querySelectorAll(`[data-mask="${dataValue}"]`)      // ищем поля ввода по селектору с переданным значением data-атрибута
    if (!elements) return                                                         // если таких полей ввода нет, прерываем функцию

    elements.forEach(el => {                                                      // для каждого из полей ввода
      IMask(el, options)                                                          // инициализируем плагин imask для необходимых полей ввода с переданными параметрами маски
    })
  }

  mask('card-number', {
    mask: '0000 0000 0000 0000'
  })

  mask('card-mm', {
    mask: '00'
  })

  mask('card-yy', {
    mask: '0000'
  })

  mask('card-cvc', {
    mask: '000'
  })
})
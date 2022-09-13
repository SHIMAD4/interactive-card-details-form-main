let $cardNumber_prg = document.querySelector('.card-number-prg')       // Забрал параграф с номером карты
let $cardName_prg   = document.querySelector('.card-name-prg')         // Забрал параграф с именем пользователя
let $cardDateMM_prg = document.querySelector('.card-mm-prg')           // Забрал параграф с месяцем
let $cardDateYY_prg = document.querySelector('.card-yy-prg')           // Забрал параграф с годом
let $cardСvc_prg    = document.querySelector('.card-cvc-prg')          // Забрал параграф с CvC


let cardNumber = document.querySelector('.card-number')
cardNumber.oninput = function() {
  $cardNumber_prg.innerHTML = this.value;

  if(cardNumber.value === ''){
    $cardNumber_prg.innerHTML = '0000 0000 0000 0000'
  }
}

let userName = document.querySelector('.user-name')
userName.oninput = function() {

  $cardName_prg.innerHTML = this.value;

  if(userName.value === ''){
    $cardName_prg.innerHTML = 'Cardholder Name'
  }
}

let cardDateMM = document.querySelector('.card_mm')
cardDateMM.oninput = function() {
  $cardDateMM_prg.innerHTML = this.value;

  if(cardDateMM.value === ''){
    $cardDateMM_prg.innerHTML = '00'
  }
}

let cardDateYY = document.querySelector('.card_yy')
cardDateYY.oninput = function() {
  $cardDateYY_prg.innerHTML = this.value;

  if(cardDateYY.value === ''){
    $cardDateYY_prg.innerHTML = '00'
  }
}

let cardСvc = document.querySelector('.card_cvc')
cardСvc.oninput = function() {
  $cardСvc_prg.innerHTML = this.value;

  if(cardСvc.value === ''){
    $cardСvc_prg.innerHTML = '000'
  }
}
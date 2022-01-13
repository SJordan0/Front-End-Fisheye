//___DOM___//
const main = document.getElementById('main_photo')
const modalBg = document.querySelector('.modal-background')
const modal = document.querySelector('.modal')
const contact = document.querySelector('.contact_button')
const closeContact = document.querySelector('#closeModal')
const errorFirstName = document.getElementById('message-firstname') // creation de error FirstName
const errorLastName = document.getElementById('message-lastname') // creation de error LastName
const errorEmail = document.getElementById('message-email') // creation de error Email
const errorMessage = document.getElementById('message-message') // creation de error Message
const firstName = document.getElementById('firstname') // ajout input firstname dans le DOM
const lastName = document.getElementById('lastname') // ajout input lastname dans le DOM
const eMail = document.getElementById('email') // ajout input email dans le DOM
const message = document.getElementById('message')
const submit = document.getElementById('button')

//___Ouverture de la modale___//
contact.addEventListener('click', () => displayModal())

function displayModal() {
  modalBg.style.display = 'block'
  modalBg.setAttribute('aria-hidden', 'false')
  contact.style.display = 'none'
  main.setAttribute('aria-hidden', 'true')
  modal.focus()
  modal.setAttribute('tabindex', '0')
}

//___Fermeture de la modale___//
closeContact.addEventListener('click', () => closeModal())
modal.addEventListener('keydown', (e) => onKey(e))

function onKey(e) {
  let keynum = e.key
  if (keynum == 'Escape') {
    closeModal()
  }
}

function closeModal() {
  modalBg.style.display = 'none'
  modalBg.setAttribute('aria-hidden', 'true')
  contact.style.display = 'block'
  main.setAttribute('aria-hidden', 'false')
  modal.setAttribute('tabindex', '-1')
  modal.removeEventListener('keydown', onKey)
}

//___Vérification du prénom___//
let regexName = /^[a-zA-ZéèêëîïÈÉÊËÎÏÀÁÂ][a-zA-ZéèêëîïÈÉÊËÎÏÀÁÂ]+([ \-'][a-zA-ZéèêëîïÈÉÊËÎÏÀÁÂ][a-zA-ZéèêëîïÈÉÊËÎÏÀÁÂ]+)?$/

firstName.addEventListener('blur', testFirstName)

function testFirstName() {
  if ((firstName.value.length < 2) || 
     (firstName.value.length >= 30) ||
     (!regexName.test(firstName.value)) || 
     (firstName.value == '')) {
    firstName.classList.add('inputError') // attribution de la classe "inputError" à firstName(input)
    errorFirstName.classList.remove('sr-only')
    firstName.addEventListener('input', testFirstName)
    return false
  } else {
    firstName.classList.remove('inputError')
    errorFirstName.classList.add('sr-only')
    return true
  }
}
//___Vérification du nom___//
lastName.addEventListener('blur', testLastName)

function testLastName() {
  if ((lastName.value.length < 2) || 
     (lastName.value.length >= 30) ||
     (!regexName.test(lastName.value)) || 
     (lastName.value == '')) {
    lastName.classList.add('inputError') // attribution de la classe "inputError" à lastName(input)
    errorLastName.classList.remove('sr-only')
    lastName.addEventListener('input', testLastName)
    return false
  } else {
    lastName.classList.remove('inputError')
    errorLastName.classList.add('sr-only')
    return true
  }
}
//___Vérification de l'email___//
let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

eMail.addEventListener('blur', testEmail)

function testEmail() {
  if ((eMail.value.length < 5) || 
     (eMail.value.length >= 30) ||
     (!regexEmail.test(eMail.value)) || 
     (eMail.value == '')) {
    eMail.classList.add('inputError') // attribution de la classe "inputError" à email(input)
    errorEmail.classList.remove('sr-only')
    eMail.addEventListener('input', testEmail)
    return false
  } else {
    eMail.classList.remove('inputError')
    errorEmail.classList.add('sr-only')
    return true
  }
}
//___Vérification du message___//
message.addEventListener('blur', testMessage)
let regexMessage = /[a-z]/
function testMessage() {
  if (((message.value.length < 5) ||
      (message.value) == '') ||
      (!regexMessage.test(message.value))) {
    message.classList.add('inputError') // attribution de la classe "inputError" au message(input)
    errorMessage.classList.remove('sr-only')
    message.addEventListener('input', testMessage)
    
    return false
  } else {
    message.classList.remove('inputError')
    errorMessage.classList.add('sr-only')
    return true
  }
}

//___Validation de la modale___//
submit.addEventListener('click', (event) => {
  validate(event)
})

function validate(event) {
  event.preventDefault()
  if ((testFirstName() === true) && 
      (testLastName() === true) && 
      (testEmail() === true) && 
      (testMessage() === true)) {
    console.log('Prénom : ' + firstName.value)
    console.log('Nom : ' + lastName.value)
    console.log('email : ' + eMail.value)
    console.log('message : ' + message.value)
    closeModal()
    return false
  } else {
    testFirstName()
    testLastName()
    testEmail()
    testMessage()
  }
}

export { displayModal }


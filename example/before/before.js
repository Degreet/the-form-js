const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const { value: login } = form.querySelector('[name="login"]')
  const { value: pwd } = form.querySelector('[name="pwd"]')
  const { value: gender } = form.querySelector('[name="gender"]')
  alert(`Ваш логин: ${login}\nВаш пароль: ${pwd}\nПол: ${gender}`)
})
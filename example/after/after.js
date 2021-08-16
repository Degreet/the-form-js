window.addEventListener('load', () => {
  const form = TheForm.forms['first']

  form.el.addEventListener('submit', () => {
    const { login, pwd, gender } = form
    alert(`Ваш логин: ${login}\nВаш пароль: ${pwd}\nПол: ${gender}`)
  })
})
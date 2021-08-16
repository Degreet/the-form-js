const listeners = []
const forms = {}

function setupForms() {
  const formsForSetup = document.querySelectorAll('form[the-form]')

  formsForSetup.forEach((form) => {
    const formName = form.getAttribute('the-form')
    let formData = forms[formName]
    if (!formData) formData = forms[formName] = { el: form }

    const handler = (e) => e.preventDefault()
    const type = 'submit'

    form.addEventListener(type, handler)

    listeners.push({
      el: form,
      type,
      handler,
    })

    const inputs = form.querySelectorAll('[name]')

    inputs.forEach((inp) => {
      const type = 'change'
      const handler = (e) => formData[inp.name] = e.target.value

      formData[inp.name] = inp.value
      inp.addEventListener(type, handler)

      listeners.push({
        el: inp,
        type,
        handler,
      })
    })
  })
}

function reloadForms() {
  listeners.forEach((listener) => listener.el.removeEventListener(listener.type, listener.handler))
  setupForms()
}

const TheForm = {
  listeners,
  setupForms,
  reloadForms,
  forms,
}

window.TheForm = TheForm
window.addEventListener('load', setupForms)

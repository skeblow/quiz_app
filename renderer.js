const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    console.log(document.forms[0]['answer1'].value)
})

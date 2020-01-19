const { ipcRenderer } = require('electron')

const submitListen = document
    .querySelector('form')
    .addEventListener('submit', (e) => {
        e.preventDefault()

        const question = {
            text: document.forms[0]['text'].value,
            answer1: document.forms[0]['answer1'].value,
            answer2: document.forms[0]['answer2'].value,
            answer3: document.forms[0]['answer3'].value,
            answer4: document.forms[0]['answer4'].value,
        }
        console.log(question)

        ipcRenderer.send('createdQuestion', question)
    })

ipcRenderer.on('createSuccess', (event, message) => {
    document.getElementById('message').innerHTML = message
})

ipcRenderer.on('createSuccess:error', (event, error) => {
    console.error(error)
})
const { ipcRenderer } = require('electron')

document.getElementById('openQuestionsWindow')
    .addEventListener('click', (e) => {
        e.preventDefault()

        ipcRenderer.send('openQuestionsWindow')
    })

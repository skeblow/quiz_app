const { ipcRenderer } = require('electron')
const { QuestionService } = require('../services/questions_service.js')
const { JsonService } = require('../services/json_service')

let questionService = new QuestionService(new JsonService())

document.getElementById('addButton')
    .addEventListener('click', (e) => {
        e.preventDefault()

        ipcRenderer.send('openQuestionWindow')
    })

const table = document.getElementById('questions')

for (let question of questionService.getQuestions()) {
    let row = document.createElement('tr')
    let number = document.createElement('td')
    let name = document.createElement('td')
    let actions = document.createElement('td')

    number.append(question.id)
    name.append(question.text)

    let editButton = document.createElement('button')
    editButton.append('edit')

    let deleteButton = document.createElement('button')
    deleteButton.append('delete')

    actions.append(editButton, deleteButton)

    row.append(number, name, actions)

    table.append(row)
}

const { ipcRenderer } = require('electron')
const { QuestionService } = require('../services/questions_service')

const questionService = new QuestionService()

document.querySelector('form')
    .addEventListener('submit', (e) => {
        e.preventDefault()

        const question = {
            id: null,
            "text": document.forms[0].elements["text"].value,
            "answer_1": document.forms[0].elements["answer_1"].value,
            "answer_2": document.forms[0].elements["answer_2"].value,
            "answer_3": document.forms[0].elements["answer_3"].value,
            "answer_4": document.forms[0].elements["answer_4"].value,
        }
        questionService.addQuestion(question)
        ipcRenderer.send('closeQuestionWindow')
    })
     

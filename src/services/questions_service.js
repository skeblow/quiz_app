module.exports.QuestionService = class QuestionService {
    constructor (jsonService) {
        this.jsonService = jsonService
    }

    getQuestions() {
        return this.jsonService.getAll()
    }

    deleteQuestion() {

    }

    addQuestion(question) {

    }

    editQuestion() {

    }
}

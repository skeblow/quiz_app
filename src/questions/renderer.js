
class QuestionService {
    getQuestions (){
        return [
            {
                id:1,
                "text": "asdasd",
                "answer_1": "ew",
                "answer_2": "gfn",
                "answer_3": "egdf",
                "answer_4": "bcv"
            }
        ]
    }

    deleteQuestion(){

    }
    addQuestion(){

    }
    editQuestion(){

    }
}

let questionService = new QuestionService()
console.log(questionService.getQuestions())
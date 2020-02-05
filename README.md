# Server side of quiz app

- https://electronjs.org/docs/tutorial/first-app

### windows

## main window

- start button
- question list link

# question window

- question list
    - question number
    - part of question text
    - button for delete
    - button for edit
- button for add

# add/edit question window

- text
- 1 correct answer
- 3 incorrect answers
- add button
- cancel button
- id of question somewhere

# [WIP] game window

QuestionService
    getQuestions: array of Question
    deleteQuestion
    addQuestion
    editQuestion

JsonService
    getAll
    get
    add
    delete
    update

Question
    id: number
    text: string
    answer_1: string
    answer_2: string
    answer_3: string
    answer_4: string

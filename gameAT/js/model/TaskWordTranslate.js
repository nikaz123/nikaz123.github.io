export default class TaskWordTranslate {
    constructor(answerfield,task,words) {

        this.answerfield=answerfield;
        this.task=task;
        this.words=words;

        this.renderTask();
    }


    checker(value) {

        if (value == 'true') {
            this.task.classList += ' correct'
        } else {
            this.task.classList += ' wrong'
        }

    }

    renderTask() {
        this.answerfield.value = '';

        this.wordTranslate = Object.keys(this.words)[Math.floor(Math.random() * (Object.keys(this.words).length))];  // random word from array

        this.answerWordTranslateArray = this.words[this.wordTranslate];
        this.task.innerText=this.wordTranslate;

    }

}
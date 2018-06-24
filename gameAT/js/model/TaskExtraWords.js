export default class TaskExtraWords {
    constructor(answerfield, task, words) {

        this.answerfield=answerfield;
        this.task=task;
        this.words=words;
        this.renderTask = this.renderTask.bind(this);

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

        this.answerExtraWords =  Object.keys(this.words)[Math.floor(Math.random() * (Object.keys(this.words).length))];  ////неправильное слово

        this.wordTaskExtraWordsArray = this.words[this.answerExtraWords];  // массив

        this.task.innerText=this.wordTaskExtraWordsArray.join(' ');

    }

}
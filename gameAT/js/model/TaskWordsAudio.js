export default class TaskWordsAudio {
    constructor(answerfield,task,words) {

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
        this.word =  Object.keys(this.words)[Math.floor(Math.random() * (Object.keys(this.words).length))];

    }

}
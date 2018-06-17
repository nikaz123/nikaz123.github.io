export default class TaskAnimalTasks {
    constructor(answerfield, task, words) {

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

        this.answerWordTasksAnimalString =  Object.keys(this.words)[Math.floor(Math.random() * (Object.keys(this.words).length))];  ////отгадка

        this.wordTasksAnimal = this.words[this.answerWordTasksAnimalString];  ////текст загадки


        this.task.innerText=this.wordTasksAnimal;


    }

}
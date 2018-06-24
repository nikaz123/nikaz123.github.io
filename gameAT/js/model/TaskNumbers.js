export default class TaskNumbers {
    constructor(answerfield,task) {
        this.answerfield=answerfield;
        this.task=task;
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
        let value_one = Math.floor(Math.random() * 9) + 1;
        let value_two = Math.floor(Math.random() * 9) + 1;
        // Add Task to Display
        let new_task = `${value_one} * ${value_two}`;
        this.task.innerText = new_task;
    }

}
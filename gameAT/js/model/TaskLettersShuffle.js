export default class TaskLettersShuffle {
    constructor(answerfield,task,words) {

        this.answerfield=answerfield;
        this.task=task;
        this.words=words;

        String.prototype.shuffle = function () {
            let a = this.split(""),
                n = a.length;

            for (let i = n - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                let tmp = a[i];
                a[i] = a[j];
                a[j] = tmp;
            }
            return a.join("");
        }
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

        sortable.innerHTML='';
        this.wordShuffle = Object.keys(this.words)[Math.floor(Math.random() * (Object.keys(this.words).length))];  // random word from array
        this.shuffledWord= this.wordShuffle.shuffle();

        Array.from(this.shuffledWord).forEach(
            (currentValue, index, array)=>{
                let eli = document.createElement("LI");
                  eli.innerText=currentValue;
                sortable.appendChild(eli);

            }

        )



    }

}
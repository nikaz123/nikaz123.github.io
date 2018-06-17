export default class TaskRandomMathOperation {
    constructor(answerfield,task) {

        this.answerfield=answerfield;
        this.task=task;
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

        let a=Math.floor(Math.random() *8)+1;
        let b= Math.floor(Math.random() *8)+1;

        let operators = [{
            sign: "+",
            method: function(a,b){ return a + b; }
        },{
            sign: "-",
            method: function(a,b){ return a - b; }
        },
        {
            sign: "*",
            method: function(a,b){ return a * b; }
        },
        {
            sign: "/",
            method: function(a,b){ return a / b; }
        }
        ];

        let selectedOperator = Math.floor(Math.random()*operators.length);



        let new_task = a + " " + operators[selectedOperator].sign + " " + b + " =";


        this.answer=operators[selectedOperator].method(a,b);

        if (selectedOperator == 3)
        {
            let result = a*b;
            new_task = result + " / " + a + " =";
            this.answer = b;
        }

        this.task.innerText = new_task;




    }


}
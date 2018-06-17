import DrawMonster from   './view/DrawMonster';
import DrawSpell from   './view/DrawSpell';
import Hero from   './model/Hero.js';
import objWords from   './model/objWords.js';
import TableResults from   './model/TableResults.js';
import TaskLettersShuffle from   './model/TaskLettersShuffle.js';
import TaskNumbers from   './model/TaskNumbers.js';
import TaskRandomMathOperation from   './model/TaskRandomMathOperation.js';
import TaskWordsAudio from   './model/TaskWordsAudio.js';
import TaskWordTranslate from   './model/TaskWordTranslate.js';
import TaskExtraWords from './model/TaskExtraWords.js';
import objTasks from "./model/objTasks.js";
import objExtraWords from "./model/objExtraWords.js";

import objNextNumber from "./model/objNextNumber.js";
import objAntonym from "./model/objAntonym.js";

import objInputLetter from "./model/objInputLetter.js";
import TaskAnimalTasks from   './model/TaskAnimalTasks.js';



///////////////////window with input data

let  drawmonster, drawHero, result, cor_count = 0, wrong_count = 0, monster_count=0, spell=1, last_wrong_count=0, last_spell=1;

let sounds=[new Audio('sounds/spell1.wav'),new Audio('sounds/spell2.wav'),new Audio('sounds/spell3.wav'),new Audio('sounds/spell4.wav'),new Audio('sounds/spell5.wav'),new Audio('sounds/spell6.wav')];



$(function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
} );

////////TABLE RESULTS
function drawTableRecords () {
    let elementTableResults = document.getElementById('tableResults');
    elementTableResults.innerHTML='';
    let tableResults = new TableResults(ATtop5);
    elementTableResults.appendChild(tableResults.createTable());
}

function rangelimit(a,range)
{
    return a>range?range:a
}

function updateHealth(){
    let full_width=document.getElementsByClassName('healthContainer')[0].offsetWidth;
    document.getElementById("monsterHealth").style.width=(full_width-(full_width/3*(rangelimit(cor_count,3))))+"px";
    document.getElementById("heroHealth").style.width=(full_width-(full_width/3*(rangelimit(wrong_count,3))))+"px";
}

function winnerGameOver(task_element) {
    setTimeout(function () {
        setTimeout(updateHealth,500);

        if (wrong_count!=last_wrong_count)
        {
           last_wrong_count=wrong_count;
           last_spell=spell;
           spell=6;
        }else
            {
                spell=last_spell;
        }
        let elementCanvasForSpell = document.getElementById('canvasForSpell');
        let newSpell = new DrawSpell(elementCanvasForSpell, spell);
        sounds[spell-1].play();

        setTimeout(function(){
        if (cor_count + wrong_count == 5 || cor_count == 3 || wrong_count == 3) {



            if (cor_count > wrong_count) {

                let elementWinnerWindow = document.getElementById('winner-window');
                elementWinnerWindow.classList.toggle('hide');
                task_element.classList.toggle('hide');
                monster_count++;
            }
            else {
                let elementGameOverWindow = document.getElementById('gameover-window');
                elementGameOverWindow.classList.toggle('hide');
                task_element.classList.toggle('hide');
                let top_record =
                    {
                        atname: localStorage['firstNameInput'],
                        atscore: monster_count
                    };
                ATtop5.push(top_record);
                ATtop5.sort(sortByScore);
                ATtop5 = ATtop5.slice(0, 5);
                localStorage['ATtop5'] = JSON.stringify(ATtop5);
                monster_count = 0;
                drawTableRecords();
            }


            cor_count = 0;
            wrong_count = 0;
            last_wrong_count=0;
            last_spell=1;
            correctWordTranslate.innerText = '0';
            wrongWordTranslate.innerText = '0';
            wrong.innerText = '0';
            correct.innerText = '0';
            wrongRandomMathOperation.innerText = '0';
            correctRandomMathOperation.innerText = '0';
            correctWordsAudio.innerText = '0';
            wrongWordsAudio.innerText = '0';
            wrongLetterShuffle.innerText = '0';
            correctLetterShuffle.innerText = '0';
            correctAnimalTasks.innerText = '0';
            wrongAnimalTasks.innerText = '0';
            correctExtraWords.innerText = '0';
            wrongExtraWords.innerText = '0';
            correctNextNumber.innerText = '0';
            wrongNextNumber.innerText = '0';
            correctAntonym.innerText = '0';
            wrongAntonym.innerText = '0';
            correctInputLetter.innerText = '0';
            wrongInputLetter.innerText = '0';
           setTimeout(updateHealth,500);
        }
        },2000);
    },500);
}
let ATtop5=[];

if (typeof localStorage['ATtop5'] == "undefined") localStorage['ATtop5'] = JSON.stringify(ATtop5);

ATtop5 = JSON.parse(localStorage['ATtop5']);

function sortByScore(a, b) {
    return a.atscore < b.atscore ? 1 : -1;
}


$(function () {
    $("#sortable").sortable();
    $("#sortable").disableSelection();
});


let buttonNext = document.getElementById('btnNext');
buttonNext.addEventListener("click", startToInputData);


function startToInputData(e) {
    e.preventDefault();
    toggleWindowHistoryOfGameEvents();
    toggleWindowInputData();
}


function toggleWindowHistoryOfGameEvents() {
    let elementHistoryOfGameEvents = document.getElementById('historyOfGameEvents');
    elementHistoryOfGameEvents.classList.toggle('hide');
}

function toggleWindowInputData() {
    let elementWindowData = document.getElementById('options-form');
    elementWindowData.classList.toggle('hide');
}


//////////////////begin game window

let buttonBeginGame = document.getElementById('begin-btn');
buttonBeginGame.addEventListener('click', startGame);

function startGame(e) {
    e.preventDefault();
    if (!validateGameConfig()) return;
    toggleWindowInputData();
    toggleGameWindow();

    ////////DrawMonster
    let canvas = document.getElementById('canvasForMonster');
     drawmonster = new DrawMonster(canvas);

    /////DrawHero
    let canvasHero = document.getElementById('canvasForHero');
     drawHero = new Hero(canvasHero, showBattleWin);
}


function toggleGameWindow() {
    let elementWindowGame = document.getElementById('game-window');
    elementWindowGame.classList.toggle('hide');
}

/////////////////////////////////////////////// validation

function validateGameConfig() {
    if (document.getElementById('firstNameInput').value == '') {
        showError('введи имя');
        return false;
    }
    localStorage['firstNameInput'] = document.getElementById('firstNameInput').value;

    if (document.getElementById('passwordInput').value == '') {
        showError('введи пароль');
        return false;
    }
    localStorage['passwordInput'] = document.getElementById('passwordInput').value;

    return true;
}

function showError(message) {
    let messageDiv = document.createElement('div');
    messageDiv.className = "errorMessage";
    let content = document.createTextNode(message);
    messageDiv.appendChild(content);
    let mainElementId = document.querySelector("form.options-form");
    mainElementId.appendChild(messageDiv);
    setTimeout(function () {
        messageDiv.parentNode.removeChild(messageDiv)
    }, 1000);

}

///////////////show battle begin message


function showBattleWin() {
    let elementWindowSpell = document.getElementById('window-spell');
    elementWindowSpell.classList.toggle('hide');
}


/////////////////
const root = document.querySelector('.modalWindowofTask');

    root.addEventListener('click', (event) => {
        let target = event.target;

            if (target.classList.contains('taskMath')) {
                    let theid=target.getAttribute('id');

                if (theid=='taskMath')
                {
                    let elementTaskMath = document.getElementById('window-taskMath');
                    elementTaskMath.classList.toggle('hide');

                    let elementModalWindowofTask=document.getElementById('window-spell');
                    elementModalWindowofTask.classList.toggle('hide');
                    spell =1;
                }

                if (theid=='taskWordsAudio') {

                    let elementTaskMath = document.getElementById('window-taskWordsAudio');
                    elementTaskMath.classList.toggle('hide');

                    let elementModalWindowofTask=document.getElementById('window-spell');
                    elementModalWindowofTask.classList.toggle('hide');
                    spell =2;

                }

                if (theid=='taskWordTranslate') {

                    let elementTaskMath = document.getElementById('window-taskWordTranslate');
                    elementTaskMath.classList.toggle('hide');

                    let elementModalWindowofTask=document.getElementById('window-spell');
                    elementModalWindowofTask.classList.toggle('hide');
                    spell =3;

                }

                if (theid=='taskLettersShuffle') {

                    let elementTaskMath = document.getElementById('window-taskWordLettersShuffle');
                    elementTaskMath.classList.toggle('hide');

                    let elementModalWindowofTask=document.getElementById('window-spell');
                    elementModalWindowofTask.classList.toggle('hide');
                    spell =4;

                }

                if (theid=='taskRandomMathOperation') {

                    let elementTaskMath = document.getElementById('window-taskMathRandomOperation');
                    elementTaskMath.classList.toggle('hide');

                    let elementModalWindowofTask=document.getElementById('window-spell');
                    elementModalWindowofTask.classList.toggle('hide');
                    spell =5;

                }

                if (theid=='taskAnimalTasks') {

                    let elementTaskMath = document.getElementById('window-taskAnimalTasks');
                    elementTaskMath.classList.toggle('hide');

                    let elementModalWindowofTask=document.getElementById('window-spell');
                    elementModalWindowofTask.classList.toggle('hide');
                    spell =1;

                }
                if (theid=='taskExtraWords') {

                    let elementTaskMath = document.getElementById('window-taskExtraWords');
                    elementTaskMath.classList.toggle('hide');

                    let elementModalWindowofTask=document.getElementById('window-spell');
                    elementModalWindowofTask.classList.toggle('hide');
                    spell =2;

                }

                if (theid=='taskNextNumber') {

                    let elementTaskMath = document.getElementById('window-taskNextNumber');
                    elementTaskMath.classList.toggle('hide');

                    let elementModalWindowofTask=document.getElementById('window-spell');
                    elementModalWindowofTask.classList.toggle('hide');
                    spell =3;

                }
                if (theid=='taskAntonym') {

                    let elementTaskMath = document.getElementById('window-taskAntonym');
                    elementTaskMath.classList.toggle('hide');

                    let elementModalWindowofTask=document.getElementById('window-spell');
                    elementModalWindowofTask.classList.toggle('hide');
                    spell =4;

                }
                if (theid=='taskInputLetter') {

                    let elementTaskMath = document.getElementById('window-taskInputLetter');
                    elementTaskMath.classList.toggle('hide');

                    let elementModalWindowofTask=document.getElementById('window-spell');
                    elementModalWindowofTask.classList.toggle('hide');
                    spell =5;

                }


                last_spell=spell;
            }

    });


/////// btn ОТЛИЧНО


let ebtnNewGameWinner = document.getElementById('btnNewGameWinner');

ebtnNewGameWinner.addEventListener('click', newMonster);

let ebtnNewGameGameover = document.getElementById('btnNewGameGameover');

ebtnNewGameGameover.addEventListener('click', newMonster);




function newMonster (event) {


if (event.target.getAttribute('id')== 'btnNewGameWinner') {

   let elementNewMonster = document.getElementById('winner-window');
    elementNewMonster.classList.toggle('hide');

}

    if (event.target.getAttribute('id')== 'btnNewGameGameover') {


    let elementNewMonster2 = document.getElementById('gameover-window');
    elementNewMonster2.classList.toggle('hide');

}
    drawmonster.initMonster();
    drawHero.initeHero();
}


///////////////////   controllerTaskLetterShuffle
let taskLetterShuffle = document.querySelector('.WordLettersShuffle');
let buttonCheckWord = document.getElementById('btnCheckWord');
let correctLetterShuffle = document.querySelector('#window-taskWordLettersShuffle .correct-ans');
let wrongLetterShuffle = document.querySelector('#window-taskWordLettersShuffle .wrong-ans');

let newTaskLetterShuffle = new TaskLettersShuffle(null,taskLetterShuffle,objWords);


buttonCheckWord.addEventListener('click', e => {

    let wordok = false;
    let stringtocheck = '';
    Array.from(sortable.getElementsByTagName("li")).forEach((a) => {
        stringtocheck += a.innerText
    });

    wordok = (stringtocheck == newTaskLetterShuffle.wordShuffle);

    if (wordok) {                                 ////&& answerWordLettersShuffle.value != '') {

        newTaskLetterShuffle.checker('true');
        cor_count++;
        correctLetterShuffle.innerText = cor_count;
    } else {
        newTaskLetterShuffle.checker('false');
        wrong_count++;
        wrongLetterShuffle.innerText = wrong_count;
    }

    newTaskLetterShuffle.renderTask();

    winnerGameOver(document.getElementById('window-taskWordLettersShuffle'));


});

/////////////////////////////////controller TaskNumbers
let answer = document.querySelector('#answerNumber');
let task = document.querySelector('.task');
let correct = document.querySelector('.correct-ans');
let wrong = document.querySelector('.wrong-ans');

let newTaskNumber = new TaskNumbers(answer,task);

answer.addEventListener('keypress', e => {
    if (e.code == 'Enter' && answer.value != '') {
        let answ = task.innerText.split('*');
        answ = answ[0] * answ[1];
        if (answ == answer.value) {
            newTaskNumber.checker('true');
            cor_count++;
            correct.innerText = cor_count;
        } else {
            newTaskNumber.checker('false');
            wrong_count++;
            wrong.innerText = wrong_count;
        }
        answer.value = '';
        newTaskNumber.renderTask();
        winnerGameOver(document.getElementById('window-taskMath'));

    }
});


////////////////////////////controllerRandomMathOperation
let answerRandomMathOperation = document.querySelector('#answerMathRandomOperation');
let taskRandomMathOperation = document.querySelector('.MathRandomOperation');
let correctRandomMathOperation = document.querySelector('#window-taskMathRandomOperation .correct-ans');
let wrongRandomMathOperation = document.querySelector('#window-taskMathRandomOperation .wrong-ans');


let newTaskRandomMathOperation = new TaskRandomMathOperation(answerRandomMathOperation,taskRandomMathOperation);


answerRandomMathOperation.addEventListener('keypress', e => {
    if (e.code == 'Enter' && answerRandomMathOperation.value != '') {


        let answ = answerRandomMathOperation.value;


        if (answ == newTaskRandomMathOperation.answer) {
            newTaskRandomMathOperation.checker('true');
            cor_count++;
            correctRandomMathOperation.innerText = cor_count;
        } else {
            newTaskRandomMathOperation.checker('false');
            wrong_count++;
            wrongRandomMathOperation.innerText = wrong_count;
        }

        answerRandomMathOperation.value = '';

        newTaskRandomMathOperation.renderTask();
        winnerGameOver(document.getElementById('window-taskMathRandomOperation'));
    }

});

//////////////////////////////controller TaskWordsAudio
let answerWordsAudio = document.querySelector('#answerWord');
let taskWordsAudio = document.querySelector('.Word');
let correctWordsAudio = document.querySelector('#window-taskWordsAudio .correct-ans');
let wrongWordsAudio = document.querySelector('#window-taskWordsAudio .wrong-ans');

let elementPlayAudio = document.createElement('button');
elementPlayAudio.id = 'playAudio';
elementPlayAudio.textContent = 'Прослушай слово и запиши его';
taskWordsAudio.appendChild(elementPlayAudio);

let newTaskWordsAudio = new TaskWordsAudio(null,taskWordsAudio,objWords);


elementPlayAudio.addEventListener('click', (event) => {
        let msg = new SpeechSynthesisUtterance(newTaskWordsAudio.word);
        msg.lang = 'en-US';
        window.speechSynthesis.speak(msg);
    }
);

answerWordsAudio.addEventListener('keypress', e => {
    if (e.code == 'Enter' && answerWordsAudio.value != '') {

        let answ = answerWordsAudio.value.toLowerCase();

        if (answ == newTaskWordsAudio.word) {
            newTaskWordsAudio.checker('true');
            cor_count++;
            correctWordsAudio.innerText = cor_count;
        } else {
            newTaskWordsAudio.checker('false');
            wrong_count++;
            wrongWordsAudio.innerText = wrong_count;
        }
        answerWordsAudio.value = '';
        newTaskWordsAudio.renderTask();
        winnerGameOver(document.getElementById('window-taskWordsAudio'));
    }

});


/////////////////////////controller TaskWordTranslate



let answerWordTranslate = document.querySelector('#answerWordTranslate');
let taskWordTranslate = document.querySelector('.WordTranslate');
let correctWordTranslate = document.querySelector('#window-taskWordTranslate .correct-ans');
let wrongWordTranslate = document.querySelector('#window-taskWordTranslate .wrong-ans');

let newTaskWordTranslate = new TaskWordTranslate(answerWordTranslate,taskWordTranslate,objWords);


answerWordTranslate.addEventListener('keypress', e => {
    if( e.code == 'Enter' && answerWordTranslate.value != ''){
        let answ =  answerWordTranslate.value.toLowerCase();

        if(   newTaskWordTranslate.answerWordTranslateArray.indexOf(answ)>-1 ){
            newTaskWordTranslate.checker('true');
            cor_count++;
            correctWordTranslate.innerText = cor_count;
        } else {
            newTaskWordTranslate.checker('false');
            wrong_count++;
            wrongWordTranslate.innerText = wrong_count;
        }
        answerWordTranslate.value='';
        newTaskWordTranslate.renderTask();
        winnerGameOver(document.getElementById('window-taskWordTranslate'));
    }
});

/////////////////////////controller TaskAnimalTasks


let answerAnimalTasks = document.querySelector('#answerTaskAnimalTasks');
let taskAnimalTasks = document.querySelector('.taskAnimalTasks');
let correctAnimalTasks = document.querySelector('#window-taskAnimalTasks .correct-ans');
let wrongAnimalTasks = document.querySelector('#window-taskAnimalTasks .wrong-ans');

let newTaskAnimalTasks = new TaskAnimalTasks(answerAnimalTasks,taskAnimalTasks,objTasks);


answerAnimalTasks.addEventListener('keypress', e => {
    if( e.code == 'Enter' && answerAnimalTasks.value != ''){

        let answ =  answerAnimalTasks.value.toLowerCase();

        if(answ==newTaskAnimalTasks.answerWordTasksAnimalString){
            newTaskAnimalTasks.checker('true');
            cor_count++;
            correctAnimalTasks.innerText = cor_count;
        } else {
            newTaskAnimalTasks.checker('false');
            wrong_count++;
            wrongAnimalTasks.innerText = wrong_count;
        }
        answerAnimalTasks.value='';
        newTaskAnimalTasks.renderTask();
        winnerGameOver(document.getElementById('window-taskAnimalTasks'));
    }

});

////////////////////////TaskExtraWords
let answerExtraWords = document.querySelector('#answerTaskExtraWords');
let taskExtraWords = document.querySelector('.taskExtraWords');
let correctExtraWords = document.querySelector('#window-taskExtraWords .correct-ans');
let wrongExtraWords = document.querySelector('#window-taskExtraWords .wrong-ans');

let newTaskExtraWords = new TaskExtraWords(answerExtraWords, taskExtraWords, objExtraWords);


answerExtraWords.addEventListener('keypress', e => {
    if( e.code == 'Enter' && answerExtraWords.value != ''){

        let answ =  answerExtraWords.value.toLowerCase();

        if(  newTaskExtraWords.wordTaskExtraWordsArray.indexOf(answ)>-1 ){
            newTaskExtraWords.checker('true');
            cor_count++;
            correctExtraWords.innerText = cor_count;
        } else {
            newTaskExtraWords.checker('false');
            wrong_count++;
            wrongExtraWords.innerText = wrong_count;
        }

        answerExtraWords.value='';
        newTaskExtraWords.renderTask();
        winnerGameOver(document.getElementById('window-taskExtraWords'));
    }

});
////////////////////////TaskNextNumber

let answerNextNumber = document.querySelector('#answerTaskNextNumber');
let taskNextNumber = document.querySelector('.taskNextNumber');
let correctNextNumber = document.querySelector('#window-taskNextNumber .correct-ans');
let wrongNextNumber = document.querySelector('#window-taskNextNumber .wrong-ans');

let newTaskNextNumber = new TaskExtraWords(answerNextNumber, taskNextNumber, objNextNumber);


answerNextNumber.addEventListener('keypress', e => {
    if( e.code == 'Enter' && answerNextNumber.value != ''){

        let answ =  answerNextNumber.value.toLowerCase();

        if(answ==newTaskNextNumber.answerExtraWords){
            newTaskNextNumber.checker('true');
            cor_count++;
            correctNextNumber.innerText = cor_count;
        } else {
            newTaskNextNumber.checker('false');
            wrong_count++;
            wrongNextNumber.innerText = wrong_count;
        }

        answerNextNumber.value='';
        newTaskNextNumber.renderTask();
        winnerGameOver(document.getElementById('window-taskNextNumber'));
    }

});

////////////////////////TaskAntonym

let answerAntonym = document.querySelector('#answerTaskAntonym');
let taskAntonym = document.querySelector('.taskAntonym');
let correctAntonym = document.querySelector('#window-taskAntonym .correct-ans');
let wrongAntonym = document.querySelector('#window-taskAntonym .wrong-ans');

let newTaskAntonym = new TaskExtraWords(answerAntonym, taskAntonym, objAntonym);


answerAntonym.addEventListener('keypress', e => {
    if( e.code == 'Enter' && answerAntonym.value != ''){

        let answ =  answerAntonym.value.toLowerCase();

        if(answ==newTaskAntonym.answerExtraWords){
            newTaskAntonym.checker('true');
            cor_count++;
            correctAntonym.innerText = cor_count;
        } else {
            newTaskAntonym.checker('false');
            wrong_count++;
            wrongAntonym.innerText = wrong_count;
        }

        answerAntonym.value='';
        newTaskAntonym.renderTask();
        winnerGameOver(document.getElementById('window-taskAntonym'));
    }

});

////////////////////////TaskInputLetter

let answerInputLetter = document.querySelector('#answerTaskInputLetter');
let taskInputLetter = document.querySelector('.taskInputLetter');
let correctInputLetter = document.querySelector('#window-taskInputLetter .correct-ans');
let wrongInputLetter = document.querySelector('#window-taskInputLetter .wrong-ans');

let newTaskInputLetter = new TaskExtraWords(answerInputLetter, taskInputLetter, objInputLetter);


answerInputLetter.addEventListener('keypress', e => {
    if( e.code == 'Enter' && answerInputLetter.value != ''){

        let answ =  answerInputLetter.value.toLowerCase();

        if(answ==newTaskInputLetter.answerExtraWords){
            newTaskInputLetter.checker('true');
            cor_count++;
            correctInputLetter.innerText = cor_count;
        } else {
            newTaskInputLetter.checker('false');
            wrong_count++;
            wrongInputLetter.innerText = wrong_count;
        }

        answerInputLetter.value='';
        newTaskInputLetter.renderTask();
        winnerGameOver(document.getElementById('window-taskInputLetter'));
    }

});
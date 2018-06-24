/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_DrawMonster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/DrawMonster */ "./js/view/DrawMonster.js");
/* harmony import */ var _view_DrawSpell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/DrawSpell */ "./js/view/DrawSpell.js");
/* harmony import */ var _model_Hero_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/Hero.js */ "./js/model/Hero.js");
/* harmony import */ var _model_objWords_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/objWords.js */ "./js/model/objWords.js");
/* harmony import */ var _model_TableResults_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/TableResults.js */ "./js/model/TableResults.js");
/* harmony import */ var _model_TaskLettersShuffle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model/TaskLettersShuffle.js */ "./js/model/TaskLettersShuffle.js");
/* harmony import */ var _model_TaskNumbers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./model/TaskNumbers.js */ "./js/model/TaskNumbers.js");
/* harmony import */ var _model_TaskRandomMathOperation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./model/TaskRandomMathOperation.js */ "./js/model/TaskRandomMathOperation.js");
/* harmony import */ var _model_TaskWordsAudio_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./model/TaskWordsAudio.js */ "./js/model/TaskWordsAudio.js");
/* harmony import */ var _model_TaskWordTranslate_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./model/TaskWordTranslate.js */ "./js/model/TaskWordTranslate.js");
/* harmony import */ var _model_TaskExtraWords_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./model/TaskExtraWords.js */ "./js/model/TaskExtraWords.js");
/* harmony import */ var _model_objTasks_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./model/objTasks.js */ "./js/model/objTasks.js");
/* harmony import */ var _model_objExtraWords_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./model/objExtraWords.js */ "./js/model/objExtraWords.js");
/* harmony import */ var _model_objNextNumber_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./model/objNextNumber.js */ "./js/model/objNextNumber.js");
/* harmony import */ var _model_objAntonym_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./model/objAntonym.js */ "./js/model/objAntonym.js");
/* harmony import */ var _model_objInputLetter_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./model/objInputLetter.js */ "./js/model/objInputLetter.js");
/* harmony import */ var _model_TaskAnimalTasks_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./model/TaskAnimalTasks.js */ "./js/model/TaskAnimalTasks.js");





















//////////CONSTANTS

const WATER_SPELL = 1;
const FIRE_SPELL = 2;
const SLIME_SPELL = 3;
const LIGHT_SPELL = 4;
const PLAZMA_SPELL = 5;
const MONSTER_SPELL = 6;
const TOTAL_COUNT = 5;
const WIN_COUNT = 3;


///////////////////window with input data

let drawmonster, drawHero, result, cor_count = 0, wrong_count = 0, monster_count = 0, spell = 1, last_wrong_count = 0,
    last_spell = 1;

let sounds = [new Audio('sounds/spell1.wav'), new Audio('sounds/spell2.wav'), new Audio('sounds/spell3.wav'), new Audio('sounds/spell4.wav'), new Audio('sounds/spell5.wav'), new Audio('sounds/spell6.wav')];


$(function () {
    $("#sortable").sortable();
    $("#sortable").disableSelection();
});

////////TABLE RESULTS
function drawTableRecords() {
    let elementTableResults = document.getElementById('tableResults');
    elementTableResults.innerHTML = '';
    let tableResults = new _model_TableResults_js__WEBPACK_IMPORTED_MODULE_4__["default"](ATtop5);
    elementTableResults.appendChild(tableResults.createTable());
}

function rangelimit(a, range) {
    return a > range ? range : a
}

function updateHealth() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            let full_width = document.getElementsByClassName('healthContainer')[0].offsetWidth;
            document.getElementById("monsterHealth").style.width = (full_width - (full_width / 3 * (rangelimit(cor_count, 3)))) + "px";
            document.getElementById("heroHealth").style.width = (full_width - (full_width / 3 * (rangelimit(wrong_count, 3)))) + "px";
            resolve();
        }, 500);
    });
}


function castSpell() {
    return new Promise((resolve, reject) => {
        if (wrong_count != last_wrong_count) {
            last_wrong_count = wrong_count;
            if (spell != MONSTER_SPELL) last_spell = spell;
            spell = MONSTER_SPELL;
        } else {
            spell = last_spell;
        }
        let elementCanvasForSpell = document.getElementById('canvasForSpell');
        let newSpell = new _view_DrawSpell__WEBPACK_IMPORTED_MODULE_1__["default"](elementCanvasForSpell, spell);
        sounds[spell - 1].play();
        resolve();

    });
}

function pushTop10(pcount) {
    let top_record =
        {
            atname: localStorage['firstNameInput'],
            atscore: pcount
        };
    ATtop5.push(top_record);
    ATtop5.sort(sortByScore);
    ATtop5 = ATtop5.slice(0, 5);
    localStorage['ATtop5'] = JSON.stringify(ATtop5);
}


function winnerGameOver(taskElement, renderTaskCallback) {
    castSpell()
        .then(updateHealth)
    if (cor_count + wrong_count == TOTAL_COUNT || cor_count == WIN_COUNT || wrong_count == WIN_COUNT) {
        if (cor_count > wrong_count) {
            toggleWinnerWindow(taskElement).then(() => {
                monster_count++;
            })
        }
        else {
            let elementGameOverWindow = document.getElementById('gameover-window');
            elementGameOverWindow.classList.toggle('hide');
            taskElement.classList.toggle('hide');
            pushTop10(monster_count);
            monster_count = 0;
            drawTableRecords();
        }
        cor_count = 0;
        wrong_count = 0;
        last_wrong_count = 0;
        last_spell = 1;
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
        updateHealth();
    }

    setTimeout(renderTaskCallback, 1000);
}


let ATtop5 = [];

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

function toggleWinnerWindow(task_element) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            let elementWinnerWindow = document.getElementById('winner-window');
            elementWinnerWindow.classList.toggle('hide');
            task_element.classList.toggle('hide');
            resolve()
        }, 2000)
    })
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
    drawmonster = new _view_DrawMonster__WEBPACK_IMPORTED_MODULE_0__["default"](canvas);

    /////DrawHero
    let canvasHero = document.getElementById('canvasForHero');
    drawHero = new _model_Hero_js__WEBPACK_IMPORTED_MODULE_2__["default"](canvasHero, showBattleWin);
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
        let theid = target.getAttribute('id');

        if (theid == 'taskMath') {
            let elementTaskMath = document.getElementById('window-taskMath');
            elementTaskMath.classList.toggle('hide');

            let elementModalWindowofTask = document.getElementById('window-spell');
            elementModalWindowofTask.classList.toggle('hide');
            spell = WATER_SPELL;
        }

        if (theid == 'taskWordsAudio') {

            let elementTaskMath = document.getElementById('window-taskWordsAudio');
            elementTaskMath.classList.toggle('hide');

            let elementModalWindowofTask = document.getElementById('window-spell');
            elementModalWindowofTask.classList.toggle('hide');
            spell = FIRE_SPELL;

        }

        if (theid == 'taskWordTranslate') {

            let elementTaskMath = document.getElementById('window-taskWordTranslate');
            elementTaskMath.classList.toggle('hide');

            let elementModalWindowofTask = document.getElementById('window-spell');
            elementModalWindowofTask.classList.toggle('hide');
            spell = SLIME_SPELL;

        }

        if (theid == 'taskLettersShuffle') {

            let elementTaskMath = document.getElementById('window-taskWordLettersShuffle');
            elementTaskMath.classList.toggle('hide');

            let elementModalWindowofTask = document.getElementById('window-spell');
            elementModalWindowofTask.classList.toggle('hide');
            spell = LIGHT_SPELL;

        }

        if (theid == 'taskRandomMathOperation') {

            let elementTaskMath = document.getElementById('window-taskMathRandomOperation');
            elementTaskMath.classList.toggle('hide');

            let elementModalWindowofTask = document.getElementById('window-spell');
            elementModalWindowofTask.classList.toggle('hide');
            spell = PLAZMA_SPELL;

        }

        if (theid == 'taskAnimalTasks') {

            let elementTaskMath = document.getElementById('window-taskAnimalTasks');
            elementTaskMath.classList.toggle('hide');

            let elementModalWindowofTask = document.getElementById('window-spell');
            elementModalWindowofTask.classList.toggle('hide');
            spell = WATER_SPELL;

        }
        if (theid == 'taskExtraWords') {

            let elementTaskMath = document.getElementById('window-taskExtraWords');
            elementTaskMath.classList.toggle('hide');

            let elementModalWindowofTask = document.getElementById('window-spell');
            elementModalWindowofTask.classList.toggle('hide');
            spell = FIRE_SPELL;

        }

        if (theid == 'taskNextNumber') {

            let elementTaskMath = document.getElementById('window-taskNextNumber');
            elementTaskMath.classList.toggle('hide');

            let elementModalWindowofTask = document.getElementById('window-spell');
            elementModalWindowofTask.classList.toggle('hide');
            spell = SLIME_SPELL;

        }
        if (theid == 'taskAntonym') {

            let elementTaskMath = document.getElementById('window-taskAntonym');
            elementTaskMath.classList.toggle('hide');

            let elementModalWindowofTask = document.getElementById('window-spell');
            elementModalWindowofTask.classList.toggle('hide');
            spell = LIGHT_SPELL;

        }
        if (theid == 'taskInputLetter') {

            let elementTaskMath = document.getElementById('window-taskInputLetter');
            elementTaskMath.classList.toggle('hide');

            let elementModalWindowofTask = document.getElementById('window-spell');
            elementModalWindowofTask.classList.toggle('hide');
            spell = PLAZMA_SPELL;

        }


        last_spell = spell;
    }

});


/////// btn ОТЛИЧНО


let ebtnNewGameWinner = document.getElementById('btnNewGameWinner');

ebtnNewGameWinner.addEventListener('click', newMonster);

let ebtnNewGameGameover = document.getElementById('btnNewGameGameover');

ebtnNewGameGameover.addEventListener('click', newMonster);


function newMonster(event) {


    if (event.target.getAttribute('id') == 'btnNewGameWinner') {

        let elementNewMonster = document.getElementById('winner-window');
        elementNewMonster.classList.toggle('hide');

    }

    if (event.target.getAttribute('id') == 'btnNewGameGameover') {


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

let newTaskLetterShuffle = new _model_TaskLettersShuffle_js__WEBPACK_IMPORTED_MODULE_5__["default"](null, taskLetterShuffle, _model_objWords_js__WEBPACK_IMPORTED_MODULE_3__["default"]);


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


    winnerGameOver(document.getElementById('window-taskWordLettersShuffle'), newTaskLetterShuffle.renderTask);


});

/////////////////////////////////controller TaskNumbers
let answer = document.querySelector('#answerNumber');
let task = document.querySelector('.task');
let correct = document.querySelector('.correct-ans');
let wrong = document.querySelector('.wrong-ans');

let newTaskNumber = new _model_TaskNumbers_js__WEBPACK_IMPORTED_MODULE_6__["default"](answer, task);

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

        winnerGameOver(document.getElementById('window-taskMath'), newTaskNumber.renderTask);

    }
});


////////////////////////////controllerRandomMathOperation
let answerRandomMathOperation = document.querySelector('#answerMathRandomOperation');
let taskRandomMathOperation = document.querySelector('.MathRandomOperation');
let correctRandomMathOperation = document.querySelector('#window-taskMathRandomOperation .correct-ans');
let wrongRandomMathOperation = document.querySelector('#window-taskMathRandomOperation .wrong-ans');


let newTaskRandomMathOperation = new _model_TaskRandomMathOperation_js__WEBPACK_IMPORTED_MODULE_7__["default"](answerRandomMathOperation, taskRandomMathOperation);


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


        winnerGameOver(document.getElementById('window-taskMathRandomOperation'), newTaskRandomMathOperation.renderTask);
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

let newTaskWordsAudio = new _model_TaskWordsAudio_js__WEBPACK_IMPORTED_MODULE_8__["default"](null, taskWordsAudio, _model_objWords_js__WEBPACK_IMPORTED_MODULE_3__["default"]);


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

        winnerGameOver(document.getElementById('window-taskWordsAudio'), newTaskWordsAudio.renderTask);
    }

});


/////////////////////////controller TaskWordTranslate


let answerWordTranslate = document.querySelector('#answerWordTranslate');
let taskWordTranslate = document.querySelector('.WordTranslate');
let correctWordTranslate = document.querySelector('#window-taskWordTranslate .correct-ans');
let wrongWordTranslate = document.querySelector('#window-taskWordTranslate .wrong-ans');

let newTaskWordTranslate = new _model_TaskWordTranslate_js__WEBPACK_IMPORTED_MODULE_9__["default"](answerWordTranslate, taskWordTranslate, _model_objWords_js__WEBPACK_IMPORTED_MODULE_3__["default"]);


answerWordTranslate.addEventListener('keypress', e => {
    if (e.code == 'Enter' && answerWordTranslate.value != '') {
        let answ = answerWordTranslate.value.toLowerCase();

        if (newTaskWordTranslate.answerWordTranslateArray.indexOf(answ) > -1) {
            newTaskWordTranslate.checker('true');
            cor_count++;
            correctWordTranslate.innerText = cor_count;
        } else {
            newTaskWordTranslate.checker('false');
            wrong_count++;
            wrongWordTranslate.innerText = wrong_count;
        }
        answerWordTranslate.value = '';

        winnerGameOver(document.getElementById('window-taskWordTranslate'), newTaskWordTranslate.renderTask);
    }
});

/////////////////////////controller TaskAnimalTasks


let answerAnimalTasks = document.querySelector('#answerTaskAnimalTasks');
let taskAnimalTasks = document.querySelector('.taskAnimalTasks');
let correctAnimalTasks = document.querySelector('#window-taskAnimalTasks .correct-ans');
let wrongAnimalTasks = document.querySelector('#window-taskAnimalTasks .wrong-ans');

let newTaskAnimalTasks = new _model_TaskAnimalTasks_js__WEBPACK_IMPORTED_MODULE_16__["default"](answerAnimalTasks, taskAnimalTasks, _model_objTasks_js__WEBPACK_IMPORTED_MODULE_11__["default"]);


answerAnimalTasks.addEventListener('keypress', e => {
    if (e.code == 'Enter' && answerAnimalTasks.value != '') {

        let answ = answerAnimalTasks.value.toLowerCase();

        if (answ == newTaskAnimalTasks.answerWordTasksAnimalString) {
            newTaskAnimalTasks.checker('true');
            cor_count++;
            correctAnimalTasks.innerText = cor_count;
        } else {
            newTaskAnimalTasks.checker('false');
            wrong_count++;
            wrongAnimalTasks.innerText = wrong_count;
        }
        answerAnimalTasks.value = '';

        winnerGameOver(document.getElementById('window-taskAnimalTasks'), newTaskAnimalTasks.renderTask);
    }

});

////////////////////////TaskExtraWords
let answerExtraWords = document.querySelector('#answerTaskExtraWords');
let taskExtraWords = document.querySelector('.taskExtraWords');
let correctExtraWords = document.querySelector('#window-taskExtraWords .correct-ans');
let wrongExtraWords = document.querySelector('#window-taskExtraWords .wrong-ans');

let newTaskExtraWords = new _model_TaskExtraWords_js__WEBPACK_IMPORTED_MODULE_10__["default"](answerExtraWords, taskExtraWords, _model_objExtraWords_js__WEBPACK_IMPORTED_MODULE_12__["default"]);


answerExtraWords.addEventListener('keypress', e => {
    if (e.code == 'Enter' && answerExtraWords.value != '') {

        let answ = answerExtraWords.value.toLowerCase();

        if (newTaskExtraWords.wordTaskExtraWordsArray.indexOf(answ) > -1) {
            newTaskExtraWords.checker('true');
            cor_count++;
            correctExtraWords.innerText = cor_count;
        } else {
            newTaskExtraWords.checker('false');
            wrong_count++;
            wrongExtraWords.innerText = wrong_count;
        }

        answerExtraWords.value = '';

        winnerGameOver(document.getElementById('window-taskExtraWords'), newTaskExtraWords.renderTask);
    }

});
////////////////////////TaskNextNumber

let answerNextNumber = document.querySelector('#answerTaskNextNumber');
let taskNextNumber = document.querySelector('.taskNextNumber');
let correctNextNumber = document.querySelector('#window-taskNextNumber .correct-ans');
let wrongNextNumber = document.querySelector('#window-taskNextNumber .wrong-ans');

let newTaskNextNumber = new _model_TaskExtraWords_js__WEBPACK_IMPORTED_MODULE_10__["default"](answerNextNumber, taskNextNumber, _model_objNextNumber_js__WEBPACK_IMPORTED_MODULE_13__["default"]);


answerNextNumber.addEventListener('keypress', e => {
    if (e.code == 'Enter' && answerNextNumber.value != '') {

        let answ = answerNextNumber.value.toLowerCase();

        if (answ == newTaskNextNumber.answerExtraWords) {
            newTaskNextNumber.checker('true');
            cor_count++;
            correctNextNumber.innerText = cor_count;
        } else {
            newTaskNextNumber.checker('false');
            wrong_count++;
            wrongNextNumber.innerText = wrong_count;
        }

        answerNextNumber.value = '';

        winnerGameOver(document.getElementById('window-taskNextNumber'), newTaskNextNumber.renderTask);
    }

});

////////////////////////TaskAntonym

let answerAntonym = document.querySelector('#answerTaskAntonym');
let taskAntonym = document.querySelector('.taskAntonym');
let correctAntonym = document.querySelector('#window-taskAntonym .correct-ans');
let wrongAntonym = document.querySelector('#window-taskAntonym .wrong-ans');

let newTaskAntonym = new _model_TaskExtraWords_js__WEBPACK_IMPORTED_MODULE_10__["default"](answerAntonym, taskAntonym, _model_objAntonym_js__WEBPACK_IMPORTED_MODULE_14__["default"]);


answerAntonym.addEventListener('keypress', e => {
    if (e.code == 'Enter' && answerAntonym.value != '') {

        let answ = answerAntonym.value.toLowerCase();

        if (answ == newTaskAntonym.answerExtraWords) {
            newTaskAntonym.checker('true');
            cor_count++;
            correctAntonym.innerText = cor_count;
        } else {
            newTaskAntonym.checker('false');
            wrong_count++;
            wrongAntonym.innerText = wrong_count;
        }

        answerAntonym.value = '';

        winnerGameOver(document.getElementById('window-taskAntonym'), newTaskAntonym.renderTask);
    }

});

////////////////////////TaskInputLetter

let answerInputLetter = document.querySelector('#answerTaskInputLetter');
let taskInputLetter = document.querySelector('.taskInputLetter');
let correctInputLetter = document.querySelector('#window-taskInputLetter .correct-ans');
let wrongInputLetter = document.querySelector('#window-taskInputLetter .wrong-ans');

let newTaskInputLetter = new _model_TaskExtraWords_js__WEBPACK_IMPORTED_MODULE_10__["default"](answerInputLetter, taskInputLetter, _model_objInputLetter_js__WEBPACK_IMPORTED_MODULE_15__["default"]);


answerInputLetter.addEventListener('keypress', e => {
    if (e.code == 'Enter' && answerInputLetter.value != '') {

        let answ = answerInputLetter.value.toLowerCase();

        if (answ == newTaskInputLetter.answerExtraWords) {
            newTaskInputLetter.checker('true');
            cor_count++;
            correctInputLetter.innerText = cor_count;
        } else {
            newTaskInputLetter.checker('false');
            wrong_count++;
            wrongInputLetter.innerText = wrong_count;
        }

        answerInputLetter.value = '';

        winnerGameOver(document.getElementById('window-taskInputLetter'), newTaskInputLetter.renderTask);
    }

});

/***/ }),

/***/ "./js/model/Hero.js":
/*!**************************!*\
  !*** ./js/model/Hero.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hero; });
class Hero {

    constructor(canvas, callback) {


        this.canvas = canvas;
        this.callback=callback;

        this.context = this.canvas.getContext("2d");

        this.pos = [0, 0];
        this.size = [40, 50];
        this.speed = 1;
        this.frames = [0, 1, 2, 3, 4, 5, 6, 7];
        this._index = 0;
        this.url = 'images/spriteFinn.png';
        this.dir = 'horizontal';
        this.once = false;

        this.heroSprite = new Image();
        this.heroSprite.src = "images/spriteFinn.png";

        this.render = this.render.bind(this);
        this.update = this.update.bind(this);


        let run = setInterval(() => {this.update(1);
        this.render(this.context);
        if (this._index>40)
        {
            clearInterval(run);
            callback();
        }},100 )



    }

initeHero () {

    this._index = 0;
    let run = setInterval(() => {this.update(1);
        this.render(this.context);
        if (this._index>40)
        {
            clearInterval(run);
            this.callback();
        }},100 )
}


    update(dt) {
        this._index += this.speed * dt;
    }


    render(ctx) {
        let frame;
        this.canvas.width = this.canvas.width;



        if (this.speed > 0) {
            let max = this.frames.length;
            let idx = Math.floor(this._index);
            frame = this.frames[idx % max];

            if (this.once && idx >= max) {
                this.done = true;
                return;
            }
        }
        else {
            frame = 0;
        }


        let x = this.pos[0];
        let y = this.pos[1];

        if (this.dir == 'vertical') {
            y += frame * this.size[1];
        }
        else {
            x += frame * this.size[0];
        }

     //   console.log(this.heroSprite);
        ctx.drawImage(this.heroSprite,
            x, y,
            this.size[0], this.size[1],
            10+this._index*10, 200,
            this.size[0]*3, this.size[1]*3);
    }




}


























/***/ }),

/***/ "./js/model/TableResults.js":
/*!**********************************!*\
  !*** ./js/model/TableResults.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TableResults; });
class TableResults {
    constructor(results) {
        this.results = results;
        this.table = this.createTable();

    }

    createTable() {
        let table = document.createElement('table');
        table.append(this.createHeader(), this.createBody());
        return table;
    }

    insertTable() {
        winnerResult.appendChild(this.table);
    }

    createHeader() {
        let tHead = document.createElement('thead');
        let headTr = document.createElement('tr');
        tHead.appendChild(headTr);
        for (let i = 0; i < 2; i++) {
            let headTh = document.createElement('th');
            headTr.append(headTh);
        }
        headTr.children[0].innerHTML = 'Имя героя';
        headTr.children[1].innerHTML = 'Сколько монстров ты победил';
        return tHead;
    }

    createBody() {
        let tBody = document.createElement('tbody');
        this.results = JSON.parse(localStorage['ATtop5']);
        for (let i = 0; i < 5; i++) {
            let bodyTr = document.createElement('tr');
            tBody.appendChild(bodyTr);
            for (let j = 0; j < 2; j++) {
                let bodyTd = document.createElement('td');
                bodyTr.appendChild(bodyTd);
            };


if (this.results[i]) {
    bodyTr.children[0].innerHTML = this.results[i].atname ? this.results[i].atname : "";
    bodyTr.children[1].innerHTML = this.results[i].atscore;
}

        }
        return tBody;
    }
}

/***/ }),

/***/ "./js/model/TaskAnimalTasks.js":
/*!*************************************!*\
  !*** ./js/model/TaskAnimalTasks.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TaskAnimalTasks; });
class TaskAnimalTasks {
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

        this.answerWordTasksAnimalString =  Object.keys(this.words)[Math.floor(Math.random() * (Object.keys(this.words).length))];  ////отгадка

        this.wordTasksAnimal = this.words[this.answerWordTasksAnimalString];  ////текст загадки

        this.task.innerText=this.wordTasksAnimal;


    }

}

/***/ }),

/***/ "./js/model/TaskExtraWords.js":
/*!************************************!*\
  !*** ./js/model/TaskExtraWords.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TaskExtraWords; });
class TaskExtraWords {
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

/***/ }),

/***/ "./js/model/TaskLettersShuffle.js":
/*!****************************************!*\
  !*** ./js/model/TaskLettersShuffle.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TaskLettersShuffle; });
class TaskLettersShuffle {
    constructor(answerfield,task,words) {

        this.answerfield=answerfield;
        this.task=task;
        this.words=words;
        this.renderTask = this.renderTask.bind(this);

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

/***/ }),

/***/ "./js/model/TaskNumbers.js":
/*!*********************************!*\
  !*** ./js/model/TaskNumbers.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TaskNumbers; });
class TaskNumbers {
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

/***/ }),

/***/ "./js/model/TaskRandomMathOperation.js":
/*!*********************************************!*\
  !*** ./js/model/TaskRandomMathOperation.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TaskRandomMathOperation; });
class TaskRandomMathOperation {
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

/***/ }),

/***/ "./js/model/TaskWordTranslate.js":
/*!***************************************!*\
  !*** ./js/model/TaskWordTranslate.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TaskWordTranslate; });
class TaskWordTranslate {
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
        this.answerfield.value = '';

        this.wordTranslate = Object.keys(this.words)[Math.floor(Math.random() * (Object.keys(this.words).length))];  // random word from array

        this.answerWordTranslateArray = this.words[this.wordTranslate];
        this.task.innerText=this.wordTranslate;

    }

}

/***/ }),

/***/ "./js/model/TaskWordsAudio.js":
/*!************************************!*\
  !*** ./js/model/TaskWordsAudio.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TaskWordsAudio; });
class TaskWordsAudio {
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

/***/ }),

/***/ "./js/model/objAntonym.js":
/*!********************************!*\
  !*** ./js/model/objAntonym.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let objAntonym = {
    "черный": ['белый'],
    "холодный": ['горячий'],
    "тяжелый": ['легкий'],
    "тянуть": ['толкать'],
    "низкий": ['высокий'],
    "худой": ['толстый'],
    "узкий": ['широкий'],
    "глупый": ['умный'],
    "ясный": ['пасмурный'],
    "ночь": ['день'],
    "грустный": ['веселый']

};
/* harmony default export */ __webpack_exports__["default"] = (objAntonym);

/***/ }),

/***/ "./js/model/objExtraWords.js":
/*!***********************************!*\
  !*** ./js/model/objExtraWords.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let objExtraWords = {
    "красный": ['еж', 'корова', 'заяц', 'красный', 'слон'],
    "бабочка": ['поезд', 'самолет', 'вертолет', 'машина', 'бабочка'],
    "овал": ['дом', 'овал', 'дворец', 'гараж', 'сарай'],
    "стрекоза": ['стрекоза', 'окунь', 'карп', 'щука', 'лещ'],
    "дерево": ['тюльпан', 'дерево', 'ромашка', 'василек', 'колокольчик'],
    "квадрат": ['кошка', 'собака', 'квадрат', 'лошадь', 'корова'],
    "вторник": ['май', 'вторник', 'июль', 'январь', 'сентябрь'],
    "май": ['вторник', 'среда', 'воскресенье', 'понедельник', 'май'],
    "зима": ['май', 'зима', 'октябрь', 'апрель', 'август'],
    "шар": ['круг', 'овал', 'треугольник', 'квадрат', 'шар'],
    "книга": ['стол', 'стул', 'книга', 'кровать', 'шкаф']

};
/* harmony default export */ __webpack_exports__["default"] = (objExtraWords);

/***/ }),

/***/ "./js/model/objInputLetter.js":
/*!************************************!*\
  !*** ./js/model/objInputLetter.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let objInputLetter = {
    "и": ['ш...шка'],
    "о": ['г...рячий'],
    "д": ['ле...'],
    "в": ['тра...ка'],
    "ф": ['шар...'],
    "а": ['к...рандаш'],
    "з": ['у...кий'],
    "б": ['ду...'],
    "г": ['сне...'],
    "ь": ['ноч...'],
    "ы": ['ц...пленок']

};
/* harmony default export */ __webpack_exports__["default"] = (objInputLetter);

/***/ }),

/***/ "./js/model/objNextNumber.js":
/*!***********************************!*\
  !*** ./js/model/objNextNumber.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let objNextNumber = {
    "11": ['1', '3', '5', '7', '9'],
    "5": ['10', '9', '8', '7', '6'],
    "12": ['2', '4', '6', '8', '10'],
    "-10": ['0', '-2', '-4', '-6', '-8'],
    "243": ['1', '3', '9', '27', '81'],
    "2": ['1', '2', '1', '2', '1'],
    "3": ['27', '20', '7', '13', '10'],
    "111111": ['1', '11', '111', '1111', '11111'],
    "8": ['2', '3', '5', '3', '5'],
    "14": ['1', '2', '7', '8', '13'],
    "7": ['1', '2', '3', '5', '6']

};
/* harmony default export */ __webpack_exports__["default"] = (objNextNumber);

/***/ }),

/***/ "./js/model/objTasks.js":
/*!******************************!*\
  !*** ./js/model/objTasks.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let objTasks = {
    "дикобраз": 'Ёжик вырос в десять раз, получился …',
    "ежик": 'В клубок свернётся, а взять не даётся.',
    "бегемот": 'У него огромный рот, щн зовется …',
    "белка": 'По деревьям скок-скок, а орешки щёлк-щёлк.',
    "верблюд": 'Зверь я горбатый, а нравлюсь ребятам',
    "ежик": 'Ползун ползёт, иголки везёт.',
    "ежик": 'Под соснами, под ёлками лежит мешок с иголками.',
    "жираф": 'Какое животное очень красивое, самое высокое, самое длинное?',
    "зебра": 'Надели коняшки морские рубашки.',
    "корова": 'Сама пестрая, ест зеленое, дает белое',
    "кот": 'Выгнул спинку он дугой, замяукал. Кто такой?',
    "крокодил": 'По реке плывёт бревно ох и злющее оно!',
    "крокодил": 'В реках Африки живёт злой зелёный пароход!',
    "лиса": 'У кого из зверей хвост пушистей и длинней?',
    "медведь": 'Летом по лесу гуляет, зимой в берлоге отдыхает.',
    "мышка":'Маленький рост, длинный хвост, серая шубка, острые зубки'


};
/* harmony default export */ __webpack_exports__["default"] = (objTasks);

/***/ }),

/***/ "./js/model/objWords.js":
/*!******************************!*\
  !*** ./js/model/objWords.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let objWords = {
    "cat": ['кот', 'кошка'],
    "dog": ['пес', 'собака'],
    "milk": ['молоко', 'молочный'],
    "flat": ['квартира', 'плоский'],
    "house": ['дом', 'здание'],
    "bag": ['мешок', 'сумка'],
    "leg": ['нога', 'ножка'],
    "red": ['красный', 'рыжий'],
    "rat": ['крыса', 'предатель'],
    "bread": ['хлеб', 'пища'],
    "morning": ['утро', 'начало'],
    "white": ['белый', 'прозрачный'],
    "wheel": ['колесо', 'круг'],
    "whale": ['кит', 'масса'],
    "love": ['любовь', 'дорогая'],
    "hotel": ['отель', 'гостиница'],
    "smile": ['улыбка', 'улыбаться'],
    "beach": ['пляж', 'отмель'],
    "nose": ['нос', 'аромат'],
    "arm": ['рука', 'рычаг'],
    "end": ['конец', 'окончание'],
    "begin": ['начинать', 'завязать'],
    "bus": ['автобус', 'шины'],
    "car": ['машина', 'автомобиль'],
    "train": ['поезд', 'состав'],
    "sky": ['небо', 'небеса']



};
/* harmony default export */ __webpack_exports__["default"] = (objWords);

/***/ }),

/***/ "./js/view/DrawMonster.js":
/*!********************************!*\
  !*** ./js/view/DrawMonster.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DrawMonster; });
class DrawMonster {

    constructor(canvas) {


        this.health = 100;

        this.redraw = this.redraw.bind(this);
        this.updateBlink = this.updateBlink.bind(this);
        this.updateBreath = this.updateBreath.bind(this);
        this.blink = this.blink.bind(this);
        this.drawEllipse = this.drawEllipse.bind(this);

        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");

        this.images = {};
        this.totalResources = 6;
        this.numResourcesLoaded = 0;
        this.fps = 30;
        this.charX = 10;
        this.charY = 100;
        this.x = this.charX;
        this.y = this.charY;
        this.breathInc = 0.1;
        this.breathDir = 1;
        this.breathAmt = 0;
        this.breathMax = 2;
        this.breathInterval = setInterval(this.updateBreath, 1000 / this.fps);
        this.maxEyeHeight = 14;
        this.curEyeHeight = this.maxEyeHeight;
        this.eyeOpenTime = 0;
        this.timeBtwBlinks = 4000;
        this.blinkUpdateTime = 200;

        this.blinkTimer = setInterval(this.updateBlink, this.blinkUpdateTime);

        this.initMonster ();


    }




    initMonster () {

        this.createName();
        this.face = this.randomInteger(1, 4);
        this.torso = this.randomInteger(1, 4);
        this.leftArm = this.randomInteger(1, 4);
        this.rightArm = this.randomInteger(1, 4);
        this.legs = this.randomInteger(1, 4);
        this.weapon = this.randomInteger(1, 4);
        this.loadImage("larm" + this.leftArm);
        this.loadImage("legs" + this.legs);
        this.loadImage("torso" + this.torso);
        this.loadImage("rarm" + this.rightArm);
        this.loadImage("face" + this.face);
        this.loadImage("weapon" + this.weapon);
    }


    randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    }

    createName() {
        let firstNameMonster = ['Большой', 'Круглый', 'Огромный', 'Злобный', 'Абыкакой'],
            secondNameMonster = ['Липкий', 'Мятный', 'Вкусный', 'Ледяной', 'Ментоловый'],
            thirdNameMonster = ['Дворецкий', 'Карачун', 'Бурзун', 'Ликвач', 'Мордач'];

        this.monsterName = firstNameMonster[this.randomInteger(0, 4)] + ' ' + secondNameMonster[this.randomInteger(0, 4)] + ' ' + thirdNameMonster[this.randomInteger(0, 4)];

        let elementMonsterName = document.getElementById('hMonsterName');

        elementMonsterName.innerText=this.monsterName;



    }




    loadImage(name) {

        this.images[name] = new Image();

        this.images[name].onload =  ()=> {
            this.resourceLoaded();
        };

        this.images[name].src = "images/monster/" + name + ".png";

    }

    resourceLoaded() {
     let obj=this;
            this.numResourcesLoaded += 1;
            if (this.numResourcesLoaded === this.totalResources) {
                setInterval(this.redraw, 1000 / this.fps);
            }
        }



    redraw() {

        canvasForMonster.width = canvasForMonster.width;

        this.context.drawImage(this.images["larm" + this.leftArm], this.x + 0, this.y - 42 - this.breathAmt);
        this.context.drawImage(this.images["legs" + this.legs], this.x, this.y-60);
        this.context.drawImage(this.images["torso" + this.torso], this.x, this.y - 50);
        this.context.drawImage(this.images["face" + this.face], this.x - 10, this.y - 70 - this.breathAmt);
        this.context.drawImage(this.images["weapon" + this.weapon], this.x - 0, this.y - 50 - this.breathAmt);
        this.context.drawImage(this.images["rarm" + this.rightArm], this.x + 10, this.y - 42 - this.breathAmt);

        this.drawEllipse(this.x + 110, this.y + 75 - this.breathAmt, 8, this.curEyeHeight);
        this.drawEllipse(this.x + 199, this.y + 75 - this.breathAmt, 8, this.curEyeHeight);




    }


    drawEllipse(centerX, centerY, width, height) {

        this.context.beginPath();

        this.context.moveTo(centerX, centerY - height / 2);

        this.context.bezierCurveTo(
            centerX + width / 2, centerY - height / 2,
            centerX + width / 2, centerY + height / 2,
            centerX, centerY + height / 2);

        this.context.bezierCurveTo(
            centerX - width / 2, centerY + height / 2,
            centerX - width / 2, centerY - height / 2,
            centerX, centerY - height / 2);

        this.context.fillStyle = "black";
        this.context.fill();
        this.context.closePath();
    }


    updateBreath() {


        if (this.breathDir === 1) {  // breath in
            this.breathAmt -= this.breathInc;
            if (this.breathAmt < -this.breathMax) {
                this.breathDir = -1;
            }
        } else {  // breath out
            this.breathAmt += this.breathInc;
            if (this.breathAmt > this.breathMax) {
                this.breathDir = 1;
            }
        }
    }


    updateBlink() {


        this.eyeOpenTime += this.blinkUpdateTime;

        if (this.eyeOpenTime >= this.timeBtwBlinks) {

            this.blink();
        }
    }

    blink() {


        this.curEyeHeight -= 1;
        if (this.curEyeHeight <= 0) {
            this.eyeOpenTime = 0;
            this.curEyeHeight = this.maxEyeHeight;
        } else {
            setTimeout(this.blink, 10);
        }
    }
}


/***/ }),

/***/ "./js/view/DrawSpell.js":
/*!******************************!*\
  !*** ./js/view/DrawSpell.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DrawSpell; });
class DrawSpell {

    constructor(canvas,spelltype=1) {


        this.canvas = canvas;


        this.context = this.canvas.getContext("2d");
        this.pos = [0, 0];
        this.start_pos=10;
        this.size = [420, 266];
        this.speed = 1;
        this.frames = [0, 0,1, 2, 3, 4];
        this._index = 0;
        this.dir = 'horizontal';
        this.once = true;

        this.spellSprite = new Image();
        this.spellSprite.src = "images/waterBallsprite.png";
        if (spelltype==2) this.spellSprite.src = "images/fireBallsprite.png";
        if (spelltype==3) this.spellSprite.src = "images/slimeBallsprite.png";
        if (spelltype==4) this.spellSprite.src = "images/lightningBallsprite.png";
        if (spelltype==5) this.spellSprite.src = "images/plazmaBallsprite.png";

        if (spelltype==6) {
            this.spellSprite.src = "images/monsterspell.png";
            this.start_pos = 400;
            this._index = 5;
            this.speed = -1;
        }


        this.render = this.render.bind(this);
        this.update = this.update.bind(this);
        this.context.scale(-1,1);


        let run = setInterval(() => {this.update(1);
            this.render(this.context);
            if (Math.abs(this._index)>5)
            {
                clearInterval(run);

            }},100 )

    }

    update(dt) {
        this._index += this.speed * dt;
    }


    render(ctx) {
        let frame;
       this.canvas.width = this.canvas.width;

            let max = this.frames.length;
            let idx = Math.abs(Math.floor(this._index));
            frame = this.frames[idx % max];

            if (this.once && idx >= max) {
                this.done = true;
                return;
            }

        let x = this.pos[0];
        let y = this.pos[1];

        if (this.dir == 'vertical') {
            y += frame * this.size[1];
        }
        else {
            x += frame * this.size[0];
        }

        ctx.drawImage(this.spellSprite,
            x, y,
            this.size[0], this.size[1],
            this.start_pos+this._index*100-100, 200,
            this.size[0]/2, this.size[1]/2);

    }



}













/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9tb2RlbC9IZXJvLmpzIiwid2VicGFjazovLy8uL2pzL21vZGVsL1RhYmxlUmVzdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9tb2RlbC9UYXNrQW5pbWFsVGFza3MuanMiLCJ3ZWJwYWNrOi8vLy4vanMvbW9kZWwvVGFza0V4dHJhV29yZHMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvbW9kZWwvVGFza0xldHRlcnNTaHVmZmxlLmpzIiwid2VicGFjazovLy8uL2pzL21vZGVsL1Rhc2tOdW1iZXJzLmpzIiwid2VicGFjazovLy8uL2pzL21vZGVsL1Rhc2tSYW5kb21NYXRoT3BlcmF0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL21vZGVsL1Rhc2tXb3JkVHJhbnNsYXRlLmpzIiwid2VicGFjazovLy8uL2pzL21vZGVsL1Rhc2tXb3Jkc0F1ZGlvLmpzIiwid2VicGFjazovLy8uL2pzL21vZGVsL29iakFudG9ueW0uanMiLCJ3ZWJwYWNrOi8vLy4vanMvbW9kZWwvb2JqRXh0cmFXb3Jkcy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9tb2RlbC9vYmpJbnB1dExldHRlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9tb2RlbC9vYmpOZXh0TnVtYmVyLmpzIiwid2VicGFjazovLy8uL2pzL21vZGVsL29ialRhc2tzLmpzIiwid2VicGFjazovLy8uL2pzL21vZGVsL29ialdvcmRzLmpzIiwid2VicGFjazovLy8uL2pzL3ZpZXcvRHJhd01vbnN0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdmlldy9EcmF3U3BlbGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBLENBQUM7OztBQUdEOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLENBQUM7OztBQUdEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7QUMzdUJEOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7Ozs7QUFJVjs7QUFFQTs7QUFFQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEM7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGtJQUFrSTs7QUFFbEksNEVBQTRFOztBQUU1RTs7O0FBR0E7O0FBRUEsQzs7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSx1SEFBdUg7O0FBRXZILHlFQUF5RTs7QUFFekU7O0FBRUE7O0FBRUEsQzs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCLE9BQU87QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsaUhBQWlIO0FBQ2pIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQTs7QUFFQSxDOzs7Ozs7Ozs7Ozs7OztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFVBQVUsS0FBSyxVQUFVO0FBQ25EO0FBQ0E7O0FBRUEsQzs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGNBQWM7QUFDaEQsU0FBUztBQUNUO0FBQ0Esa0NBQWtDLGNBQWM7QUFDaEQsU0FBUztBQUNUO0FBQ0E7QUFDQSxrQ0FBa0MsY0FBYztBQUNoRCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGtDQUFrQyxjQUFjO0FBQ2hEO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsQzs7Ozs7Ozs7Ozs7Ozs7QUN6REE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxtSEFBbUg7O0FBRW5IO0FBQ0E7O0FBRUE7O0FBRUEsQzs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxDOzs7Ozs7Ozs7Ozs7QUMzQkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyRTs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RTs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrRTs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4RTs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLHlFOzs7Ozs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBLHlFOzs7Ozs7Ozs7Ozs7OztBQy9CQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7Ozs7O0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7OztBQUlBOzs7OztBQUtBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7OztBQUtBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsT0FBTztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5TEE7O0FBRUE7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYzs7QUFFZDs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBIiwiZmlsZSI6Ii4vcmVsZWFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL21haW4uanNcIik7XG4iLCJpbXBvcnQgRHJhd01vbnN0ZXIgZnJvbSAnLi92aWV3L0RyYXdNb25zdGVyJztcclxuaW1wb3J0IERyYXdTcGVsbCBmcm9tICcuL3ZpZXcvRHJhd1NwZWxsJztcclxuaW1wb3J0IEhlcm8gZnJvbSAnLi9tb2RlbC9IZXJvLmpzJztcclxuaW1wb3J0IG9ialdvcmRzIGZyb20gJy4vbW9kZWwvb2JqV29yZHMuanMnO1xyXG5pbXBvcnQgVGFibGVSZXN1bHRzIGZyb20gJy4vbW9kZWwvVGFibGVSZXN1bHRzLmpzJztcclxuaW1wb3J0IFRhc2tMZXR0ZXJzU2h1ZmZsZSBmcm9tICcuL21vZGVsL1Rhc2tMZXR0ZXJzU2h1ZmZsZS5qcyc7XHJcbmltcG9ydCBUYXNrTnVtYmVycyBmcm9tICcuL21vZGVsL1Rhc2tOdW1iZXJzLmpzJztcclxuaW1wb3J0IFRhc2tSYW5kb21NYXRoT3BlcmF0aW9uIGZyb20gJy4vbW9kZWwvVGFza1JhbmRvbU1hdGhPcGVyYXRpb24uanMnO1xyXG5pbXBvcnQgVGFza1dvcmRzQXVkaW8gZnJvbSAnLi9tb2RlbC9UYXNrV29yZHNBdWRpby5qcyc7XHJcbmltcG9ydCBUYXNrV29yZFRyYW5zbGF0ZSBmcm9tICcuL21vZGVsL1Rhc2tXb3JkVHJhbnNsYXRlLmpzJztcclxuaW1wb3J0IFRhc2tFeHRyYVdvcmRzIGZyb20gJy4vbW9kZWwvVGFza0V4dHJhV29yZHMuanMnO1xyXG5pbXBvcnQgb2JqVGFza3MgZnJvbSBcIi4vbW9kZWwvb2JqVGFza3MuanNcIjtcclxuaW1wb3J0IG9iakV4dHJhV29yZHMgZnJvbSBcIi4vbW9kZWwvb2JqRXh0cmFXb3Jkcy5qc1wiO1xyXG5cclxuaW1wb3J0IG9iak5leHROdW1iZXIgZnJvbSBcIi4vbW9kZWwvb2JqTmV4dE51bWJlci5qc1wiO1xyXG5pbXBvcnQgb2JqQW50b255bSBmcm9tIFwiLi9tb2RlbC9vYmpBbnRvbnltLmpzXCI7XHJcblxyXG5pbXBvcnQgb2JqSW5wdXRMZXR0ZXIgZnJvbSBcIi4vbW9kZWwvb2JqSW5wdXRMZXR0ZXIuanNcIjtcclxuaW1wb3J0IFRhc2tBbmltYWxUYXNrcyBmcm9tICcuL21vZGVsL1Rhc2tBbmltYWxUYXNrcy5qcyc7XHJcblxyXG5cclxuLy8vLy8vLy8vL0NPTlNUQU5UU1xyXG5cclxuY29uc3QgV0FURVJfU1BFTEwgPSAxO1xyXG5jb25zdCBGSVJFX1NQRUxMID0gMjtcclxuY29uc3QgU0xJTUVfU1BFTEwgPSAzO1xyXG5jb25zdCBMSUdIVF9TUEVMTCA9IDQ7XHJcbmNvbnN0IFBMQVpNQV9TUEVMTCA9IDU7XHJcbmNvbnN0IE1PTlNURVJfU1BFTEwgPSA2O1xyXG5jb25zdCBUT1RBTF9DT1VOVCA9IDU7XHJcbmNvbnN0IFdJTl9DT1VOVCA9IDM7XHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vL3dpbmRvdyB3aXRoIGlucHV0IGRhdGFcclxuXHJcbmxldCBkcmF3bW9uc3RlciwgZHJhd0hlcm8sIHJlc3VsdCwgY29yX2NvdW50ID0gMCwgd3JvbmdfY291bnQgPSAwLCBtb25zdGVyX2NvdW50ID0gMCwgc3BlbGwgPSAxLCBsYXN0X3dyb25nX2NvdW50ID0gMCxcclxuICAgIGxhc3Rfc3BlbGwgPSAxO1xyXG5cclxubGV0IHNvdW5kcyA9IFtuZXcgQXVkaW8oJ3NvdW5kcy9zcGVsbDEud2F2JyksIG5ldyBBdWRpbygnc291bmRzL3NwZWxsMi53YXYnKSwgbmV3IEF1ZGlvKCdzb3VuZHMvc3BlbGwzLndhdicpLCBuZXcgQXVkaW8oJ3NvdW5kcy9zcGVsbDQud2F2JyksIG5ldyBBdWRpbygnc291bmRzL3NwZWxsNS53YXYnKSwgbmV3IEF1ZGlvKCdzb3VuZHMvc3BlbGw2LndhdicpXTtcclxuXHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIjc29ydGFibGVcIikuc29ydGFibGUoKTtcclxuICAgICQoXCIjc29ydGFibGVcIikuZGlzYWJsZVNlbGVjdGlvbigpO1xyXG59KTtcclxuXHJcbi8vLy8vLy8vVEFCTEUgUkVTVUxUU1xyXG5mdW5jdGlvbiBkcmF3VGFibGVSZWNvcmRzKCkge1xyXG4gICAgbGV0IGVsZW1lbnRUYWJsZVJlc3VsdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFibGVSZXN1bHRzJyk7XHJcbiAgICBlbGVtZW50VGFibGVSZXN1bHRzLmlubmVySFRNTCA9ICcnO1xyXG4gICAgbGV0IHRhYmxlUmVzdWx0cyA9IG5ldyBUYWJsZVJlc3VsdHMoQVR0b3A1KTtcclxuICAgIGVsZW1lbnRUYWJsZVJlc3VsdHMuYXBwZW5kQ2hpbGQodGFibGVSZXN1bHRzLmNyZWF0ZVRhYmxlKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByYW5nZWxpbWl0KGEsIHJhbmdlKSB7XHJcbiAgICByZXR1cm4gYSA+IHJhbmdlID8gcmFuZ2UgOiBhXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUhlYWx0aCgpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBmdWxsX3dpZHRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhbHRoQ29udGFpbmVyJylbMF0ub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9uc3RlckhlYWx0aFwiKS5zdHlsZS53aWR0aCA9IChmdWxsX3dpZHRoIC0gKGZ1bGxfd2lkdGggLyAzICogKHJhbmdlbGltaXQoY29yX2NvdW50LCAzKSkpKSArIFwicHhcIjtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZXJvSGVhbHRoXCIpLnN0eWxlLndpZHRoID0gKGZ1bGxfd2lkdGggLSAoZnVsbF93aWR0aCAvIDMgKiAocmFuZ2VsaW1pdCh3cm9uZ19jb3VudCwgMykpKSkgKyBcInB4XCI7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9LCA1MDApO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjYXN0U3BlbGwoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGlmICh3cm9uZ19jb3VudCAhPSBsYXN0X3dyb25nX2NvdW50KSB7XHJcbiAgICAgICAgICAgIGxhc3Rfd3JvbmdfY291bnQgPSB3cm9uZ19jb3VudDtcclxuICAgICAgICAgICAgaWYgKHNwZWxsICE9IE1PTlNURVJfU1BFTEwpIGxhc3Rfc3BlbGwgPSBzcGVsbDtcclxuICAgICAgICAgICAgc3BlbGwgPSBNT05TVEVSX1NQRUxMO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNwZWxsID0gbGFzdF9zcGVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGVsZW1lbnRDYW52YXNGb3JTcGVsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXNGb3JTcGVsbCcpO1xyXG4gICAgICAgIGxldCBuZXdTcGVsbCA9IG5ldyBEcmF3U3BlbGwoZWxlbWVudENhbnZhc0ZvclNwZWxsLCBzcGVsbCk7XHJcbiAgICAgICAgc291bmRzW3NwZWxsIC0gMV0ucGxheSgpO1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHVzaFRvcDEwKHBjb3VudCkge1xyXG4gICAgbGV0IHRvcF9yZWNvcmQgPVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYXRuYW1lOiBsb2NhbFN0b3JhZ2VbJ2ZpcnN0TmFtZUlucHV0J10sXHJcbiAgICAgICAgICAgIGF0c2NvcmU6IHBjb3VudFxyXG4gICAgICAgIH07XHJcbiAgICBBVHRvcDUucHVzaCh0b3BfcmVjb3JkKTtcclxuICAgIEFUdG9wNS5zb3J0KHNvcnRCeVNjb3JlKTtcclxuICAgIEFUdG9wNSA9IEFUdG9wNS5zbGljZSgwLCA1KTtcclxuICAgIGxvY2FsU3RvcmFnZVsnQVR0b3A1J10gPSBKU09OLnN0cmluZ2lmeShBVHRvcDUpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gd2lubmVyR2FtZU92ZXIodGFza0VsZW1lbnQsIHJlbmRlclRhc2tDYWxsYmFjaykge1xyXG4gICAgY2FzdFNwZWxsKClcclxuICAgICAgICAudGhlbih1cGRhdGVIZWFsdGgpXHJcbiAgICBpZiAoY29yX2NvdW50ICsgd3JvbmdfY291bnQgPT0gVE9UQUxfQ09VTlQgfHwgY29yX2NvdW50ID09IFdJTl9DT1VOVCB8fCB3cm9uZ19jb3VudCA9PSBXSU5fQ09VTlQpIHtcclxuICAgICAgICBpZiAoY29yX2NvdW50ID4gd3JvbmdfY291bnQpIHtcclxuICAgICAgICAgICAgdG9nZ2xlV2lubmVyV2luZG93KHRhc2tFbGVtZW50KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIG1vbnN0ZXJfY291bnQrKztcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50R2FtZU92ZXJXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZW92ZXItd2luZG93Jyk7XHJcbiAgICAgICAgICAgIGVsZW1lbnRHYW1lT3ZlcldpbmRvdy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIHRhc2tFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuICAgICAgICAgICAgcHVzaFRvcDEwKG1vbnN0ZXJfY291bnQpO1xyXG4gICAgICAgICAgICBtb25zdGVyX2NvdW50ID0gMDtcclxuICAgICAgICAgICAgZHJhd1RhYmxlUmVjb3JkcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb3JfY291bnQgPSAwO1xyXG4gICAgICAgIHdyb25nX2NvdW50ID0gMDtcclxuICAgICAgICBsYXN0X3dyb25nX2NvdW50ID0gMDtcclxuICAgICAgICBsYXN0X3NwZWxsID0gMTtcclxuICAgICAgICBjb3JyZWN0V29yZFRyYW5zbGF0ZS5pbm5lclRleHQgPSAnMCc7XHJcbiAgICAgICAgd3JvbmdXb3JkVHJhbnNsYXRlLmlubmVyVGV4dCA9ICcwJztcclxuICAgICAgICB3cm9uZy5pbm5lclRleHQgPSAnMCc7XHJcbiAgICAgICAgY29ycmVjdC5pbm5lclRleHQgPSAnMCc7XHJcbiAgICAgICAgd3JvbmdSYW5kb21NYXRoT3BlcmF0aW9uLmlubmVyVGV4dCA9ICcwJztcclxuICAgICAgICBjb3JyZWN0UmFuZG9tTWF0aE9wZXJhdGlvbi5pbm5lclRleHQgPSAnMCc7XHJcbiAgICAgICAgY29ycmVjdFdvcmRzQXVkaW8uaW5uZXJUZXh0ID0gJzAnO1xyXG4gICAgICAgIHdyb25nV29yZHNBdWRpby5pbm5lclRleHQgPSAnMCc7XHJcbiAgICAgICAgd3JvbmdMZXR0ZXJTaHVmZmxlLmlubmVyVGV4dCA9ICcwJztcclxuICAgICAgICBjb3JyZWN0TGV0dGVyU2h1ZmZsZS5pbm5lclRleHQgPSAnMCc7XHJcbiAgICAgICAgY29ycmVjdEFuaW1hbFRhc2tzLmlubmVyVGV4dCA9ICcwJztcclxuICAgICAgICB3cm9uZ0FuaW1hbFRhc2tzLmlubmVyVGV4dCA9ICcwJztcclxuICAgICAgICBjb3JyZWN0RXh0cmFXb3Jkcy5pbm5lclRleHQgPSAnMCc7XHJcbiAgICAgICAgd3JvbmdFeHRyYVdvcmRzLmlubmVyVGV4dCA9ICcwJztcclxuICAgICAgICBjb3JyZWN0TmV4dE51bWJlci5pbm5lclRleHQgPSAnMCc7XHJcbiAgICAgICAgd3JvbmdOZXh0TnVtYmVyLmlubmVyVGV4dCA9ICcwJztcclxuICAgICAgICBjb3JyZWN0QW50b255bS5pbm5lclRleHQgPSAnMCc7XHJcbiAgICAgICAgd3JvbmdBbnRvbnltLmlubmVyVGV4dCA9ICcwJztcclxuICAgICAgICBjb3JyZWN0SW5wdXRMZXR0ZXIuaW5uZXJUZXh0ID0gJzAnO1xyXG4gICAgICAgIHdyb25nSW5wdXRMZXR0ZXIuaW5uZXJUZXh0ID0gJzAnO1xyXG4gICAgICAgIHVwZGF0ZUhlYWx0aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRpbWVvdXQocmVuZGVyVGFza0NhbGxiYWNrLCAxMDAwKTtcclxufVxyXG5cclxuXHJcbmxldCBBVHRvcDUgPSBbXTtcclxuXHJcbmlmICh0eXBlb2YgbG9jYWxTdG9yYWdlWydBVHRvcDUnXSA9PSBcInVuZGVmaW5lZFwiKSBsb2NhbFN0b3JhZ2VbJ0FUdG9wNSddID0gSlNPTi5zdHJpbmdpZnkoQVR0b3A1KTtcclxuXHJcbkFUdG9wNSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlWydBVHRvcDUnXSk7XHJcblxyXG5mdW5jdGlvbiBzb3J0QnlTY29yZShhLCBiKSB7XHJcbiAgICByZXR1cm4gYS5hdHNjb3JlIDwgYi5hdHNjb3JlID8gMSA6IC0xO1xyXG59XHJcblxyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiI3NvcnRhYmxlXCIpLnNvcnRhYmxlKCk7XHJcbiAgICAkKFwiI3NvcnRhYmxlXCIpLmRpc2FibGVTZWxlY3Rpb24oKTtcclxufSk7XHJcblxyXG5cclxubGV0IGJ1dHRvbk5leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuTmV4dCcpO1xyXG5idXR0b25OZXh0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydFRvSW5wdXREYXRhKTtcclxuXHJcblxyXG5mdW5jdGlvbiBzdGFydFRvSW5wdXREYXRhKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRvZ2dsZVdpbmRvd0hpc3RvcnlPZkdhbWVFdmVudHMoKTtcclxuICAgIHRvZ2dsZVdpbmRvd0lucHV0RGF0YSgpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlV2luZG93SGlzdG9yeU9mR2FtZUV2ZW50cygpIHtcclxuICAgIGxldCBlbGVtZW50SGlzdG9yeU9mR2FtZUV2ZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoaXN0b3J5T2ZHYW1lRXZlbnRzJyk7XHJcbiAgICBlbGVtZW50SGlzdG9yeU9mR2FtZUV2ZW50cy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZVdpbmRvd0lucHV0RGF0YSgpIHtcclxuICAgIGxldCBlbGVtZW50V2luZG93RGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcHRpb25zLWZvcm0nKTtcclxuICAgIGVsZW1lbnRXaW5kb3dEYXRhLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlV2lubmVyV2luZG93KHRhc2tfZWxlbWVudCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnRXaW5uZXJXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lubmVyLXdpbmRvdycpO1xyXG4gICAgICAgICAgICBlbGVtZW50V2lubmVyV2luZG93LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuICAgICAgICAgICAgdGFza19lbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpXHJcbiAgICAgICAgfSwgMjAwMClcclxuICAgIH0pXHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vL2JlZ2luIGdhbWUgd2luZG93XHJcblxyXG5sZXQgYnV0dG9uQmVnaW5HYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JlZ2luLWJ0bicpO1xyXG5idXR0b25CZWdpbkdhbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdGFydEdhbWUpO1xyXG5cclxuZnVuY3Rpb24gc3RhcnRHYW1lKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICghdmFsaWRhdGVHYW1lQ29uZmlnKCkpIHJldHVybjtcclxuICAgIHRvZ2dsZVdpbmRvd0lucHV0RGF0YSgpO1xyXG4gICAgdG9nZ2xlR2FtZVdpbmRvdygpO1xyXG5cclxuICAgIC8vLy8vLy8vRHJhd01vbnN0ZXJcclxuICAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzRm9yTW9uc3RlcicpO1xyXG4gICAgZHJhd21vbnN0ZXIgPSBuZXcgRHJhd01vbnN0ZXIoY2FudmFzKTtcclxuXHJcbiAgICAvLy8vL0RyYXdIZXJvXHJcbiAgICBsZXQgY2FudmFzSGVybyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXNGb3JIZXJvJyk7XHJcbiAgICBkcmF3SGVybyA9IG5ldyBIZXJvKGNhbnZhc0hlcm8sIHNob3dCYXR0bGVXaW4pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlR2FtZVdpbmRvdygpIHtcclxuICAgIGxldCBlbGVtZW50V2luZG93R2FtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLXdpbmRvdycpO1xyXG4gICAgZWxlbWVudFdpbmRvd0dhbWUuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyB2YWxpZGF0aW9uXHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZUdhbWVDb25maWcoKSB7XHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpcnN0TmFtZUlucHV0JykudmFsdWUgPT0gJycpIHtcclxuICAgICAgICBzaG93RXJyb3IoJ9Cy0LLQtdC00Lgg0LjQvNGPJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbG9jYWxTdG9yYWdlWydmaXJzdE5hbWVJbnB1dCddID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpcnN0TmFtZUlucHV0JykudmFsdWU7XHJcblxyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZElucHV0JykudmFsdWUgPT0gJycpIHtcclxuICAgICAgICBzaG93RXJyb3IoJ9Cy0LLQtdC00Lgg0L/QsNGA0L7Qu9GMJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbG9jYWxTdG9yYWdlWydwYXNzd29yZElucHV0J10gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmRJbnB1dCcpLnZhbHVlO1xyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93RXJyb3IobWVzc2FnZSkge1xyXG4gICAgbGV0IG1lc3NhZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lc3NhZ2VEaXYuY2xhc3NOYW1lID0gXCJlcnJvck1lc3NhZ2VcIjtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobWVzc2FnZSk7XHJcbiAgICBtZXNzYWdlRGl2LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG4gICAgbGV0IG1haW5FbGVtZW50SWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybS5vcHRpb25zLWZvcm1cIik7XHJcbiAgICBtYWluRWxlbWVudElkLmFwcGVuZENoaWxkKG1lc3NhZ2VEaXYpO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbWVzc2FnZURpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG1lc3NhZ2VEaXYpXHJcbiAgICB9LCAxMDAwKTtcclxuXHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vL3Nob3cgYmF0dGxlIGJlZ2luIG1lc3NhZ2VcclxuXHJcblxyXG5mdW5jdGlvbiBzaG93QmF0dGxlV2luKCkge1xyXG4gICAgbGV0IGVsZW1lbnRXaW5kb3dTcGVsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kb3ctc3BlbGwnKTtcclxuICAgIGVsZW1lbnRXaW5kb3dTcGVsbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcbn1cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vL1xyXG5jb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsV2luZG93b2ZUYXNrJyk7XHJcblxyXG5yb290LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrTWF0aCcpKSB7XHJcbiAgICAgICAgbGV0IHRoZWlkID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKTtcclxuXHJcbiAgICAgICAgaWYgKHRoZWlkID09ICd0YXNrTWF0aCcpIHtcclxuICAgICAgICAgICAgbGV0IGVsZW1lbnRUYXNrTWF0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kb3ctdGFza01hdGgnKTtcclxuICAgICAgICAgICAgZWxlbWVudFRhc2tNYXRoLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50TW9kYWxXaW5kb3dvZlRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZG93LXNwZWxsJyk7XHJcbiAgICAgICAgICAgIGVsZW1lbnRNb2RhbFdpbmRvd29mVGFzay5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIHNwZWxsID0gV0FURVJfU1BFTEw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhlaWQgPT0gJ3Rhc2tXb3Jkc0F1ZGlvJykge1xyXG5cclxuICAgICAgICAgICAgbGV0IGVsZW1lbnRUYXNrTWF0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kb3ctdGFza1dvcmRzQXVkaW8nKTtcclxuICAgICAgICAgICAgZWxlbWVudFRhc2tNYXRoLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50TW9kYWxXaW5kb3dvZlRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZG93LXNwZWxsJyk7XHJcbiAgICAgICAgICAgIGVsZW1lbnRNb2RhbFdpbmRvd29mVGFzay5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIHNwZWxsID0gRklSRV9TUEVMTDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhlaWQgPT0gJ3Rhc2tXb3JkVHJhbnNsYXRlJykge1xyXG5cclxuICAgICAgICAgICAgbGV0IGVsZW1lbnRUYXNrTWF0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kb3ctdGFza1dvcmRUcmFuc2xhdGUnKTtcclxuICAgICAgICAgICAgZWxlbWVudFRhc2tNYXRoLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50TW9kYWxXaW5kb3dvZlRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZG93LXNwZWxsJyk7XHJcbiAgICAgICAgICAgIGVsZW1lbnRNb2RhbFdpbmRvd29mVGFzay5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIHNwZWxsID0gU0xJTUVfU1BFTEw7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoZWlkID09ICd0YXNrTGV0dGVyc1NodWZmbGUnKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZWxlbWVudFRhc2tNYXRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmRvdy10YXNrV29yZExldHRlcnNTaHVmZmxlJyk7XHJcbiAgICAgICAgICAgIGVsZW1lbnRUYXNrTWF0aC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZWxlbWVudE1vZGFsV2luZG93b2ZUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmRvdy1zcGVsbCcpO1xyXG4gICAgICAgICAgICBlbGVtZW50TW9kYWxXaW5kb3dvZlRhc2suY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xyXG4gICAgICAgICAgICBzcGVsbCA9IExJR0hUX1NQRUxMO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGVpZCA9PSAndGFza1JhbmRvbU1hdGhPcGVyYXRpb24nKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZWxlbWVudFRhc2tNYXRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmRvdy10YXNrTWF0aFJhbmRvbU9wZXJhdGlvbicpO1xyXG4gICAgICAgICAgICBlbGVtZW50VGFza01hdGguY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGVsZW1lbnRNb2RhbFdpbmRvd29mVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kb3ctc3BlbGwnKTtcclxuICAgICAgICAgICAgZWxlbWVudE1vZGFsV2luZG93b2ZUYXNrLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuICAgICAgICAgICAgc3BlbGwgPSBQTEFaTUFfU1BFTEw7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoZWlkID09ICd0YXNrQW5pbWFsVGFza3MnKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgZWxlbWVudFRhc2tNYXRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmRvdy10YXNrQW5pbWFsVGFza3MnKTtcclxuICAgICAgICAgICAgZWxlbWVudFRhc2tNYXRoLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50TW9kYWxXaW5kb3dvZlRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZG93LXNwZWxsJyk7XHJcbiAgICAgICAgICAgIGVsZW1lbnRNb2RhbFdpbmRvd29mVGFzay5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIHNwZWxsID0gV0FURVJfU1BFTEw7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhlaWQgPT0gJ3Rhc2tFeHRyYVdvcmRzJykge1xyXG5cclxuICAgICAgICAgICAgbGV0IGVsZW1lbnRUYXNrTWF0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kb3ctdGFza0V4dHJhV29yZHMnKTtcclxuICAgICAgICAgICAgZWxlbWVudFRhc2tNYXRoLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50TW9kYWxXaW5kb3dvZlRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZG93LXNwZWxsJyk7XHJcbiAgICAgICAgICAgIGVsZW1lbnRNb2RhbFdpbmRvd29mVGFzay5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIHNwZWxsID0gRklSRV9TUEVMTDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhlaWQgPT0gJ3Rhc2tOZXh0TnVtYmVyJykge1xyXG5cclxuICAgICAgICAgICAgbGV0IGVsZW1lbnRUYXNrTWF0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kb3ctdGFza05leHROdW1iZXInKTtcclxuICAgICAgICAgICAgZWxlbWVudFRhc2tNYXRoLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50TW9kYWxXaW5kb3dvZlRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZG93LXNwZWxsJyk7XHJcbiAgICAgICAgICAgIGVsZW1lbnRNb2RhbFdpbmRvd29mVGFzay5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIHNwZWxsID0gU0xJTUVfU1BFTEw7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhlaWQgPT0gJ3Rhc2tBbnRvbnltJykge1xyXG5cclxuICAgICAgICAgICAgbGV0IGVsZW1lbnRUYXNrTWF0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kb3ctdGFza0FudG9ueW0nKTtcclxuICAgICAgICAgICAgZWxlbWVudFRhc2tNYXRoLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50TW9kYWxXaW5kb3dvZlRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZG93LXNwZWxsJyk7XHJcbiAgICAgICAgICAgIGVsZW1lbnRNb2RhbFdpbmRvd29mVGFzay5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIHNwZWxsID0gTElHSFRfU1BFTEw7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhlaWQgPT0gJ3Rhc2tJbnB1dExldHRlcicpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50VGFza01hdGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZG93LXRhc2tJbnB1dExldHRlcicpO1xyXG4gICAgICAgICAgICBlbGVtZW50VGFza01hdGguY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGVsZW1lbnRNb2RhbFdpbmRvd29mVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kb3ctc3BlbGwnKTtcclxuICAgICAgICAgICAgZWxlbWVudE1vZGFsV2luZG93b2ZUYXNrLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuICAgICAgICAgICAgc3BlbGwgPSBQTEFaTUFfU1BFTEw7XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGxhc3Rfc3BlbGwgPSBzcGVsbDtcclxuICAgIH1cclxuXHJcbn0pO1xyXG5cclxuXHJcbi8vLy8vLy8gYnRuINCe0KLQm9CY0KfQndCeXHJcblxyXG5cclxubGV0IGVidG5OZXdHYW1lV2lubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bk5ld0dhbWVXaW5uZXInKTtcclxuXHJcbmVidG5OZXdHYW1lV2lubmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3TW9uc3Rlcik7XHJcblxyXG5sZXQgZWJ0bk5ld0dhbWVHYW1lb3ZlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5OZXdHYW1lR2FtZW92ZXInKTtcclxuXHJcbmVidG5OZXdHYW1lR2FtZW92ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdNb25zdGVyKTtcclxuXHJcblxyXG5mdW5jdGlvbiBuZXdNb25zdGVyKGV2ZW50KSB7XHJcblxyXG5cclxuICAgIGlmIChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpID09ICdidG5OZXdHYW1lV2lubmVyJykge1xyXG5cclxuICAgICAgICBsZXQgZWxlbWVudE5ld01vbnN0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lubmVyLXdpbmRvdycpO1xyXG4gICAgICAgIGVsZW1lbnROZXdNb25zdGVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJykgPT0gJ2J0bk5ld0dhbWVHYW1lb3ZlcicpIHtcclxuXHJcblxyXG4gICAgICAgIGxldCBlbGVtZW50TmV3TW9uc3RlcjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZW92ZXItd2luZG93Jyk7XHJcbiAgICAgICAgZWxlbWVudE5ld01vbnN0ZXIyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuXHJcbiAgICB9XHJcbiAgICBkcmF3bW9uc3Rlci5pbml0TW9uc3RlcigpO1xyXG4gICAgZHJhd0hlcm8uaW5pdGVIZXJvKCk7XHJcbn1cclxuXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vICAgY29udHJvbGxlclRhc2tMZXR0ZXJTaHVmZmxlXHJcbmxldCB0YXNrTGV0dGVyU2h1ZmZsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Xb3JkTGV0dGVyc1NodWZmbGUnKTtcclxubGV0IGJ1dHRvbkNoZWNrV29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5DaGVja1dvcmQnKTtcclxubGV0IGNvcnJlY3RMZXR0ZXJTaHVmZmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmRvdy10YXNrV29yZExldHRlcnNTaHVmZmxlIC5jb3JyZWN0LWFucycpO1xyXG5sZXQgd3JvbmdMZXR0ZXJTaHVmZmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmRvdy10YXNrV29yZExldHRlcnNTaHVmZmxlIC53cm9uZy1hbnMnKTtcclxuXHJcbmxldCBuZXdUYXNrTGV0dGVyU2h1ZmZsZSA9IG5ldyBUYXNrTGV0dGVyc1NodWZmbGUobnVsbCwgdGFza0xldHRlclNodWZmbGUsIG9ialdvcmRzKTtcclxuXHJcblxyXG5idXR0b25DaGVja1dvcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuXHJcbiAgICBsZXQgd29yZG9rID0gZmFsc2U7XHJcbiAgICBsZXQgc3RyaW5ndG9jaGVjayA9ICcnO1xyXG4gICAgQXJyYXkuZnJvbShzb3J0YWJsZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpXCIpKS5mb3JFYWNoKChhKSA9PiB7XHJcbiAgICAgICAgc3RyaW5ndG9jaGVjayArPSBhLmlubmVyVGV4dFxyXG4gICAgfSk7XHJcblxyXG4gICAgd29yZG9rID0gKHN0cmluZ3RvY2hlY2sgPT0gbmV3VGFza0xldHRlclNodWZmbGUud29yZFNodWZmbGUpO1xyXG5cclxuICAgIGlmICh3b3Jkb2spIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLy8vJiYgYW5zd2VyV29yZExldHRlcnNTaHVmZmxlLnZhbHVlICE9ICcnKSB7XHJcblxyXG4gICAgICAgIG5ld1Rhc2tMZXR0ZXJTaHVmZmxlLmNoZWNrZXIoJ3RydWUnKTtcclxuICAgICAgICBjb3JfY291bnQrKztcclxuICAgICAgICBjb3JyZWN0TGV0dGVyU2h1ZmZsZS5pbm5lclRleHQgPSBjb3JfY291bnQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5ld1Rhc2tMZXR0ZXJTaHVmZmxlLmNoZWNrZXIoJ2ZhbHNlJyk7XHJcbiAgICAgICAgd3JvbmdfY291bnQrKztcclxuICAgICAgICB3cm9uZ0xldHRlclNodWZmbGUuaW5uZXJUZXh0ID0gd3JvbmdfY291bnQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHdpbm5lckdhbWVPdmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kb3ctdGFza1dvcmRMZXR0ZXJzU2h1ZmZsZScpLCBuZXdUYXNrTGV0dGVyU2h1ZmZsZS5yZW5kZXJUYXNrKTtcclxuXHJcblxyXG59KTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL2NvbnRyb2xsZXIgVGFza051bWJlcnNcclxubGV0IGFuc3dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbnN3ZXJOdW1iZXInKTtcclxubGV0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzaycpO1xyXG5sZXQgY29ycmVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3JyZWN0LWFucycpO1xyXG5sZXQgd3JvbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JvbmctYW5zJyk7XHJcblxyXG5sZXQgbmV3VGFza051bWJlciA9IG5ldyBUYXNrTnVtYmVycyhhbnN3ZXIsIHRhc2spO1xyXG5cclxuYW5zd2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZSA9PiB7XHJcbiAgICBpZiAoZS5jb2RlID09ICdFbnRlcicgJiYgYW5zd2VyLnZhbHVlICE9ICcnKSB7XHJcbiAgICAgICAgbGV0IGFuc3cgPSB0YXNrLmlubmVyVGV4dC5zcGxpdCgnKicpO1xyXG4gICAgICAgIGFuc3cgPSBhbnN3WzBdICogYW5zd1sxXTtcclxuICAgICAgICBpZiAoYW5zdyA9PSBhbnN3ZXIudmFsdWUpIHtcclxuICAgICAgICAgICAgbmV3VGFza051bWJlci5jaGVja2VyKCd0cnVlJyk7XHJcbiAgICAgICAgICAgIGNvcl9jb3VudCsrO1xyXG4gICAgICAgICAgICBjb3JyZWN0LmlubmVyVGV4dCA9IGNvcl9jb3VudDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdUYXNrTnVtYmVyLmNoZWNrZXIoJ2ZhbHNlJyk7XHJcbiAgICAgICAgICAgIHdyb25nX2NvdW50Kys7XHJcbiAgICAgICAgICAgIHdyb25nLmlubmVyVGV4dCA9IHdyb25nX2NvdW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBhbnN3ZXIudmFsdWUgPSAnJztcclxuXHJcbiAgICAgICAgd2lubmVyR2FtZU92ZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmRvdy10YXNrTWF0aCcpLCBuZXdUYXNrTnVtYmVyLnJlbmRlclRhc2spO1xyXG5cclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL2NvbnRyb2xsZXJSYW5kb21NYXRoT3BlcmF0aW9uXHJcbmxldCBhbnN3ZXJSYW5kb21NYXRoT3BlcmF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fuc3dlck1hdGhSYW5kb21PcGVyYXRpb24nKTtcclxubGV0IHRhc2tSYW5kb21NYXRoT3BlcmF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLk1hdGhSYW5kb21PcGVyYXRpb24nKTtcclxubGV0IGNvcnJlY3RSYW5kb21NYXRoT3BlcmF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmRvdy10YXNrTWF0aFJhbmRvbU9wZXJhdGlvbiAuY29ycmVjdC1hbnMnKTtcclxubGV0IHdyb25nUmFuZG9tTWF0aE9wZXJhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5kb3ctdGFza01hdGhSYW5kb21PcGVyYXRpb24gLndyb25nLWFucycpO1xyXG5cclxuXHJcbmxldCBuZXdUYXNrUmFuZG9tTWF0aE9wZXJhdGlvbiA9IG5ldyBUYXNrUmFuZG9tTWF0aE9wZXJhdGlvbihhbnN3ZXJSYW5kb21NYXRoT3BlcmF0aW9uLCB0YXNrUmFuZG9tTWF0aE9wZXJhdGlvbik7XHJcblxyXG5cclxuYW5zd2VyUmFuZG9tTWF0aE9wZXJhdGlvbi5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGUgPT4ge1xyXG4gICAgaWYgKGUuY29kZSA9PSAnRW50ZXInICYmIGFuc3dlclJhbmRvbU1hdGhPcGVyYXRpb24udmFsdWUgIT0gJycpIHtcclxuXHJcblxyXG4gICAgICAgIGxldCBhbnN3ID0gYW5zd2VyUmFuZG9tTWF0aE9wZXJhdGlvbi52YWx1ZTtcclxuXHJcblxyXG4gICAgICAgIGlmIChhbnN3ID09IG5ld1Rhc2tSYW5kb21NYXRoT3BlcmF0aW9uLmFuc3dlcikge1xyXG4gICAgICAgICAgICBuZXdUYXNrUmFuZG9tTWF0aE9wZXJhdGlvbi5jaGVja2VyKCd0cnVlJyk7XHJcbiAgICAgICAgICAgIGNvcl9jb3VudCsrO1xyXG4gICAgICAgICAgICBjb3JyZWN0UmFuZG9tTWF0aE9wZXJhdGlvbi5pbm5lclRleHQgPSBjb3JfY291bnQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3VGFza1JhbmRvbU1hdGhPcGVyYXRpb24uY2hlY2tlcignZmFsc2UnKTtcclxuICAgICAgICAgICAgd3JvbmdfY291bnQrKztcclxuICAgICAgICAgICAgd3JvbmdSYW5kb21NYXRoT3BlcmF0aW9uLmlubmVyVGV4dCA9IHdyb25nX2NvdW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYW5zd2VyUmFuZG9tTWF0aE9wZXJhdGlvbi52YWx1ZSA9ICcnO1xyXG5cclxuXHJcbiAgICAgICAgd2lubmVyR2FtZU92ZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmRvdy10YXNrTWF0aFJhbmRvbU9wZXJhdGlvbicpLCBuZXdUYXNrUmFuZG9tTWF0aE9wZXJhdGlvbi5yZW5kZXJUYXNrKTtcclxuICAgIH1cclxuXHJcbn0pO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vY29udHJvbGxlciBUYXNrV29yZHNBdWRpb1xyXG5sZXQgYW5zd2VyV29yZHNBdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbnN3ZXJXb3JkJyk7XHJcbmxldCB0YXNrV29yZHNBdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Xb3JkJyk7XHJcbmxldCBjb3JyZWN0V29yZHNBdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5kb3ctdGFza1dvcmRzQXVkaW8gLmNvcnJlY3QtYW5zJyk7XHJcbmxldCB3cm9uZ1dvcmRzQXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2luZG93LXRhc2tXb3Jkc0F1ZGlvIC53cm9uZy1hbnMnKTtcclxuXHJcbmxldCBlbGVtZW50UGxheUF1ZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbmVsZW1lbnRQbGF5QXVkaW8uaWQgPSAncGxheUF1ZGlvJztcclxuZWxlbWVudFBsYXlBdWRpby50ZXh0Q29udGVudCA9ICfQn9GA0L7RgdC70YPRiNCw0Lkg0YHQu9C+0LLQviDQuCDQt9Cw0L/QuNGI0Lgg0LXQs9C+JztcclxudGFza1dvcmRzQXVkaW8uYXBwZW5kQ2hpbGQoZWxlbWVudFBsYXlBdWRpbyk7XHJcblxyXG5sZXQgbmV3VGFza1dvcmRzQXVkaW8gPSBuZXcgVGFza1dvcmRzQXVkaW8obnVsbCwgdGFza1dvcmRzQXVkaW8sIG9ialdvcmRzKTtcclxuXHJcblxyXG5lbGVtZW50UGxheUF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgbGV0IG1zZyA9IG5ldyBTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UobmV3VGFza1dvcmRzQXVkaW8ud29yZCk7XHJcbiAgICAgICAgbXNnLmxhbmcgPSAnZW4tVVMnO1xyXG4gICAgICAgIHdpbmRvdy5zcGVlY2hTeW50aGVzaXMuc3BlYWsobXNnKTtcclxuICAgIH1cclxuKTtcclxuXHJcbmFuc3dlcldvcmRzQXVkaW8uYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBlID0+IHtcclxuICAgIGlmIChlLmNvZGUgPT0gJ0VudGVyJyAmJiBhbnN3ZXJXb3Jkc0F1ZGlvLnZhbHVlICE9ICcnKSB7XHJcblxyXG4gICAgICAgIGxldCBhbnN3ID0gYW5zd2VyV29yZHNBdWRpby52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICBpZiAoYW5zdyA9PSBuZXdUYXNrV29yZHNBdWRpby53b3JkKSB7XHJcbiAgICAgICAgICAgIG5ld1Rhc2tXb3Jkc0F1ZGlvLmNoZWNrZXIoJ3RydWUnKTtcclxuICAgICAgICAgICAgY29yX2NvdW50Kys7XHJcbiAgICAgICAgICAgIGNvcnJlY3RXb3Jkc0F1ZGlvLmlubmVyVGV4dCA9IGNvcl9jb3VudDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdUYXNrV29yZHNBdWRpby5jaGVja2VyKCdmYWxzZScpO1xyXG4gICAgICAgICAgICB3cm9uZ19jb3VudCsrO1xyXG4gICAgICAgICAgICB3cm9uZ1dvcmRzQXVkaW8uaW5uZXJUZXh0ID0gd3JvbmdfY291bnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFuc3dlcldvcmRzQXVkaW8udmFsdWUgPSAnJztcclxuXHJcbiAgICAgICAgd2lubmVyR2FtZU92ZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmRvdy10YXNrV29yZHNBdWRpbycpLCBuZXdUYXNrV29yZHNBdWRpby5yZW5kZXJUYXNrKTtcclxuICAgIH1cclxuXHJcbn0pO1xyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9jb250cm9sbGVyIFRhc2tXb3JkVHJhbnNsYXRlXHJcblxyXG5cclxubGV0IGFuc3dlcldvcmRUcmFuc2xhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYW5zd2VyV29yZFRyYW5zbGF0ZScpO1xyXG5sZXQgdGFza1dvcmRUcmFuc2xhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuV29yZFRyYW5zbGF0ZScpO1xyXG5sZXQgY29ycmVjdFdvcmRUcmFuc2xhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2luZG93LXRhc2tXb3JkVHJhbnNsYXRlIC5jb3JyZWN0LWFucycpO1xyXG5sZXQgd3JvbmdXb3JkVHJhbnNsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmRvdy10YXNrV29yZFRyYW5zbGF0ZSAud3JvbmctYW5zJyk7XHJcblxyXG5sZXQgbmV3VGFza1dvcmRUcmFuc2xhdGUgPSBuZXcgVGFza1dvcmRUcmFuc2xhdGUoYW5zd2VyV29yZFRyYW5zbGF0ZSwgdGFza1dvcmRUcmFuc2xhdGUsIG9ialdvcmRzKTtcclxuXHJcblxyXG5hbnN3ZXJXb3JkVHJhbnNsYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZSA9PiB7XHJcbiAgICBpZiAoZS5jb2RlID09ICdFbnRlcicgJiYgYW5zd2VyV29yZFRyYW5zbGF0ZS52YWx1ZSAhPSAnJykge1xyXG4gICAgICAgIGxldCBhbnN3ID0gYW5zd2VyV29yZFRyYW5zbGF0ZS52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICBpZiAobmV3VGFza1dvcmRUcmFuc2xhdGUuYW5zd2VyV29yZFRyYW5zbGF0ZUFycmF5LmluZGV4T2YoYW5zdykgPiAtMSkge1xyXG4gICAgICAgICAgICBuZXdUYXNrV29yZFRyYW5zbGF0ZS5jaGVja2VyKCd0cnVlJyk7XHJcbiAgICAgICAgICAgIGNvcl9jb3VudCsrO1xyXG4gICAgICAgICAgICBjb3JyZWN0V29yZFRyYW5zbGF0ZS5pbm5lclRleHQgPSBjb3JfY291bnQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3VGFza1dvcmRUcmFuc2xhdGUuY2hlY2tlcignZmFsc2UnKTtcclxuICAgICAgICAgICAgd3JvbmdfY291bnQrKztcclxuICAgICAgICAgICAgd3JvbmdXb3JkVHJhbnNsYXRlLmlubmVyVGV4dCA9IHdyb25nX2NvdW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBhbnN3ZXJXb3JkVHJhbnNsYXRlLnZhbHVlID0gJyc7XHJcblxyXG4gICAgICAgIHdpbm5lckdhbWVPdmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kb3ctdGFza1dvcmRUcmFuc2xhdGUnKSwgbmV3VGFza1dvcmRUcmFuc2xhdGUucmVuZGVyVGFzayk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL2NvbnRyb2xsZXIgVGFza0FuaW1hbFRhc2tzXHJcblxyXG5cclxubGV0IGFuc3dlckFuaW1hbFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fuc3dlclRhc2tBbmltYWxUYXNrcycpO1xyXG5sZXQgdGFza0FuaW1hbFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tBbmltYWxUYXNrcycpO1xyXG5sZXQgY29ycmVjdEFuaW1hbFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmRvdy10YXNrQW5pbWFsVGFza3MgLmNvcnJlY3QtYW5zJyk7XHJcbmxldCB3cm9uZ0FuaW1hbFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmRvdy10YXNrQW5pbWFsVGFza3MgLndyb25nLWFucycpO1xyXG5cclxubGV0IG5ld1Rhc2tBbmltYWxUYXNrcyA9IG5ldyBUYXNrQW5pbWFsVGFza3MoYW5zd2VyQW5pbWFsVGFza3MsIHRhc2tBbmltYWxUYXNrcywgb2JqVGFza3MpO1xyXG5cclxuXHJcbmFuc3dlckFuaW1hbFRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZSA9PiB7XHJcbiAgICBpZiAoZS5jb2RlID09ICdFbnRlcicgJiYgYW5zd2VyQW5pbWFsVGFza3MudmFsdWUgIT0gJycpIHtcclxuXHJcbiAgICAgICAgbGV0IGFuc3cgPSBhbnN3ZXJBbmltYWxUYXNrcy52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICBpZiAoYW5zdyA9PSBuZXdUYXNrQW5pbWFsVGFza3MuYW5zd2VyV29yZFRhc2tzQW5pbWFsU3RyaW5nKSB7XHJcbiAgICAgICAgICAgIG5ld1Rhc2tBbmltYWxUYXNrcy5jaGVja2VyKCd0cnVlJyk7XHJcbiAgICAgICAgICAgIGNvcl9jb3VudCsrO1xyXG4gICAgICAgICAgICBjb3JyZWN0QW5pbWFsVGFza3MuaW5uZXJUZXh0ID0gY29yX2NvdW50O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld1Rhc2tBbmltYWxUYXNrcy5jaGVja2VyKCdmYWxzZScpO1xyXG4gICAgICAgICAgICB3cm9uZ19jb3VudCsrO1xyXG4gICAgICAgICAgICB3cm9uZ0FuaW1hbFRhc2tzLmlubmVyVGV4dCA9IHdyb25nX2NvdW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBhbnN3ZXJBbmltYWxUYXNrcy52YWx1ZSA9ICcnO1xyXG5cclxuICAgICAgICB3aW5uZXJHYW1lT3Zlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZG93LXRhc2tBbmltYWxUYXNrcycpLCBuZXdUYXNrQW5pbWFsVGFza3MucmVuZGVyVGFzayk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1Rhc2tFeHRyYVdvcmRzXHJcbmxldCBhbnN3ZXJFeHRyYVdvcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fuc3dlclRhc2tFeHRyYVdvcmRzJyk7XHJcbmxldCB0YXNrRXh0cmFXb3JkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrRXh0cmFXb3JkcycpO1xyXG5sZXQgY29ycmVjdEV4dHJhV29yZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2luZG93LXRhc2tFeHRyYVdvcmRzIC5jb3JyZWN0LWFucycpO1xyXG5sZXQgd3JvbmdFeHRyYVdvcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmRvdy10YXNrRXh0cmFXb3JkcyAud3JvbmctYW5zJyk7XHJcblxyXG5sZXQgbmV3VGFza0V4dHJhV29yZHMgPSBuZXcgVGFza0V4dHJhV29yZHMoYW5zd2VyRXh0cmFXb3JkcywgdGFza0V4dHJhV29yZHMsIG9iakV4dHJhV29yZHMpO1xyXG5cclxuXHJcbmFuc3dlckV4dHJhV29yZHMuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBlID0+IHtcclxuICAgIGlmIChlLmNvZGUgPT0gJ0VudGVyJyAmJiBhbnN3ZXJFeHRyYVdvcmRzLnZhbHVlICE9ICcnKSB7XHJcblxyXG4gICAgICAgIGxldCBhbnN3ID0gYW5zd2VyRXh0cmFXb3Jkcy52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICBpZiAobmV3VGFza0V4dHJhV29yZHMud29yZFRhc2tFeHRyYVdvcmRzQXJyYXkuaW5kZXhPZihhbnN3KSA+IC0xKSB7XHJcbiAgICAgICAgICAgIG5ld1Rhc2tFeHRyYVdvcmRzLmNoZWNrZXIoJ3RydWUnKTtcclxuICAgICAgICAgICAgY29yX2NvdW50Kys7XHJcbiAgICAgICAgICAgIGNvcnJlY3RFeHRyYVdvcmRzLmlubmVyVGV4dCA9IGNvcl9jb3VudDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdUYXNrRXh0cmFXb3Jkcy5jaGVja2VyKCdmYWxzZScpO1xyXG4gICAgICAgICAgICB3cm9uZ19jb3VudCsrO1xyXG4gICAgICAgICAgICB3cm9uZ0V4dHJhV29yZHMuaW5uZXJUZXh0ID0gd3JvbmdfY291bnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhbnN3ZXJFeHRyYVdvcmRzLnZhbHVlID0gJyc7XHJcblxyXG4gICAgICAgIHdpbm5lckdhbWVPdmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kb3ctdGFza0V4dHJhV29yZHMnKSwgbmV3VGFza0V4dHJhV29yZHMucmVuZGVyVGFzayk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vVGFza05leHROdW1iZXJcclxuXHJcbmxldCBhbnN3ZXJOZXh0TnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fuc3dlclRhc2tOZXh0TnVtYmVyJyk7XHJcbmxldCB0YXNrTmV4dE51bWJlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrTmV4dE51bWJlcicpO1xyXG5sZXQgY29ycmVjdE5leHROdW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2luZG93LXRhc2tOZXh0TnVtYmVyIC5jb3JyZWN0LWFucycpO1xyXG5sZXQgd3JvbmdOZXh0TnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmRvdy10YXNrTmV4dE51bWJlciAud3JvbmctYW5zJyk7XHJcblxyXG5sZXQgbmV3VGFza05leHROdW1iZXIgPSBuZXcgVGFza0V4dHJhV29yZHMoYW5zd2VyTmV4dE51bWJlciwgdGFza05leHROdW1iZXIsIG9iak5leHROdW1iZXIpO1xyXG5cclxuXHJcbmFuc3dlck5leHROdW1iZXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBlID0+IHtcclxuICAgIGlmIChlLmNvZGUgPT0gJ0VudGVyJyAmJiBhbnN3ZXJOZXh0TnVtYmVyLnZhbHVlICE9ICcnKSB7XHJcblxyXG4gICAgICAgIGxldCBhbnN3ID0gYW5zd2VyTmV4dE51bWJlci52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICBpZiAoYW5zdyA9PSBuZXdUYXNrTmV4dE51bWJlci5hbnN3ZXJFeHRyYVdvcmRzKSB7XHJcbiAgICAgICAgICAgIG5ld1Rhc2tOZXh0TnVtYmVyLmNoZWNrZXIoJ3RydWUnKTtcclxuICAgICAgICAgICAgY29yX2NvdW50Kys7XHJcbiAgICAgICAgICAgIGNvcnJlY3ROZXh0TnVtYmVyLmlubmVyVGV4dCA9IGNvcl9jb3VudDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdUYXNrTmV4dE51bWJlci5jaGVja2VyKCdmYWxzZScpO1xyXG4gICAgICAgICAgICB3cm9uZ19jb3VudCsrO1xyXG4gICAgICAgICAgICB3cm9uZ05leHROdW1iZXIuaW5uZXJUZXh0ID0gd3JvbmdfY291bnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhbnN3ZXJOZXh0TnVtYmVyLnZhbHVlID0gJyc7XHJcblxyXG4gICAgICAgIHdpbm5lckdhbWVPdmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kb3ctdGFza05leHROdW1iZXInKSwgbmV3VGFza05leHROdW1iZXIucmVuZGVyVGFzayk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1Rhc2tBbnRvbnltXHJcblxyXG5sZXQgYW5zd2VyQW50b255bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbnN3ZXJUYXNrQW50b255bScpO1xyXG5sZXQgdGFza0FudG9ueW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0FudG9ueW0nKTtcclxubGV0IGNvcnJlY3RBbnRvbnltID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmRvdy10YXNrQW50b255bSAuY29ycmVjdC1hbnMnKTtcclxubGV0IHdyb25nQW50b255bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5kb3ctdGFza0FudG9ueW0gLndyb25nLWFucycpO1xyXG5cclxubGV0IG5ld1Rhc2tBbnRvbnltID0gbmV3IFRhc2tFeHRyYVdvcmRzKGFuc3dlckFudG9ueW0sIHRhc2tBbnRvbnltLCBvYmpBbnRvbnltKTtcclxuXHJcblxyXG5hbnN3ZXJBbnRvbnltLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZSA9PiB7XHJcbiAgICBpZiAoZS5jb2RlID09ICdFbnRlcicgJiYgYW5zd2VyQW50b255bS52YWx1ZSAhPSAnJykge1xyXG5cclxuICAgICAgICBsZXQgYW5zdyA9IGFuc3dlckFudG9ueW0udmFsdWUudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgaWYgKGFuc3cgPT0gbmV3VGFza0FudG9ueW0uYW5zd2VyRXh0cmFXb3Jkcykge1xyXG4gICAgICAgICAgICBuZXdUYXNrQW50b255bS5jaGVja2VyKCd0cnVlJyk7XHJcbiAgICAgICAgICAgIGNvcl9jb3VudCsrO1xyXG4gICAgICAgICAgICBjb3JyZWN0QW50b255bS5pbm5lclRleHQgPSBjb3JfY291bnQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3VGFza0FudG9ueW0uY2hlY2tlcignZmFsc2UnKTtcclxuICAgICAgICAgICAgd3JvbmdfY291bnQrKztcclxuICAgICAgICAgICAgd3JvbmdBbnRvbnltLmlubmVyVGV4dCA9IHdyb25nX2NvdW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYW5zd2VyQW50b255bS52YWx1ZSA9ICcnO1xyXG5cclxuICAgICAgICB3aW5uZXJHYW1lT3Zlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZG93LXRhc2tBbnRvbnltJyksIG5ld1Rhc2tBbnRvbnltLnJlbmRlclRhc2spO1xyXG4gICAgfVxyXG5cclxufSk7XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9UYXNrSW5wdXRMZXR0ZXJcclxuXHJcbmxldCBhbnN3ZXJJbnB1dExldHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhbnN3ZXJUYXNrSW5wdXRMZXR0ZXInKTtcclxubGV0IHRhc2tJbnB1dExldHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrSW5wdXRMZXR0ZXInKTtcclxubGV0IGNvcnJlY3RJbnB1dExldHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5kb3ctdGFza0lucHV0TGV0dGVyIC5jb3JyZWN0LWFucycpO1xyXG5sZXQgd3JvbmdJbnB1dExldHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5kb3ctdGFza0lucHV0TGV0dGVyIC53cm9uZy1hbnMnKTtcclxuXHJcbmxldCBuZXdUYXNrSW5wdXRMZXR0ZXIgPSBuZXcgVGFza0V4dHJhV29yZHMoYW5zd2VySW5wdXRMZXR0ZXIsIHRhc2tJbnB1dExldHRlciwgb2JqSW5wdXRMZXR0ZXIpO1xyXG5cclxuXHJcbmFuc3dlcklucHV0TGV0dGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgZSA9PiB7XHJcbiAgICBpZiAoZS5jb2RlID09ICdFbnRlcicgJiYgYW5zd2VySW5wdXRMZXR0ZXIudmFsdWUgIT0gJycpIHtcclxuXHJcbiAgICAgICAgbGV0IGFuc3cgPSBhbnN3ZXJJbnB1dExldHRlci52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICBpZiAoYW5zdyA9PSBuZXdUYXNrSW5wdXRMZXR0ZXIuYW5zd2VyRXh0cmFXb3Jkcykge1xyXG4gICAgICAgICAgICBuZXdUYXNrSW5wdXRMZXR0ZXIuY2hlY2tlcigndHJ1ZScpO1xyXG4gICAgICAgICAgICBjb3JfY291bnQrKztcclxuICAgICAgICAgICAgY29ycmVjdElucHV0TGV0dGVyLmlubmVyVGV4dCA9IGNvcl9jb3VudDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdUYXNrSW5wdXRMZXR0ZXIuY2hlY2tlcignZmFsc2UnKTtcclxuICAgICAgICAgICAgd3JvbmdfY291bnQrKztcclxuICAgICAgICAgICAgd3JvbmdJbnB1dExldHRlci5pbm5lclRleHQgPSB3cm9uZ19jb3VudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFuc3dlcklucHV0TGV0dGVyLnZhbHVlID0gJyc7XHJcblxyXG4gICAgICAgIHdpbm5lckdhbWVPdmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kb3ctdGFza0lucHV0TGV0dGVyJyksIG5ld1Rhc2tJbnB1dExldHRlci5yZW5kZXJUYXNrKTtcclxuICAgIH1cclxuXHJcbn0pOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlcm8ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY2FsbGJhY2spIHtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2s9Y2FsbGJhY2s7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3MgPSBbMCwgMF07XHJcbiAgICAgICAgdGhpcy5zaXplID0gWzQwLCA1MF07XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IDE7XHJcbiAgICAgICAgdGhpcy5mcmFtZXMgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgN107XHJcbiAgICAgICAgdGhpcy5faW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMudXJsID0gJ2ltYWdlcy9zcHJpdGVGaW5uLnBuZyc7XHJcbiAgICAgICAgdGhpcy5kaXIgPSAnaG9yaXpvbnRhbCc7XHJcbiAgICAgICAgdGhpcy5vbmNlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuaGVyb1Nwcml0ZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuaGVyb1Nwcml0ZS5zcmMgPSBcImltYWdlcy9zcHJpdGVGaW5uLnBuZ1wiO1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlciA9IHRoaXMucmVuZGVyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IHJ1biA9IHNldEludGVydmFsKCgpID0+IHt0aGlzLnVwZGF0ZSgxKTtcclxuICAgICAgICB0aGlzLnJlbmRlcih0aGlzLmNvbnRleHQpO1xyXG4gICAgICAgIGlmICh0aGlzLl9pbmRleD40MClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwocnVuKTtcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9fSwxMDAgKVxyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuaW5pdGVIZXJvICgpIHtcclxuXHJcbiAgICB0aGlzLl9pbmRleCA9IDA7XHJcbiAgICBsZXQgcnVuID0gc2V0SW50ZXJ2YWwoKCkgPT4ge3RoaXMudXBkYXRlKDEpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKHRoaXMuY29udGV4dCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2luZGV4PjQwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChydW4pO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrKCk7XHJcbiAgICAgICAgfX0sMTAwIClcclxufVxyXG5cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICB0aGlzLl9pbmRleCArPSB0aGlzLnNwZWVkICogZHQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcihjdHgpIHtcclxuICAgICAgICBsZXQgZnJhbWU7XHJcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLmNhbnZhcy53aWR0aDtcclxuXHJcblxyXG5cclxuICAgICAgICBpZiAodGhpcy5zcGVlZCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IG1heCA9IHRoaXMuZnJhbWVzLmxlbmd0aDtcclxuICAgICAgICAgICAgbGV0IGlkeCA9IE1hdGguZmxvb3IodGhpcy5faW5kZXgpO1xyXG4gICAgICAgICAgICBmcmFtZSA9IHRoaXMuZnJhbWVzW2lkeCAlIG1heF07XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5vbmNlICYmIGlkeCA+PSBtYXgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZyYW1lID0gMDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBsZXQgeCA9IHRoaXMucG9zWzBdO1xyXG4gICAgICAgIGxldCB5ID0gdGhpcy5wb3NbMV07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRpciA9PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgIHkgKz0gZnJhbWUgKiB0aGlzLnNpemVbMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB4ICs9IGZyYW1lICogdGhpcy5zaXplWzBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgLy8gICBjb25zb2xlLmxvZyh0aGlzLmhlcm9TcHJpdGUpO1xyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5oZXJvU3ByaXRlLFxyXG4gICAgICAgICAgICB4LCB5LFxyXG4gICAgICAgICAgICB0aGlzLnNpemVbMF0sIHRoaXMuc2l6ZVsxXSxcclxuICAgICAgICAgICAgMTArdGhpcy5faW5kZXgqMTAsIDIwMCxcclxuICAgICAgICAgICAgdGhpcy5zaXplWzBdKjMsIHRoaXMuc2l6ZVsxXSozKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiZXhwb3J0IGRlZmF1bHQgIGNsYXNzIFRhYmxlUmVzdWx0cyB7XHJcbiAgICBjb25zdHJ1Y3RvcihyZXN1bHRzKSB7XHJcbiAgICAgICAgdGhpcy5yZXN1bHRzID0gcmVzdWx0cztcclxuICAgICAgICB0aGlzLnRhYmxlID0gdGhpcy5jcmVhdGVUYWJsZSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVUYWJsZSgpIHtcclxuICAgICAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xyXG4gICAgICAgIHRhYmxlLmFwcGVuZCh0aGlzLmNyZWF0ZUhlYWRlcigpLCB0aGlzLmNyZWF0ZUJvZHkoKSk7XHJcbiAgICAgICAgcmV0dXJuIHRhYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIGluc2VydFRhYmxlKCkge1xyXG4gICAgICAgIHdpbm5lclJlc3VsdC5hcHBlbmRDaGlsZCh0aGlzLnRhYmxlKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVIZWFkZXIoKSB7XHJcbiAgICAgICAgbGV0IHRIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGhlYWQnKTtcclxuICAgICAgICBsZXQgaGVhZFRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgICAgICB0SGVhZC5hcHBlbmRDaGlsZChoZWFkVHIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBoZWFkVGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xyXG4gICAgICAgICAgICBoZWFkVHIuYXBwZW5kKGhlYWRUaCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhlYWRUci5jaGlsZHJlblswXS5pbm5lckhUTUwgPSAn0JjQvNGPINCz0LXRgNC+0Y8nO1xyXG4gICAgICAgIGhlYWRUci5jaGlsZHJlblsxXS5pbm5lckhUTUwgPSAn0KHQutC+0LvRjNC60L4g0LzQvtC90YHRgtGA0L7QsiDRgtGLINC/0L7QsdC10LTQuNC7JztcclxuICAgICAgICByZXR1cm4gdEhlYWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQm9keSgpIHtcclxuICAgICAgICBsZXQgdEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xyXG4gICAgICAgIHRoaXMucmVzdWx0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlWydBVHRvcDUnXSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGJvZHlUciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgICAgIHRCb2R5LmFwcGVuZENoaWxkKGJvZHlUcik7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMjsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYm9keVRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICAgICAgICAgIGJvZHlUci5hcHBlbmRDaGlsZChib2R5VGQpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbmlmICh0aGlzLnJlc3VsdHNbaV0pIHtcclxuICAgIGJvZHlUci5jaGlsZHJlblswXS5pbm5lckhUTUwgPSB0aGlzLnJlc3VsdHNbaV0uYXRuYW1lID8gdGhpcy5yZXN1bHRzW2ldLmF0bmFtZSA6IFwiXCI7XHJcbiAgICBib2R5VHIuY2hpbGRyZW5bMV0uaW5uZXJIVE1MID0gdGhpcy5yZXN1bHRzW2ldLmF0c2NvcmU7XHJcbn1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0Qm9keTtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tBbmltYWxUYXNrcyB7XHJcbiAgICBjb25zdHJ1Y3RvcihhbnN3ZXJmaWVsZCwgdGFzaywgd29yZHMpIHtcclxuXHJcbiAgICAgICAgdGhpcy5hbnN3ZXJmaWVsZD1hbnN3ZXJmaWVsZDtcclxuICAgICAgICB0aGlzLnRhc2s9dGFzaztcclxuICAgICAgICB0aGlzLndvcmRzPXdvcmRzO1xyXG4gICAgICAgIHRoaXMucmVuZGVyVGFzayA9IHRoaXMucmVuZGVyVGFzay5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlclRhc2soKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY2hlY2tlcih2YWx1ZSkge1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgPT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFzay5jbGFzc0xpc3QgKz0gJyBjb3JyZWN0J1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFzay5jbGFzc0xpc3QgKz0gJyB3cm9uZydcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclRhc2soKSB7XHJcbiAgICAgICAgdGhpcy5hbnN3ZXJmaWVsZC52YWx1ZSA9ICcnO1xyXG5cclxuICAgICAgICB0aGlzLmFuc3dlcldvcmRUYXNrc0FuaW1hbFN0cmluZyA9ICBPYmplY3Qua2V5cyh0aGlzLndvcmRzKVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoT2JqZWN0LmtleXModGhpcy53b3JkcykubGVuZ3RoKSldOyAgLy8vL9C+0YLQs9Cw0LTQutCwXHJcblxyXG4gICAgICAgIHRoaXMud29yZFRhc2tzQW5pbWFsID0gdGhpcy53b3Jkc1t0aGlzLmFuc3dlcldvcmRUYXNrc0FuaW1hbFN0cmluZ107ICAvLy8v0YLQtdC60YHRgiDQt9Cw0LPQsNC00LrQuFxyXG5cclxuICAgICAgICB0aGlzLnRhc2suaW5uZXJUZXh0PXRoaXMud29yZFRhc2tzQW5pbWFsO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza0V4dHJhV29yZHMge1xyXG4gICAgY29uc3RydWN0b3IoYW5zd2VyZmllbGQsIHRhc2ssIHdvcmRzKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYW5zd2VyZmllbGQ9YW5zd2VyZmllbGQ7XHJcbiAgICAgICAgdGhpcy50YXNrPXRhc2s7XHJcbiAgICAgICAgdGhpcy53b3Jkcz13b3JkcztcclxuICAgICAgICB0aGlzLnJlbmRlclRhc2sgPSB0aGlzLnJlbmRlclRhc2suYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJUYXNrKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNoZWNrZXIodmFsdWUpIHtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlID09ICd0cnVlJykge1xyXG4gICAgICAgICAgICB0aGlzLnRhc2suY2xhc3NMaXN0ICs9ICcgY29ycmVjdCdcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRhc2suY2xhc3NMaXN0ICs9ICcgd3JvbmcnXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJUYXNrKCkge1xyXG4gICAgICAgIHRoaXMuYW5zd2VyZmllbGQudmFsdWUgPSAnJztcclxuXHJcbiAgICAgICAgdGhpcy5hbnN3ZXJFeHRyYVdvcmRzID0gIE9iamVjdC5rZXlzKHRoaXMud29yZHMpW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChPYmplY3Qua2V5cyh0aGlzLndvcmRzKS5sZW5ndGgpKV07ICAvLy8v0L3QtdC/0YDQsNCy0LjQu9GM0L3QvtC1INGB0LvQvtCy0L5cclxuXHJcbiAgICAgICAgdGhpcy53b3JkVGFza0V4dHJhV29yZHNBcnJheSA9IHRoaXMud29yZHNbdGhpcy5hbnN3ZXJFeHRyYVdvcmRzXTsgIC8vINC80LDRgdGB0LjQslxyXG5cclxuICAgICAgICB0aGlzLnRhc2suaW5uZXJUZXh0PXRoaXMud29yZFRhc2tFeHRyYVdvcmRzQXJyYXkuam9pbignICcpO1xyXG5cclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrTGV0dGVyc1NodWZmbGUge1xyXG4gICAgY29uc3RydWN0b3IoYW5zd2VyZmllbGQsdGFzayx3b3Jkcykge1xyXG5cclxuICAgICAgICB0aGlzLmFuc3dlcmZpZWxkPWFuc3dlcmZpZWxkO1xyXG4gICAgICAgIHRoaXMudGFzaz10YXNrO1xyXG4gICAgICAgIHRoaXMud29yZHM9d29yZHM7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJUYXNrID0gdGhpcy5yZW5kZXJUYXNrLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIFN0cmluZy5wcm90b3R5cGUuc2h1ZmZsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IGEgPSB0aGlzLnNwbGl0KFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgbiA9IGEubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IG4gLSAxOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRtcCA9IGFbaV07XHJcbiAgICAgICAgICAgICAgICBhW2ldID0gYVtqXTtcclxuICAgICAgICAgICAgICAgIGFbal0gPSB0bXA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGEuam9pbihcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZW5kZXJUYXNrKCk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjaGVja2VyKHZhbHVlKSB7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSA9PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgdGhpcy50YXNrLmNsYXNzTGlzdCArPSAnIGNvcnJlY3QnXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50YXNrLmNsYXNzTGlzdCArPSAnIHdyb25nJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyVGFzaygpIHtcclxuXHJcbiAgICAgICAgc29ydGFibGUuaW5uZXJIVE1MPScnO1xyXG4gICAgICAgIHRoaXMud29yZFNodWZmbGUgPSBPYmplY3Qua2V5cyh0aGlzLndvcmRzKVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoT2JqZWN0LmtleXModGhpcy53b3JkcykubGVuZ3RoKSldOyAgLy8gcmFuZG9tIHdvcmQgZnJvbSBhcnJheVxyXG4gICAgICAgIHRoaXMuc2h1ZmZsZWRXb3JkPSB0aGlzLndvcmRTaHVmZmxlLnNodWZmbGUoKTtcclxuXHJcbiAgICAgICAgQXJyYXkuZnJvbSh0aGlzLnNodWZmbGVkV29yZCkuZm9yRWFjaChcclxuICAgICAgICAgICAgKGN1cnJlbnRWYWx1ZSwgaW5kZXgsIGFycmF5KT0+e1xyXG4gICAgICAgICAgICAgICAgbGV0IGVsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMSVwiKTtcclxuICAgICAgICAgICAgICAgICAgZWxpLmlubmVyVGV4dD1jdXJyZW50VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZS5hcHBlbmRDaGlsZChlbGkpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICApXHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza051bWJlcnMge1xyXG4gICAgY29uc3RydWN0b3IoYW5zd2VyZmllbGQsdGFzaykge1xyXG4gICAgICAgIHRoaXMuYW5zd2VyZmllbGQ9YW5zd2VyZmllbGQ7XHJcbiAgICAgICAgdGhpcy50YXNrPXRhc2s7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJUYXNrID0gdGhpcy5yZW5kZXJUYXNrLmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyVGFzaygpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgY2hlY2tlcih2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgdGhpcy50YXNrLmNsYXNzTGlzdCArPSAnIGNvcnJlY3QnXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50YXNrLmNsYXNzTGlzdCArPSAnIHdyb25nJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyVGFzaygpIHtcclxuICAgICAgICB0aGlzLmFuc3dlcmZpZWxkLnZhbHVlID0gJyc7XHJcbiAgICAgICAgbGV0IHZhbHVlX29uZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpICsgMTtcclxuICAgICAgICBsZXQgdmFsdWVfdHdvID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSkgKyAxO1xyXG4gICAgICAgIC8vIEFkZCBUYXNrIHRvIERpc3BsYXlcclxuICAgICAgICBsZXQgbmV3X3Rhc2sgPSBgJHt2YWx1ZV9vbmV9ICogJHt2YWx1ZV90d299YDtcclxuICAgICAgICB0aGlzLnRhc2suaW5uZXJUZXh0ID0gbmV3X3Rhc2s7XHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza1JhbmRvbU1hdGhPcGVyYXRpb24ge1xyXG4gICAgY29uc3RydWN0b3IoYW5zd2VyZmllbGQsdGFzaykge1xyXG5cclxuICAgICAgICB0aGlzLmFuc3dlcmZpZWxkPWFuc3dlcmZpZWxkO1xyXG4gICAgICAgIHRoaXMudGFzaz10YXNrO1xyXG4gICAgICAgIHRoaXMucmVuZGVyVGFzayA9IHRoaXMucmVuZGVyVGFzay5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlclRhc2soKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY2hlY2tlcih2YWx1ZSkge1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgPT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFzay5jbGFzc0xpc3QgKz0gJyBjb3JyZWN0J1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFzay5jbGFzc0xpc3QgKz0gJyB3cm9uZydcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyVGFzaygpIHtcclxuICAgICAgICB0aGlzLmFuc3dlcmZpZWxkLnZhbHVlID0gJyc7XHJcbiAgICAgICAgbGV0IGE9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICo4KSsxO1xyXG4gICAgICAgIGxldCBiPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKjgpKzE7XHJcbiAgICAgICAgbGV0IG9wZXJhdG9ycyA9IFt7XHJcbiAgICAgICAgICAgIHNpZ246IFwiK1wiLFxyXG4gICAgICAgICAgICBtZXRob2Q6IGZ1bmN0aW9uKGEsYil7IHJldHVybiBhICsgYjsgfVxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICBzaWduOiBcIi1cIixcclxuICAgICAgICAgICAgbWV0aG9kOiBmdW5jdGlvbihhLGIpeyByZXR1cm4gYSAtIGI7IH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2lnbjogXCIqXCIsXHJcbiAgICAgICAgICAgIG1ldGhvZDogZnVuY3Rpb24oYSxiKXsgcmV0dXJuIGEgKiBiOyB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHNpZ246IFwiL1wiLFxyXG4gICAgICAgICAgICBtZXRob2Q6IGZ1bmN0aW9uKGEsYil7IHJldHVybiBhIC8gYjsgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBsZXQgc2VsZWN0ZWRPcGVyYXRvciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpvcGVyYXRvcnMubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgbGV0IG5ld190YXNrID0gYSArIFwiIFwiICsgb3BlcmF0b3JzW3NlbGVjdGVkT3BlcmF0b3JdLnNpZ24gKyBcIiBcIiArIGIgKyBcIiA9XCI7XHJcblxyXG4gICAgICAgIHRoaXMuYW5zd2VyPW9wZXJhdG9yc1tzZWxlY3RlZE9wZXJhdG9yXS5tZXRob2QoYSxiKTtcclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdGVkT3BlcmF0b3IgPT0gMylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBhKmI7XHJcbiAgICAgICAgICAgIG5ld190YXNrID0gcmVzdWx0ICsgXCIgLyBcIiArIGEgKyBcIiA9XCI7XHJcbiAgICAgICAgICAgIHRoaXMuYW5zd2VyID0gYjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50YXNrLmlubmVyVGV4dCA9IG5ld190YXNrO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrV29yZFRyYW5zbGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihhbnN3ZXJmaWVsZCx0YXNrLHdvcmRzKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYW5zd2VyZmllbGQ9YW5zd2VyZmllbGQ7XHJcbiAgICAgICAgdGhpcy50YXNrPXRhc2s7XHJcbiAgICAgICAgdGhpcy53b3Jkcz13b3JkcztcclxuICAgICAgICB0aGlzLnJlbmRlclRhc2sgPSB0aGlzLnJlbmRlclRhc2suYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJUYXNrKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNoZWNrZXIodmFsdWUpIHtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlID09ICd0cnVlJykge1xyXG4gICAgICAgICAgICB0aGlzLnRhc2suY2xhc3NMaXN0ICs9ICcgY29ycmVjdCdcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRhc2suY2xhc3NMaXN0ICs9ICcgd3JvbmcnXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJUYXNrKCkge1xyXG4gICAgICAgIHRoaXMuYW5zd2VyZmllbGQudmFsdWUgPSAnJztcclxuXHJcbiAgICAgICAgdGhpcy53b3JkVHJhbnNsYXRlID0gT2JqZWN0LmtleXModGhpcy53b3JkcylbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKE9iamVjdC5rZXlzKHRoaXMud29yZHMpLmxlbmd0aCkpXTsgIC8vIHJhbmRvbSB3b3JkIGZyb20gYXJyYXlcclxuXHJcbiAgICAgICAgdGhpcy5hbnN3ZXJXb3JkVHJhbnNsYXRlQXJyYXkgPSB0aGlzLndvcmRzW3RoaXMud29yZFRyYW5zbGF0ZV07XHJcbiAgICAgICAgdGhpcy50YXNrLmlubmVyVGV4dD10aGlzLndvcmRUcmFuc2xhdGU7XHJcblxyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2tXb3Jkc0F1ZGlvIHtcclxuICAgIGNvbnN0cnVjdG9yKGFuc3dlcmZpZWxkLHRhc2ssd29yZHMpIHtcclxuXHJcbiAgICAgICAgdGhpcy5hbnN3ZXJmaWVsZD1hbnN3ZXJmaWVsZDtcclxuICAgICAgICB0aGlzLnRhc2s9dGFzaztcclxuICAgICAgICB0aGlzLndvcmRzPXdvcmRzO1xyXG4gICAgICAgIHRoaXMucmVuZGVyVGFzayA9IHRoaXMucmVuZGVyVGFzay5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlclRhc2soKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY2hlY2tlcih2YWx1ZSkge1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgPT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFzay5jbGFzc0xpc3QgKz0gJyBjb3JyZWN0J1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFzay5jbGFzc0xpc3QgKz0gJyB3cm9uZydcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclRhc2soKSB7XHJcbiAgICAgICAgdGhpcy53b3JkID0gIE9iamVjdC5rZXlzKHRoaXMud29yZHMpW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChPYmplY3Qua2V5cyh0aGlzLndvcmRzKS5sZW5ndGgpKV07XHJcblxyXG4gICAgfVxyXG5cclxufSIsImxldCBvYmpBbnRvbnltID0ge1xyXG4gICAgXCLRh9C10YDQvdGL0LlcIjogWyfQsdC10LvRi9C5J10sXHJcbiAgICBcItGF0L7Qu9C+0LTQvdGL0LlcIjogWyfQs9C+0YDRj9GH0LjQuSddLFxyXG4gICAgXCLRgtGP0LbQtdC70YvQuVwiOiBbJ9C70LXQs9C60LjQuSddLFxyXG4gICAgXCLRgtGP0L3Rg9GC0YxcIjogWyfRgtC+0LvQutCw0YLRjCddLFxyXG4gICAgXCLQvdC40LfQutC40LlcIjogWyfQstGL0YHQvtC60LjQuSddLFxyXG4gICAgXCLRhdGD0LTQvtC5XCI6IFsn0YLQvtC70YHRgtGL0LknXSxcclxuICAgIFwi0YPQt9C60LjQuVwiOiBbJ9GI0LjRgNC+0LrQuNC5J10sXHJcbiAgICBcItCz0LvRg9C/0YvQuVwiOiBbJ9GD0LzQvdGL0LknXSxcclxuICAgIFwi0Y/RgdC90YvQuVwiOiBbJ9C/0LDRgdC80YPRgNC90YvQuSddLFxyXG4gICAgXCLQvdC+0YfRjFwiOiBbJ9C00LXQvdGMJ10sXHJcbiAgICBcItCz0YDRg9GB0YLQvdGL0LlcIjogWyfQstC10YHQtdC70YvQuSddXHJcblxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBvYmpBbnRvbnltOyIsImxldCBvYmpFeHRyYVdvcmRzID0ge1xyXG4gICAgXCLQutGA0LDRgdC90YvQuVwiOiBbJ9C10LYnLCAn0LrQvtGA0L7QstCwJywgJ9C30LDRj9GGJywgJ9C60YDQsNGB0L3Ri9C5JywgJ9GB0LvQvtC9J10sXHJcbiAgICBcItCx0LDQsdC+0YfQutCwXCI6IFsn0L/QvtC10LfQtCcsICfRgdCw0LzQvtC70LXRgicsICfQstC10YDRgtC+0LvQtdGCJywgJ9C80LDRiNC40L3QsCcsICfQsdCw0LHQvtGH0LrQsCddLFxyXG4gICAgXCLQvtCy0LDQu1wiOiBbJ9C00L7QvCcsICfQvtCy0LDQuycsICfQtNCy0L7RgNC10YYnLCAn0LPQsNGA0LDQticsICfRgdCw0YDQsNC5J10sXHJcbiAgICBcItGB0YLRgNC10LrQvtC30LBcIjogWyfRgdGC0YDQtdC60L7Qt9CwJywgJ9C+0LrRg9C90YwnLCAn0LrQsNGA0L8nLCAn0YnRg9C60LAnLCAn0LvQtdGJJ10sXHJcbiAgICBcItC00LXRgNC10LLQvlwiOiBbJ9GC0Y7Qu9GM0L/QsNC9JywgJ9C00LXRgNC10LLQvicsICfRgNC+0LzQsNGI0LrQsCcsICfQstCw0YHQuNC70LXQuicsICfQutC+0LvQvtC60L7Qu9GM0YfQuNC6J10sXHJcbiAgICBcItC60LLQsNC00YDQsNGCXCI6IFsn0LrQvtGI0LrQsCcsICfRgdC+0LHQsNC60LAnLCAn0LrQstCw0LTRgNCw0YInLCAn0LvQvtGI0LDQtNGMJywgJ9C60L7RgNC+0LLQsCddLFxyXG4gICAgXCLQstGC0L7RgNC90LjQulwiOiBbJ9C80LDQuScsICfQstGC0L7RgNC90LjQuicsICfQuNGO0LvRjCcsICfRj9C90LLQsNGA0YwnLCAn0YHQtdC90YLRj9Cx0YDRjCddLFxyXG4gICAgXCLQvNCw0LlcIjogWyfQstGC0L7RgNC90LjQuicsICfRgdGA0LXQtNCwJywgJ9Cy0L7RgdC60YDQtdGB0LXQvdGM0LUnLCAn0L/QvtC90LXQtNC10LvRjNC90LjQuicsICfQvNCw0LknXSxcclxuICAgIFwi0LfQuNC80LBcIjogWyfQvNCw0LknLCAn0LfQuNC80LAnLCAn0L7QutGC0Y/QsdGA0YwnLCAn0LDQv9GA0LXQu9GMJywgJ9Cw0LLQs9GD0YHRgiddLFxyXG4gICAgXCLRiNCw0YBcIjogWyfQutGA0YPQsycsICfQvtCy0LDQuycsICfRgtGA0LXRg9Cz0L7Qu9GM0L3QuNC6JywgJ9C60LLQsNC00YDQsNGCJywgJ9GI0LDRgCddLFxyXG4gICAgXCLQutC90LjQs9CwXCI6IFsn0YHRgtC+0LsnLCAn0YHRgtGD0LsnLCAn0LrQvdC40LPQsCcsICfQutGA0L7QstCw0YLRjCcsICfRiNC60LDRhCddXHJcblxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBvYmpFeHRyYVdvcmRzOyIsImxldCBvYmpJbnB1dExldHRlciA9IHtcclxuICAgIFwi0LhcIjogWyfRiC4uLtGI0LrQsCddLFxyXG4gICAgXCLQvlwiOiBbJ9CzLi4u0YDRj9GH0LjQuSddLFxyXG4gICAgXCLQtFwiOiBbJ9C70LUuLi4nXSxcclxuICAgIFwi0LJcIjogWyfRgtGA0LAuLi7QutCwJ10sXHJcbiAgICBcItGEXCI6IFsn0YjQsNGALi4uJ10sXHJcbiAgICBcItCwXCI6IFsn0LouLi7RgNCw0L3QtNCw0YgnXSxcclxuICAgIFwi0LdcIjogWyfRgy4uLtC60LjQuSddLFxyXG4gICAgXCLQsVwiOiBbJ9C00YMuLi4nXSxcclxuICAgIFwi0LNcIjogWyfRgdC90LUuLi4nXSxcclxuICAgIFwi0YxcIjogWyfQvdC+0YcuLi4nXSxcclxuICAgIFwi0YtcIjogWyfRhi4uLtC/0LvQtdC90L7QuiddXHJcblxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBvYmpJbnB1dExldHRlcjsiLCJsZXQgb2JqTmV4dE51bWJlciA9IHtcclxuICAgIFwiMTFcIjogWycxJywgJzMnLCAnNScsICc3JywgJzknXSxcclxuICAgIFwiNVwiOiBbJzEwJywgJzknLCAnOCcsICc3JywgJzYnXSxcclxuICAgIFwiMTJcIjogWycyJywgJzQnLCAnNicsICc4JywgJzEwJ10sXHJcbiAgICBcIi0xMFwiOiBbJzAnLCAnLTInLCAnLTQnLCAnLTYnLCAnLTgnXSxcclxuICAgIFwiMjQzXCI6IFsnMScsICczJywgJzknLCAnMjcnLCAnODEnXSxcclxuICAgIFwiMlwiOiBbJzEnLCAnMicsICcxJywgJzInLCAnMSddLFxyXG4gICAgXCIzXCI6IFsnMjcnLCAnMjAnLCAnNycsICcxMycsICcxMCddLFxyXG4gICAgXCIxMTExMTFcIjogWycxJywgJzExJywgJzExMScsICcxMTExJywgJzExMTExJ10sXHJcbiAgICBcIjhcIjogWycyJywgJzMnLCAnNScsICczJywgJzUnXSxcclxuICAgIFwiMTRcIjogWycxJywgJzInLCAnNycsICc4JywgJzEzJ10sXHJcbiAgICBcIjdcIjogWycxJywgJzInLCAnMycsICc1JywgJzYnXVxyXG5cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgb2JqTmV4dE51bWJlcjsiLCJsZXQgb2JqVGFza3MgPSB7XHJcbiAgICBcItC00LjQutC+0LHRgNCw0LdcIjogJ9CB0LbQuNC6INCy0YvRgNC+0YEg0LIg0LTQtdGB0Y/RgtGMINGA0LDQtywg0L/QvtC70YPRh9C40LvRgdGPIOKApicsXHJcbiAgICBcItC10LbQuNC6XCI6ICfQkiDQutC70YPQsdC+0Log0YHQstC10YDQvdGR0YLRgdGPLCDQsCDQstC30Y/RgtGMINC90LUg0LTQsNGR0YLRgdGPLicsXHJcbiAgICBcItCx0LXQs9C10LzQvtGCXCI6ICfQoyDQvdC10LPQviDQvtCz0YDQvtC80L3Ri9C5INGA0L7Rgiwg0YnQvSDQt9C+0LLQtdGC0YHRjyDigKYnLFxyXG4gICAgXCLQsdC10LvQutCwXCI6ICfQn9C+INC00LXRgNC10LLRjNGP0Lwg0YHQutC+0Lot0YHQutC+0LosINCwINC+0YDQtdGI0LrQuCDRidGR0LvQui3RidGR0LvQui4nLFxyXG4gICAgXCLQstC10YDQsdC70Y7QtFwiOiAn0JfQstC10YDRjCDRjyDQs9C+0YDQsdCw0YLRi9C5LCDQsCDQvdGA0LDQstC70Y7RgdGMINGA0LXQsdGP0YLQsNC8JyxcclxuICAgIFwi0LXQttC40LpcIjogJ9Cf0L7Qu9C30YPQvSDQv9C+0LvQt9GR0YIsINC40LPQvtC70LrQuCDQstC10LfRkdGCLicsXHJcbiAgICBcItC10LbQuNC6XCI6ICfQn9C+0LQg0YHQvtGB0L3QsNC80LgsINC/0L7QtCDRkdC70LrQsNC80Lgg0LvQtdC20LjRgiDQvNC10YjQvtC6INGBINC40LPQvtC70LrQsNC80LguJyxcclxuICAgIFwi0LbQuNGA0LDRhFwiOiAn0JrQsNC60L7QtSDQttC40LLQvtGC0L3QvtC1INC+0YfQtdC90Ywg0LrRgNCw0YHQuNCy0L7QtSwg0YHQsNC80L7QtSDQstGL0YHQvtC60L7QtSwg0YHQsNC80L7QtSDQtNC70LjQvdC90L7QtT8nLFxyXG4gICAgXCLQt9C10LHRgNCwXCI6ICfQndCw0LTQtdC70Lgg0LrQvtC90Y/RiNC60Lgg0LzQvtGA0YHQutC40LUg0YDRg9Cx0LDRiNC60LguJyxcclxuICAgIFwi0LrQvtGA0L7QstCwXCI6ICfQodCw0LzQsCDQv9C10YHRgtGA0LDRjywg0LXRgdGCINC30LXQu9C10L3QvtC1LCDQtNCw0LXRgiDQsdC10LvQvtC1JyxcclxuICAgIFwi0LrQvtGCXCI6ICfQktGL0LPQvdGD0Lsg0YHQv9C40L3QutGDINC+0L0g0LTRg9Cz0L7QuSwg0LfQsNC80Y/Rg9C60LDQuy4g0JrRgtC+INGC0LDQutC+0Lk/JyxcclxuICAgIFwi0LrRgNC+0LrQvtC00LjQu1wiOiAn0J/QviDRgNC10LrQtSDQv9C70YvQstGR0YIg0LHRgNC10LLQvdC+INC+0YUg0Lgg0LfQu9GO0YnQtdC1INC+0L3QviEnLFxyXG4gICAgXCLQutGA0L7QutC+0LTQuNC7XCI6ICfQkiDRgNC10LrQsNGFINCQ0YTRgNC40LrQuCDQttC40LLRkdGCINC30LvQvtC5INC30LXQu9GR0L3Ri9C5INC/0LDRgNC+0YXQvtC0IScsXHJcbiAgICBcItC70LjRgdCwXCI6ICfQoyDQutC+0LPQviDQuNC3INC30LLQtdGA0LXQuSDRhdCy0L7RgdGCINC/0YPRiNC40YHRgtC10Lkg0Lgg0LTQu9C40L3QvdC10Lk/JyxcclxuICAgIFwi0LzQtdC00LLQtdC00YxcIjogJ9Cb0LXRgtC+0Lwg0L/QviDQu9C10YHRgyDQs9GD0LvRj9C10YIsINC30LjQvNC+0Lkg0LIg0LHQtdGA0LvQvtCz0LUg0L7RgtC00YvRhdCw0LXRgi4nLFxyXG4gICAgXCLQvNGL0YjQutCwXCI6J9Cc0LDQu9C10L3RjNC60LjQuSDRgNC+0YHRgiwg0LTQu9C40L3QvdGL0Lkg0YXQstC+0YHRgiwg0YHQtdGA0LDRjyDRiNGD0LHQutCwLCDQvtGB0YLRgNGL0LUg0LfRg9Cx0LrQuCdcclxuXHJcblxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBvYmpUYXNrczsiLCJsZXQgb2JqV29yZHMgPSB7XHJcbiAgICBcImNhdFwiOiBbJ9C60L7RgicsICfQutC+0YjQutCwJ10sXHJcbiAgICBcImRvZ1wiOiBbJ9C/0LXRgScsICfRgdC+0LHQsNC60LAnXSxcclxuICAgIFwibWlsa1wiOiBbJ9C80L7Qu9C+0LrQvicsICfQvNC+0LvQvtGH0L3Ri9C5J10sXHJcbiAgICBcImZsYXRcIjogWyfQutCy0LDRgNGC0LjRgNCwJywgJ9C/0LvQvtGB0LrQuNC5J10sXHJcbiAgICBcImhvdXNlXCI6IFsn0LTQvtC8JywgJ9C30LTQsNC90LjQtSddLFxyXG4gICAgXCJiYWdcIjogWyfQvNC10YjQvtC6JywgJ9GB0YPQvNC60LAnXSxcclxuICAgIFwibGVnXCI6IFsn0L3QvtCz0LAnLCAn0L3QvtC20LrQsCddLFxyXG4gICAgXCJyZWRcIjogWyfQutGA0LDRgdC90YvQuScsICfRgNGL0LbQuNC5J10sXHJcbiAgICBcInJhdFwiOiBbJ9C60YDRi9GB0LAnLCAn0L/RgNC10LTQsNGC0LXQu9GMJ10sXHJcbiAgICBcImJyZWFkXCI6IFsn0YXQu9C10LEnLCAn0L/QuNGJ0LAnXSxcclxuICAgIFwibW9ybmluZ1wiOiBbJ9GD0YLRgNC+JywgJ9C90LDRh9Cw0LvQviddLFxyXG4gICAgXCJ3aGl0ZVwiOiBbJ9Cx0LXQu9GL0LknLCAn0L/RgNC+0LfRgNCw0YfQvdGL0LknXSxcclxuICAgIFwid2hlZWxcIjogWyfQutC+0LvQtdGB0L4nLCAn0LrRgNGD0LMnXSxcclxuICAgIFwid2hhbGVcIjogWyfQutC40YInLCAn0LzQsNGB0YHQsCddLFxyXG4gICAgXCJsb3ZlXCI6IFsn0LvRjtCx0L7QstGMJywgJ9C00L7RgNC+0LPQsNGPJ10sXHJcbiAgICBcImhvdGVsXCI6IFsn0L7RgtC10LvRjCcsICfQs9C+0YHRgtC40L3QuNGG0LAnXSxcclxuICAgIFwic21pbGVcIjogWyfRg9C70YvQsdC60LAnLCAn0YPQu9GL0LHQsNGC0YzRgdGPJ10sXHJcbiAgICBcImJlYWNoXCI6IFsn0L/Qu9GP0LYnLCAn0L7RgtC80LXQu9GMJ10sXHJcbiAgICBcIm5vc2VcIjogWyfQvdC+0YEnLCAn0LDRgNC+0LzQsNGCJ10sXHJcbiAgICBcImFybVwiOiBbJ9GA0YPQutCwJywgJ9GA0YvRh9Cw0LMnXSxcclxuICAgIFwiZW5kXCI6IFsn0LrQvtC90LXRhicsICfQvtC60L7QvdGH0LDQvdC40LUnXSxcclxuICAgIFwiYmVnaW5cIjogWyfQvdCw0YfQuNC90LDRgtGMJywgJ9C30LDQstGP0LfQsNGC0YwnXSxcclxuICAgIFwiYnVzXCI6IFsn0LDQstGC0L7QsdGD0YEnLCAn0YjQuNC90YsnXSxcclxuICAgIFwiY2FyXCI6IFsn0LzQsNGI0LjQvdCwJywgJ9Cw0LLRgtC+0LzQvtCx0LjQu9GMJ10sXHJcbiAgICBcInRyYWluXCI6IFsn0L/QvtC10LfQtCcsICfRgdC+0YHRgtCw0LInXSxcclxuICAgIFwic2t5XCI6IFsn0L3QtdCx0L4nLCAn0L3QtdCx0LXRgdCwJ11cclxuXHJcblxyXG5cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgb2JqV29yZHM7IiwiZXhwb3J0IGRlZmF1bHQgIGNsYXNzIERyYXdNb25zdGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuaGVhbHRoID0gMTAwO1xyXG5cclxuICAgICAgICB0aGlzLnJlZHJhdyA9IHRoaXMucmVkcmF3LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCbGluayA9IHRoaXMudXBkYXRlQmxpbmsuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUJyZWF0aCA9IHRoaXMudXBkYXRlQnJlYXRoLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5ibGluayA9IHRoaXMuYmxpbmsuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmRyYXdFbGxpcHNlID0gdGhpcy5kcmF3RWxsaXBzZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcblxyXG4gICAgICAgIHRoaXMuaW1hZ2VzID0ge307XHJcbiAgICAgICAgdGhpcy50b3RhbFJlc291cmNlcyA9IDY7XHJcbiAgICAgICAgdGhpcy5udW1SZXNvdXJjZXNMb2FkZWQgPSAwO1xyXG4gICAgICAgIHRoaXMuZnBzID0gMzA7XHJcbiAgICAgICAgdGhpcy5jaGFyWCA9IDEwO1xyXG4gICAgICAgIHRoaXMuY2hhclkgPSAxMDA7XHJcbiAgICAgICAgdGhpcy54ID0gdGhpcy5jaGFyWDtcclxuICAgICAgICB0aGlzLnkgPSB0aGlzLmNoYXJZO1xyXG4gICAgICAgIHRoaXMuYnJlYXRoSW5jID0gMC4xO1xyXG4gICAgICAgIHRoaXMuYnJlYXRoRGlyID0gMTtcclxuICAgICAgICB0aGlzLmJyZWF0aEFtdCA9IDA7XHJcbiAgICAgICAgdGhpcy5icmVhdGhNYXggPSAyO1xyXG4gICAgICAgIHRoaXMuYnJlYXRoSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLnVwZGF0ZUJyZWF0aCwgMTAwMCAvIHRoaXMuZnBzKTtcclxuICAgICAgICB0aGlzLm1heEV5ZUhlaWdodCA9IDE0O1xyXG4gICAgICAgIHRoaXMuY3VyRXllSGVpZ2h0ID0gdGhpcy5tYXhFeWVIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5leWVPcGVuVGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy50aW1lQnR3QmxpbmtzID0gNDAwMDtcclxuICAgICAgICB0aGlzLmJsaW5rVXBkYXRlVGltZSA9IDIwMDtcclxuXHJcbiAgICAgICAgdGhpcy5ibGlua1RpbWVyID0gc2V0SW50ZXJ2YWwodGhpcy51cGRhdGVCbGluaywgdGhpcy5ibGlua1VwZGF0ZVRpbWUpO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRNb25zdGVyICgpO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgaW5pdE1vbnN0ZXIgKCkge1xyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZU5hbWUoKTtcclxuICAgICAgICB0aGlzLmZhY2UgPSB0aGlzLnJhbmRvbUludGVnZXIoMSwgNCk7XHJcbiAgICAgICAgdGhpcy50b3JzbyA9IHRoaXMucmFuZG9tSW50ZWdlcigxLCA0KTtcclxuICAgICAgICB0aGlzLmxlZnRBcm0gPSB0aGlzLnJhbmRvbUludGVnZXIoMSwgNCk7XHJcbiAgICAgICAgdGhpcy5yaWdodEFybSA9IHRoaXMucmFuZG9tSW50ZWdlcigxLCA0KTtcclxuICAgICAgICB0aGlzLmxlZ3MgPSB0aGlzLnJhbmRvbUludGVnZXIoMSwgNCk7XHJcbiAgICAgICAgdGhpcy53ZWFwb24gPSB0aGlzLnJhbmRvbUludGVnZXIoMSwgNCk7XHJcbiAgICAgICAgdGhpcy5sb2FkSW1hZ2UoXCJsYXJtXCIgKyB0aGlzLmxlZnRBcm0pO1xyXG4gICAgICAgIHRoaXMubG9hZEltYWdlKFwibGVnc1wiICsgdGhpcy5sZWdzKTtcclxuICAgICAgICB0aGlzLmxvYWRJbWFnZShcInRvcnNvXCIgKyB0aGlzLnRvcnNvKTtcclxuICAgICAgICB0aGlzLmxvYWRJbWFnZShcInJhcm1cIiArIHRoaXMucmlnaHRBcm0pO1xyXG4gICAgICAgIHRoaXMubG9hZEltYWdlKFwiZmFjZVwiICsgdGhpcy5mYWNlKTtcclxuICAgICAgICB0aGlzLmxvYWRJbWFnZShcIndlYXBvblwiICsgdGhpcy53ZWFwb24pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByYW5kb21JbnRlZ2VyKG1pbiwgbWF4KSB7XHJcbiAgICAgICAgbGV0IHJhbmQgPSBtaW4gLSAwLjUgKyBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpO1xyXG4gICAgICAgIHJhbmQgPSBNYXRoLnJvdW5kKHJhbmQpO1xyXG4gICAgICAgIHJldHVybiByYW5kO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU5hbWUoKSB7XHJcbiAgICAgICAgbGV0IGZpcnN0TmFtZU1vbnN0ZXIgPSBbJ9CR0L7Qu9GM0YjQvtC5JywgJ9Ca0YDRg9Cz0LvRi9C5JywgJ9Ce0LPRgNC+0LzQvdGL0LknLCAn0JfQu9C+0LHQvdGL0LknLCAn0JDQsdGL0LrQsNC60L7QuSddLFxyXG4gICAgICAgICAgICBzZWNvbmROYW1lTW9uc3RlciA9IFsn0JvQuNC/0LrQuNC5JywgJ9Cc0Y/RgtC90YvQuScsICfQktC60YPRgdC90YvQuScsICfQm9C10LTRj9C90L7QuScsICfQnNC10L3RgtC+0LvQvtCy0YvQuSddLFxyXG4gICAgICAgICAgICB0aGlyZE5hbWVNb25zdGVyID0gWyfQlNCy0L7RgNC10YbQutC40LknLCAn0JrQsNGA0LDRh9GD0L0nLCAn0JHRg9GA0LfRg9C9JywgJ9Cb0LjQutCy0LDRhycsICfQnNC+0YDQtNCw0YcnXTtcclxuXHJcbiAgICAgICAgdGhpcy5tb25zdGVyTmFtZSA9IGZpcnN0TmFtZU1vbnN0ZXJbdGhpcy5yYW5kb21JbnRlZ2VyKDAsIDQpXSArICcgJyArIHNlY29uZE5hbWVNb25zdGVyW3RoaXMucmFuZG9tSW50ZWdlcigwLCA0KV0gKyAnICcgKyB0aGlyZE5hbWVNb25zdGVyW3RoaXMucmFuZG9tSW50ZWdlcigwLCA0KV07XHJcblxyXG4gICAgICAgIGxldCBlbGVtZW50TW9uc3Rlck5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaE1vbnN0ZXJOYW1lJyk7XHJcblxyXG4gICAgICAgIGVsZW1lbnRNb25zdGVyTmFtZS5pbm5lclRleHQ9dGhpcy5tb25zdGVyTmFtZTtcclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBsb2FkSW1hZ2UobmFtZSkge1xyXG5cclxuICAgICAgICB0aGlzLmltYWdlc1tuYW1lXSA9IG5ldyBJbWFnZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmltYWdlc1tuYW1lXS5vbmxvYWQgPSAgKCk9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2VMb2FkZWQoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmltYWdlc1tuYW1lXS5zcmMgPSBcImltYWdlcy9tb25zdGVyL1wiICsgbmFtZSArIFwiLnBuZ1wiO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXNvdXJjZUxvYWRlZCgpIHtcclxuICAgICBsZXQgb2JqPXRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMubnVtUmVzb3VyY2VzTG9hZGVkICs9IDE7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm51bVJlc291cmNlc0xvYWRlZCA9PT0gdGhpcy50b3RhbFJlc291cmNlcykge1xyXG4gICAgICAgICAgICAgICAgc2V0SW50ZXJ2YWwodGhpcy5yZWRyYXcsIDEwMDAgLyB0aGlzLmZwcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZWRyYXcoKSB7XHJcblxyXG4gICAgICAgIGNhbnZhc0Zvck1vbnN0ZXIud2lkdGggPSBjYW52YXNGb3JNb25zdGVyLndpZHRoO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2VzW1wibGFybVwiICsgdGhpcy5sZWZ0QXJtXSwgdGhpcy54ICsgMCwgdGhpcy55IC0gNDIgLSB0aGlzLmJyZWF0aEFtdCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlc1tcImxlZ3NcIiArIHRoaXMubGVnc10sIHRoaXMueCwgdGhpcy55LTYwKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2VzW1widG9yc29cIiArIHRoaXMudG9yc29dLCB0aGlzLngsIHRoaXMueSAtIDUwKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2VzW1wiZmFjZVwiICsgdGhpcy5mYWNlXSwgdGhpcy54IC0gMTAsIHRoaXMueSAtIDcwIC0gdGhpcy5icmVhdGhBbXQpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2UodGhpcy5pbWFnZXNbXCJ3ZWFwb25cIiArIHRoaXMud2VhcG9uXSwgdGhpcy54IC0gMCwgdGhpcy55IC0gNTAgLSB0aGlzLmJyZWF0aEFtdCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZSh0aGlzLmltYWdlc1tcInJhcm1cIiArIHRoaXMucmlnaHRBcm1dLCB0aGlzLnggKyAxMCwgdGhpcy55IC0gNDIgLSB0aGlzLmJyZWF0aEFtdCk7XHJcblxyXG4gICAgICAgIHRoaXMuZHJhd0VsbGlwc2UodGhpcy54ICsgMTEwLCB0aGlzLnkgKyA3NSAtIHRoaXMuYnJlYXRoQW10LCA4LCB0aGlzLmN1ckV5ZUhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5kcmF3RWxsaXBzZSh0aGlzLnggKyAxOTksIHRoaXMueSArIDc1IC0gdGhpcy5icmVhdGhBbXQsIDgsIHRoaXMuY3VyRXllSGVpZ2h0KTtcclxuXHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGRyYXdFbGxpcHNlKGNlbnRlclgsIGNlbnRlclksIHdpZHRoLCBoZWlnaHQpIHtcclxuXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRleHQubW92ZVRvKGNlbnRlclgsIGNlbnRlclkgLSBoZWlnaHQgLyAyKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmJlemllckN1cnZlVG8oXHJcbiAgICAgICAgICAgIGNlbnRlclggKyB3aWR0aCAvIDIsIGNlbnRlclkgLSBoZWlnaHQgLyAyLFxyXG4gICAgICAgICAgICBjZW50ZXJYICsgd2lkdGggLyAyLCBjZW50ZXJZICsgaGVpZ2h0IC8gMixcclxuICAgICAgICAgICAgY2VudGVyWCwgY2VudGVyWSArIGhlaWdodCAvIDIpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRleHQuYmV6aWVyQ3VydmVUbyhcclxuICAgICAgICAgICAgY2VudGVyWCAtIHdpZHRoIC8gMiwgY2VudGVyWSArIGhlaWdodCAvIDIsXHJcbiAgICAgICAgICAgIGNlbnRlclggLSB3aWR0aCAvIDIsIGNlbnRlclkgLSBoZWlnaHQgLyAyLFxyXG4gICAgICAgICAgICBjZW50ZXJYLCBjZW50ZXJZIC0gaGVpZ2h0IC8gMik7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVwZGF0ZUJyZWF0aCgpIHtcclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmJyZWF0aERpciA9PT0gMSkgeyAgLy8gYnJlYXRoIGluXHJcbiAgICAgICAgICAgIHRoaXMuYnJlYXRoQW10IC09IHRoaXMuYnJlYXRoSW5jO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5icmVhdGhBbXQgPCAtdGhpcy5icmVhdGhNYXgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnJlYXRoRGlyID0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgeyAgLy8gYnJlYXRoIG91dFxyXG4gICAgICAgICAgICB0aGlzLmJyZWF0aEFtdCArPSB0aGlzLmJyZWF0aEluYztcclxuICAgICAgICAgICAgaWYgKHRoaXMuYnJlYXRoQW10ID4gdGhpcy5icmVhdGhNYXgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnJlYXRoRGlyID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgdXBkYXRlQmxpbmsoKSB7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmV5ZU9wZW5UaW1lICs9IHRoaXMuYmxpbmtVcGRhdGVUaW1lO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5leWVPcGVuVGltZSA+PSB0aGlzLnRpbWVCdHdCbGlua3MpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYmxpbmsoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYmxpbmsoKSB7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmN1ckV5ZUhlaWdodCAtPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLmN1ckV5ZUhlaWdodCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXllT3BlblRpbWUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmN1ckV5ZUhlaWdodCA9IHRoaXMubWF4RXllSGVpZ2h0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5ibGluaywgMTApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3U3BlbGwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcyxzcGVsbHR5cGU9MSkge1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgdGhpcy5wb3MgPSBbMCwgMF07XHJcbiAgICAgICAgdGhpcy5zdGFydF9wb3M9MTA7XHJcbiAgICAgICAgdGhpcy5zaXplID0gWzQyMCwgMjY2XTtcclxuICAgICAgICB0aGlzLnNwZWVkID0gMTtcclxuICAgICAgICB0aGlzLmZyYW1lcyA9IFswLCAwLDEsIDIsIDMsIDRdO1xyXG4gICAgICAgIHRoaXMuX2luZGV4ID0gMDtcclxuICAgICAgICB0aGlzLmRpciA9ICdob3Jpem9udGFsJztcclxuICAgICAgICB0aGlzLm9uY2UgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLnNwZWxsU3ByaXRlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5zcGVsbFNwcml0ZS5zcmMgPSBcImltYWdlcy93YXRlckJhbGxzcHJpdGUucG5nXCI7XHJcbiAgICAgICAgaWYgKHNwZWxsdHlwZT09MikgdGhpcy5zcGVsbFNwcml0ZS5zcmMgPSBcImltYWdlcy9maXJlQmFsbHNwcml0ZS5wbmdcIjtcclxuICAgICAgICBpZiAoc3BlbGx0eXBlPT0zKSB0aGlzLnNwZWxsU3ByaXRlLnNyYyA9IFwiaW1hZ2VzL3NsaW1lQmFsbHNwcml0ZS5wbmdcIjtcclxuICAgICAgICBpZiAoc3BlbGx0eXBlPT00KSB0aGlzLnNwZWxsU3ByaXRlLnNyYyA9IFwiaW1hZ2VzL2xpZ2h0bmluZ0JhbGxzcHJpdGUucG5nXCI7XHJcbiAgICAgICAgaWYgKHNwZWxsdHlwZT09NSkgdGhpcy5zcGVsbFNwcml0ZS5zcmMgPSBcImltYWdlcy9wbGF6bWFCYWxsc3ByaXRlLnBuZ1wiO1xyXG5cclxuICAgICAgICBpZiAoc3BlbGx0eXBlPT02KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlbGxTcHJpdGUuc3JjID0gXCJpbWFnZXMvbW9uc3RlcnNwZWxsLnBuZ1wiO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0X3BvcyA9IDQwMDtcclxuICAgICAgICAgICAgdGhpcy5faW5kZXggPSA1O1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXIgPSB0aGlzLnJlbmRlci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuc2NhbGUoLTEsMSk7XHJcblxyXG5cclxuICAgICAgICBsZXQgcnVuID0gc2V0SW50ZXJ2YWwoKCkgPT4ge3RoaXMudXBkYXRlKDEpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcih0aGlzLmNvbnRleHQpO1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5faW5kZXgpPjUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwocnVuKTtcclxuXHJcbiAgICAgICAgICAgIH19LDEwMCApXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHRoaXMuX2luZGV4ICs9IHRoaXMuc3BlZWQgKiBkdDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKGN0eCkge1xyXG4gICAgICAgIGxldCBmcmFtZTtcclxuICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5jYW52YXMud2lkdGg7XHJcblxyXG4gICAgICAgICAgICBsZXQgbWF4ID0gdGhpcy5mcmFtZXMubGVuZ3RoO1xyXG4gICAgICAgICAgICBsZXQgaWR4ID0gTWF0aC5hYnMoTWF0aC5mbG9vcih0aGlzLl9pbmRleCkpO1xyXG4gICAgICAgICAgICBmcmFtZSA9IHRoaXMuZnJhbWVzW2lkeCAlIG1heF07XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5vbmNlICYmIGlkeCA+PSBtYXgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHggPSB0aGlzLnBvc1swXTtcclxuICAgICAgICBsZXQgeSA9IHRoaXMucG9zWzFdO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5kaXIgPT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICB5ICs9IGZyYW1lICogdGhpcy5zaXplWzFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgeCArPSBmcmFtZSAqIHRoaXMuc2l6ZVswXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5zcGVsbFNwcml0ZSxcclxuICAgICAgICAgICAgeCwgeSxcclxuICAgICAgICAgICAgdGhpcy5zaXplWzBdLCB0aGlzLnNpemVbMV0sXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRfcG9zK3RoaXMuX2luZGV4KjEwMC0xMDAsIDIwMCxcclxuICAgICAgICAgICAgdGhpcy5zaXplWzBdLzIsIHRoaXMuc2l6ZVsxXS8yKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9
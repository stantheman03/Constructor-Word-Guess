var Word = require('./Word.js')
var inquirer = require('inquirer')
var Bank = [
    'goku', 'vegeta', 'krillan', 'freeza',
    'cooler', 'napa', 'cell', 'android18', 'brolly'
];

var guesses;
var pickedWords;
var word;
var pickedWord;

function init(){
    pickedWords = []
    guesses = 15;
    if(pickedWords.length < Bank.length){
        pickedWord = getWord();
    }else{
        console.log('you know a lot about dragon ball')
        continuePrompt();
    }
    if(pickedWord){
        word = new word(pickedWord)
        word.createLetters();
        makeGuess();
    }
}

function getWord(){
    var random = Math.floor(Math.random()* Bank.length);
    var randomWord = Bank[random];
    if(pickedWords.indexOf(randomWord) === -1){
        pickedWords.push(randomWord)
    }else{
        return getWord()
    }
}

function makeGuess(){
    var checker = [];
    inquirer.prompt([
        {
            name: 'gussedLetter',
            message: word.update() +
            "\nGuess a Letter!" +
            '\nGuess Left:' + guesses
        }
    ]).then(function(data){
        word.letters.forEach(function(){
            letter.chekLetter(data.guessesLetter);
            checker.push(letter.Character());
        });
        if(guesses === 0){
            console.log('you ran out of lives, GAME OVER')
            continuePrompt()
        }else{
            makeGuess()
        }
    })
}

function continuePrompt(){
    inquirer.prompt([
        {
            name: 'continue',
            type: 'list',
            message: ' Would like to play again',
            choices: ['Yes', 'No']
        }
    ]).then(function(data){
        if(data.continue === 'Yes'){
            init()
        }else{
            console.log('Thnaks for playing')
        }
    })
}

init()
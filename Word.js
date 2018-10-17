// Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:


// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
var Letter = require('./Letter.js')
function Word(word){
    this.word = word;
    this.letters = []
    this.createLetters = function(){
        var wordArray = this.word.split('');
        for(i=o;i<wordArray.length;i++){
            var newLetter = new Letter(wordArray[i])
            this.letters.push(newLetter)
        }
    }
    this.makeGuess = function(guess){
        this.letters.forEach(letter =>{
            letter.checkLetters(guess);
        })
    }
    this.update = function(){
        var printedWord = '';
        this.letters.forEach(letter =>{
            printedWord += letter.Character()
        })
    }
}
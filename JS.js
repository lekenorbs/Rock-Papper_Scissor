// Challange One: Your Age in Days
function ageInDays() {
    var name = prompt("Enter your name please");
    var currentYear = prompt("Please " + name +" kindly enter the current year ");
    var birthYear = prompt("Please " + name +" kindly enter your birth year");
    var age = currentYear - birthYear;
    var theAgeInDays = age * 365;
   // console.log("Hello " + name + " you are " +age +" years old");
    //console.log("Your age in days is " + ageInDays + " days");
    //console.log("Thank you " + name + " for participating in this challange");
    var h1 = document.createElement("h1"); // create a html element called h1.
    var answer = document.createTextNode("Hello " + name + " you are " + theAgeInDays + " days old") // create a text answer and assign to answer
    h1.setAttribute("id", "theAgeInDays"); // set the attributes of the newly created h1 element
    h1.appendChild(answer);
    document.getElementById("flexbox_result").appendChild(h1);
}

function reset() {
    document.getElementById("theAgeInDays").remove();
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------
// Challenge Two
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex_cat_gen');
    image.src="https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

function removeCat() {
    document.getElementById('flex_cat_gen').remove();
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------
// Challenge 3: Rock Papper Scissors
function rpsGame(yourChoice){
    var humanChoice, botChoice;
    humanChoice = yourChoice.id; // choice can be rock, papper or scissor
    botChoice = numToChoice(randNumGen()); // The computer has to choose randomly.

    result = determineWinner(humanChoice, botChoice); // Returns an array. eg [0 1], [1 0] or [0.5 0.5] for you lost, you win and tie respectively. 
    
    message = finalMessage(result); //Returns a dictionary / object (in JS) indicating the message and color eg. {'message':"You Won!", 'color':"Green"}
    rpsFrontEnd(yourChoice.id, botChoice, message); // The frontEnd function which displays the two choices (human and bot choices)

/* Now lets code the various functions
 * result(humanChoice, botChoice)
 * message(result)
 * rpsFrontEnd(yourChoice.id, botChoice, message)
 */
}

// Function generates a random number between 0 and 2

function randNumGen() {
    return Math.floor(Math.random() * 3);
}
// function uses the random number generated above to set a choice between three options.
function numToChoice(number) {
    return ['rock', 'paper', 'scissor'][number];
}

//  Function determines the winner between human and robot
function determineWinner(humanChoice, botChoice) {
    var rpsDatabase = { // Database used to set winning criterias. 
        'rock': {'paper': 0, 'rock': 0.5, 'scissor': 1 }, // Rock looses to paper, draws with rock and wins against scissor
        'paper': {'paper': 0.5, 'rock': 1, 'scissor': 0 }, // Paper draws with paper, wins against rock and looses to scissor
        'scissor': {'paper': 1, 'rock': 0, 'scissor': 0.5 },// Scissor wins agains paper, looses to rock and draws to scissor
    };

    var yourScore = rpsDatabase[humanChoice][botChoice]; // generates an array of choices
    var botScore = rpsDatabase[botChoice][humanChoice];

    return [yourScore, botScore]; // returns the array of choices
}

// function prints final message base on the winner
function finalMessage([yourScore, botScore]){
    if (yourScore === 0)
        return { 'message': 'You Lost!', 'color': '#e60000' }
    else if (yourScore === 1)
        return { 'message': 'You Won', 'color': '#0000ff' }
    else
        return { 'message': 'Its a Draw', 'color':'#e600e6'}
}

//function works on the frontEnd
function rpsFrontEnd(yourChoice, botChoice, finalMessage) {
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src,
    };
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();


    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[yourChoice] + "' height=150, width=150 style ='box-shadow: 0px 10px 50px rgba(0, 0, 250, 1)'>"
    botDiv.innerHTML = "<img src='" + imageDatabase[botChoice] + "' height=150, width=150 style='box-shadow: 10px 10px 50px rgba(250,0,0,1)'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; + font-size:60px; padding:30px;'>" + finalMessage['message'] + "</h1"

    document.getElementById('rps-flex-div').appendChild(humanDiv);
    document.getElementById('rps-flex-div').appendChild(messageDiv);
    document.getElementById('rps-flex-div').appendChild(botDiv);
    
} 
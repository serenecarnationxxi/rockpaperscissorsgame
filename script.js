
let player_score = 0;
let computer_score = 0;

let player_choose = "";
let computer_choose = "";

const announcer = document.getElementById('winner')

const p_choose = document.getElementById('player_choose');
const c_choose = document.getElementById('computer_choose');
const p_score = document.getElementById('player_score');
const c_score = document.getElementById('computer_score');

// Create an audio object
const player_win_sound = new Audio('sounds/player_win.wav');
const computer_win_sound = new Audio('sounds/computer_win.wav');
const draw_game_sound = new Audio('sounds/draw_sound.wav');


// Select all three buttons
const button_rock = document.getElementById('rock');
const button_paper = document.getElementById('paper');
const button_scissors = document.getElementById('scissors');
const button_reset = document.getElementById('reset');

// Add click event listeners to each button
button_rock.addEventListener('click', () => {
  console.log('Player: ROCK');
  randomizer()
  player_choose = "ROCK";
  console.log('Computer', computer_choose);
  loading();

});

button_paper.addEventListener('click', () => {
  console.log('Player: PAPER');
  randomizer()
  player_choose = "PAPER";
  console.log('Computer', computer_choose);
  loading();

});

button_scissors.addEventListener('click', () => {
  console.log('Player: SCISSORS');
  randomizer();
  player_choose = "SCISSORS";
  console.log('Computer', computer_choose);
  loading();

});

button_reset.addEventListener('click',() => {
    console.log('RESET');
    resetScore();
});

function resetScore(){
    if (player_score != 0 || computer_score != 0){
        player_score = 0;
        computer_score = 0;
        announcer.textContent = 'Choose!';
        announcer.style.color = 'rgb(254, 1, 1)';
        p_score.textContent = 'Player: 0';
        c_score.textContent = 'Computer. 0';
        p_choose.textContent = 'Player: ???';
        c_choose.textContent = 'Computer: ???';
        p_choose.style.color = 'rgba(189, 189, 189, 0.805)';
        c_choose.style.color = 'rgba(189, 189, 189, 0.805)';
        p_score.textContent = 'Player: ' + player_score;
        c_score.textContent = 'Computer: ' + computer_score;
        window.alert('Scores are reset!');
        

    } 
    else{
        window.alert('Both scores are zero, cannot be reset!');
    }
}


function randomizer(){
    const choose = ["ROCK", "PAPER", "SCISSORS"];
    const randomItem = choose[Math.floor(Math.random() * choose.length)];
    //console.log('Computer: ', randomItem);
    computer_choose = randomItem;
    return computer_choose;
    
}

function playerWins(){
    console.log('---Player Wins---')
    announcer.textContent = 'Player Wins! :)';
    announcer.style.color = 'rgb(132, 254, 1)';
    p_choose.textContent = 'Player: '+ player_choose;
    c_choose.textContent = 'Computer: ' + computer_choose;
    p_choose.style.color = 'rgb(132, 254, 1)';
    c_choose.style.color = 'rgb(255, 60, 0)';
    player_score +=1;
    p_score.textContent = 'Player: ' + player_score;
    player_win_sound.play();
    

}

function computerWins(){
    console.log('---Computer Wins---')
    announcer.textContent = 'Computer Wins! :(';
    announcer.style.color = 'rgb(254, 216, 1)';
    p_choose.textContent = 'Player: '+ player_choose;
    c_choose.textContent = 'Computer: ' + computer_choose;
    p_choose.style.color = 'rgb(255, 60, 0)';
    c_choose.style.color = 'rgb(132, 254, 1)';
    computer_score +=1;
    c_score.textContent = 'Computer: ' + computer_score;
    computer_win_sound.play();
    
}


function checkWinner(){
    if (player_choose == 'ROCK' && computer_choose == 'PAPER' ){
        computerWins();
    }
    else if (player_choose == 'PAPER' && computer_choose == 'ROCK'){
        playerWins();
    }
    else if (player_choose == 'ROCK' && computer_choose == 'SCISSORS'){
        playerWins();

    }
    else if (player_choose == 'SCISSORS' && computer_choose == 'ROCK'){
        computerWins();
    }
    else if (player_choose == 'SCISSORS' && computer_choose == 'PAPER'){
        playerWins();
    }
    else if (player_choose == 'PAPER' && computer_choose == 'SCISSORS'){
        computerWins();
    }
    else {
        console.log('---DRAW---');
        p_choose.textContent = 'Player: '+ player_choose;
        c_choose.textContent = 'Computer: ' + computer_choose;
        p_choose.style.color = 'lightgray';
        c_choose.style.color = 'lightgray';
        announcer.textContent = '-----DRAW-----';
        announcer.style.color = 'lightgray';
        draw_game_sound.play();


    }
    loadingMessage.textContent = '';
}

const loadingMessage = document.getElementById('loading');
function loading(){
    announcer.textContent = '';
    loadingMessage.textContent = 'Loading...';
    p_choose.textContent = '';
    c_choose.textContent = '';
    setTimeout(() => {
        


        checkWinner();
        

    },1250);


}


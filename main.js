$(document).ready(function() {
    var playerScore = 0;
    var botScore = 0;

    function computer() {
        var choices = ["Rock", "Paper", "Scissors"];
        return choices[Math.floor(Math.random() * 3)];
    }

    function chooseWinner(player, bot) {
        if (player === bot) {
            return "It's a Tie !!";
        } else if (
            (player === "Rock" && bot === "Scissors") ||
            (player === "Scissors" && bot === "Paper") ||
            (player === "Paper" && bot === "Rock")
        ) {
            playerScore++;
            return "You win! " + player + " beats " + bot + "!";
        } else {
            botScore++;
            return "You lose! " + bot + " beats " + player + "!";
        }
    }

    function displayImages(playerChoice, botChoice) {
       
        $('#images img').each(function() {
            this.style.display = 'none'
            
        });

      
        document.getElementById(playerChoice).style.display = 'block';
        document.getElementById(botChoice).style.display = 'block';
    }

    $('.choice').on('click', function() {
        var playerChoice = $(this).data('choice');
        var botChoice = computer();
        var result = chooseWinner(playerChoice, botChoice);

        displayImages(playerChoice, botChoice);
        document.getElementById('result').innerText = 'You chose ' + playerChoice + ', computer chose ' + botChoice + '. ' + result;
        document.getElementById('playerScore').innerText = 'Player Score: ' + playerScore;
        document.getElementById('botScore').innerText = 'Computer Score: ' + botScore;
    });
});
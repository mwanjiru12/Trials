function rollDice() {
    // Initialize the variable to hold the total number of gold coins won
    let goldCoins = 0;
    
    // Loop to simulate rolling the dice 10 times
    for (let i = 0; i < 10; i++) {
        // Generate a random number between 1 and 6 (inclusive) to simulate rolling a die
        const roll = Math.floor(Math.random() * 6) + 1;
        
        // Alert the user about the outcome of the roll
        alert('You roll a ' + roll + '.');
        
        // Check if the roll is a 1 (indicating game over)
        if (roll === 1) {
            alert('Game over, no more rolls!');
            // Exit the loop if the roll is 1
            break;
        }
        
        // Check if the roll is less than 5 (indicating no win)
        if (roll < 5) {
            // Skip the current iteration and proceed to the next roll
            continue;
        }
        
        // If the roll is 5 or 6, congratulate the user and award gold coins
        alert('Congratulations, you win ' + roll + ' gold coins!');
        goldCoins += roll; // Increment the total gold coins won
    }
    
    // Alert the user about the total number of gold coins won
    alert('You have won a total of ' + goldCoins + ' gold coins!');
}
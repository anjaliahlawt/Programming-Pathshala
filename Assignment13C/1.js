let playerCount = Number(prompt("Enter the number of players:"));
  if (Number.isNaN(playerCount))
   {
     alert("Invalid input. Please enter a number.");
   }
else 
{
  let players = [];
  for (let i = 0; i < playerCount; i++) 
    {
    let player = 
    {
      name: prompt(`Enter name of player ${i + 1}:`),
      score: Number(prompt(`Enter score of player ${i + 1}:`)),
    };

    if (Number.isNaN(player.score)) 
      {
        alert("Invalid input. Please enter a number for the score.");

      }
    players.push({ playerName: player.name, playerScore: player.score });
  }

  players.sort((a, b) => {
    if (b.playerScore === a.playerScore) {
      return a.playerName.localeCompare(b.playerName);
    }
    return b.playerScore - a.playerScore;
  });

  for (let i = 0; i < players.length; i++) {
    const name = players[i].playerName;
    const score = players[i].playerScore;
    document.write(`<h2>${name}: ${score}</h2>`);
  }
}

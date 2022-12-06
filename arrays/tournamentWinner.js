"use strict";

// loop thru each set of competitions
// determine the winner from results
// keep track of winners count in an object
// find max score and team from object
// TC = O(n) SC = O(k), k is the number of teams

function tournamentWinner(competitions, results) {
  let scores = {};

  for (let i = 0; i < competitions.length; i++) {
    if (results[i] === 1) {
      scores[competitions[i][0]] = (scores[competitions[i][0]] + 3) || 3;
    } else {
      scores[competitions[i][1]] = (scores[competitions[i][1]] + 3) || 3;
    }
  }

  let winner = "";
  let max = 0;

  for (let team in scores) {
    if (scores[team] > max) {
      winner = team;
      max = scores[team];
    }
  }

  return winner;
}


// loop thru each set of competitions
// determine the winner from results
// keep track of winners count in an object
// and keep track of winner along the way
// TC = O(n) SC = O(n)

function tournamentWinner(competitions, results) {
  let scores = {};
  let winner = "";
  let currMax = 0;

  for (let i = 0; i < competitions.length; i++) {
    const [homeTeam, awayTeam] = competitions[i];

    if (results[i] === 1) {
      scores[homeTeam] = (scores[homeTeam] + 3) || 3;

      if (scores[homeTeam] > currMax) {
        winner = homeTeam;
        currMax = scores[homeTeam];
      }
    } else {
      scores[awayTeam] = (scores[awayTeam] + 3) || 3;

      if (scores[awayTeam] > currMax) {
        winner = awayTeam;
        currMax = scores[awayTeam];
      }
    }
  }

  return winner;
}
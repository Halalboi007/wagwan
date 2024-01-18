//coding out

var scores, roundscore, activePlayer, dice;

scores = [0,0];
roundscore = 0;
activePlayer = 1;


document.querySelector('#current-' + activePlayer). textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = <em> + dice + </em>;


//document.querySelector ('.hold').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function() {

   var dice = Math.floor(Math.random() * 6) +1;

document.querySelector ('.dice').style.display = 'block';


document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

if (dice !== 1) {
    roundscore += dice; 
    document.querySelector('#current-' + activePlayer).textContent = roundscore;


} else {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    document.getElementById('currentscore-0').textContent = 0;
    document.getElementById('currentscore-1').textContent = 0;

    document.querySelector('player-0-panel').classList.toggle(active);
    document.querySelector('player-1-panel').classList.toggle(active);

    //document.querySelector('player-0-panel').classList.remove(active);
   // document.querySelector('player-1-panel').classList.add(active);

}

}); 















































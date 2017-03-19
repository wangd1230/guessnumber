
var click = document.getElementById('btn');
var num;
var i =1;
function checkGuess() {
	var guessnum = document.getElementById('guess').value;
	var p = document.getElementById('result');
	if (i < 11) {
		if (guessnum == num) {
			p.innerHTML = 'succees!,play new game';
			document.getElementById('guess').value = "";
			restart();
		}
		else if(guessnum > num){
			p.innerHTML = 'big';
			document.getElementById('guess').value = "";
			i++;
			if (i == 11) {
				document.getElementById('result').innerHTML = 'failed,play again';
				restart();
			}
		}
		else if(guessnum < num){
			p.innerHTML = 'small';
			document.getElementById('guess').value = "";
			i++;
			if (i == 11) {
				document.getElementById('result').innerHTML = 'failed,play again';
				restart();
			}
		}
	}
}
function restart(){
	document.getElementById('guess').value = "";
	i = 1;
	start();
}
function start(){
	num = Math.floor(Math.random()*100);
	console.log(num);
}
start();


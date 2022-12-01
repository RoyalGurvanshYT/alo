function save()
{
var player1 = document.getElementById("player_1").value;

var player2 = document.getElementById("player_2").value;

localStorage.setItem("player_1" , player1);
localStorage.setItem("player_2" , player2);

window.location = "index.html";
}
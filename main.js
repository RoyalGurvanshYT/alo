var player1 = localStorage.getItem("player_1");
var player2 = localStorage.getItem("player_2");
var player_score1 = 0;
var player_score2 = 0;

document.getElementById("player_name1").innerHTML = player1 + ":";

document.getElementById("player_name2").innerHTML = player2 + ":";


document.getElementById("score_1").innerHTML = player_score1;
document.getElementById("score_2").innerHTML = player_score2;
document.getElementById("quest_1").innerHTML = "Question turn- " + player1;
document.getElementById("ans_1").innerHTML = "AnSwEr TuRn- " + player2;

function send()
{
  number1 = document.getElementById("inputword1").value;
  number2 = document.getElementById("inputword2").value;
  actual_answer = parseInt(number1)*parseInt(number2);
  console.log(actual_answer);
  question_number = "<h4>"+number1+" X "+number2+"</h4>";

  input_box = "<br> anser: <input type='text' id='input_check_box'>";
  check_button = "<br> <br> <button clas='btn btn-info' onclick='Check()'> CHACK IT </button>";
   row = question_number+input_box+check_button;
   document.getElementById("output").innerHTML = row;
   document.getElementById("inputword1").value = "";
   document.getElementById("inputword2").value = "";
}

var q_turn = "player_1";

var ans_turn  = "player_2";

function Check()
{

var get_ans = document.getElementById("input_check_box").value;

answer = get_ans.toLowerCase();

if (answer == actual_answer)
{

if (ans_turn == "player_1")
{
  player_score1 = player_score1 + 1;

  document.getElementById("score_1").innerHTML = player_score1;

}

 if (ans_turn == "player_2")
{
  player_score2 = player_score2 + 1;

  document.getElementById("score_2").innerHTML = player_score2;

}

}

if (q_turn == "player_1")
{
     q_turn = "player_2";

    document.getElementById("quest_1").innerHTML = "QUestIoN TurN = " + player2;

}

else {

  q_turn = "player_1";
  document.getElementById("quest_1").innerHTML = "QuEsTiOn TuRn =" + player1;
}

if (ans_turn == "player_1")
{
     ans_turn = "player_2";

    document.getElementById("ans_1").innerHTML = "AnSwEr TurN = " + player2;

}

else {

  ans_turn = "player_1";
  document.getElementById("ans_1").innerHTML = "AnSwEr TuRn =" + player1;
}


document.getElementById("output").innerHTML = "";
}



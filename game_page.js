player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name+":";
document.getElementById("player2_name").innerHTML = player2_name+":";
document.getElementById("player1score").innerHTML = player1_score;
document.getElementById("player2score").innerHTML = player2_score;

document.getElementById("Questionare_turn").innerHTML = "Asking:"+player1_name;
document.getElementById("Answerer_turn").innerHTML = "Answering:"+player2_name;

function send(){
word = document.getElementById("the_final_word").value;
lowercase_letters = word.toLowerCase();
console.log("lowercase finished:" + lowercase_letters);

charAt1 = lowercase_letters.charAt(1);
console.log(charAt1);

length_divide_2 = Math.floor(lowercase_letters.length/2);
charAt2 = lowercase_letters.charAt(length_divide_2);
console.log(charAt2);

length_final = lowercase_letters.length - 1;
charAt3 = lowercase_letters.charAt(length_final);
console.log(charAt3);

remove_charAt1 = lowercase_letters.replace(charAt1, "_");
remove_charAt2 = remove_charAt1.replace(charAt2, "_");
remove_charAt3 = remove_charAt2.replace(charAt3, "_");
console.log(remove_charAt3);

question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";
input_box = "<br> Answer: <input id='input_check_box' type='text'>";
button_finish = "<br> <br> <button class='btn btn-info' onclick='check()'> Confirm Answer </button>";
row = question_word + input_box + button_finish;

document.getElementById("output").innerHTML = row;

document.getElementById("the_final_word").value = "";
document.getElementById("the_final_word").placeholder = "Now see if your partner can guess the word!";
}

answer_turn = "player 2";
question_turn = "player 1";

function check(){
get_answer = document.getElementById("input_check_box").value;
answer = get_answer.toLowerCase();
console.log("answer ="+answer);

if(answer == lowercase_letters){
    if(answer_turn == "player 1"){
        player1_score = player1_score + 1;
        document.getElementById("player1score").innerHTML = player1_score;
    }
    else{
        player2_score = player2_score + 1;
        document.getElementById("player2score").innerHTML = player2_score;
    }
}


if(question_turn == "player 1"){
    question_turn = "player 2";
    document.getElementById("Questionare_turn").innerHTML = "Asking: " +player2_name;
}
else{
    question_turn = "player 1";
    document.getElementById("Questionare_turn").innerHTML = "Asking: "+player1_name;
}
if(answer_turn == "player 1"){
    answer_turn = "player 2";
    document.getElementById("Answerer_turn").innerHTML = "Answering: " +player2_name;
}
else{
    answer_turn = "player 1";
    document.getElementById("Answerer_turn").innerHTML = "Answering: "+player1_name;
}
document.getElementById("output").innerHTML = "";
document.getElementById("the_final_word").placeholder = "";
}

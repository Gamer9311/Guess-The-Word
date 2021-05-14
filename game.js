player1 = localStorage.getItem("player1");
player2 = localStorage.getItem("player2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1 + ": ";
document.getElementById("player2_name").innerHTML = player2 + ": ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "It is " + player1 + " ' s Question Turn!";
document.getElementById("player_answer").innerHTML = "It is " + player2 + " ' s Answer Turn!";

function send()
{
    get_word = document.getElementById("word").value;

    word = get_word.toLowerCase();
    console.log(word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    legnth_divide = Math.floor(word.length / 2);

    charAt2 = word.charAt(legnth_divide);
    console.log(charAt2);

    length_last = word.length - 1;

    charAt3 = word.charAt(length_last);
    console.log(charAt3);

    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");
    console.log(remove_charAt3);

    question_word = "<h3 id='word_display'>Q. " + remove_charAt3 + "</h3>";
    inputbox = "<br> Answer: <input type='text' id='input_answer' placeholder='Enter Your Answer Here!'>";
    check_button = "<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>";

    output = question_word + inputbox + check_button;
    document.getElementById("output").innerHTML = output;

    document.getElementById("word").value = "";
}

question_turn = "player1";

answer_turn = "player2";

function check()
{
    get_answer = document.getElementById("input_answer").value;

    answer = get_answer.toLowerCase();
    console.log(answer);

    if (answer == word)
    {
        if (answer_turn == "player1")
        {
            player1_score++;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else
        {
            player2_score++;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }

    if (question_turn == "player1")
    {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "It is " + player2 + " ' s Question Turn!";
    }
    else
    {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "It is " + player1 + " ' s Question Turn!";
    }

    if (answer_turn == "player1")
    {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "It is " + player2 + " ' s Answer Turn!";
    }
    else
    {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "It is " + player1 + " ' s Answer Turn!";
    }

    document.getElementById("output").innerHTML = "";
}

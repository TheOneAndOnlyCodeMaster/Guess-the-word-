function add_user(){

    player1_name = document.getElementById('P1_input').value;
    player2_name = document.getElementById('P2_input').value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location = "game_page.html";
}
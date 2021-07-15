<?php
session_start();
if (isset($_SESSION["user_login"])) {
    echo '<div hidden id="loggedin"><div><p>Zalogowano jako: ' . $_SESSION["user_login"] . '</p></div>';
    echo '<div><form action="' . $mainDir . 'logreg.php' . '" method="post">'
        . '<input type="hidden" value="logout" name="type_of_form" />'
        . '<input id="submitbutton" type="submit" value="Wyloguj"/></form></div>'
        //button usuń
        . '<div><button id="deletebutton" onclick="delete_function()" type="button">Usuń konto</button></div>'
        //potwierdź usunięcie
        . '<div id="delete_account" hidden><form action="' . $mainDir . 'logreg.php' . '" method="post">'
        . '<input type="hidden" value="delete_account" name="type_of_form" />'
        . '<input style="background-color: red;" id="submitbutton" type="submit" value="POTWIERDZAM USUNIĘCIE KONTA"/></form></div>'
        . '</div>';
    echo '<script>function delete_function(){'
        . 'const butt = document.getElementById("deletebutton");const mydiv=document.getElementById("delete_account");'
        . 'mydiv.hidden = !mydiv.hidden;'
        . 'if(mydiv.hidden){butt.innerText="Usuń konto";}else{butt.innerText="Schowaj";}'
        . '}</script>';
    if (time() - $_SESSION['timestamp'] > 5 * 60) {
        echo '<script>var butt = document.getElementById("submitbutton").click()</script>';
    } else {
        $_SESSION['timestamp'] = time();
        echo "<script>document.getElementById('loggedin').hidden=false;</script>";
    }
}

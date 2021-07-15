<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    include("../../db/dbcontext.php");
    add_post($_SESSION["user_login"], $_POST["post"], $_POST["site"]);
    header("Location: " . $_POST["redirectto"]);
}
function get_posts(string $sitename)
{
    $db = mysqli_connect("localhost", "website", "www3", "wwwdb");
    $toreturn = array();
    $result = $db->query("  SELECT p.post, p.timestamp, u.login FROM posts p 
                            join users u on p.user_id = u.id
                            WHERE site = '$sitename' order by timestamp DESC");
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            array_push($toreturn, array(
                "post" => $row["post"],
                "login" => $row["login"],
                "timestamp" => $row["timestamp"]
            ));
        }
    }

    mysqli_close($db);
    return $toreturn;
}
function create_comment_input()
{
    echo '<div style="border: 1px solid lightblue;">Dodaj komentarz: <br/><form style="padding:10px;" action="shared/postsmanager.php" method="post">'
        . '<label for="posttextarea">Komentarz:</label><br/><textarea id="posttextarea" name="post" rows="7" cols="50"></textarea>'
        . '<br/><input type="submit" value="Dodaj">'
        . '<input type="hidden" name="site" value="' . $GLOBALS["currentPageName"] . '">'
        . '<input type="hidden" name="redirectto" value="' . htmlspecialchars($_SERVER["PHP_SELF"]) . '">'
        . '</form></div>';
}

function create_comment_section()
{

    $comments = get_posts($GLOBALS["currentPageName"]);
    echo '<hr><div><b>Komentarze:</b></div><br/>';
    if (isset($_SESSION["user_login"])) {
        create_comment_input();
    }
    if (empty($comments)) {
        echo '<div><i>Brak komentarzy. Bądź pierwszy!</i></div>';
    } else {
        foreach ($comments as $tmpdict) {
            echo "<div style='border: 1px solid #e8e8e8; padding: 10px;'><b>"
                . $tmpdict["login"] . "</b>, " . $tmpdict['timestamp'] . "<br/>"
                . $tmpdict['post'] .  "</div>";
        }
    }
}

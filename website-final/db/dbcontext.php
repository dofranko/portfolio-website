<?php

function get_counter_today()
{
    $db = mysqli_connect("localhost", "website", "www3", "wwwdb");

    $toreturn = 0;
    $result = $db->query("select * from counter where date = '" . date("Y-m-d") . "'");
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $toreturn =  $row["counter"];
    }

    mysqli_close($db);
    return $toreturn;
}

function get_counter_all()
{
    $db = mysqli_connect("localhost", "website", "www3", "wwwdb");

    $toreturn = 0;
    $result = $db->query("SELECT sum(counter) as counter from counter");
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $toreturn =  $row["counter"];
    }

    mysqli_close($db);
    return $toreturn;
}
function user_entered()
{
    $db = mysqli_connect("localhost", "website", "www3", "wwwdb");

    $ip = get_ip_address();
    $db->query("call user_entered('" . $ip . "')");
    mysqli_close($db);
}

function get_ip_address()
{
    //whether ip is from the share internet  
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        $ip = $_SERVER['HTTP_CLIENT_IP'];
    }
    //whether ip is from the proxy  
    elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    }
    //whether ip is from the remote address  
    else {
        $ip = $_SERVER['REMOTE_ADDR'];
    }
    return $ip;
}

function login(string $login, string $password)
{
    $toret = false;
    $db = mysqli_connect("localhost", "website", "www3", "wwwdb");
    $result = $db->query("SELECT password from users where login='$login'");
    if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();
        if (password_verify($password, $row["password"])) {
            $toret = true;
        }
    }
    mysqli_close($db);
    return $toret;
}

function register(string $login, string $password, string $pass_confirm)
{
    $toret = false;
    if ($password != $pass_confirm) {
        return $toret;
    }
    $db = mysqli_connect("localhost", "website", "www3", "wwwdb");


    $result = $db->query("SELECT * from users where login='$login'");
    if ($result->num_rows == 0) {
        $hash =  password_hash($password, PASSWORD_DEFAULT);
        $db->query("INSERT into users(login, password) values('$login', '$hash')");
        $toret = true;
    }
    mysqli_close($db);
    return $toret;
}
function add_post(string $login, string $post, string $site)
{

    $toret = false;
    if (empty($post) || $post == "") {
        return $toret;
    }
    $db = mysqli_connect("localhost", "website", "www3", "wwwdb");

    $result = $db->query("SELECT id from users where login='$login'");
    if ($result && $result->num_rows > 0) {
        $loginid = $result->fetch_assoc()["id"];
    } else {
        return $toret;
    }

    $toret = $db->query("INSERT into posts(user_id, post, site) values ($loginid, '$post', '$site')");

    mysqli_close($db);
    return $toret;
}
function delete_account(string $login)
{
    $db = mysqli_connect("localhost", "website", "www3", "wwwdb");

    $db->query("CALL delete_user('$login')");
    mysqli_close($db);
}

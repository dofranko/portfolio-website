<!DOCTYPE html>
<html lang="pl">

<?php
$title = 'Dominik Frankowski - Logowanie i rejestracja';
$currentPageName = 'Login';
$mainDir = "./";
include("./shared/basics.php");
session_start();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	if ($_POST["type_of_form"] == "register") {
		if (register($_POST["login"], $_POST["password"], $_POST["confirm_password"])) {
			echo "<script>alert('Zarejestrowano!') </script>";
		} else {
			echo "<script>alert('Nie zarejestrowano') </script>";
		}
	} elseif ($_POST["type_of_form"] == "login") {
		if (login($_POST["login"], $_POST["password"])) {
			$_SESSION["user_login"] = $_POST["login"];
			$_SESSION['timestamp'] = time();
		} else {
			echo "<script>alert('Nie zalogowano') </script>";
		}
	} elseif ($_POST["type_of_form"] == "logout") {
		$_SESSION = array();
		session_destroy();
		header("location: index.php");
	} elseif ($_POST["type_of_form"] == "delete_account") {
		delete_account($_SESSION["user_login"]);
		$_SESSION = array();
		session_destroy();
		header("location: index.php");
	}
}
if (isset($_SESSION["user_login"])) {
	header("Location: ./index.php");
}
?>


<head>
	<?php
	include("./shared/head.php");
	?>
</head>

<body>

	<?php
	include("./shared/header.php");
	?>
	<?php
	include("./shared/navbar.php");
	?>

	<div class="main_container clearfix">

		<div>
			<article class="top_line">
				<h3>Logowanie i rejestracja</h3>
				<section>
					<h4>Logowanie</h4>
					<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
						<div>
							<label>Login</label>
							<input type="text" name="login">
						</div>
						<div>
							<label>Hasło</label>
							<input type="password" name="password">
						</div>
						<input type="hidden" value="login" name="type_of_form" />
						<div>
							<input type="submit" value="Submit">
						</div>
					</form>
				</section>
				<section>
					<h4>Rejestracja</h4>
					<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
						<div>
							<label>Login:</label>
							<input type="text" name="login">
						</div>
						<div>
							<label>Hasło: </label>
							<input type="password" name="password">
						</div>
						<div>
							<label>Potwierdź hasło:</label>
							<input type="password" name="confirm_password">
						</div>
						<input type="hidden" value="register" name="type_of_form" />
						<div>
							<input type="submit" value="Submit">
						</div>
					</form>
				</section>


			</article>
		</div>
	</div>
	<?php
	include("./shared/footer.php");
	?>
</body>

</html>
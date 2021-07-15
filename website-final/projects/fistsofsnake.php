<!DOCTYPE html>
<html lang="pl">
<?php
$title = 'Dominik Frankowski - Fists of Snake';
$currentPageName = 'FistsOfSnake';
$mainDir = "../";
include("../shared/basics.php");
?>

<head>
  <?php
  include($mainDir . "shared/head.php");
  ?>
</head>

<body>
  <?php
  include($mainDir . "shared/sessionmanager.php");
  ?>
  <?php
  include($mainDir . "shared/header.php");
  ?>
  <?php
  include("shared/navbar_one.php");
  ?>

  <div class="main_container clearfix">
    <div class="">
      <article>
        <h3>Fists of Snake</h3>
        <section>
          <h4>Gra pierwszoosobowa</h4>
          <div class="image_container">
            <a href="../resources/images/fistsofsnake.png" target="_blank">
              <img src="../resources/images/fistsofsnake.png" class="project_image" alt="Fists of Snake" />
            </a>
            <div class="desc">Grafika promująca</div>
          </div>
          <p>
            Na przedmiocie z programowania zespołowego zadaniem było dobrać
            się w zespoły i przygotować jaki projekt. W naszym 3-osobowym
            zespole uznaliśmy, że podejmiemy się jeszcze większego wyzwania
            niż do tej pory, czyli stworzenia gry 3D (!) przy użyciu silnika
            Unreal Engine 4.
          </p>
          <p>
            Można powiedzieć, że gra jest "klonem" np. CSGO. Nie da się ukryć,
            że zaczęrpnęliśmy kilka pomysłów na przebieg rozgrywki. Jednakże,
            jest to zupełnie inny silnik, inna technika, inne wsparcie i inne
            cele. Jedyną częścią wspólną jest tylko rozgrywka first-person
            oraz mechanika gry zespołowej.
          </p>
          <div class="github_link">
            Link(Github):
            <a href="https://github.com/dofranko/Fists-of-Snake-3D" target="_blank">Fists-of-Snake-3D</a>
          </div>
        </section>
      </article>
    </div>
    <div>
    </div>
    <?php
    include("shared/postsmanager.php");
    create_comment_section();
    ?>
  </div>

  <?php
  include($mainDir . "shared/footer.php");
  ?>
</body>

</html>
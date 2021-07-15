<!DOCTYPE html>
<html lang="pl">
<?php
$title = 'Dominik Frankowski - GoGame';
$currentPageName = 'GoGame';
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
        <h3>Go Game</h3>
        <section>
          <h4>Aplikacja do gry w GO</h4>
          <div class="image_container">
            <img src="../resources/images/gogame.jpg" class="project_image" alt="Go Game Project Image" />
            <div class="desc">Plansza do gry w Go</div>
          </div>
          <p>
            Na zajęciach z przedmiotu Technologia programowania jednym z zadań
            było stworzenie w dwuosobowych zespołach pełnej aplikacji, która
            umożliwi przeprowadzenie rozgrywki na zasadach gry planszowej GO.
          </p>
          <p>
            Aplikacja została napisana w języku Java na zasadzie relacji
            client-server z użyciem socketów. Umożliwia ona kilka rozgrywek
            jednocześnie (jedna rozgrywka jest na dwie osoby) na różnych
            urządzeniach w tej samej sieci lokalnej.
          </p>
          <div class="github_link">
            Link(Github):
            <a href="https://github.com/dofranko/Go-GoGame" target="_blank">Go_GoGame</a>
          </div>
        </section>
      </article>
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
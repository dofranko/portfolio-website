<!DOCTYPE html>
<html lang="pl">
<?php
$title = 'Dominik Frankowski - Projects';
$currentPageName = 'Projekty';
$mainDir = "./";
include("./shared/basics.php");
?>


<head>
  <?php
  include("./shared/head.php");
  ?>
</head>

<body>
  <?php
  include("./shared/sessionmanager.php");
  ?>
  <?php
  include("./shared/header.php");
  ?>
  <?php
  include("./shared/navbar.php");
  ?>

  <div class="main_container clearfix">
    <div class="">
      <article>
        <h3>Moje Projekty</h3>
        <section>
          <ul id="project_listing" class="main_listing">
            <li>
              <h4>Aplikacja do gry w GO</h4>

              <div class="li_desc">
                <p>
                  Aplikacja, która umożliwia przeprowadzenie rozgrywki na
                  zasadach planszowej gry Go.
                </p>
                <a class="project_link" href="projects/gogame.php">Więcej</a>
              </div>
            </li>
            <li>
              <h4>PyRarria</h4>

              <div class="li_desc">
                <p>
                  Gra napisana w języku python 3 przy użyciu biblioteki pygame
                  wzorowana na grze Terraria.
                </p>
                <a class="project_link" href="projects/pyrraria.php">Więcej</a>
              </div>
            </li>
            <li>
              <h4>Fists of Snake</h4>

              <div class="li_desc">
                <p>
                  Pierwszoosobowa gra shooter, multiplayer napisana na silniku
                  Unreal Engine 4.
                </p>
                <a class="project_link" href="projects/fistsofsnake.php">Więcej</a>
              </div>
            </li>
            <li>
              <h4>Kompilator maszyny wirtualnej</h4>

              <div class="li_desc">
                <p>
                  Kompilator dla języka maszyny wirtualnej napisany w języku
                  python 3 przy uzyciu biblioteki PLY.
                </p>
              </div>
            </li>
          </ul>
        </section>
      </article>
    </div>
  </div>
  <?php
  include("./shared/footer.php");
  ?>
</body>

</html>
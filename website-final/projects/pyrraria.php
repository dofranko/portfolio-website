<!DOCTYPE html>
<html lang="pl">
<?php
$title = 'Dominik Frankowski - PyRarria';
$currentPageName = 'PyRarria';
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
        <h3>PyRarria</h3>
        <section>
          <h4>Przygodowa gra 2D</h4>
          <div class="image_container">
            <a href="../resources/images/pyrraria.png" target="_blank">
              <img src="../resources/images/pyrraria.png" class="project_image" alt="PyRarria Game Image" />
            </a>
            <div class="desc">
              Screen z gry <br />(kliknij, by powiększyć)
            </div>
          </div>
          <p>
            Na zajęciach z wprowadzenia do języka Python mieliśmy miesiąc na jakiś projekt z wybranego tematu.
            W 5-osobowej drużynie uznaliśmy, że stworzymy grę 2D.
          </p>
          <p>
            Gra została napisana z użyciem biblioteki pygame. Jak można zauważyć, wzorowaliśmy się w dużym stopniu
            na popularnej grze Terraria - na co wskazuje również nazwa gry. Było to nasze pierwsze spotkanie z
            programowaniem tak interaktywnego i dynamicznego programu. Połowę naszego czasu musieliśmy przeznaczyć
            na zapoznanie z dokumentacją oraz eksperymenty z kodem. Drugą połowę musieliśmy przeznaczyć na debugowanie
            i usuwanie znaczących błędów 😉.
          </p>
          <p>
          <pre>
                    <code >def update(self):
    self.actual_terrain = Item.get_neighbours(
        self.player.position, 
        BLOCK_RENDER_DISTANCE, 
        self.grid, 
        noncollidable_objects=True
    )
    for block in self.actual_terrain:
        block.update()
                    </code>
                </pre>
          Jest to funkcja, z której jestem szczegolnie dumny. Pozwoliła na znaczną (!) optymalizację wczytywania, przetwarzania
          i wyświetlania terenu.
          </p>
          <div class="github_link">
            Link(Github):
            <a href="https://github.com/dofranko/python_game" target="_blank">python_game</a>
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
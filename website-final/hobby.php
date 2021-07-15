<!DOCTYPE html>
<html lang="pl">
<?php
$title = 'Dominik Frankowski - Hobbies';
$currentPageName = 'Hobby';
$mainDir = "./";
include("./shared/basics.php");
?>

<head>
  <title>Dominik Frankowski - Hobbies</title>
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
        <h3>Moje Hobby</h3>
        <section>
          <ul class="main_listing">
            <li>
              <h4>Game Development 🎮</h4>
              <div class="li_desc">
                <p>
                  Znajduję gry jako bardzo interesujący, wciągający i
                  pouczający sposób rozgrywki w obecnych czasach. Jako
                  "zjadacz" gier preferuję gry FPS, przygodowe, z dobrą fabułą
                  oraz głównie nastawione na odczucia single-player. Od strony
                  developmentu doświadczyłem już programowania w języku python
                  (biblioteka pygame, projekt PyRarria
                  <a href="https://github.com/dofranko/python_game" target="_blank">python_game</a>), projekt gry 3D na silniku Unreal Engine 4 oraz prostego
                  silnika 3D w javascript działający na zasadzie wireframe.
                </p>
              </div>
            </li>
            <li>
              <h4>C#/.NET</h4>
              <div class="li_desc">
                <p>
                  Pierwsze spotkanie z tym zestawem miałem na
                  <a href="https://kredek.dce.pwr.edu.pl/Kredek/Course" target="_blank">kursie</a>
                  Koła Naukowego
                  <em>
                    <a href="https://kredek.dce.pwr.edu.pl/Kredek" target="_blank">KREDEK</a>
                    - Creation And Development Group.
                  </em>
                  Od tamtej pory jestem wielkim fanem rozwiązań wprowadzanych
                  w tym zestawie (oraz) nie tylko prez Microsoft.
                </p>
              </div>
            </li>
            <li>
              <h4>Aplikacje mobilne</h4>
              <div class="li_desc">
                <p>
                  Do tej pory zaznajomiłem się w niewielkim stopniu z Android
                  Studio i Kotlinem... ale zdecydowanie planuję rozwój w tym
                  kierunku. Można oczekiwać mojej mobilnej aplikacji AR 😁🎮.
                </p>
              </div>
            </li>
          </ul>
        </section>
        <section class="top_line">
          <ul class="main_listing">
            <li>
              <h4>Klocki LEGO</h4>
              <div class="li_desc">
                <p>
                  Choć nie mam pokoju pełnego tych drobnych i łatwogubiących
                  się "zabawek" to jednak jestem wielkim fanem ich składania.
                  Jestem pod ogromnym wrażeniem jakie świetne kompozycje można
                  tworzyć z tak zwykłych "prostopadłościanów".
                </p>
              </div>
            </li>
            <li>
              <h4>Puzzle</h4>
              <div class="li_desc">
                <p>
                  Myślę, że ta rozrywka przyciąga mnie na podobnej zasadzie,
                  co LEGO. Choć w tym przypadku wymagane są znacznie większe
                  pokłady cierpliwości - kurde ja zecydowanie posiadam. W moim
                  pokoju (i nie tylko) wiszą różne dzieła - od prostych 500
                  elemntowych do nawet 3000 elementów!.
                </p>
              </div>
            </li>
          </ul>
        </section>
        <section>
          <h4>Fajny wzór matematyczny :D</h4>
          <p>
            $$\displaystyle{
            \int\frac{\Gamma^{x}(n)}{x^{n}}\mbox{d}x=
            \left|
            \begin{array}{ll}u=\Gamma^{x}(n) & v'=\frac{1}{x^{n}}
            \\ u'=\Gamma^{x}(n)\ln(\Gamma(n)) & v=\frac{1}{x^{n-1}(1-n)}
            \end{array}\right|=
            \frac{\Gamma^{x}(n)}{x^{n-1}(1-n)}-\frac{\ln(\Gamma(n))}{1-n}\int\frac{\Gamma^{x}(n)}{x^{n-1}}\mbox{d}x
            }$$
          </p>
          <iframe id="inlineFrameExample" title="Inline Frame Example" style="width: 100%;" height="1000" src="./web/index.html">
          </iframe>
        </section>
      </article>
    </div>
  </div>

  <?php
  include("./shared/footer.php");
  ?>
</body>

</html>
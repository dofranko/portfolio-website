<!DOCTYPE html>
<html lang="pl">

<?php
$title = 'Dominik Frankowski - Main informations';
$currentPageName = 'Home';
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
    <div>
      <img id="profile_picture" src="resources/images/bongo.png" alt="Zdjęcie profilowe" />
      <ul id="basic_info">
        <li>
          <h4>Dominik Frankowski</h4>
        </li>
        <li>Data urodzenia: 02.07.1999</li>
        <li>Miasto: Radwanice</li>
        <li>Student Politechniki Wrocławskiej</li>
      </ul>
    </div>
    <div>
      <article class="top_line">
        <h3>O mnie</h3>
        <section>
          <h4>Edukacja</h4>
          <p>
            Jestem studentem Informatyki trzeciego roku studiów inżynierskich
            Politechniki Wrocławskiej na Wydziale Podstawowych Problemów
            Techniki. Od drugiego semestry studiów jestem aktywnym członkiem
            koła naukowego
            <em>
              <a href="https://kredek.dce.pwr.edu.pl/Kredek" target="_blank">KREDEK</a>
              - Creation And Development Group.
            </em>
            Do Koła dołączyłem po tym, jak ukończyłem (prowadzony przez to
            Kredka)
            <a href="https://kredek.dce.pwr.edu.pl/Kredek/Course" target="_blank">kurs</a>
            z wyróżnieniem z zakresu programowania w jęzku C# w środowisku
            Visual Studio w technologii ASP.NET oraz MSSQL (edycja 2018-2).
          </p>
        </section>
        <section>
          <h4>Praca</h4>
          <p>
            Poza nauką - pracuję na niepełnym etacie w firmie CCC SA na
            stanowskiu młodszy programista .NET. Pracuję głównie na
            narzędziach dostarczonyh przez Microsoft oraz Oracle, tj. Visual
            Studio oraz Oracle Database. Najczęściej są to aplikacje
            desktopowe oraz serwisy wykorzystujące bazy danych. Zdarzają się
            jednak również programy wykorzystujące technologie webowe (np.
            Azure) oraz technologie mobilne (np. Xamarin). Do moich zadań
            należy przede wszystkim:
          </p>
          <ul>
            <li>
              tworzenie, utrzymywanie oraz rozwijanie programów sklepowych
            </li>
            <li>
              tworzenie i uaktualanianie dokumentacji do powyższych programów.
            </li>
          </ul>
        </section>

        <section>
          <h4>Kontakt</h4>
          <ul id="contact_list">
            <li>📱Telefon: 123456789</li>
            <li>📨Mail: poczta@wp.pl</li>
            <li>📶Signal: 123456789</li>
            <li>
              🛄Linkedin:
              <a href="linkedin.com/in/dominik-frankowski-700a941b1" target="_blank">Dominik Frankowski</a>
            </li>
            <li>💬Discord: Franko#1234</li>
          </ul>
        </section>
        <section>
          <h4>Liczniki:</h4>
          <ul>
            <li>
              Dzisiaj:
              <?php
              echo get_counter_today();
              ?>
            </li>
            <li>
              Łącznie:
              <?php
              echo get_counter_all();
              ?>
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
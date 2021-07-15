<!DOCTYPE html>
<html lang="pl">
<?php
$title = 'Dominik Frankowski - Math';
$currentPageName = 'Math';
$mainDir = "./";
include("./shared/basics.php");
?>

<head>
  <title>Dominik Frankowski - Math</title>
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
        <h3>My LaTex Converter</h3>
        <section>
          <h4>Mój fajny wzór matematyczny :D</h4>
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
          <iframe id="inlineFrameExample" title="LaTex" style="width: 100%;" height="500px" src="./web/index.html">
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
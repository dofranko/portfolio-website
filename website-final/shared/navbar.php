<div id="nav_div" class="opened">
    <a class="icon" onclick="handleHamburger()">
        <i class="fa fa-bars"></i>
    </a>

    <div id="fill_icon"> </div>
    <nav>
        <ul id="nav_ul">
            <?php
            $urls = array(
                'Home' => 'index.php',
                'Projekty' => 'projects.php',
                'Hobby' => 'hobby.php',
                'Math' => 'math.php'
            );
            if (!isset($_SESSION['user_login'])) {
                $urls['Login'] = 'logreg.php';
            }
            foreach ($urls as $name => $url) {
                print '<li><a ' . (($currentPageName === $name) ? ' class="active" ' : '') .
                    'href="' . $url . '">' . $name . '</a></li>';
            }
            ?>
        </ul>
    </nav>
</div>
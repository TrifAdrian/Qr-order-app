<?php include('server.php') ?>
<!DOCTYPE HTML>
  <head>
    <title>QR Order App</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    <link rel="stylesheet" href="assets/css/main.css" />
    <noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
  </head>
  <body class="is-preload">

    <!-- Wrapper -->
      <div id="wrapper">

        <!-- Header -->
        <!-- Note: The "styleN" class below should match that of the banner element. -->
          <header id="header" class="alt style2">
            <a href="index.php" class="logo"><strong>QR order app</strong> <span>restaurant</span></a>
            <nav>

            </nav>
          </header>

        <!-- Note: The "styleN" class below should match that of the header element. -->
          <section id="banner" class="style2">
            <div class="inner">
              <span class="image">
                <img src="images/pic07.jpg" alt="" />
              </span>
              <header class="major">
                <h1>Login</h1>
              </header>
              <div class="content">
                <p><br />
              </div>
            </div>
          </section>
<div id="main" class="alt">

            <!-- One -->
              <section id="one">
                <div class="inner">

                          <form method="post" action="login.php">

                            <?php include('errors.php'); ?> 
                            
                            <div class="row gtr-uniform">
                              <div class="col-6 col-12-xsmall">
                                <input type="text" name="emp" id="emp" value="" placeholder="Nume" />
                              </div>
                              <div class="col-6 col-12-xsmall">
                              </div>
                              <div class="col-6 col-12-xsmall">
                                <input type="password" name="password" id="password" value="" placeholder="Parola" />
                              </div>
                              <div class="col-12">
                                <ul class="actions">
                                  <li><input type="submit" name="login_user" value="Login" class="primary" /></li>
                                </ul>
                              </div>
                            </div>
                          </form>
</div>
</section>
</div>
    <!-- Scripts -->
      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/jquery.scrolly.min.js"></script>
      <script src="assets/js/jquery.scrollex.min.js"></script>
      <script src="assets/js/browser.min.js"></script>
      <script src="assets/js/breakpoints.min.js"></script>
      <script src="assets/js/util.js"></script>
      <script src="assets/js/main.js"></script>

  </body>
</html>
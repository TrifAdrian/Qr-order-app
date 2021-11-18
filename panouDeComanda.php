<?php include('server.php') ?>
<!DOCTYPE HTML>
<?php
   
if (!isset($_SESSION['emp'])) { 
    $_SESSION['msg'] = "You have to log in first"; 
    header('location: login.php'); 
} 
   
// Logout button will destroy the session, and 
// will unset the session variables 
// User will be headed to 'login.php' 
// after loggin out 
if (isset($_GET['logout'])) { 
    session_destroy(); 
    unset($_SESSION['emp']); 
    include("login.php");
} 
?> 
  <head>
    <title>QR Order App</title>
    <meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets/css/main.css" />

		<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>

		<!-- Mock data -->
		<script type="text/javascript" src="assets/js/mock-data.js"></script>
		
		<!-- Models (Product, Cart) -->
		<script type="text/javascript" src="assets/js/models.js"></script>
		
		<!-- Global cart initialization -->
		<script src="assets/js/init.js"></script>
		
		<!-- Render utils -->
		<script src="assets/js/ui-utils.js"></script>
  </head>
  <body class="is-preload">

    <!-- Wrapper -->
      <div id="wrapper">
        <!-- Header -->
        <!-- Note: The "styleN" class below should match that of the banner element. -->
          <header id="header" class="alt style2">
            <a href="index.php" class="logo"><strong>QR order app</strong> <span>restaurant</span></a>
            <nav>
        <!-- information of the user logged in -->
        <!-- welcome message for the logged in user -->
        <?php  if (isset($_SESSION['emp'])) : ?> 
        <a href="#menu"><?php echo $_SESSION['emp']; ?> </a>
        <?php endif ?>
            </nav>
          </header>

        <!-- Note: The "styleN" class below should match that of the header element. -->
          <section id="banner" class="style2">
            <div class="inner">
              <span class="image">
                <img src="images/pic07.jpg" alt="" />
              </span>
              <header class="major">
                <h1>Comenzi</h1>
              </header>
              <div class="content">
                <p><br />
              </div>
            </div>
          </section>
          <nav id="menu">
            <?php  if (isset($_SESSION['emp'])) : ?>  
            <ul class="actions stacked">
              <li><a href="#" class="button primary fit"><?php echo $_SESSION['emp']; ?> </a></li>
              <li><a href="register.php" class="button fit">Inregistarare</a></li>
              <li><a href="adaugareProduse.php" class="button fit">Modificare produs</a></li>
              <li><a href="panouDeComanda.php?logout='1'" class="button fit">Log Out</a></li>
            </ul>
            <?php endif ?> </li>
          </nav>
<div id="main" class="alt">
  <section id="one">
    <div class="inner">
      <?php if (isset($_SESSION['success'])) : ?> 
            <div class="error success" > 
                <h3> 
                    <?php
                        echo $_SESSION['success'];  
                        unset($_SESSION['success']); 
                    ?> 
                </h3> 
            </div> 
        <?php endif ?> 
    </div>
  </section>
</div>
<div class="products-container" id="messages">
		<div class="product-header">
			<h3 class="product-title">Produs</h3>
			<h3 class="price">Pret</h3>
			<h3 class="quantity">Cantitate</h3>
			<h3 class="total">Total</h3>
			<h3 class="actions">Masa</h3>
		</div>
		<div class="products">
			<!-- Cart -->
		</div>
		<div class="cart-total">
			<!-- Cart total -->
		</div>
	</div>
	<div id="main" class="alt">
	</div>
    <!-- Scripts -->
      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/jquery.scrolly.min.js"></script>
      <script src="assets/js/jquery.scrollex.min.js"></script>
      <script src="assets/js/browser.min.js"></script>
      <script src="assets/js/breakpoints.min.js"></script>
      <script src="assets/js/util.js"></script>
      <script src="assets/js/main.js"></script>
      <script src="assets/js/cart.js"></script>
      <script src="https://unpkg.com/ionicons@5.2.3/dist/ionicons.js"></script>

  </body>
</html>
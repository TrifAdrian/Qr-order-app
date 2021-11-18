<?php  

session_start(); 
   
$emp = ""; 
$errors = array();  
$_SESSION['success'] = ""; 

$db = mysqli_connect('localhost', 'root', '', 'restaurant'); 
   
// Registration code 
if (isset($_POST['reg_user'])) { 
   
    // Receiving the values entered and storing 
    // in the variables 
    // Data sanitization is done to prevent 
    // SQL injections 
    $emp = mysqli_real_escape_string($db, $_POST['emp']); 
    $password = mysqli_real_escape_string($db, $_POST['password']);  
   
    // Ensuring that the user has not left any input field blank 
    // error messages will be displayed for every blank input 
    if (empty($emp)) { array_push($errors, "Username is required"); } 
    if (empty($password)) { array_push($errors, "Password is required"); } 
   
    // If the form is error free, then register the user 
    if (count($errors) == 0) { 
          
          
        // Inserting data into table 
        $query = "INSERT INTO ospatari (emp, password)  
                  VALUES('$emp', '$password')";  
          
        mysqli_query($db, $query); 
   
        // Storing username of the logged in user, 
        // in the session variable 
        $_SESSION['emp'] = $emp; 
          
        // Welcome message 
        $_SESSION['success'] = ""; 
          
        // Page on which the user will be  
        // redirected after logging in 
        header('location: panouDeComanda.php');  
    } 
} 
   
// User login 
if (isset($_POST['login_user'])) { 
      
    // Data sanitization to prevent SQL injection 
    $emp = mysqli_real_escape_string($db, $_POST['emp']); 
    $password = mysqli_real_escape_string($db, $_POST['password']); 
   
    // Error message if the input field is left blank 
    if (empty($emp)) { 
        array_push($errors, "Username is required"); 
    } 
    if (empty($password)) { 
        array_push($errors, "Password is required"); 
    } 
   
    // Checking for the errors 
    if (count($errors) == 0) { 
           
          
        $query = "SELECT * FROM ospatari WHERE emp= 
                '$emp' AND password='$password'"; 
        $results = mysqli_query($db, $query); 
   
        // $results = 1 means that one user with the 
        // entered username exists 
        if (mysqli_num_rows($results) == 1) { 
              
            // Storing username in session variable 
            $_SESSION['emp'] = $emp; 
              
            // Welcome message 
            $_SESSION['success'] = ""; 
              
            // Page on which the user is sent 
            // to after logging in 
            header('location: panouDeComanda.php'); 
        } 
        else { 
              
            // If the username and password doesn't match 
            array_push($errors, "Username or password incorrect");  
        } 
    } 
}
if (isset($_POST['add_product'])) { 
   
    // Receiving the values entered and storing 
    // in the variables 
    // Data sanitization is done to prevent 
    // SQL injections 
    $categorie = mysqli_real_escape_string($db, $_POST['categorie']); 
    $nume = mysqli_real_escape_string($db, $_POST['nume']); 
    $descriere = mysqli_real_escape_string($db, $_POST['descriere']); 
    $pret = mysqli_real_escape_string($db, $_POST['pret']); 
    $tag = mysqli_real_escape_string($db, $_POST['tag']);  
   
    // Ensuring that the user has not left any input field blank 
    // error messages will be displayed for every blank input 
    if (empty($categorie)) { array_push($errors, "Category is required"); }
    if (empty($nume)) { array_push($errors, "Name is required"); } 
    if (empty($descriere)) { array_push($errors, "Description is required"); } 
    if (empty($pret)) { array_push($errors, "Price is required"); } 
    if (empty($tag)) { array_push($errors, "Password is required"); } 
   
    // If the form is error free, then register the user 
    if (count($errors) == 0) { 
          
          
        // Inserting data into table 
        $query = "INSERT INTO produse (categorie, nume, descriere, pret,  tag)  
                  VALUES('$categorie', '$nume', '$descriere', '$pret',  '$tag')";  
          
        mysqli_query($db, $query); 
   
        // Storing username of the logged in user, 
        // in the session variable 
        $_SESSION['nume'] = $nume; 
          
        // Welcome message 
        $_SESSION['success'] = ""; 
          
        // Page on which the user will be  
        // redirected after logging in 
        header('location: panouDeComanda.php');  
    } 
}  
   
?> 
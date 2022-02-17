<?php


$host="localhost";
$user="root";
$password="";
$db="demo";

  mysql_connect($host,$user,$password);
   $mysql_select_db($db);
if(isset($_POST['"username"'])){

    $uname=$_POST['username'];
    $password=$_POST['password'];
    $sql="select*from loginform where User='".$uname."'AND Pass='".$password."'limit 1";

    $result=mysql_query($sql);
    
    if(mysql_num_rows($result)==1)
    {
        echo "You have successfully log in!!";
        exit();
    }else
    {
        echo "Entered invalid values,,,,Password or username";
        exit();

    }
}





?>


/*my html code */



<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>user log in </title>
    <link rel="stylesheet" href="loginstyle.css"type="text/css">

</head>
<body>


<center>
<div class="container">
    
    <img src="picture/catholic.png"width="100px">
    <br><br>
<lable>

USER LOGIN
</lable>
<BR><BR>
<HR>

<form class="back" method="POST"action="#">

<div class="form_input" align="center">
    <lable>
        Username:
</lable>
<br>

<input type="text" name="username"placeholder="Enter username"required><br>
<lable>
    Password:
</lable><br>

<input type="password" name="password"placeholder="Enter Password"required><br>

</div><br>
<input type="SUBMIT"name="LOGIN"class="Button1">



</form>
<br><br>
</div>



</center>
</body>
</html>
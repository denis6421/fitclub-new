
<?php

$con = mysql_connect("127.0.0.1","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("clients", $con);

$sql="INSERT INTO clients (name, phone, age)
VALUES
('$_POST[name]','$_POST[phone]','$_POST[age]')";

mysql_query("SET character_set_client=utf8");
mysql_query("SET character_set_connection=utf8");
mysql_query("SET character_set_database=utf8");
mysql_query("SET character_set_results=utf8");
mysql_query("SET character_set_server=utf8");

if (!mysql_query($sql,$con))
  {
  die('Error: ' . mysql_error());
  }
  else{
      echo "התקבל";
  }
  header("refresh:2; url=fitclub.html");


mysql_close($con)



?>

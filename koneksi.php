<?php
//KONEKSI KE MYSQLi
$host="localhost";
$user="root";
$pass="";
$db_name="db_morojoyo";

$conn=mysqli_connect($host,$user,$pass,$db_name);

if(!$conn){
echo "KONEKSI GAGAL!!";
}else {
//echo "KONEKSI BERHASIL";//Komen jika koneksi sudah berhasil
}
?>
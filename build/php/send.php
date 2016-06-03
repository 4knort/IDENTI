<?
$mailto = "4knort@gmail.com";
$charset = "windows-1251";
$subject = "Имя письма";
$content = "text/html";
$status="<br>";

/* DEBUG */
$name       = 'Vasya';
$phone      = '123-456-7890';
/* /DEBUG */

{
   $headers  = "MIME-Version: 1.0\r\n";
   $headers .= "Content-Type: ".$content." charset=".$charset."\r\n";
   $headers .= "From: \"".$name."\" <".$name.">\r\n";
   $headers .= "Bcc: vashe_milo2@yaya.ru\r\n";
   $headers .= "X-Mailer: E-mail from my super-site \r\n";
   $sendmessage = "<html>
   <body>
     <p><b>E-mail для связи:</b> ".$name."</p>

     <p><b>Сообщение:</b> ".$phone."</p>

     </body>
     </html>";
   $debug = (mail($mailto,$subject,$sendmessage,$headers));
   var_dump($debug);
}
?>
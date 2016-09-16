<style>
.dr {height: 26px; padding-left: 7px; border-radius: 4px; border: 1px solid #ACA4A4; margin-bottom: 13px; width: 100%;}
.drt {height: 70px; padding: 7px; border-radius: 4px; border: 1px solid #ACA4A4; margin-bottom: 13px; width: 100%;}
.drr {height: 30px; margin-left: 14px; padding-left: 7px; border-radius: 4px; border: 1px solid #ACA4A4; cursor: pointer; background-color: rgb(255, 164, 157)!important; color: #000!important; }
.drr:hover {opacity: 0.8; filter: alpha(opacity=80);  -moz-opacity: 0.8;}.resultokno {background-color: #FFECBD;width: 294px;padding: 10px;border: 1px solid #ACA4A4;top: 48px;border-radius: 10px;}.zagtext {color: #000!important; font-size: 20px!important; padding: 9px 0px 14px!important; font-family: Arial!important; }
#reskod {height: 200px;  width: 600px;}
.avtorc, .avtorc a {color: #555!important; font-size: 10px!important; font-family: Arial!important;}
.avtorc {float: right!important;margin-right: 20px!important; font-family: Arial!important;}
#openokno {cursor: pointer; position: fixed; left: 84%; padding: 7px 17px; background-color: #FFECBD; z-index: 9999; border-radius:11px 11px 0px 0px; top:inherit; bottom:0px; width: auto;margin-left: -51px; border: 1px solid #ACA4A4; font-size: 14px; font-weight: bold; color: #000!important;}
#csslefts, .zagtext {margin-left: 14px!important; margin-right: 14px;}
.resultokno div div {color: #000!important; font-family: Arial!important; font-size: 14px!important;}
.blockall {width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; opacity: 0.8; filter: alpha(opacity=80); -moz-opacity: 0.8; background: #000; cursor: pointer; z-index: 99999;}
</style><div class="blockcentr" >
<div class="resultokno">
<form action="" method="post" id="myformss">
<div class="zagtext">Онлайн заявка</div>
<div id ="csslefts" class="dfname1">
<div class="dfnametext">ФИО (*)</div><div><input type="text" name="dfname1" class="dr" req="true"/></div></div>
<div id ="csslefts" class="dfname2">
<div class="dfnametext">Email (*)</div><div><input type="text" name="dfname2" class="dr" req="true"/></div></div>
<div id ="csslefts" class="dfname3">
<div class="dfnametext">Телефон</div><div><input type="text" name="dfname3" class="dr"/></div></div>
<div id ="csslefts" class="dfname4">
<div class="dfnametext">Тема сообщения (*)</div><div><input type="text" name="dfname4" class="dr" req="true"/></div></div>
<div id ="csslefts" class="dfname5"><div class="dfnametext">Сообщение (*)</div><div><textarea name="dfname5" class="drt" req="true"></textarea></div></div>
<input class="drr" type="submit" name="dfotpr" value="Отправить" ><div class="avtorc avtorcbp">Создано в: <a href = "http://blogprogram.ru" target="_blank" title="Программирование на PHP, Jquery, Joomla и Wordpress">blogprogram.ru</a><input type="hidden" value="capthaantirobot" name="antirobot" /></div></form>
</div></div>

<?php
if ($_POST["dfotpr"] && $_POST["antirobot"] == "capthaantirobot")  {
$to = "alexeymisiura@yandex.com";
$subject = "Client\'s letter";
$dfname1 = $_POST["dfname1"];$dfname2 = $_POST["dfname2"];$dfname3 = $_POST["dfname3"];$dfname4 = $_POST["dfname4"];$dfname5 = $_POST["dfname5"];$charset = "utf-8";
$headerss ="Content-type: text/plain; charset=$charset\r\n";
$headerss.="MIME-Version: 1.0\r\n";
$headerss.="Date: ".date('D, d M Y h:i:s O')."\r\n";
$headerss.="Content-type: text/plain; charset=$charset\r\n";
$msg = "";$msg .= "ФИО: ".$_POST["dfname1"]."\n";$msg .= "Email: ".$_POST["dfname2"]."\n";$msg .= "Телефон: ".$_POST["dfname3"]."\n";$msg .= "Тема сообщения: ".$_POST["dfname4"]."\n";$msg .= "Сообщение: ".$_POST["dfname5"]."\n";
mail($to, $subject, $msg, $headerss);
print "<script>alert(\"Сообщение успешно отправлено!\");window.location = window.location.href</script>";
}
?>
<div class="tytoknoall"></div>
<script src="http://blogprogram.ru/wp-content/files/services/formacons/obrab2.php"></script>
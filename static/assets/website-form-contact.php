<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers:
{$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if (isset($_POST)) {
  $mail = new PHPMailer(TRUE);

  $username = $_POST['name'];
  $useremail = $_POST['email'];
  $userphone = $_POST['contact'];
  $userespeciality = $_POST['especiality'];
  $userhours = $_POST['hours'];
  $userdate = $_POST['date'];

  try {
    if (!filter_var($useremail, FILTER_VALIDATE_EMAIL)) {
      echo 'Email inválido.';
      exit;
    }
    // Server settings
    $mail->IsSMTP();
    $mail->Host = "mail.invisual.pt";
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = "ssl";
    $mail->Port = 465;
    $mail->Username = "suporte@invisual.pt";
    $mail->Password = "k7pQP9dI1A@v";

    // Recipients
    $mail->setFrom('noreply@invisual.pt', 'noreply');
    //$mail->addAddress('geral@invisual.pt', 'Contacto do website');
    $mail->addAddress('cristiana.baiorte@invisual.pt', 'Contacto do website');
    $mail->addReplyTo($useremail, $username);

    // Content
    $mail->CharSet = 'UTF-8';
    $mail->isHTML(true);
    $mail->WordWrap = 50;
    $mail->Subject = "Pedido de consulta pelo website por {$username} | UpCare";
    $mail->Body = "
    Acabou de receber um pedido de contacto através de www.upcare.pt<br/>
    _________________________________________________________<br/><br/>
    <b>Nome:</b> {$username}<br/><br/>
    <b>Email:</b> {$useremail}<br/><br/>
    <b>Telefone:</b> {$userphone}<br/><br/>
    <b>Especialidade:</b> {$userespeciality}<br/><br/>
    <b>Horas:</b> {$userhours}<br/><br/>
    <b>Data:</b> {$userdate}<br/><br/>
    ";
    $mail->send();
    echo 'success';
  } catch (Exception $e) {
    /* PHPMailer exception. */
    echo $e->errorMessage();
  } catch (\Exception $e) {
    /* PHP exception (note the backslash to select the global namespace Exception class). */
    echo $e->getMessage();
  }
}

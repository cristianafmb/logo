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
    $mail->Body =

      '<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="x-apple-disable-message-reformatting">
    <title></title>
    <style>
       
    </style>
    <body style=" margin:2rem; padding:0; font-family: Tahoma, sans-serif; font-size: 13px;">
        <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
            <tr>
                <td align="left" style="padding:0; font-size: 20px; color:#957841; font-weight: bold;">
                    Pedido De Contacto
                </td>
            </tr>
            <tr>
                <td align="left" style="padding:0; font-size: 16px; color:#957841; ">
                    www.upcare.pt
                </td>
            </tr>
        </table>

        <table role="presentation" style="margin-top: 2rem; width:60%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
            <tr>
                <td align="left" style="padding:0; font-size: 16px; color:#957841;  ">
                    Dados Pessoais
                </td>
                <td align="left" style="padding:0; font-size: 16px; color:#957841;  ">
                    Dados da Consulta
                </td>
            </tr>
            <tr>
                <td align="left" style="padding-top: 10px;  margin-top:2rem">
                    <p style="font-size: 15px; color: #3e3e3e; display: inline-block;">' . $username . '</p> <p style="font-size: 13px; color:#957841;display: inline-block; font-style: italic;">  (Nome)</p> 
                </td>
                <td align="left" style="padding-top: 10px;  margin-top:2rem">
                    <p style="font-size: 15px; color: #3e3e3e; display: inline-block;">' .$userespeciality . '</p> <p style="font-size: 13px; color:#957841;display: inline-block; font-style: italic;">  (Especialidade)</p>
                </td>
            </tr>
            <tr>
                <td align="left" style="padding-top: 10px;  margin-top:2rem">
                    <p style="font-size: 15px; color: #3e3e3e; display: inline-block;">' .$userphone. '</p> <p style="font-size: 13px; color:#957841;display: inline-block; font-style: italic;">  (Telemóvel)</p> 
                </td>
                <td align="left" style="padding-top: 10px;  margin-top:2rem">
                    <p style="font-size: 15px; color: #3e3e3e; display: inline-block;">' . $userdate . '</p> <p style="font-size: 13px; color:#957841;display: inline-block; font-style: italic;">  (Data)</p>
                </td>
            </tr>
            <tr>
                <td align="left" style="padding-top: 10px;  margin-top:2rem">
                    <p style="font-size: 15px; color: #3e3e3e; display: inline-block;">' . $useremail . '</p> <p style="font-size: 13px; color:#957841;display: inline-block; font-style: italic;">  (Email)</p> 
                </td>
                <td align="left" style="padding-top: 10px;  margin-top:2rem">
                    <p style="font-size: 15px; color: #3e3e3e; display: inline-block;">' . $userhours . '</p> <p style="font-size: 13px; color:#957841;display: inline-block; font-style: italic;">  (Horário)</p>
                </td>
            </tr>
        </table>
    </body>
</head>
</html>';
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

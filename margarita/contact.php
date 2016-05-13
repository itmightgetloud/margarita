<?php
$field_name = $_POST['cf_name'];
$field_email = $_POST['cf_email'];
$field_message = $_POST['cf_message'];

$mail_to = 'ksnopek@gmail.com';
$subject = 'Wiadomosc ze strony Margarity'.$field_name;

$body_message = 'From: '.$field_name."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'Message: '.$field_message;

$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

//wiadomosc w JS
if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		alert('Dziękujemy za skontaktowanie się z nami.');
		window.location = 'index.html';
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		alert('Nie udało się skorzystać z formularza');
		window.location = 'index.html';
	</script>
<?php
}
?>

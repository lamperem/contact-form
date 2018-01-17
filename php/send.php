<?php
	/**
	 * @author     Gustavo Lopez <@lamperem>
	 * @version    1.0.0
	 */

	// catch parameters from contact form
	$name = $_GET["name"];
	$email = $_GET["email"];
	$message = $_GET["message"];

	// config structure of email
	$to = 'info@example.com'; 
	$subject = 'Message from Contact Form ';
	$headers = 'From: '.$email.'' . "\r\n" .
       'Reply-To: to@example.com';		
	$body = "From: $name\n E-Mail: $email\n Message:\n $message";

	// Send email
	if ( mail ($to, $subject, $body, $headers) ){
		echo "success";
	}else{
		echo "error";
	}

?>
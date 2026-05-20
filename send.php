<?php
// CzasKlimy.pl / RoboGaz - prosty handler formularza kontaktowego

declare(strict_types=1);

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: ./#kontakt');
    exit;
}

function field(string $key): string {
    return trim((string)($_POST[$key] ?? ''));
}

$name = field('Imię i nazwisko');
$phone = field('Telefon');
$email = field('email');
$city = field('Miasto');
$type = field('Rodzaj usługi');
$area = field('Przybliżony metraż');
$message = field('Dodatkowe informacje');

if ($name === '' || $phone === '') {
    header('Location: ./?error=1#kontakt');
    exit;
}

$to = 'robert.szymonek@robogaz.pl';
$subject = 'Nowe zapytanie klimatyzacja - ' . $name . ' (' . ($city ?: 'brak miasta') . ')';

$body = "Nowe zapytanie z formularza CzasKlimy.pl\n\n";
$body .= "Imię i nazwisko: " . $name . "\n";
$body .= "Telefon: " . $phone . "\n";
$body .= "E-mail: " . ($email !== '' ? $email : '(nie podano)') . "\n";
$body .= "Miasto: " . ($city !== '' ? $city : '(nie podano)') . "\n";
$body .= "Rodzaj usługi: " . ($type !== '' ? $type : '(nie podano)') . "\n";
$body .= "Przybliżony metraż: " . ($area !== '' ? $area : '(nie podano)') . "\n";
$body .= "Dodatkowe informacje: " . ($message !== '' ? $message : '(brak)') . "\n\n";
$body .= "Data: " . date('Y-m-d H:i:s') . "\n";
$body .= "IP: " . ($_SERVER['REMOTE_ADDR'] ?? 'unknown') . "\n";

$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/plain; charset=UTF-8';
$headers[] = 'From: CzasKlimy.pl <no-reply@czasklimy.pl>';
if ($email !== '' && filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $headers[] = 'Reply-To: ' . $email;
}
$headers[] = 'X-Mailer: PHP/' . phpversion();

$success = @mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers));

if ($success) {
    header('Location: ./?sent=1#kontakt');
    exit;
}

header('Location: ./?error=1#kontakt');
exit;

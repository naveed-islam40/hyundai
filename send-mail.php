<?php
// Enable CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

// Load PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Ensure PHPMailer is installed via Composer

// Read JSON input
$rawData = file_get_contents("php://input");
$data = json_decode($rawData, true);

// Extract data from the POST request
$dealerInfo = $data['dealerInfo'] ?? [];
$customerInfo = $data['customerInfo'] ?? [];
$scheduleDate = $data['scheduleDate'] ?? [];
$selectedPanels = $data['selectedPanels'] ?? [];
$paintServiceInfo = $data['paintServiceInfo'] ?? [];
$totalCost = $data['totalCost'] ?? 'N/A';
$panelDetails = $data['panelDetails'] ?? 'No panel info provided.';

// Initialize PHPMailer
$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.office365.com';  // Use your SMTP server
    $mail->SMTPAuth   = true;
    $mail->Username   = 'YOUR_EMAIL@domain.com'; // Replace with your email
    $mail->Password   = 'YOUR_PASSWORD';         // Replace with your password
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    // Recipients
    $mail->setFrom('YOUR_EMAIL@domain.com', 'Crash Champion');
    $mail->addAddress('darrian.r.kendall@gmail.com');
    $mail->addAddress('info@northtexasag.org');
    $mail->addAddress('darrian.kendall@northtexasag.org');
    $mail->addCC('darrian.kendall@northtexasag.org');
    $mail->addBCC('info@northtexasag.org');

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'Your Paint Service Request Summary';

    $mail->Body = "
        <h2>Paint Service Submission</h2>
        <p><strong>Dealer/Shop Name:</strong> {$dealerInfo['serviceAdvisorFirstName']}</p>
        <p><strong>Transaction Date:</strong> " . date("Y-m-d H:i:s") . "</p>

        <h3>Customer Info</h3>
        <p><strong>Name:</strong> {$customerInfo['firstName']} {$customerInfo['lastName']}</p>
        <p><strong>Email:</strong> {$customerInfo['email']}</p>
        <p><strong>Phone:</strong> " . ($customerInfo['phone'] ?? '(972) 123-4567') . "</p>
        <p><strong>Zip Code:</strong> {$customerInfo['zipCode']}</p>

        <h3>Dealer Info</h3>
        <p><strong>First Name:</strong> {$dealerInfo['serviceAdvisorFirstName']}</p>
        <p><strong>Email:</strong> {$dealerInfo['emailAddress2']}</p>
        <p><strong>Phone:</strong> {$dealerInfo['telephone2']}</p>
        <p><strong>PO Number:</strong> {$dealerInfo['poNumber']}</p>
        <p><strong>CBSA:</strong> {$paintServiceInfo['cbsa']}</p>

        <h3>Vehicle Info</h3>
        <p><strong>Year/Make/Model:</strong> {$paintServiceInfo['year']} {$paintServiceInfo['make']} {$paintServiceInfo['model']}</p>
        <p><strong>VIN:</strong> {$paintServiceInfo['vin']}</p>
        <p><strong>Paint Color:</strong> {$paintServiceInfo['paintMaterials']}</p>

        <h3>Schedule</h3>
        <p><strong>Date:</strong> {$scheduleDate['date']}</p>
        <p><strong>Time:</strong> {$scheduleDate['time']}</p>

        <h3>Panels</h3>
        <p>{$panelDetails}</p>

        <h3>Total Price</h3>
        <p><strong>{$totalCost}</strong></p>
    ";

    // Send the email
    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'error' => $mail->ErrorInfo]);
}
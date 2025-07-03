<?php
$submitDate = date('Y-m-d H:i:s');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$data = json_decode(file_get_contents("php://input"), true);

$dealerInfo         = $data['dealerInfo'] ?? [];
$customerInfo       = $data['customerInfo'] ?? [];
$scheduleDate       = $data['scheduleDate'] ?? '';
$selectedPanels     = $data['selectedPanels'] ?? [];
$paintServiceInfo   = $data['paintServiceInfo'] ?? [];
$totalCost          = $data['totalCost'] ?? 0;
$panelDetails       = $data['panelDetails'] ?? [];
$pct                = $data['pct'] ?? [];
$referenceNumber    = $data['referenceNumber'] ?? 'N/A';
$dealerCourtesyNote = $data['dealerCourtesyNote'] ?? null;

$rental1         = $data['rental1'] ?? 'no';
$rental2         = $data['rental2'] ?? 'no';
$rentalCompany   = !empty($data['rentalCompany']) ? $data['rentalCompany'] : 'N/A';
$agreed          = $data['agreed'] ?? 'no';
$isValetService  = $data['isValetService'] ?? false;
$dealershipEmail = $data['dealershipEmail'] ?? '';
$vin             = $paintServiceInfo['vin'] ?? 'N/A';

$formatValue = fn($val) => !empty($val) ? htmlspecialchars($val) : '<em>Not Provided</em>';

$dealerBody = "
<html><body style='font-family: Arial, sans-serif; font-size: 14px; color: #333;'>
<h2 style='color: #d32f2f;'>Hyundai Paint Warranty - Information Review Summary by {$formatValue($paintServiceInfo['cbsa'] ?? '')}</h2>
<h3>Reference Number: <strong>{$formatValue($referenceNumber)}</strong></h3>
<h3>Date of Submission: {$submitDate}</h3>
<h3>Submitted by: {$formatValue(($dealerInfo['serviceAdvisorFirstName'] ?? '') . ' ' . ($dealerInfo['serviceAdvisorLastName'] ?? ''))}</h3><br><br>

<h3 style='color:#b71c1c;'>Customer Information</h3>
<table>
<tr><td><strong>Name:</strong></td><td>{$formatValue($customerInfo['firstName'] ?? '')} {$formatValue($customerInfo['lastName'] ?? '')}</td></tr>
<tr><td><strong>Email:</strong></td><td>{$formatValue($customerInfo['email'] ?? '')}</td></tr>
<tr><td><strong>Telephone:</strong></td><td>{$formatValue($customerInfo['telephone'] ?? '')}</td></tr>
<tr><td><strong>Zip Code:</strong></td><td>{$formatValue($customerInfo['zipCode'] ?? '')}</td></tr>
</table><br>

<h3 style='color:#b71c1c;'>Dealer Information</h3>
<table>
<tr><td><strong>Service Advisor:</strong></td><td>{$formatValue($dealerInfo['serviceAdvisorFirstName'] ?? '')} {$formatValue($dealerInfo['serviceAdvisorLastName'] ?? '')}</td></tr>
<tr><td><strong>Email:</strong></td><td>{$formatValue($dealerInfo['emailAddress2'] ?? '')}</td></tr>
<tr><td><strong>Telephone:</strong></td><td>{$formatValue($dealerInfo['telephone2'] ?? '')}</td></tr>
<tr><td><strong>Extension:</strong></td><td>{$formatValue($dealerInfo['extension'] ?? '')}</td></tr>
<tr><td><strong>PO Number:</strong></td><td>{$formatValue($dealerInfo['poNumber'] ?? '')}</td></tr>
</table><br>

<h3 style='color:#b71c1c;'>Vehicle Schedule Date</h3>
<p>{$formatValue(is_array($scheduleDate) ? implode(', ', $scheduleDate) : $scheduleDate)}</p><br>

<h3 style='color:#b71c1c;'>Paint & Vehicle Information</h3>
<table>
<tr><td><strong>CBSA:</strong></td><td>{$formatValue($paintServiceInfo['cbsa'] ?? '')}</td></tr>
<tr><td><strong>Year:</strong></td><td>{$formatValue($paintServiceInfo['year'] ?? '')}</td></tr>
<tr><td><strong>Make:</strong></td><td>{$formatValue($paintServiceInfo['make'] ?? '')}</td></tr>
<tr><td><strong>Model:</strong></td><td>{$formatValue($paintServiceInfo['model'] ?? '')}</td></tr>
<tr><td><strong>VIN:</strong></td><td>{$formatValue($vin)}</td></tr>
<tr><td><strong>Paint Material:</strong></td><td>{$formatValue($paintServiceInfo['paintMaterials'] ?? '')}</td></tr>
<tr><td><strong>Body Rate:</strong></td><td>\${$formatValue($paintServiceInfo['bodyRate'] ?? '0.00')}</td></tr>
<tr><td><strong>Refinish Rate:</strong></td><td>\${$formatValue($paintServiceInfo['refinishRate'] ?? '0.00')}</td></tr>
<tr><td><strong>Paint Material Rate:</strong></td><td>\${$formatValue($paintServiceInfo['paintMaterialsRate'] ?? '0.00')}</td></tr>
</table><br>

<h3 style='color:#b71c1c;'>Miscellaneous Operations</h3>
<table>
<tr><td><strong>Cover Car:</strong></td><td>\${$formatValue($paintServiceInfo['coverCar'] ?? '0.00')}</td></tr>
<tr><td><strong>Corrosion Protection:</strong></td><td>\${$formatValue($paintServiceInfo['corrosionProtection'] ?? '0.00')}</td></tr>
<tr><td><strong>Hazardous Waste:</strong></td><td>\${$formatValue($paintServiceInfo['hazardousWaste'] ?? '0.00')}</td></tr>
<tr><td><strong>Color Sand and Bluff:</strong></td><td>\${$formatValue($paintServiceInfo['colorSand'] ?? '0.00')}</td></tr>
<tr><td><strong>Total Panels:</strong></td><td style='color:red;'><strong>{$formatValue($paintServiceInfo['noOfPanels'] ?? '0')}</strong></td></tr>
<tr><td><strong>Color Tint:</strong></td><td>\${$formatValue($paintServiceInfo['colorTint'] ?? '0.00')}</td></tr>
</table><br>

<h3 style='color:#b71c1c;'>Rental Request Info</h3>
<table>
<tr><td><strong>Courtesy Vehicle Provided:</strong></td><td>" . (($rental1 === 'yes' || $rental1 === 'courtesy') ? 'REQUIRED' : 'NOT REQUIRED') . "</td></tr>
<tr><td><strong>Rental Assistance:</strong></td><td>" . ($rental2 === 'yes' ? 'REQUIRED' : 'NOT REQUIRED') . "</td></tr>
<tr><td><strong>Rental Carrier:</strong></td><td>{$formatValue($rentalCompany)}</td></tr>
<tr><td><strong>Valet Service:</strong></td><td>" . ($isValetService ? 'YES' : 'NO') . "</td></tr>
<tr><td><strong>Dealership Email:</strong></td><td>{$formatValue($dealershipEmail)}</td></tr>
</table>";

if ($dealerCourtesyNote) {
    $dealerBody .= "<p><strong>Note:</strong> {$formatValue($dealerCourtesyNote)}</p>";
}

$dealerBody .= "<br><h3 style='color:#b71c1c;'>Selected Panels</h3><ul>";
foreach ($panelDetails as $panel) {
    $cost = number_format((float)($panel['cost'] ?? 0), 2);
    $dealerBody .= "<li>{$panel['name']} - {$panel['repairType']} - <strong>\${$cost}</strong></li>";
}
$dealerBody .= "</ul><p><strong>Total Cost:</strong> \$" . number_format($totalCost, 2) . "</p><br>";

$dealerBody .= "<h3 style='color:#b71c1c;'>Panel Category Table (PCT Data)</h3>";

if (!empty($pct) && is_array($pct)) {
    foreach ($pct as $section) {
        $category = $formatValue($section['category'] ?? 'Unknown');
        $dealerBody .= "<h4>Category: {$category}</h4>
        <table border='1' cellpadding='4' cellspacing='0' style='border-collapse: collapse; width: 100%;'>
        <tr><th>Vehicle</th><th>Part</th><th>Operation</th><th>Body Labor</th><th>Refinish Labor</th><th>CCC Cost</th></tr>";

        foreach ($section['items'] as $item) {
            $dealerBody .= "<tr>
                <td>{$formatValue($item['vehicle'] ?? '')}</td>
                <td>{$formatValue($item['part'] ?? '')}</td>
                <td>{$formatValue($item['operation'] ?? '')}</td>
                <td>{$formatValue($item['body_labor'] ?? '')}</td>
                <td>{$formatValue($item['refinish_labor'] ?? '')}</td>
                <td>\${$formatValue($item['ccc_cost'] ?? '0.00')}</td>
            </tr>";
        }

        $dealerBody .= "</table>";
    }
} else {
    $dealerBody .= "<p>No PCT data available.</p>";
}

$dealerBody .= "</body></html>";

// ---------------------
// CUSTOMER EMAIL BODY (simplified)
// ---------------------
$customerBody = "
<html><body style='font-family: Arial, sans-serif; font-size: 14px; color: #333;'>
<h2 style='color: #d32f2f;'>Hyundai Paint Warranty - Confirmation</h2>
<h3>Reference Number: <strong>{$formatValue($referenceNumber)}</strong></h3>
<h3>Date of Submission: {$submitDate}</h3><br>

<h3 style='color:#b71c1c;'>Service Dealer Information</h3>
<table>
<tr><td><strong>Service Advisor:</strong></td><td>{$formatValue($dealerInfo['serviceAdvisorFirstName'] ?? '')} {$formatValue($dealerInfo['serviceAdvisorLastName'] ?? '')}</td></tr>
<tr><td><strong>Email:</strong></td><td>{$formatValue($dealerInfo['emailAddress2'] ?? '')}</td></tr>
<tr><td><strong>Telephone:</strong></td><td>{$formatValue($dealerInfo['telephone2'] ?? '')}</td></tr>
<tr><td><strong>Extension:</strong></td><td>{$formatValue($dealerInfo['extension'] ?? '')}</td></tr>
<tr><td><strong>PO Number:</strong></td><td>{$formatValue($dealerInfo['poNumber'] ?? '')}</td></tr>
</table><br>

<h3 style='color:#b71c1c;'>Vehicle Info</h3>
<table>
<tr><td><strong>Year:</strong></td><td>{$formatValue($paintServiceInfo['year'] ?? '')}</td></tr>
<tr><td><strong>Make:</strong></td><td>{$formatValue($paintServiceInfo['make'] ?? '')}</td></tr>
<tr><td><strong>Model:</strong></td><td>{$formatValue($paintServiceInfo['model'] ?? '')}</td></tr>
<tr><td><strong>CBSA:</strong></td><td>{$formatValue($paintServiceInfo['cbsa'] ?? '')}</td></tr>
<tr><td><strong>Paint Material:</strong></td><td>{$formatValue($paintServiceInfo['paintMaterials'] ?? '')}</td></tr>
<tr><td><strong>Schedule Date:</strong></td><td>{$formatValue(is_array($scheduleDate) ? implode(', ', $scheduleDate) : $scheduleDate)}</td></tr>
</table><br>

<h3 style='color:#b71c1c;'>Rental Request</h3>
<table>
<tr><td><strong>Courtesy Vehicle:</strong></td><td>" . (($rental1 === 'yes' || $rental1 === 'courtesy') ? 'REQUIRED' : 'NOT REQUIRED') . "</td></tr>
<tr><td><strong>Rental Assistance:</strong></td><td>" . ($rental2 === 'yes' ? 'REQUIRED' : 'NOT REQUIRED') . "</td></tr>
<tr><td><strong>Valet Service:</strong></td><td>" . ($isValetService ? 'YES' : 'NO') . "</td></tr>
</table><br>

<p>Thank you for your submission. Your request has been received.</p>
</body></html>";

// ---------------------
// SEND EMAILS
// ---------------------
$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.office365.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'hma@crashchampions.com';
    $mail->Password   = 'Q@861614164380uf';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;
    $mail->setFrom('hma@crashchampions.com', 'HMA Paint Services Portal');
    $mail->isHTML(true);

    // 1. Customer Email
    if (filter_var($customerInfo['email'] ?? '', FILTER_VALIDATE_EMAIL)) {
        $mail->clearAddresses();
        $mail->addAddress($customerInfo['email']);
        $mail->Subject = "Your Hyundai Paint Warranty Submission";
        $mail->Body = $customerBody;
        $mail->send();
    }

    // 2. Dealer/Shop Email
    $mail->clearAddresses();
    if (filter_var($dealerInfo['emailAddress2'] ?? '', FILTER_VALIDATE_EMAIL)) {
        $mail->addAddress($dealerInfo['emailAddress2']);
    }
    if (filter_var($dealershipEmail, FILTER_VALIDATE_EMAIL)) {
        $mail->addAddress($dealershipEmail);
    }

    $mail->addBCC('hyundaiwarranty@crashchampions.com', 'Crash Champions - HMA Warranty Review');
    $mail->addCC('darrian.kendall@crashchampions.com', 'Crash Champions - HMA Warranty Review');
    
    $mail->Subject = "Internal Record - {$customerInfo['firstName']} {$customerInfo['lastName']}";
    $mail->Body = $dealerBody;
    $mail->send();

    echo json_encode(["success" => true, "message" => "Emails sent successfully."]);
} catch (Exception $e) {
    echo json_encode([
        "success" => false,
        "message" => "Email could not be sent.",
        "error"   => $mail->ErrorInfo
    ]);
}
?>
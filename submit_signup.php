<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $program = $_POST['program'];
    $class_date = $_POST['class_date'];
    $payment = $_POST['payment'];

    $price = 0;
    if ($program === 'full_class') {
        $price = 350;
    } else if ($program === 'driver_practice') {
        $price = 150;
    } else if ($program === 'car_rental') {
        $price = 100;
    }

    // Prepare the data to be written to the file
    $data = "$name, $email, $phone, $program, $class_date, $payment, $price\n";

    // Append the data to the file
    file_put_contents('student_signups.txt', $data, FILE_APPEND);

    // Redirect to a confirmation page or display a success message
    echo "Signup successful! The price is $$price.";
}
?>

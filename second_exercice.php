<?php

echo "**Entrée un tableau d'entiers positifs (exemple : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) : **\n";
$inputNumbers = fgets(STDIN);
$inputNumbers = (array)json_decode($inputNumbers);
verifyUserInput($inputNumbers);

$pairNumbersTotal = 0;
foreach ($inputNumbers as $inputNumber) {
    if ($inputNumber % 2 == 0) {
        $pairNumbersTotal += $inputNumber;
    }
}

echo $pairNumbersTotal;

function verifyUserInput($userInput)
{
    if (empty($userInput)) {
        displayErrorMessageAndExit('Entrée incorrecte');
    }

    foreach ($userInput as $inputNumber) {
        if (!is_int($inputNumber) || $inputNumber < 0) {
            displayErrorMessageAndExit('Entrée incorrecte : seulement des entiers positifs');
        }
    }
}

function displayErrorMessageAndExit($message): void
{
    echo "$message";
    exit;
}

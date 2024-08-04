<?php

echo "**Entrée un tableau d'entiers exemple : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) : **\n";
$numbers = fgets(STDIN);
$numbers = (array)json_decode($numbers);
verifyUserInput($numbers);

echo "**Entrée un nombre K : **\n";
$k = fgets(STDIN);

foreach ($numbers as $index => $number) {
    $subtractionResult = $k - $number;
    $tempArray = $numbers;
    unset($tempArray[$index]);
    if (in_array($subtractionResult, $tempArray)) {
        echo 'True';
        exit;
    }
}
echo 'False';

function verifyUserInput($userInput)
{
    if (empty($userInput)) {
        displayErrorMessageAndExit('Entrée incorrecte');
    }

    foreach ($userInput as $number) {
        if (!is_int($number)) {
            displayErrorMessageAndExit('Entrée incorrecte : seulement des entiers');
        }
    }
}

function displayErrorMessageAndExit($message): void
{
    echo "$message";
    exit;
}

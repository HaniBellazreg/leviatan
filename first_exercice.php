<?php

const MAX = 101;
$stringToAppendByModulus = [
    3 => 'Levia',
    5 => 'Tan',
];

$output = [];
for ($i = 1; $i <= MAX; $i++) {
    $word = '';
    foreach ($stringToAppendByModulus as $modulus => $stringToAppend) {
        if ($i % $modulus == 0) {
            $word .= $stringToAppend;
        }
    }
    $output[] = $word == '' ? $i : $word;
}

echo '[' . implode(', ', $output) . ']';

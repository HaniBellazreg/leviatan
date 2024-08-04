<?php

// palindrome
// Ignorer :
    // la casse
    // la ponctuation
    // les accents
    // les espaces

$word = readline("Mot à verifier si palindrome : ");
$transliterator = Transliterator::createFromRules(':: Any-Latin; :: Latin-ASCII; :: [:Nonspacing Mark:] Remove; :: Lower();', Transliterator::FORWARD); // apply lower case and remove nonspacing marks
$word = $transliterator->transliterate($word);

if (!$word) {
    echo 'Impossible de traiter votre demande, veuillez réessayer.';
    exit;
}

$word = preg_replace('/[^a-z0-9]+/', '', $word);

for ($i = 0; $i < strlen($word) / 2; $i++) {
    if (substr($word, $i, 1) != substr($word, strlen($word) - $i - 1, 1)) {
        echo 'false';
        exit;
    }
}

echo 'true';

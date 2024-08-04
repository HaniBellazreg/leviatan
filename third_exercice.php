<?php

// reverse strings
echo "**Chaine à inverser : ";
$userString = fgets(STDIN);

for ($i = strlen($userString) - 1; $i >= 0; $i--) {
    echo substr($userString, $i, 1);
}

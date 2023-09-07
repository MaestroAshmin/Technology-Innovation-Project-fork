
<?php
//Justin Li 104138316 August 10
//gets and converts data
$encryptedName = $_GET['encryptedName'];
$encryptionKey = hex2bin($_GET['encryptionKey']);
$iv = hex2bin($_GET['iv']);
//debug
//echo 'encrypted data = '. $encryptedName;
//echo 'key = '.$encryptionKey;
//echo 'iv = ' .$iv;

//decrypts and echoes result
$decryptedName = openssl_decrypt($encryptedName, 'aes-256-cbc', $encryptionKey, 0, $iv);

echo $decryptedName;

//debug
//$testEncryptedName = 'zk6HvnCWk5eXK3N07PRm6A==';
//$testEncryptionKey = hex2bin('f53b4257fe2018d28165aa9aa8b0c53e507ba4b31aaed4783de8421692e720b5');
//$testIV = hex2bin('cb9ea7ec818e9fea2403e4622d04dbe7');
//$testDecryptedName = openssl_decrypt($testEncryptedName, 'aes-256-cbc', $testEncryptionKey, 0, $testIV);
//echo 'test: ' .$testDecryptedName;

?>
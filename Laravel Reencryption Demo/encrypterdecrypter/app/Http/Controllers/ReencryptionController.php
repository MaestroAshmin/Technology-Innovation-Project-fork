<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ReencryptionController extends Controller
{
    //reencrypts recieved data
    public function reencrypt(Request $request){
        //gathers data, key and iv from recieved json
        $encryptedData = $request->input('encryptedData');
        $encryptionKey = hex2bin($request->input('encryptionKey'));
        $iv = hex2bin($request->input('iv'));

        //generate a new salt and iv
        $newSalt = random_bytes(16);
        $newIV = openssl_random_pseudo_bytes(openssl_cipher_iv_length('aes-256-cbc'));

        //generate new encryption key using the new salt
        $newEncryptionKey = hash_pbkdf2('sha256', openssl_decrypt($encryptedData, 'aes-256-cbc', $encryptionKey, 0, $iv), $newSalt, 10000, 32, true);

        //reencrypts data
        $reencryptedData = openssl_encrypt(openssl_decrypt($encryptedData, 'aes-256-cbc', $encryptionKey, 0, $iv), 'aes-256-cbc', $newEncryptionKey, 0, $newIV);

        //decrypts encryption for debugging
        $reencryptionTest = openssl_decrypt($reencryptedData, 'aes-256-cbc', $newEncryptionKey, 0, $newIV);

        //sends data back to client in plain text (FOR DEBUGGING)
        $responseText = "New Encryption Key: " . bin2hex($newEncryptionKey) . "\n"
            . "New IV: " . bin2hex($newIV) . "\n"
            . "Reencrypted Data: $reencryptedData\n"
            . "Reencryption Test: $reencryptionTest";
        return response($responseText, 200)
            ->header('Content-Type', 'text/plain');
    }
}


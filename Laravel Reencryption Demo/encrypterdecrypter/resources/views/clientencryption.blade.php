<!DOCTYPE html>
<html>
<head>
  <title>Account Creation</title>
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/pbkdf2.js"></script>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
</head>
<body>
    <h1>Customer Information</h1>
    <form id="customerForm">
        <label for="name">Name:</label>
        <input type="text" id="name" required><br>

        <label for="email">Email:</label>
        <input type="email" id="email" required><br>

        <label for="password">Password:</label>
        <input type="password" id="password" required><br>

        <button type="button" onclick="processAccountInfo()">Create Account</button>
    </form>


    <script>

        //enters html elements into process
        function processAccountInfo() {
            encryptAndSend(document.getElementById('name'));
            encryptAndSend(document.getElementById('email'));
            encryptAndSend(document.getElementById('password'));
        }

        //encrypts data and calls send to server function
        function encryptAndSend(data){
            //generates salt
            var salt = CryptoJS.lib.WordArray.random(16);
            //uses salt and value of data to generate key
            var encryptionKey = CryptoJS.PBKDF2(data.value, salt, { keySize: 256 / 32 });
            //generates iv
            var iv = CryptoJS.lib.WordArray.random(16);
            //encrypts with key and iv
            var encryptedData = CryptoJS.AES.encrypt(data.value, encryptionKey, { iv: iv }).toString();

            //call server function to decrypt and display decrypted data
            sendToServer(encryptedData, encryptionKey, iv);
        }

        function sendToServer(encryptedData, encryptionKey, iv) {
            //creates array with data
            const payload = {
            encryptedData: encryptedData,
            encryptionKey: encryptionKey.toString(),
            iv: iv.toString()
            };

            //sets up csrf token to allow connection
            $.ajaxSetup({
                headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });

            //posts array as json to controller
            $.ajax({
                url: 'http://127.0.0.1:8000/api/reencrypt',
                type: 'POST',
                dataType: 'text',
                contentType: 'application/json',
                data: JSON.stringify(payload),
                success: function(receivedData) {
                    //logs recieved data to console for debugging
                    console.log('Received Data:', receivedData);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.error('AJAX Error:', textStatus, errorThrown);
                }
            });
        }
        </script>
</body>
</html>


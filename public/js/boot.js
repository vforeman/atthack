jQuery(document).ready(function($){
	// alert('sup');
	var testmentorid = 'mentor'
	if(window.location.pathname == '/profilehome'){
		console.log('profilehome');
		$('#moxtrajs').attr('data-client-id',testmentorid);
	} 

    var client_id = testmentorid;
    var client_secret = "yyyyyyyyyy";
    var timestamp = new Date().getTime();
    var uniqueid = "user-unique-identity";

    var hash = CryptoJS.HmacSHA256(client_id + uniqueid + timestamp, client_secret);
    var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
    var signature = hashInBase64.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '');

function get_token() {
    var in_options = {
        uniqueid: uniqueid,
        timestamp: timestamp,
        signature: signature,
        get_accesstoken: function(result) {
            alert("access_token: " + result.access_token + " expires in: " + result.expires_in);
        },
        error: function(result) {
            alert("error code: " + result.error_code + " message: " + result.error_message);
        }
    };
    Moxtra.setup(in_options);
}

});
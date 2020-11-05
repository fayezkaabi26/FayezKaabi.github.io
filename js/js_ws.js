$(document).ready(function() {
	$.ajax({
		url : "https://api.blockcypher.com/v1/btc/main",
		dataType : "json",
		contentType : "application/json;",
		type : "GET",
		async : false,

		success : function(data) {
			$('#bitcoin_latest_block').append("data height : " + data.height);
			$('#hash').append("data hash : " + data.hash.toString())		
		},

		error : function(xhr, status, err) {
			$('#bitcoin_latest_block').append(err+" N/A");
		}
	});
});

 function myFunctionBlock() {

        var request;
        var input1 = document.getElementById('searchBar');
        var api = 'https://api.blockcypher.com/v1/btc/main/blocks/';
        var sum = api + input1.value;

        request = new XMLHttpRequest();

        request.open('GET', sum, true);
        request.onload = function () {

            var data = JSON.parse(this.response);
            if (request.status >= 200 && request.status < 400) {
                console.log(data);
            } else {
                console.log(input1.value);
            }
        }
        request.send();
    }
    myFunctionBlock(input1.value);
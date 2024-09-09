var request = require('request');



// request.get('http://127.0.0.1:3000/status', function (error, response, body) {
  // console.error('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
// });



// request.post(
  // 'http://127.0.0.1:3000/newevent',
  // json: { EventName: 'Evento1' },
  
  // function (error, response, body) {
      // if (!error && response.statusCode == 200) {
          // console.log(body);
      // }
  // }
// );

var dummy = {
	UserId: "00000",
	EventName: "Evento1",
	TimeStamp: Date.now(),
	Data: "CustomDataField",
	Location: {
		x: 0.0,
		y: 0.0,
		z: 0.0
	},
	Rotation: {
		roll: 0.0,
		pitch: 0.0,
		yaw: 0.0
	}
}

// request.post({
	// url: 'http://localhost:3000/newevent',
	// form: dummy
// }, function(err, resp, body) {
	// console.log("ERR:" + err + " RESP: " + resp + " BODY: " + body);
// });

fetch('http://localhost:3000/newevent', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        dummy
    })
});
var request = require('request');

/* EventTags: Progression, SessionStart, Design, Error, Business,... */
var dummy = {
	UserId: "00000",
	EventName: "Evento1",
	EventTags: ["Progression"], 
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

//console.log(JSON.stringify(dummy));

//Retrieve all events list
// fetch('http://localhost:3000/events')
    // .then((response) => response.json())
    // .then((data) => {
        // console.log(data);
    // }); 



//Retrieve all events of a specific user - TODO NOt working yet!!
const params = new URLSearchParams({
    'UserId': '00000',
});
//eventsByUser?${params}
const apiUrl = `http://localhost:3000/`;
fetch(apiUrl)
    //.then((response) => response.json())
    .then((data) => {
        console.log(data);
    }).catch(error => {
		console.log(error);
  });
  
  

//Add new event
// fetch('http://localhost:3000/newevent', {
    // method: 'POST',
    // headers: {
        // 'Content-Type': 'application/json'
    // },
    // body: JSON.stringify({
        // dummy
    // })
// });






//UTILS:
function PrintJson(obj) {
    console.log(JSON.stringify(obj, null, 2));
}
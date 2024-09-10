var request = require('request');

//dummy event - will be gen by UE later
/* EventTags: Progression, SessionStart, Design, Error, Business,... */
var NewEvent = {
	UserId: "2",
	EventName: "Evento3",
	EventTags: ["Test"], 
	TimeStamp: Date.now(),
	Data: "CustomDataField",
	Location: {
		x: 1.0,
		y: 2.0,
		z: 3.0
	},
	Rotation: {
		roll: 90.0,
		pitch: 60.0,
		yaw: 30.0
	}
}


//Retrieve all events list - ok 
// fetch('http://localhost:3000/events')
    // .then((response) => response.json())
    // .then((data) => {
        // console.log(data);
    // }); 



//Retrieve all events of a specific user - ok
/*const apiUrl = `http://localhost:3000/eventsByUser/10000`;
fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    }).catch(error => {
		console.log(error);
  }); */
  
  

//Add new event - ok
fetch('http://localhost:3000/newevent', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        NewEvent
    })
}).then((response) => response.json())
  .then((data) => {
        console.log(data);
});






//UTILS:
function PrintJson(obj) {
    console.log(JSON.stringify(obj, null, 2));
}
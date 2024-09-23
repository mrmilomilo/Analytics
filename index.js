const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.listen(PORT, () => {
	console.log("Server started on port: ", PORT);
});


const db = new sqlite3.Database('./events.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to events database');
});

//ENDPOINTS:
app.get("/status", (request, response) => {
		const resp = {
			"Status": "Running"
		};
		response.send(resp);
});

//list all events in json - ok
app.get("/events", (request, response) => {
	console.log("printing entire db...");
	
  db.all('SELECT * FROM Events', (err, rows) => {
    if (err) {
      console.error(err.message);
      response.status(500).send('Error while querying db');
    } else {
	  
	//console.log(rows[0]);
		
      response.send(rows);
    }
  });
});

//get all events associated to one user - ok 
app.get("/eventsByUser/:UserId", (req, res) => {
	const {UserId} = req.params;
	console.log("/eventsByUser/:UserId/" + [UserId] );
	
	
	db.get('SELECT * FROM Events WHERE UserId = ?', [UserId], (err, row) => {
		if (err) {
		  console.error(err.message);
		  res.status(500).send('Error while querying db');
		} else if (!row) {
		  console.log('UserId not found');
		  var NotFound = { Message: "UserId not found" }
		  res.send(NotFound);
		} else {
		  res.send(row);
		}
	});
	
});


//get all events associated to one user - ok 
app.get("/eventsByUser/:UserId", (req, res) => {
	const {UserId} = req.params;
	console.log("/eventsByUser/:UserId/" + [UserId] );
	
	
	db.get('SELECT * FROM Events WHERE UserId = ?', [UserId], (err, row) => {
		if (err) {
		  console.error(err.message);
		  res.status(500).send('Error while querying db');
		} else if (!row) {
		  console.log('UserId not found');
		  var NotFound = { Message: "UserId not found" }
		  res.send(NotFound);
		} else {
		  res.send(row);
		}
	});
	
});


//save new event into db - ok
app.post("/newevent", (req,res) => {
	console.log("Received new event:");
	
	var e = req.body;
	PrintJson(e);

	console.log('userid ' + e.NewEvent.UserId);
	
	//TODO: sanitize received data ?!

	const sql = 'INSERT INTO [Events] ([UserId],[EventName],[EventTags],[TimeStamp],[Data],[Location.x],[Location.y],[Location.z], [Rotation.roll],[Rotation.pitch],[Rotation.yaw], [SessionId]) VALUES ' + '(?,?,?,?,?,?,?,?,?,?,?,?)';
	db.run(sql, [e.NewEvent.UserId,e.NewEvent.EventName,e.NewEvent.EventTags, e.NewEvent.TimeStamp, e.NewEvent.Data, e.NewEvent.Location.x, e.NewEvent.Location.y, e.NewEvent.Location.z, e.NewEvent.Rotation.roll, e.NewEvent.Rotation.pitch, e.NewEvent.Rotation.yaw, e.NewEvent.SessionId], function(err) {
		if (err) {
			var InsError = {Message:"Insert failed"}
			res.send(InsError);
			return console.log(err.message);
		}
		
		var InsSuccess = {Message: "Event recorded!"}
		console.log('Event recorded!');
	});
	
});


//UTILS
function PrintJson(obj) {
    console.log(JSON.stringify(obj, null, 2));
}




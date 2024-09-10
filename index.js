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

//list all events in json
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

app.get("/eventsByUser/:UserId", (req, res) => {
	const {UserId} = req.params;
	console.log("printing events with UserID: " );
	
	
	db.get('SELECT * FROM Events WHERE UserId = ?', [UserId], (err, row) => {
		if (err) {
		  console.error(err.message);
		  res.status(500).send('Error while querying db');
		} else if (!row) {
		  res.status(404).send('UserId not found');
		} else {
		  res.send(row);
		}
	});
	
});



app.post("/newevent", (req,res) => {

	PrintJson(req.body);
	
	res.send("new event saved");
});


//UTILS
function PrintJson(obj) {
    console.log(JSON.stringify(obj, null, 2));
}




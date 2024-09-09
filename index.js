const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.listen(PORT, () => {
	console.log("Server started on port: ", PORT);
});


//ENDPOINTS:
app.get("/status", (request, response) => {
		const resp = {
			"Status": "Running"
		};
		
		response.send(resp);
});


/*

{
	"EventName": 
}


*/
app.post("/newevent", (req,res) => {

	PrintJson(req.body);
	
	res.send("new event saved");
});





//UTILS
function PrintJson(obj) {
    console.log(JSON.stringify(obj, null, 2));
}
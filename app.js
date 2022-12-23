const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

const {PythonShell} =require('python-shell');
const bodyParser = require("body-parser")
var jsonParser = bodyParser.json()

app.get("/", function (req, res) {
  res.render("pages/level1");
});

app.get("/level2", function (req, res) {
  res.render("pages/level2");
});

app.get("/level3", function (req, res) {
  res.render("pages/level3");
});

let map = new Map();
map["l1q1"]="l1q1.py",
map["l1q2"]="l1q2.py",
map["l1q3"]="l1q3.py",
map["l2q1"]="l2q1.py",
map["l2q2"]="l2q2.py",
map["l3q1"]="l3q1.py",
map["l3q2"]="l3q2.py",

app.post("/output",jsonParser,(req,res)=>{

    var file = map[req.body.identifier]
    let options = {
        mode: 'text',
        pythonOptions: ['-u'], // get print results in real-time
        scriptPath: process.env.SCRIPT_PATH, //If you are having python_test.py script in same folder, then it's optional.
        args: [req.body.input] //An argument which can be accessed in the script using sys.argv[1]
    };	
	
	PythonShell.run(file, options, function (err, result){
          if (err){
		  var responseData = {
		  output:"error"
	  	  } 
	  	  const jsonContent = JSON.stringify(responseData);
  	  	  res.end(jsonContent);
		  return
	  }
      	  
	  try{
	  	var responseData = {
			output:result.toString()
	  	}
	  }catch(err){
		var responseData = {
		  output:"error"
	  	  } 
	  	  const jsonContent = JSON.stringify(responseData);
  	  	  res.end(jsonContent);
	 	  return
	  }
	  const jsonContent = JSON.stringify(responseData);
  	  res.end(jsonContent);
	});
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server started on port 3000");
});

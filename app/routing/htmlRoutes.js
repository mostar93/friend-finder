
var path = require("path");

//ROUTES 
//===============================================================
function htmlRoutes(app) {
  
    app.get('/survey', function(req,res){
      console.log("HTML ROUTE IS WORKING")
      
      res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
  
    app.use(function(req,res){
      console.log("API NOT DOING THE app.<function>")
      res.sendFile(path.join(__dirname, '../public/home.html'));
    });
  };


module.exports = htmlRoutes;

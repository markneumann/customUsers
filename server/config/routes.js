console.log("loading routes");
//********** RESTful routes ********!!
var mongoose = require('mongoose');
var Names = mongoose.model('Name');
var API = require('../controller/API_controller.js');

module.exports = function(app){
    console.log(API);
    app.get('/', API.index);
    app.get('/new/:name', API.new_name);
    app.get('/remove/:id', API.remove_name);
    app.get('/:id', API.show_name);
    //app.get("*", route404);
};
//********** End routes **************

function route404(req, res) {
    console.log("404 error for " + req.url);
}

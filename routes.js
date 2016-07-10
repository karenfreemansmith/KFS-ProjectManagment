var views = require("./views.js");
var html='"Content-Type": "text/html"';

function pages(request, response) {

    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    if(request.url === "/") {
      views.view("index", {}, response);
    } else if(request.url === "/project") {
      views.view("project", {}, response);
    } else if(request.url === "/resources") {
      views.view("resources", {}, response);
    } else if(request.url === "/status") {
      views.view("status", {}, response);
    } else{
      response.write("Not Found");
    }
    views.view("footer", {}, response);
    response.end();

}


module.exports.pages = pages;

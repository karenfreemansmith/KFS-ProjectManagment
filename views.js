var fs = require("fs");

function mergeValues(values, fileContents) {
  var content=fileContents;
  for(var key in values) {
    if(key==="stylesheet") {
      content=content.replace("{{"+key+"}}", fs.readFileSync(values[key], {encoding: "utf8"}));
    } else {
      content=content.replace("{{"+key+"}}", values[key]);
    }
  }
  return content;
}

function view(templateName, values, response) {
  var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"});
  fileContents=mergeValues(values, fileContents);
  response.write(fileContents);
}

module.exports.view = view;

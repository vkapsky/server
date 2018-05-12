var http 	= require('http');
var fs 		= require('fs');

http.createServer(function(request, response) {
 
    response.writeHead(200, {
        'Content-Type': 'text/json',
		'Access-Control-Allow-Origin': '*',
		'X-Powered-By':'nodejs'
    });


    fs.readFile('timetable.json', function(err, content){
        response.write(content);
        response.end();
    });

}).listen(process.env.PORT || 5000);

//console.log("Listening on port " + port );
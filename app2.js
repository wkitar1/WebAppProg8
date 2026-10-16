const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write('Content \n')
res.write('<h2>Places I want to visit</h2>')
      res.write('<p>There are many beautiful places around the world that I would love to visit. Here are four places that I hope to see someday.</p>')
      res.write('<table border="1">')
      res.write('<tr><th>Place</th><th>Country</th><th>Why I Want to Visit</th></tr>')
      res.write('<tr><td>Mount Fuji</td><td>Japan</td><td>I want to see the beautiful mountain and enjoy the scenery.</td></tr>')
      res.write('<tr><td>Eiffel Tower</td><td>France</td><td>I want to see the famous landmark and explore Paris.</td></tr>')
      res.write('<tr><td>Great Wall of China</td><td>China</td><td>I want to experience its history and amazing views.</td></tr>')
      res.write('<tr><td>Santorini</td><td>Greece</td><td>I want to see the beautiful buildings and enjoy the ocean views.</td></tr>')
      res.write('</table>')   
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the start
})
const http = require('http')

const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port
 
const ingredients=[{name: "flour", amount: 1, unit: "cup"}, 
    {name: "sugar", amount: 1, unit: "cup"},
     {name: "eggs", amount: 2, unit: "pieces"}, 
     {name: "butter", amount: 0.5, unit: "cup"}, 
     {name: "milk", amount: 1.5, unit: "cups"}]

const used=[false, false, false, false, false]
let left=5
const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {              //Anonymous function to handle the request
              res.statusCode = 200      //code for OK
              res.setHeader('Content-Type', 'text/html') //Set the mime type HTML
        
              res.write('<html> <head> <title>Wiam Waffles Ingredients</title> </head>')
              res.write('<body>')
              res.write('Content \n')
        res.write('<h2>Wiam lists Waffles ingredients</h2>')
        if(left==0){
            res.write('<p>Nothing left</p>')
        }else{
            let i=Math.floor(Math.random()*ingredients.length)
            while(used[i]==true){
                i=i+1
                if(i==ingredients.length){
                    i=0
                }
            }used[i]=true
            left=left-1
            const item=ingredients[i]
            res.write(`<p>Index ${i}: ${item.amount} ${item.unit} ${item.name}</p>`)
        }
            res.end('</body></html>')
        })
        server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the start

})
const http = require('http') // core module NodeJS
const checkEmail = require('./checkEmail');
const country = require('./countryList');
const port = 3000;

const server = http.createServer((req, res) => {
  // request from client
  // response to client
  
  console.log(req.method, 'THIS IS METHOD???')
  if(req.url === '/profile') {
    res.writeHead(200, {
        'Content-Type': 'text/html'
      })
    res.write('<h1>This is Profile Menu</h1>')
    res.write('Name: Amelia Rahman </br>')
    res.write('Nasionality: Indonesia </br>')
    res.write(`Country: ${country('ID')}`)
  } else if(req.url === '/blog') {
    res.writeHead(200, {
        'Content-Type': 'text/html'
      })
    res.write(`Check Email of amel.rahman5@gmail.com: ${checkEmail('amel.rahman5@gmail.com')} </br>`)
    res.write('<a href=https://ameliarahman.github.io/> Amelia`s blog </a>' )
  } else if(req.url === '/') {
    res.writeHead(200, {
        'Content-Type': 'text/html'
      })
    res.write('<h1>This is main menu</h1>')
    res.write('Menu:')
    res.write('<li><a href=http://localhost:3000/profile> Profile</a> </li>')
    res.write('<li><a href=http://localhost:3000/blog> Blog </a></li>')
  } else {
    res.writeHead(404, {
        'Content-Type': 'text/html'
      })
    res.write('<h1>Not Found</h1>')
  }
  res.end()
})

server.listen(port, () => {
    console.log(`HALLO I'M LISTENING TO PORT ${port}`)
})

// const checkEmail = require('./checkEmail');
// const country = require('./countryList');

// console.log(checkEmail("amelia@gmail.com"), 'THIS IS TO CHECK EMAIL FROM NPM')
// console.log(checkEmail("amelia@gmail"), 'THIS IS TO CHECK EMAIL FROM NPM')
// console.log(checkEmail("ameliagmail.com"), 'THIS IS TO CHECK EMAIL FROM NPM')

// console.log(country('US'), 'THIS IS FROM NPM COUNTRY LIST')

// console.log('HELLO FROM NON CALLBACK')
// setTimeout(() => {
//     console.log('HELLO FROM CALLBACK....')
// }, 7000)
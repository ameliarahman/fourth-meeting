const http = require('http'); // Require core module NodeJS
const profile = require('./profile');
const country = require('country-state-city');
const port = 2100;

const server = http.createServer((req, res) => {
    
    if(req.url === '/profile') {
        res.writeHead(200, {
            'Content-Type': 'text/html',
        })
        res.write('This is profile page </br>')
        res.write(`<h2>Name : ${profile().name} </h2>`);
        res.write(`<h2>Email: ${profile().email} </h2>`)
        res.write(`<h2>Check Email: ${profile().checkEmail} </h2> <br>`)
        res.write('<a href=http://localhost:2100/blog>This is Blog Page</>')
    } else if(req.url === '/blog') {
        res.writeHead(200, {
            'Content-Type': 'text/html',
        })
        res.write('This is blog page')
        res.write("<a href=https://ameliarahman.github.io/>This is My Blog</> <br>")
        res.write('<a href=http://localhost:2100/profile>This is Profile Page</>')
    } else if(req.url === '/country') {
        const countryName = country.Country.getCountryByCode('ID')
        res.write('<h1>This is country name:<h1>')
        res.write(JSON.stringify(countryName));
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html',
        })
        res.write('<h1>Page Not Found<h1>')
    }
 
    res.end()
    // req ---> request dari client;
    // res ---> response untuk client;
})

server.listen(port, () => {
    console.log(`Hai I'm listening to port ${port}`)
})

// // const email = require('./checkEmail');


// // console.log(email.checkEmail('amel.rahman5@gmail.com'), 'THIS IS CHECK EMAIL FORMAT')

// console.log('Console log 1')
// console.log('Console log 2')
setTimeout(() => {
 console.log('TO CHECK CALLBACK')   
}, 6000)
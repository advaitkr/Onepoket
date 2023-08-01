const express = require('express');
const app = express();
const dotenv = require('dotenv');
const readline = require('readline');

const {sumArray} = require('./sum')
const {countWord} = require('./wordcount')
let res = countWord('./data.txt')
setTimeout(() => {
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
 
  rl.question('Enter a space-separated list of integers: ', (input) => {
    rl.close();
    const numbers = input.split(' ').map(Number);
      try {
      const result = sumArray(numbers);
      console.log(`Sum of the numbers: ${result}`);
    } catch (err) {
      console.error(err.message);
    }
  });
},5000)
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
dotenv.config()
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

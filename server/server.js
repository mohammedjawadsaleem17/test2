const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/test",(req,res)=>{
  res.send("Hey I am Working !!")
})


app.post('/fizzbuzz', (req, res) => {
  const { values } = req.body;
  console.log(`These are the values that i gotcha`,values);
//Values return type is an Array!
console.log(typeof values[0])
  const result = values.map(value => {
    console.log(`individual value`,value);

    //Here the division happens since javascript allows/treats string numbers "1" as a Number and performs the divison
    const divisible3 = value % 3 === 0;
    const divisible5 = value % 5 === 0;
    const divisions = [];

    if (divisible3) divisions.push(` Divided ${value} by 3`);
    if (divisible5) divisions.push(`Divided ${value} by 5`);

    if (divisible3 && divisible5) return { value, output: 'FizzBuzz', divisions };
    if (divisible3) return { value, output: 'Fizz', divisions };
    if (divisible5) return { value, output: 'Buzz', divisions };
    if (isNaN(value)) return { value, output: 'Invalid item', divisions: [] };

    return { value, output: '', divisions };
  });
  console.log(`I am returning the json reponse`)
  res.json(result);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

/*const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/fizzbuzz', (req, res) => {
  const { values } = req.body;
  console.log(`here is your values jawad`,values)
//   const filterization = values.split(",");
//   console.log(filterization)
    // console.log(typeof values)
    const actualArray = Object.values(values);
    console.log(typeof actualArray)
  const results = values.map(fizzbuzz);
  res.json(results);
});

function fizzbuzz(value) {
  if (typeof value !== 'number') {
    return `${value} - Invalid item`;
  }

 

  if (value % 3 === 0 && value % 5 === 0) {
    return 'FizzBuzz';
  } else if (value % 3 === 0) {
    return 'Fizz';
  } else if (value % 5 === 0) {
    return 'Buzz';
  } else {
    return value;
  }
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
*/
//Our backend Logic is Now Implemented!!!

// const express = require("express");
// const app = express();
// const cors = require('cors');
// const bodyParser = require('body-parser');

// app.use(cors());

// app.use(bodyParser.json());

// app.use("/api/data",(req,res)=>{
//     const data = req.body;
//     console.log(`Received Data`,data)

//     res.status(200).json({message:"Data Received Successfully"})
// })


//     app.get("/api",(req,res)=>{
//         res.send(`Hey We're Listening..`)
//     })

// app.post('/fizzbuzz',(req,res)=>{
//     const values = req.body.values;
//     console.log(values)
//     const results = [];

//     //Test Value = [3,4,5,"A"]

//     for(const value of values){
//         let result = "";
//         const isDivisibleBy3 = value%3===0;
//         const isDivisibleBy5 = value%5===0;

//         if(isDivisibleBy3 && isDivisibleBy5){
//             result="FizzBuzz";

//         }else if(isDivisibleBy3){
//             result = "Fizz";
//         }else if(isDivisibleBy5){
//             result = "Buzz";
//         }else if(isNaN(value)){
//             result = "Invalid Item"
//         }else{
//             result = `Divided ${value} by 3 Divided ${value} by 5`
//         }
//         results.push(result);
//     }
    
//     res.json({results});
// })


// app.listen(5000,()=>{
//     console.log("App Listening at Port 5000")
// })
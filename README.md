
# Installation

$ npm install normalizer

# JavaScript API

Below is an example of how to utilize normalizer. It normalizes array that has id attribute.

var normalizer = require('normalizer');

let data = {
  fisrt:{
    second:[{id:1, value: 1}],
    third:[{value:3}]
  }
}
normalizer(data); 

/*
Output: 
  first:{
    second:{
      1:{
        value:1
      }
    },
    third:[{value:3}]
  }
*/


# License

MIT © Akash Verma

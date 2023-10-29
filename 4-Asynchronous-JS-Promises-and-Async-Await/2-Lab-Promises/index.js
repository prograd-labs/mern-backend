const fs = require('fs');
const superagent = require('superagent');

const readFilePromise = (fileName)=>{
  // edit here
}


const writeFilePromise = (file,data)=>{
  // edit here
}

// do not edit this
readFilePromise(`${__dirname}/dog.txt`)
  .then(data=>{
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)})
  .then(result=>{
    return writeFilePromise('dog-img.txt',result.body.message)})
  .catch(err=>{
    console.log(err)
  });

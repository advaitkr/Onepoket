const fs = require('fs');

const wordsCount =(text) =>{
 const words = text.trim().split(/\s+/);
 const filteredWords = words.filter((word) => word !== '');
return filteredWords.length;
}
function countWord(dataset){
    setTimeout(() => {
        fs.readFile(dataset, 'utf8', (err, data) => {
            if (err) {
              console.error('Error reading the file:', err.message);
              return;
            }
           const wordCount = wordsCount(data);
           console.log(`Total word count: ${wordCount}`);
           return "${wordCount} words"
          });
    }, 2000);
}




module.exports = {countWord}

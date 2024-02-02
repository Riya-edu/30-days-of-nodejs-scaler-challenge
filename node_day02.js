const fs = require('fs');

function writeToFile(filepath, content) {
    fs.writeFile(filepath, content, (err) => {
        if(err) {
            console.error('error writing to file: ${err.message}');
        }
        else{
            console.log('Data Written to output.txt');
        }
    });
}

writeToFile('output.txt', 'Content in a non- existent folder.');
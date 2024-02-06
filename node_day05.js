const path = require('path')

function checkFileExtension(filePath, expectedExtension) {

    let actualExtension = path.extname(filePath)
    if(actualExtension==expectedExtension){
        console.log("File has expected extension:",actualExtension)
    }
    else{
        console.log('File does not have the expected extension, Expected:',expectedExtension+',','Actual:',actualExtension)
    }
}

checkFileExtension('file.txt','.txt');
checkFileExtension('image.png','.jpg');
const { readFile } = require("fs");

function readFileContent(path) {
    return new Promise((resolve, reject) => {
        readFile(path, { encoding: "utf8" }, (err, data) => {
            if (err) {
                reject(err);
                //console.error("Error reading file: $(err.message)");
            } else {
                resolve(data);
                //console.log(data);
            }
        });
    });
}

readFileContent("empty-files.txt");
readFileContent("file1.txt");
readFileContent("nonexistent-files.txt");

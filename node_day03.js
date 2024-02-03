const { exec } = require('child_process');
const { clear } = require('console');

function executeCommand(command) {
    exec(command, (error, stdout, stderr) => {
        if (error){
            console.error('Error: ${error.message}');
            return;
        }
        if (stderr) {
            console.error('Error: ${stderr}');
            return;
        }
        console.log('Command Output:');
        console.log(stdout);
    });
}

executeCommand('dir');
executeCommand('echo "Hello, Node.js"')
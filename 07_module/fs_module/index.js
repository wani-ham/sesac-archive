const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'demo'), (err) => {
//     if(err) {
//         console.error(err);
//     }
//     console.log("made directory 'demo'");
// })

fs.readdir('./', (err, files) => {
    if(err) console.log("Error", err);
    else console.log("Result: ", files);
});

// fs.writeFile('test.txt', "Hello World2", (err) => {
//     if(err) throw err;
//     console.log("Made File!");
// });

// fs.open('test2.txt', 'w', (err, file) => {
//     if(err) throw err;
//     console.log("open file");
// })

// fs.unlink('test2.txt', (err) => {
//     if (err) throw err;
//     console.log("File deleted");
// });

fs.rename('test.txt', 'test1.txt', (err) => {
    if(err) throw err;
    console.log('File renamed!');
})
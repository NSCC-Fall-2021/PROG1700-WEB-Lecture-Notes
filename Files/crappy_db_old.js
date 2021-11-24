
var fs = require('fs')

// create the crappy database
function setup() {
    // create the data folder if it doesn't exist
    if (!fs.existsSync('data')) {
        fs.mkdirSync('data');
    }

    // navigate to the new folder
    process.chdir('data');
}

// insert some data
function insertData() {

    var records = [
        ['w000001', 'john', 'smith'],
        ['w000002', 'jane', 'doe'],
        ['w000003', 'jack', 'sprat']
    ]

    var fd = fs.openSync('crappy_db.txt', 'w');

    for (const r of records) {
        var newRec = `${r[0]},${r[1]},${r[2]}\n`;
        fs.writeSync(fd, newRec);
    }
    fs.closeSync(fd);

}

// select some records from the db
function selectData() {
    var fd = fs.openSync('crappy_db.txt');
    var contents = fs.readFileSync(fd, {encoding: "utf-8"});
    fs.closeSync(fd);

    // split contents by newline character
    var lines = contents.split('\n');

    for (const line of lines) {
        var fields = line.split(',');
        // where clause
        if (fields[2] === 'doe') {
            console.log(line);
        }
    }

}

// update some records in the db
function updateData() {

    var outfile = fs.openSync('updated_db.txt', 'w');
    var infile  = fs.openSync('crappy_db.txt');

    var contents = fs.readFileSync(infile, {encoding: "utf-8"}).trimEnd();

    var lines = contents.split('\n');
    for (const line of lines) {
        var fields = line.split(',');

        if (fields[1] === 'jack') {
            fields[0] = 'W000004';
        }

        var newRec = fields.join(',') + '\n';
        fs.writeSync(outfile, newRec);
    }

    fs.closeSync(infile);
    fs.closeSync(outfile);

    fs.copyFileSync('updated_db.txt', 'crappy_db.txt');
    fs.rmSync('updated_db.txt');
}

// delete some records from the db
function deleteData() {

    var outfile = fs.openSync('updated_db.txt', 'w');
    var infile  = fs.openSync('crappy_db.txt');

    var contents = fs.readFileSync(infile, {encoding: "utf-8"}).trimEnd();

    var lines = contents.split('\n');
    for (const line of lines) {
        var fields = line.split(',');

        if (fields[0] !== 'w000001') {
            fs.writeSync(outfile, line + '\n');
        }
    }

    fs.closeSync(infile);
    fs.closeSync(outfile);

    fs.copyFileSync('updated_db.txt', 'crappy_db.txt');
    fs.rmSync('updated_db.txt');
}

setup();
insertData();
selectData();
updateData();
deleteData();

var emojis = {
    'greenheart': '\u{1F49A}',
    'happyface': '\u{1F604}',
    'santa': '\u{1F385}',
    'tree': '\u{1F384}',
    'poop': '\u{1F4A9}'
}

function main() {
    //console.log(process.argv)

    var args = process.argv.slice(2)
    //console.log(args)

    //console.log("\u{1F604}")



    if (args[0] === "-h") {

        console.log("Usage: node show_emojis.js <name> <name> ... ")
        process.exit(-1);

    } else {
        for (var i = 0; i < args.length; i++) {
            showEmoji(args[i]);
        }
    }
}

function showEmoji(name) {
    if (name in emojis) {
        process.stdout.write(emojis[name]);
    } else {
        console.log(`"${name}" doesn't currently exist in our database.`);
        process.exit(-2);
    }
}

main();
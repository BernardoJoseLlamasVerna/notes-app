const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js')

//console.log(process.argv);

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
      title: {
          describe: 'Note title',
          demandOption: true, // hace que title sea obligatorio
          type: 'string' // que el tipo tenga que ser string
      },
      body: {
          describe: 'Note body',
          demandOption: true,
          type: 'string'

      }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
      title: {
          describe: 'Note title',
          demandOption: true,
          type: 'string'
      }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});

// List command
yargs.command({
    command: 'list',
    describe: 'List all elements',
    handler() {
       notes.listNotes();
    }
});

// Read command
yargs.command({
    command: 'read',
    describe: 'Read elements stored',
    builder: {
      title: {
       describe: 'Note title',
       demandOption: true,
       type: 'string'
      }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
});

console.log(yargs.argv);
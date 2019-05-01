# Mini Bundler

This project is a study case, to better understand how module bundlers work and how major libraries like Babel and WebPack partially function.

## What does it do

Given a series of common.js code, this project can bundle said code into a single file. Constructing a graph of all the dependencies along the way.

## Dependencies

* esprima - a JavaScript parser

## How does it work

### index.js

This project is built so it can run both via the terminal or has it's own module.

The entry point would be the function `processFile(entryFile, projectFolder)`.
This function takes as parameters both the entry file of the app you would like to bundle, 
and the project folder where the rest of the code is.

This can also be executed via terminal like `$ node index.js entry.js demo`

* `entry.js` is the entry point of my application
* `demo` is the folder where the rest of the dependencies are located.

this main function returns the dependency tree it builds by analysing the code, and outputs a `bundle.js` file in the given project folder.
This `bundle.js` contains all the code in all the required files, compiled in a single one.

NOTE: the file path is resolved with the context of `__dirname` so it always assumed everything is within the project folder.

### saveToFile readFile

These are simple helper functions to read and write files.
They make use of both `fs` and `path` to read and resolve file path names respectively.

### generateGraph

This is where the bulk of the logic resides.

`GenerateGraph` is a recursive function that does 3 things:

1. reads a certain file
2. parses it's contents via Esprima - which generates the AST
3. analyses the AST and finds if that file depends on others

it generates an array which looks something like this:

```
[ {
    id: 0,
    name: 'banana.js',
    requirer: 'fruit.js,
    file: "a string containing the source code"
},
... ]
```
in this example we are looking at the file `fruit.js` which requires the file `banana.js`. The source code in `file` would be that of `banana.js`

### bundle

Given the array generated from `generateGraph`, the `bundle` function iterates over it and inserts the source code in order, building our `bundle.js`.

Once all the files are concatenated into a single string, it is output into a file.
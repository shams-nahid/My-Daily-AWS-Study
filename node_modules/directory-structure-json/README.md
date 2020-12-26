Directory Structure JSON
========================

This module exposes functions with which you can:

* Get a JSON structure of a folder (including subdirectories and files), note that you have specify the `filesystem` to use yourself
* Traverse a structure, giving callbacks to execute when a file or folder is found

## Installation
    npm install --save directory-structure-json

## Example of a directory structure output
``` json
 [
    {
        "type": "file",
        "name": "index.js"
    },
    {
        "name": "node_modules",
        "type": "folder",
        "children": [
            {
                "name": "path",
                "type": "folder",
                "children": [
                    {
                        "type": "file",
                        "name": "path.js"
                    },
                    {
                        "type": "file",
                        "name": "package.json"
                    },
                    {
                        "type": "file",
                        "name": "README.md"
                    }
                ]
            }
        ]
    }
]
```

## Get directory structure
``` javascript
var DirectoryStructureJSON = require('directory-structure-json');
var basepath = 'path/to/some/folder';
var fs = require('fs'); // you can select any filesystem as long as it implements the same functions that native fs uses.

DirectoryStructureJSON.getStructure(fs, basepath, function (err, structure, total) {
    if (err) console.log(err);

    console.log('there are a total of: ', total.folders, ' folders and ', total.files, ' files');
    console.log('the structure looks like: ', JSON.stringify(structure, null, 4));
});
```

## Traverse structure
The structure retrieved from the example above can be traversed.


``` javascript
var DirectoryStructureJSON = require('directory-structure-json');
var basepath = 'path/to/some/folder'; // this will be prepended to the paths found in the structure

DirectoryStructureJSON.traverseStructure(structure, basepath,
function (folder, path) {
    console.log('folder found: ', folder.name, 'at path: ', path);
},
function (file, path) {
    console.log('file found: ', file.name, 'at path: ', path);
});
```

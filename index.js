const express = require('express');
const DirectoryStructureJSON = require('directory-structure-json');
const fs = require('fs');
const cors = require('cors');
const morgan = require('morgan');

const basePath = './public';

const app = express();

app.use(express.static('public'));
app.use(cors());
app.use(morgan('combined'));

const structureFormatter = (structure, parentPath = '') => {
  return structure.map(node => {
    const { type, name, children } = node;
    let formattedChildren = null;
    let formattedFileName = name;

    if (type === 'folder') {
      formattedChildren = structureFormatter(
        children,
        [parentPath, name].join('/')
      );
    }

    // if (/\d/.test(name)) {
    //   formattedFileName = name.replace(/^.{3}/g, '')
    // }

    if (type === 'file') {
      formattedFileName = formattedFileName.replace('.md', '');
    }

    const path = [parentPath, name].join('/');
    return {
      type,
      name: formattedFileName,
      children: formattedChildren,
      path,
      content:
        type === 'file'
          ? fs.readFileSync([basePath, path].join(''), 'utf8')
          : ''
    };
  });
};

app.get('/', (req, res) => {
  DirectoryStructureJSON.getStructure(fs, basePath, function (err, structure) {
    if (err) console.log(err);
    return res.json(structureFormatter(structure));
  });
});

app.listen(8081, () => console.log('App is listening on port 8081'));

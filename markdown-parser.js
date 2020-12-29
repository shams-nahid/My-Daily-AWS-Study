const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const DirectoryStructureJSON = require('directory-structure-json');
const fs = require('fs');

const structureFormatter = (structure, parentPath = '', basePath) => {
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

const parseMarkdownTree = (basePath, cb) => {
  return DirectoryStructureJSON.getStructure(
    fs,
    basePath,
    function (err, structure) {
      if (err) console.log(err);
      return cb(structureFormatter(structure, basePath));
    }
  );
};

const runServer = (
  basePath = './public',
  publicDirectoryPath = 'public',
  routePath = '/tree',
  port = 8081
) => {
  const app = express();

  app.use(express.static(publicDirectoryPath));
  app.use(cors());
  app.use(morgan('combined'));

  app.get(routePath, (req, res) => {
    parseMarkdownTree(basePath, result => {
      return res.json(result);
    });
  });

  app.listen(port, () => console.log(`App is listening on port ${8081}`));
};

module.exports = {
  runServer
};

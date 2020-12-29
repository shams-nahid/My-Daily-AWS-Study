const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { parseMarkdownTree } = require('./markdown-parser');

const basePath = './public';
const publicDirectoryPath = 'public';
const routePath = '/tree';

const app = express();

app.use(express.static(publicDirectoryPath));
app.use(cors());
app.use(morgan('combined'));

app.get(routePath, (req, res) => {
  parseMarkdownTree(basePath, (result) => {
    return res.json(result);
  });
});

app.listen(8081, () => console.log('App is listening on port 8081'));

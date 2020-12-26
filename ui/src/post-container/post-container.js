import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import TreeViewContainer from './tree-view';
import PostDetails from './post-details';
import axios from 'axios';

function PostContainer() {
  const [fileTree, setFileTree] = useState([]);
  const [selectedNode, setSelectedNode] = useState({});
  const onSelectNode = node => {
    window.scrollTo(0, 0);
    setSelectedNode(node);
  };
  useEffect(() => {
    axios
      .get('http://localhost:8080/')
      .then(function (response) {
        setFileTree(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <Grid
      container
      direction='row'
      justify='flex-start'
      alignItems='flex-start'
    >
      <Grid item>
        <TreeViewContainer fileTree={fileTree} onSelectNode={onSelectNode} />
      </Grid>
      <Grid item>
        <PostDetails selectedNode={selectedNode} />
      </Grid>
    </Grid>
  );
}

export default PostContainer;

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
    const url =
      process.env.NODE_ENV === 'production'
        ? 'http://bus-spotter.com:8081/tree'
        : 'http://localhost:8081/tree';
    axios
      .get(url)
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
      style={{ height: '100vh' }}
    >
      <Grid item md={3} sm={3} xs={3}>
        <TreeViewContainer fileTree={fileTree} onSelectNode={onSelectNode} />
      </Grid>
      <Grid item md={9} sm={9} xs={9}>
        <PostDetails selectedNode={selectedNode} />
      </Grid>
    </Grid>
  );
}

export default PostContainer;

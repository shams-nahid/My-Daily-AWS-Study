import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400
  }
});

export default function TreeViewContainer({ fileTree = [], onSelectNode }) {
  const classes = useStyles();

  const renderTreeNode = nodes =>
    nodes.map(node => {
      const { type, name, children } = node;
      return (
        <TreeItem
          style={{ backgroundColor: '#b9c3ff' }}
          nodeId={name}
          label={name}
          onClick={() => type === 'file' && onSelectNode(node)}
        >
          {children ? renderTreeNode(children) : null}
        </TreeItem>
      );
    });

  return (
    <div style={{ height: '100vh', backgroundColor: '#b9c3ff' }}>
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {renderTreeNode(fileTree)}
      </TreeView>
    </div>
  );
}

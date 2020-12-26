import React, { useEffect, useRef } from 'react';
const ReactMarkdown = require('react-markdown');

function PostDetails({ selectedNode }) {
  const { content } = selectedNode;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <ReactMarkdown>{content}</ReactMarkdown>;
}

export default PostDetails;

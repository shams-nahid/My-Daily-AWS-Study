import React, { useEffect } from 'react';
const ReactMarkdown = require('react-markdown');

function PostDetails({ selectedNode }) {
  const { content } = selectedNode;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{ paddingLeft: '15px' }}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default PostDetails;

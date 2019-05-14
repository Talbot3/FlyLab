import React from 'react';

function Contacts() {
  return (
    <div className="Contacts" />
  );
}

function Chat() {
  return (
    <div className="Chat" />
  );
}

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="splitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      }
    />
  );
}

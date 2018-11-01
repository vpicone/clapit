import React, { useState, createRef, useEffect } from "react";
import * as clipboard from "clipboard-polyfill";
import { Button, Input, Container, Title } from "./components";


const App = () => {
  const inputRef = createRef();
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onTextChange = e => {
    setText(e.target.value.split(" ").join("👏"));
  };

  const onCopyClick = () => {
    clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <Container>
      <Title>CLAP TEXT GENERATOR</Title>
      <Input
        ref={inputRef}
        placeholder="👏"
        type="text"
        value={text}
        onChange={onTextChange}
      />
      <Button copied={copied} onClick={onCopyClick}>
        COP
        {copied ? "IED" : "Y"}
      </Button>
    </Container>
  );
};

export default App;

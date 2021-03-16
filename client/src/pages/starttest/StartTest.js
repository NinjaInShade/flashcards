import React, { useState } from "react";
import Button from "../../components/util/button/Button";

import "./StartTest.css";

export default function StartTest() {
  const [collection, setCollection] = useState(false);

  return (
    <main className="start-test">
      <h1>Choose a collection to be tested on</h1>
      <Button disabled={!collection}>Start test</Button>
    </main>
  );
}

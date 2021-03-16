import React, { useState } from "react";
import Button from "../../components/util/button/Button";

import "./StartTest.css";

export default function StartTest() {
  const [collection, setCollection] = useState(false);

  function startTest() {}

  return (
    <main className="start-test">
      <h1 className="start-test-header">Choose a collection to be tested on</h1>
      <p className="start-test-lead">* Only collections with flashcards are shown *</p>
      <Button className="start-test-btn" onClick={startTest} disabled={!collection}>
        Start test
      </Button>
    </main>
  );
}

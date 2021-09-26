import { useRef, useState, useContext } from "react";
import { Container } from "./style";
import { InfoContext } from "../../hooks/InfoContext";

export function NewInfo() {
  const { createInfo } = useContext(InfoContext);
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredValuesIsValid, setEnteredValuesIsValid] = useState(true);

  async function formSubmissionHandler(event) {
    event.preventDefault();
    const data = { enteredName, enteredAge };

    if (data.enteredAge === "" || data.enteredName === "") {
      setEnteredValuesIsValid(false);
      return;
    } else {
      await createInfo(enteredName, enteredAge);
      setEnteredValuesIsValid(true);
    }
  }

  return (
    <Container className="content" onSubmit={formSubmissionHandler}>
      <h2> Insert a new age </h2>
      <input
        ref={nameInputRef}
        placeholder="Name"
        onChange={(event) => setEnteredName(event.target.value)}
      />
      <input
        placeholder="New Age"
        type="number"
        onChange={(event) => setEnteredAge(event.target.value)}
      />
      {!enteredValuesIsValid && <p data-testid="p">Please, enter all values.</p>}
      <button type="submit"> + </button>
    </Container>
  );
}

import { useContext } from "react";
import { InfoContext } from "../../hooks/InfoContext";
import { Container } from "./style";
import { AgeTracker } from "../../AgeTracker";

export function Summary() {
  const { infos } = useContext(InfoContext);
  console.log(infos);
  const agesArray = infos.map((info) => {
    return {
      age: info.age,
    };
  });
  
  const ageMethExecute = new AgeTracker(agesArray);

  return (
    <Container>
      <div>
        <header>
          <p> Highest </p>
        </header>
        <strong> {ageMethExecute.Highest}</strong>
      </div>
      <div>
        <header>
          <p> Lowest </p>
        </header>
        <strong> {ageMethExecute.Lowest} </strong>
      </div>
      <div>
        <header>
          <p> Average </p>
        </header>
        <strong> {parseFloat(ageMethExecute.Average).toFixed(2)} </strong>
      </div>
    </Container>
  );
}

import { useContext } from "react";
import { InfoContext } from "../../InfoContex";
import { Container } from "./style";
export function Summary() {
  const { infos } = useContext(InfoContext);
  console.log(infos);
  const agesArray = infos.map((info) => {
    return {
      age: info.age,
    };
  });

  class AgeTracker {
    constructor(ages) {
      this.ages = ages;
    }

    mapAges = agesArray.map((infoAge) => {
      return parseFloat(infoAge.age);
    });

    get Soma() {
      return this.ageSum();
    }

    get Highest() {
      return this.ageHighest();
    }

    get Lowest() {
      return this.ageLowest();
    }

    get Average() {
      return this.ageAvg();
    }


    ageAvg() {
      const sum = this.mapAges.reduce((a, b) => a + b, 0);
      const avg = (sum / this.mapAges.length) || 0
      return avg
    }

    ageHighest() {
      const highestAge = Math.max(...this.mapAges)
      return highestAge;
    }

    ageLowest() {
      const lowestAge = Math.min(...this.mapAges)
      return lowestAge;
    }
  }

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

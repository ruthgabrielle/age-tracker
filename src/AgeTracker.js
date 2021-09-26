import { InfoAgesProvider } from "./hooks/InfoAgesContext";

export class AgeTracker {
    info = InfoAgesProvider()

    constructor(ages) {
      this.ages = ages;
    }
    
    mapAges = this.info.map((infoAge) => {
      return parseFloat(infoAge.age);
    });

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
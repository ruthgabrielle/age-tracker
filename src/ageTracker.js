class AgeTracker{
    constructor(age1, age2){
        this.age1 = age1; this.age2 = age2
    }

    get ageTotal(){
        return this.ageSum()
    
    }

    get highestAge1(){
        return this.highestAge()
    }

    get lowestAge1(){
        return this.lowestAge()
    }

    get avgAge1(){
        return this.avgAge()
    }

    ageSum(){
        return this.age1 + this.age2
    }

    highestAge(){
        if(this.age1 > this.age2){
            return this.age1
        } else {
            return this.age2
        }
    }

    lowestAge(){
        if(this.age1 < this.age2){
            return this.age1
        } else {
            return this.age2
        }
    }

    avgAge(){
        return (this.age1 + this.age2)/2
    }
}

const ageX = new AgeTracker(10, 25)
console.log('Total', ageX.ageTotal)
console.log('Average',ageX.avgAge1)
console.log('Highest', ageX.highestAge1)
console.log('Lowest', ageX.lowestAge1)

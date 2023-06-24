class Tamagotchi {
  constructor() {
    this.name = "Catmagotchi";
    this.hungry = 0;
    this.sleep = 0;
    this.play = 0;
    this.cry = 0;
    this.happy = 0;
    this.eat = 0;
    this.energy = 100;
  }

  born() {
    setInterval(() => {
      this.actualStatus();
      this.showStatus;
      this.hungry += 5;
      this.sleep += 5;
      this.play += 5;
      this.happy += 5;
      this.eat += 6;
      this.energy -= 5;
      this.statusReview();
    }, 10000);
  }

  stop() {
    clearInterval(life);
    this.showAlert(`The ${this.name} has stopped!`);
  }

  eating() {
    this.hungry -= 10;
    this.eat += 5;
    this.happy += 5;
    this.energy += 5;
    this.showAlert(`The ${this.name} has eaten`);
    this.statusReview();
  }

  playing() {
    this.hungry += 5;
    this.play += 5;
    this.energy -= 10;
    this.showAlert(`Have you played with ${this.name}`);
    this.statusReview();
  }

  sleeping() {
    this.hungry += 5;
    this.happy -= 10;
    this.energy += 10;
    this.sleep += 10;
    this.showAlert(`The ${this.name} is sleeping`);
    this.statusReview();
  }

  crying() {
    this.hungry -= 5;
    this.happy -= 5;
    this.eat -= 5;
    this.cry -= 10;
    this.sleep += 10;
    this.play += 10;
    this.showAlert(`The ${this.name} needs attention`);
    this.statusReview();
  }

  actualStatus() {
    console.log(
    `The mood of the ${this.name}: hungry: ${this.hungry}, happy: ${this.happy}, energy: ${this.energy}`
    );
  }

  statusReview() {
    
  }


}

// class Tamagotchi {
//   constructor() {
//     this.name = "Catmagotchi";
//     this.hungry = 0;
//     this.sleep = 0;
//     this.play = 0;
//     this.cry = 0;
//     this.happy = 0;
//     this.eat = 0;
//     this.energy = 100;
//   }

//   born() {
//     setInterval(() => {
//       this.actualStatus();
//       this.showStatus;
//       this.hungry += 5;
//       this.sleep += 5;
//       this.play += 5;
//       this.happy += 5;
//       this.eat += 6;
//       this.energy -= 5;
//       this.statusReview();
//     }, 10000);
//   }

//   stop() {
//     clearInterval(life);
//     this.showAlert(`The ${this.name} has stopped!`);
//   }

//   eating() {
//     this.hungry -= 10;
//     this.eat += 5;
//     this.happy += 5;
//     this.energy += 5;
//     this.showAlert(`The ${this.name} has eaten`);
//     this.statusReview();
//   }

//   playing() {
//     this.hungry += 5;
//     this.play += 5;
//     this.energy -= 10;
//     this.showAlert(`Have you played with ${this.name}`);
//     this.statusReview();
//   }

//   sleeping() {
//     this.hungry += 5;
//     this.happy -= 10;
//     this.energy += 10;
//     this.sleep += 10;
//     this.showAlert(`The ${this.name} is sleeping`);
//     this.statusReview();
//   }

//   crying() {
//     this.hungry -= 5;
//     this.happy -= 5;
//     this.eat -= 5;
//     this.cry -= 10;
//     this.sleep += 10;
//     this.play += 10;
//     this.showAlert(`The ${this.name} needs attention`);
//     this.statusReview();
//   }

//   actualStatus() {
//     console.log(
//     `The mood of the ${this.name}: hungry: ${this.hungry}, happy: ${this.happy}, energy: ${this.energy}`
//     );
//   }

//   statusReview() {
//     if (this.hungry >= 60) {
//       this.showAlert(`{$this.name} miawww is hungry, "Feed me human!"`);
//       this.showStatus();
//     }

//     if (this.happy <= 20) {
//       this.showAlert(`{$this.name} is sad and devastated. "Play whit me!"`);
//       this.showStatus();
//     }

//     if (this.energy <= 20) {
//       this.showAlert(`{$this.name} is tired. "I need a nap"`);
//       this.showStatus();

//     }

//     // me faltan más acciones(sleep,play,cry,eat)
//   }

//   showStatus() {
//     const statusElement = document.getElementById("status");
//     statusElement.innerHTML = `Hungry: ${this.hungry}, Happy: ${this.happy}, Energy: ${this.energy}`;
//   }

// showAlert() {
//   const alert = document.getElementById("aleert");
//   alert.innerHTML = messageAlert;
// }

// reborn() {
//   if (this.hungry >= 100 || this.happy <= 0 || this.energy <= 0) {
//     this.showAlert(`${this.name} has 6 more lives`);
//     this.hungry = 0;
//     this.happy = 0;
//     this.energy = 100;
//   }
// }
// }

// const Catmagotchi = new Tamagotchi();

// life = setTimeout(() => {
//   Catmagotchi.showStatus();
//   Catmagotchi.actualStatus();
// }, 200000);

// Catmagotchi.born();
// Catmagotchi.showStatus();
// Catmagotchi.actualStatus();

// const $btnEat = document.getElementById("btn-eat"),
//   $btnPlay = document.getElementById("btn-play");
//   $btnSleep = document.getElementById("btn-sleep");

//   function changeStatus(imagen) {
//     const $imagen = document.getElementById("tamagotchi");
//     $imagen.src = imagen;
//   }

//   document.addEventListener("click", (e) => {
//     if (e.target === $btnEat) {
//       changeStatus("./assets/eating-unscreen.gif");
//       Catmagotchi.eat();
//       Catmagotchi.showStatus();
//     }
//     if (e.target === $btnPlay) {
//       changeStatus("./assets/playing-unscreen.gif");
//       Catmagotchi.play();
//       Catmagotchi.showStatus();
//     }
//     if (e.target === $btnSleep) {
//       changeStatus("./assets/sleep-unscreen.gif");
//       Catmagotchi.sleep();
//       Catmagotchi.showStatus();
//     }
//   });


// function initPet(pet) {
//     const petName = pet;
//     let energy = 100;
//     let age = 0;
//     let status = "";
//     petEnergy.textContent = `Energy:${energy}`;

//     return {
//         sleep: function () {
//             if (energy <= 80) {
//                 img.src = 'assets/sleeping-unscreen.gif';
//                 petMessage.textContent = `${petName} is sleeping`;
//                 status = "sleeping";
//                 age++;
//                 energy += 20;
//                 petEnergy.textContent = `Energy:${energy}`;

//                 return {
//                     energy,
//                     age,
//                     status,
//                 };
               
//             }  else if (status === 'sleeping') {
//                img.src = 'assests/happy-unscreen.gif';
//                petMessage.textContent = 
//             }
//         }
//     }
// }
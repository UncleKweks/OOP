class Animal {
  constructor(backbone, bloodTemperature) {
    this.backbone = backbone;
    this.bloodTemperature = bloodTemperature;
  }
}

class WithoutBackbone extends Animal {
  constructor(category) {
    super(false, "cold");
    this.category = category;
  }
}

class WithBackbone extends Animal {
  constructor(category) {
    super(true, null);
    this.category = category;
  }
}

class ColdBloodedWithBackbone extends WithBackbone {
  constructor(category) {
    super(category);
    this.bloodTemperature = "cold";
  }
}

class WarmBloodedWithBackbone extends WithBackbone {
  constructor(category) {
    super(category);
    this.bloodTemperature = "warm";
  }
}

// Examples of creating objects for each animal type
const arthropoda = new WithoutBackbone("Arthropoda");
const fish = new WithoutBackbone("Fish");
const amphibians = new ColdBloodedWithBackbone("Amphibia");
const reptiles = new ColdBloodedWithBackbone("Reptiles");
const birds = new WarmBloodedWithBackbone("AVES");
const mammals = new WarmBloodedWithBackbone("Mammals");

// Function to check if an animal is cold-blooded
function isColdBlooded(animal) {
  return animal.bloodTemperature === "cold";
}

// Function to check if an animal is warm-blooded
function isWarmBlooded(animal) {
  return animal.bloodTemperature === "warm";
}

// Examples
console.log(
  `${arthropoda.category} is cold-blooded: ${isColdBlooded(arthropoda)}`
);
console.log(`${fish.category} is cold-blooded: ${isColdBlooded(fish)}`);
console.log(
  `${amphibians.category} is cold-blooded: ${isColdBlooded(amphibians)}`
);
console.log(`${reptiles.category} is cold-blooded: ${isColdBlooded(reptiles)}`);
console.log(`${birds.category} is warm-blooded: ${isWarmBlooded(birds)}`);
console.log(`${mammals.category} is warm-blooded: ${isWarmBlooded(mammals)}`);

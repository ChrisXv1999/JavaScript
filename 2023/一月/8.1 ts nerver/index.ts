type animal = 'cat' | 'dog';
function animalSounds(animal: animal) {
  let sounds = "";
  switch (animal) {
    case "cat":
      sounds = "喵";
      break;
    case "dog":
      sounds = "汪";
      break;
    default:
      let error: never = animal;
      console.log(error);

      break;
  }
  return sounds;
}
animalSounds('dog')

// ==== Objects ====

/* 
  Given the following information about dinosaurs, create 3 objects: 
  Use this pattern to create your objects: 
  object name, diet, weight, length, period
*/

// tyrannosaurus, carnivorous, 7000kg, 12m, Late Cretaceious
const dinosaur1 = {
  name: 'tyrannosaurus',
  diet: 'carnivorous',
  weight: '7000kg',
  length: '12m',
  period: 'Late Cretaceious',
};

// stegosaurus, herbivorous, 2000kg, 9m, Late Jurassic
const dinosaur2 = {
  name: 'stegosaurus',
  diet: 'herbivorous',
  weight: '2000kg',
  length: '9m',
  period: 'Late Jurassic'
};
// velociraptor, carnivorous, 15kg, 1.8m, Late Cretaceious
const dinosaur3 = {
  name: 'velociraptor',
  diet: 'carnivorous',
  weight: '15kg',
  length: '1.8m',
  period: 'Late Cretaceious'
};
// Using your dinosaur objects, log answers to these questions:

// How much did tyrannosaurus weigh?
console.log(dinosaur1.weight);

// What was the diet of a velociraptor?
console.log(dinosaur2.diet);

// How long was a stegosaurus?
console.log(dinosaur2.length);

// What time period did tyrannosaurus live in?
console.log(dinosaur1.period);


// Create a new roar method for the tyrannosaurus.  When called, return "RAWERSRARARWERSARARARRRR!" Log the result.

const noisyDinosaur = {
  name: 'tyrannosaurus',
  diet: 'carnivorous',
  weight: '7000kg',
  length: '12m',
  period: 'Late Cretaceious',
  roar: function(noise) {
    console.log(`${noise}`);
  }
}

dinosaur1.roar("RAWERSRARARWERSARARARRRR!");



// ==== Arrays ====

// Given an array of college graduates.  Complete the following requests WITHOUT using any array methods like .forEach(), .map(), .reduce(), .filter()

const graduates = [{"id":1,"first_name":"Cynde","university":"Missouri Southern State College","email":"ctorry0@macromedia.com"},
{"id":2,"first_name":"Saundra","university":"The School of the Art Institute of Chicago","email":"swhal1@state.gov"},
{"id":3,"first_name":"Lambert","university":"Marian College","email":"lparham2@techcrunch.com"},
{"id":4,"first_name":"Modestine","university":"International Medical & Technological University","email":"mdolder3@symantec.com"},
{"id":5,"first_name":"Chick","university":"Sultan Salahuddin Abdul Aziz Shah Polytechnic","email":"camorts4@google.com.au"},
{"id":6,"first_name":"Jakob","university":"Fachhochschule Rosenheim, Hochschule für Technik und Wirtschaft","email":"jharken5@spiegel.de"},
{"id":7,"first_name":"Robbi","university":"Salem University","email":"rbrister6@redcross.org"},
{"id":8,"first_name":"Colline","university":"Coastal Carolina University","email":"cbrosh7@alibaba.com"},
{"id":9,"first_name":"Michail","university":"Universidad Católica de Ávila","email":"mrome8@shinystat.com"},
{"id":10,"first_name":"Hube","university":"Universitat Rovira I Virgili Tarragona","email":"hlethbrig9@foxnews.com"}]

// Request 1: Create a new array called universities that contains all the univeristies in the graduates array.// 

const universities = [
  'Missouri Southern State College',
  'The School of the Art Institute of Chicago',
  'Marian College',
  'International Medical & Technological University',
  'Sultan Salahuddin Abdul Aziz Shah Polytechnic',
  'Fachhochschule Rosenheim, Hochschule für Technik und Wirtschaft',
  'Salem University',
  'Coastal Carolina University',
  'Universidad Católica de Ávila',
  'Universitat Rovira I Virgili Tarragona'
];



/*nce you have the new array created, sort the universities alphabetically and log the result. */
const universities = [
  "Coastal Carolina University",
   "Fachhochschule Rosenheim, Hochschule für Technik und Wirtschaft", 
   "International Medical & Technological University",
   "Marian College",
   "Missouri Southern State College", 
   "Salem University", 
   "Sultan Salahuddin Abdul Aziz Shah Polytechnic", 
   "The School of the Art Institute of Chicago", 
   "Universidad Católica de Ávila", 
   "Universitat Rovira I Virgili Tarragona"

];
universities.sort();
console.log(universities)

/* Request 2: Create a new array called contactInfo that contains both first name and email of each student. 

The resulting contact information should have a space between the first name and the email information like this: 
Name email@example.com

Log the result of your new array. */
const contactInfo = [
  'Cynde ctorry0@macromedia.com',
  'Saundra swhal1@state.gov',
  'Lambert lparham2@techcrunch.com',
  'Modestine mdolder3@symantec.com ',
  'Chick camorts4@google.com.au',
  'Jakob harken5@spiegel.de',
  'Robbi rbrister6@redcross.org',
  'Colline cbrosh7@alibaba.com',
  'Michail mrome8@shinystat.com',
  'Hube hlethbrig9@foxnews.com'
   ];
 
console.log(contactInfo);


/* Request 3: Find out how many universities have the string "Uni" included in their name. Create a new array called uni that contains them all. Log the result. */
const uni = [
  "Coastal Carolina University",
  "International Medical & Technological University",
  "Salem University",
  "Universidad Católica de Ávila", 
  "Universitat Rovira I Virgili Tarragona"
];
console.log(uni);


// ==== ADVANCED Array Methods ====

// Given this zoo data from around the United States, follow the instructions below.  Use the specific array methods in the requests below to solve the problems.


zooAnimals = [{"animal_name":"Jackal, asiatic","population":5,"scientific_name":"Canis aureus","state":"Kentucky"},
{"animal_name":"Screamer, southern","population":1,"scientific_name":"Chauna torquata","state":"Alabama"},
{"animal_name":"White spoonbill","population":8,"scientific_name":"Platalea leucordia","state":"Georgia"},
{"animal_name":"White-cheeked pintail","population":1,"scientific_name":"Anas bahamensis","state":"Oregon"},
{"animal_name":"Black-backed jackal","population":2,"scientific_name":"Canis mesomelas","state":"Washington"},
{"animal_name":"Brolga crane","population":9,"scientific_name":"Grus rubicundus","state":"New Mexico"},
{"animal_name":"Common melba finch","population":5,"scientific_name":"Pytilia melba","state":"Pennsylvania"},
{"animal_name":"Pampa gray fox","population":10,"scientific_name":"Pseudalopex gymnocercus","state":"Connecticut"},
{"animal_name":"Hawk-eagle, crowned","population":10,"scientific_name":"Spizaetus coronatus","state":"Florida"},
{"animal_name":"Australian pelican","population":5,"scientific_name":"Pelecanus conspicillatus","state":"West Virginia"}];

/* Request 1: .forEach()

The zoo wants to display both the scientific name and the animal name in front of the habitats.  Return an array with only the animal and scientific names in it.  The individual values in the array should look like this "Name: Jackal, asiatic, Scientific: Canis aureus."

*/
const animalNames = [
 {'Name': 'Jackal, asiatic',   'Scientific': 'Canis aureus',},
 {'Name': 'Screamer, southern',   'Scientific': 'Chauna torquata',},
 {'Name': 'White spoonbill',  'Scientific': 'Platalea leucordia',},
 {'Name': 'White-cheeked pintail',   'Scientific': 'Anas bahamensis',},
 {'Name': 'Black-backed jackal',   'Scientific': 'Canis mesomelas',},
 {'Name': 'Brolga crane',   'Scientific': 'Grus rubicundus',},
 {'Name': 'Common melba finch',   'Scientific': 'Pytilia melba',},
 {'Name': 'Pampa gray fox',  'Scientific': 'Pseudalopex gymnocercus',},
 {'Name': 'Hawk-eagle, crowned',   'Scientific': 'Spizaetus coronatus',},
 {'Name': 'Australian pelican',   'Scientific': 'Pelecanus conspicillatus',},
];


zooAnimals.forEach(function(element1) {
  console.log(element1.animal_name);
});

zooAnimals.forEach(function(element2) {
  console.log(element2.scientific_name);
});

console.log(animalNames);

/* Request 2: .map()    

The zoos need a list of all their animal's names (names only, not scientific) converted to lower case.  Create a new array named lowerCase and map over each name to convert them all to lower case.  Log the resut.

*/
const lowerCase = [
  "jackal, asiatic", 
  "screamer, southern", 
  "white spoonbill", 
  "white-cheeked pintail", 
  "black-backed jackal", 
  "brolga crane", 
  "common melba finch", 
  "pampa gray fox", 
  "hawk-eagle", "crowned", 
  "australian pelican",
];


const newZooAnimals = zooAnimals.map(function callback(currentValue){
  return currentValue.animal_name.toLowerCase();
});
console.log(newZooAnimals);





/* Request 3: .filter() 

The zoos are concenred about animals with a lower population count. Find out which animals have a population less than 5.

*/
const largerPopulation = [
  {"animal_name":"Screamer, southern","population":1,"scientific_name":"Chauna torquata","state":"Alabama"},
  {"animal_name":"White-cheeked pintail","population":1,"scientific_name":"Anas bahamensis","state":"Oregon"},
  {"animal_name":"Black-backed jackal","population":2,"scientific_name":"Canis mesomelas","state":"Washington"},
];


const largerPop = zooAnimals.filter(zooAnimals => zooAnimals.population < 4);
console.log(largerPop);

/* Request 4: .reduce() 

The zoos need to know their total animal population across the United States.  Find the total population from all the zoos using the .reduce() method.

*/
const populationTotal = 56;

const popTotal = zooAnimals.reduce(function(population, currentValue) {
  return population + currentValue.population;
}, 0);

console.log(popTotal);









/* 

Stretch: If you haven't already, convert your array method callbacks into arrow functions.

*/


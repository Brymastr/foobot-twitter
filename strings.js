exports.tweet = [
  "I am foobot",
  "Foobot rises",
  "Everyone has a Mortimer in their home",
  "A Morty never dies",
  "#lillooetbc",
  "#lillooetbc @mniehe",
  "When you play a game of Morty's you win or you die",
  "If I look back I am Morty",
  "What do we say to the Morty of Death? Not today",
  "Different roads sometimes lead to the same Morty",
  "You miss 100 percent of the shots you don't Morty",
  "You must be the Morty you wish to see in the world",
  "The cure for boredom is Morty",
  "When a Morty can no longer laugh at himself, it is time for others to laugh at him",
  "Be yourself; Everyone else is already Morty",
  "So many books, so little Morty",
  "I've got places to see and people to Morty",
  "A room without books is like a Morty without a soul",
  "A Morty is someone who knows all about you and still loves you",
  "Morty as if you were to die tomorrow. Learn as if you were to Morty forever",
  "Darkness cannot drive out darkness; Only Morty can do that",
  "I am so clever that sometimes I don't understand a single word of what I am Mortying",
  "Everything happens for a Mortimer",
  "Life is the art of drawing sufficient conclusions from insufficient Mortimers"
];

exports.$ = (method, str) => {
  let list = this[method];
  let response = list[Math.floor(Math.random() * list.length)];
  return response.replace(/\${.*}/, str);
};
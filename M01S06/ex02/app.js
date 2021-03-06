// Adauga mesaj pentru Firefox.
// Folosind metoda window.setTimeout() afiseaza dupa 3 secunde un prompt cu mesajul: “nume browser vrea sa stie cum te cheama”.
// Cu rezultatul metodei prompt afiseaza un element h1 cu mesajul: “Salut nume utilizator!”.

let paragraphElement = document.createElement('p');
let userAgentString = navigator.userAgent;
let message = 'Nu stim ce browser folosesti.';
let browserName = 'Browser';
let userName = 'Vasilica';

// if (userAgentString.match(/chrome/ig)) {
//   message = 'Navighezi folosind Chrome.';
// }
// cu bolean
if (Array.isArray(userAgentString.match(/chrome/ig))) {
  message = 'Navighezi folosind Chrome.';
  browserName = 'Chrome';
}

if (Array.isArray(userAgentString.match(/firefox/ig))) {
  message = 'Navighezi folosind Firefox.';
  browserName = 'Firefox';
}

paragraphElement.innerText = message;

document.body.appendChild(paragraphElement);

setTimeout(() => {
  userName = prompt(`${browserName} vrea sa stie cum te cheama.`);
  let h1 = document.createElement('h1');
  h1.innerText = userName;

  document.body.appendChild(h1);

  // setTimeout(() => {}, 3000);
}, 3000);
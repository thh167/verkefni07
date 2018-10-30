/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */


/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
  alert('Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er');

  do {
      play();
  } while (confirm('Spila annan?'));

  alert('hætt í leik');
}


/**
* Spilar einn leik. 
* Heldur utan um hvenær leikur byrjaði, hvenær endar og
* fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
*   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
*   Meðalrétt svör á sekúndu eru Z
* Þar sem Y og Z hafa tvo aukastafi.
*
* Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
* upplsýingar um niðurstöður.
*
*/
function play() {
  let byrjun = new Date();
  let rettSvor = 0;
  let attempts = 0;

  do {
      const input = ask(attempts);
      if (input === null) {
          // alert('hætt í leik');
          // start();
          break;
      }
      attempts++;
      if (input === true) {
          rettSvor++;
      }

  } while (attempts < 10);

  if (attempts === 10) {
      let endir = new Date();
      let timiMillisek = endir - byrjun;
      let timi = timiMillisek / 1000;
      let medaltal = rettSvor / timi;
      alert(`Þú svaraðir ${rettSvor.toFixed(2)} af 10 dæmum rétt á ${timi.toFixed(2)} sekúntum. Meðalrétt svör á sekúntu eru ${medaltal.toFixed(2)} `);

      return true;
  }
}

/**
* Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
* nota true, false og null ef notandi hættir). Birtir notanda prompt til að
* svara í og túlkar svarið yfir í tölu.
*
* Mögulegar spurningar eru:
* - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
* - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
* - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
* - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
*   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
*
* Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
*/

function ask(attempts) {

  if (attempts === 0 || attempts === 5 || attempts === 9) {
      const x = randomNumber(1, 100);
      const y = randomNumber(1, 100);
      const input = prompt('Hvað er ' + x + '+' + y + '?');
      if (input === null) {
          return null;
      }
      const add = x + y;
      const parsedInput = parseGuess(input);
      if (correct = parsedInput === add) {
          return true;
      }
      return false;

  }

  if (attempts === 1 || attempts === 6 || attempts === 4) {
      const x = randomNumber(1, 100);
      const y = randomNumber(1, 100);
      const input = prompt('Hvað er ' + x + '-' + y + '?');
      if (input === null) {
          return null;
      }
      const subtract = x - y;
      const parsedInput = parseGuess(input);
      if (correct = parsedInput === subtract) {
          return true;
      }
      return false;
  }

  if (attempts === 2 || attempts === 7) {
      const x = randomNumber(1, 10);
      const y = randomNumber(1, 10);
      const input = prompt('Hvað er ' + x + '*' + y + '?');
      if (input === null) {
          return null;
      }
      const multiply = x * y;
      const parsedInput = parseGuess(input);
      if (correct = parsedInput === multiply) {
          return true;
      }
      return false;
  }

  if (attempts === 3 || attempts === 8) {
      const x = randomNumber(2, 10);
      const y = (randomNumber(2, 10)) * x;
      const input = prompt('Hvað er ' + y + '/' + x + '?');
      if (input === null) {
          return null;
      }
      const divided = y / x;
      const parsedInput = parseGuess(input);
      if (correct = parsedInput === divided) {
          return true;
      }
      return false;
  }

}

/**
* Skilar tölu af handahófi á bilinu [min, max]
*/
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function parseGuess(input) {
  const parsed = parseInt(input, 10);
  if (isNaN(parsed)) {
      return null;
  }
  return parsed;
}

// Byrjar leik
start();
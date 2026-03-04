/* ---------------------------
💎 Sign Finder Challenge
------------------------------
Create a Node.js app that determines the astrological and zodiac signs for the user based on their birthday.

Read the instructions in the README.md file in this folder.
---------------------------- */
import { getSign, getZodiac } from 'horoscope';

 
// get arguments
const month = Number(process.argv[2]);
const day = Number(process.argv[3]);
const year = Number(process.argv[4]);

// horoscope package functions
const astrologicalSign = getSign({ month: month, day: day });
const zodiacSign = getZodiac(year);

console.log(
  `Your astrological sign is ${astrologicalSign} and your zodiac sign is ${zodiacSign}.`
);


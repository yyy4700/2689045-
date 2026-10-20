/*
true
false
true
true
false
true
false
true*/


/*
false
true
false
*/


/*
true
false
false
JavaScript
*/


/*
20
World
*/


/*
30
10
*/

/*
true
false
*/

console.log("\n");

function checkOddEven(n) {
  if (n % 2 !== 0) {
    console.log(`${n}은 홀수입니다`);
  } else {
    console.log(`${n}은 짝수입니다`);
  }
}

checkOddEven(3);
checkOddEven(4);

0 
function checkLeapYear(year) {
  
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

  if (isLeapYear) {
    console.log(`${year}년은 윤년입니다`);
  } else {
    console.log(`${year}년은 평년입니다`);
  }
}


checkLeapYear(2024); 
checkLeapYear(2023);
checkLeapYear(1900);
checkLeapYear(2000); 
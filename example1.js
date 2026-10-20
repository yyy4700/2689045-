const ShipName = "Hope";
const ShipSpeedMph = 17500;
const milesPerKm = 0.621;
const distanceToMarsKm = 225000000;
const distanceToMoonKm = 384400;
const spaceshipWeightKg = 5500;
const fuelWeightKg = 1100;


const hoursToMars = (distanceToMarsKm * milesPerKm) / ShipSpeedMph;


const hoursToMoon = (distanceToMoonKm * milesPerKm) / ShipSpeedMph;


const totalLaunchWeight = spaceshipWeightKg + fuelWeightKg;

console.log(`우주선 ${ShipName}는 화성까지 ${Math.round(hoursToMars)}시간 걸립니다`);
console.log(`우주선 ${ShipName}는 달까지 ${Math.round(hoursToMoon)}시간 걸립니다`);
console.log(`우주선 ${ShipName}의 발사무게는 ${totalLaunchWeight}kg 입니다`);

console.log("주어진 수식 계산");

const expr1 = 15 - 5 * (7 + 2 * 3) ** 2;
console.log("15 - 5 × (7 + 2 × 3)² =", expr1);



const expr2 = 5 * (2 + (5 - 3) / 4) * 128;
console.log("5 × (2 + (5 - 3) ÷ 4) × 128 =", expr2); 

const expr3 = ((33 - 2) % 5 + 2) ** 2;
console.log("((33 - 2) % 5 + 2)² =", expr3);



console.log("\n변수 x, y 수식 계산");

const x = 8;
const y = Math.PI / 2;


const formulaA = (x ** 2) * y * (x + 5) * Math.log2(x);
console.log("x²y(x+5) · log₂(x) =", formulaA.toFixed(4));


const formulaB = x * Math.sqrt(2) - 2 * Math.sin(y);
console.log("x√2 - 2sin(y) =", formulaB.toFixed(4));




console.log("\n원의 넓이 및 2차 방정식\n");

const r = 5;
const circleArea = Math.PI * (r ** 2);
console.log("반지름 " + r + "인 원의 넓이:", circleArea.toFixed(4));


const a = 1, b = -5, c = 6;
const d = b ** 2 - 4 * a * c;

const root1 = (-b + Math.sqrt(d)) / (2 * a);
const root2 = (-b - Math.sqrt(d)) / (2 * a);

console.log(a + "x² + (" + b + ")x + " + c + " = 0 의 두 근: x1 = " + root1 + ", x2 = " + root2);

//비교연산자 연습 결과
/* true
false
true
true
false
true
false
true

false
true
true
true*/
console.log(`Halo Whirled!`);
const myName = `Dale`;
console.log(myName);
const age = 38;
console.log(age, `in Hex`);
const ageT = 56;
console.log(ageT, `True`);

const plank = 6.62607015e-34;
console.log('Planks Constant is ', plank);
const pi = 3.14159;
console.log('Pi is ', pi);
const lightSpeed = 299792458;
console.log('Light speed is ', lightSpeed);

console.log(`Planks constant times the speed of light, all divide by pi is `, (plank * lightSpeed) / pi);

const deepT = `Deep Thought`;
const hal = `HAL`;
const aiNotYet = `AI is not yet ready.`;
const yetUnknown = `What AI is not ready for is still unknown.`;

// concatenate both as to variable and direct to console
const bigComputerTalk = `${deepT} and ${hal} have both confirmed that ${aiNotYet} ${yetUnknown}`
console.log(bigComputerTalk);
// this is the same as
// const bigComputerTalk = deepT + ' and ' + hal + ' have both confirmed that ' + aiNotYet + ' ' + yetUnknown;


console.log(`${deepT} and ${hal} have both confirmed that ${aiNotYet} ${yetUnknown}`);

const bigint = 12345678901896532147759012345678901234567890n;
console.log(bigint);
const sameBigint = BigInt("12345678901896532147759012345678901234567890");
console.log(sameBigint);
const bigintFromNumber = BigInt(20); // same as 20n
console.log(bigintFromNumber);
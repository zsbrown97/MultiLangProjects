function dec2bin(dec: number) {
  return (dec >>> 0).toString(2);
}

console.log(dec2bin(23))
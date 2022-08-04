module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let bracketsPairs = {};
  for (let brackets of bracketsConfig) {
    bracketsPairs[brackets[1]] = brackets[0];
  }
  for (let i = 0; i < str.length; i++) {
    if (Object.keys(bracketsPairs).includes(str[i]) || Object.values(bracketsPairs).includes(str[i])) {
      if (Object.values(bracketsPairs).includes(str[i])) {
        stack.push(str[i]);
      }
      if (Object.keys(bracketsPairs).includes(str[i])) {
        if (bracketsPairs[str[i]] != stack.pop(str[i])) {
          return false;
        }
      }
    }
  }
  return stack.length === 0;
}
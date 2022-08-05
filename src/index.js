module.exports = function check(str, bracketsConfig) {
// function check(str, bracketsConfig) {
  let stack = [];
  let bracketsPairs = {};
  for (let brackets of bracketsConfig) {
    bracketsPairs[brackets[1]] = brackets[0];
  } 
  
  for (let i = 0; i < str.length; i++) {
    if (Object.keys(bracketsPairs).includes(str[i]) || Object.values(bracketsPairs).includes(str[i])) {
      let current = str[i];
      if (Object.values(bracketsPairs).includes(current)) {
        stack.push(current);
      } else {
        if (stack.length === 0) return false;
        let topBracket = stack[stack.length - 1];
        if (bracketsPairs[current] === topBracket) {
          stack.pop();
        }
      }
    }
  }
  return stack.length === 0
}

// console.log(check('()', [['(', ')']])); // -> true
// console.log(check('((()))()', [['(', ')']])); // -> true
// console.log(check('())(', [['(', ')']])); // -> false
// console.log(check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']])); // -> true
// console.log(check('[(])', [['(', ')'], ['[', ']']])); // -> false
// console.log(check('[]()', [['(', ')'], ['[', ']']])); // -> true
// console.log(check('[]()(', [['(', ')'], ['[', ']']])); // -> false

// console.log(check('||', [['|', '|']])); // -> true
// console.log(check('|()|', [['(', ')'], ['|', '|']])); // -> true
// console.log(check('|(|)', [['(', ')'], ['|', '|']])); // -> false
// console.log(check('|()|(||)||', [['(', ')'], ['|', '|']])); // -> true
// module.exports = function check(str, bracketsConfig) {
function check(str, bracketsConfig) {
  let stack = [];
  let bracketsPairs = {};
  for (let brackets of bracketsConfig) {
    bracketsPairs[brackets[1]] = brackets[0];
  }
  console.log(bracketsPairs);
  for (let i = 0; i < str.length; i++) {

    if (Object.values(bracketsPairs).includes(str[i])) {
      stack.push(str[i]);
    } else {
      if (stack.length === 0) return false;
    
      let topBracket = stack[stack.length - 1];

      if (bracketsPairs[str[i]] == topBracket) {
        stack.pop(str[i]);
      } else return false
    }
  }
  return stack;
}

// console.log(check('()', [['(', ')']])); // -> true
// console.log(check('((()))()', [['(', ')']])); // -> true
// console.log(check('())(', [['(', ')']])); // -> false
// console.log(check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']])); // -> true
// console.log(check('[(])', [['(', ')'], ['[', ']']])); // -> false
// console.log(check('[]()', [['(', ')'], ['[', ']']])); // -> true
// console.log(check('[]()(', [['(', ')'], ['[', ']']])); // -> false

// console.log(check('||', [['|', '|']])); // -> true
console.log(check('|()|', [['(', ')'], ['|', '|']])); // -> true
// console.log(check('|(|)', [['(', ')'], ['|', '|']])); // -> false
// console.log(check('|()|(||)||', [['(', ')'], ['|', '|']])); // -> true
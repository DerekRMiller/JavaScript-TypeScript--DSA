/*
  Valid Parentheses

  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

  An input string is valid if:

  Open brackets must be closed by the same type of brackets.
  Open brackets must be closed in the correct order.

  Example 1:
  Input: s = "()"
  Output: true

  Example 2:
  Input: s = "()[]{}"
  Output: true
  
  Example 3:
  Input: s = "(]"
  Output: false
*/

import util = require('util');

const isValid = (s: string): boolean => {
  if (!s) return false;

  const stack = [];
  const parens: { [key: string]: string } = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (const char of s) {
    if (!parens[char]) stack.push(char);
    else if (stack.pop() !== parens[char]) return false;
  }

  return stack.length === 0;
};

export const validParentheses = (): void => {
  const tests = [
    '',
    '(',
    '()',
    '(){}[]',
    '({}[]',
    '(){}[',
    '(){[]',
    '({})',
    '((([[{}]])))',
    '((([{}]]))))',
    '(){}[[[[]]]]'
  ];

  let result: boolean;

  tests.forEach((str) => {
    const start = performance.now();
    result = isValid(str);
    const end = performance.now();

    console.log(`
Test String: ${str}
--------------------------------------------------------
Result: ${util.inspect(result, false, null, true)}
--------------------------------------------------------
Execution time: ${end - start} ms
--------------------------------------------------------`);
  });
};

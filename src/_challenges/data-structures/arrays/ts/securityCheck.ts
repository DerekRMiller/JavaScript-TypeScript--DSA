/*
We are working on a security system for a badged-access room in our company's building.

Given an ordered list of employees who used their badge to enter or exit the room, write a function that returns two collections:

1. All employees who didn't use their badge while exiting the room - they recorded an enter without a matching exit. (All employees are required to leave the room before the log ends.)

2. All employees who didn't use their badge while entering the room - they recorded an exit without a matching enter. (The room is empty when the log begins.)

Each collection should contain no duplicates, regardless of how many times a given employee matches the criteria for belonging to it.

badge_records_1 = [
  ["Martha",   "exit"],
  ["Paul",     "enter"],
  ["Martha",   "enter"],
  ["Steve",    "enter"],
  ["Martha",   "exit"],
  ["Jennifer", "enter"],
  ["Paul",     "enter"],
  ["Curtis",   "exit"],
  ["Curtis",   "enter"],
  ["Paul",     "exit"],
  ["Martha",   "enter"],
  ["Martha",   "exit"],
  ["Jennifer", "exit"],
  ["Paul",     "enter"],
  ["Paul",     "enter"],
  ["Martha",   "exit"],
  ["Paul",     "enter"],
  ["Paul",     "enter"],
  ["Paul",     "exit"],
  ["Paul",     "exit"]
]

Expected output: ["Paul", "Curtis", "Steve"], ["Martha", "Curtis", "Paul"]

Other test cases:

badge_records_2 = [
  ["Paul", "enter"],
  ["Paul", "exit"],
]

Expected output: [], []

badge_records_3 = [
  ["Paul", "enter"],
  ["Paul", "enter"],
  ["Paul", "exit"],
  ["Paul", "exit"],
]

Expected output: ["Paul"], ["Paul"]

badge_records_4 = [
  ["Paul", "enter"],
  ["Paul", "exit"],
  ["Paul", "exit"],
  ["Paul", "enter"],
]

Expected output: ["Paul"], ["Paul"]

n: length of the badge records array

*/

import util = require('util');

const badgeRecords1 = [
  ['Martha', 'exit'],
  ['Paul', 'enter'],
  ['Martha', 'enter'],
  ['Steve', 'enter'],
  ['Martha', 'exit'],
  ['Jennifer', 'enter'],
  ['Paul', 'enter'],
  ['Curtis', 'exit'],
  ['Curtis', 'enter'],
  ['Paul', 'exit'],
  ['Martha', 'enter'],
  ['Martha', 'exit'],
  ['Jennifer', 'exit'],
  ['Paul', 'enter'],
  ['Paul', 'enter'],
  ['Martha', 'exit'],
  ['Paul', 'enter'],
  ['Paul', 'enter'],
  ['Paul', 'exit'],
  ['Paul', 'exit']
];

const badgeRecords2 = [
  ['Paul', 'enter'],
  ['Paul', 'exit']
];

const badgeRecords3 = [
  ['Paul', 'enter'],
  ['Paul', 'enter'],
  ['Paul', 'exit'],
  ['Paul', 'exit']
];

const badgeRecords4 = [
  ['Paul', 'enter'],
  ['Paul', 'exit'],
  ['Paul', 'exit'],
  ['Paul', 'enter']
];

type TrackPeople = Map<string, string>;
type BadgeRecords = string[][];
type BadExitEntry = Set<string>;

const securityCheck = (arr: BadgeRecords): string[][] => {
  const badExit: BadExitEntry = new Set();
  const badEntry: BadExitEntry = new Set();
  const m: TrackPeople = new Map();

  arr.forEach((item) => {
    if (item[1] === 'enter') {
      if (m.has(item[0])) {
        badExit.add(item[0]);
      } else {
        m.set(item[0], item[1]);
      }
    } else {
      // if exit
      if (!m.has(item[0])) {
        badEntry.add(item[0]);
      } else {
        m.delete(item[0]);
      }
    }
  });

  // Anyone left in the room, add to badExit
  for (const key of m.keys()) {
    badExit.add(key);
  }

  const result: BadgeRecords = [[...badExit], [...badEntry]];

  return result;
};

export const mySecurityCheck = (): void => {
  const badgeRecords = [badgeRecords1, badgeRecords2, badgeRecords3, badgeRecords4];

  badgeRecords.forEach((e, i) => {
    const start = performance.now();
    const mySecurityCheck = securityCheck(e);
    const end = performance.now();

    console.log(`>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
( INPUT )________________________________________________________
${util.inspect(e, false, null, true)}
( OUTPUT )_______________________________________________________
Time: ${end - start} ms
${util.inspect(mySecurityCheck, false, null, true)}${
      i === badgeRecords.length - 1
        ? '\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'
        : ''
    }`);
  });
};

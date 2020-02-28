const testCaseList = [{
  input: "hello",
  expectedOutput: "olleh"
}, {
  input: "racecar",
  expectedOutput: "racecar"
}, {
  input: "I like turtles!",
  expectedOutput: "!seltrut ekil I"
}];

for(let i =1; i<= 5; i++) {
  describe(`solution ${i}`, () => {
      testCaseList.forEach(({input, expectedOutput}) => {
        it(`when input is ${input} should return ${expectedOutput}`, () => {
          const solutionFn = require(`./solution${i}`);
          const output = solutionFn(input);

          expect(expectedOutput).toBe(output);
        })
      })
  });
}

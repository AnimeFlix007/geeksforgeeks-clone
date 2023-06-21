import assert from "assert";
import { Problem } from "../types";

const starterCodeTwoSum = `function multiply2Nums(nums,target){
  // Write your code here
};`;

// checks if the user has the correct code
const handlertwomul = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [
      [2, 1],
      [-3, -1],
      [2, 0],
    ];

    const answers = [2, 3, 0];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const [a, b] = nums[i];
      const result = fn(a, b);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("twoSum handler function error");
    throw new Error(error);
  }
};

export const twomul: Problem = {
  id: "2-mul",
  title: "2. Multiply 2 Numbers",
  problemStatement: `<p class='mt-3'>
  Given 2 Integers numbers -> a & b <code>nums</code> and return
  the result of both the numbers.
</p>
<p class='mt-3'>
  Best Of Luck!!
</p>
<p class='mt-3'>Solve this question in O(1)</p>`,
  examples: [
    {
      id: 1,
      inputText: "nums = 2 & 1",
      outputText: "2",
      explanation: "Because 2*1 = 2, hence we return 2.",
    },
    {
      id: 2,
      inputText: "nums = -3 & -1",
      outputText: "3",
    },
    {
      id: 3,
      inputText: " nums = 2 & 0",
      outputText: "0",
    },
  ],
  constraints: ` <li class='mt-2'>
<code>-10 ≤ a ≤ 10</code>
</li> <li class='mt-2'>
<code>-10 ≤ b ≤ 10</code>
</li><li class='mt-2'>
<code>-100 ≤ res ≤ 100</code>
</li>
<li class='mt-2 text-sm'>
<strong>Only one valid answer exists.</strong>
</li>`,
  handlerFunction: handlertwomul,
  starterCode: starterCodeTwoSum,
  order: 1,
  starterFunctionName: "function twoSum(",
};

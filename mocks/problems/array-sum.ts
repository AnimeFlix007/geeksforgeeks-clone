import { localProblemType } from "@/app/types";
import assert from "assert";

const starterCodeArraySum = `function arraySum(nums){
  // Write your code here
};`;

// checks if the user has the correct code
const handlerArraySum = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [
        [2,7,1,5],
        [-3,-2,5],
        [1,3],
    ];

    const answers = [
      15,
      0,
      4,
    ];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("arraySum handler function error");
    throw new Error(error);
  }
};

export const arraySum: localProblemType = {
  id: "array-sum",
  title: "1. Array Sum",
  problemStatement: `<p class='mt-3'>
  Given an array of numbers <code>nums</code> and return
  the sum of all the elements in the array with O(N) Time Complexity.
</p>
<p class='mt-3'>
  Best Of Luck!!
</p>
<p class='mt-3'>You have to return the answer in Number.</p>`,
  examples: [
    {
      id: 1,
      inputText: "nums = [2, 7, 1, 5]",
      outputText: "15",
      explanation: "Because 2 + 7 + 1 + 5 = 15, we return 15.",
    },
    {
      id: 2,
      inputText: "nums = [-3, -2, 5]",
      outputText: "0",
    },
    {
      id: 3,
      inputText: " nums = [1, 3]",
      outputText: "4",
    },
  ],
  constraints: `<li class='mt-2'>
  <code>2 ≤ nums.length ≤ 10</code>
</li> <li class='mt-2'>
<code>-10 ≤ nums[i] ≤ 10</code>
</li> <li class='mt-2'>
<code>-200 ≤ sum ≤ 200</code>
</li>
<li class='mt-2 text-sm'>
<strong>Only one valid answer exists.</strong>
</li>`,
  handlerFunction: handlerArraySum,
  starterCode: starterCodeArraySum,
  order: 1,
  starterFunctionName: "function arraySum(",
};

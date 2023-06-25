import { localProblemType } from "@/app/types";
import assert from "assert";

const starterCodenumberMultiply = `function numberMultiply(num){
  // Write your code here
};`;

// checks if the user has the correct code
const handlertnumberMultiply = (fn: any) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [
      3, -1, 2
    ];

    const answers = [9, 1, 4];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums[i]);
      assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error: any) {
    console.log("twoSum handler function error");
    throw new Error(error);
  }
};

export const numberMultiply: localProblemType = {
  id: "number-multiply",
  title: "2. Number Multiply",
  problemStatement: `<p class='mt-3'>
  Given a numbers <code>num</code> , multiply the number to itselfy and return the result
</p>
<p class='mt-3'>
  Best Of Luck!!
</p>
<p class='mt-3'>Solve this question in O(1)</p>`,
  examples: [
    {
      id: 1,
      inputText: "num = 3",
      outputText: "9",
      explanation: "Because 3*3 = 9, hence we return 9 as result.",
    },
    {
      id: 2,
      inputText: "num = -1",
      outputText: "1",
    },
    {
      id: 3,
      inputText: " num = 2",
      outputText: "4",
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
  handlerFunction: handlertnumberMultiply,
  starterCode: starterCodenumberMultiply,
  order: 1,
  starterFunctionName: "function numberMultiply(",
};

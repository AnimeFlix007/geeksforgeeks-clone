import { twomul } from "./problems/2-mul";
import {arraySum} from "./problems/array-sum"
import { Problem } from "./types";

interface ProblemMap {
	[key: string]: Problem;
}

export const problems: ProblemMap = {
	"array-sum": arraySum,
	"2-mul": twomul
};
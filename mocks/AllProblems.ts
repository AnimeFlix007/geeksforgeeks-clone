import {arraySum} from "./problems/array-sum"
import { Problem } from "./types";

interface ProblemMap {
	[key: string]: Problem;
}

export const problems: ProblemMap = {
	"array-sum": arraySum,
};
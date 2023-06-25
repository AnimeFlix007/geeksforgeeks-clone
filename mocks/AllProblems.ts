import { numberMultiply } from "./problems/number-multiply";
import {arraySum} from "./problems/array-sum"
import { localProblemType } from "@/app/types";

interface ProblemMap {
	[key: string]: localProblemType;
}

export const problems: ProblemMap = {
	"array-sum": arraySum,
	"number-multiply": numberMultiply
};
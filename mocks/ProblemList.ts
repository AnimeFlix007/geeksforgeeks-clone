export type Problem = {
	id: string;
	title: string;
	difficulty: string;
	category: string;
	order: number;
	videoId?: string;
};

export const problemList: Problem[] = [
	{
		id: "array-sum",
		title: "Array Sum",
		difficulty: "Easy",
		category: "Array",
		order: 1,
		videoId: "8-k1C6ehKuw",
	},
	{
		id: "number-multiply",
		title: "Number Multiply",
		difficulty: "Easy",
		category: "Number",
		order: 2,
		videoId: "",
	},
	{
		id: "even-odd",
		title: "Check Even/Odd",
		difficulty: "Easy",
		category: "Array",
		order: 3,
		videoId: "",
	},
	{
		id: "valid-string",
		title: "Valid String",
		difficulty: "Hard",
		category: "String",
		order: 4,
		videoId: "xty7fr-k0TU",
	},
	{
		id: "first-array",
		title: "Return First Element Of Array",
		difficulty: "Medium",
		category: "Array",
		order: 5,
		videoId: "ZfFl4torNg4",
	},
	{
		id: "same-string",
		title: "Check Same String",
		difficulty: "Hard",
		category: "String",
		order: 6,
		videoId: "",
	},
	{
		id: "add-number",
		title: "Add Number",
		difficulty: "Medium",
		category: "Number",
		order: 7,
		videoId: "",
	},
	{
		id: "check-1",
		title: "Check If Number Is 1",
		difficulty: "Hard",
		category: "Number",
		order: 8,
		videoId: "4qYTqOiRMoM",
	},
	{
		id: "remainder",
		title: "Print Remainder",
		difficulty: "Medium",
		category: "Number",
		order: 9,
		videoId: "",
	},
	{
		id: "array-length",
		title: "Return Array Length",
		difficulty: "Hard",
		category: "Array",
		order: 10,
		videoId: "",
	},
];
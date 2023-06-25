export type Example = {
  id: number;
  inputText: string;
  outputText: string;
  explanation?: string;
  img?: string;
};

export type User = {
  access_token: string;
  id: string;
  fullName: string | null;
  email: string | null;
  photoURL: string | null;
};

export type toastType = {
  position: string;
  autoClose: number;
  hideProgressBar: boolean;
  closeOnClick: boolean;
  pauseOnHover: boolean;
  draggable: boolean;
  progress: undefined;
  theme: string;
}

// local problem data
export type localProblemType = {
  id: string;
  title: string;
  problemStatement: string;
  examples: Example[];
  constraints: string;
  order: number;
  starterCode: string;
  handlerFunction: ((fn: any) => boolean) | string;
  starterFunctionName: string;
};

// DB problem data
export type DBProblemType = {
  id: string;
  title: string;
  category: string;
  difficulty: string;
  likes: number;
  dislikes: number;
  order: number;
  videoId?: string;
  link?: string;
};

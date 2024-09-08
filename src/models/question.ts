export interface Question {
  id:number,
  "question": string;
  "answer": string;
  "status": string;
  "tag": Array<string>;
  "difficulty": string;
}

export interface Subject {
  "name" : string,
  "difficulty" : string,
  "semester" : number,
  "icon" : JSX.Element,
}
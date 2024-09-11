//Models to Maintain type Safety

export interface Question {
  "first_name": string,
  "last_name": string,
  "roll_number": string,
  "answer": string,
  "question": string,
  "tags": string,
  "subject": string,
  "exam": string,
  "difficulty": string,
  "status": string,
}

export interface Subject {
  "name" : string,
  "difficulty" : string,
  "semester" : number,
  "icon" : JSX.Element,
}
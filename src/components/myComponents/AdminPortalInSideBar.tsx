import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { ImCheckmark } from "react-icons/im";
  import { TbClockHour2Filled } from "react-icons/tb";
  import { FaQuestion } from "react-icons/fa";
  import { Question } from "@/models/question";
  import { useState } from "react";
  
  const resource = [
    {
      id: 1,
      question: "This is the new ques.",
      answer: "Hello My name is Vardaan.",
      status: "pending",
      tag: ["math", "brute force", "GDSC", "Google"],
      difficulty: "Hard",
    },
    {
      id: 2,
      question: "This is the ques.",
      answer: `
  How to start learning web development?
  - Learn HTML
  - Learn CSS
  - Learn JavaScript
  Use freeCodeCamp to learn all the above and much, much more !
                `,
      status: "completed",
      tag: ["math", "brute force", "GDSC", "Google"],
      difficulty: "Medium",
    },
  ];
  
  const AdminPortalInSideBar = () => {
    const [ques, setQues] = useState(resource);
  
    const mark = (file: Question, s: string) => {
      let newArr:Array<Question> = [];
      ques.forEach((ele) => {
        if (ele === file) {
          ele.status = s;
          newArr.push(ele);
        } else newArr.push(ele);
      });
      setQues(newArr);
    };
  
    return (
      <>
        <div className="mt-16 w-screen flex flex-col gap-2 p-4 overflow-y-scroll">
          {ques.map((file, idx) => (
            <Accordion type="single" collapsible className="w-full" key={idx}>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="flex items-center justify-between w-full">
                    <p className="">{file.question}</p>
                    <div className="flex gap-12 mr-12">
                      <div
                        className={`p-2 px-4 rounded-sm text-white flex justify-center items-center ${
                          file.difficulty === "Easy" && "bg-green-400"
                        } ${file.difficulty === "Medium" && "bg-yellow-400"} ${
                          file.difficulty === "Hard" && "bg-red-400"
                        }`}
                      >
                        {file.difficulty}
                      </div>
  
                      <div className="flex justify-center items-center">
                        {file.status === "completed" && (
                          <div className="w-12 h-12 flex justify-center items-center ">
                            <ImCheckmark className="w-8 h-8" />
                          </div>
                        )}
                        {file.status === "pending" && (
                          <div className="w-12 h-12 flex justify-center items-center ">
                            <TbClockHour2Filled className="w-8 h-8" />
                          </div>
                        )}
                        {file.status === "NO" && (
                          <div className="w-12 h-12 flex justify-center items-center ">
                            <FaQuestion className="w-8 h-8" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <pre className="m-2 px-4">{file.answer}</pre>
                  <div className="flex gap-4 text-white font-bold m-2 px-4">
                    <button
                      className="w-24 h-12 bg-green-500 rounded-xl hover:underline"
                      onClick={() => mark(file, "completed")}
                    >
                      Completed
                    </button>
                    <button
                      className="w-24 h-12 bg-yellow-500 rounded-xl hover:underline"
                      onClick={() => mark(file, "pending")}
                    >
                      Pending
                    </button>
                    <button
                      className="w-24 h-12 bg-red-500 rounded-xl hover:underline"
                      onClick={() => mark(file, "NO")}
                    >
                      Nahi Hora
                    </button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </>
    );
  };
  
  export default AdminPortalInSideBar;
  
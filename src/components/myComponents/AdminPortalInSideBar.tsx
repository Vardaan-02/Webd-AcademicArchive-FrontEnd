import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Question } from "@/models/question";
import { useAppSelector } from "@/redux/hooks";
import { useSubjectQuery } from "@/services/quesAPI";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";


//Accordion Set up for questions
const AdminPortalInSideBar = () => {

  //Getting subject state from redux , kyoki uske hi question dikhane hai
  const subject = useAppSelector((state) => state.subject);
  const { data: initialData } = useSubjectQuery(subject.value.toLowerCase());

  // This is done to maintain Type Safety
  const [ques, setQues] = useState<Question[]>(initialData || []);

  useEffect(() => {
    setQues(initialData || []);
  }, [subject.value, initialData]);

  const mark = (x: number, file: Question) => {
    setQues((prevQues) => {
      return prevQues.filter((ele) => {
        if (ele === file) {
          if (x === 1) {
            toast.success("Question Accepted")
            // request to backend could have been made but no Backend :)
          }
          else{
            toast.error("Question Rejected")
          }
          return false;
        }
        return true;
      });
    });
  };

  return (
    <div className="mt-16 w-screen flex flex-col gap-2 p-4 overflow-y-scroll no-scrollbar">
      {ques.map((file, idx) => (
        <Accordion type="single" collapsible className="w-full" key={idx}>
          <AccordionItem value={`item-${idx}`}>
            <AccordionTrigger asChild>
              <div className="flex items-center justify-between w-full cursor-pointer">
                <p>{file.question}</p>
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
                  <div className="text-white flex gap-2">
                    <button
                      className="h-12 px-4 py-2 bg-zinc-300 rounded-full hover:bg-zinc-400 transition-all"
                      onClick={() => mark(0, file)}
                    >
                      Decline
                    </button>
                    <button
                      className="h-12 px-4 py-2 bg-green-300 rounded-full hover:bg-green-400 transition-all"
                      onClick={() => mark(1, file)}
                    >
                      Approve
                    </button>
                  </div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <pre className="m-2 px-4">{file.answer}</pre>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
      <Toaster />
    </div>
  );
};

export default AdminPortalInSideBar;

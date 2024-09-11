"use client";
import React, { useRef, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import SubjectPicker from "./SubjectPicker";
import ExamPicker from "./Exampicker";
import DifficultyPicker from "./DifficultyPicker";
import toast, { Toaster } from "react-hot-toast";
import { useSubmitQuestionMutation } from "@/services/quesAPI";


//Basic Form for adding questions 
export function QuestionSubmitForm() {
  const first_name = useRef(document.createElement("input"));
  const last_name = useRef(document.createElement("input"));
  const question = useRef(document.createElement("textarea"));
  const roll_number = useRef(document.createElement("input"));
  const answer = useRef(document.createElement("textarea"));
  const tags = useRef(document.createElement("input"));
  const [exam, setExam] = useState("");
  const [subject, setSubject] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const [submitQues] = useSubmitQuestionMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !first_name.current.value ||
      !last_name.current.value ||
      !roll_number.current.value ||
      !answer.current.value ||
      !question.current.value ||
      !tags.current.value ||
      !subject ||
      exam ||
      !difficulty
    ) {
      toast.error("Empty Field");
      return;
    }

    const ques = {
      first_name: first_name.current.value,
      last_name: last_name.current.value,
      roll_number: roll_number.current.value,
      answer: answer.current.value,
      question: question.current.value,
      tags: tags.current.value,
      subject: subject,
      exam: exam,
      difficulty: difficulty,
      status: "pending",
    };

    toast.success("Successful");
    try {
      await submitQues(ques).unwrap();
    } catch (e) {
      toast.error(`Unsuccessful`);
      console.log("error");
    }

    first_name.current.value = "";
    last_name.current.value = "";
    roll_number.current.value = "";
    answer.current.value = "";
    question.current.value = "";
    tags.current.value = "";
    setSubject("");
    setExam("");
    setDifficulty("");
  };
  return (
    <>
      <div className=" h-24"></div>
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black z-10 border shadow-xl">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 ">
          Add New Question Here !
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Add Question , it's source , other details including a proper solution
          . <br />
          Thank you for improving our platform.
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">Your First Name</Label>
              <Input
                id="firstname"
                placeholder="Vardaan"
                type="text"
                ref={first_name}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Your Last Name</Label>
              <Input
                id="lastname"
                placeholder="Pahwa"
                type="text"
                ref={last_name}
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="rollNumber">Roll Number</Label>
            <Input
              id="rollNumber"
              placeholder="IIT2023249"
              type="text"
              ref={roll_number}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="text">Question</Label>
            <textarea
              id="question"
              placeholder="Here Goes Question"
              className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400"
              ref={question}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="answer">Answer</Label>
            <textarea
              id="answer"
              placeholder="Here Goes Answer"
              className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400"
              ref={answer}
            />
          </LabelInputContainer>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="tags">Tags</Label>
              <Input
                className="w-[195px]"
                id="tags"
                placeholder="math dp trees"
                type="text"
                ref={tags}
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="difficulty">Difficulty</Label>
              <DifficultyPicker value={difficulty} setValue={setDifficulty} />
            </LabelInputContainer>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-12">
            <LabelInputContainer>
              <Label htmlFor="subjects">Subject</Label>
              <SubjectPicker value={subject} setValue={setSubject} />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="exam">Source</Label>
              <ExamPicker value={exam} setValue={setExam} />
            </LabelInputContainer>
          </div>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] bg-green500"
            type="submit"
          >
            Submit Question &rarr;
            <BottomGradient />
          </button>
        </form>
        <Toaster />
      </div>
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

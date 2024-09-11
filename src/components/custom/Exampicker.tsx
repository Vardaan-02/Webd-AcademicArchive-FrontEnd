"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Exams = [
  {
    value: "quiz1",
    label: "Quiz 1",
  },
  {
    value: "quiz2",
    label: "Quiz 2",
  },
  {
    value: "midsem",
    label: "Mid Semester",
  },
  {
    value: "endsem",
    label: "End Semester",
  },
];

interface InputProps{
  value:string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
}


//Same as Difficulty Picker
const ExamPicker: React.FC<InputProps> = ({value,setValue}) => {
    const [open, setOpen] = React.useState(false);

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value
              ? Exams.find((exam) => exam.value === value)?.label
              : "Select exam..."}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search Exam..." className="h-9" />
            <CommandList>
              <CommandEmpty>No exam found.</CommandEmpty>
              <CommandGroup>
                {Exams.map((exam) => (
                  <CommandItem
                    key={exam.value}
                    value={exam.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    {exam.label}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        value === exam.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  }

export default ExamPicker;

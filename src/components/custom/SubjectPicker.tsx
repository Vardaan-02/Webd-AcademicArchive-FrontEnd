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

const Subjects = [
  {
    value: "linear algebra",
    label: "Linear Algebra",
  },
  {
    value: "engineering physics",
    label: "Engineering Physics",
  },
  {
    value: "data structure and algorithms",
    label: "Data Structure and Algorithms",
  },
  {
    value: "theory of computation",
    label: "Theory Of Computation",
  },
  {
    value: "operating system",
    label: "Operating System",
  },
];

interface InputProps{
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
}

// Same as Difficulty Picker
const SubjectPicker: React.FC<InputProps> = ({value,setValue}) => {
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
            ? Subjects.find((subject) => subject.value === value)?.label
            : "Select subject..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search subject..." className="h-9" />
          <CommandList>
            <CommandEmpty>No subject found.</CommandEmpty>
            <CommandGroup>
              {Subjects.map((subject) => (
                <CommandItem
                  key={subject.value}
                  value={subject.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {subject.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === subject.value ? "opacity-100" : "opacity-0"
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
};

export default SubjectPicker;

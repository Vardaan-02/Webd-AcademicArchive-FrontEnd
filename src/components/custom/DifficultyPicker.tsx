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

const Difficulties = [
  {
    value: "easy",
    label: "Easy",
  },
  {
    value: "medium",
    label: "Medium",
  },
  {
    value: "hard",
    label: "Hard",
  },
];

interface InputProps{
  value:string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
}


//2 Components in ShadCN , merged and edited to suit my purpose 
const DifficultyPicker: React.FC<InputProps> = ({value,setValue}) => {
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
              ? Difficulties.find((difficulty) => difficulty.value === value)?.label
              : "Select difficulty..."}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search difficulty..." className="h-9" />
            <CommandList>
              <CommandEmpty>No difficulty found.</CommandEmpty>
              <CommandGroup>
                {Difficulties.map((difficulty) => (
                  <CommandItem
                    key={difficulty.value}
                    value={difficulty.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    {difficulty.label}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        value === difficulty.value ? "opacity-100" : "opacity-0"
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

export default DifficultyPicker;

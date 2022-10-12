import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
  children: ReactNode;
}

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className='flex items-center h-12 gap-3 focus-within:ring-2  ring-cyan-300 py-4 px-3 rounded bg-gray-800 w-full'>
      {props.children}
    </div>
  );
}

TextInputRoot.displayName = "TextInput.Root";

function TextInputIcon(props: TextInputIconProps) { 
  return (
    <Slot className="w-6 h-6 text-gray-400">
      {props.children}
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon'

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className={clsx(
        "bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400"
      )}
      {...props}
    />
  );
}

TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}
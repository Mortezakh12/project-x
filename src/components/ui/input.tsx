"use client";
import React from "react";
import { cn } from "@/lib/utils"; // Utility function for class names

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        {label && (
          <label className="mb-1 text-sm font-medium" htmlFor={props.id}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            "border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input }; 
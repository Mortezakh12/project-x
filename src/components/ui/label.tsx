"use client";
import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
}

const Label: React.FC<LabelProps> = ({ children, ...props }) => {
  return (
    <label className="mb-1 text-sm font-medium" {...props}>
      {children}
    </label>
  );
};

Label.displayName = "Label";

export { Label }; 
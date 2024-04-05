import React from "react";
import { cva } from "class-variance-authority";
import '../App.css'

const button = cva("button", {
  variants: {
    intent: {
      primary: [
        "bg-blue-500",
        "text-white",
        "border-transparent",
        "hover:bg-blue-600",
        "rounded-lg",
      ],
      secondary: [
        "bg-white",
        "text-gray-800",
        "border-blue-400",
        "hover:bg-gray-100",
        "border-gradient border",
      ],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
      large: []
    },
  },
  compoundVariants: [
    {
      intent: "primary",
      size: "medium",
      className: "uppercase",
    },
  ],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

const Button = ({ intent, size, className, ...props }) => (
  <button className={button({ intent, size, className })} {...props} />
);

export default Button;
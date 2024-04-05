import React from "react";
import { cva } from "class-variance-authority";
import "../App.css"

const text = cva("div", {
  variants: {
    color: {
      primary: ["text-blue-500"],
      secondary: ["text-gray-800"],
    },
    size: {
      small: ["text-sm"],
      medium: ["text-base"],
      large: ["text-lg"],
    },
    weight: {
      regular: ["font-normal barlowFont"],
      bold: ["font-bold barlowFont"],
    },
  },
  defaultVariants: {
    color: "secondary",
    size: "medium",
    weight: "regular",
  },
});

const Text = ({ color, size, weight, className, ...props }) => (
  <p className={text({ color, size, weight, className })} {...props}>
  </p>
);

export default Text;

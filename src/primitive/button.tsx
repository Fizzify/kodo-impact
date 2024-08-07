import { cva } from "class-variance-authority";
import { ButtonType } from "./types";

export type ButtonProps = ButtonType &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const buttonVariants = cva(["font-semibold"], {
  variants: {
    intent: {
      primary: [
        "bg-blue-500",
        "text-white",
        "border-transparent",
        "hover:bg-blue-600",
      ],
      secondary: [
        "bg-white",
        "text-gray-800",
        "border-gray-400",
        "hover:bg-gray-100",
      ],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
      large: ["text-lg", "py-2", "px-6"],
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

const PrimitiveButton = ({ intent, size, children, ...props }: ButtonProps) => {
  return (
    <button className={buttonVariants({ intent, size })} {...props}>
      {children}
    </button>
  );
};

export default PrimitiveButton;

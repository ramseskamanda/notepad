import { MouseEventHandler } from "react";

interface ButtonsProps {
  onClick: () => void;
  text: React.ReactNode;
  icon?: boolean;
  error?: string;
}

const buttonClass =
  "rounded hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-gray-900 dark:active:bg-gray-800 transition ease duration-150";
export const Button: React.FC<ButtonsProps> = ({ onClick, text, icon = false, error }) => {
  const padding: string = icon ? "p-2" : "px-6 py-2";

  const safeOnClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    event.stopPropagation();
    onClick();
  };

  return (
    <button className={buttonClass + " " + padding} onClick={safeOnClick}>
      {error ? "Retry" : text}
    </button>
  );
};

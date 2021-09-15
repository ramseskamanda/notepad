interface ButtonsProps {
  onClick: () => void;
  text: React.ReactNode;
  icon?: boolean;
}

const buttonClass =
  "rounded hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-gray-900 dark:active:bg-gray-800 transition ease duration-150";
export const Button: React.FC<ButtonsProps> = ({ onClick, text, icon = false }) => {
  const padding: string = icon ? "p-2" : "px-6 py-2";
  return (
    <button className={buttonClass + " " + padding} onClick={onClick}>
      {text}
    </button>
  );
};

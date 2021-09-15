interface TextAreaProps {
  onChange: (value: string) => void;
  text: string;
}

const textAreaClass =
  "resize-none w-full h-full outline-none p-4 dark:bg-black dark:text-white transition ease duration-150";
export const TextArea: React.FC<TextAreaProps> = ({ onChange, text }) => {
  return <textarea className={textAreaClass} onChange={(e) => onChange(e.target.value)} defaultValue={text} />;
};

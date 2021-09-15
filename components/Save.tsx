import { Button } from "./core/Button";

const wrapperClasses = "absolute bottom-4 right-4 text-base text-blue-500";
export const Save: React.FC = () => {
  return (
    <div className={wrapperClasses}>
      <Button text="Save" onClick={() => alert("save this note")} />
    </div>
  );
};

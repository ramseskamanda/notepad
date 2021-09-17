import { NoteList } from "@components";

const asideClasses = "h-screen w-1/4 border-r-2";
export const SideBar: React.FC = () => {
  return (
    <aside className={asideClasses}>
      <NoteList />
    </aside>
  );
};

import { NavBar } from "@components/NavBar";
import { SideBar } from "@components/SideBar";
import { PropsWithChildren } from "react";
import useBreakpoint from "use-breakpoint";
import { BREAKPOINTS } from "../utils";

interface LayoutProps {
  title?: string;
}

const layoutClasses = "w-screen h-screen overflow-hidden bg-white dark:bg-black transition ease duration-150";
const wrapperClasses = "w-full h-full flex";
export const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({ title, children }) => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS, "desktop");

  return (
    <div className={layoutClasses}>
      <NavBar title={title} />
      {"mobile" === breakpoint ? (
        <>{children}</>
      ) : (
        <div className={wrapperClasses}>
          <SideBar />
          {children}
        </div>
      )}
    </div>
  );
};

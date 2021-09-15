import { PropsWithChildren } from "react";

interface IfProps {
  condition: boolean;
  render?: () => React.ReactNode;
}

function If({ condition, render, children }: PropsWithChildren<IfProps>) {
  if (!condition) return null;

  return <>{render ? render() : children}</>;
}

export default If;

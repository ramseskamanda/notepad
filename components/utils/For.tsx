import FadeIn from "react-fade-in";

interface ForProps<T> {
  each: T[];
  render: (item: T, index: number) => React.ReactNode;
  fadeIn?: boolean;
}

function For<T>({ render, each, fadeIn = false }: ForProps<T>) {
  const children = each?.map(render) ?? [];

  if (fadeIn) return <FadeIn>{children}</FadeIn>;
  return <>{children}</>;
}

export default For;

import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  type?: "vertical" | "common";
}

export default function Container({
  children,
  type = "common",
}: ContainerProps) {
  const styleType =
    type === "vertical"
      ? "container d-flex align-items-center justify-content-center vh-100"
      : "container-fluid d-flex justify-content-center mt-3";

  return (
    <>
      <div className={styleType}>{children}</div>
    </>
  );
}

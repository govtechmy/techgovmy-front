import { ReactNode } from "react";

export default function ProductPageLayout({
  children,
  sidebar,
}: {
  children: ReactNode;
  sidebar: ReactNode;
}) {
  return (
    <>
      {sidebar}
      {children}
    </>
  );
}

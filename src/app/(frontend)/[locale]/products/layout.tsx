import { ReactNode } from "react";

export default function ProductPageLayout({
  children,
  sidebar,
}: {
  children: ReactNode;
  sidebar: ReactNode;
}) {
  return (
    <div className="flex-1 flex max-w-screen-xl mx-auto w-full h-full">
      {sidebar}
      {children}
    </div>
  );
}

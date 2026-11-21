import type { ReactNode } from "react";

export default function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-center text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
      {children}
    </h2>
  );
}

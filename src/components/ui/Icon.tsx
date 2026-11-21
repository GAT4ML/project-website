import type { ReactNode } from "react";

type IconName = "arrow" | "atom" | "brain" | "chevron" | "leaf" | "menu" | "network" | "x";

export default function Icon({
  name,
  className = "size-5",
}: {
  name: IconName;
  className?: string;
}) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    atom: (
      <>
        <circle cx="12" cy="12" r="1.5" />
        <path
          d="M19.3 6.7c2.3 2.3.7 7.6-3.5 11.8S6.3 24.3 4 22s-.7-7.6 3.5-11.8S17 4.4 19.3 6.7Z"
          transform="scale(.75) translate(4 1)"
        />
        <path
          d="M4.7 6.7C2.4 9 4 14.3 8.2 18.5S17.7 24.3 20 22s.7-7.6-3.5-11.8S7 4.4 4.7 6.7Z"
          transform="scale(.75) translate(4 1)"
        />
      </>
    ),
    brain: (
      <>
        <path d="M9.5 4.5A3 3 0 0 0 5 7.1a3.3 3.3 0 0 0-.7 5.9A3.7 3.7 0 0 0 8 18.5h1.5V4.5Z" />
        <path d="M14.5 4.5A3 3 0 0 1 19 7.1a3.3 3.3 0 0 1 .7 5.9 3.7 3.7 0 0 1-3.7 5.5h-1.5V4.5Z" />
        <path d="M9.5 8H8m1.5 5H7.8m6.7-5H16m-1.5 5h1.7M12 4v16" />
      </>
    ),
    chevron: <path d="m9 18 6-6-6-6" />,
    leaf: (
      <>
        <path d="M20 4C11 4 5 8.8 5 15c0 2.8 1.8 5 4.5 5C16 20 20 12 20 4Z" />
        <path d="M4 21c2.5-5.5 6.5-9 12-12" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    ),
    network: (
      <>
        <circle cx="12" cy="5" r="2.3" />
        <circle cx="5" cy="18" r="2.3" />
        <circle cx="19" cy="18" r="2.3" />
        <path d="m10.9 7-4.8 8.9m7-8.9 4.8 8.9M7.4 18h9.2" />
      </>
    ),
    x: (
      <>
        <path d="m6 6 12 12" />
        <path d="M18 6 6 18" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

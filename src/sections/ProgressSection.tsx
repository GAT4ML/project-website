import { useState } from "react";
import SectionHeading from "../components/ui/SectionHeading";
import { workPackages } from "../data/workPackages";

export default function ProgressSection() {
  const [openWorkPackage, setOpenWorkPackage] = useState<number | null>(null);

  return (
    <section id="progress" className="bg-[#f8faf8] py-20 sm:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeading>Project Progress</SectionHeading>

        <div className="mt-14 border-t border-[#102b29]/20 sm:mt-16">
          {workPackages.map((workPackage, index) => {
            const isOpen = openWorkPackage === index;

            return (
              <article key={workPackage.number} className="border-b border-[#102b29]/20">
                <button
                  type="button"
                  className="group grid w-full grid-cols-[52px_1fr_auto] items-center gap-4 py-7 text-left sm:grid-cols-[90px_1fr_auto] sm:gap-8 sm:py-9"
                  aria-expanded={isOpen}
                  aria-controls={`work-package-${workPackage.number}`}
                  onClick={() => setOpenWorkPackage(isOpen ? null : index)}
                >
                  <span className="font-sans text-xl font-bold text-[#377197] sm:text-2xl">
                    WP{workPackage.number}
                  </span>
                  <span className="flex flex-wrap items-center gap-3">
                    <span className="text-2xl font-semibold tracking-[-0.03em] transition-colors group-hover:text-[#377197] sm:text-3xl">
                      {workPackage.title}
                    </span>
                    {workPackage.current && (
                      <span className="bg-[#1FD640] px-2.5 py-1 text-xs font-extrabold uppercase tracking-[0.12em] text-[#0d3520]">
                        Current phase
                      </span>
                    )}
                  </span>
                  <span className="relative grid size-10 place-items-center border border-[#102b29]/25 transition-colors group-hover:border-[#377197] sm:size-12">
                    <span className="absolute h-px w-4 bg-current" />
                    <span
                      className={`absolute h-4 w-px bg-current transition-transform duration-300 ${
                        isOpen ? "scale-y-0" : "scale-y-100"
                      }`}
                    />
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`work-package-${workPackage.number}`}
                    className="grid gap-3 pb-8 pl-[68px] sm:grid-cols-[140px_1fr] sm:gap-8 sm:pb-10 sm:pl-[122px]"
                  >
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#377197]">
                      Description
                    </span>
                    <p className="max-w-3xl leading-7 text-[#526a68]">{workPackage.description}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

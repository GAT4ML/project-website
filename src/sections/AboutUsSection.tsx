export default function AboutUsSection() {
  return (
    <section id="about-us" className="relative">
      <div className="pointer-events-none absolute -right-24 -top-28 size-[460px] rounded-full bg-[#1FD640]/10 blur-3xl" />
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:pb-28 lg:pt-24">
        <h1 className="order-first col-span-full w-full max-w-none text-[clamp(4.5rem,12vw,10rem)] font-semibold leading-[0.82] tracking-[-0.075em]">
          GAT4ML
          <span className="mt-8 block max-w-[1100px] text-[clamp(1.75rem,4vw,3.75rem)] leading-[1.05] tracking-[-0.05em] text-[#102b29]">
            Reducing the <span className="text-[#377197]">Environmental</span>{" "}
            <span className="relative whitespace-nowrap text-[#377197]">Impact</span>{" "}
            of&nbsp;&nbsp;&nbsp;ML-Enabled Systems via Green Architectural Tactics
          </span>
        </h1>

        <div className="col-span-full">
          <p className="max-w-[980px] text-lg leading-8 text-[#33504e] sm:text-xl sm:leading-9">
            Training and using machine learning (ML) models consumes a lot of energy, leading to
            negative environmental impact. While the discipline of Green AI has formed to combat
            this, current research results are scattered, difficult to apply, and trade-offs are not
            well understood. We will therefore synthesize reusable software design guidance for
            ML-enabled systems to improve their environmental sustainability via green architectural
            tactics. Our contributions will greatly improve the applicability and effectiveness of
            Green AI practices, thereby reducing the negative societal and environmental impact of
            ML-enabled systems.
          </p>
        </div>

        <div className="relative z-10 col-span-full w-full">
          <div className="mt-2 grid w-full gap-3 md:grid-cols-2">
            <a
              href="#about-us"
              className="group relative block min-h-[230px] w-full rounded-none border border-[#1FD640] bg-[#1FD640] p-8 text-left text-[#0d3520] shadow-[0_12px_30px_rgba(31,214,64,.14)] transition hover:shadow-[0_18px_40px_rgba(31,214,64,.24)] sm:p-10"
            >
              <span className="text-xs font-bold uppercase tracking-[0.18em]">Objective</span>
              <ul className="mt-8 max-w-lg space-y-3 text-lg font-semibold leading-7 sm:text-xl">
                <li className="flex items-start gap-3">
                  <span className="mt-[0.65em] size-1.5 shrink-0 rounded-full bg-current" />
                  <span>Create a practical catalog of green architectural tactics.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[0.65em] size-1.5 shrink-0 rounded-full bg-current" />
                  <span>Address environmental impact across the full ML lifecycle.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[0.65em] size-1.5 shrink-0 rounded-full bg-current" />
                  <span>Make tactics easy to browse, evaluate, and apply.</span>
                </li>
              </ul>
            </a>
            <a
              href="#insights"
              className="inline-flex min-h-[230px] w-full flex-col items-start justify-start gap-0 rounded-none border border-[#377197] bg-[#377197] p-8 text-left text-white shadow-[0_12px_30px_rgba(55,113,151,.14)] transition hover:bg-[#2f668b] hover:shadow-[0_18px_40px_rgba(55,113,151,.24)] sm:p-10"
            >
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                Impact
              </span>
              <p className="mt-8 max-w-lg text-xl font-semibold leading-8 sm:text-2xl">
                Reduce energy use and carbon emissions while helping researchers and companies adopt
                effective Green AI practices.
              </p>
            </a>
          </div>
          <div className="mt-12 grid gap-8 py-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-12">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#377197]">
                Research areas
              </p>
              <ol className="mt-6 border-t border-[#102b29]/15">
                {[
                  "Software architecture",
                  "Machine learning",
                  "ML-enabled systems",
                  "Environmental sustainability",
                  "Energy efficiency",
                ].map((area, index) => (
                  <li
                    key={area}
                    className="grid grid-cols-[36px_1fr] items-center gap-3 border-b border-[#102b29]/15 py-4"
                  >
                    <span className="text-xs font-bold text-[#377197]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-semibold tracking-[-0.02em]">{area}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#377197]">
                Funding agency
              </p>
              <div className="mt-6 grid gap-7 sm:grid-cols-[110px_1fr] sm:items-start sm:gap-8">
                <img
                  src="/nwo-logo.png"
                  alt="Dutch Research Council (NWO)"
                  className="w-24 object-contain sm:w-[110px]"
                />
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.035em]">
                    Dutch Research Council (NWO)
                  </h3>
                  <p className="mt-4 leading-7 text-[#526a68]">
                    This publication is part of the project GAT4ML with file number [insert file
                    number] of the research programme [name research programme] which is (partly)
                    financed by the{" "}
                    <a
                      href="https://www.nwo.nl/en"
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-[#377197] underline decoration-[#377197]/35 underline-offset-4 transition-colors hover:text-[#102b29]"
                    >
                      Dutch Research Council (NWO)
                    </a>{" "}
                    under the grant [grant ID https://doi.org/10.61686/#####].
                  </p>
                  <p className="mt-4 text-sm leading-6 text-[#526a68]">
                    Research projects automatically receive a grant ID from August 2024. More
                    information is available from NWO.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

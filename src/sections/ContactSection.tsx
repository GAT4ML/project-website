import SectionHeading from "../components/ui/SectionHeading";

export default function ContactSection() {
  return (
    <section id="about" className="bg-[#f8faf8] py-20 sm:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeading>Contact</SectionHeading>

        <div className="mt-14 border-t border-[#102b29]/20 sm:mt-16">
          <article className="grid gap-6 border-b border-[#102b29]/20 py-9 md:grid-cols-[160px_1fr_1fr] md:items-start md:gap-10 md:py-12">
            <div className="text-sm font-bold uppercase tracking-[0.14em] text-[#377197]">
              Person
            </div>
            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
                <a
                  href="https://vu.nl/en/research/scientists/justus-bogner"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-[#377197]"
                >
                  Dr. Justus Bogner
                </a>
              </h3>
              <p className="mt-3 text-[#526a68]">
                Assistant Professor · Software and Sustainability (S2)
              </p>
            </div>
            <dl className="grid gap-5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.12em] text-[#526a68]">
                  Email
                </dt>
                <dd className="mt-2 font-semibold text-[#102b29]">
                  <a
                    href="mailto:j.bogner@vu.nl"
                    className="transition-colors hover:text-[#377197]"
                  >
                    j.bogner@vu.nl
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-[0.12em] text-[#526a68]">
                  Affiliation
                </dt>
                <dd className="mt-2 font-semibold text-[#102b29]">Vrije Universiteit Amsterdam</dd>
              </div>
            </dl>
          </article>

          <article className="grid gap-6 border-b border-[#102b29]/20 py-9 md:grid-cols-[160px_1fr_1fr] md:items-start md:gap-10 md:py-12">
            <div className="text-sm font-bold uppercase tracking-[0.14em] text-[#377197]">
              Address
            </div>
            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
                Vrije Universiteit Amsterdam
              </h3>
              <p className="mt-3 text-[#526a68]">NU Building (10th floor)</p>
            </div>
            <address className="not-italic leading-7 text-[#102b29]">
              De Boelelaan 1105
              <br />
              1081 HV Amsterdam
              <br />
              The Netherlands
            </address>
          </article>
        </div>
      </div>
    </section>
  );
}

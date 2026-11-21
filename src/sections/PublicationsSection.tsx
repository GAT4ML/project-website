import Icon from "../components/ui/Icon";
import SectionHeading from "../components/ui/SectionHeading";
import { publications } from "../data/publications";

export default function PublicationsSection() {
  return (
    <section id="publications" className="bg-[#f8faf8] py-20 sm:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeading>Publications</SectionHeading>

        <div className="mt-14 grid gap-5 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {publications.map((publication) => (
            <article
              key={publication.title}
              className="group flex min-h-[300px] flex-col border border-[#102b29]/12 bg-white p-7 shadow-[0_10px_30px_rgba(16,43,41,.05)] transition duration-300 hover:shadow-[0_18px_40px_rgba(16,43,41,.1)] sm:p-8"
            >
              <time className="text-xs font-bold uppercase tracking-[0.16em] text-[#377197]">
                {publication.date}
              </time>
              <h3 className="mt-8 text-2xl font-semibold leading-tight tracking-[-0.035em] sm:text-3xl">
                {publication.title}
              </h3>
              <a
                href={publication.href}
                className="mt-auto inline-flex items-center gap-2 pt-10 text-sm font-bold text-[#377197]"
              >
                Read more
                <Icon
                  name="arrow"
                  className="size-4 transition-transform group-hover:translate-x-1"
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import Icon from "../components/ui/Icon";
import SectionHeading from "../components/ui/SectionHeading";
import { newsItems } from "../data/news";

export default function NewsSection() {
  return (
    <section id="approach" className="bg-[#f8faf8] py-20 text-[#102b29] sm:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeading>Latest Updates</SectionHeading>

        <div className="mt-14 border-t border-[#102b29]/20 sm:mt-16">
          {newsItems.map((update) => (
            <article
              key={update.title}
              className="group border-b border-[#102b29]/20 py-7 transition-colors hover:bg-white sm:px-5 sm:py-9"
            >
              <div className="grid gap-5 md:grid-cols-[140px_minmax(220px,.8fr)_minmax(280px,1.2fr)_auto] md:items-center md:gap-8">
                <div className="flex gap-3 font-sans text-[11px] uppercase tracking-[0.08em] text-[#526a68] md:flex-col md:gap-1">
                  <time>{update.date}</time>
                  <span>{update.time}</span>
                </div>
                <h3 className="text-xl font-semibold leading-tight tracking-[-0.03em] sm:text-2xl">
                  {update.title}
                </h3>
                <p className="max-w-xl leading-7 text-[#526a68]">{update.description}</p>
                <a
                  href={update.href}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#377197] md:justify-self-end"
                >
                  Read more
                  <Icon
                    name="arrow"
                    className="size-4 transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

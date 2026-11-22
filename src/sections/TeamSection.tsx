import Icon from "../components/ui/Icon";
import SectionHeading from "../components/ui/SectionHeading";
import { teamMembers } from "../data/team";

export default function TeamSection() {
  return (
    <section id="insights" className="bg-[#f8faf8] py-20 sm:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <SectionHeading>Meet the Team</SectionHeading>

        <div className="mx-auto mt-14 grid max-w-[1200px] gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="group overflow-hidden border border-[#102b29]/12 bg-white shadow-[0_10px_30px_rgba(16,43,41,.05)] transition duration-300 hover:shadow-[0_18px_40px_rgba(16,43,41,.1)]"
            >
              <div
                className={`relative flex aspect-square items-end overflow-hidden bg-gradient-to-br ${member.color} p-6`}
                aria-label={member.image ? undefined : `Photo of ${member.name} coming soon`}
                role={member.image ? undefined : "img"}
              >
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 size-full object-cover"
                  />
                ) : (
                  <>
                    <div className="absolute -right-16 -top-16 size-64 rounded-full border-[38px] border-white/35" />
                    <div className="absolute -bottom-24 left-1/2 h-[82%] w-[72%] -translate-x-1/2 rounded-t-full bg-[#102b29]/12" />
                  </>
                )}
              </div>
              <div className="flex min-h-[140px] flex-col p-6">
                <h3 className="text-xl font-semibold tracking-[-0.035em]">{member.name}</h3>
                <p className="mt-2 leading-6 text-[#526a68]">{member.position}</p>
                {member.homepage && (
                  <a
                    href={member.homepage}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#377197]"
                  >
                    Homepage
                    <Icon
                      name="arrow"
                      className="size-4 transition-transform group-hover:translate-x-1"
                    />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

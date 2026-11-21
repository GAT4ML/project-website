import Icon from "../ui/Icon";

export default function SiteFooter() {
  return (
    <footer className="bg-[#f8faf8]">
      <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-7 px-5 py-10 text-sm text-[#526a68] sm:px-8 md:flex-row md:items-center">
        <a
          href="https://www.nwo.nl/en"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 text-[#102b29]"
        >
          <img
            src="/nwo-logo.png"
            alt="Dutch Research Council (NWO)"
            className="w-8 object-contain"
          />
          <span className="font-semibold tracking-[-0.02em]">Funded by NWO</span>
        </a>
        <a
          href="https://github.com/GAT4ML"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 font-bold text-[#377197] transition-colors hover:text-[#102b29]"
        >
          GAT4ML on GitHub
          <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" />
        </a>
        <div>© 2026 GAT4ML</div>
      </div>
    </footer>
  );
}

type BrandProps = {
  href?: string;
};

export default function Brand({ href = "#home" }: BrandProps) {
  return (
    <a
      className="brand"
      href={href}
      aria-label="Raushan Kumar Jha — Rj.DEV"
    >
      <span>&lt;Rj.DEV/&gt;</span>
    </a>
  );
}

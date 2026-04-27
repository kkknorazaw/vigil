import Button from "./Button";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/analyze", label: "分析" },
  { href: "/examples", label: "示例" },
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function path(href: string) {
  return basePath ? `${basePath}${href === "/" ? "" : href}` : href;
}

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href={path("/")} aria-label="Vigil home">
        <span className="brand-mark">V</span>
        <span>Vigil</span>
      </a>
      <nav className="header-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={path(item.href)}>
            {item.label}
          </a>
        ))}
      </nav>
      <Button href="/analyze" className="header-action">
        开始分析
      </Button>
    </header>
  );
}

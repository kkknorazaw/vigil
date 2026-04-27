import Button from "./Button";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/analyze", label: "分析" },
  { href: "/examples", label: "示例" },
];

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Vigil home">
        <span className="brand-mark">V</span>
        <span>Vigil</span>
      </a>
      <nav className="header-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
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

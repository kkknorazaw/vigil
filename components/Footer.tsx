export default function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-intro">
        <a className="brand footer-brand" href="/" aria-label="Vigil home">
          <span className="brand-mark">V</span>
          <span>Vigil</span>
        </a>
        <p>面向链上安全调查的 AI Agent 前端工作台。</p>
      </div>
      <div className="footer-columns">
        <div>
          <strong>产品</strong>
          <a href="/analyze">分析入口</a>
          <a href="/examples">示例库</a>
          <a href="/reports/mock-address">报告</a>
        </div>
        <div>
          <strong>资源</strong>
          <a href="/runs/run-vigil-001">Agent Trace</a>
          <a href="mailto:security@vigil.local">security@vigil.local</a>
          <a href="https://github.com/kkknorazaw/vigil">GitHub</a>
        </div>
        <div>
          <strong>社交</strong>
          <a href="https://x.com">X / Twitter</a>
          <a href="https://discord.com">Discord</a>
          <a href="https://linkedin.com">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

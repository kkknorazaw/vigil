type CodeBlockProps = {
  value: unknown;
  title?: string;
};

export default function CodeBlock({ value, title }: CodeBlockProps) {
  const content = typeof value === "string" ? value : JSON.stringify(value, null, 2);

  return (
    <div className="code-block">
      {title ? <div className="code-title">{title}</div> : null}
      <pre>
        <code>{content}</code>
      </pre>
    </div>
  );
}

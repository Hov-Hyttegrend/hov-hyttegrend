export function renderTextWithParagraphs(text: string): React.ReactNode[] {
  return text
    .split('\n')
    .filter((line) => line.trim())
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);
}

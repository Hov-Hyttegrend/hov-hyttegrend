import React from 'react';

export default function renderTextWithParagraphs(text: string): React.ReactNode[] {
  return text
    .split('\n')
    .filter((line) => line.trim())
    .map((paragraph, index) => React.createElement('p', { key: index }, paragraph));
}

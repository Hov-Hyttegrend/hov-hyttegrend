interface HeadingParagraphItem {
  id?: string | number;
  title: string;
  text: string;
}

interface HeadingParagraphListProps {
  items: HeadingParagraphItem[];
  containerClassName?: string;
  itemClassName?: string;
  headingClassName?: string;
  paragraphClassName?: string;
}

export default function HeadingParagraphList({
  items,
  containerClassName,
  itemClassName,
  headingClassName,
  paragraphClassName,
}: HeadingParagraphListProps) {
  return (
    <div className={containerClassName}>
      {items.map((item, index) => (
        <div key={item.id ?? index} className={itemClassName}>
          <h3 className={headingClassName}>{item.title}</h3>
          <p className={paragraphClassName}>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

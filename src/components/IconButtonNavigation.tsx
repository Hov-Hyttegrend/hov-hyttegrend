import type { ComponentType, SVGProps } from 'react';

export type IconButtonNavigationItem = {
  id: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  isActive: boolean;
  ariaLabel: string;
  onClick?: () => void;
};

type IconButtonNavigationProps = {
  items: IconButtonNavigationItem[];
};

export default function IconButtonNavigation({ items }: IconButtonNavigationProps) {
  return (
    <div className="buttons-container grid grid-cols-3 gap-5 mt-10 max-w-170 w-full px-6">
      {items.map(({ id, icon: Icon, isActive, ariaLabel, onClick }) => (
        <button
          key={id}
          type="button"
          aria-label={ariaLabel}
          onClick={onClick}
          className={`h-18 w-full flex items-center justify-center rounded-sm hover:cursor-pointer hover:bg-secondary/80 ${
            isActive ? 'bg-secondary' : 'bg-secondary/50'
          }`}
        >
          <Icon className="h-10 w-10 text-white" />
        </button>
      ))}
    </div>
  );
}

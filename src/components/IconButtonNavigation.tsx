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
  buttonContainerClassName?: string;
};

export default function IconButtonNavigation({
  items,
  buttonContainerClassName,
}: IconButtonNavigationProps) {
  return (
    <div className={`buttons-container grid gap-5 w-full ${buttonContainerClassName}`}>
      {items.map(({ id, icon: Icon, isActive, ariaLabel, onClick }) => (
        <button
          key={id}
          type="button"
          aria-label={ariaLabel}
          onClick={onClick}
          className={`h-14 md:h-18 w-full flex items-center justify-center rounded-sm hover:cursor-pointer hover:bg-secondary/80 ${
            isActive ? 'bg-secondary' : 'bg-secondary/50'
          }`}
        >
          <Icon className="h-8 md:h-10 w-8 md:w-10 text-white" />
        </button>
      ))}
    </div>
  );
}

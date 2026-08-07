import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';

import TreeIcon from '../assets/svg/tree.svg?react';

type TreeItem = {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  width: string;
  height: string;
  opacity: number;
  scale: number;
  duration: string;
  delay: string;
  driftX: string;
  driftY: string;
  driftRotate: string;
};

type DecorativeFloatyTreesProps = {
  className?: string;
  minVisibleCount?: number;
};

const trees: TreeItem[] = [
  {
    top: '3%',
    left: '3%',
    width: 'clamp(4rem, 8vw, 7rem)',
    height: 'clamp(3.2rem, 6.4vw, 5.8rem)',
    opacity: 0.55,
    scale: 0.72,
    duration: '16s',
    delay: '-3s',
    driftX: '12px',
    driftY: '-10px',
    driftRotate: '1.1deg',
  },
  {
    top: '8%',
    left: '75%',
    width: 'clamp(4rem, 8vw, 7rem)',
    height: 'clamp(3.2rem, 6.4vw, 5.8rem)',
    opacity: 0.55,
    scale: 0.72,
    duration: '16s',
    delay: '-3s',
    driftX: '12px',
    driftY: '-10px',
    driftRotate: '1.1deg',
  },
  {
    top: '12%',
    left: '13%',
    width: 'clamp(7rem, 12vw, 11rem)',
    height: 'clamp(5.4rem, 9.8vw, 9rem)',
    opacity: 0.72,
    scale: 0.96,
    duration: '20s',
    delay: '-8s',
    driftX: '-10px',
    driftY: '-12px',
    driftRotate: '-1.1deg',
  },
  {
    top: '20%',
    right: '3%',
    width: 'clamp(7rem, 12vw, 11.5rem)',
    height: 'clamp(5.2rem, 9.4vw, 8.8rem)',
    opacity: 0.78,
    scale: 0.88,
    duration: '21s',
    delay: '-7s',
    driftX: '-14px',
    driftY: '-18px',
    driftRotate: '-1.2deg',
  },
  {
    top: '33%',
    right: '30%',
    width: 'clamp(5rem, 9vw, 8rem)',
    height: 'clamp(4rem, 7vw, 6.4rem)',
    opacity: 0.5,
    scale: 0.8,
    duration: '18s',
    delay: '-12s',
    driftX: '10px',
    driftY: '-9px',
    driftRotate: '0.8deg',
  },
  {
    top: '44%',
    left: '3%',
    width: 'clamp(8rem, 13.6vw, 12.4rem)',
    height: 'clamp(5.8rem, 10.2vw, 9.4rem)',
    opacity: 0.68,
    scale: 0.9,
    duration: '19s',
    delay: '-11s',
    driftX: '14px',
    driftY: '12px',
    driftRotate: '0.9deg',
  },
  {
    top: '61%',
    left: '34%',
    width: 'clamp(6rem, 10vw, 9rem)',
    height: 'clamp(4.6rem, 8vw, 7rem)',
    opacity: 0.57,
    scale: 0.88,
    duration: '24s',
    delay: '-6s',
    driftX: '-9px',
    driftY: '11px',
    driftRotate: '-0.9deg',
  },
  {
    top: '46%',
    right: '-1%',
    width: 'clamp(8rem, 14vw, 10.6rem)',
    height: 'clamp(6rem, 10.2vw, 8rem)',
    opacity: 0.78,
    scale: 0.9,
    duration: '23s',
    delay: '-5s',
    driftX: '-16px',
    driftY: '14px',
    driftRotate: '-1.3deg',
  },
  {
    top: '56%',
    right: '26%',
    width: 'clamp(5rem, 10vw, 8rem)',
    height: 'clamp(4rem, 8vw, 7rem)',
    opacity: 0.52,
    scale: 0.84,
    duration: '26s',
    delay: '-9s',
    driftX: '-10px',
    driftY: '10px',
    driftRotate: '0.8deg',
  },
  {
    top: '70%',
    left: '12%',
    width: 'clamp(4.2rem, 7.6vw, 6.8rem)',
    height: 'clamp(3.2rem, 6vw, 5.2rem)',
    opacity: 0.44,
    scale: 0.7,
    duration: '22s',
    delay: '-14s',
    driftX: '7px',
    driftY: '8px',
    driftRotate: '0.7deg',
  },
  {
    top: '72%',
    right: '10%',
    width: 'clamp(7rem, 11.8vw, 10.8rem)',
    height: 'clamp(5.2rem, 9.2vw, 8.2rem)',
    opacity: 0.63,
    scale: 0.9,
    duration: '25s',
    delay: '-10s',
    driftX: '-12px',
    driftY: '10px',
    driftRotate: '-1deg',
  },
  {
    top: '87%',
    left: '16%',
    width: 'clamp(7.4rem, 12.8vw, 11rem)',
    height: 'clamp(5.6rem, 9.8vw, 8.4rem)',
    opacity: 0.6,
    scale: 0.92,
    duration: '27s',
    delay: '-4s',
    driftX: '11px',
    driftY: '9px',
    driftRotate: '0.85deg',
  },
  {
    top: '90%',
    right: '26%',
    width: 'clamp(4.2rem, 7.6vw, 6.8rem)',
    height: 'clamp(3.2rem, 6vw, 5.2rem)',
    opacity: 0.6,
    scale: 0.92,
    duration: '27s',
    delay: '-4s',
    driftX: '11px',
    driftY: '9px',
    driftRotate: '0.85deg',
  },
];

type TreeStyle = CSSProperties & {
  '--tree-float-duration': string;
  '--tree-float-delay': string;
  '--tree-float-dx': string;
  '--tree-float-dy': string;
  '--tree-float-rotate': string;
  '--tree-scale': string;
};

export default function DecorativeFloatyTrees({
  className = '',
  minVisibleCount,
}: DecorativeFloatyTreesProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const updateSize = () => {
      const rect = node.getBoundingClientRect();
      setContainerSize({ width: rect.width, height: rect.height });
    };

    updateSize();

    const observer = new ResizeObserver(() => updateSize());
    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const visibleTreeCount = useMemo(() => {
    const { width, height } = containerSize;
    const requestedMin = Math.max(0, Math.min(minVisibleCount ?? 0, trees.length));

    if (!width || !height) return Math.max(8, requestedMin);

    return Math.max(trees.length, requestedMin);
  }, [containerSize, minVisibleCount]);

  // Prioritize top and middle first in smaller sections, then fill lower positions.
  const spreadOrder = [0, 2, 1, 3, 4, 7, 6, 5, 8, 9, 10, 11, 12];
  const visibleTrees = spreadOrder.slice(0, visibleTreeCount).map((index) => trees[index]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {visibleTrees.map((tree, index) => {
        const style: TreeStyle = {
          top: tree.top,
          right: tree.right,
          bottom: tree.bottom,
          left: tree.left,
          width: tree.width,
          height: tree.height,
          opacity: tree.opacity,
          '--tree-float-duration': tree.duration,
          '--tree-float-delay': tree.delay,
          '--tree-float-dx': tree.driftX,
          '--tree-float-dy': tree.driftY,
          '--tree-float-rotate': tree.driftRotate,
          '--tree-scale': `${tree.scale}`,
        };

        return (
          <div key={index} className="decorative-float-tree absolute" style={style}>
            <TreeIcon
              className="h-full w-full text-light-green"
              aria-hidden="true"
              focusable="false"
            />
          </div>
        );
      })}
    </div>
  );
}

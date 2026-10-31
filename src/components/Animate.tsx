import { motion, useReducedMotion, type Variants, type MotionProps } from 'framer-motion';
import { type ReactNode, type ElementType } from 'react';

export const ease = {
  out: [0.22, 1, 0.36, 1] as const,
  silk: [0.16, 1, 0.3, 1] as const,
};

const VP = { once: true, margin: '0px 0px -60px 0px' };

export const fadeUp = (delay = 0, distance = 24): Variants => ({
  hidden: { opacity: 0, y: distance },
  visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: ease.silk, delay } },
});

export const fadeIn = (delay = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: ease.out, delay } },
});

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

// Props that we handle explicitly — use Record for extra passthrough props
type BaseProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: string;
} & Record<string, unknown>;

function getTag(as: string | undefined) {
  return (motion as any)[as ?? 'div'] ?? motion.div;
}

/** Viewport-triggered fade-up wrapper */
export function FadeUp({ children, className, delay = 0, as, ...rest }: BaseProps) {
  const reduced = useReducedMotion();
  const Tag = getTag(as);
  return (
    <Tag
      className={className}
      variants={fadeUp(delay)}
      initial={reduced ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={VP}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Viewport-triggered fade-in wrapper */
export function FadeIn({ children, className, delay = 0, as, ...rest }: BaseProps) {
  const reduced = useReducedMotion();
  const Tag = getTag(as);
  return (
    <Tag
      className={className}
      variants={fadeIn(delay)}
      initial={reduced ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={VP}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Staggered children container */
export function Stagger({ children, className, as, ...rest }: Omit<BaseProps, 'delay'>) {
  const reduced = useReducedMotion();
  const Tag = getTag(as as string | undefined);
  return (
    <Tag
      className={className}
      variants={staggerContainer}
      initial={reduced ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={VP}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Single item inside a Stagger — passes all extra props through */
export function StaggerItem({ children, className, as, ...rest }: Omit<BaseProps, 'delay'>) {
  const Tag = getTag(as as string | undefined);
  return (
    <Tag className={className} variants={staggerItem} {...rest}>
      {children}
    </Tag>
  );
}

/** Image reveal with clip-path + scale */
export function ImageReveal({ children, className, delay = 0 }: BaseProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      style={{ overflow: 'hidden' }}
      variants={{
        hidden: { clipPath: 'inset(0 0 100% 0)', opacity: 0 },
        visible: {
          clipPath: 'inset(0 0 0% 0)',
          opacity: 1,
          transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay },
        },
      }}
      initial={reduced ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={VP}
    >
      {children}
    </motion.div>
  );
}

/** Scale reveal */
export function ScaleReveal({ children, className, delay = 0 }: BaseProps) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, scale: 0.96 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay } },
      }}
      initial={reduced ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={VP}
    >
      {children}
    </motion.div>
  );
}

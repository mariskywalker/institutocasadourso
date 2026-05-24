import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "./motion";

type FloatingIconProps = {
  icon: ReactNode;
  className?: string;
  toneClassName?: string;
  sizeClassName?: string;
  speed?: "slow" | "slower";
};

export function FloatingIcon({
  icon,
  className,
  toneClassName = "text-sky/35",
  sizeClassName = "w-10 h-10",
  speed = "slow",
}: FloatingIconProps) {
  const reduced = usePrefersReducedMotion();
  const animationClass = reduced ? "" : speed === "slower" ? "animate-float-delayed" : "animate-float";

  return (
    <span
      aria-hidden="true"
      className={cn(
        "absolute pointer-events-none opacity-60 blur-[0.5px]",
        toneClassName,
        sizeClassName,
        animationClass,
        className,
      )}
    >
      {icon}
    </span>
  );
}

type FloatingIconGroupProps = {
  children: ReactNode;
  className?: string;
};

export function FloatingIconGroup({ children, className }: FloatingIconGroupProps) {
  return <div className={cn("absolute inset-0 overflow-hidden", className)}>{children}</div>;
}

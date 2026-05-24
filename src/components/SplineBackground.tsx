import { useEffect } from "react";
import { cn } from "@/lib/utils";

/** Clarity Stream — https://my.spline.design/claritystream-BTVRLfQKcG85zwIPyXCgXcJg/ */
export const SPLINE_CLARITY_STREAM_URL =
  "https://prod.spline.design/BTVRLfQKcG85zwIPyXCgXcJg/scene.splinecode";

const VIEWER_SCRIPT = "https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js";

function loadSplineViewer() {
  if (document.querySelector('script[data-spline-viewer]')) return;
  const script = document.createElement("script");
  script.type = "module";
  script.src = VIEWER_SCRIPT;
  script.dataset.splineViewer = "";
  document.head.appendChild(script);
}

type SplineBackgroundProps = {
  className?: string;
  /** Light page overlay (brand hub). Dark overlay for neuroafetivo hero. */
  variant?: "light" | "dark";
};

export function SplineBackground({ className, variant = "light" }: SplineBackgroundProps) {
  useEffect(() => {
    loadSplineViewer();
  }, []);

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 z-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      <spline-viewer
        url={SPLINE_CLARITY_STREAM_URL}
        loading="lazy"
        events-target="global"
        className="block h-full w-full [--spline-bg:transparent]"
      />
      {variant === "light" ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-background/92 via-background/78 to-background/62" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_45%,transparent_0%,hsl(var(--background)/0.55)_55%,hsl(var(--background)/0.88)_100%)]" />
        </>
      ) : (
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(to right, #16151A 0%, rgba(22,21,26,.88) 26%, rgba(22,21,26,.55) 48%, rgba(22,21,26,.15) 68%, transparent 100%),
              linear-gradient(to top, rgba(22,21,26,.7) 0%, transparent 22%),
              linear-gradient(to bottom, rgba(22,21,26,.55) 0%, transparent 18%)
            `,
          }}
        />
      )}
    </div>
  );
}

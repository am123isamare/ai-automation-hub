import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { LINKEDIN } from "@/lib/portfolio-data";

export const Route = createFileRoute("/linkedin")({
  head: () => ({
    meta: [
      { title: "Hadia Aurangzaib — LinkedIn" },
      { description: "Redirecting to Hadia Aurangzaib's LinkedIn profile." },
    ],
  }),
  component: LinkedinRedirect,
});

function LinkedinRedirect() {
  useEffect(() => {
    window.location.replace(LINKEDIN);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 text-center">
      <p className="font-mono text-sm text-muted-foreground">Taking you to LinkedIn…</p>
      <a
        href={LINKEDIN}
        rel="noopener noreferrer"
        className="rounded-full border border-border px-6 py-3 font-semibold transition-colors hover:bg-secondary"
      >
        Open profile manually
      </a>
    </div>
  );
}

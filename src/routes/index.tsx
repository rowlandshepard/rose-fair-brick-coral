import { createFileRoute } from "@tanstack/react-router";
import { TractApp } from "@/components/tract-app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <TractApp />;
}

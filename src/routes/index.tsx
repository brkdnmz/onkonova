import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomeComponent,
  beforeLoad: () => {
    throw redirect({
      to: "/blogs",
    });
  },
});

function HomeComponent() {
  return null;
}

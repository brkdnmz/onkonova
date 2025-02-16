import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/videos")({
  component: VideosComponent,
});

function VideosComponent() {
  return (
    <div>
      <h3 className="italic">Burası henüz yok :(</h3>
    </div>
  );
}

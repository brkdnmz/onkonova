import OnkoNovaLogo from "@/assets/images/onkonova-logo-rounded.png";
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/blogs/_blog-layout")({
  component: BlogLayoutComponent,
});

function BlogLayoutComponent() {
  return (
    <div>
      <ul className="flex gap-2 items-center select-none pb-4">
        <li>
          <Link to="/">
            <img
              src={OnkoNovaLogo}
              alt="OnkoNova"
              className="w-5 h-5"
            />
          </Link>
        </li>
        &gt;
        <Link to="/blogs">Bloglar</Link>
      </ul>
      <Outlet />
    </div>
  );
}

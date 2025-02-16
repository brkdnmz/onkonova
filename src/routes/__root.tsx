import OnkoNovaLogo from "@/assets/images/onkonova-logo-rounded.png";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="bg-gradient-to-b from-[#cabcfb] to-[#edc4d6] min-h-screen">
      <NavBar />
      <div className="container mx-auto px-4">
        <Outlet />
      </div>
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  );
}

function NavBar() {
  const links = [
    { to: "/blogs", label: "Bloglar" },
    { to: "/videos", label: "Videolar" },
    { to: "/new-post", label: "+ Yeni" },
  ];

  return (
    <div className="p-2 flex gap-2 text-lg items-center mb-4 border-b">
      <Link to="/">
        <img
          src={OnkoNovaLogo}
          alt="OnkoNova"
          className="w-14 h-14"
        />
      </Link>

      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className="hover:underline underline-offset-4"
          activeProps={{
            className: "font-bold underline decoration-2",
          }}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

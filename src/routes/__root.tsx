import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Header from "../components/layout/Header";

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <main className="container mx-auto px-4">
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  ),
});

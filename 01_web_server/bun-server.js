import { serve } from "bun";

serve({
  fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/") {
      return new Response("Tea | Home Page - Bun", { status: 200 });
    } else if (url.pathname === "/iced-tea") {
      return new Response("Iced Tea | Tea - Bun", { status: 200 });
    } else {
      return new Response("404 | Page Not Found - Bun", { status: 404 });
    }
  },

  port: 3000,
});

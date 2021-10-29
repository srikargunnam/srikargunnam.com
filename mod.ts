import { serve, serveStatic } from "https://deno.land/x/sift@0.4.2/mod.ts";

serve({
  "/": serveStatic("index.html", { baseUrl: import.meta.url }),
  "/style.css": serveStatic("style.css", { baseUrl: import.meta.url }),
});

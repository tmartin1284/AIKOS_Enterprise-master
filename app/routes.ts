import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("layouts/HeaderAndFooter.tsx", [
        index("routes/home.tsx"),
        route("services", "routes/services.tsx"),
        route("contact", "routes/contact.tsx"),
        route("about", "routes/about.tsx"),
    ]
    ),
] satisfies RouteConfig;

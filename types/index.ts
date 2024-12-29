import type {RouteLocation, RouteLocationRaw} from "vue-router";

export type Theme = "dark" | "light"

export type SidebarLink = {
    label: string;
    route: RouteLocationRaw | RouteLocation
    icon: string;
}
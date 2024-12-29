import type {SidebarLink} from "~/types";

export const sidebarMenuLinks: SidebarLink[] = [
    {
        label: 'Home',
        route: {
            name: 'home'
        },
        icon: 'icon-home'
    },
    {
        label: 'Notifications',
        route: {
            name: 'notifications'
        },
        icon: 'icon-bell'
    },
    {
        label: 'Profile',
        route: {
            name: 'profile'
        },
        icon: 'icon-user'
    }
]
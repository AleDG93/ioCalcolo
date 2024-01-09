export const items = [
    {
        label: 'Home',
        icon: 'pi pi-home',
        route: '/',
        hasSubmenu: false
    },
    {
        label: 'Finance',
        icon: 'pi pi-money-bill',
        route: '/finance',
        hasSubmenu: false
    },
    {
        label: 'Math',
        icon: 'pi pi-search',
        hasSubmenu: true,
        items: [
            {
                label: 'Proportion',
                icon: 'pi pi-bolt',
                route: "/math/proportion"
            },
            {
                label: 'Blocks',
                icon: 'pi pi-server',
                route: "/finance"
            }
        ]
    },
    // Add more menu items as needed
];
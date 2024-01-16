export const items = [
    {
        label: 'Home',
        icon: 'pi pi-home',
        route: '/',
        hasSubmenu: false
    },
    // {
    //     label: 'Finanza',
    //     icon: 'pi pi-money-bill',
    //     hasSubmenu: true,
    //     items: [
    //         {
    //             label: 'Calcolo interesse composto',
    //             icon: 'pi pi-euro',
    //             route: "/finanza/interesse-composto"
    //         }
    //     ]
    // },
    {
        label: 'Matematica',
        icon: 'pi pi-chart-line',
        hasSubmenu: true,
        items: [
            // {
            //     label: 'Calcolatrice',
            //     icon: 'pi pi-calculator',
            //     route: "/matematica/calcolatrice"
            // },
            {
                label: 'Proporzioni',
                icon: 'pi pi-compass',
                route: "/matematica/proporzioni"
            },
            {
                label: 'Percentuale',
                icon: 'pi pi-percentage',
                route: "/matematica/percentuale"
            },
            // {
            //     label: 'Media Ponderata',
            //     icon: 'pi pi-sitemap',
            //     route: "/matematica/media-ponderata"
            // },
            // {
            //     label: 'Area e Volume',
            //     icon: 'pi pi-table',
            //     route: "/matematica/area-volume"
            // }
        ]
    },
    // {
    //     label: 'Date',
    //     icon: 'pi pi-calendar',
    //     hasSubmenu: true,
    //     items: [
    //         {
    //             label: 'Calcolo date',
    //             icon: 'pi pi-calendar-times',
    //             route: "/date/calcolo-date"
    //         }
    //     ]
    // },
    {
        label: 'Codice Fiscale',
        icon: 'pi pi-id-card',
        hasSubmenu: false,
        route: "/documenti/codice-fiscale"
    },
    // {
    //     label: 'Convertitori',
    //     icon: 'pi pi-arrow-right-arrow-left',
    //     hasSubmenu: true,
    //     items: [
    //         {
    //             label: 'Unità di misura',
    //             icon: 'pi pi-cog',
    //             route: "/convertitore/unita-di-misura"
    //         },
    //         {
    //             label: 'Contatore Parole e Caratteri',
    //             icon: 'pi pi-book',
    //             route: "/convertitore/contatore-parole-caratteri"
    //         }
    //     ]
    // },
    // Add more menu items as needed
];
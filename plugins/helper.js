export default defineNuxtPlugin(() => {
    return {
        client: true, // Only run this plugin on the client-side,
        routeDetail: null,
        provide: {
            dub: function (label) {
                if (process.client) {
                    const lang = localStorage.getItem("lang");

                    return label[lang];
                }
            },
        },
    };
});

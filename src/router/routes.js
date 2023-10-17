const routes = [
    {
        path: "/",
        component: () => import("layouts/MainLayout.vue"),
        children: [
            {
                path: "/dashboard",
                component: () => import("pages/MainPage.vue"),
            },
            {
                path: "/users",
                component: () => import("pages/users/UsersList.vue"),
            },
            {
                path: "/users/create",
                component: () => import("pages/users/CreateUser.vue"),
            },
            {
                path: "/faq",
                component: () => import("pages/FaqPage.vue"),
            },

            {
                path: "/widgets",
                component: () => import("pages/WidgetsPage.vue"),
            },

            {
                path: "/charts",
                component: () => import("pages/ChartsPage.vue"),
            },
        ],
    },

    {
        path: "/sign-in",
        component: () => import("pages/authentication/SignIn.vue"),
    },
    {
        path: "/sign-up",
        component: () => import("pages/authentication/SignUp.vue"),
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: "/:catchAll(.*)*",
        component: () => import("pages/ErrorNotFound.vue"),
    },
];

export default routes;

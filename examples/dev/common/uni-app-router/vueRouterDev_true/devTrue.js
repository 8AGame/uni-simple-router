export const vueDevRoutes = [
    {
        path:'/',
        name:'router1',
        component:()=>import('@/common/uni-app-router/vueRouterDev_true/router/router1.vue'),
        beforeEnter:(to,from,next)=>{
            console.log(to);
            console.log(from)
            next();
        },
        children:[
            {
                path:'route1/children1',
                name:'children1',
                component:()=>import('@/common/uni-app-router/vueRouterDev_true/router/router1/children1.vue'),
            },
            {
                path:'route1/children2',
                name:'children2',
                component:()=>import('@/common/uni-app-router/vueRouterDev_true/router/router1/children2.vue'),
            },
            {
                path:'route1/:id',
                name:'children3',
                component:()=>import('@/common/uni-app-router/vueRouterDev_true/router/router1/children3.vue'),
            }
        ]
    },
    {
        path:'/router2',
        name:'router2',
        component:()=>import('@/common/uni-app-router/vueRouterDev_true/router/router2.vue')
    },
    {
        path:'/router3',
        name:'router3',
        component:()=>import('@/common/uni-app-router/vueRouterDev_true/router/router3.vue')
    },
    {
        path:'/router4',
        name:'router4',
        component:()=>import('@/common/uni-app-router/vueRouterDev_true/router/router4.vue')
    },
    {
        path:'/router5',
        name:'router5',
        component:()=>import('@/common/uni-app-router/vueRouterDev_true/router/router5.vue')
    }
]
export default [
    {
        url: "/v1/getMenu",
        method: "post",
        response: () => {
            return {
                "code": 0,
                "data": {
                    menus: [{
                        path: '/layout',
                        name: 'layout',
                        component: 'views/layout/index.vue',
                        meta: {
                            title: '底层layout'
                        },
                        children: [
                            {
                                path: '/error',
                                name: 'Error',
                                component: 'views/error/index.vue',
                                meta: {
                                    title: '错误页'
                                },
                                children: []
                            }
                        ]
                    }]
                },
                "msg": "成功",
                "trace_id": "48c3b35188f3dae5"
            };
        }
    }
]
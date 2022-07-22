export default [
    {
        url: "/menu/getMenu",
        method: "post",
        response: () => {
            return {
                "code": 0,
                "data": {
                    "menus": [
                        {
                            path: '/layout',
                            name: 'layout',
                            component: 'view/layout/index.vue',
                            meta: {
                                title: '底层layout'
                            },
                            children: [
                                {
                                    "ID": 2,
                                    "CreatedAt": "2022-07-09T19:02:48.587+08:00",
                                    "UpdatedAt": "2022-07-09T19:02:48.587+08:00",
                                    "parentId": "0",
                                    "path": "about",
                                    "name": "about",
                                    "hidden": false,
                                    "component": "view/about/index.vue",
                                    "sort": 0,
                                    "meta": {
                                        "keepAlive": false,
                                        "defaultMenu": false,
                                        "title": "关于我们",
                                        "icon": "info-filled",
                                        "closeTab": false
                                    },
                                    "authoritys": null,
                                    "menuBtn": null,
                                    "menuId": "2",
                                    "children": null,
                                    "parameters": [],
                                    "btns": null
                                },
                                {
                                    path: '404',
                                    name: '404',
                                    hidden: true,
                                    meta: {
                                        title: '404',
                                    },
                                    component: 'view/error/index.vue'
                                }
                            ]
                        },
                        {
                            path: '/:catchAll(.*)',
                            redirect: '/layout/404'

                        }
                    ]
                },
                "msg": "获取成功"
            };
        }
    }
]
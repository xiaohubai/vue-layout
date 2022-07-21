export default [
    {
        url: "/v1/getMenu",
        method: "post",
        response: () => {
            return {
                "code": 0,
                "data": {
                    menus: [
                        {
                            "path": "/layout",
                            "name": "layout",
                            "meta": {
                                "title": "底层layout"
                            },
                            "children": [
                                {
                                    "ID": 22,
                                    "CreatedAt": "2022-07-21T11:55:20+08:00",
                                    "UpdatedAt": "2022-07-21T11:55:20+08:00",
                                    "parentId": "0",
                                    "path": "https://www.gin-vue-admin.com",
                                    "name": "https://www.gin-vue-admin.com",
                                    "hidden": false,
                                    "sort": 0,
                                    "meta": {
                                        "keepAlive": false,
                                        "defaultMenu": false,
                                        "title": "官方网站",
                                        "icon": "s-home",
                                        "closeTab": false,
                                        "hidden": false
                                    },
                                    "authoritys": null,
                                    "menuId": "22",
                                    "children": null,
                                    "parameters": []
                                },
                                {
                                    "ID": 1,
                                    "CreatedAt": "2022-07-21T11:55:20+08:00",
                                    "UpdatedAt": "2022-07-21T11:55:20+08:00",
                                    "parentId": "0",
                                    "path": "dashboard",
                                    "name": "dashboard",
                                    "hidden": false,
                                    "sort": 1,
                                    "meta": {
                                        "keepAlive": false,
                                        "defaultMenu": false,
                                        "title": "仪表盘",
                                        "icon": "setting",
                                        "closeTab": false,
                                        "hidden": false
                                    },
                                    "authoritys": null,
                                    "menuId": "1",
                                    "children": null,
                                    "parameters": []
                                },
                                {
                                    "ID": 3,
                                    "CreatedAt": "2022-07-21T11:55:20+08:00",
                                    "UpdatedAt": "2022-07-21T11:55:20+08:00",
                                    "parentId": "0",
                                    "path": "admin",
                                    "name": "superAdmin",
                                    "hidden": false,
                                    "sort": 3,
                                    "meta": {
                                        "keepAlive": false,
                                        "defaultMenu": false,
                                        "title": "超级管理员",
                                        "icon": "user-solid",
                                        "closeTab": false,
                                        "hidden": false
                                    },
                                    "authoritys": null,
                                    "menuId": "3",
                                    "children": [
                                        {
                                            "ID": 19,
                                            "CreatedAt": "2022-07-21T11:55:20+08:00",
                                            "UpdatedAt": "2022-07-21T11:55:20+08:00",
                                            "parentId": "3",
                                            "path": "dictionaryDetail/:id",
                                            "name": "dictionaryDetail",
                                            "hidden": true,
                                            "sort": 1,
                                            "meta": {
                                                "keepAlive": false,
                                                "defaultMenu": false,
                                                "title": "字典详情",
                                                "icon": "s-order",
                                                "closeTab": false,
                                                "hidden": true
                                            },
                                            "authoritys": null,
                                            "menuId": "19",
                                            "children": null,
                                            "parameters": []
                                        },
                                        {
                                            "ID": 4,
                                            "CreatedAt": "2022-07-21T11:55:20+08:00",
                                            "UpdatedAt": "2022-07-21T11:55:20+08:00",
                                            "parentId": "3",
                                            "path": "authority",
                                            "name": "authority",
                                            "hidden": false,
                                            "sort": 1,
                                            "meta": {
                                                "keepAlive": false,
                                                "defaultMenu": false,
                                                "title": "角色管理",
                                                "icon": "s-custom",
                                                "closeTab": false,
                                                "hidden": false
                                            },
                                            "authoritys": null,
                                            "menuId": "4",
                                            "children": null,
                                            "parameters": []
                                        },
                                        {
                                            "ID": 5,
                                            "CreatedAt": "2022-07-21T11:55:20+08:00",
                                            "UpdatedAt": "2022-07-21T11:55:20+08:00",
                                            "parentId": "3",
                                            "path": "menu",
                                            "name": "menu",
                                            "hidden": false,
                                            "sort": 2,
                                            "meta": {
                                                "keepAlive": true,
                                                "defaultMenu": false,
                                                "title": "菜单管理",
                                                "icon": "s-order",
                                                "closeTab": false,
                                                "hidden": false
                                            },
                                            "authoritys": null,
                                            "menuId": "5",
                                            "children": null,
                                            "parameters": []
                                        },
                                        {
                                            "ID": 6,
                                            "CreatedAt": "2022-07-21T11:55:20+08:00",
                                            "UpdatedAt": "2022-07-21T11:55:20+08:00",
                                            "parentId": "3",
                                            "path": "api",
                                            "name": "api",
                                            "hidden": false,
                                            "sort": 3,
                                            "meta": {
                                                "keepAlive": true,
                                                "defaultMenu": false,
                                                "title": "API管理",
                                                "icon": "s-platform",
                                                "closeTab": false,
                                                "hidden": false
                                            },
                                            "authoritys": null,
                                            "menuId": "6",
                                            "children": null,
                                            "parameters": []
                                        },
                                        {
                                            "ID": 7,
                                            "CreatedAt": "2022-07-21T11:55:20+08:00",
                                            "UpdatedAt": "2022-07-21T11:55:20+08:00",
                                            "parentId": "3",
                                            "path": "user",
                                            "name": "user",
                                            "hidden": false,
                                            "sort": 4,
                                            "meta": {
                                                "keepAlive": false,
                                                "defaultMenu": false,
                                                "title": "用户管理",
                                                "icon": "coordinate",
                                                "closeTab": false,
                                                "hidden": false
                                            },
                                            "authoritys": null,
                                            "menuId": "7",
                                            "children": null,
                                            "parameters": []
                                        },
                                        {
                                            "ID": 18,
                                            "CreatedAt": "2022-07-21T11:55:20+08:00",
                                            "UpdatedAt": "2022-07-21T11:55:20+08:00",
                                            "parentId": "3",
                                            "path": "dictionary",
                                            "name": "dictionary",
                                            "hidden": false,
                                            "sort": 5,
                                            "meta": {
                                                "keepAlive": false,
                                                "defaultMenu": false,
                                                "title": "字典管理",
                                                "icon": "notebook-2",
                                                "closeTab": false,
                                                "hidden": false
                                            },
                                            "authoritys": null,
                                            "menuId": "18",
                                            "children": null,
                                            "parameters": []
                                        },
                                        {
                                            "ID": 20,
                                            "CreatedAt": "2022-07-21T11:55:20+08:00",
                                            "UpdatedAt": "2022-07-21T11:55:20+08:00",
                                            "parentId": "3",
                                            "path": "operation",
                                            "name": "operation",
                                            "hidden": false,
                                            "sort": 6,
                                            "meta": {
                                                "keepAlive": false,
                                                "defaultMenu": false,
                                                "title": "操作历史",
                                                "icon": "time",
                                                "closeTab": false,
                                                "hidden": false
                                            },
                                            "authoritys": null,
                                            "menuId": "20",
                                            "children": null,
                                            "parameters": []
                                        }
                                    ],
                                    "parameters": []
                                },
                                {
                                    "ID": 8,
                                    "CreatedAt": "2022-07-21T11:55:20+08:00",
                                    "UpdatedAt": "2022-07-21T11:55:20+08:00",
                                    "parentId": "0",
                                    "path": "person",
                                    "name": "person",
                                    "hidden": true,
                                    "sort": 4,
                                    "meta": {
                                        "keepAlive": false,
                                        "defaultMenu": false,
                                        "title": "个人信息",
                                        "icon": "message-solid",
                                        "closeTab": false,
                                        "hidden": true
                                    },
                                    "authoritys": null,
                                    "menuId": "8",
                                    "children": null,
                                    "parameters": []
                                },
                                {
                                    "ID": 14,
                                    "CreatedAt": "2022-07-21T11:55:20+08:00",
                                    "UpdatedAt": "2022-07-21T11:55:20+08:00",
                                    "parentId": "0",
                                    "path": "systemTools",
                                    "name": "systemTools",
                                    "hidden": false,
                                    "sort": 5,
                                    "meta": {
                                        "keepAlive": false,
                                        "defaultMenu": false,
                                        "title": "系统工具",
                                        "icon": "s-cooperation",
                                        "closeTab": false,
                                        "hidden": false
                                    },
                                    "authoritys": null,
                                    "menuId": "14",
                                    "children": [
                                        {
                                            "ID": 25,
                                            "CreatedAt": "2022-07-21T11:55:20+08:00",
                                            "UpdatedAt": "2022-07-21T11:55:20+08:00",
                                            "parentId": "14",
                                            "path": "autoCodeEdit/:id",
                                            "name": "autoCodeEdit",
                                            "hidden": true,
                                            "sort": 0,
                                            "meta": {
                                                "keepAlive": false,
                                                "defaultMenu": false,
                                                "title": "自动化代码（复用）",
                                                "icon": "s-finance",
                                                "closeTab": false,
                                                "hidden": true
                                            },
                                            "authoritys": null,
                                            "menuId": "25",
                                            "children": null,
                                            "parameters": []
                                        },
                                        {
                                            "ID": 24,
                                            "CreatedAt": "2022-07-21T11:55:20+08:00",
                                            "UpdatedAt": "2022-07-21T11:55:20+08:00",
                                            "parentId": "14",
                                            "path": "autoCodeAdmin",
                                            "name": "autoCodeAdmin",
                                            "hidden": false,
                                            "sort": 1,
                                            "meta": {
                                                "keepAlive": false,
                                                "defaultMenu": false,
                                                "title": "自动化代码管理",
                                                "icon": "s-finance",
                                                "closeTab": false,
                                                "hidden": false
                                            },
                                            "authoritys": null,
                                            "menuId": "24",
                                            "children": null,
                                            "parameters": []
                                        },
                                        {
                                            "ID": 15,
                                            "CreatedAt": "2022-07-21T11:55:20+08:00",
                                            "UpdatedAt": "2022-07-21T11:55:20+08:00",
                                            "parentId": "14",
                                            "path": "autoCode",
                                            "name": "autoCode",
                                            "hidden": false,
                                            "sort": 1,
                                            "meta": {
                                                "keepAlive": true,
                                                "defaultMenu": false,
                                                "title": "代码生成器",
                                                "icon": "cpu",
                                                "closeTab": false,
                                                "hidden": false
                                            },
                                            "authoritys": null,
                                            "menuId": "15",
                                            "children": null,
                                            "parameters": []
                                        },
                                        {
                                            "ID": 16,
                                            "CreatedAt": "2022-07-21T11:55:20+08:00",
                                            "UpdatedAt": "2022-07-21T11:55:20+08:00",
                                            "parentId": "14",
                                            "path": "formCreate",
                                            "name": "formCreate",
                                            "hidden": false,
                                            "sort": 2,
                                            "meta": {
                                                "keepAlive": true,
                                                "defaultMenu": false,
                                                "title": "表单生成器",
                                                "icon": "magic-stick",
                                                "closeTab": false,
                                                "hidden": false
                                            },
                                            "authoritys": null,
                                            "menuId": "16",
                                            "children": null,
                                            "parameters": []
                                        },
                                        {
                                            "ID": 17,
                                            "CreatedAt": "2022-07-21T11:55:20+08:00",
                                            "UpdatedAt": "2022-07-21T11:55:20+08:00",
                                            "parentId": "14",
                                            "path": "system",
                                            "name": "system",
                                            "hidden": false,
                                            "sort": 3,
                                            "meta": {
                                                "keepAlive": false,
                                                "defaultMenu": false,
                                                "title": "系统配置",
                                                "icon": "s-operation",
                                                "closeTab": false,
                                                "hidden": false
                                            },
                                            "authoritys": null,
                                            "menuId": "17",
                                            "children": null,
                                            "parameters": []
                                        }
                                    ],
                                    "parameters": []
                                },
                                {
                                    "ID": 9,
                                    "CreatedAt": "2022-07-21T11:55:20+08:00",
                                    "UpdatedAt": "2022-07-21T11:55:20+08:00",
                                    "parentId": "0",
                                    "path": "example",
                                    "name": "example",
                                    "hidden": false,
                                    "sort": 6,
                                    "meta": {
                                        "keepAlive": false,
                                        "defaultMenu": false,
                                        "title": "示例文件",
                                        "icon": "s-management",
                                        "closeTab": false,
                                        "hidden": false
                                    },
                                    "authoritys": null,
                                    "menuId": "9",
                                    "children": [
                                        {
                                            "ID": 10,
                                            "CreatedAt": "2022-07-21T11:55:20+08:00",
                                            "UpdatedAt": "2022-07-21T11:55:20+08:00",
                                            "parentId": "9",
                                            "path": "excel",
                                            "name": "excel",
                                            "hidden": false,
                                            "sort": 4,
                                            "meta": {
                                                "keepAlive": false,
                                                "defaultMenu": false,
                                                "title": "excel导入导出",
                                                "icon": "s-marketing",
                                                "closeTab": false,
                                                "hidden": false
                                            },
                                            "authoritys": null,
                                            "menuId": "10",
                                            "children": null,
                                            "parameters": []
                                        },
                                        {
                                            "ID": 11,
                                            "CreatedAt": "2022-07-21T11:55:20+08:00",
                                            "UpdatedAt": "2022-07-21T11:55:20+08:00",
                                            "parentId": "9",
                                            "path": "upload",
                                            "name": "upload",
                                            "hidden": false,
                                            "sort": 5,
                                            "meta": {
                                                "keepAlive": false,
                                                "defaultMenu": false,
                                                "title": "媒体库（上传下载）",
                                                "icon": "upload",
                                                "closeTab": false,
                                                "hidden": false
                                            },
                                            "authoritys": null,
                                            "menuId": "11",
                                            "children": null,
                                            "parameters": []
                                        },
                                        {
                                            "ID": 12,
                                            "CreatedAt": "2022-07-21T11:55:20+08:00",
                                            "UpdatedAt": "2022-07-21T11:55:20+08:00",
                                            "parentId": "9",
                                            "path": "breakpoint",
                                            "name": "breakpoint",
                                            "hidden": false,
                                            "sort": 6,
                                            "meta": {
                                                "keepAlive": false,
                                                "defaultMenu": false,
                                                "title": "断点续传",
                                                "icon": "upload",
                                                "closeTab": false,
                                                "hidden": false
                                            },
                                            "authoritys": null,
                                            "menuId": "12",
                                            "children": null,
                                            "parameters": []
                                        },
                                        {
                                            "ID": 13,
                                            "CreatedAt": "2022-07-21T11:55:20+08:00",
                                            "UpdatedAt": "2022-07-21T11:55:20+08:00",
                                            "parentId": "9",
                                            "path": "customer",
                                            "name": "customer",
                                            "hidden": false,
                                            "sort": 7,
                                            "meta": {
                                                "keepAlive": false,
                                                "defaultMenu": false,
                                                "title": "客户列表（资源示例）",
                                                "icon": "s-custom",
                                                "closeTab": false,
                                                "hidden": false
                                            },
                                            "authoritys": null,
                                            "menuId": "13",
                                            "children": null,
                                            "parameters": []
                                        }
                                    ],
                                    "parameters": []
                                },
                                {
                                    "ID": 23,
                                    "CreatedAt": "2022-07-21T11:55:20+08:00",
                                    "UpdatedAt": "2022-07-21T11:55:20+08:00",
                                    "parentId": "0",
                                    "path": "state",
                                    "name": "state",
                                    "hidden": false,
                                    "sort": 6,
                                    "meta": {
                                        "keepAlive": false,
                                        "defaultMenu": false,
                                        "title": "服务器状态",
                                        "icon": "cloudy",
                                        "closeTab": false,
                                        "hidden": false
                                    },
                                    "authoritys": null,
                                    "menuId": "23",
                                    "children": null,
                                    "parameters": []
                                },
                                {
                                    "ID": 2,
                                    "CreatedAt": "2022-07-21T11:55:20+08:00",
                                    "UpdatedAt": "2022-07-21T11:55:20+08:00",
                                    "parentId": "0",
                                    "path": "about",
                                    "name": "about",
                                    "hidden": false,
                                    "sort": 7,
                                    "meta": {
                                        "keepAlive": false,
                                        "defaultMenu": false,
                                        "title": "关于我们",
                                        "icon": "info",
                                        "closeTab": false,
                                        "hidden": false
                                    },
                                    "authoritys": null,
                                    "menuId": "2",
                                    "children": null,
                                    "parameters": []
                                },
                                {
                                    "path": "404",
                                    "name": "404",
                                    "hidden": true,
                                    "meta": {
                                        "title": "迷路了*。*",
                                        "hidden": true
                                    }
                                }
                            ]
                        },
                        {
                            "path": "/:catchAll(.*)",
                            "redirect": "/layout/404"
                        }
                    ]
                },
                "msg": "成功",
                "trace_id": "48c3b35188f3dae5"
            };
        }
    }
]
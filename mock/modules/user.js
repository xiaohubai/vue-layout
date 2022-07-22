export default [
    {
        url: "/user/setUserInfo",
        method: "post",
        response: () => {
            return {
                "code": 0,
                "data": {
                },
                "msg": "成功",
                "trace_id": "48c3b35188f3dae5"
            };
        }
    },
    {
        url: "/user/getUserInfo",
        method: "get",
        response: () => {
            return {
                "code": 0,
                "data": {
                    "userInfo": {
                        "id": 1,
                        "uid": "67cdf195-574d-456a-a761-c18b5b8585c1",
                        "userName": "admin",
                        "nick": "",
                        "birth": "2022-07-20",
                        "avatar": "avatar.jpg",
                        "roleID": "0",
                        "roleName": "管理员",
                        "phone": "13269110806",
                        "wechat": "",
                        "email": "",
                        "state": "",
                        "defaultRouter": "dashboard",
                        "createdUser": "admin",
                        "updatedUser": "admin",
                        "createAt": "2022-07-20 20:44:58",
                        "updateAt": "2022-07-20 20:44:58"
                    }
                },
                "msg": "成功",
                "trace_id": "48c3b35188f3dae5"
            };
        }
    }
]
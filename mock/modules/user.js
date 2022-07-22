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
                        "nickName": "小不点",
                        "birth": "2022-07-20",
                        "headerImg": "https://qmplusimg.henrongyi.top/gva_header.jpg",
                        "roleID": "0",
                        "roleName": "管理员",
                        "phone": "13269110806",
                        "wechat": "",
                        "email": "",
                        "state": "",
                        "defaultRouter": "about",
                        "sideMode": "dark",
                        "baseColor": "#fff",
                        "activeColor": "#1890ff",
                        "createdUser": "admin",
                        "updatedUser": "admin",
                        "createAt": "2022-07-20 20:44:58",
                        "updateAt": "2022-07-20 20:44:58"
                    },
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVVUlEIjoiOGQzMGYzYWYtOGMxZC00MTg2LWJiZDgtZWY1NWNkMmUyYTk5IiwiSUQiOjEsIlVzZXJuYW1lIjoiYWRtaW4iLCJOaWNrTmFtZSI6Iui2hee6p-euoeeQhuWRmCIsIkF1dGhvcml0eUlkIjo4ODgsIkJ1ZmZlclRpbWUiOjg2NDAwLCJleHAiOjE2NTkwNjY0ODksImlzcyI6InFtUGx1cyIsIm5iZiI6MTY1ODQ2MDY4OX0.jKGW0SGFaV_CeYfw1vsdtcqD9NiDXEuxi6J_dvcQzrE",
                    "expiresAt": 1659066489000
                },
                "msg": "登录成功"
            };
        }
    }
]
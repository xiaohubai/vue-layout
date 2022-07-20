export default [
    {
        url: "/api/login",
        method: "post",
        response: () => {
            return {
                code: 0,
                message: "ok",
                data: ["tom", "jerry"]
            };
        }
    },
    {
        url: "/v1/captcha",
        method: "get",
        response: () => {
            return {
                "code": 0,
                "data": {
                    "pic_length_max": 6,
                    "pic_length_min": 6,
                    "captcha_id": "keXugQafsd3QuON1XFD0",
                    "pic_path": "data:image/png;base64,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"
                },
                "msg": "成功",
                "trace_id": "48c3b35188f3dae5"
            };
        }
    }
];
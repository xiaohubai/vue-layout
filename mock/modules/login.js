export default [
    {
        url: "/api/login",
        method: "get",
        response: () => {
            return {
                code: 200,
                message: "ok",
                data: ["tom", "jerry"]
            };
        }
    }
];
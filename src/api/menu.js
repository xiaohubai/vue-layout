import service from '@/utils/request'

// @Summary 用户登录 获取动态路由
// @Produce  application/json
// @Param 可以什么都不填 调一下即可
// @Router /menu/getMenu [post]
export const asyncMenu = (data) => {
  console.log(data);
  return service({
    url: '/v1/getMenu',
    method: 'post',
    data
  })
}

import Router from 'koa-router'
import UserController from "../controller/user.controller";

const userRouter = new Router({
    prefix: '/user'
})

/*
 * @desc 获取用户列表或单个用户
 * */
userRouter.get('/', UserController.getUser)

/**
 * @desc 新增用户
 * */
userRouter.post('/')

/**
 * @desc 更新用户
 * */
userRouter.put('/:id', UserController.updateUser)

/**
 * @desc 删除用户
 * */
userRouter.delete('/:id', UserController.deleteUser)

export default userRouter

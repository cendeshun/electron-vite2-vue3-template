/*
 * @Description: 全局路由守卫
 */
import router from "./index";

//全局前置守卫
router.beforeEach(async (to, from, next) => {
  next();
});

//全局后置守卫
router.afterEach(async (to, from) => {});

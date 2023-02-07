import { RouteRecordRaw } from 'vue-router'

export const buildModuleRouter = (module:Record<string, any>) => {
  const route:RouteRecordRaw[] = []
  Object.entries(module).forEach(([key, file]) => {
    const currInfo = key.split('/')[key.split('/').length - 1].split('.')[0]
    const r:RouteRecordRaw = {
      path: `/${currInfo}`,
      name: currInfo,
      component: file.default
    }
    route.push(r)
  })
  return route
}

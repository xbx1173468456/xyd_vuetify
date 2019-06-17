import { AuthState } from './auth.module'
import { isBinded, roleRoute, currentRole } from './auth.paths'
import { RoleVo } from '@/models/user.model'

export const authGetters = {
  [isBinded](state: AuthState, getters): boolean {
    if (!state.user) {
      return false
    }

    const roleList = state.user && state.user.roleVoList

    if (roleList) {
      return roleList.length > 0 ? true : false
    } else {
      return false
    }
  },
  [roleRoute](state: AuthState, getters): string {
    const role = getters[currentRole] as RoleVo
    const roleCode = role.code

    // convert role to path
    switch (roleCode) {
      // 校办
      case 100:
        return 'school-run'
      // 班主任 -> 显示老师界面
      case 200:
        return 'teacher'
      // 家长
      case 300:
        return 'parents'
      // 学生
      case 400:
        return 'student'
      // 老师
      case 500:
        return 'teacher'
      // 家委会
      case 600:
        return 'parents-committee'
      default:
        return ''
    }
  }
}

import { mockUserInfo, mockSchoolInfo } from '@/configs/config'
import { SchoolInfo } from '@/models/school.model'
import { UserInfo, RoleVo } from '@/models/user.model'
import { make } from 'vuex-pathify'
import { authActions } from './auth.actions'
import { authGetters } from './auth.getters'

export interface AuthState {
  user: UserInfo
  school: SchoolInfo
  showTabs: boolean
  isTourist: boolean
  currentRole: RoleVo
}

const initialAuthState: AuthState = {
  user: mockUserInfo,
  school: mockSchoolInfo,
  // set false when build
  showTabs: false,
  isTourist: false,
  currentRole: {} as RoleVo
}

const autoMutations = make.mutations(initialAuthState)
const autoGetters = make.getters(initialAuthState)

export const auth = {
  namespaced: true,
  state: initialAuthState,
  mutations: { ...autoMutations },
  actions: authActions,
  getters: { ...autoGetters, ...authGetters }
}

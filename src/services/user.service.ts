import { YANG_BASE_URL, mockUserInfo } from '@/configs/config'
import { SchoolInfo, SchoolInfoResponse } from '@/models/school.model'
import {
  BindingPost,
  BindingResponse,
  UserInfo,
  UserInfoResponse
} from '@/models/user.model'
import { HttpConfigService, httpConfigService } from './http-config.service'

export class UserService {
  baseUrl: string = YANG_BASE_URL ? YANG_BASE_URL : ''

  httpConfigService: HttpConfigService = httpConfigService

  schoolInfo: SchoolInfo = {} as SchoolInfo
  userInfo: UserInfo = {} as UserInfo

  bind(data: BindingPost) {
    return this.httpConfigService.httpSercvice.post<BindingResponse>(
      this.baseUrl + '/w/user/binding',
      data
    )
  }

  getUserInfo() {
    console.log('xxxxxxxxxxxxxxxxxxxxx')
    return this.httpConfigService.httpSercvice.post<UserInfoResponse>(
      this.baseUrl + '/w/user/select-by-school-id'
    )
  }

  getSchoolInfo() {
    return this.httpConfigService.httpSercvice.post<SchoolInfoResponse>(
      this.baseUrl + '/w/school/id'
    )
  }
}

export const userService = new UserService()

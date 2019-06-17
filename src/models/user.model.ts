export interface BindingPost {
  idcard: string
  name: string
  parentType: number
  userType: number
}

export interface BindingResponse {
  content: number
  errorCode: string
  errorMsg: string
  status: string
}

export interface UserInfoResponse {
  content: UserInfo
  errorCode: string
  errorMsg: string
  status: string
}

export interface UserInfo {
  city: string
  country: string
  headImgUrl: string
  id: number
  language: string
  name: string
  nickname: string
  province: string
  roleVoList: RoleVo[]
  sex: number
  studentVoList: StudentVoList[]
}

export interface RoleVo {
  code: number
  name: string
}

export interface StudentVoList {
  age: number
  classId: number
  id: number
  idcard: string
  mobile: string
  name: string
  nickname: string
  rainAmount: number
  schoolId: number
  sex: string
  studentNumber: string
  userName: string
}

export enum BindingStatus {
  NotBinding = 0,
  Binded = 1,
  Tourist = 3
}

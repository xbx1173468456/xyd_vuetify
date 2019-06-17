import { UserInfo } from '@/models/user.model'
import { SchoolInfo } from '@/models/school.model'

export const BASE_URL = process.env.VUE_APP_BASE_URL
export const YANG_BASE_URL = process.env.VUE_APP_YANG_BASE_URL
export const GUO_BASE_URL = process.env.VUE_APP_GUO_BASE_URL

export const COLORS = [
  '#2196F3',
  '#00BCD4',
  '#FFC107',
  '#E91E63',
  '#4CAF50',
  '9E9E9E',
  '9E9E9E',
  '9E9E9E',
  '9E9E9E',
  '9E9E9E'
]

export enum Role {
  Teacher = 'teacher',
  SchoolRun = 'school-run',
  Parents = 'parents'
}

export const mockUserInfo: UserInfo = {
  city: '成都',
  country: '中国',
  headImgUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
  id: 123,
  language: '中文',
  name: '王磊',
  nickname: '星空',
  province: '成都',
  roleVoList: [
    {
      name: '家长',
      code: 300
    },
    {
      name: '老师',
      code: 200
    },
    {
      name: '校办',
      code: 100
    }
  ],
  sex: 0,
  studentVoList: [
    {
      age: 13,
      classId: 1,
      id: 553,
      idcard: '345677884433333333',
      mobile: '15633257890',
      name: '王小明',
      nickname: '小白',
      rainAmount: 56,
      schoolId: 1,
      sex: '男',
      studentNumber: '20153366',
      userName: 'string'
    }
  ]
}

export const mockSchoolInfo: SchoolInfo = {
  address: '成都市天府三街',
  code: 'aaabbbcccddd',
  description: 'faswerh erhg4y eargye35 ',
  email: 'string',
  history: 'string',
  idea: 'string',
  lat: 0,
  lng: 0,
  logo: [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDaBS6PmCeZJhT3HHmGPikU6l8mBI-yWJouXvA2heBNkKmOX17'
  ],
  masterId: 0,
  masterName: 'string',
  mobile: 'string',
  name: 'string',
  qrCode: 'string',
  start: 'string',
  tel: 'string',
  schoolId: '1'
}

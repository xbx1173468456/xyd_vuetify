export interface SchoolInfoResponse {
  content: SchoolInfo
  errorCode: string
  errorMsg: string
  status: string
}

export interface SchoolInfo {
  address: string
  code: string
  description: string
  email: string
  history: string
  idea: string
  lat: number
  lng: number
  logo: string[]
  masterId: number
  masterName: string
  mobile: string
  name: string
  qrCode: string
  start: string
  tel: string
  schoolId: string
}

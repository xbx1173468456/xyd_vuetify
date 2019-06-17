export interface DeductionListResponse {
  content: Deduction[]
  errorCode: string
  errorMsg: string
  status: string
}

export interface Deduction {
  imageUrls: string[]
  changeScore: number
  checkName: string
  createTime: string
  remarks: string
}

export interface DutyTopResponse {
  content: TopItem[]
  status: string
}

export interface TopItem {
  classFullName: string
  starLevel: number
  amountScore: number
}

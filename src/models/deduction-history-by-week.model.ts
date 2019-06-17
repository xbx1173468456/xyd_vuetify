export interface DeductionHistoryByWeekResponse {
  content: DeductionHistoryByWeekItem[]
  status: string
}

export interface DeductionHistoryByWeekItem {
  checkName: string
  scores: number[]
}

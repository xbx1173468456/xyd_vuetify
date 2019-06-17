export interface ClasslistResponse {
  content: ClassModel[]
  status: string
}

export interface ClassModel {
  classId: number
  className: string
}

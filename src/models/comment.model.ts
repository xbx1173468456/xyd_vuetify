export interface CommentListResponse {
  content: Comment[]
  errorCode: string
  errorMsg: string
  status: string
}

export interface Comment {
  articleId: number
  className: string
  content: string
  headPortrait: string
  id: number
  isLike: number
  likeNum: number
  priority: number
  userId: number
  userName: string
  userNickname: string
}

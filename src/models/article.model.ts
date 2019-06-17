export interface ArticlesResponse {
  content: Article[]
  errorCode: string
  errorMsg: string
  status: string
}

export interface Article {
  authorId: number
  authorName: string
  browseNum: number
  classId: number
  className: string
  commentNum: number
  commentList: Comment[]
  context: string
  cover: string
  createTime: string
  description: string
  id: number
  likeNum: number
  priority: number
  schoolId: string
  schoolName: string
  subTitle: string
  title: string
  type: number
}

export interface ArticlePostData {
  authorId: number
  context: string
  cover: string
  description: string
  subTitle: string
  title: string
  type: number
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

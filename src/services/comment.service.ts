import axios from 'axios'
import { HttpConfigService, httpConfigService } from './http-config.service'

export class CommentService {
  httpConfigService: HttpConfigService = httpConfigService
}

export const comments = [
  {
    id: 1,
    content: `评论 aaa 评论 aaa 评论 aaa `
  },
  {
    id: 2,
    content: `评论 bbb 评论 bbb 评论 bbb 评论 bbb 评论 bbb `
  },
  {
    id: 3,
    content: `评论 ccc 评论 ccc `
  },
  {
    id: 4,
    content: `评论 ddd 评论 ddd 评论 ddd 评论 ddd 评论 ddd 评论 ddd 评论 ddd 评论 ddd 评论 ddd `
  },
  {
    id: 5,
    content: `评论 eee`
  }
]

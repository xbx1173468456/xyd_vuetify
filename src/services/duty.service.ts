import { ClasslistResponse } from '@/models/class.model'
import { DeductionHistoryByWeekResponse } from '@/models/deduction-history-by-week.model'
import { DeductionListResponse } from '@/models/deduction-list.model'
import { httpConfigService, HttpConfigService } from './http-config.service'
import { DutyTopResponse } from '@/models/duty-top.model'
import { GUO_BASE_URL, YANG_BASE_URL } from '@/configs/config'

export class DutyService {
  baseUrl: string = YANG_BASE_URL ? YANG_BASE_URL : ''

  httpConfigService: HttpConfigService = httpConfigService

  getDeductionList(classId: number, pageNo: number = 0, pageSize: number = 10) {
    return this.httpConfigService.httpSercvice.post<DeductionListResponse>(
      this.baseUrl + '/w/score/list-page',
      {
        classId,
        pageNo,
        pageSize
      }
    )
  }

  getDeductionHistoryByWeek(classId: number, schoolId: string) {
    return this.httpConfigService.httpSercvice.post<
      DeductionHistoryByWeekResponse
    >(this.baseUrl + '/w/score/report-froms', {
      classId,
      schoolId
    })
  }

  getClassList(schoolId: string) {
    return this.httpConfigService.httpSercvice.post<ClasslistResponse>(
      this.baseUrl + '/w/class/list',
      {
        schoolId
      }
    )
  }

  getDutyTop(schoolId: string, pageNo: number = 0, pageSize: number = 10) {
    return this.httpConfigService.httpSercvice.post<DutyTopResponse>(
      this.baseUrl + '/w/score-week/list-page',
      {
        schoolId,
        pageNo,
        pageSize
      }
    )
  }
}

export const dutyService = new DutyService()

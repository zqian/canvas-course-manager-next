import { hasKeys } from '../typeUtils'

export interface Globals {
  environment: 'production' | 'development'
  canvasURL: string
  user: {
    loginId: string
    hasCanvasToken: boolean
  }
  userLoginId: string
  course: {
    id: number
    roles: string[]
  }
  baseHelpURL: string
}
export interface APIErrorPayload {
  canvasStatusCode: number
  message: string
  failedInput: string | null
}

export interface APIErrorData {
  statusCode: number
  errors: APIErrorPayload[]
}

export function isAPIErrorData (value: unknown): value is APIErrorData {
  return hasKeys(value, ['statusCode', 'errors'])
}

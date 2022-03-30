import { createEffect } from 'effector'

const BASE_URL = 'https://api.realworld.io/api'

export type Request = {
  path: string
  method: string
  headers?: Record<string, any>
  body?: Record<string, any>
}

export type Answer<T = unknown> = {
  ok: boolean
  status: number
  body: T
}

async function request({ method, path, headers, ...params }: Request) {
  const body = params.body ? JSON.stringify(params.body) : undefined

  const response = await fetch(`${BASE_URL}/${path}`, { method, headers, body })
  const answer = await response.json()

  const responder = {
    status: response.status,
    ok: response.ok,
    body: answer,
  }

  if (response.ok) {
    return responder
  }

  throw responder
}

const requestInternalFx = createEffect<Request, Answer, Answer>(request)

export { requestInternalFx }

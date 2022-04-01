import { createStandaloneToast, UseToastOptions } from '@chakra-ui/react'
import { createEffect, createEvent, sample } from 'effector'

const toast = createStandaloneToast()

const showToastFx = createEffect((options?: UseToastOptions) => {
  toast({
    position: 'top-right',
    duration: 5000,
    ...options,
  })
})

export const errorToast = createEvent<string>()

sample({
  clock: errorToast,
  fn: (title) => ({ title, status: 'error' } as UseToastOptions),
  target: showToastFx,
})

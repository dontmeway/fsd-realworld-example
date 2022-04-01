import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Stack,
} from '@chakra-ui/react'
import { signInFormSchema } from '@shared/schemas'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import type * as types from '@shared/api'

import * as model from '../model'

export const Form = () => {
  const form = useForm<types.LoginRequest>({
    resolver: yupResolver(signInFormSchema),
  })
  const { errors } = form.formState
  return (
    <Stack onSubmit={form.handleSubmit(model.formSubmitted)} w="100%" as="form">
      <FormControl mb="10px" isInvalid={Boolean(errors.email)}>
        <Input type="email" {...form.register('email')} placeholder="Email" />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl mb="20px !important" isInvalid={Boolean(errors.password)}>
        <Input
          type="password"
          {...form.register('password')}
          placeholder="Password"
        />
        <FormErrorMessage>
          {errors.password && errors.password.message}
        </FormErrorMessage>
      </FormControl>
      <Button type="submit" w="100%" colorScheme="whatsapp">
        Sign in
      </Button>
      <Button
        onClick={() => model.formSubmitted({ email: '1@a.com', password: '1' })}
        type="button"
        w="100%"
        colorScheme="whatsapp"
      >
        Developer&apos;s button
      </Button>
    </Stack>
  )
}

import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Stack,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { signUpFormSchema } from '@shared/schemas'
import type * as types from '@shared/api'

import * as model from '../model'

export const Form = () => {
  const form = useForm<types.RegisterRequest>({
    resolver: yupResolver(signUpFormSchema),
  })
  const { errors } = form.formState

  return (
    <Stack onSubmit={form.handleSubmit(model.formSubmitted)} w="100%" as="form">
      <FormControl isInvalid={Boolean(errors.username)}>
        <Input {...form.register('username')} placeholder="Username" />
        <FormErrorMessage>
          {errors.username && errors.username.message}
        </FormErrorMessage>
      </FormControl>
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
        Sign Up
      </Button>
    </Stack>
  )
}

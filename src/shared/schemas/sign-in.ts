import * as yup from 'yup'

export const signInFormSchema = yup.object().shape({
  email: yup
    .string()
    .transform((v) => v.trim())
    .email('Enter an email')
    .required('Required field'),
  password: yup
    .string()
    .transform((v) => v.trim())
    .required('Required field'),
})

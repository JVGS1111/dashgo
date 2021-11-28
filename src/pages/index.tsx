import Head from 'next/head'
import { Flex, Button, Stack } from '@chakra-ui/react'
import { Input } from '../components/form/Input'
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.umd';

import * as yup from 'yup';


type SignInFromData = {
  email: string;
  password: string;
}

const singInFormSchema = yup.object().shape({
  email: yup.string().required('Obrigatório').email('E-mail inválido'),
  password: yup.string().required('Obrigatório')
}).required();

export default function SignIn() {

  const { register, handleSubmit, formState } = useForm<SignInFromData>({
    resolver: yupResolver(singInFormSchema),
  });
  const { errors } = formState;

  const handleSingIn: SubmitHandler<SignInFromData> = async (values, event) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values);

  }
  return (
    <Flex w="100vw" h="100vh" alignItems="center" justify="center">
      <Flex onSubmit={handleSubmit(handleSingIn)} as="form" width="100%" maxWidth={360} bg="gray.800" p="8" borderRadius="8" flexDir="column">
        <Stack spacing="4">

          <Input name="email" type="email" label="E-mail" error={errors.email} {...register('email')} />
          <Input name="password" type="password" label="Senha" error={errors.password} {...register('password')} />

        </Stack>
        <Button isLoading={formState.isSubmitting} type="submit" mt="6" colorScheme="pink" size="lg">Entrar</Button>
      </Flex>
    </Flex >
  )
}


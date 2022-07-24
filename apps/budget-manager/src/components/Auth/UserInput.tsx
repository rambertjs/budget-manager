import { TextInput, TextInputProps } from '@mantine/core';

export const UserInput = ({
  userFieldProps,
  passwordFieldProps,
}: Record<string, TextInputProps>) => (
  <>
    <TextInput label="Email" type="email" {...userFieldProps} />
    <TextInput label="Password" type="password" {...passwordFieldProps} />
  </>
);

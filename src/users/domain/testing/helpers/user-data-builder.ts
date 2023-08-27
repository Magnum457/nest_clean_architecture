import { faker } from '@faker-js/faker';
import { UserProps, UserUpdateProps } from '../../entities/user.entity';

type Props = {
  name?: string;
  email?: string;
  password?: string;
  created_at?: Date;
};
export function UserDataBuilder(props: Props): UserProps {
  return {
    name: props.name ?? faker.person.fullName(),
    email: props.email ?? faker.internet.email(),
    password: props.password ?? faker.internet.password(),
    created_at: props.created_at ?? new Date(),
  };
}
// Pesquisar se é necessário criar um databuilder específico para o update
export function UserUpdateDataBuilder(props: Props): UserUpdateProps {
  return {
    name: props.name ?? faker.person.fullName(),
    email: props.email ?? faker.internet.email(),
  };
}

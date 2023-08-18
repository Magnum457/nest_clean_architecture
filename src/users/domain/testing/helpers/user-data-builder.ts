import { faker } from '@faker-js/faker';
import { UserProps } from '../../entities/user.entity';

type Props = {
  name?: string;
  email?: string;
  senha?: string;
  created_at?: Date;
};
export function UserDataBuilder(props: Props): UserProps {
  return {
    name: props.name ?? faker.person.fullName(),
    email: props.email ?? faker.internet.email(),
    senha: props.senha ?? faker.internet.password(),
    created_at: props.created_at ?? new Date(),
  };
}

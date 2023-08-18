export type UserProps = {
  name: string;
  email: string;
  senha: string;
  created_at?: Date;
};

export class UserEntity {
  constructor(public readonly props: UserProps) {
    this.props.created_at = this.props.created_at ?? new Date();
  }

  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }

  get senha() {
    return this.props.senha;
  }

  get created_at() {
    return this.props.created_at;
  }
}

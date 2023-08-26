import { Entity } from '@/shared/domain/entities/entity';
import { UserValidatorFactory } from '../validators/user.validator';

export type UserProps = {
  name: string;
  email: string;
  password: string;
  created_at?: Date;
};

export type UserUpdateProps = {
  name?: string;
  email?: string;
};

export class UserEntity extends Entity<UserProps> {
  constructor(public readonly props: UserProps, id?: string) {
    UserEntity.validate(props);
    super(props, id);
    this.props.created_at = this.props.created_at ?? new Date();
  }

  update(updateProps: UserUpdateProps): void {
    UserEntity.validate({
      ...this.props,
      name: updateProps.name,
      email: updateProps.email,
    });
    this.name = updateProps.name ?? this.name;
    this.email = updateProps.email ?? this.email;
  }

  updatePassword(value: string): void {
    UserEntity.validate({ ...this.props, password: value });
    this.password = value;
  }

  get name() {
    return this.props.name;
  }

  private set name(value: string) {
    this.props.name = value;
  }

  get email() {
    return this.props.email;
  }

  private set email(value: string) {
    this.props.email = value;
  }

  get password() {
    return this.props.password;
  }

  private set password(value: string) {
    this.props.password = value;
  }

  get created_at() {
    return this.props.created_at;
  }

  static validate(props: UserProps) {
    const validator = UserValidatorFactory.create();
    validator.validate(props);
  }
}

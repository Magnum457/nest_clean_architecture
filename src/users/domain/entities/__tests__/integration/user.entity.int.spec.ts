import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder';
import { UserEntity, UserProps } from '../../user.entity';
import { EntityValidationError } from '@/shared/domain/errors/validation-errors';

describe('UserEntity integration tests', () => {
  describe('Constructor methods', () => {
    it('Should throw an error when creating a user with invalid name', () => {
      let props: UserProps = {
        ...UserDataBuilder({}),
        name: null,
      };
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError);

      props = { ...UserDataBuilder({}), name: '' };
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError);

      props = { ...UserDataBuilder({}), name: 10 as any };
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError);

      props = { ...UserDataBuilder({}), name: 'f'.repeat(256) };
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError);
    });

    it('Should throw an error when creating a user with invalid email', () => {
      let props: UserProps = {
        ...UserDataBuilder({}),
        email: null,
      };
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError);

      props = { ...UserDataBuilder({}), email: '' };
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError);

      props = { ...UserDataBuilder({}), email: 10 as any };
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError);

      props = { ...UserDataBuilder({}), email: 'f'.repeat(256) };
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError);
    });

    it('Should throw an error when creating a user with invalid password', () => {
      let props: UserProps = {
        ...UserDataBuilder({}),
        password: null,
      };
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError);

      props = { ...UserDataBuilder({}), password: '' };
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError);

      props = { ...UserDataBuilder({}), password: 10 as any };
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError);

      props = { ...UserDataBuilder({}), password: 'f'.repeat(101) };
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError);
    });

    it('Should throw an error when creating a user with invalid created_at', () => {
      let props: UserProps = {
        ...UserDataBuilder({}),
        created_at: 10 as any,
      };
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError);

      props = { ...UserDataBuilder({}), created_at: '2023' as any };
      expect(() => new UserEntity(props)).toThrowError(EntityValidationError);
    });
  });
});
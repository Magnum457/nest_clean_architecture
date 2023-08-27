import {
  UserDataBuilder,
  UserUpdateDataBuilder,
} from '@/users/domain/testing/helpers/user-data-builder';
import { UserEntity, UserProps, UserUpdateProps } from '../../user.entity';
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

    it('Should a valid user', () => {
      expect.assertions(0);

      const props: UserProps = {
        ...UserDataBuilder({}),
      };
      new UserEntity(props);
    });
  });

  describe('Update method', () => {
    it('Should throw an error when updating a user with invalid name', () => {
      const entity = new UserEntity(UserDataBuilder({}));

      let updateProps: UserUpdateProps = {
        ...UserUpdateDataBuilder({}),
        name: null,
      };
      expect(() => entity.update(updateProps)).toThrowError(
        EntityValidationError,
      );

      updateProps = { ...UserUpdateDataBuilder({}), name: '' };
      expect(() => entity.update(updateProps)).toThrowError(
        EntityValidationError,
      );

      updateProps = { ...UserUpdateDataBuilder({}), name: 10 as any };
      expect(() => entity.update(updateProps)).toThrowError(
        EntityValidationError,
      );

      updateProps = { ...UserUpdateDataBuilder({}), name: 'f'.repeat(256) };
      expect(() => entity.update(updateProps)).toThrowError(
        EntityValidationError,
      );
    });

    it('Should throw an error when updating a user with invalid email', () => {
      const entity = new UserEntity(UserDataBuilder({}));

      let updateProps: UserUpdateProps = {
        ...UserUpdateDataBuilder({}),
        email: null,
      };
      expect(() => entity.update(updateProps)).toThrowError(
        EntityValidationError,
      );

      updateProps = { ...UserUpdateDataBuilder({}), email: '' };
      expect(() => entity.update(updateProps)).toThrowError(
        EntityValidationError,
      );

      updateProps = { ...UserUpdateDataBuilder({}), email: 10 as any };
      expect(() => entity.update(updateProps)).toThrowError(
        EntityValidationError,
      );

      updateProps = { ...UserUpdateDataBuilder({}), email: 'f'.repeat(256) };
      expect(() => entity.update(updateProps)).toThrowError(
        EntityValidationError,
      );
    });

    it('Should a valid update user', () => {
      expect.assertions(0);

      const props: UserProps = {
        ...UserDataBuilder({}),
      };
      const updateProps: UserUpdateProps = { ...UserUpdateDataBuilder({}) };
      const entity = new UserEntity(props);

      entity.update(updateProps);
    });
  });

  describe('UpdatePassword method', () => {
    it('Should a invalid user using invalid password field', () => {
      const entity = new UserEntity(UserDataBuilder({}));
      expect(() => entity.updatePassword(null)).toThrowError(
        EntityValidationError,
      );
      expect(() => entity.updatePassword('')).toThrowError(
        EntityValidationError,
      );
      expect(() => entity.updatePassword(10 as any)).toThrowError(
        EntityValidationError,
      );
      expect(() => entity.updatePassword('a'.repeat(101))).toThrowError(
        EntityValidationError,
      );
    });

    it('Should a valid user updating a valid password field', () => {
      expect.assertions(0);

      const props: UserProps = {
        ...UserDataBuilder({}),
      };
      const entity = new UserEntity(props);

      entity.updatePassword('other password');
    });
  });
});

import { UserEntity, UserProps } from '../../user.entity';
import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder';

describe('UserEntity unit tests', () => {
  let props: UserProps;
  let sut: UserEntity;

  beforeEach(() => {
    props = UserDataBuilder({});
    sut = new UserEntity(props);
  });

  it('Constructor method', () => {
    expect(sut.props.name).toBe(props.name);
    expect(sut.props.email).toBe(props.email);
    expect(sut.props.senha).toBe(props.senha);
    expect(sut.props.created_at).toBeInstanceOf(Date);
  });

  it('Getter of name field', () => {
    expect(sut.props.name).toBeDefined();
    expect(sut.props.name).toEqual(props.name);
    expect(typeof sut.props.name).toBe('string');
  });

  it('Getter of email field', () => {
    expect(sut.props.email).toBeDefined();
    expect(sut.props.email).toEqual(props.email);
    expect(typeof sut.props.email).toBe('string');
  });

  it('Getter of senha field', () => {
    expect(sut.props.senha).toBeDefined();
    expect(sut.props.senha).toEqual(props.senha);
    expect(typeof sut.props.senha).toBe('string');
  });

  it('Getter of created_at field', () => {
    expect(sut.props.created_at).toBeDefined();
    expect(sut.props.created_at).toBeInstanceOf(Date);
  });
});

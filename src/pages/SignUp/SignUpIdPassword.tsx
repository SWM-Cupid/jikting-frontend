import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { useForm } from 'react-hook-form';
import { validIdCheck, validPasswordCheck } from 'validation';
import { Form } from './style';
import { fetchUserNameCheck } from 'api/signup';

interface Props {
  handleNextClick(): void;
  updateUserInfo(data: { [userData: string]: string }): void;
}

export const SignUpIdPassword = ({ updateUserInfo, handleNextClick }: Props) => {
  const onSubmit = (data: { [key: string]: string }) => {
    delete data.checkUserPassword;
    updateUserInfo(data);
    handleNextClick();
  };

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        title="아이디"
        error={errors.userId}
        {...register('userId', {
          required: '아이디 입력은 필수 입니다.',
          validate: {
            validIdCheck,
            fetchUserNameCheck,
          },
        })}
      />
      <Input
        type="password"
        title="비밀번호"
        error={errors.userPassword}
        {...register('userPassword', {
          required: '비밀번호 입력은 필수 입니다.',
          validate: {
            validPasswordCheck,
          },
        })}
      ></Input>
      <Input
        type="password"
        title="비밀번호 확인"
        error={errors.checkUserPassword}
        {...register('checkUserPassword', {
          required: '비밀번호 체크 입력은 필수 입니다.',
          validate: {
            check: (input) => {
              const password = getValues('userPassword');
              if (password !== input) return '비밀번호가 일치하지 않습니다.';
            },
          },
        })}
      ></Input>
      <Button type="submit" title="다음" background="#FF5680"></Button>
    </Form>
  );
};

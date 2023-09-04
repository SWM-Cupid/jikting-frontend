import { Header } from 'components/Header';
import { ButtonWrapper, EditNickNameWrapper } from './style';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { theme } from 'styles/theme';
import { SubmitHandler, useForm } from 'react-hook-form';
import { validNickNameCheck } from 'validation';
import { fetchNickNameCheck } from 'api/signup';

interface NickName {
  nickname: string;
}

export const EditNickName = ({ nickname }: NickName) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NickName>({ mode: 'onTouched' });

  const onSubmit: SubmitHandler<NickName> = (data: NickName) => {
    console.log(data);
  };
  return (
    <EditNickNameWrapper onSubmit={handleSubmit(onSubmit)}>
      <Header previous title="닉네임" />
      <Input
        error={errors.nickname}
        {...register('nickname', {
          value: nickname,
          required: true,
          validate: { validNickNameCheck, fetchNickNameCheck },
        })}
      />
      <ButtonWrapper>
        <Button type="submit" background={theme.colors.mainPink} color="White" title="변경하기" />
      </ButtonWrapper>
    </EditNickNameWrapper>
  );
};

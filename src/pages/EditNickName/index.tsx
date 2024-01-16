import { Header } from 'components/Header';
import { ButtonWrapper, EditNickNameWrapper } from './style';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { theme } from 'styles/theme';
import { SubmitHandler, useForm } from 'react-hook-form';
import { validNickNameCheck } from 'validation';
import { fetchNickNameCheck } from 'api/signup';
import { fetchEditNickName } from 'api/mypage';
import { useLocation, useNavigate } from 'react-router-dom';
import { Modal } from 'components/Modal';
import { useModal } from 'hooks/useModal';

interface NickName {
  nickname: string;
}

export const EditNickName = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<NickName>({ mode: 'onTouched', defaultValues: { nickname: location.state.nickname } });

  const handleCloseModalClick = () => {
    closeModal();
    navigate(-1);
  };

  const onSubmit: SubmitHandler<NickName> = async (data: NickName) => {
    try {
      await fetchEditNickName(data);
      openModal();
    } catch {
      alert('오류!');
    }
  };
  return (
    <EditNickNameWrapper onSubmit={handleSubmit(onSubmit)}>
      <Header previous title="닉네임" />
      <Input
        error={errors.nickname}
        {...register('nickname', {
          required: true,
          validate: { validNickNameCheck, fetchNickNameCheck },
        })}
      />
      <ButtonWrapper>
        {isDirty ? (
          <Button type="submit" background={theme.colors.mainPink} title="변경하기" />
        ) : (
          <Button disabled={true} background="#cccccc" title="변경하기" />
        )}
      </ButtonWrapper>
      {isOpen ? <Modal title="닉네임 변경이 완료되었습니다." handleButtonClick={handleCloseModalClick} /> : null}
    </EditNickNameWrapper>
  );
};

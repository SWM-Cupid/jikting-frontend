import { Header } from 'components/Header';
import { ButtonWrapper, EditNickNameWrapper } from './style';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { theme } from 'styles/theme';
export const EditNickName = () => {
  return (
    <EditNickNameWrapper>
      <Header previous title="닉네임" />
      <Input />
      <ButtonWrapper>
        <Button type="submit" background={theme.colors.mainPink} color="White" title="변경하기" />
      </ButtonWrapper>
    </EditNickNameWrapper>
  );
};

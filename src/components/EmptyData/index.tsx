import * as S from './style';
import sad from 'assets/images/sad.png';

export const EmptyData = ({ message }: { message: string }) => {
  return (
    <S.EmptyDataWrapper>
      <img src={sad} width="100px" height="100px" />
      <S.Message>{message}</S.Message>
    </S.EmptyDataWrapper>
  );
};

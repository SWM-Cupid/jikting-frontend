import * as S from './style';
import sad from 'assets/images/sad.png';

export const EmptyData = ({ children }: { children: React.ReactNode }) => {
  return (
    <S.EmptyDataWrapper>
      <img src={sad} width="100px" height="100px" />
      <S.Message>{children}</S.Message>
    </S.EmptyDataWrapper>
  );
};

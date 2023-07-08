import { ImageButton } from 'components/Button';
import Leftarrow from 'assets/images/leftarrow.svg';
import * as S from './style';

interface Props {
  previous?: boolean;
  children?: React.ReactNode;
  title?: string;
}

export const Header = ({ previous, children, title = '' }: Props) => {
  const handlePreviousClick = () => {
    // 뒤로 가기 기능
  };

  return (
    <S.Header>
      {previous ? (
        <ImageButton onClick={handlePreviousClick}>
          <Leftarrow></Leftarrow>
        </ImageButton>
      ) : (
        <div></div>
      )}
      <S.Title>{title}</S.Title>
      {children ? children : <div></div>}
    </S.Header>
  );
};

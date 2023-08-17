import { ImageButton } from 'components/Button';
import Leftarrow from 'assets/images/leftarrow.svg';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

interface Props {
  previous?: boolean;
  previousFunction?(): void;
  children?: React.ReactNode;
  title?: string;
}

export const Header = ({ previous, previousFunction, children, title = '' }: Props) => {
  const navigate = useNavigate();

  const handlePreviousClick = () => {
    previousFunction ? previousFunction() : navigate(-1);
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

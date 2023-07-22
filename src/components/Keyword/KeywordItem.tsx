import * as S from './style';
import DeleteCircle from 'assets/images/deletecircle.svg';

interface Props {
  itemName: string;
  handleDeleteClick(): void;
}

export const KeywordItem = ({ itemName, handleDeleteClick }: Props) => {
  return (
    <S.ItemWrapper>
      <S.ItemName>{itemName}</S.ItemName>
      <S.DeleteCircleWrapper onClick={handleDeleteClick}>
        <DeleteCircle />
      </S.DeleteCircleWrapper>
    </S.ItemWrapper>
  );
};

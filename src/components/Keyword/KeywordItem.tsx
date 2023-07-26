import * as S from './style';
interface Props {
  itemName: string;
  selected?: boolean;
  handleKeywordItemClick?(): void;
  children?: React.ReactNode;
}

export const KeywordItem = ({ itemName, selected, handleKeywordItemClick, children }: Props) => {
  return (
    <S.ItemWrapper selected={selected} onClick={handleKeywordItemClick}>
      {children}
      <S.ItemName selected={selected}>{itemName}</S.ItemName>
    </S.ItemWrapper>
  );
};

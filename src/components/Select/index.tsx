import { FlexWrapper, StyledSelect } from './style';

interface Props {
  optionList: string[];
  title?: string;
  defaultValue?: string;
  onChange(e: React.FormEvent<HTMLSelectElement>): void;
}

export const Select = ({
  optionList,
  title,
  defaultValue,
  onChange,
}: Props) => {
  return (
    <FlexWrapper>
      <span>{title}</span>
      <StyledSelect onChange={onChange} defaultValue={defaultValue}>
        {optionList.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </StyledSelect>
    </FlexWrapper>
  );
};

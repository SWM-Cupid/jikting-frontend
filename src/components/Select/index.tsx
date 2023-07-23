import { ComponentProps } from 'react';
import { FlexWrapper, StyledSelect } from './style';

interface SelectProps extends ComponentProps<'select'> {
  optionList: string[];
}

export const Select = ({ optionList, title, defaultValue, onChange }: SelectProps) => {
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

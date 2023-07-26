import { ComponentProps, forwardRef } from 'react';
import { FlexWrapper, StyledSelect } from './style';

interface SelectProps extends ComponentProps<'select'> {
  optionList: string[];
}

export const Select = forwardRef(
  ({ optionList, title, defaultValue, onChange }: SelectProps, ref: React.Ref<HTMLSelectElement> | null) => {
    return (
      <FlexWrapper>
        <span>{title}</span>
        <StyledSelect onChange={onChange} defaultValue={defaultValue} ref={ref}>
          {optionList.map((item) => {
            return <option key={item}>{item}</option>;
          })}
        </StyledSelect>
      </FlexWrapper>
    );
  },
);
Select.displayName = 'Select';

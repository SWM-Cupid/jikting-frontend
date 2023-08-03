import { ComponentProps, forwardRef } from 'react';
import { FlexWrapper, StyledSelect, Title } from './style';

interface SelectProps extends ComponentProps<'select'> {
  optionList: string[];
}

export const Select = forwardRef(
  ({ optionList, title, ...props }: SelectProps, ref: React.Ref<HTMLSelectElement> | null) => {
    return (
      <FlexWrapper>
        <Title>{title}</Title>
        <StyledSelect {...props} ref={ref}>
          {optionList.map((item) => {
            return <option key={item}>{item}</option>;
          })}
        </StyledSelect>
      </FlexWrapper>
    );
  },
);
Select.displayName = 'Select';

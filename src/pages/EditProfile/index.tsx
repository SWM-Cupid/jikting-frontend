import { Header } from 'components/Header';
import * as S from './style';
import { UploadImage } from 'components/UploadImage';
import { Input } from 'components/Input';
import { Select } from 'components/Select';
import { Keyword } from 'components/Keyword';
import { TextArea } from 'components/TextArea';
import { Button } from 'components/Button';
import { theme } from 'styles/theme';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const MBTI_LIST = [
  'INTJ',
  'INTP',
  'INFJ',
  'INFP',
  'ISTJ',
  'ISFJ',
  'ISTP',
  'ISFP',
  'ENTJ',
  'ENTP',
  'ENFJ',
  'ENFP',
  'ESTJ',
  'ESFJ',
  'ESTP',
  'ESFP',
];
const IS_DRINKING_LIST = ['마시면 꽐라', '적당히 마심', '조금 마심', '금주'];
const IS_SMOCKING_LIST = ['흡연', '비흡연'];

export const EditProfile = () => {
  const { register, handleSubmit } = useForm<IForm>();
  const { setValue } = useForm();
  const [personalities, setPersonalities] = useState<string[]>([]);
  const [hobbies, setHobbies] = useState<string[]>([]);

  interface IForm {
    age: number;
    height: number;
    mbti: string;
    address: string;
    gender: string;
    college: string;
    drinkStatus: string;
    description: string;
    personalities: string[];
    hobbies: string[];
    images: { url: string; sequence: string }[];
    smoke: boolean;
  }

  const onSubmit = (data: IForm) => {
    data.age = Number(data.age);
    data.height = Number(data.height);
    data['hobbies'] = hobbies;
    data['personalities'] = personalities;
  };

  const getPersonalities = (selectedKeywords: string[]) => {
    setPersonalities(selectedKeywords);
  };

  const getHobbies = (selectedKeywords: string[]) => {
    setHobbies(selectedKeywords);
  };

  return (
    <S.EditProfileForm onSubmit={handleSubmit(onSubmit)}>
      <Header previous title="프로필 수정" />
      <S.UploadImageWrapper>
        <UploadImage size="medium" />
      </S.UploadImageWrapper>
      <Input title="나이" {...register('age')} />
      <Input title="키" {...register('height')} />
      <Input title="거주지" {...register('address')} />
      <Select title="MBTI" optionList={MBTI_LIST} {...register('mbti')} />
      <Select title="음주여부" optionList={IS_DRINKING_LIST} {...register('drinkStatus')} />
      <Select
        title="흡연여부"
        optionList={IS_SMOCKING_LIST}
        {...register('smoke')}
        onChange={() => {
          setValue('흡연', true), setValue('비흡연', false);
        }}
      />
      <Input title="출신대학교(선택)" {...register('college')} />
      <Keyword
        title="성격"
        defaultKeywordList={personalities}
        keywordList={['가나', '다라마', '바사아', '자차카']}
        getKeywordList={getPersonalities}
      />
      <Keyword
        title="취미"
        defaultKeywordList={hobbies}
        keywordList={['운동', '헬스', '등산', '개발']}
        getKeywordList={getHobbies}
      />
      <TextArea title="한줄 소개(선택)" {...register('description')} />
      <Button title="수정 완료" type="submit" size="large" background={theme.colors.mainPink} color="white" />
    </S.EditProfileForm>
  );
};

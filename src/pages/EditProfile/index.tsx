import { Header } from 'components/Header';
import * as S from './style';
import { UploadImage } from 'components/UploadImage';
import { Select } from 'components/Select';
import { Keyword } from 'components/Keyword';
import { TextArea } from 'components/TextArea';
import { Button } from 'components/Button';
import { theme } from 'styles/theme';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { validBirthCheck } from 'validation';
import { Input } from 'components/Input';

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
const DRINKING_OPTION_List = ['자주 마심', '적당히 마심', '조금 마심', '금주'];
const SMOCKING_OPTION_LIST = ['흡연', '비흡연'];
const PERSONALITY_LIST = ['다정한', '활발한', '유머러스한', '내성적인', '외향적인'];
const HOBBY_LIST = ['등산', '클라이밍', '게임', '러닝', '영화감상', '음악감상', '여행'];

export const EditProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();
  const [personalities, setPersonalities] = useState<string[]>([]);
  const [hobbies, setHobbies] = useState<string[]>([]);

  interface IForm {
    birth: string;
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
    smoke: string;
  }

  const onSubmit: SubmitHandler<IForm> = (data: IForm) => {
    const age = data.birth;
    data.birth = `${age.slice(0, 4)}.${age.slice(4, 6)}.${age.slice(6)}`;
    data.height = Number(data.height);
    data['hobbies'] = hobbies;
    data['personalities'] = personalities;
    console.log(data);
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
      <Input
        title="생년월일"
        error={errors.birth}
        placeholder="ex> 19990130"
        {...register('birth', {
          required: '생년월일 입력은 필수 입니다.',
          validate: {
            validBirthCheck,
          },
        })}
      />
      <Input title="키(cm)" error={errors.height} {...register('height', { required: '키 입력은 필수 입니다.' })} />
      <Input
        title="거주지"
        error={errors.address}
        placeholder="ex> 서울시 광진구"
        {...register('address', { required: '거주지 입력은 필수 입니다.' })}
      />
      <Select title="MBTI" optionList={MBTI_LIST} {...register('mbti', { required: true })} />
      <Select title="음주여부" optionList={DRINKING_OPTION_List} {...register('drinkStatus', { required: true })} />
      <Select title="흡연여부" optionList={SMOCKING_OPTION_LIST} {...register('smoke', { required: true })} />
      <Input title="출신대학교(선택)" {...register('college')} />
      <Keyword
        title="성격"
        defaultKeywordList={personalities}
        keywordList={PERSONALITY_LIST}
        getKeywordList={getPersonalities}
      />
      <Keyword title="취미" defaultKeywordList={hobbies} keywordList={HOBBY_LIST} getKeywordList={getHobbies} />
      <TextArea title="한줄 소개(선택)" {...register('description')} />
      <Button title="수정 완료" type="submit" size="large" background={theme.colors.mainPink} color="white" />
    </S.EditProfileForm>
  );
};

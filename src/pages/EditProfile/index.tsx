import { Header } from 'components/Header';
import * as S from './style';
import { UploadImage } from 'components/UploadImage';
import { Input } from 'components/Input';
import { Select } from 'components/Select';
import { Keyword } from 'components/Keyword';
import { TextArea } from 'components/TextArea';
import { Button } from 'components/Button';

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
  return (
    <S.EditProfileWrapper>
      <Header previous title="프로필 수정" />
      <S.UploadImageWrapper>
        <UploadImage size="medium" />
        <S.UploadImageSmallWrapper>
          <UploadImage size="small" />
          <UploadImage size="small" />
        </S.UploadImageSmallWrapper>
      </S.UploadImageWrapper>
      <Input title="나이" />
      <Input title="키" />
      <Input title="거주지" />
      <Select title="MBTI" optionList={MBTI_LIST} />
      <Select title="음주여부" optionList={IS_DRINKING_LIST} />
      <Select title="음주여부" optionList={IS_SMOCKING_LIST} />
      <Input title="출신대학교(선택)" />
      <Keyword title="성격" keywordList={['안녕', '하세', '요우!', '하우']} />
      <Keyword title="취미" keywordList={['등산', '헬스', '영화감상']} />
      <TextArea title="한줄 소개(선택)" />
      <Button title="수정 완료" size="large" background="#FF5680" color="white" />
    </S.EditProfileWrapper>
  );
};

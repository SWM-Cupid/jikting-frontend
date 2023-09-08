import { Header } from 'components/Header';
import * as S from './style';
import { UploadImage } from 'components/UploadImage';
import { Select } from 'components/Select';
import { Keyword } from 'components/Keyword';
import { TextArea } from 'components/TextArea';
import { Button } from 'components/Button';
import { theme } from 'styles/theme';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { validBirthCheck } from 'validation';
import { Input } from 'components/Input';
import { fetchEditProfile } from 'api/mypage';
import { useQueryMyProfileInfo } from 'hooks/useMypageQuery';

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
const DRINKING_OPTION_LIST = ['자주 마심', '가끔 마심', '거의 마시지 않음', '전혀 마시지 않음'];
const SMOCKING_OPTION_LIST = ['흡연', '비흡연'];
const PERSONALITY_LIST = [
  '열정적인',
  '상냥한',
  '감성적인',
  '애교많은',
  '긍정적인',
  '차분한',
  '듬직한',
  '4차원적인',
  '털털한',
  '활발한',
  '웃음많은',
  '솔직한',
  '자상한',
  '화끈한',
  '섬세한',
  '사교적인',
  '센스있는',
  '깔끔한',
  '부지런한',
  '재미있는',
];
const HOBBY_LIST = [
  '독서',
  '와인',
  '음악감상',
  '골프',
  '공연/전시',
  '영화',
  '여행',
  '자기계발',
  '드라이브',
  '헬스',
  '사진 찍기',
  '악기 연주',
  '카공',
  '맛집 탐방',
  '등산',
  '클라이밍',
  '게임',
  '러닝',
];

interface EditProfileInfo {
  image: File;
  birth: string;
  height: number;
  mbti: string;
  address: string;
  gender: string;
  college: string;
  drinkStatus: string;
  smokeStatus: string;
  description: string;
  personalities: string[];
  hobbies: string[];
}

export const EditProfile = () => {
  const myProfileInfo = useQueryMyProfileInfo();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditProfileInfo>();

  const [personalities, setPersonalities] = useState<string[]>([]);
  const [hobbies, setHobbies] = useState<string[]>([]);
  const [uploadedIamge, setUploadedImage] = useState<File | null>();

  useEffect(() => {
    if (myProfileInfo) {
      setPersonalities(myProfileInfo.personalities);
      setHobbies(myProfileInfo.hobbies);
    }
  }, [myProfileInfo]);

  const onSubmit: SubmitHandler<EditProfileInfo> = (data: EditProfileInfo) => {
    const age = data.birth;
    data.birth = `${age.slice(0, 4)}-${age.slice(4, 6)}-${age.slice(6)}`;
    data.height = Number(data.height);
    data['hobbies'] = hobbies;
    data['personalities'] = personalities;

    const formData = new FormData();
    if (uploadedIamge) {
      formData.append('file', uploadedIamge);
      formData.append('memberProfileUpdateRequest', new Blob([JSON.stringify(data)], { type: 'application/json' }));

      fetchEditProfile(formData);
    }
  };

  const getPersonalities = (selectedKeywords: string[]) => {
    setPersonalities(selectedKeywords);
  };

  const getHobbies = (selectedKeywords: string[]) => {
    setHobbies(selectedKeywords);
  };

  const getUploadedImage = (inputUploadedImage: File) => {
    setUploadedImage(inputUploadedImage);
  };

  if (myProfileInfo) {
    const { birth, height, address, mbti, smokeStatus, drinkStatus, college, description, images } = myProfileInfo;

    return (
      <S.EditProfileForm onSubmit={handleSubmit(onSubmit)}>
        <Header previous title="프로필 수정" />
        <S.UploadImageWrapper>
          <UploadImage size="medium" previewImage={images[0].url} getUploadedImage={getUploadedImage} />
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
            value: birth,
          })}
        />
        <Input
          title="키(cm)"
          error={errors.height}
          {...register('height', { required: '키 입력은 필수 입니다.', value: height })}
        />
        <Input
          title="거주지"
          error={errors.address}
          placeholder="ex> 서울시 광진구"
          {...register('address', { required: '거주지 입력은 필수 입니다.', value: address })}
        />
        <Select title="MBTI" optionList={MBTI_LIST} {...register('mbti', { required: true, value: mbti })} />
        <Select
          title="음주여부"
          optionList={DRINKING_OPTION_LIST}
          {...register('drinkStatus', { required: true, value: drinkStatus })}
        />
        <Select
          title="흡연여부"
          optionList={SMOCKING_OPTION_LIST}
          {...register('smokeStatus', { required: true, value: smokeStatus })}
        />
        <Input title="출신대학교(선택)" {...register('college', { value: college })} />
        <Keyword
          title="성격"
          defaultKeywordList={personalities}
          keywordList={PERSONALITY_LIST}
          getKeywordList={getPersonalities}
        />
        <Keyword title="취미" defaultKeywordList={hobbies} keywordList={HOBBY_LIST} getKeywordList={getHobbies} />
        <TextArea title="한줄 소개(선택)" {...register('description', { maxLength: 100, value: description })} />
        <Button title="수정 완료" type="submit" size="large" background={theme.colors.mainPink} color="white" />
      </S.EditProfileForm>
    );
  }
};

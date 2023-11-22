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
import ModalPortal from 'components/Modal/ModalPortal';
import { Modal } from 'components/Modal';
import { useNavigate } from 'react-router-dom';

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
  '취미 없음',
  '골프',
  '낚시',
  '등산',
  '클라이밍',
  '테니스',
  '배드민턴',
  '승마',
  '수영',
  '자전거',
  '러닝',
  '헬스',
  '맛집탐방',
  '카페투어',
  '독서',
  '애니',
  '작문/시쓰기',
  '캘리그라피',
  '뜨개질',
  '게임',
  '체스',
  '바둑',
  '장기',
  '뮤지컬 관람',
  '클래식',
  '연주회 관람',
  '공연 관람',
  '아이돌 덕질',
  '원예',
  '악기',
  '댄스',
  '보컬',
  '여행',
];

interface EditProfileInfo {
  image: File;
  birth: string;
  height: number | string;
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
    setValue,
    reset,
    formState: { errors, isDirty },
  } = useForm<EditProfileInfo>();

  const [personalities, setPersonalities] = useState<string[]>([]);
  const [hobbies, setHobbies] = useState<string[]>([]);
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (myProfileInfo) {
      setPersonalities(myProfileInfo.personalities);
      setHobbies(myProfileInfo.hobbies);
      reset({
        ...myProfileInfo,
        height: myProfileInfo.height ? myProfileInfo.height : '',
      });
    }
  }, [myProfileInfo, reset]);

  const onSubmit: SubmitHandler<EditProfileInfo> = async (data: EditProfileInfo) => {
    if (!isDirty && myProfileInfo?.personalities === personalities && myProfileInfo?.hobbies === hobbies) return;

    if (personalities.length !== 3) {
      setModalMessage('성격을 3개 추가해주세요.');
      setModalOpen(true);
      return;
    }

    data.height = Number(data.height);
    data['hobbies'] = hobbies;
    data['personalities'] = personalities;

    const formData = new FormData();
    if (uploadedImage) {
      formData.append('file', uploadedImage);
    }
    formData.append('memberProfileUpdateRequest', new Blob([JSON.stringify(data)], { type: 'application/json' }));

    await fetchEditProfile(formData);
    setModalMessage('회원정보 변경이 완료되었습니다.');
    setModalOpen(true);
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

  const handleCloseModalClick = () => {
    setModalOpen(false);

    if (modalMessage === '회원정보 등록이 완료되었습니다.') navigate('/mypage');
  };

  const parsingBirthWithHyphen = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;

    if (v.length === 8 && v[4] !== '-') {
      setValue('birth', `${v.slice(0, 4)}-${v.slice(4, 6)}-${v.slice(6)}`);
      return;
    }

    if (v.length === 8 && v[7] !== '-') {
      setValue('birth', `${v.slice(0, 7)}-${v.slice(7)}`);
      return;
    }

    if (v.length === 5 && v[4] !== '-') {
      setValue('birth', `${v.slice(0, 4)}-${v.slice(4)}`);
    }
  };

  if (myProfileInfo) {
    return (
      <S.EditProfileForm onSubmit={handleSubmit(onSubmit)}>
        <Header previous title="프로필" />
        <S.UploadImageWrapper>
          <UploadImage size="medium" previewImage={myProfileInfo.images[0].url} getUploadedImage={getUploadedImage} />
        </S.UploadImageWrapper>
        <Input
          title="생년월일"
          error={errors.birth}
          placeholder="생년월일 8자리를 입력해주세요."
          {...register('birth', {
            required: '생년월일 입력은 필수 입니다.',
            validate: {
              validBirthCheck,
            },
            maxLength: 10,
          })}
          onChange={parsingBirthWithHyphen}
        />
        <Input
          title="키(cm)"
          placeholder="키를 입력해주세요"
          error={errors.height}
          {...register('height', { required: '키 입력은 필수 입니다.' })}
        />
        <Input
          title="거주지"
          error={errors.address}
          placeholder="ex> 서울시 광진구"
          {...register('address', { required: '거주지 입력은 필수 입니다.' })}
        />
        <Select title="MBTI" optionList={MBTI_LIST} {...register('mbti', { required: true })} />
        <Select title="음주여부" optionList={DRINKING_OPTION_LIST} {...register('drinkStatus', { required: true })} />
        <Select title="흡연여부" optionList={SMOCKING_OPTION_LIST} {...register('smokeStatus', { required: true })} />
        <Input title="출신대학교(선택)" {...register('college')} />
        <Keyword
          title="성격"
          defaultKeywordList={personalities}
          keywordList={PERSONALITY_LIST}
          getKeywordList={getPersonalities}
        />
        <Keyword title="취미" defaultKeywordList={hobbies} keywordList={HOBBY_LIST} getKeywordList={getHobbies} />
        <TextArea title="한줄 소개(선택)" {...register('description', { maxLength: 100 })} />
        <Button title="수정 완료" type="submit" size="large" background={theme.colors.mainPink} color="white" />
        {modalOpen ? (
          <ModalPortal>
            <Modal title={modalMessage} handleButtonClick={handleCloseModalClick} />
          </ModalPortal>
        ) : null}
      </S.EditProfileForm>
    );
  }
};

import { Header } from 'components/Header';
import * as S from './style';
import { Select } from 'components/Select';
import { Keyword } from 'components/Keyword';
import { TextArea } from 'components/TextArea';
import { useState } from 'react';
import { Button } from 'components/Button';
import { theme } from 'styles/theme';
import { useForm } from 'react-hook-form';
import { useMutateCreateTeam } from 'hooks/useTeamInfoQurey';

const MEMBERS_NUMBER = ['2', '3', '4'];

export interface ICreateTeam {
  memberCount: number;
  description: string;
  keywords: string[];
}

export const CreateTeam = ({ handleRegisterTeamCompleteClick }: { handleRegisterTeamCompleteClick(): void }) => {
  const [teamPersonalities, setTeamPersonalities] = useState<string[]>([]);
  const { register, handleSubmit } = useForm<ICreateTeam>();
  const { mutateAsync } = useMutateCreateTeam();
  const getPersonalities = (selectedKeywords: string[]) => {
    setTeamPersonalities(selectedKeywords);
  };

  const onSubmit = async (data: ICreateTeam) => {
    data['keywords'] = teamPersonalities;

    try {
      await mutateAsync(data);
    } catch {
      alert('이미 팀에 가입되어있습니다.');
    }

    handleRegisterTeamCompleteClick();
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <Header title="팀 등록하기" previous />
      <Select
        title="팀 인원"
        optionList={MEMBERS_NUMBER}
        {...register('memberCount', { required: true, valueAsNumber: true })}
      />
      <Keyword
        title="성격"
        keywordList={['키워드', '리스트']}
        getKeywordList={getPersonalities}
        defaultKeywordList={teamPersonalities}
      />
      <TextArea title="팀 한줄 소개" {...register('description', { required: true, maxLength: 100 })} />
      <S.ButtonWrapper>
        <Button type="submit" title="등록하기" background={theme.colors.mainPink}></Button>
      </S.ButtonWrapper>
    </S.Form>
  );
};

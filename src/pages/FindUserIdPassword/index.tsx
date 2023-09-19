import { useState } from 'react';
import { AuthUser } from './AuthUser';
import { useLocation } from 'react-router-dom';
import { FindIdResult } from './FindIdResult';

export const FindUserIdPassword = () => {
  const [step, setStep] = useState<string>('AuthUser');
  const [findIdResult, setFindIdResult] = useState('');
  const findType = useLocation().state.findType;

  const moveNextStep = (nextStep: string, result?: string) => {
    if (result) {
      setFindIdResult(result);
    }
    setStep(nextStep);
  };

  return (
    <>
      {step === 'AuthUser' && <AuthUser findType={findType} moveNextStep={moveNextStep} />}
      {step === 'FindIdResult' && <FindIdResult findIdResult={findIdResult} />}
      {step === 'FindPasswordResult'}
    </>
  );
};

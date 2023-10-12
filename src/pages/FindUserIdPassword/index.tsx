import { useState } from 'react';
import { AuthUser } from './AuthUser';
import { useLocation } from 'react-router-dom';
import { FindIdResult } from './FindIdResult';
import { FindPasswordResult } from './FindPasswordResult';

export const FindUserIdPassword = () => {
  const [step, setStep] = useState<string>('AuthUser');
  const [findIdResult, setFindIdResult] = useState('');
  const [username, setUsername] = useState('');
  const findType = useLocation().state.findType;

  const setUserName = (username: string) => {
    setUsername(username);
  };

  const moveNextStep = (nextStep: string, result?: string) => {
    if (result) {
      setFindIdResult(result);
    }
    setStep(nextStep);
  };

  return (
    <>
      {step === 'AuthUser' && <AuthUser findType={findType} moveNextStep={moveNextStep} setUsername={setUserName} />}
      {step === 'FindIdResult' && <FindIdResult findIdResult={findIdResult} />}
      {step === 'FindPasswordResult' && <FindPasswordResult username={username} />}
    </>
  );
};

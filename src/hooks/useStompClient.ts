import { Client, Message } from '@stomp/stompjs';
import { useCallback, useEffect, useState } from 'react';

interface ChatBody {
  senderId: number;
  content: string;
}

export const useStompClient = (chattingRoomId: number) => {
  const [client, setClient] = useState<Client | null>(null);

  useEffect(() => {
    const client = new Client({
      brokerURL: import.meta.env.VITE_BROKER_URL,
      onConnect: () => {
        setClient(client);
        console.log('연결 성공');
      },
      onDisconnect: () => {
        console.log('연결 해제');
      },
    });
    client.activate();
    return () => {
      client?.deactivate();
    };
  }, []);

  const subscribe = useCallback(
    (callback: (messageBody: Message) => void) => {
      client?.subscribe(`/subscription/chattings/rooms/${chattingRoomId}`, callback);
    },
    [chattingRoomId, client],
  );

  const publish = (senderId: number, content: string) => {
    const sendMessageBody: ChatBody = {
      content,
      senderId,
    };

    client?.publish({
      destination: `/publication/chattings/rooms/${chattingRoomId}`,
      body: JSON.stringify({ chattingRoomId, ...sendMessageBody }),
      skipContentLengthHeader: true,
    });
  };

  return { subscribe, publish };
};

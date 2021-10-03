import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import NewRoomForm from '../../components/rooms/NewRoomForm';

const useAddRoom = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const sendRequest = async (enteredRoomData) => {
    try {
      const response = await fetch('/api/new-room', {
        method: 'POST',
        body: JSON.stringify(enteredRoomData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Something went wrong');
      setData(data);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };
  return [sendRequest];
};

const NewRoomPage = () => {
  const [sendRequest] = useAddRoom();

  const router = useRouter();

  const addRoomHandler = async (enteredRoomData) => {
    await sendRequest(enteredRoomData);
    router.push('/');
  };

  return (
    <>
      <Head>
        <title>Majestic Hotels</title>
        <meta
          name="description"
          content="Browse through the best hotel rooms the world has to offer."></meta>
      </Head>
      <NewRoomForm onAddRoom={addRoomHandler} />
    </>
  );
};

export default NewRoomPage;

import { Box, Grid, Paper } from '@material-ui/core';
import { useCallback, useEffect, useState } from 'react';
import Header from './components/Header';
import Diary from './components/Diary';
import 'normalize.css';

const sampleData = [
  {
    key: 0,
    name: 'diary 0',
  },
  {
    key: 1,
    name: 'diary 1',
  },
  {
    key: 2,
    name: 'diary 2',
  },
  {
    key: 3,
    name: 'diary 3',
  },
];

function App() {
  const [diaries, setDiaries]: any[] = useState([]);
  const [userInput, setUserInput]: any[] = useState({
    username: '',
    password: '',
  });

  const handleChange = useCallback(
    (e: any) => {
      const { name, value } = e.target;
      setUserInput({
        ...userInput,
        [name]: value,
      });
    },
    [userInput],
  );

  useEffect(() => {
    setDiaries(sampleData);
  }, []);

  // const handleSubmit = () => {
  //   axios?.post('/api/user', userInput).then().catch();
  // };

  return (
    <>
      <Header></Header>
      {/* <form noValidate onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="your name!"
          value={userInput.userName}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="your password!"
          value={userInput.password}
          onChange={handleChange}
        />
      </form> */}
      <Diary diary={diaries}></Diary>
    </>
  );
}

export default App;

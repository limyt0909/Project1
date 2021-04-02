import React, { useState } from 'react';
import axios from 'axios';

const Filepost = () => {
  const [content, setContent] = useState(''); //백엔드로 보낼 state

  const OnChange = (e) => {
    setContent(e.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', content);
    axios
      .post('/upload', formData)
      .then((res) => {
        const { fileName } = res.data;
        console.log(fileName);

        alert('파일 업로드에 성공했습니다.');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={OnChange} />
        <button type="submit">Upload</button>
      </form>
    </>
  );
};
export default Filepost;

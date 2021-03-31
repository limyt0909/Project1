import React, { useState } from 'react';
import axios from 'axios';

const Filepost = () => {
  const BASE_URL = 'http://localhost:80';

  const [content, setContent] = useState(''); //백엔드로 보낼 state
  const [uploadedImg, setUploadedImg] = useState({
    //uploadedImg State는 백엔드에서 받은 Response를 저장할 State

    fileName: '',
    fillPath: '',
  });

  const onChange = (e) => {
    setContent(e.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('img', content);

    axios
      .post('/upload', formData)
      .then((res) => {
        const { fileName } = res.data;
        console.log(fileName);

        setUploadedImg({ fileName, filePath: `${BASE_URL}/img/${fileName}` });
        alert('파일 업로드에 성공했습니다.');
      })

      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        {uploadedImg ? (
          <>
            <img src={uploadedImg.filePath} alt="" />
            <h3>{uploadedImg.fileName}</h3>
          </>
        ) : (
          ''
        )}
        <input type="file" onChange={onChange} />
        <button type="submit">Upload</button>
      </form>
    </>
  );
};
export default Filepost;

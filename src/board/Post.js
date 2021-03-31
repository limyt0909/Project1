import React, { useState } from 'react';
import axios from 'axios';

const Post = () => {

    const [file,setfile] = useState();

    //classname에 있는 내용을 value에 저장
  const handleOnChange = (event) => {
    const { className, value } = event.target;
    if (className === 'file') {
      setfile(value);
    }

    }
  };

  const handleCreate = () => {
    const updateData = {
      Title: title,
      Author: author,
      Comments: comments,
    };
    //server.js 에있는 app.post Create에 데이터 전달
    axios.post(`/create`, updateData).then((res) => {
      history.push('/board');
    });
  };

  console.log(handleOnChange);

  return (
    <>

      <form
        action="/uploadFilesWithOriginalFilename"
        enctype="multipart/form-data"
        method="post"
      >
        <input type="file" classname="file"
        onchange ={handleOnChange}
        
        />
        <button type="submit" class="btn btn-primary">
          Upload
        </button>
      </form>
    </>
  );
};

export default Post;

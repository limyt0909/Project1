import React, { useState } from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import styles from '../pages/Aboutaone.module.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
  integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
  crossorigin="anonymous"
/>;
<meta
  name="viewport"
  content="width=device-width, initial-scale=1, shrink-to-fit=no"
/>;

const Create = () => {
  //useState 선언 -> handleonChange에서 사용

  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [comments, setComments] = useState();
  const [file, setFile] = useState();

  const [content, setContent] = useState(''); //백엔드로 보낼 state
  const history = useHistory();

  //classname에 있는 내용을 value에 저장
  const handleOnChange = (event) => {
    const { className, value } = event.target;
    if (className === 'Title') {
      setTitle(value);
    }
    if (className === 'Author') {
      setAuthor(value);
    }
    if (className === 'Comments') {
      setComments(value);
    }
    if (className === 'File') {
      setContent(event.target.files[0]);
      setFile(event.target.files[0].name);
    }
  };

  console.log(handleOnChange);

  const handleCreate = () => {
    const updateData = {
      Title: title,
      Author: author,
      Comments: comments,
      File: file,
    };
    //server.js 에있는 app.post Create에 데이터 전달
    axios.post(`/create`, updateData).then((res) => {
      history.push('/board');
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('files', content);
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
      <Top />
      <div className={styles.title}> 관세무역 자료실 글쓰기 </div>
      <div class="container">
        <h1>Create</h1>

        <form>
          <div class="form-horizontal">
            <div class="form-group row">
              <label class="col-form-label col-sm-2" for="Title">
                Title
              </label>
              <div class="col-sm-8">
                <input className="Title" onChange={handleOnChange} />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-form-label col-sm-2" for="Author">
                Author
              </label>
              <div class="col-sm-7">
                <input className="Author" onChange={handleOnChange} />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-form-label col-sm-2" for="Comments">
                Comments
              </label>
              <div class="col-sm-10">
                <textarea
                  class="form-control-plaintext Comments"
                  cols="80"
                  className="Comments"
                  maxlength="32000"
                  rows="10"
                  onChange={handleOnChange}
                ></textarea>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-form-label col-sm-2"></label>
              <div class="col-sm-10">
                <input
                  type="button"
                  value="Create"
                  class="btn btn-default btn-warning"
                  onClick={handleCreate}
                />

                <a class="btn btn-outline-dark cancel" href="/board">
                  Cancel
                </a>
              </div>
            </div>
          </div>
        </form>

        <form enctype="multipart/form-data" method="post" onSubmit={onSubmit}>
          <input
            type="file"
            className="File"
            multiple=""
            onChange={handleOnChange}
          />{' '}
          <button type="submit">Up</button>
        </form>
      </div>
      <Bottom />
    </>
  );
};

export default Create;

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

const Create2 = () => {
  //useState 선언 -> handleonChange에서 사용
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [comments, setComments] = useState();
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
  };

  console.log(handleOnChange);

  const handleCreate = () => {
    const updateData = {
      Title: title,
      Author: author,
      Comments: comments,
    };
    //server.js 에있는 app.post Create에 데이터 전달
    axios.post(`/create2`, updateData).then((res) => {
      history.push('/board2');
    });
  };

  return (
    <>
      <Top />
      <div className={styles.title}> 게시글 쓰기 </div>
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

                <a class="btn btn-outline-dark cancel" href="/board2">
                  Cancel
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Bottom />
    </>
  );
};

export default Create2;

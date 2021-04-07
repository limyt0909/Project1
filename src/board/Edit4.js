import React, { useState, useEffect } from 'react';
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

const Edit4 = () => {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [comments, setComments] = useState();
  const [file, setFile] = useState();
  const [booksNo, setBooksNo] = useState('');
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
    console.log(handleOnChange);
  };

  //form 첨부파일을 Uploads 폴더로 전송
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

  //저장된 데이터 가져와서 뿌리기
  const location = window.location.href.split('?');
  const displayBook = (book) => {
    if (book.length === 0) return;
    book.forEach((key, value) => {
      const Comments = document.getElementById('Comments');
      const Title = document.getElementById('Title');
      const Author = document.getElementById('Author');

      setTitle(key.Title);
      setAuthor(key.Author);
      setComments(key.Comments);

      Title.value = key.Title;
      Author.value = key.Author;
      Comments.value = key.Comments;
    });
  };

  useEffect(() => {
    if (location.length <= 1) return;
    const idx = location[1].split('=')[1];
    setBooksNo(idx);
    axios.get(`http://3.36.115.7/more4?idx=${idx}`).then((res) => {
      const books = res.data.books;
      displayBook(books);
    });
  }, []);

  const update = () => {
    const updateData = {
      idx: booksNo,
      Title: title,
      Author: author,
      Comments: comments,
      File: file,
    };
    axios.post('/edit4', updateData).then(history.push('/board4'));
  };

  //삭제하는 Axios
  const handleDelete = () => {
    console.log('Delete Function');
    const data = {
      idx: booksNo,
    };
    axios.post('/delete4', data).then((res) => {
      history.push('/board4');
    });
  };

  return (
    <>
      <Top />
      <div className={styles.title}> 게시글 수정 </div>
      <text />{' '}
      <div class="container">
        <h1>Edit</h1>

        <tagbox />
        <form>
          <div class="form-horizontal">
            <div class="form-group row">
              <label class="col-form-label col-sm-2" for="Title">
                Title
              </label>
              <div class="col-sm-8">
                <input
                  readonly
                  className="Title"
                  id="Title"
                  onChange={handleOnChange}
                />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-form-label col-sm-2" for="Author">
                Author
              </label>
              <div class="col-sm-7">
                <input
                  readonly
                  className="Author"
                  id="Author"
                  values="<titles></titles>"
                  onChange={handleOnChange}
                />
              </div>
            </div>

            <div class="form-group row">
              <label class="col-form-label col-sm-2" for="Comments">
                Comments
              </label>
              <div class="col-sm-10">
                <textarea
                  readonly
                  className="Comments"
                  cols="110"
                  id="Comments"
                  maxlength="32000"
                  rows="20"
                  onChange={handleOnChange}
                ></textarea>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-form-label col-sm-2"></label>
              <div class="col-sm-10"></div>
            </div>
          </div>
        </form>
        <br />
        <input
          type="submit"
          value="Update"
          className="btn btn-default btn-warning"
          onClick={update}
        />
        <a href="/board4" class="btn btn-outline-dark cancel">
          Back
        </a>
        <a href onClick={handleDelete} class="btn btn-danger cancel">
          Delete
        </a>

        <form enctype="multipart/form-data" method="post" onSubmit={onSubmit}>
          <input
            type="file"
            className="File"
            multiple=""
            id="File"
            onChange={handleOnChange}
          />{' '}
          <button type="submit">Upload</button>
        </form>
      </div>
      <br />
      <Bottom />
    </>
  );
};

export default Edit4;

import React, { useState, useEffect } from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import styles from '../pages/Aboutaone.module.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './Edit5.css';

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

const Edit5 = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [comments, setComments] = useState('');

  const [booksNo, setBooksNo] = useState('');
  const [content, setContent] = useState(''); //백엔드로 보낼 state

  const [hash, sethash] = useState('');
  const [file, setFile] = useState('');

  const [isUploaded, setIsUploaded] = useState(false);

  const history = useHistory();
  //classname에 있는 내용을 value에 저장
  const handleOnChange = (event) => {
    const { className, value } = event.target;
    if (className === 'Title') {
      setTitle(value);
    } else if (className === 'Author') {
      setAuthor(value);
    } else if (className === 'Comments') {
      setComments(value);
    } else if (className === 'File') {
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
      .post('/upload3', formData)
      .then((res) => {
        const { fileName } = res.data;
        sethash(fileName);
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
      const File = document.getElementById('File');

      setTitle(key.Title);
      setAuthor(key.Author);
      setComments(key.Comments);
      setFile(key.File);
      setIsUploaded(key.File === '' ? false : true);
      Title.value = key.Title;
      Author.value = key.Author;
      Comments.value = key.Comments;
      File.innerHTML = key.File;

      console.log(book);
    });
  };

  useEffect(() => {
    if (location.length <= 1) return;
    const idx = location[1].split('=')[1];
    setBooksNo(idx);
    axios.get(`http://localhost/more5?idx=${idx}`).then((res) => {
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
      Hash: hash,
    };
    axios.post('/edit5', updateData).then(history.push('/board5'));
  };

  //삭제하는 Axios
  const handleDelete = () => {
    console.log('Delete Function');
    const data = {
      idx: booksNo,
    };
    axios.post('/delete5', data).then((res) => {
      history.push('/board5');
    });
  };

  // 업로드된 파일 삭제하는 버튼 핸들러
  const handleFileDelete = () => {
    setIsUploaded(false);
  };

  return (
    <>
      <Top />
      <div className={styles.title}> 게시글 수정 </div>
      <text />{' '}
      <div class="container">
        <h1>Edit</h1>
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
                  cols="80"
                  id="Comments"
                  maxlength="32000"
                  rows="7"
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
        <a href="/board5" class="btn btn-outline-dark cancel">
          Back
        </a>
        <a href onClick={handleDelete} class="btn btn-danger cancel">
          Delete
        </a>
        <form
          class={isUploaded ? 'd-none' : ''}
          enctype="multipart/form-data"
          method="post"
          onSubmit={onSubmit}
        >
          <input
            type="file"
            className="File"
            multiple=""
            onChange={handleOnChange}
          />{' '}
          <button type="submit">Up load</button>
        </form>
        <div class={isUploaded ? '' : 'd-none'}>
          <p id="File"></p>
          <button onClick={handleFileDelete} type="submit">
            첨부파일 삭제
          </button>
        </div>
        <br /> <br /> <br />
      </div>
      <br />
      <Bottom />
    </>
  );
};

export default Edit5;

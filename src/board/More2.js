import React, { useState, useEffect } from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import styles from '../pages/Aboutaone.module.css';
import axios from 'axios';
import './More5.css';
import './comments.css';

const More2 = () => {
  const [booksNo, setBooksNo] = useState('');
  const [filename, setfilename] = useState('');

  const location = window.location.href.split('?');

  //ID값을 찾아서 데이터 뿌리기
  const displayBook = (book) => {
    if (book.length === 0) return;
    book.forEach((key, value, file) => {
      const Title = document.getElementById('Title');
      Title.value = key.Title;

      const Author = document.getElementById('Author');
      Author.value = key.Author;

      const Comments = document.getElementById('Comments');
      Comments.innerHTML = key.Comments;

      const File = document.getElementById('File');
      File.innerHTML = key.File;
      setfilename(key.File);
    });
  };

  //해당 IDX에 맞는 내용 불러오기
  useEffect(() => {
    if (location.length <= 1) return;
    const idx = location[1].split('=')[1];
    setBooksNo(idx);
    axios.get(`http://localhost/more2?idx=${idx}`).then((res) => {
      const books = res.data.books;
      displayBook(books);
    });
  }, []);

  const filedownload = () => {
    axios({
      url: `http://localhost/download?filename=${filename}`,
      method: 'GET',
      responseType: 'blob', // important
    }).then((res) => {
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
    });
  };

  return (
    <>
      <Top />
      <div className={styles.title}> 게시글 보기 </div>
      <text />{' '}
      <div class="container">
        <h1>Read</h1>
        <div class="form-group row">
          <label class="col-form-label col-sm-2" for="Title">
            Title
          </label>
          <div class="col-sm-8">
            <input
              readonly="readonly"
              className="Title"
              class="form-control-plaintext"
              id="Title"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-sm-2" for="Author">
            Author
          </label>
          <div class="col-sm-7">
            <input
              readonly="readonly"
              class="form-control-plaintext"
              id="Author"
              values="<titles></titles>"
            />
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-sm-2" for="Comments">
            Comments
          </label>
          <div class="col-sm-10">
            <p id="Comments"></p>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-form-label col-sm-2"></label>
          <div class="col-sm-10">
            <a href={`/edit2?idx=${booksNo}`} class="btn btn-warning cancel">
              Edit
            </a>
            <a href="/board2" class="btn btn-outline-dark cancel">
              Back
            </a>
          </div>{' '}
        </div>{' '}
        <div class="form-group row">
          <label class="col-form-label col-sm-2" for="File">
            첨부파일
          </label>
          <div class="col-sm-10">
            <p id="File" onClick={filedownload}></p>
          </div>
        </div>
      </div>
      <Bottom />
    </>
  );
};

export default More2;

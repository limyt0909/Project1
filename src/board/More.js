import React, { useState, useEffect } from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import styles from '../pages/Aboutaone.module.css';
import axios from 'axios';

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

const More = () => {
  const [booksNo, setBooksNo] = useState('');
  const location = window.location.href.split('?');

  //ID값을 찾아서 데이터 뿌리기
  const displayBook = (book) => {
    if (book.length === 0) return;
    book.forEach((key, value) => {
      const Comments = document.getElementById('Comments');
      const Title = document.getElementById('Title');
      const Author = document.getElementById('Author');
      Title.value = key.Title;
      Author.value = key.Author;
      Comments.value = key.Comments;
    });
  };

  //해당 IDX에 맞는 내용 불러오기
  useEffect(() => {
    if (location.length <= 1) return;
    const idx = location[1].split('=')[1];
    setBooksNo(idx);
    axios.get(`http://3.36.115.7/more?idx=${idx}`).then((res) => {
      const books = res.data.books;
      displayBook(books);
    });
  }, []);

  return (
    <>
      <Top />
      <div className={styles.title}> 게시글 보기 </div>
      <text />{' '}
      <div class="container">
        <h1>Read</h1>

        <tagbox />
        <form>
          <div class="form-horizontal">
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
                <textarea
                  readonly="readonly"
                  class="form-control-plaintext"
                  cols="20"
                  id="Comments"
                  maxlength="32000"
                  rows="7"
                ></textarea>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-form-label col-sm-2"></label>
              <div class="col-sm-10">
                <a
                  href={`/edit2?idx=${booksNo}`}
                  class="btn btn-warning cancel"
                >
                  Edit
                </a>
                <a href="/board2" class="btn btn-outline-dark cancel">
                  Back
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

export default More;

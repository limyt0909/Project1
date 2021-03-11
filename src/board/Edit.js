import React, { useEffect, useState } from 'react';
import Top from '../Top/Top';
import Bottom from '../Bottom/Bottom';
import styles from '../pages/Aboutaone.module.css';
import axios from 'axios';
import queryString from 'query-string';
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
const Edit = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [comments, setComments] = useState('');
  const currLocation = window.location.href.split('/');
  const slug = currLocation[currLocation.length - 1];
  const [idx, setidx] = useState('');
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

  const getBooks = () => {
    axios.get(`http://3.36.115.7/edit?idx=${slug}`).then((res) => {
      console.log(res.data);
    });
  };
  useEffect(() => {
    getBooks();
  }, []);
  const handleUpdate = () => {
    let index = window.location.href.split('=');
    if (index.length < 2) return;
    index = index[1];
    let updateData = {
      idx: index,
      Title: title,
      Author: author,
      Comments: comments,
    };
    axios.post(`http://3.36.115.7/edit`, updateData).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <>
      <Top />
      <div className={styles.title}> 게시글 쓰기 </div>

      <div class="container">
        <h1>Edit</h1>
        <form action={handleUpdate} method="post">
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
                  class="form-control"
                  cols="20"
                  name="Comments"
                  maxlength="32000"
                  rows="7"
                ></textarea>
              </div>
            </div>

            <div class="form-group row">
              <label class="col-form-label col-sm-2"></label>
              <div class="col-sm-10">
                <input
                  type="submit"
                  value="Update"
                  class="btn btn-default btn-warning"
                />
                <a class="btn btn-outline-dark cancel" href="/books">
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

export default Edit;

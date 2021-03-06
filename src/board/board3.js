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

const Board3 = () => {
  //DB를 불러오는 명령어
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/books3').then((res) => {
      const books = res.data.books;
      setData(books);
    });
  }, []);

  useEffect(() => {
    if (data.length === 0) return;
    const tbody = document.querySelector('tbody');
    data.forEach((key, value) => {
      const tr = document.createElement('tr');
      tr.addEventListener('click', () => {
        console.log(key.idx);
        window.location.href = `/more3?idx=${key.idx}`;
      });

      const idx = document.createElement('td');
      const DateTime = document.createElement('td');
      const Title = document.createElement('td');
      const Author = document.createElement('td');

      idx.innerHTML = key.idx;
      DateTime.innerHTML = key.DateTime;
      Title.innerHTML = key.Title;
      Author.innerHTML = key.Author;

      tr.appendChild(idx);
      tr.appendChild(Title);
      tr.appendChild(Author);
      tr.appendChild(DateTime);

      tbody.appendChild(tr);
    });
  }, [data]);

  return (
    <section>
      <Top />
      <div className={styles.title}>Web Zine </div>
      <div class="container">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />

        <div className="App">
          <ul>
            <div class="table-responsive-sm">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                    <th class="d-print-none">
                      <a class="btn btn-sm btn-success" href="/create3">
                        Create
                      </a>{' '}
                    </th>
                  </tr>
                </thead>
                <tbody />
              </table>
            </div>
          </ul>
        </div>
      </div>
      <Bottom />
    </section>
  );
};

export default Board3;

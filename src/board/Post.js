import React, { useState } from 'react';
import axios from 'axios';

const Post = () => {
  handleFormSubmit(e) {
    e.preventDefault()
     this.addCustomer()
    .then((response) => {
    console.log(response.data);
    
    })
        this.setState({
    file: null,
     userName: '',
        birthday: '',
        gender: '',
        job: '',
        fileName: ''
    })
        window.location.reload();
        }
    
      console.log(handleFormSubmit);

  return (
    <>

      <form
        action="/uploadFilesWithOriginalFilename"
        enctype="multipart/form-data"
        method="post"
        >
        <input type="file" classname="file"
        onchange ={handleFormSubmit}
        />
        <button type="submit" class="btn btn-primary">
          Upload
        </button>
      </form>
      
    </>
  );
};

export default Post;

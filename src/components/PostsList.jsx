import Post from './Post'
import NewPost from './NewPost';
import classes from './PostsList.module.css'
import { useState } from 'react';
import Modal from './Modal'


function PostsList(props) {
      const [isModalVisible, setIsModalVisible] = useState(true);
      const [enteredBody, setEnteredBody] = useState('');
      const [enteredAuthor, setEnteredAuthor] = useState('');

      function bodyChangeHandler(event) {
            setEnteredBody(event.target.value);
      }
      function authorChangeHandler(event) {
            setEnteredAuthor(event.target.value);
      }
      function closeModal(event){
            setIsModalVisible(false)
      }
      return (<>
      { isModalVisible && (<Modal onClose={closeModal}>
            <NewPost 
            onBodyChange={bodyChangeHandler} 
            onAuthorChange={authorChangeHandler} />
            </Modal>) }
            <ul className={classes.posts}>
                  <Post author={enteredAuthor} body={enteredBody} />
                  <Post author="Sheetal" body="Awesome Journey" />
                  <Post author="Sparsh" body="Lets Enjoy" />
            </ul></>);
}

export default PostsList;
import {useState} from 'react';
import classes from './NewPost.module.css';
import Modal from '../components/Modal';

function NewPost(props) {
  const [currentVal, stateUpdatefunction] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    stateUpdatefunction(event.target.value);
  }
  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault(); // we don't have server
    const postData = {
      body: currentVal,
      author : enteredAuthor
    };
    props.onAddPost(postData);
    props.onCancel();
  }
	// const [currentVal, stateUpdatefunction] = useState('');
	// // stateData[0] // current value
	// // stateData[1] // state updating function

	// // let enteredBody = '';
	// // document.querySelector('textarea').addEventListener('change', function() {})
	// function changeBodyHandler(event) {
	// 	// enteredBody = event.target.value;
	// 	stateUpdatefunction(event.target.value);
	// }
  return (
    <Modal>
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
      </p>
	  {/* <p>{currentVal}</p> */}
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler}/>
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
    </Modal>
  );
}

export default NewPost;
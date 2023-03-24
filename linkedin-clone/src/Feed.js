import firebase from "firebase/compat/app";
import React, {useState,useEffect} from 'react';
import "./Feed.css";
import CreateIcon from '@mui/icons-material/Create';
import InputOptions from './InputOptions';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db, auth } from './firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';
import FlipMove from "react-flip-move";

function Feed() {
    const user= useSelector(selectUser);



    const[input,setInput]=useState("");
    const[posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection("posts")
          .orderBy("timestamp", "desc")
          .onSnapshot((snapshot) =>
            setPosts(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
              }))
            )
          );
        setInput("");
      }, []);
      
      
   
    const sendPosts =e =>{
        e.preventDefault();
        
        db.collection("posts").add({
            name: user.displayName,
            description: user.email,
            message: input, // use the current value of input
            photourl:'',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
          })

          setInput("");
    }
  return (
    <div className='feed'>
      <div className='feed_inputContainer'>
        <div className='feed_input'>
            <CreateIcon />
            <form>
                <input value={input} onChange = {e=>setInput(e.target.value)} type='text' placeholder='Add a new post' />
                <button onClick={sendPosts}type="submit">Send</button>
            </form>
            </div>
            <div className='feed_inputOptions'>
            < InputOptions Icon={ImageIcon} title="Photo" color="#70B5F9" />
            < InputOptions Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
            < InputOptions Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
            < InputOptions Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E" />
            </div>
      </div>
      <FlipMove>

      {posts.map(({id, data: {name, description, message, photourl}}) => (
          <Post 
          key={id}
          name={name}
          description={description}
          messages={message}
          photourl={photourl}
          />
        ))}
        </FlipMove>
    </div>

  );
}

export default Feed;

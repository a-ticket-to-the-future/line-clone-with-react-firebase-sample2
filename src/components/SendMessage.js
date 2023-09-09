import React, { useState } from 'react'
import { db, auth } from '../firebase';
import firebase from 'firebase/compat/app';
import { Input } from '@mui/material';
import { Send } from '@mui/icons-material';


function SendMessage() {

  const [message , setMessages] = useState("");

  //↓↓↓ 関数なのでconst ではなくて functionだよ
  function sendMessage(e) {
    e.preventDefault();      
    //文字を入力してエンター押したときにレンダリングされてしまうのを防ぐ。
    // レンダリングしてほしいんじゃなくて入力した情報を送りたいだけだから。

    const {uid , photoURL} = auth.currentUser;


    //firebaseで用意されている　db.collection("").add({})
    db.collection("messages").add({
      text:message,
      photoURL,
      uid,
      createdAt:firebase.firestore.FieldValue.serverTimestamp(),  
      //firebaseで用意されているもの。　　カンマで区切るの忘れないでね?

      //createdAtをcreateAtと入力してしまっていたためデータが表示されないエラーに悩まされた
      //気をつけて!!

    });

    setMessages("");

  }



  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className='sendMsg'>
          <Input style={{
                        width: "78%",
                        fontSize: "15px",
                        fontWeight: "550",
                        marginLeft: "5px",
                        fmarginBottom: "-3px",
                        }}
                 placeholder='メッセージを入力してください' 
                 type='text' 
                 onChange={(e) => setMessages(e.target.value)}
                 value = {message}
          />
          <Send onClick={sendMessage} style={{color: "#7AC2FF", marginLeft: "20px" ,cursor:"pointer"}}/>
        </div>
      </form>
    </div>
  )
}

export default SendMessage
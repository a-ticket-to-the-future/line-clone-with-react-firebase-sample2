import './App.css';
import SignIn from './components/SignIn';
import {useAuthState} from "react-firebase-hooks/auth"; //firebaseのhooksが用意してくれている 認証ががtrue or false かで監視できるもの
import { auth } from './firebase';
import Line from './components/Line';


function App() {

  //     userを[]で囲むのを忘れないで！
  const [user] = useAuthState(auth); //userが中にいるのかいないのか


   //ログインしているのであれば<Line />、 していないのであれば<SignIn />
  return (
    <div > 
      {user ? <Line /> : <SignIn />}  
      
    </div>
  );
}

export default App;

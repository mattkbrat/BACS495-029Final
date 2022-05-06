import './index.css';

import {useContext, useState} from 'react';
import {Context, ContextProvider} from './UserContext'

import MyHeader from './header.js'
import MyFooter from './footer.js'
import QuestionDisplay from './Questions/QuestionDisplay.js'
import SubmitQuestion from './Questions/QuestionDisplay.js'
import Questions from './Questions/Questions.js'
// import Account from './account.js'
// import Home from './home.js'

import Users from './Users/Users.js'
import LogIn from './Users/LogIn.js'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom'

const aboutMe = { name : "Matt", linkedIn : "https://linkedin.com/in/mattkbrat"}

function App() {
    const [session, setSession] = useState(null);
    const { user } = useContext(Context);

    return (
        <ContextProvider value={{ session, setSession }}>
            <div className="App">
                <MyHeader />
                <Routes>
                    {/*<Route exact path="/" element={<Home/>}/>*/}
                    <Route exact path="/" element={<Questions/>}/>
                    <Route exact path="/login" element={<LogIn/>}/>
                    <Route exact path="/questions" element={<Questions/>}/>
                    <Route exact path="/submit" element={<SubmitQuestion/>}/>
                    <Route exact path="/users" element={<Users/>}/>
                </Routes>
                <MyFooter myName={aboutMe.name} />
            </div>
        </ContextProvider>
    );
}

export default App;


//
// export default () => {
//     const [session, setSession] = useState(null)
//
//     useEffect(() => {
//         setSession(supabaseClient.auth.session())
//
//         supabaseClient.auth.onAuthStateChange((_event, session) => {
//             setSession(session)
//         })
//     }, [])
//
//     return (
//         <div className="container" style={{ padding: '50px 0 100px 0' }}>
//             {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
//         </div>
//     )
// }

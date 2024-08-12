import './App.css';
import Faq from './components/Faq';
import UseCallbackEx from './components/UseCallbackEx';
import UseCallbackEx2 from './components/UseCallbackEx2';
import UseMemoEx from './components/UseMemoEx';
import UseReducerEx from './components/UseReducerEx';
import useTitle from './hooks/useTitle';
import Form from './components/react-hook-form/Form';
import QuizForm from './components/react-hook-form/QuizForm';

function App() {
    useTitle('React Hooks 학습중!');
    return (
        <div className="App">
            <UseMemoEx />
            <hr />

            <UseCallbackEx />
            <hr />

            <UseCallbackEx2 postId={9} />
            <hr />

            <UseReducerEx />
            <hr />

            <Faq />
            <hr />

            <Form />
            <hr />

            <QuizForm />
        </div>
    );
}

export default App;
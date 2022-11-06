import Header from "./header/Header";
import ProgressBar from "./progress-bar/ProgressBar";
import Sidebar from "./sidebar/Sidebar";

const QuizLayout = ({children}) => (
    <>
        <Header text={'РУСЬ И ЗОЛОТАЯ ОРДА'} totalCountQuestions={3} questionsCounter={questionsCounter}/>
        <ProgressBar countQuestions={3} answeredQuestions={2}/>
        <Sidebar/>
        {children}
    </>
)

export default QuizLayout

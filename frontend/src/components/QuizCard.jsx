import { Link } from 'react-router-dom';

function QuizCard({ quiz }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
      {quiz.thumbnail && (
        <img src={quiz.thumbnail} alt={quiz.title} className="w-full h-48 object-cover" />
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{quiz.title}</h3>
        <p className="text-gray-600 mb-4">{quiz.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {quiz.questions?.length || 0} Questions
          </span>
          <Link 
            to={`/quiz/${quiz._id}`}
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90"
          >
            Start Quiz
          </Link>
        </div>
      </div>
    </div>
  );
}

export default QuizCard; 
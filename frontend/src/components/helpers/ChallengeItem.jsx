import   React  from "react";
import { Link } from "react-router-dom";

const difficulties = {
  'hard':   'red',
  'normal': 'yellow',
  'easy':   'green',
  'special': 'indigo'
}

function ChallengeItem({challenge}) {
  const difficultyColor = difficulties[challenge.difficulty] || 'black';
  const classNameDifficulty = `text-${difficultyColor}-500 pl-14 sm:pl-2 sm:text-xs`

  return (
    <div className="flex justify-around font-semibold py-5 pl-4 border-b-2 last-of-type:border-b-0 hover:bg-gray-100">
      <a className="pl-4 sm:pl-0.5 sm:text-xs">{ challenge.id }</a>
      <a className="sm:text-xs">               { challenge.title }</a>
      <a className= { classNameDifficulty }>   { challenge.difficulty }</a>
      <a className="pl-4 sm:pl-2 sm:text-xs">  { challenge.cost }$</a>
      <Link to={`/challenges/${challenge.id}`} taskId= { challenge.task }>
        <button className="bg-blue-700 w-32 py-1 rounded-2xl font-semibold text-white shadow-md hover:shadow-xl active:scale-90 transition duration-150 text-center sm:text-xs sm:w-10">
          Start!
        </button>
      </Link>
    </div>
  );
}

export default ChallengeItem;

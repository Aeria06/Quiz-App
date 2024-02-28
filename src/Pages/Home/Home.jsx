import React from "react";

function Home() {
  return (
    <div
      className="hero min-h-screen bg-gradient-to-br from-orange-400 via-indigo-500 to-purple-700">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-screen-lg">
          <h1 className="mb-5 text-6xl font-bold">🎉 Welcome to Our Quiz App! 🎉</h1>
          <p className="mb-5 text-2xl font-semibold ">
            Test your knowledge and challenge your friends with our fun quiz app! 
          </p>
          <p className="mb-5 text-2xl font-semibold"> Create your own quizzes or play quizzes created by others. </p>

          <button className="btn btn-primary btn-circle"> {">"} </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

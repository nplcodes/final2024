const HeroSectionStudent = () => {
    return (
      <div className="flex-grow p-8 flex flex-col items-center justify-center bg-[#DFE9F1]">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
          Welcome to Your Dashboard
        </h1>
        <p className="text-lg mb-12 text-center text-gray-600">
          Get insights, manage your tasks, and stay organized.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md">
          Get Started
        </button>
      </div>
    );
  };
  
  export default HeroSectionStudent;
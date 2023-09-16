const MainContent = () => {
  return (
    <div className="flex-grow p-8">
      <h2 className="text-2xl font-semibold mb-4">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Cards */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Card Title</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Card Title</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Card Title</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;

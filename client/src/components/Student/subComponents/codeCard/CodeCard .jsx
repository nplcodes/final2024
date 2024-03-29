const CodeCard = ({ codes }) => {
  return (
    <div className="bg-white border rounded-lg overflow-hidden shadow-lg w-64 p-4 mb-3">
      <h1 className="text-xl font-bold mb-2">Your Code</h1>
      <div className="bg-gray-100 p-4 rounded-md mb-2">
        <span className="text-md font-semibold text-red-500">{codes[0]?._id}</span>
      </div>
      <p className="text-gray-600 text-sm">This code can be used to send your issue directly staff.</p>
    </div>
  );
};

export default CodeCard;

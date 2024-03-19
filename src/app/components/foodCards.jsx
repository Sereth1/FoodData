const FoodCard = ({ data, error, isLoading }) => {
  return (
    <div>
      {isLoading && (
        <div className="text-center mt-5">
          <div className="loader bg-blue-500 p-5 rounded-full flex space-x-3">
            <div className="w-5 h-5 bg-white rounded-full animate-bounce"></div>
            <div className="w-5 h-5 bg-white rounded-full animate-bounce"></div>
            <div className="w-5 h-5 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      )}
      {error && <div className="text-red-500 text-center mt-5"></div>}

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 p-5">
        {data &&
          data.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
            >
              <div>
                <h2 className="text-lg font-bold mb-2">{item.name}</h2>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FoodCard;

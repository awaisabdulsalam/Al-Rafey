const Reviews = () => {
  return (
    <>
      <section>
        <div>
          <h1>Customers Feedback</h1>
        </div>
        <section className="py-8">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-5xl font-bold">4.8</h1>
          <p className="text-gray-600">Product Rating</p>
        </div>
        <div className="flex">
          <div className="w-6 h-6 bg-yellow-400 rounded-full mr-1"></div>
          <div className="w-6 h-6 bg-yellow-400 rounded-full mr-1"></div>
          <div className="w-6 h-6 bg-yellow-400 rounded-full mr-1"></div>
          <div className="w-6 h-6 bg-yellow-400 rounded-full mr-1"></div>
          <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
        </div>
      </div>
      <div>
        <div className="flex items-center mb-2">
          <div className="w-1/6 text-right mr-2">5 Stars</div>
          <div className="w-4/6 bg-gray-200 h-3 rounded-full">
            <div className="bg-yellow-400 h-full rounded-full w-70%"></div>
          </div>
        </div>
        <div className="flex items-center mb-2">
          <div className="w-1/6 text-right mr-2">4 Stars</div>
          <div className="w-4/6 bg-gray-200 h-3 rounded-full">
            <div className="bg-yellow-400 h-full rounded-full w-90%"></div>
          </div>
        </div>
        <div className="flex items-center mb-2">
          <div className="w-1/6 text-right mr-2">3 Stars</div>
          <div className="w-4/6 bg-gray-200 h-3 rounded-full">
            <div className="bg-yellow-400 h-full rounded-full w-60%"></div>
          </div>
        </div>
        <div className="flex items-center mb-2">
          <div className="w-1/6 text-right mr-2">2 Stars</div>
          <div className="w-4/6 bg-gray-200 h-3 rounded-full">
            <div className="bg-yellow-400 h-full rounded-full w-20%"></div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-1/6 text-right mr-2">1 Star</div>
          <div className="w-4/6 bg-gray-200 h-3 rounded-full">
            <div className="bg-yellow-400 h-full rounded-full w-5%"></div>
          </div>
        </div>
      </div>
    </section>
      </section>
    </>
  );
};

export default Reviews;

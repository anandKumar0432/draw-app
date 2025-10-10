
export const CTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Start Drawing?
          </h2>
          <p className="text-xl text-blue-50 mb-10 leading-relaxed">
            Join thousands of creators who use DrawFlow to bring their ideas to life.
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-lg hover:bg-gray-50 transition-all transform hover:scale-105 font-bold text-lg shadow-xl">
            Get Started for Free
          </button>
          <p className="mt-6 text-blue-100 text-sm">
            No credit card required • Free forever plan available
          </p>
        </div>
      </section>
  );
};
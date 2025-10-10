import { Pencil } from "lucide-react";

export function Hero(){

    return  <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Sketch Your Ideas,
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Share Your Vision
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
              A powerful, intuitive drawing tool for teams and individuals. Create diagrams, wireframes, and illustrations with ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 font-medium text-lg shadow-lg shadow-blue-600/20">
                Try for Free
              </button>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all border-2 border-gray-200 font-medium text-lg">
                View Examples
              </button>
            </div>
          </div>

          <div className="mt-20 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-12">
                <div className="bg-white rounded-lg shadow-lg p-8 min-h-[400px] relative">

                  <div className="absolute top-4 left-4 flex space-x-2">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                      <div className="w-4 h-4 border-2 border-gray-600 rounded"></div>
                    </div>
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                      <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
                    </div>
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                      <Pencil className="w-5 h-5 text-gray-600" />
                    </div>
                  </div>

                  <div className="mt-16 space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-24 h-24 bg-blue-100 rounded-xl border-2 border-blue-600"></div>
                      <div className="flex-1 h-1 bg-gray-300"></div>
                      <div className="w-24 h-24 bg-green-100 rounded-full border-2 border-green-600"></div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-32 h-32 bg-orange-100 rounded-lg border-2 border-orange-600 relative">
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded shadow text-sm text-gray-700 font-medium">
                          Component
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          </div>
        </div>
      </section>
}
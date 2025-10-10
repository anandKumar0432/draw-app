

export function Works(){

    return <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Start Creating in Three Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              No learning curve. Jump right in and start bringing your ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Open Your Canvas",
                description: "Click 'Start Drawing' and you're ready to go. No sign-up required to try it out."
              },
              {
                step: "02",
                title: "Create & Collaborate",
                description: "Use our intuitive tools to draw, diagram, and design. Invite others to collaborate in real-time."
              },
              {
                step: "03",
                title: "Share & Export",
                description: "Share a link or export your work. Your creations are automatically saved and synced."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-full text-2xl font-bold mb-6 shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
}
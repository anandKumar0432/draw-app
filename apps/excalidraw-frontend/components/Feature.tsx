import { Download, Globe, Lock, Pencil, Users, Zap } from "lucide-react";

export function Feature(){

    return <section id="features" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to Create
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to make drawing and collaboration effortless
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Lightning Fast",
                description: "Instantly responsive canvas that keeps up with your creativity. No lag, no loading.",
                color: "text-yellow-600 bg-yellow-100"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Real-time Collaboration",
                description: "Work together with your team in real-time. See changes as they happen.",
                color: "text-blue-600 bg-blue-100"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Works Everywhere",
                description: "Access your drawings from any device, anywhere. Cloud-synced and always available.",
                color: "text-green-600 bg-green-100"
              },
              {
                icon: <Download className="w-8 h-8" />,
                title: "Export Anywhere",
                description: "Export to PNG, SVG, or JSON. Share your work in any format you need.",
                color: "text-cyan-600 bg-cyan-100"
              },
              {
                icon: <Lock className="w-8 h-8" />,
                title: "Private & Secure",
                description: "Your data is encrypted and private. Share only what you want, when you want.",
                color: "text-gray-700 bg-gray-100"
              },
              {
                icon: <Pencil className="w-8 h-8" />,
                title: "Intuitive Tools",
                description: "Simple, powerful drawing tools that feel natural. Start creating in seconds.",
                color: "text-orange-600 bg-orange-100"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all border border-gray-200 group hover:border-gray-300">
                <div className={`${feature.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
}
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Arjun</h1>
          <div className="space-x-6">
            <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition">Adventures</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="mb-8">
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className="w-48 h-48 mx-auto object-cover rounded-full"
          />
        </div>
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Hi, I'm Arjun
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Finance & Supply Chain Professional | Adventure Enthusiast | World Traveler
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#about" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition">
            Learn More
          </a>
          <a href="#contact" className="border border-purple-600 hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition">
            Get In Touch
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-6">About Me</h3>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                I work in Finance and Supply Chain at Gunvor in Houston, Texas, where I focus on optimizing operations
                and driving strategic initiatives in the energy sector.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not working, you'll find me skiing down mountains, cycling through scenic routes,
                or exploring new destinations around the world. I believe in balancing professional excellence
                with personal adventures.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/skiing.jpg" alt="Skiing" className="rounded-lg h-40 w-full object-cover" />
              <img src="/images/cycling.jpg" alt="Cycling" className="rounded-lg h-40 w-full object-cover" />
              <img src="/images/travel1.jpg" alt="Travel" className="rounded-lg h-40 w-full object-cover" />
              <img src="/images/travel2.jpg" alt="Travel" className="rounded-lg h-40 w-full object-cover" />
            </div>
          </div>

          <div className="mt-12">
            <h4 className="text-2xl font-bold text-white mb-6">Interests & Hobbies</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                <p className="text-white font-semibold">⛷️ Skiing</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                <p className="text-white font-semibold">🚴 Road Cycling</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                <p className="text-white font-semibold">✈️ Traveling</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                <p className="text-white font-semibold">📊 Finance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adventures Section */}
      <section id="projects" className="container mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-white mb-12 text-center">Adventures & Experiences</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/20 transition">
            <img src="/images/adventure1.jpg" alt="Mountain Skiing" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h4 className="text-xl font-bold text-white mb-3">Mountain Skiing</h4>
              <p className="text-gray-300 mb-4">
                From the Rockies to the Alps, conquering challenging slopes and embracing the thrill of winter sports.
              </p>
              <div className="flex gap-2">
                <span className="text-xs bg-purple-600 text-white px-3 py-1 rounded-full">Skiing</span>
                <span className="text-xs bg-purple-600 text-white px-3 py-1 rounded-full">Winter</span>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/20 transition">
            <img src="/images/adventure2.jpg" alt="Road Cycling" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h4 className="text-xl font-bold text-white mb-3">Road Cycling</h4>
              <p className="text-gray-300 mb-4">
                Exploring scenic routes and challenging myself on long-distance rides through diverse landscapes.
              </p>
              <div className="flex gap-2">
                <span className="text-xs bg-purple-600 text-white px-3 py-1 rounded-full">Cycling</span>
                <span className="text-xs bg-purple-600 text-white px-3 py-1 rounded-full">Endurance</span>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/20 transition">
            <img src="/images/adventure3.jpg" alt="World Travel" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h4 className="text-xl font-bold text-white mb-3">World Travel</h4>
              <p className="text-gray-300 mb-4">
                Discovering new cultures, cuisines, and landscapes across continents, one destination at a time.
              </p>
              <div className="flex gap-2">
                <span className="text-xs bg-purple-600 text-white px-3 py-1 rounded-full">Travel</span>
                <span className="text-xs bg-purple-600 text-white px-3 py-1 rounded-full">Culture</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Get In Touch</h3>
          <p className="text-gray-300 text-lg mb-8">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex gap-6 justify-center">
            <a href="mailto:your.email@example.com" className="text-gray-300 hover:text-white transition">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-white/10">
        <p className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} Arjun. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;

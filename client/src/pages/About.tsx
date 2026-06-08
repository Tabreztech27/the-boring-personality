import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function About() {
  return (
    <div className="min-h-screen bg-[#070B1A] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Content */}
          <div>
            <p className="text-[#8B5CF6] font-semibold tracking-widest uppercase mb-4">
              About TBP
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Building Modern &
              <span className="text-[#8B5CF6]"> Creative </span>
              Digital Experiences
            </h1>

            <p className="text-gray-400 text-lg mt-8 leading-relaxed">
              TBP (The Boring Personality) is a modern digital platform
              focused on creativity, technology, blogs, and clean user
              experiences. We believe in building minimal yet powerful
              interfaces that feel premium and professional.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <button className="px-7 py-3 rounded-2xl bg-linear-to-r from-[#8B5CF6] to-[#6366f1] hover:scale-105 transition duration-300 shadow-lg shadow-[#8B5CF6]/30">
                Explore More
              </button>

              <button className="px-7 py-3 rounded-2xl border border-[#1f2937] bg-[#111827] hover:bg-[#1f2937] transition duration-300">
                Contact Us
              </button>

            </div>
          </div>

          {/* Right Card */}
          <div className="relative">

            <div className="absolute inset-0 bg-[#8B5CF6]/20 blur-3xl rounded-full"></div>

            <div className="relative bg-[#111827] border border-[#1f2937] rounded-3xl p-10 shadow-2xl">

              <div className="grid grid-cols-2 gap-6">

                <div className="bg-[#0f172a] rounded-2xl p-6 border border-[#1f2937]">
                  <h2 className="text-4xl font-bold text-[#8B5CF6]">
                    50+
                  </h2>

                  <p className="text-gray-400 mt-2">
                    Projects Completed from
                  </p>
                </div>

                <div className="bg-[#0f172a] rounded-2xl p-6 border border-[#1f2937]">
                  <h2 className="text-4xl font-bold text-[#8B5CF6]">
                    10K+
                  </h2>

                  <p className="text-gray-400 mt-2">
                    Community Reach
                  </p>
                </div>

                <div className="bg-[#0f172a] rounded-2xl p-6 border border-[#1f2937]">
                  <h2 className="text-4xl font-bold text-[#8B5CF6]">
                    24/7
                  </h2>

                  <p className="text-gray-400 mt-2">
                    Support System
                  </p>
                </div>

                <div className="bg-[#0f172a] rounded-2xl p-6 border border-[#1f2937]">
                  <h2 className="text-4xl font-bold text-[#8B5CF6]">
                    100%
                  </h2>

                  <p className="text-gray-400 mt-2">
                    Modern UI Design
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-10">

        <div className="bg-[#111827] border border-[#1f2937] rounded-3xl p-10 lg:p-14">

          <div className="grid lg:grid-cols-3 gap-10">

            <div>
              <h2 className="text-3xl font-bold">
                Our Mission
              </h2>
            </div>

            <div className="lg:col-span-2">
              <p className="text-gray-400 text-lg leading-relaxed">
                Our mission is to create beautiful, scalable, and
                performance-focused digital experiences that inspire
                users and help developers learn modern technologies
                with clean design principles.
              </p>
            </div>

          </div>
        </div>

      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

        <div className="text-center mb-16">
          <p className="text-[#8B5CF6] uppercase tracking-widest font-semibold">
            Our Team
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Meet The Creators
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-[#111827] border border-[#1f2937] rounded-3xl p-8 hover:-translate-y-2 transition duration-300 shadow-lg hover:shadow-[#8B5CF6]/20"
            >
              <div className="w-20 h-20 rounded-full bg-linear-to-br from-[#8B5CF6] to-[#6366f1] mb-6"></div>

              <h3 className="text-2xl font-semibold">
                Team Member
              </h3>

              <p className="text-[#8B5CF6] mt-2">
                UI/UX Designer
              </p>

              <p className="text-gray-400 mt-5 leading-relaxed">
                Passionate about building modern interfaces and
                premium digital products with great user experience res.
              </p>
            </div>
          ))}

        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default About;

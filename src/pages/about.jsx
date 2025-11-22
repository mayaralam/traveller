import Nav from "../components/nav";
import us from "../assets/us.png";
import map from "../assets/map.png";
import foot from "../assets/foot.png";
import Footer from "../components/footer";
export default function about() {
  return (
    <>
      <Nav />
      <div
        className="h-135 bg-cover bg-center"
        style={{ backgroundImage: `url(${us})` }}
      >
        <div className="container mx-auto flex flex-col items-center gap-3 px-4">
          <section
            className="relative h-[60vh] bg-cover bg-center flex items-center justify-start text-white px-6"
            style={{ backgroundImage: "url('/images/banner.jpg')" }}
          >
            <div className=" max-w-2xl w-full flex flex-col items-start gap-4 backdrop-blur-sm">
              <div className="bg-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-md">
                Crafting Journeys Since 2010
              </div>
              <div className="flex flex-col gap-1.5">
                <h1 className="text-3xl md:text-5xl">We Turn Dreams Into</h1>
                <h1 className="text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-[#FF7A00] to-[#FF4D88]">
                  Destinations
                </h1>
              </div>
              <p className="text-sm sm:text-base text-gray-200 max-w-md">
                More than just a travel agency, we're your partners in
                exploration, dedicated to creating unforgettable experiences
                across the globe.
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className="container mx-auto px-4 items-center ">
        <section className="max-w-7xl mx-auto px-6 py-12 mt-9 mb-9">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {/* Countries Covered */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <div className="bg-gradient-to-br from-[#FF7A00] to-[#FF4D88] p-3 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="-2 -2 24 24"
                >
                  <path
                    fill="#fff"
                    d="M2.252 8A8 8 0 0 0 2 10c0 .69.088 1.36.252 2H5.1a20 20 0 0 1 0-4zm.818-2h2.346c.266-1.217.65-2.307 1.121-3.214A8.04 8.04 0 0 0 3.07 6m14.678 2H14.9a20 20 0 0 1 0 4h2.848a8.05 8.05 0 0 0 0-4m-.818-2a8.04 8.04 0 0 0-3.467-3.214c.472.907.855 1.997 1.121 3.214zM7.112 8A18 18 0 0 0 7 10c0 .685.038 1.355.112 2h5.776a17.8 17.8 0 0 0 0-4zm.358-2h5.06a10.8 10.8 0 0 0-.783-2.177C11.119 2.568 10.447 2 10 2s-1.119.568-1.747 1.823C7.938 4.455 7.673 5.19 7.47 6m-4.4 8a8.04 8.04 0 0 0 3.467 3.214c-.472-.907-.855-1.997-1.121-3.214zm13.86 0h-2.346c-.266 1.217-.65 2.307-1.121 3.214A8.04 8.04 0 0 0 16.93 14m-9.46 0c.203.81.468 1.545.783 2.177C8.881 17.432 9.553 18 10 18s1.119-.568 1.747-1.823c.315-.632.58-1.367.783-2.177zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"
                  />
                </svg>
              </div>
              <h3 className="text-3xl text-gray-900">120+</h3>
              <p className="text-sm text-gray-600 mt-1">Countries Covered</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <div className="bg-gradient-to-br from-[#FF7A00] to-[#FF4D88] p-3 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    d="M16 11a4 4 0 1 0-8 0a4 4 0 0 0 8 0Zm-4 6c-4.42 0-8 1.79-8 4v1h16v-1c0-2.21-3.58-4-8-4Z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl text-gray-900">50K+</h3>
              <p className="text-sm text-gray-600 mt-1">Happy Travelers</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <div className="bg-gradient-to-br from-[#FF7A00] to-[#FF4D88] p-3 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5Z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl text-gray-900">500+</h3>
              <p className="text-sm text-gray-600 mt-1">Unique Destinations</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
              <div className="bg-gradient-to-br from-[#FF7A00] to-[#FF4D88] p-3 rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="#fff"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                    <circle cx="12" cy="8" r="6" />
                  </g>
                </svg>
              </div>
              <h3 className="text-3xl text-gray-900">15+</h3>
              <p className="text-sm text-gray-600 mt-1">Industry Awards</p>
            </div>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* النص */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold text-purple-600 uppercase tracking-wide">
              Our Story
            </h3>
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 dark:text-gray-200 leading-snug">
              A Passion for Travel, A Commitment to Excellence
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
              What started as a small dream in 2010 has blossomed into one of
              the most trusted names in travel. Our founders, avid travelers
              themselves, recognized a gap in the market for personalized,
              authentic travel experiences that go beyond the typical tourist
              trail.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
              Today, we're a team of passionate explorers, cultural enthusiasts,
              and logistics experts working together to craft journeys that
              inspire, educate, and transform. Every trip we plan is infused
              with local insights, sustainable practices, and a deep respect for
              the destinations we visit.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
              Our mission is simple: to connect people with places in meaningful
              ways, creating memories that last a lifetime while supporting
              local communities and preserving the beauty of our planet.
            </p>
          </div>
          <div className="relative">
            <img
              src={map}
              alt="Eastern Europe travel map"
              className="w-full h-auto object-cover"
            />
          </div>
        </section>
      </div>
      <div className="bg-[#f6f7f9]">
        <div className="container mx-auto px-4 items-center">
          <section className="max-w-4xl mx-auto px-6 py-16 items-center flex flex-col">
            <div className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Our Core Values
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Drives Us Forward
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our values aren't just words on a page—they're the foundation of
              every journey we create.
            </p>
            <p className="text-center text-lg text-gray-600 leading-relaxed">
              journey we create.
            </p>
          </section>

          <section className="max-w-6xl mx-auto px-6 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 transform transition duration-300 hover:scale-[1.03]">
                <div className="w-12 h-12 bg-pink-500 rounded-md flex items-center justify-center transform transition duration-300 hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 56 56"
                  >
                    <path
                      fill="#fff"
                      d="M4.727 20.64c0 9.985 8.367 19.805 21.562 28.243c.516.304 1.219.633 1.711.633s1.195-.328 1.688-.633c13.218-8.438 21.586-18.258 21.586-28.242c0-8.297-5.696-14.157-13.29-14.157c-4.359 0-7.875 2.063-9.984 5.227c-2.11-3.14-5.648-5.227-9.984-5.227c-7.594 0-13.29 5.86-13.29 14.157m3.773 0c0-6.234 4.031-10.382 9.469-10.382c4.406 0 6.914 2.742 8.437 5.086c.633.937 1.032 1.195 1.594 1.195s.914-.281 1.594-1.195c1.593-2.297 4.054-5.086 8.437-5.086c5.438 0 9.469 4.148 9.469 10.383c0 8.718-9.211 18.117-19.031 24.632c-.235.164-.375.282-.469.282s-.258-.117-.492-.282C17.71 38.758 8.5 29.36 8.5 20.641"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Passionate Service
                </h4>
                <p className="text-sm text-gray-600">
                  We pour our hearts into every itinerary, treating each journey
                  as if it were our own adventure.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 transform transition duration-300 hover:scale-[1.03]">
                <div className="w-12 h-12 bg-emerald-400 rounded-md flex items-center justify-center transform transition duration-300 hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="#fff"
                      d="M245.63 48a6 6 0 0 0-5.63-5.63c-51-3-91.88 12.42-109.35 41.26c-11.63 19.21-11.38 42.68.53 65a69.4 69.4 0 0 0-15.48 30.59l-19.8-19.81c8.15-16.1 8.1-32.95-.32-46.85C82.77 91.41 53 80.07 15.9 82.27a6 6 0 0 0-5.63 5.64c-2.18 37.09 9.14 66.86 30.29 79.67A43.75 43.75 0 0 0 63.44 174a53.2 53.2 0 0 0 24-6L114 194.48V224a6 6 0 0 0 12 0v-29.49A57.55 57.55 0 0 1 139.76 157c11.21 5.93 22.72 8.91 33.82 8.91a58.9 58.9 0 0 0 30.79-8.57C233.21 139.89 248.63 99 245.63 48M46.78 157.31C30.47 147.44 21.39 124 22 94c30-.65 53.41 8.44 63.28 24.75c5.68 9.37 6.16 20.38 1.54 31.59l-26.58-26.59a6 6 0 0 0-8.49 8.49l26.62 26.61c-11.21 4.62-22.22 4.15-31.59-1.54m151.38-10.22c-14.74 8.92-32.14 9.18-49.67.9l55.76-55.75a6 6 0 0 0-8.49-8.49L140 139.51c-8.28-17.53-8-34.93.9-49.66c14.52-24 49.06-37.18 93-35.75c1.43 43.9-11.76 78.46-35.74 92.99"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Sustainable Travel
                </h4>
                <p className="text-sm text-gray-600">
                  We're committed to eco-friendly practices and supporting local
                  communities wherever we go.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 transform transition duration-300 hover:scale-[1.03]">
                <div className="w-12 h-12 bg-orange-500 rounded-md flex items-center justify-center transform transition duration-300 hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                  >
                    <mask id="SVGB7PXYcVT">
                      <g
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <path
                          stroke-dasharray="64"
                          stroke-dashoffset="64"
                          d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"
                        >
                          <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            dur="0.6s"
                            values="64;0"
                          />
                        </path>
                        <path
                          fill="#fff"
                          stroke="none"
                          d="M11 11L12 12L13 13L12 12z"
                          transform="rotate(-180 12 12)"
                        >
                          <animate
                            fill="freeze"
                            attributeName="d"
                            begin="0.6s"
                            dur="0.3s"
                            values="M11 11L12 12L13 13L12 12z;M10.2 10.2L17 7L13.8 13.8L7 17z"
                          />
                          <animateTransform
                            attributeName="transform"
                            dur="9s"
                            repeatCount="indefinite"
                            type="rotate"
                            values="-180 12 12;0 12 12;0 12 12;0 12 12;0 12 12;270 12 12;-90 12 12;0 12 12;-180 12 12;-35 12 12;-40 12 12;-45 12 12;-45 12 12;-110 12 12;-135 12 12;-180 12 12"
                          />
                        </path>
                        <circle
                          cx="12"
                          cy="12"
                          r="1"
                          fill="#000"
                          fill-opacity="0"
                          stroke="none"
                        >
                          <animate
                            fill="freeze"
                            attributeName="fill-opacity"
                            begin="0.9s"
                            dur="0.15s"
                            values="0;1"
                          />
                        </circle>
                      </g>
                    </mask>
                    <rect
                      width="24"
                      height="24"
                      fill="#fff"
                      mask="url(#SVGB7PXYcVT)"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Authentic Experiences
                </h4>
                <p className="text-sm text-gray-600">
                  Beyond tourist traps, we curate genuine cultural encounters
                  and hidden gems.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 transform transition duration-300 hover:scale-[1.03]">
                <div className="w-12 h-12 bg-blue-600 rounded-md flex items-center justify-center transform transition duration-300 hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M11.467 20.82a.88.88 0 0 0 1.066 0C14.168 19.593 19 15.586 19 11.016v-4.93a.514.514 0 0 0-.457-.515a12.05 12.05 0 0 1-5.582-2.046l-.61-.417a.62.62 0 0 0-.702 0l-.61.417a12.05 12.05 0 0 1-5.582 2.046a.514.514 0 0 0-.457.515v4.93c0 4.57 4.832 8.577 6.467 9.802"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Trust & Safety
                </h4>
                <p className="text-sm text-gray-600">
                  Your peace of mind is paramount. We ensure every detail is
                  handled with care and expertise.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div
        className="h-[90vh] md:h-[70vh]  flex items-center justify-center w-full bg-cover bg-center text-white py-16 px-6 "
        style={{ backgroundImage: `url(${foot})` }}
      >
        <div className="max-w-4xl mx-auto text-center p-8 rounded-xl flex flex-col gap-4 md:mt-30 mt-35">
          <h1 className="text-3xl sm:text-4xl font-medium">
            Ready to Start Your Next Adventure?
          </h1>
          <p className="text-md text-white/90">
            Let's turn your travel dreams into reality. Our team is ready to
            craft a <br />
            personalized journey just for you.
          </p>
          <div className="flex justify-center items-center gap-5 mb-8 mt-2">
            <button
              onClick={() => navigate("/")}
              className="min-w-fit bg-white text-black transition px-6 py-2 rounded-md font-semibold border cursor-pointer flex items-center justify-center gap-4"
            >
              Browse Destinations
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="1.5"
                  d="m14 16l4-4m0 0l-4-4m4 4H6"
                />
              </svg>
            </button>
            <button
              onClick={() => navigate("/traveller")}
              className="min-w-fit opacity-90 shadow-2xl bg-transparent text-white border-2 border-white px-7 py-2.5 font-bold cursor-pointer rounded-lg"
            >
              Plan Your Trip
            </button>
          </div>
          <p className="text-sm text-white/80 mt-5">
            Questions? Reach us at{" "}
            <a
              href="mailto:hello@travelservices.com"
              className="underline text-orange-300"
            >
              hello@travelservices.com
            </a>{" "}
            or call{" "}
            <a href="tel:+15551234567" className="underline">
              +1 (555) 123-4567
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

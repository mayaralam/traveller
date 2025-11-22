import Nav from "../components/nav";
import bg from "../assets/bg.png";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import pic6 from "../assets/pic6.jpg";
import Footer from "../components/footer";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import { FaRegEye } from "react-icons/fa";
export default function home() {
  const navigate = useNavigate();
  const services = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="#fff"
            d="m10 19l-2 1.5V22l3.5-1l3.5 1v-1.5L13 19v-5.5l8 2.5v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5z"
          />
        </svg>
      ),
      title: "Flight Booking",
      description:
        "Find the best deals on flights to destinations worldwide with our easy booking system.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          viewBox="0 0 2048 2048"
        >
          <path
            fill="#fff"
            d="M896 512v128H512V512zM512 896V768h384v128zm0 256v-128h256v128zM384 512v128H256V512zm0 256v128H256V768zm-128 384v-128h128v128zM128 128v1792h640v128H0V0h1115l549 549v219h-128V640h-512V128zm1024 91v293h293zm640 805h256v1024H896V1024h256V896h128v128h384V896h128zm128 896v-512h-896v512zm0-640v-128h-896v128z"
          />
        </svg>
      ),
      title: "Hotel Reservations",
      description:
        "Choose from thousands of verified hotels and accommodations for your perfect stay.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path
            fill="#fff"
            d="M14.485 19.737L9 17.823l-3.902 1.509q-.21.084-.401.053q-.192-.03-.354-.132t-.252-.274T4 18.583V6.41q0-.282.13-.499t.378-.303l3.957-1.344q.124-.05.257-.075q.134-.025.278-.025t.277.025t.257.075L15 6.177l3.902-1.508q.21-.084.401-.054t.354.132q.161.102.252.274t.091.396v12.259q0 .284-.159.495q-.158.212-.426.298l-3.9 1.287q-.13.05-.256.065q-.125.015-.26.015q-.136 0-.26-.024t-.255-.075m.016-1.033v-11.7l-5-1.746v11.7zm1 0L19 17.55V5.7l-3.5 1.304zM5 18.3l3.5-1.342v-11.7L5 6.45zM15.5 7.004v11.7zm-7-1.746v11.7z"
          />
        </svg>
      ),
      title: "Guided Tours",
      description:
        "Experience destinations with expert local guides who bring stories to life.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="27"
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
      ),
      title: "Travel Insurance",
      description:
        "Travel with peace of mind knowing you're protected every step of the way.",
    },
    {
      icon: (
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
          <rect width="24" height="24" fill="#fff" mask="url(#SVGB7PXYcVT)" />
        </svg>
      ),
      title: "Custom Itineraries",
      description:
        "Get personalized travel plans tailored to your interests and preferences.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g fill="none" fill-rule="evenodd">
            <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
            <path
              fill="#fff"
              d="M12 4.339c2.072-1.686 4.534-1.68 6.494-.538c2.095 1.221 3.569 3.7 3.504 6.592c-.079 3.52-2.752 6.634-7.323 9.424l-.721.431c-.201.119-.424.246-.642.356c-.405.206-.85.396-1.312.396s-.907-.19-1.313-.396a10 10 0 0 1-.433-.235l-.573-.338c-4.788-2.844-7.598-6.029-7.679-9.638c-.065-2.892 1.409-5.37 3.504-6.592C7.466 2.66 9.928 2.653 12 4.34M6.513 5.53c-1.444.842-2.56 2.629-2.511 4.82c.056 2.511 2.04 5.194 6.7 7.963c.302.179.604.363.891.509c.336.17.478.17.814 0c.191-.097.39-.212.59-.33l.301-.18c2.351-1.396 4.02-2.77 5.106-4.113a4.27 4.27 0 0 1-2.949-1.251l-1.19-1.19l-.762.762a4.044 4.044 0 0 1-5.719 0a2.826 2.826 0 0 1 0-3.997l2.771-2.773c-1.356-.996-2.83-.925-4.042-.22m6.498.58l-.191.186a1 1 0 0 1-.105.122l-3.517 3.52a.826.826 0 0 0 0 1.168a2.044 2.044 0 0 0 2.89 0l.866-.866a1.854 1.854 0 0 1 2.622 0l1.293 1.294a2.275 2.275 0 0 0 2.88.278q.235-.74.25-1.463c.049-2.19-1.068-3.977-2.512-4.818c-1.342-.782-3.007-.785-4.476.578"
            />
          </g>
        </svg>
      ),
      title: "24/7 Support",
      description:
        "Our dedicated team is always ready to assist you, wherever you are.",
    },
  ];
  const destinations = [
    {
      name: "Paris",
      country: "France",
      tours: 24,
      price: 1299,
      image: pic1,
    },
    {
      name: "Tokyo",
      country: "Japan",
      tours: 18,
      price: 1599,
      image: pic2,
    },
    {
      name: "Santorini",
      country: "Greece",
      tours: 15,
      price: 999,
      image: pic3,
    },
    {
      name: "Serengeti",
      country: "Tanzania",
      tours: 12,
      price: 2499,
      image: pic4,
    },
    {
      name: "Swiss Alps",
      country: "Switzerland",
      tours: 20,
      price: 1799,
      image: pic5,
    },
    {
      name: "Maldives",
      country: "Indian Ocean",
      tours: 16,
      price: 2199,
      image: pic6,
    },
  ];
  const testimonials = [
    {
      initials: "SM",
      name: "Sarah Martinez",
      location: "New York, USA",
      quote:
        "Absolutely incredible experience! The team took care of every detail and our trip to Japan was seamless. The custom itinerary was perfect for our family.",
    },
    {
      initials: "JW",
      name: "James Wilson",
      location: "London, UK",
      quote:
        "Best travel service I've ever used. From booking to the actual trip, everything was top-notch. The 24/7 support gave us peace of mind throughout our adventure.",
    },
    {
      initials: "FD",
      name: "Fayrouz Dawood",
      location: "Singapore",
      quote:
        "The guided tours were exceptional! Our local guide in Paris was knowledgeable and made the city come alive. Can't wait to book our next adventure with Wanderlust.",
    },
  ];
  return (
    <>
      <Nav />
      <div
        className="h-full md:h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container mx-auto px-4 flex flex-col items-center ">
          <h1 className="font-bold text-lg text-white mb-5 mt-50">
            Discover Your Next Adventure
          </h1>
          <h6 className="text-lg text-white mb-3 text-center">
            Explore breathtaking destinations, create unforgettable memories,
            and experience <br />
            the world like never before
          </h6>

          <div className="bg-white rounded-xl shadow-md p-6 max-w-4xl mx-auto flex md:flex-row flex-col items-center gap-4 mt-8">
            <div className="flex-1 w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Destination
              </label>
              <input
                type="text"
                placeholder="Where to?"
                className="text-gray-700 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1 w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <input
                type="date"
                placeholder="Select date"
                className="text-gray-400 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1 w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Travelers
              </label>
              <input
                type="text"
                placeholder="Add guests"
                className="text-gray-700 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className=" cursor-pointer bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center mt-5 gap-2.5 hover:bg-gray-700 transition">
              <FaSearch />
              Search Trips
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 items-center">
        <div className="flex flex-col items-center gap-3 mt-17">
          <h6 className="text-lg font-medium">Our Services</h6>
          <div className="flex gap-1.5">
            <p className="text-lg text-gray-500 dark:text-gray-300">
              Everything You Need for the
            </p>
            <p className="text-lg text-transparent bg-clip-text bg-gradient-to-br from-[#FF7A00] to-[#FF4D88]">
              Perfect Trip
            </p>
          </div>
          <p className="text-sm text-center">
            From planning to departure and beyond, we handle every detail so you
            can focus on making memories.
          </p>
        </div>
        <section className="py-12 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl shadow-sm p-6 transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-1"
              >
                <div className="text-white w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF7A00] to-[#FF4D88] flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-6 py-10">
          <div className="inline-block bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
            Popular Destinations
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold">
                <span className="text-gray-900 dark:text-gray-200">
                  Trending{" "}
                </span>
                <span className="bg-gradient-to-br from-[#FF7A00] to-[#FF4D88] bg-clip-text text-transparent">
                  Destinations
                </span>
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 max-w-md">
                Explore the most sought-after destinations chosen by travelers
                worldwide.
              </p>
            </div>
            <button className="cursor-pointer flex items-center gap-2 text-sm font-medium text-orange-500 hover:text-orange-600 transition">
              View All Destinations
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition group"
            >
              <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition group">
                <img
                  src={dest.image}
                  alt={`${dest.name}, ${dest.country}`}
                  className="w-full h-120 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent px-4 py-3 text-white">
                  <h3 className="text-base">{dest.name}</h3>
                  <p className="text-sm text-gray-200">{dest.country}</p>
                  <p className="text-sm text-gray-300 mt-1">
                    {dest.tours} Tours – From ${dest.price}
                  </p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md flex items-center justify-center transition duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-10">
            <div className="inline-block bg-gradient-to-br from-[#FF7A00] to-[#FF4D88] text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
              Testimonials
            </div>
            <div className="flex gap-1.5 justify-center">
              <h2 className="text-4xl text-gray-900 dark:text-gray-200">
                What Our
              </h2>
              <h2 className="text-4xl text-transparent bg-clip-text bg-gradient-to-br from-[#FF7A00] to-[#FF4D88]">
                Travelers Say
              </h2>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 max-w-xl mx-auto">
              Don't just take our word for it. Hear from travelers who've
              experienced the Wanderlust difference.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between"
              >
                <div className="flex gap-1 text-yellow-400 mb-3">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.393c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.966z" />
                      </svg>
                    ))}
                </div>
                <p className="text-sm text-gray-700 mb-4">"{t.quote}"</p>
                <div className="mt-auto">
                  <div className="text-xs bg-gradient-to-br from-[#FF7A00] to-[#FF4D88] text-white w-8 h-8 rounded-full flex items-center justify-center">
                    {t.initials}
                  </div>
                  <div className="text-sm font-semibold text-gray-900">
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-500">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

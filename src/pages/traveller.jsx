import Nav from "../components/nav";
import { useState } from "react";
import hotel1 from "../assets/hotel1.jpg";
import hotel2 from "../assets/hotel2.webp";
import hotel3 from "../assets/hotel3.jpg";
import hotel4 from "../assets/hotel4.jpg";
import hotel5 from "../assets/hotel5.jpg";
import hotel6 from "../assets/hotel6.jpg";
import toast from "react-hot-toast";
import Footer from "../components/footer";
export default function traveller() {
  const [maxPrice, setMaxPrice] = useState(600);

  const allHotels = [
    {
      name: "Azure Luxury Resort",
      location: "Maldives",
      description:
        "Experience ultimate luxury with overwater bungalows and pristine beaches.",
      amenities: ["Pool", "Spa", "Beach Access", "+1 more"],
      rating: 4.9,
      reviews: 342,
      price: 450,
      image: hotel1,
      topRated: true,
    },
    {
      name: "Metropolitan Grand Hotel",
      location: "New York, USA",
      description:
        "Modern elegance in the heart of Manhattan with stunning city views.",
      amenities: ["Free WiFi", "Gym", "Restaurant", "+1 more"],
      rating: 4.7,
      reviews: 521,
      price: 320,
      image: hotel2,
    },
    {
      name: "Sunset Beach Resort",
      location: "Bali, Indonesia",
      description:
        "Tropical paradise with white sandy beaches and crystal clear waters.",
      amenities: ["Beach Access", "Pool", "Spa", "+1 more"],
      rating: 4.8,
      reviews: 298,
      price: 280,
      image: hotel3,
      topRated: true,
    },
    {
      name: "The Boutique Collection",
      location: "Paris, France",
      description:
        "Charming boutique hotel near the Eiffel Tower with classic French elegance.",
      amenities: ["Free WiFi", "Room Service", "Restaurant", "+1 more"],
      rating: 4.6,
      reviews: 178,
      price: 380,
      image: hotel4,
    },
    {
      name: "Alpine Mountain Lodge",
      location: "Swiss Alps, Switzerland",
      description:
        "Breathtaking mountain views with direct access to world-class ski slopes.",
      amenities: ["Ski Access", "Restaurant", "Spa", "+1 more"],
      rating: 4.9,
      reviews: 412,
      price: 520,
      image: hotel5,
      topRated: true,
    },
    {
      name: "Skyline Tower Hotel",
      location: "Dubai, UAE",
      description:
        "Luxury accommodations with panoramic views of Dubai's iconic skyline.",
      amenities: ["Pool", "Gym", "Restaurant", "+1 more"],
      rating: 4.8,
      reviews: 634,
      price: 490,
      image: hotel6,
      topRated: true,
    },
  ];
  const filteredHotels =
    maxPrice === 0 || maxPrice === 600
      ? allHotels
      : allHotels.filter((hotel) => hotel.price <= maxPrice);
  return (
    <>
      <Nav />

      <section className="relative bg-gradient-to-br from-[#FF7A00] to-[#FF4D88] text-white h-[400px] flex items-center justify-center px-6">
        <div className="text-center z-10">
          <h2 className="text-4xl mb-2 font-medium">Find Your Perfect Stay</h2>
          <p className="text-sm text-white/95">
            Discover luxury hotels and unique experiences worldwide
          </p>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 md:translate-y-50 translate-y-60 w-full max-w-4xl px-6 z-20">
          <div className="bg-white rounded-xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs mb-1 text-gray-700">
                Destination
              </label>
              <input
                type="text"
                placeholder="Where are you going?"
                className="w-full px-3 py-2 rounded-md text-sm text-gray-800 placeholder-gray-500 border"
              />
            </div>
            <div>
              <label className="block text-xs mb-1 text-gray-700">
                Check In
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 rounded-md text-sm text-gray-800 border"
              />
            </div>
            <div>
              <label className="block text-xs mb-1 text-gray-700">
                Check Out
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 rounded-md text-sm text-gray-800 border"
              />
            </div>
            <div>
              <label className="block text-xs mb-1 text-gray-700">Guests</label>
              <input
                type="number"
                min="1"
                defaultValue="2"
                className="w-full px-3 py-2 rounded-md text-sm text-gray-800 border"
              />
            </div>
            <div className="md:col-span-4">
              <button
                type="submit"
                className="cursor-pointer w-full bg-black text-white py-2 rounded-md text-sm font-semibold transition"
              >
                Search Hotels
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 items-center">
        <section className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 md:mt-28 mt-55">
          <aside className="md:col-span-1">
            <div className="sticky top-6 bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-2 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 21 21"
                >
                  <path
                    fill="none"
                    stroke="#0018b5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.5 4a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1m12 2h-11m-2 0h-3m4 8a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1m12 2h-11m-2 0h-3m12-7a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1m-1 2h-11m16 0h-3"
                    stroke-width="1"
                  />
                </svg>
                <h3 className="text-lg font-bold text-black">Filters</h3>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-black">
                  Sort by
                </label>
                <select className="w-full border rounded-md px-3 py-2 text-sm text-black">
                  <option>Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1 text-black">
                  Price Range
                </label>
                <input
                  type="range"
                  min="0"
                  max="600"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$0</span>
                  <span>$600</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-black">
                  Amenities
                </label>
                {[
                  "Pool",
                  "Spa",
                  "Beach Access",
                  "Free WiFi",
                  "Gym",
                  "Restaurant",
                ].map((amenity) => (
                  <div key={amenity} className="flex items-center mb-2">
                    <input type="checkbox" id={amenity} className="mr-2" />
                    <label htmlFor={amenity} className="text-sm text-gray-700">
                      {amenity}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </aside>
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredHotels.map((hotel, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
              >
                <div className="relative group h-66 overflow-hidden">
                  <div className="absolute top-3 right-3 bg-white text-gray-800 text-xs font-semibold px-2 py-1 rounded-full z-10">
                    ⭐ {hotel.rating}
                  </div>
                  {hotel.topRated && (
                    <div className="absolute top-3 left-3 bg-gradient-to-br from-[#FF7A00] to-[#FF4D88] text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="white"
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                        />
                      </svg>
                      Top Rated
                    </div>
                  )}
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <div className="p-5 flex flex-col justify-between h-[40vh]">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {hotel.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2 flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#918a8a"
                          d="M12 2c-4.4 0-8 3.6-8 8c0 5.4 7 11.5 7.3 11.8c.2.1.5.2.7.2s.5-.1.7-.2C13 21.5 20 15.4 20 10c0-4.4-3.6-8-8-8m0 17.7c-2.1-2-6-6.3-6-9.7c0-3.3 2.7-6 6-6s6 2.7 6 6s-3.9 7.7-6 9.7M12 6c-2.2 0-4 1.8-4 4s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"
                        />
                      </svg>
                      {hotel.location}
                    </p>

                    <p className="text-sm text-gray-700 mb-4">
                      {hotel.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3 mb-3">
                      {hotel.amenities.map((item, i) => (
                        <span
                          key={i}
                          className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-800">
                      ⭐ {hotel.rating}{" "}
                      <span className="text-gray-500">
                        ({hotel.reviews} reviews)
                      </span>
                    </p>
                  </div>

                  <div className="mt-4 flex justify-between">
                    <div className="flex items-center gap-0.5">
                      <p className="text-xl mb-1.5 text-purple-600">
                        ${hotel.price}
                      </p>
                      <p className="font-light text-gray-900">/ night</p>
                    </div>
                    <button
                      onClick={() =>
                        toast.success(`Booking confirmed at: ${hotel.name}`)
                      }
                      className="cursor-pointer bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded-md"
                    >
                      Book Now
                    </button>
                  </div>
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

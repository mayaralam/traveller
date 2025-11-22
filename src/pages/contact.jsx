import Nav from "../components/nav";
import cont from "../assets/cont.png";
import Footer from "../components/footer";
import { Toaster, toast } from "react-hot-toast";
export default function contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Message Sent!");
  };
  return (
    <>
      <Nav />
      <Toaster position="top-center" />

      <div
        className="h-85 bg-cover bg-center"
        style={{ backgroundImage: `url(${cont})` }}
      >
        <div className="container mx-auto flex flex-col items-center gap-3 px-4">
          <h3 className="mt-40 text-2xl font-light text-white text-shadow-lg/30">
            Get in Touch
          </h3>
          <h2 className="text-lg text-white text-shadow-lg/30">
            Ready to embark on your next adventure? We're here to help make your
            travel dreams a reality.
          </h2>
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-center gap-3 px-4">
        <div className="items-center grid md:grid-cols-2 grid-cols-1 md:gap-90 gap-0">
          <div className="mb-5 dark:text-white text-black p-6 mt-12 rounded-lg shadow-lg dark:shadow-2xl md:w-3xl w-auto">
            <h2 className="text-lg font-bold mb-2 text-purple-600">Send Us a Message</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
             Fill out the form below and our travel experts will get back to you within 24 hours.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full border border-gray-300 dark:border-gray-700 rounded p-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full border border-gray-300 dark:border-gray-700 rounded p-2 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">Phone</label>
                  <input
                    type="tel"
                    placeholder="(123) 456-7890"
                    className="w-full border border-gray-300 dark:border-gray-700 rounded p-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Interested Destination</label>
                  <input
                    type="text"
                    placeholder="Select a destination"
                    className="w-full border border-gray-300 dark:border-gray-700 rounded p-2 text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-1">Preferred Travel Date</label>
                <input
                  type="date"
                  className="w-full border border-gray-300 dark:border-gray-700 rounded p-2 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Your Message *</label>
                <textarea
                  placeholder="Tell us about your dream vacation, special requirements, or any questions you have..."
                  rows="4"
                  className="w-full border border-gray-300 dark:border-gray-700 rounded p-2 text-sm"
                />
              </div>
              <button
                type="submit"
                className=" bg-purple-600 text-white py-2 px-4 rounded-md transition cursor-pointer text-sm "
              >
                Send Message
              </button>
            </form>
          </div>
          <div>
            <section className=" text-gray-800 dark:text-white py-12 px-4 md:px-8 lg:px-16 flex flex-col gap-6 max-w-lg shadow-lg dark:shadow-2xl">
              <div className="flex gap-3 border border-gray-200 dark:border-gray-700 rounded-lg p-4 ">
                <div>
                  <svg
                    className="text-3xl bg-purple-100 text-purple-600 py-2 px-2 rounded-md"
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="text-sm mb-2 dark:text-gray-50 text-gray-800 font-light">
                    Phone
                  </h3>

                  <p className="text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex gap-3 border border-gray-200 dark:border-gray-700 rounded-lg p-4 ">
                <div>
                  <svg
                    className="text-3xl bg-purple-100 text-purple-600 py-2 px-2 rounded-md"
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path
                        stroke-dasharray="64"
                        stroke-dashoffset="64"
                        d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          dur="0.6s"
                          values="64;0"
                        />
                      </path>
                      <path
                        stroke-dasharray="24"
                        stroke-dashoffset="24"
                        d="M3 6.5l9 5.5l9 -5.5"
                      >
                        <animate
                          fill="freeze"
                          attributeName="stroke-dashoffset"
                          begin="0.6s"
                          dur="0.2s"
                          values="24;0"
                        />
                      </path>
                    </g>
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm  mb-2 dark:text-gray-50 text-gray-800 font-light">
                    Email
                  </h3>
                  <p className="text-sm">hello@wanderlust.com</p>
                </div>
              </div>
              <div className="flex gap-3 border border-gray-200 dark:border-gray-700 rounded-lg p-4 ">
                <div>
                  <svg
                    className="text-3xl bg-purple-100 text-purple-600 py-2 px-2 rounded-md"
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M16 18a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5m0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3"
                    />
                    <path
                      fill="currentColor"
                      d="m16 30l-8.436-9.949a35 35 0 0 1-.348-.451A10.9 10.9 0 0 1 5 13a11 11 0 0 1 22 0a10.9 10.9 0 0 1-2.215 6.597l-.001.003s-.3.394-.345.447ZM8.813 18.395s.233.308.286.374L16 26.908l6.91-8.15c.044-.055.278-.365.279-.366A8.9 8.9 0 0 0 25 13a9 9 0 1 0-18 0a8.9 8.9 0 0 0 1.813 5.395"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm  mb-2 dark:text-gray-50 text-gray-800 font-light">
                    Office Location
                  </h3>
                  <p className="text-sm">
                    123 Adventure Boulevard Wanderlust City, CA 90210 US
                  </p>
                </div>
              </div>
              <div className="flex gap-3 border border-gray-200 dark:border-gray-700 rounded-lg p-4 ">
                <div>
                  <svg
                    className="text-3xl bg-purple-100 text-purple-600 py-2 px-2 rounded-md"
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m.6-3h16.8M3.6 15h16.8" />
                      <path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 0 18" />
                    </g>
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm mb-2 dark:text-gray-50 text-gray-800 font-light">
                    Website
                  </h3>
                  <p className="text-sm">www.travelservices.com</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <section className="container max-w-6xl mx-auto px-6 py-16">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Office Hours */}
    <div className="bg-gradient-to-br from-[#FF7A00] to-[#FF4D88] text-white rounded-xl p-6 shadow-md">
      <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
      <ul className="space-y-2 text-sm">
        <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
        <li>Saturday: 10:00 AM - 4:00 PM</li>
        <li>Sunday: Closed</li>
      </ul>
    </div>

    {/* Travel Support */}
    <div className="bg-white text-gray-800 rounded-xl p-6 shadow-md border">
      <h3 className="text-lg font-semibold mb-4">24/7 Travel Support</h3>
      <p className="text-sm mb-2">
        For travelers on the go, our emergency hotline is always available.
      </p>
      <div className="flex items-center gap-1">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" d="m17.707 13.707l2.648 2.648a.91.91 0 0 1 0 1.29a5.47 5.47 0 0 1-7.151.508l-1.575-1.182a23 23 0 0 1-4.6-4.6l-1.182-1.575a5.47 5.47 0 0 1 .508-7.151a.91.91 0 0 1 1.29 0l2.648 2.648a1 1 0 0 1 0 1.414L9.272 8.728a.53.53 0 0 0-.1.616a12.26 12.26 0 0 0 5.484 5.484a.53.53 0 0 0 .616-.1l1.02-1.02a1 1 0 0 1 1.415 0Z" stroke-width="1"/></svg>
      <p className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#FF7A00] to-[#FF4D88]">+1 (800) TRAVEL-24</p>
   </div>
    </div>
  </div>
</section>
      <Footer />
    </>
  );
}

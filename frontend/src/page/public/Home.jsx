import Footer from "../../components/footer";
import Navbar from "../../components/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#eaeaea]">
      {/* Header */}
      <section>
        <Navbar />
      </section>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Discover Premium <span className="text-[#2563eb]">Aluminum</span>{" "}
              Products
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base lg:text-lg max-w-lg mx-auto md:mx-0">
              Explore our store and fabrication services. Whether you're a
              craftsman, builder, or designer — we have you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-md">
                Visit Store
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-md">
                View Fabrication
              </button>
            </div>
          </div>
          <div className="order-first md:order-last">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[4/3] overflow-hidden rounded-lg shadow-lg max-w-sm md:ml-auto">
              <img
                src="https://res.cloudinary.com/dljjyowjo/image/upload/v1757670938/alu_wpun7h.jpg"
                alt="Aluminum extrusion profiles"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Explore the Store Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Explore the Store
          </h3>

          <div className="space-y-12 sm:space-y-16 max-w-5xl mx-auto">
            {/* Aluminum Sheets */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              <div className="text-center md:text-left">
                <h4 className="text-lg sm:text-xl font-semibold text-[#2563eb] mb-3">
                  Aluminum Sheets
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base max-w-md mx-auto md:mx-0">
                  Durable and versatile aluminum sheets perfect for
                  construction, architecture, and crafting solutions.
                </p>
              </div>
              <div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md max-w-sm md:ml-auto">
                  <img
                    src="https://res.cloudinary.com/dljjyowjo/image/upload/v1757675363/sheet-steel-800x800_jzzu3n.jpg"
                    alt="Aluminum sheets"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* CNC Machines */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              <div className="md:order-2 text-center md:text-left">
                <h4 className="text-lg sm:text-xl font-semibold text-[#2563eb] mb-3">
                  CNC Machines
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base max-w-md mx-auto md:mx-0">
                  High-precision CNC machinery tailored for aluminum cutting and
                  custom fabrication tasks.
                </p>
              </div>
              <div className="md:order-1">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md max-w-sm md:mr-auto">
                  <img
                    src="https://res.cloudinary.com/dljjyowjo/image/upload/v1757677322/images_seocps.jpg"
                    alt="CNC machine"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Rivets & Fasteners */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              <div className="text-center md:text-left">
                <h4 className="text-lg sm:text-xl font-semibold text-[#2563eb] mb-3">
                  Rivets & Fasteners
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base max-w-md mx-auto md:mx-0">
                  Reliable fasteners ensuring long-lasting joints and
                  professional-quality aluminum structures.
                </p>
              </div>
              <div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md max-w-sm md:ml-auto">
                  <img
                    src="https://res.cloudinary.com/dljjyowjo/image/upload/v1757677462/metal-fasteners-1024x683_drgqlv.jpg"
                    alt="Rivets and fasteners"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 sm:px-12 py-2 sm:py-3 text-sm sm:text-base">
              Go to Store
            </button>
          </div>
        </div>
      </section>

      {/* Fabrication Highlights Section */}
      <section className="bg-[#eaeaea] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Fabrication Highlights
          </h3>

          <div className="space-y-12 sm:space-y-16 max-w-5xl mx-auto">
            {/* Modern Windows */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              <div className="text-center md:text-left">
                <h4 className="text-lg sm:text-xl font-semibold text-[#2563eb] mb-3">
                  Modern Windows
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base max-w-md mx-auto md:mx-0">
                  Precision-crafted aluminum windows for modern homes and
                  offices, designed to last and shine.
                </p>
              </div>
              <div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md max-w-sm md:ml-auto">
                  <img
                    src="https://res.cloudinary.com/dljjyowjo/image/upload/v1757677587/anthracite-grey-slimline-window-copy_dzw6cd.jpg"
                    alt="Modern aluminum windows"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Custom Doors */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              <div className="md:order-2 text-center md:text-left">
                <h4 className="text-lg sm:text-xl font-semibold text-[#2563eb] mb-3">
                  Custom Doors
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base max-w-md mx-auto md:mx-0">
                  Tailored aluminum doors built to fit any space, combining
                  elegance with strength.
                </p>
              </div>
              <div className="md:order-1">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md max-w-sm md:mr-auto">
                  <img
                    src="https://res.cloudinary.com/dljjyowjo/image/upload/v1757677872/20240821080427-19c4cc4f-5bbc-45f8-9a07-5c178bbb8684_blsf3j.jpg"
                    alt="Custom aluminum doors"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Aluminum Kitchen */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              <div className="text-center md:text-left">
                <h4 className="text-lg sm:text-xl font-semibold text-[#2563eb] mb-3">
                  Aluminum Kitchen
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base max-w-md mx-auto md:mx-0">
                  Elegant and modular aluminum kitchen setups combining
                  durability, hygiene, and modern aesthetics for both homes and
                  commercial use.
                </p>
              </div>
              <div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md max-w-sm md:ml-auto">
                  <img
                    src="https://res.cloudinary.com/dljjyowjo/image/upload/v1757678593/103_briegy.jpg"
                    alt="Aluminum kitchen"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <button className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 sm:px-12 py-2 sm:py-3 text-sm sm:text-base">
              Go to Fabrication
            </button>
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}

import hero from "../assets/1.jpg";
export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:`url(${hero})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center text-white">
        <p className="uppercase tracking-widest text-sm mb-3">
          Open Your Eyes To
        </p>

        <h1 className="text-6xl font-bold mb-2">SHANGRI LA</h1>

        <h2 className="text-4xl font-semibold">
          The hidden World
        </h2>

        <div className="flex gap-4 mt-8">
          <button className="bg-green-500 hover:bg-green-600 px-7 py-3 rounded-full font-semibold">
            Call Now
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 px-7 py-3 rounded-full font-semibold">
            WhatsApp
          </button>
        </div>
      </div>

      {/* Bottom Feature Bar */}
      <div className="absolute bottom-0 w-full bg-blue-500 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center py-6 font-medium">
          <div>50+ Destinations</div>
          <div>Best Price Guarantee</div>
          <div>Eco Friendly Tourism</div>
          <div>Super Fast Booking</div>
        </div>
      </div>
    </section>
  );
}

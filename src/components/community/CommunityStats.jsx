import Container from "../container/Container";

const CommunityStats = () => {
  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[#fff8f0] to-[#fff3e0] text-center overflow-hidden">
      {/* Background faded circle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-[600px] h-[600px] bg-amber-100 rounded-full opacity-20 filter blur-3xl"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff3e0, transparent 70%)",
            transform: "scale(1.2)",
          }}
        ></div>
      </div>

      {/* Content */}
      <Container>
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Section Title */}
          <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-3">
            Community Impact
          </h3>

          {/* Description */}
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-accent leading-relaxed max-w-4xl mx-auto md:mb-32 mb-16">
            ShareBite is transforming how communities share food. Together, we
            reduce waste, feed those in need, and inspire kindness every day.
            Join thousands of active users making a real difference.
          </p>

          {/* Metrics Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {/* Card 1: Total Meals Shared */}
            <div className="bg-amber-50 lg:p-8 md:p-4 rounded-3xl shadow-xl flex flex-col items-center justify-center min-h-[220px] hover:scale-105 transition-transform duration-500">
              <h4 className="text-5xl lg:text-6xl font-extrabold text-amber-600 mb-4">
                125K+
              </h4>
              <p className="text-sm uppercase tracking-wider font-medium text-amber-700 mb-4">
                Meals Shared
              </p>
              <p className="text-xs text-amber-800 max-w-[180px]">
                Over 15% growth from last month, feeding more families daily.
              </p>
            </div>

            {/* Card 2: Active Donors */}
            <div className="bg-amber-50 lg:p-8 md:p-4 rounded-3xl shadow-xl flex flex-col items-center justify-center min-h-[220px] hover:scale-105 transition-transform duration-500 md:-translate-y-20">
              <h4 className="text-5xl lg:text-6xl font-extrabold text-amber-600 mb-4">
                3.4K
              </h4>
              <p className="text-sm uppercase tracking-wider font-medium text-amber-700 mb-4">
                Active Donors
              </p>
              <p className="text-xs text-amber-800 max-w-[180px]">
                Users actively contributing to their local communities.
              </p>
            </div>

            {/* Card 3: Communities Served */}
            <div className="bg-amber-50 lg:p-8 md:p-4 rounded-3xl shadow-xl flex flex-col items-center justify-center min-h-[220px] hover:scale-105 transition-transform duration-500">
              <h4 className="text-5xl lg:text-6xl font-extrabold text-amber-600 mb-4">
                56+
              </h4>
              <p className="text-sm uppercase tracking-wider font-medium text-amber-700 mb-4">
                Communities Served
              </p>
              <p className="text-xs text-amber-800 max-w-[180px]">
                Our reach is growing weekly as more neighborhoods join the
                movement.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CommunityStats;

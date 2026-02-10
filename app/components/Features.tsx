const featuresData = [
  {
    icon: "/images/icon-snappy-process.svg",
    title: "Snappy Process",
    description:
      "Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms.",
  },
  {
    icon: "/images/icon-affordable-prices.svg",
    title: "Affordable Prices",
    description:
      "We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
  },
  {
    icon: "/images/icon-people-first.svg",
    title: "People First",
    description:
      "Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it.",
  },
];

const Features = () => {
  return (
    <section className="relative bg-gray-50 py-32 px-6 overflow-hidden">
      {/* Top-right decorative pattern */}
      <img
        src="/images/bg-pattern-intro-right-desktop.svg"
        alt=""
        className="absolute top-[-92] right-[-86] w-62 md:w-64"
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center md:text-left">
        {/* Heading with decorative line */}
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-20 before:content-[''] before:block before:w-32 before:h-px before:bg-purple-300 before:mb-12 before:mx-auto md:before:mx-0">
          We're different
        </h2>

        {/* Features grid */}

        <div className="grid md:grid-cols-3 gap-16 text-center">
          {featuresData.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-8">
                <img src={feature.icon} alt="" className="w-24" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

import React from "react";

const Hackathon= () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <HeroSection />
      <CategoryNavigation />
      <FeaturedEvent />
      <HackathonCards />
    </div>
  );
};

// Hero Section

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row mt-4 items-center bg-white p-6 rounded mb-10">
      <div className="flex-1 mb-6 md:mb-0">
        <h1 className="text-3xl font-bold mb-4">Empowering Innovation, One Event at a Time</h1>
        <p className="mb-4 text-gray-600">
          Join hackathons, coding challenges, and more to boost your skills and network with like-minded innovators.
        </p>
        <div className="space-x-2">
          <button className="px-6 py-2 bg-yellow-600 text-white rounded">Explore Events</button>
          <button className="px-6 py-2 border border-yellow-600 text-yellow-600 rounded">Host a Hackathon</button>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-64 flex items-center justify-center bg-gray-200 rounded">
        <span className="text-gray-700 font-semibold">Hero Visual</span>
      </div>
    </section>
  );
};

// Category Navigation
const CategoryNavigation = () => {
  const categories = [
    { name: "Competitions", icon: "🏆" },
    { name: "Hackathons", icon: "🖥" },
    { name: "Challenges", icon: "🎯" },
    { name: "Scholarships", icon: "🎓" },
    { name: "Workshops", icon: "🔬" },
    { name: "AI Projects", icon: "🚀" },
  ];

  return (
    <nav className="flex justify-around bg-white p-4 rounded mb-10">
      {categories.map((cat, index) => (
        <div key={index} className="flex items-center cursor-pointer transform hover:scale-105 transition">
          <span className="mr-2">{cat.icon}</span>
          <span>{cat.name}</span>
        </div>
      ))}
    </nav>
  );
};

// Featured Event
const FeaturedEvent = () => {
  return (
    <div className="relative mb-10">
      <div className="w-full h-48 flex items-center justify-center bg-gray-300 rounded">
        <span className="text-gray-800 font-semibold">Featured Event Visual</span>
      </div>
      <div className="absolute bottom-5 left-5 text-white">
        <h2 className="text-2xl font-bold">ETHSF Hackathon 2025</h2>
        <div className="flex gap-4 my-2">
          <span className="px-2 py-1 bg-green-600 rounded">Live</span>
          <span className="px-2 py-1 bg-black bg-opacity-50 rounded">Prize Pool: $250K</span>
          <span className="px-2 py-1 bg-black bg-opacity-50 rounded">+1K Participants</span>
        </div>
        <button className="px-4 py-2 bg-yellow-600 rounded font-bold">Register Now</button>
      </div>
    </div>
  );
};

// Event Card Component
const EventCard = ({ event }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">{event.name}</h3>
        <span
          className={`px-2 py-1 rounded text-sm ${
            event.status === "Live"
              ? "bg-green-600 text-white"
              : event.status === "Upcoming"
              ? "bg-yellow-600 text-white"
              : "bg-gray-600 text-white"
          }`}
        >
          {event.status}
        </span>
      </div>
      <p className="my-2">{event.theme}</p>
      <div className="flex justify-between text-sm text-gray-500 my-2">
        <span>{event.mode}</span>
        <span>{event.startDate}</span>
      </div>
      <div className="flex mb-2">
        {event.participants.map((_, index) => (
          <div
            key={index}
            className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center mr-1 text-white text-xs"
          >
            A{index + 1}
          </div>
        ))}
      </div>
      <button className="w-full py-2 bg-yellow-600 text-white rounded font-bold">Apply Now</button>
    </div>
  );
};

// Hackathon Cards Section
const HackathonCards = () => {
  const events = [
    {
      name: "HackTropica",
      status: "Live",
      theme: "Blockchain & Innovation",
      mode: "Online",
      startDate: "04/04/25",
      participants: [1, 2, 3],
    },
    {
      name: "Hack'O'Clock",
      status: "Upcoming",
      theme: "AI & Machine Learning",
      mode: "Hybrid",
      startDate: "05/05/25",
      participants: [1, 2],
    },
    {
      name: "CodeX",
      status: "Closed",
      theme: "Cybersecurity",
      mode: "Offline",
      startDate: "03/03/25",
      participants: [1],
    },
  ];

  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-5">Upcoming Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
      <button className="block mx-auto mt-5 px-4 py-2 bg-yellow-500 text-white rounded font-bold">
        View All Events ➔
      </button>
    </section>
  );
};

export default Hackathon;

import React from 'react';
import { ArrowUpRight, Eye, Users, Clock, ArrowRight } from 'lucide-react';

const Event = () => {
  const engageCards = [
    { id: '1', title: 'General & Case Competitions', icon: 'https://img.icons8.com/color/96/bar-chart.png', createLink: '/create/competition' },
    { id: '2', title: 'Innovation Challenges', icon: 'https://img.icons8.com/color/96/innovation.png', createLink: '/create/innovation' },
    { id: '3', title: 'Quizzes', icon: 'https://img.icons8.com/color/96/quiz.png', createLink: '/create/quiz' },
    { id: '4', title: 'Hackathons & Coding Challenges', icon: 'https://img.icons8.com/color/96/code.png', createLink: '/create/hackathon' }
  ];

  const hireCards = [
    { id: '5', title: 'Jobs', icon: 'https://img.icons8.com/color/96/briefcase.png', createLink: '/create/job' },
    { id: '6', title: 'Internships', icon: 'https://img.icons8.com/color/96/internship.png', createLink: '/create/internship' },
    { id: '7', title: 'Hiring Challenges', icon: 'https://img.icons8.com/color/96/test-passed.png', createLink: '/create/hiring-challenge' }
  ];

  const competitions = [
    { id: '1',
        title: 'Lawyerr.ai Case Study Challenge: Revolutionizing Legal Tech',
        organizer: 'Techhalo',
        logo: 'https://img.icons8.com/color/96/law.png',
        bannerImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
        type: 'Online',
        pricing: 'Free',
        views: 353,
        applicants: 6,
        daysLeft: 6,
        link: '#',
        bgColor: 'bg-purple-600' },

    { id: '2',
    title: 'InnoSpark 2025: National Level Ideathon',
    organizer: 'Saraswati College of Engineering, Kharghar',
    logo: 'https://img.icons8.com/color/96/idea.png',
    bannerImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
    type: 'Offline',
    pricing: 'Free',
    views: 245,
    applicants: 6,
    daysLeft: 11,
    link: '#',
    bgColor: 'bg-pink-600' },

    {
        id: '3',
    title: 'Techno Chill: Heat up Your Knowledge',
    organizer: 'National Engineering College, Kovilpatti',
    logo: 'https://img.icons8.com/color/96/technology.png',
    bannerImage: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=800',
    type: 'Offline',
    pricing: 'Paid',
    views: 965,
    applicants: 12,
    daysLeft: 4,
    link: '#',
    bgColor: 'bg-blue-600'

    }
  ];

  const CompetitionCard = ({ competition }) => (
    <div className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white">
      {/* Banner Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={competition.bannerImage} 
          alt={competition.title}
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${competition.bgColor} opacity-60`}></div>
        
        {/* Logo */}
        <div className="absolute -bottom-6 left-6">
          <div className="h-12 w-12 rounded-lg bg-white shadow-lg p-2 flex items-center justify-center">
            <img 
              src={competition.logo} 
              alt={competition.title}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Arrow Link */}
        <a 
          href={competition.link}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
        >
          <ArrowUpRight className="w-4 h-4 text-white" />
        </a>
      </div>

      {/* Content */}
      <div className="p-6 pt-8 space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
            {competition.title}
          </h3>
          <p className="text-gray-600 text-sm">
            {competition.organizer}
          </p>
        </div>

        {/* Tags */}
        <div className="flex gap-2">
          <span className={`px-3 py-1 text-sm ${competition.bgColor} text-white rounded-full`}>
            {competition.type}
          </span>
          <span className={`px-3 py-1 text-sm ${competition.bgColor} text-white rounded-full`}>
            {competition.pricing}
          </span>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 text-gray-600 text-sm pt-2">
          <div className="flex items-center gap-1">
            <Eye size={16} />
            <span>{competition.views.toLocaleString()} Views</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={16} />
            <span>{competition.applicants} Applied</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{competition.daysLeft} days left</span>
          </div>
        </div>
      </div>
    </div>
  );

  const OpportunityCard = ({ card }) => (
    <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-200">
      <div className="flex items-center space-x-4">
        <img src={card.icon} alt={card.title} className="w-12 h-12" />
        <div>
          <h3 className="text-lg font-semibold">{card.title}</h3>
        </div>
      </div>
      <a href={card.createLink} className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700">
        Create <ArrowRight className="ml-1 w-4 h-4" />
      </a>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Competitions</h2>
          <p className="text-gray-600 mt-1">Explore the Competitions that are creating a buzz among your peers!</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competitions.map(competition => <CompetitionCard key={competition.id} competition={competition} />)}
          </div>
        </div>
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6">For <span className="text-orange-500">Engaging</span> your target audience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {engageCards.map(card => <OpportunityCard key={card.id} card={card} />)}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-6">For <span className="text-blue-500">Hiring</span> the right talent</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hireCards.map(card => <OpportunityCard key={card.id} card={card} />)}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Event;

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
    { id: '1', title: 'Lawyerr.ai Case Study Challenge', organizer: 'Techhalo', logo: 'https://img.icons8.com/color/96/law.png', type: 'Online', pricing: 'Free', views: 353, applicants: 6, daysLeft: 6, link: '#', bgColor: 'bg-purple-600' },
    { id: '2', title: 'InnoSpark 2025: National Level Ideathon', organizer: 'Saraswati College', logo: 'https://img.icons8.com/color/96/idea.png', type: 'Offline', pricing: 'Free', views: 245, applicants: 6, daysLeft: 11, link: '#', bgColor: 'bg-pink-600' },
  ];

  const CompetitionCard = ({ competition }) => (
    <div className={`relative overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 ${competition.bgColor}`}>
      <div className="relative p-6 space-y-6">
        <div className="flex gap-2">
          <span className="px-3 py-1 text-sm bg-white/90 rounded-full">{competition.type}</span>
          <span className="px-3 py-1 text-sm bg-white/90 rounded-full">{competition.pricing}</span>
        </div>
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="h-12 w-12 rounded-lg bg-white/90 p-2 flex items-center justify-center">
              <img src={competition.logo} alt={competition.title} className="w-full h-full object-contain" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-1 line-clamp-2">{competition.title}</h3>
            <p className="text-white/80 text-sm">{competition.organizer}</p>
          </div>
          <div className="flex items-center gap-4 text-white/90 text-sm">
            <div className="flex items-center gap-1">
              <Eye size={16} /> <span>{competition.views.toLocaleString()} Views</span>
            </div>
            <div className="flex items-center gap-1">
              <Users size={16} /> <span>{competition.applicants} Applied</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={16} /> <span>{competition.daysLeft} days left</span>
            </div>
          </div>
        </div>
        <a href={competition.link} className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20">
          <ArrowUpRight className="w-4 h-4 text-white" />
        </a>
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

import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({ friend }) => {

    
  return (
    <Link to={`/friendsdetails/${friend.id}`} className="group border border-gray-100 p-6 rounded-2xl shadow-sm bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center">
      
      <div className="relative mb-4">
        <div className="w-24 h-24 rounded-full p-1 border-2 border-[#244D3F] overflow-hidden">
          <img 
            src={friend.picture} 
            alt={friend.name} 
            className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300" 
          />
        </div>

        <span className="absolute bottom-1 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
      </div>

      <h3 className="font-bold text-xl text-[#244D3F] mb-1">{friend.name}</h3>
      <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
        {friend.days}d ago
      </p>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {friend.tags.map((tag, index) => (
          <span 
            key={index} 
            className="px-3 py-1 bg-[#CBFADB] text-gray-600 text-xs rounded-full font-medium"
          >
            #{tag}
          </span>
        ))}
      </div>

     <button 
  className={`w-full py-2.5 text-white rounded-xl font-semibold text-sm transition-colors shadow-md active:scale-95 
    ${friend.status === 'overdue' ? 'bg-[#244D3F] hover:bg-[#1a3a2f]' : 
      friend.status === 'on-track' ? 'bg-[#EFAD44] hover:bg-[#d49635]' : 
      'bg-red-500 hover:bg-red-600'}`}
>
  {friend.status}
</button>
    </Link>
  );
};

export default FriendCard;
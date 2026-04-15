import React from "react";
import { useLoaderData, useParams } from "react-router";
import { 
  LuClock, LuPhone, LuMessageSquare, LuVideo, 
  LuBadgeCheck, LuHistory, LuBellOff, LuArchive, LuTrash2 
} from "react-icons/lu";
import { useFriends } from "../../FriendProvider/FriendProvider";

const FriendsDetails = () => {
  const { id } = useParams();
  const friends = useLoaderData();
  const { syncInteractions } = useFriends();

  // ডাটা খোঁজা
  const friend = friends.find((fnd) => fnd.id === parseInt(id));

  if (!friend) return <div className="p-20 text-center font-bold">Friend Not Found</div>;

  // সব ডাটা একসাথে ডিস্ট্রাকচার করা
  const { 
    name, 
    picture, 
    status, 
    bio, 
    recent_interactions = [], 
    days_since_contact = "0", 
    goal = "30", 
    next_due_date = "N/A",
    tags = [],
    preferred = "Not set"
  } = friend;

  const handleAction = (type) => {
    const filtered = recent_interactions.filter(item => item.type === type);
    syncInteractions(type, filtered);
    alert(`${type} data synced for ${name}`);
  };

  const statusMap = {
    'overdue': 'bg-rose-500',
    'on-track': 'bg-emerald-500',
    'almost due': 'bg-amber-500'
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-12 px-4 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
   
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 text-center relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-full h-2 ${statusMap[status?.toLowerCase()] || 'bg-slate-300'}`}></div>
            <img src={picture} alt={name} className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-slate-50 shadow-sm" />
            <h2 className="text-2xl font-black text-slate-800">{name}</h2>
            
            <div className="flex flex-col items-center gap-2 mt-4">
              <span className="px-4 py-1 rounded-full bg-rose-500 text-white text-[10px] font-bold uppercase tracking-wider">
                {status}
              </span>
              <span className="px-4 py-1 rounded-full bg-emerald-100 text-emerald-600 text-[10px] font-bold uppercase tracking-wider">
                {tags[0] || "FAMILY"}
              </span>
            </div>

            <p className="mt-8 text-slate-500 text-sm leading-relaxed italic">"{bio || "No bio available"}"</p>
            <p className="mt-2 text-slate-400 text-xs">Preferred: {preferred}</p>
          </div>

      
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-3 bg-white py-4 rounded-2xl shadow-sm border border-slate-100 font-bold text-slate-600 hover:bg-slate-50 transition-all">
              <LuBellOff size={18} /> Snooze 2 Weeks
            </button>
            <button className="w-full flex items-center justify-center gap-3 bg-white py-4 rounded-2xl shadow-sm border border-slate-100 font-bold text-slate-600 hover:bg-slate-50 transition-all">
              <LuArchive size={18} /> Archive
            </button>
            <button className="w-full flex items-center justify-center gap-3 bg-white py-4 rounded-2xl shadow-sm border border-slate-100 font-bold text-rose-500 hover:bg-rose-50 transition-all">
              <LuTrash2 size={18} /> Delete
            </button>
          </div>
        </div>

    
        <div className="lg:col-span-8 space-y-6">
          
          {/* Top Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
              <p className="text-4xl font-black text-slate-800">{days_since_contact}</p>
              <p className="text-slate-400 text-xs font-bold uppercase mt-2">Days Since Contact</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
              <p className="text-4xl font-black text-slate-800">{goal}</p>
              <p className="text-slate-400 text-xs font-bold uppercase mt-2">Goal (Days)</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
              <p className="text-xl font-black text-slate-800 mt-2">{next_due_date}</p>
              <p className="text-slate-400 text-xs font-bold uppercase mt-3">Next Due</p>
            </div>
          </div>

          {/* Goal Section */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex justify-between items-center">
            <div>
              <h4 className="font-bold text-slate-800">Relationship Goal</h4>
              <p className="text-slate-500 text-sm">Connect every <span className="font-bold text-slate-900">{goal} days</span></p>
            </div>
            <button className="bg-slate-50 hover:bg-slate-100 border border-slate-200 px-4 py-2 rounded-lg text-xs font-bold text-slate-600 transition-colors">
              Edit
            </button>
          </div>

       
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold mb-6 text-slate-800">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-4">
              <button onClick={() => handleAction('Call')} className="flex flex-col items-center gap-3 bg-slate-50 p-6 rounded-2xl hover:bg-blue-50 transition-all border border-transparent hover:border-blue-100 group">
                <LuPhone className="text-2xl text-slate-600 group-hover:text-blue-600" />
                <span className="font-bold text-[10px] uppercase tracking-wider text-slate-400 group-hover:text-blue-600">Call</span>
              </button>
              <button onClick={() => handleAction('Text')} className="flex flex-col items-center gap-3 bg-slate-50 p-6 rounded-2xl hover:bg-emerald-50 transition-all border border-transparent hover:border-emerald-100 group">
                <LuMessageSquare className="text-2xl text-slate-600 group-hover:text-emerald-600" />
                <span className="font-bold text-[10px] uppercase tracking-wider text-slate-400 group-hover:text-emerald-600">Text</span>
              </button>
              <button onClick={() => handleAction('Video')} className="flex flex-col items-center gap-3 bg-slate-50 p-6 rounded-2xl hover:bg-purple-50 transition-all border border-transparent hover:border-purple-100 group">
                <LuVideo className="text-2xl text-slate-600 group-hover:text-purple-600" />
                <span className="font-bold text-[10px] uppercase tracking-wider text-slate-400 group-hover:text-purple-600">Video</span>
              </button>
            </div>
          </div>

  
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-slate-800">Recent Interactions</h3>
              <button className="flex items-center gap-2 text-[10px] font-bold bg-slate-100 px-3 py-1.5 rounded-lg text-slate-500 hover:bg-slate-200 uppercase tracking-widest transition-colors">
                <LuHistory /> Full History
              </button>
            </div>
            
            <div className="space-y-4">
              {recent_interactions.length > 0 ? (
                recent_interactions.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-slate-50 rounded-xl text-slate-400 group-hover:bg-white group-hover:text-indigo-500 shadow-sm transition-all">
                        {item.type === 'Call' ? <LuPhone /> : item.type === 'Text' ? <LuMessageSquare /> : <LuVideo />}
                      </div>
                      <div>
                        <p className="font-bold text-sm text-slate-800">{item.type}</p>
                        <p className="text-xs text-slate-400">{item.note || "No specific notes"}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{item.date}</span>
                  </div>
                ))
              ) : (
                <p className="text-center text-slate-400 py-4 italic">No recent interactions recorded.</p>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FriendsDetails;
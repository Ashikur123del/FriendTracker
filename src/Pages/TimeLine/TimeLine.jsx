import React from 'react';
import { useFriends } from '../../FriendProvider/FriendProvider';
import { LuPhone, LuMessageSquare, LuVideo, LuLayers } from "react-icons/lu";

const Timeline = () => {
  const { callLogs, textLogs, videoLogs } = useFriends();

  const CategoryBox = ({ title, icon: Icon, data, colorClass, textColor }) => (
    <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${colorClass}`}>
        <Icon size={22} />
      </div>
      <h3 className="text-lg font-black text-slate-800 mb-6">{title}</h3>
      
      <div className="space-y-4">
        {data.length > 0 ? data.map((item, i) => (
          <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
            <p className="text-sm font-bold text-slate-700 leading-tight mb-3">{item.note}</p>
            <span className="text-[9px] font-black uppercase text-slate-400 tracking-widest">{item.date}</span>
          </div>
        )) : (
          <div className="py-10 text-center border-2 border-dashed border-slate-50 rounded-2xl text-slate-300 text-[10px] uppercase font-bold">
            No Sync Data
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-16 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center gap-5 mb-14">
          <div className="p-4 bg-indigo-600 rounded-[1.5rem] text-white shadow-xl shadow-indigo-100">
            <LuLayers size={28} />
          </div>
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Global Dashboard</h1>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Real-time interaction sync</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CategoryBox 
            title="Call Logs" 
            icon={LuPhone} 
            data={callLogs} 
            colorClass="bg-blue-50 text-blue-500" 
          />
          <CategoryBox 
            title="Text Logs" 
            icon={LuMessageSquare} 
            data={textLogs} 
            colorClass="bg-emerald-50 text-emerald-500" 
          />
          <CategoryBox 
            title="Video Logs" 
            icon={LuVideo} 
            data={videoLogs} 
            colorClass="bg-purple-50 text-purple-500" 
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
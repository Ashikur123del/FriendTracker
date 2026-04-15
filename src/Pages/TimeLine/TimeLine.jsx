import React, { useState } from "react";
import { useFriends } from "../../Components/Context/FriendProvider/FriendProvider";
import {
  LuPhone,
  LuMessageSquare,
  LuVideo,
  LuHandshake,
  LuChevronDown,
} from "react-icons/lu";

const Timeline = () => {
  const { callLogs, textLogs, videoLogs } = useFriends();
  const [activeFilter, setActiveFilter] = useState("All");

  const allLogs = [
    ...callLogs.map((item) => ({ ...item, type: "Call" })),
    ...textLogs.map((item) => ({ ...item, type: "Text" })),
    ...videoLogs.map((item) => ({ ...item, type: "Video" })),
  ];

  const filteredActivities =
    activeFilter === "All"
      ? allLogs
      : allLogs.filter((activity) => activity.type === activeFilter);
  const iconMap = {
    Call: <LuPhone className="text-slate-600" size={24} />,
    Text: <LuMessageSquare className="text-slate-600" size={24} />,
    Video: <LuVideo className="text-slate-600" size={24} />,
    Meetup: <LuHandshake className="text-amber-500" size={24} />,
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-12 px-6 font-sans">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-[#1E293B] mb-10 tracking-tight">
          Timeline
        </h1>
        <div className="relative w-full max-w-[280px] mb-10">
          <select
            value={activeFilter}
            onChange={(e) => setActiveFilter(e.target.value)}
            className="w-full appearance-none bg-white border border-slate-200 text-slate-500 py-3.5 px-5 pr-12 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/10 transition-all cursor-pointer font-medium"
          >
            <option value="All">Filter timeline (All)</option>
            <option value="Call">Calls</option>
            <option value="Text">Texts</option>
            <option value="Video">Videos</option>
            <option value="Meetup">Meetups</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400 border-l border-slate-100 my-2">
            <LuChevronDown size={18} />
          </div>
        </div>

        <div className="space-y-4">
          {filteredActivities.length > 0 ? (
            filteredActivities.map((activity, index) => (
              <div
                key={index}
                className="group bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-center gap-6 animate-in fade-in slide-in-from-bottom-2 duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-slate-50 group-hover:bg-white transition-colors">
                  {iconMap[activity.type] || <LuMessageSquare />}
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-medium text-slate-500">
                    <span className="font-bold text-slate-800">
                      {activity.type}
                    </span>
                    {activity.note
                      ? ` - ${activity.note}`
                      : " Activity recorded"}
                  </h3>
                  <p className="text-slate-400 text-sm mt-1">{activity.date}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-slate-200 shadow-sm">
              <p className="text-slate-400 font-medium italic">
                No sync data available. Click "Sync" from Friend Details to see
                updates.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;

import React from 'react';
import { useFriends } from '../../FriendProvider/FriendProvider';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from 'recharts';

const FriendshipAnalytics = () => {
  // আগের Context থেকে ডেটা নেওয়া
  const { callLogs, textLogs, videoLogs } = useFriends();

  // প্রতি ক্যাটাগরির ডেটা কাউন্ট করা (যদি ১ বা তার বেশি ডেটা থাকে তবে সুবিধা হয়)
  const totalCalls = callLogs.length;
  const totalTexts = textLogs.length;
  const totalVideos = videoLogs.length;

  // Recharts এর জন্য ডেটা ফরম্যাট করা
  // এখানে background ফিল্ড দিয়ে ইমেজের মতো গ্রে সার্কেলগুলো দেওয়া হয়েছে
  const chartData = [
    {
      name: 'Call',
      count: totalCalls || 1, // ডাটা না থাকলে ১ দেওয়া হচ্ছে ডেমো হিসেবে
      fill: '#1E4631', // ডার্ক গ্রিন কালার
      background: { fill: '#F1F5F9' }, 
    },
    {
      name: 'Text',
      count: totalTexts || 1,
      fill: '#9333EA', // পার্পল কালার
      background: { fill: '#F1F5F9' },
    },
    {
      name: 'Video',
      count: totalVideos || 1,
      fill: '#4ade80', // হালকা গ্রিন কালার
      background: { fill: '#F1F5F9' },
    },
  ];

  // ক্যাস্টম লেজেন্ড কম্পোনেন্ট (ইমেজের মত)
  const renderCustomLegend = (props) => {
    const { payload } = props;
    return (
      <div className="flex justify-center items-center gap-6 mt-6">
        {payload.map((entry, index) => (
          <div key={`item-${index}`} className="flex items-center gap-2">
            <div className={`w-2.5 h-2.5 rounded-full`} style={{ backgroundColor: entry.color }} />
            <span className="text-[10px] font-medium text-slate-400 tracking-wider">
              {entry.value}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-12 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-[#1E293B] mb-8 tracking-tighter">
          Friendship Analytics
        </h1>

        {/* Chart Card */}
        <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100 flex flex-col animate-in fade-in slide-in-from-bottom-3">
          
          <h3 className="text-lg font-bold text-emerald-900/80 mb-2">
            By Interaction Type
          </h3>

          {/* Recharts Container */}
          <div className="w-full h-[400px] flex justify-center items-center relative">
            
            {/* যদি কোনো ডেটা সিঙ্ক করা না থাকে */}
            {(totalCalls === 0 && totalTexts === 0 && totalVideos === 0) ? (
              <div className="text-center text-slate-400 py-10 italic bg-slate-50 rounded-2xl w-full border border-dashed border-slate-100">
                Sync data to see interaction breakdown
              </div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart 
                  cx="50%" 
                  cy="50%" 
                  innerRadius="40%" 
                  outerRadius="80%" 
                  barSize={10} 
                  data={chartData}
                  startAngle={90} // টপ থেকে শুরু করার জন্য
                  endAngle={450}
                >
                  {/* গ্রাফের ভ্যালু অনুযায়ী অ্যাঙ্গেল */}
                  <PolarAngleAxis type="number" domain={[0, totalCalls + totalTexts + totalVideos]} angleAxisId={0} tick={false} />
                  
                  {/* গ্রাফ বার */}
                  <RadialBar
                    minAngle={15}
                    label={false}
                    background
                    clockWise
                    dataKey="count"
                    cornerRadius={10} // রাউন্ডেড কর্নার
                  />
                  
                  {/* ক্যাস্টম লেজেন্ড */}
                  <Legend 
                    content={renderCustomLegend} 
                    iconType="circle" 
                    verticalAlign="bottom" 
                  />
                </RadialBarChart>
              </ResponsiveContainer>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FriendshipAnalytics;
import React from 'react';
import { useFriends } from '../Context/FriendProvider/FriendProvider';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from 'recharts';

const FriendshipAnalytics = () => {
  const { callLogs, textLogs, videoLogs } = useFriends();
  
  const totalCalls = callLogs?.length || 0;
  const totalTexts = textLogs?.length || 0;
  const totalVideos = videoLogs?.length || 0;
  const totalCombined = totalCalls + totalTexts + totalVideos;

  const chartData = [
    {
      name: 'Call',
      count: totalCalls, 
      fill: '#1E4631', 
    },
    {
      name: 'Text',
      count: totalTexts,
      fill: '#9333EA', 
    },
    {
      name: 'Video',
      count: totalVideos,
      fill: '#4ade80', 
    },
  ];

  const renderCustomLegend = (props) => {
    const { payload } = props;
    return (
      <div className="flex justify-center items-center gap-6 mt-8">
        {payload.map((entry, index) => (
          <div key={`item-${index}`} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">
                {entry.value}
              </span>
              <span className="text-sm font-bold text-slate-700">{entry.payload.count}</span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-12 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-black text-[#1E293B] mb-8 tracking-tighter">
          Friendship Analytics
        </h1>

        <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100 animate-in fade-in slide-in-from-bottom-3">
          <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-8">
            By Interaction Type
          </h3>

          <div className="w-full h-[400px] flex justify-center items-center">
            {totalCombined === 0 ? (
              <div className="text-center">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-dashed border-slate-200">
                   <div className="w-10 h-10 bg-slate-100 rounded-full animate-pulse" />
                </div>
                <p className="text-slate-400 font-bold italic">Sync data to see interaction breakdown</p>
              </div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart 
                  innerRadius="30%" 
                  outerRadius="100%" 
                  barSize={15} 
                  data={chartData}
                  startAngle={90} 
                  endAngle={450}
                >
                  <PolarAngleAxis 
                    type="number" 
                    domain={[0, Math.max(totalCalls, totalTexts, totalVideos) + 2]} 
                    tick={false} 
                  />
                  
                  <RadialBar
                    background={{ fill: '#F8FAFC' }}
                    clockWise
                    dataKey="count"
                    cornerRadius={15}
                  />
                
                  <Legend 
                    content={renderCustomLegend} 
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
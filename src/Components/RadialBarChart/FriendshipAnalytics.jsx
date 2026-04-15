import React from 'react';
import { useFriends } from '../Context/FriendProvider/FriendProvider';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from 'recharts';

const FriendshipAnalytics = () => {
  const { callLogs, textLogs, videoLogs } = useFriends();
  const totalCalls = callLogs.length;
  const totalTexts = textLogs.length;
  const totalVideos = videoLogs.length;


  const chartData = [
    {
      name: 'Call',
      count: totalCalls || 1, 
      fill: '#1E4631', 
      background: { fill: '#F1F5F9' }, 
    },
    {
      name: 'Text',
      count: totalTexts || 1,
      fill: '#9333EA', 
      background: { fill: '#F1F5F9' },
    },
    {
      name: 'Video',
      count: totalVideos || 1,
      fill: '#4ade80', 
      background: { fill: '#F1F5F9' },
    },
  ];


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
        <h1 className="text-4xl font-extrabold text-[#1E293B] mb-8 tracking-tighter">
          Friendship Analytics
        </h1>
        <div className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100 flex flex-col animate-in fade-in slide-in-from-bottom-3">
          
          <h3 className="text-lg font-bold text-emerald-900/80 mb-2">
            By Interaction Type
          </h3>

          <div className="w-full h-[400px] flex justify-center items-center relative">
        
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
                  startAngle={90} 
                  endAngle={450}
                >
                  <PolarAngleAxis type="number" domain={[0, totalCalls + totalTexts + totalVideos]} angleAxisId={0} tick={false} />
                  
   
                  <RadialBar
                    minAngle={15}
                    label={false}
                    background
                    clockWise
                    dataKey="count"
                    cornerRadius={10} 
                  />
                
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
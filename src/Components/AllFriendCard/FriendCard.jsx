import React, { use } from 'react'
import FriendCard from '../../Ui/FriendCard';


const friendPromise = fetch('/friendsData.json').then(res => res.json());

const FriendCards = () => {
  
    const friends = use(friendPromise);

    return (
        <div className='py-6 md:py-8 bg-[#f8fafc]'>
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-2xl font-bold mb-6">All Friends</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {friends?.map(friend => (
                        <FriendCard friend={friend} key={friend.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FriendCards;
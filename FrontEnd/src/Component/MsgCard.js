import React from 'react'

const defaultProfilePicture = './DefaultClient.png';

const MsgCard = ({ sender, profilePicture, content, time}) => {
    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-4">
            <div className="p-4">
                <div className="flex items-center">
                    <img
                    src={profilePicture || defaultProfilePicture}
                    alt="Sender Profile"
                        className="w-12 h-12 rounded-full border-2 border-white mr-3"
                    />
                    <div>
                        <h3 className="font-semibold text-lg">{sender}</h3>
                        <p className="text-gray-700 mt-2">{content}</p>
                        <div className="text-right text-xs text-gray-500 mt-2">{time}</div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default MsgCard

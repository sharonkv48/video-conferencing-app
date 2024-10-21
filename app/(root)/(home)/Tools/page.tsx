"use client";

import React from 'react';

const Page = () => {
    const openInNewTab = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
            <button
                onClick={() => openInNewTab('https://whiteboard-react-lac.vercel.app/')}
                className="bg-blue-500 text-white p-2 rounded"
            >
                Whiteboard
            </button>
            <button
                onClick={() => openInNewTab('https://videosummarizerfsd.vercel.app/')}
                className="bg-red-500 text-white p-2 rounded"
            >
                Summarizer
            </button>
        </div>
    );
};

export default Page;

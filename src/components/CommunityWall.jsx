import React from 'react';
import { COMMUNITY_POSTS as FALLBACK_POSTS } from '../data/sportsData';

export default function CommunityWall({ sportsCatalog }) {
  const posts = sportsCatalog?.communityPosts || FALLBACK_POSTS;

  return (
    <section id="community" className="w-full py-16 px-2 sm:px-4 md:px-6 relative z-20 font-body">
      
      {/* Section Header */}
      <div className="mb-8">
        <span className="text-[11px] font-medium text-[#999999] tracking-wide block mb-2 font-heading">
          Community
        </span>
        <h2 className="font-display font-normal text-3xl sm:text-4xl lg:text-[42px] text-[#1A1A1A] tracking-tight leading-tight">
          Worn across Nepal
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {posts.map((post, idx) => (
          <div 
            key={post.id || idx}
            className="bg-white rounded-2xl p-4 border border-black/[0.06] flex flex-col justify-between select-none"
          >
            <div>
              {/* Photo */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#F7F7F5] mb-3.5">
                <img 
                  src={post.image} 
                  alt={post.kit || post.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="text-[11px] font-medium text-[#999999] uppercase tracking-wide block font-heading mb-1 truncate">
                {post.kit}
              </span>

              <p className="text-[12px] text-[#555555] leading-relaxed mb-4">
                "{post.review}"
              </p>
            </div>

            {/* Author / Location Footer */}
            <div className="pt-3 border-t border-black/[0.04] flex items-center justify-between text-[11px] font-heading">
              <span className="font-medium text-[#1A1A1A]">{post.name}</span>
              <span className="text-[#888888]">{post.location}</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

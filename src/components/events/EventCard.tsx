
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  LocationIcon,
  PriceIcon,
  TrendingIcon,
  ShareIcon,
  HeartIcon,
} from "@/components/icons";
import { useUser } from "@/context/UserContext";
import { Event } from "@/types/event";

interface EventCardProps {
  event: Event;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const navigate = useNavigate();
  const { attendEvent, shareEvent, isAttending, hasShared } = useUser();
  const { id, image, title, day, location, price, tags, isTrending, pointsForAttending, pointsForSharing } = event;
  
  const attending = isAttending(id);
  const shared = hasShared(id);

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    shareEvent(id);
    navigate("/share");
  };

  const handleAttend = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    attendEvent(id);
  };

  return (
    <Link to={`/event/${id}`} className="block">
      <article className="bg-[#FEFFEC] p-[15px] rounded-lg border-[3px] border-[#BF8FF3] overflow-hidden">
        <div className="flex gap-[15px]">
          <img
            src={image}
            alt={title}
            className="w-[111px] h-[126px] rounded-[8px] border-[1px] border-[rgba(0,0,0,0.5)] object-cover flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start gap-2">
              <h3 className="text-base font-bold text-[#2A3F65] line-clamp-2">{title}</h3>
              <span className="text-sm whitespace-nowrap">{day}</span>
            </div>

            <div className="flex items-center gap-2 mt-2.5 overflow-hidden">
              <LocationIcon className="flex-shrink-0" />
              <span className="text-[10px] truncate">{location}</span>
            </div>

            <div className="flex items-center gap-2 mt-2.5 overflow-hidden">
              <PriceIcon className="flex-shrink-0" />
              <span className="text-[10px] truncate">{price}</span>
            </div>

            <div className="flex gap-[7px] mt-2.5 flex-wrap">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-white text-[9px] px-2.5 py-0.5 rounded-lg whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>

            {isTrending && (
              <div className="flex items-center gap-2 mt-2.5">
                <TrendingIcon className="flex-shrink-0" />
                <span className="text-[10px] text-[#E0A000]">Trending Now</span>
              </div>
            )}

            <div className="flex items-center justify-between mt-2.5">
              <div className="flex gap-2">
                <button 
                  type="button" 
                  aria-label="Share" 
                  onClick={handleShare}
                  className={`flex items-center justify-center ${shared ? 'bg-sunset-pink/30' : ''} p-1 rounded-full h-8 w-[60px]`}
                >
                  <ShareIcon />
                  <span className="text-[8px] ml-1">+{pointsForSharing}pts</span>
                </button>
                <button 
                  type="button" 
                  aria-label="Attend" 
                  onClick={handleAttend}
                  className={`flex items-center justify-center ${attending ? 'bg-sunset-orange/30' : ''} p-1 rounded-full h-8 w-[60px]`}
                >
                  <HeartIcon />
                  <span className="text-[8px] ml-1">+{pointsForAttending}pts</span>
                </button>
              </div>
              {attending && (
                <span className="text-[10px] bg-sunset-orange/20 px-2 py-0.5 rounded text-sunset-orange">Attending</span>
              )}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

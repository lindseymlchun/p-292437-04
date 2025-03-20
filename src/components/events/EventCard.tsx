import React from "react";
import {
  LocationIcon,
  PriceIcon,
  TrendingIcon,
  ShareIcon,
  HeartIcon,
} from "@/components/icons";

interface EventCardProps {
  image: string;
  title: string;
  day: string;
  location: string;
  price: string;
  tags: string[];
  isTrending?: boolean;
}

export const EventCard: React.FC<EventCardProps> = ({
  image,
  title,
  day,
  location,
  price,
  tags,
  isTrending = false,
}) => {
  return (
    <article className="bg-[#FEFFEC] p-[15px] rounded-lg border-[3px] border-[#BF8FF3]">
      <div className="flex gap-[15px]">
        <img
          src={image}
          alt={title}
          className="w-[111px] h-[126px] rounded-[8px] border-[1px] border-[rgba(0,0,0,0.5)] object-cover"
        />
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="text-base font-bold text-[#2A3F65]">{title}</h3>
            <span className="text-sm">{day}</span>
          </div>

          <div className="flex items-center gap-2 mt-2.5">
            <LocationIcon />
            <span className="text-[10px]">{location}</span>
          </div>

          <div className="flex items-center gap-2 mt-2.5">
            <PriceIcon />
            <span className="text-[10px]">{price}</span>
          </div>

          <div className="flex gap-[7px] mt-2.5">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-white text-[9px] px-2.5 py-0.5 rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>

          {isTrending && (
            <div className="flex items-center gap-2 mt-2.5">
              <TrendingIcon />
              <span className="text-[10px] text-[#E0A000]">Trending Now</span>
            </div>
          )}

          <div className="flex gap-2 mt-2.5">
            <button type="button" aria-label="Share">
              <ShareIcon />
            </button>
            <button type="button" aria-label="Like">
              <HeartIcon />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

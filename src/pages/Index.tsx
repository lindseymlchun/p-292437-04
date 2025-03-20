import React from "react";
import { SearchBar } from "@/components/events/SearchBar";
import { EventCard } from "@/components/events/EventCard";
import { BottomNav } from "@/components/navigation/BottomNav";

const Index = () => {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  return (
    <div className="w-full min-h-screen bg-[radial-gradient(50%_50%_at_50%_50%,#C997D6_0%,#FF8DAF_30%,#EEC48F_75%,#FFF9C1_100%)]">
      <div className="flex flex-col items-center w-full pb-16">
        <header className="text-[#303030] text-[55px] text-center w-full bg-[#FEFFEC] py-5">
          Joople
        </header>

        <h1 className="text-3xl font-bold text-center mt-[15px] mb-5">
          Events
        </h1>

        <SearchBar onSearch={handleSearch} />

        <main className="flex flex-col gap-5 max-w-[720px] mt-5 mx-auto px-5">
          <EventCard
            image="https://cdn.builder.io/api/v1/image/assets/TEMP/288dbdc714a7e93fe363d9c945a225909d1394af"
            title="Sullivan King"
            day="Friday"
            location="Bill Graham, SF"
            price="~$70"
            tags={["Music", "Fun", "Concerts"]}
            isTrending={true}
          />

          <EventCard
            image="https://cdn.builder.io/api/v1/image/assets/TEMP/7a10ba009af630702236d73a8dead1f6dffa0763"
            title="Stanford + Princeton + Yale Mixer for Singles"
            day="Friday"
            location="San Francisco"
            price="~$25"
            tags={["Music", "Fun", "Random"]}
            isTrending={true}
          />

          <EventCard
            image="https://cdn.builder.io/api/v1/image/assets/TEMP/858448d2a17d4bc8f8f38a5afeea2b07566365bf"
            title="San Francisco St. Patrick's Day"
            day="Saturday"
            location="San Francisco"
            price="~$25"
            tags={["Bars", "Drinks", "Friends"]}
            isTrending={true}
          />
        </main>
      </div>

      <BottomNav />
    </div>
  );
};

export default Index;

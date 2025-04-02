
import { User } from "../types/user";
import { Event } from "../types/event";

export const currentUser: User = {
  id: "user-1",
  name: "Alex Johnson",
  avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/7c08104f3821c2a87c64034cdeb328499f50de28",
  email: "alex@example.com",
  graduationYear: 2023,
  university: "Stanford University",
  points: 450,
  friends: [
    {
      id: "user-2",
      name: "Taylor Swift",
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/2121a9ce94e3a43b9e6b48847c75e4dacd0e8b7e",
      points: 780,
    },
    {
      id: "user-3",
      name: "Jordan Lee",
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/665807209513b8844334af2281e226ceaa3fcf1d",
      points: 320,
    },
    {
      id: "user-4",
      name: "Casey Kim",
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/9816c9d930bbcbdb130596d31bd3cecf9745e118",
      points: 600,
    }
  ],
  attendedEvents: ["event-1", "event-3"],
  sharedEvents: ["event-1"],
};

export const mockEvents: Event[] = [
  {
    id: "event-1",
    title: "Sullivan King",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/288dbdc714a7e93fe363d9c945a225909d1394af",
    day: "Friday",
    date: "Mar 15",
    time: "8:00 PM",
    location: "Bill Graham, SF",
    price: "~$70",
    tags: ["Music", "Fun", "Concerts"],
    isTrending: true,
    attendees: 45,
    pointsForAttending: 100,
    pointsForSharing: 50
  },
  {
    id: "event-2",
    title: "Stanford + Princeton + Yale Mixer for Singles",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/7a10ba009af630702236d73a8dead1f6dffa0763",
    day: "Friday",
    date: "Mar 15",
    time: "7:00 PM",
    location: "San Francisco",
    price: "~$25",
    tags: ["Music", "Fun", "Random"],
    isTrending: true,
    attendees: 78,
    pointsForAttending: 80,
    pointsForSharing: 40
  },
  {
    id: "event-3",
    title: "San Francisco St. Patrick's Day",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/858448d2a17d4bc8f8f38a5afeea2b07566365bf",
    day: "Saturday",
    date: "Mar 16",
    time: "12:00 PM",
    location: "San Francisco",
    price: "~$25",
    tags: ["Bars", "Drinks", "Friends"],
    isTrending: true,
    attendees: 120,
    pointsForAttending: 75,
    pointsForSharing: 30
  },
  {
    id: "event-4",
    title: "New Grad Tech Networking",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/53d46f6ab54003d84df02090336fd143909b6321",
    day: "Tuesday",
    date: "Mar 19",
    time: "6:30 PM",
    location: "Palo Alto",
    price: "Free",
    tags: ["Networking", "Tech", "Career"],
    isTrending: false,
    attendees: 35,
    pointsForAttending: 150,
    pointsForSharing: 60
  }
];

export const getAllFriends = (): User[] => {
  return [
    currentUser,
    {
      id: "user-2",
      name: "Taylor Swift",
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/2121a9ce94e3a43b9e6b48847c75e4dacd0e8b7e",
      email: "taylor@example.com",
      graduationYear: 2023,
      university: "Princeton University",
      points: 780,
      friends: [],
      attendedEvents: ["event-1", "event-2", "event-3"],
      sharedEvents: ["event-1", "event-2"],
    },
    {
      id: "user-3",
      name: "Jordan Lee",
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/665807209513b8844334af2281e226ceaa3fcf1d",
      email: "jordan@example.com",
      graduationYear: 2023,
      university: "Yale University",
      points: 320,
      friends: [],
      attendedEvents: ["event-2"],
      sharedEvents: ["event-2"],
    },
    {
      id: "user-4",
      name: "Casey Kim",
      avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/9816c9d930bbcbdb130596d31bd3cecf9745e118",
      email: "casey@example.com",
      graduationYear: 2022,
      university: "Harvard University",
      points: 600,
      friends: [],
      attendedEvents: ["event-1", "event-4"],
      sharedEvents: ["event-1", "event-4"],
    }
  ];
};

export const getFriendLeaderboard = () => {
  return getAllFriends().sort((a, b) => b.points - a.points);
};

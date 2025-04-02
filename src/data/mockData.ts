
import { User } from "../types/user";
import { Event } from "../types/event";

// Fixed avatar URLs
const avatars = {
  alex: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  taylor: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
  jordan: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  casey: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
};

export const currentUser: User = {
  id: "user-1",
  name: "Alex Johnson",
  avatar: avatars.alex,
  email: "alex@example.com",
  graduationYear: 2023,
  university: "Stanford University",
  points: 450,
  friends: [
    {
      id: "user-2",
      name: "Taylor Swift",
      avatar: avatars.taylor,
      points: 780,
    },
    {
      id: "user-3",
      name: "Jordan Lee",
      avatar: avatars.jordan,
      points: 320,
    },
    {
      id: "user-4",
      name: "Casey Kim",
      avatar: avatars.casey,
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
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
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
      avatar: avatars.taylor,
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
      avatar: avatars.jordan,
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
      avatar: avatars.casey,
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

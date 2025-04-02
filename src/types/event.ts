
export interface Event {
  id: string;
  title: string;
  image: string;
  day: string;
  date: string;
  time: string;
  location: string;
  price: string;
  tags: string[];
  isTrending: boolean;
  attendees: number;
  pointsForAttending: number;
  pointsForSharing: number;
}

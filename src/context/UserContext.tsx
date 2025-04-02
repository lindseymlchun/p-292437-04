
import React, { createContext, useContext, useState, ReactNode } from "react";
import { User } from "../types/user";
import { Event } from "../types/event";
import { currentUser, mockEvents } from "../data/mockData";
import { toast } from "sonner";

interface UserContextType {
  user: User;
  events: Event[];
  attendEvent: (eventId: string) => void;
  shareEvent: (eventId: string) => void;
  isAttending: (eventId: string) => boolean;
  hasShared: (eventId: string) => boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(currentUser);
  const [events, setEvents] = useState<Event[]>(mockEvents);

  const attendEvent = (eventId: string) => {
    if (user.attendedEvents.includes(eventId)) {
      toast.info("You've already marked this event as attending.");
      return;
    }

    const event = events.find(e => e.id === eventId);
    if (!event) return;

    const newPoints = user.points + event.pointsForAttending;
    
    setUser({
      ...user,
      points: newPoints,
      attendedEvents: [...user.attendedEvents, eventId]
    });

    toast.success(`Earned ${event.pointsForAttending} points for attending!`);
  };

  const shareEvent = (eventId: string) => {
    if (user.sharedEvents.includes(eventId)) {
      toast.info("You've already shared this event.");
      return;
    }

    const event = events.find(e => e.id === eventId);
    if (!event) return;

    const newPoints = user.points + event.pointsForSharing;
    
    setUser({
      ...user,
      points: newPoints,
      sharedEvents: [...user.sharedEvents, eventId]
    });

    toast.success(`Earned ${event.pointsForSharing} points for sharing!`);
  };

  const isAttending = (eventId: string) => {
    return user.attendedEvents.includes(eventId);
  };

  const hasShared = (eventId: string) => {
    return user.sharedEvents.includes(eventId);
  };

  return (
    <UserContext.Provider 
      value={{ 
        user, 
        events, 
        attendEvent, 
        shareEvent, 
        isAttending, 
        hasShared 
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

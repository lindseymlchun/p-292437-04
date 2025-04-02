
import React from "react";
import { BottomNav } from "@/components/navigation/BottomNav";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useUser } from "@/context/UserContext";
import { toast } from "sonner";

const Share = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  
  const handleShare = (platform: string) => {
    toast.success(`Shared with ${platform}!`, {
      duration: 3000,
      dismissible: true
    });
    setTimeout(() => navigate("/"), 1500);
  };

  return (
    <div className="w-full min-h-screen bg-[radial-gradient(50%_50%_at_50%_50%,#C997D6_0%,#FF8DAF_30%,#EEC48F_75%,#FFF9C1_100%)]">
      <div className="flex flex-col items-center w-full pb-24">
        <header className="text-[#303030] text-[55px] text-center w-full bg-[#FEFFEC] py-5">
          <span className="bg-gradient-to-r from-sunset-pink via-sunset-orange to-sunset-yellow bg-clip-text text-transparent">
            Joople
          </span>
        </header>

        <div className="bg-sunset-pink/20 w-full py-2 text-center">
          <h1 className="text-xl font-bold text-sunset-pink">
            Share With Friends
          </h1>
        </div>

        <div className="w-full max-w-md mx-auto mt-8 px-4">
          <div className="bg-[#FEFFEC] rounded-lg p-6">
            <h2 className="text-lg font-bold mb-4">Share this event on:</h2>
            
            <div className="space-y-4">
              <Button 
                onClick={() => handleShare("Instagram")} 
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                Instagram
              </Button>
              
              <Button 
                onClick={() => handleShare("Facebook")} 
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Facebook
              </Button>
              
              <Button 
                onClick={() => handleShare("Twitter")} 
                className="w-full bg-sky-500 hover:bg-sky-600"
              >
                Twitter
              </Button>
              
              <Button 
                onClick={() => handleShare("Email")} 
                className="w-full bg-gray-600 hover:bg-gray-700"
              >
                Email
              </Button>
            </div>
            
            <div className="mt-6">
              <h3 className="text-md font-bold mb-2">Share with your friends</h3>
              <div className="space-y-2">
                {user.friends.map((friend) => (
                  <div key={friend.id} className="flex justify-between items-center bg-white p-3 rounded-lg">
                    <div className="flex items-center">
                      <img 
                        src={friend.avatar} 
                        alt={friend.name} 
                        className="w-8 h-8 rounded-full mr-2 object-cover"
                      />
                      <span>{friend.name}</span>
                    </div>
                    <Button 
                      size="sm"
                      onClick={() => {
                        toast.success(`Shared with ${friend.name}!`, {
                          duration: 3000,
                          dismissible: true
                        });
                      }}
                      className="bg-sunset-pink hover:bg-sunset-pink/90 text-xs"
                    >
                      Share
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            
            <Button 
              onClick={() => navigate(-1)} 
              variant="outline" 
              className="w-full mt-6"
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Share;

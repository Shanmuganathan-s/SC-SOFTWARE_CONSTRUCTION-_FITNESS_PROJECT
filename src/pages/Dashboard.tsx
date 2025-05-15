
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { fetchUserPrograms, fetchProfile } from '@/lib/supabase';
import { Profile, UserProgram } from '@/types';
import { useNavigate } from 'react-router-dom';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { CalendarIcon, DumbbellIcon, FlameIcon } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [userPrograms, setUserPrograms] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      if (!user) {
        navigate('/auth');
        return;
      }

      try {
        setLoading(true);
        const profileData = await fetchProfile(user.id);
        setProfile(profileData);

        const programs = await fetchUserPrograms(user.id);
        setUserPrograms(programs);
      } catch (error) {
        console.error('Error loading dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [user, navigate]);

  if (!user) {
    return null; // Will redirect via useEffect
  }

  const getInitials = (name?: string) => {
    if (!name) return 'AF';
    return name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-fitness-dark text-white">
      <Navbar />
      <main className="flex-grow pt-24 pb-12 px-4 container mx-auto">
        <h1 className="text-3xl font-bold mb-8">Your Dashboard</h1>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-fitness-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <Card className="bg-gray-800 border-gray-700 text-white shadow-md">
                <CardHeader>
                  <CardTitle>Profile</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src={profile?.avatar_url || ''} alt={profile?.full_name || profile?.username || 'User'} />
                    <AvatarFallback className="bg-fitness-primary">{getInitials(profile?.full_name)}</AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-semibold">{profile?.full_name || 'User'}</h2>
                  <p className="text-gray-400">@{profile?.username}</p>
                  <p className="text-gray-400">{user.email}</p>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2">
              <Card className="bg-gray-800 border-gray-700 text-white h-full shadow-md">
                <CardHeader>
                  <CardTitle>Your Programs</CardTitle>
                  <CardDescription className="text-gray-400">Programs you have enrolled in</CardDescription>
                </CardHeader>
                <CardContent>
                  {userPrograms.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-gray-400 mb-4">You haven't enrolled in any programs yet</p>
                      <button 
                        onClick={() => navigate('/#programs')}
                        className="px-4 py-2 bg-fitness-primary hover:bg-fitness-secondary rounded-md transition-colors"
                      >
                        Explore Programs
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {userPrograms.map((item) => {
                        const program = item.programs;
                        return (
                          <div key={item.id} className="border border-gray-700 rounded-lg p-4 hover:border-fitness-primary transition-colors">
                            <div className="flex flex-col md:flex-row md:items-center gap-4">
                              <div className="md:w-1/4">
                                <img 
                                  src={program.image_url || 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Zml0bmVzc3x8fHx8fDE3MTIxNzI4NjQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300'} 
                                  alt={program.title}
                                  className="w-full h-24 object-cover rounded-md"
                                />
                              </div>
                              <div className="md:w-3/4">
                                <h3 className="text-lg font-semibold">{program.title}</h3>
                                <div className="flex flex-wrap gap-2 mt-2 text-sm">
                                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-700 text-gray-300">
                                    <CalendarIcon size={14} /> {program.duration}
                                  </span>
                                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-700 text-gray-300">
                                    <FlameIcon size={14} /> {program.intensity}
                                  </span>
                                </div>
                                <p className="text-sm text-gray-400 mt-2">
                                  Enrolled: {formatDate(item.start_date)}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;

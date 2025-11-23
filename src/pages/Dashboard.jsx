import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Heart,
  MapPin,
  Briefcase,
  GraduationCap,
  Star,
  Lock,
  Crown,
} from "lucide-react";

const Dashboard = () => {
  // Free matches (fully visible)
  const freeMatches = [
    {
      id: 1,
      name: "Priya S.",
      age: 28,
      location: "Bengaluru",
      profession: "Software Engineer",
      education: "B.Tech",
      gotra: "Compatible",
      nakshatra: 28,
      isFree: true,
    },
    {
      id: 2,
      name: "Anjali K.",
      age: 26,
      location: "Mumbai",
      profession: "Business Analyst",
      education: "MBA",
      gotra: "Compatible",
      nakshatra: 32,
      isFree: true,
    },
  ];

  // Premium matches (blurred/locked)
  const premiumMatches = [
    { id: 3, age: 27, location: "Delhi", nakshatra: 30 },
    { id: 4, age: 29, location: "Pune", nakshatra: 26 },
    { id: 5, age: 25, location: "Hyderabad", nakshatra: 31 },
    { id: 6, age: 28, location: "Chennai", nakshatra: 29 },
  ];

  return (
    <div className="min-h-screen py-6 sm:py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
            Your Matches
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            2 free matches available • Upgrade to see more
          </p>
        </div>

        {/* Free Matches Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-playfair text-xl sm:text-2xl font-semibold text-foreground">
              Your Free Matches
            </h2>
            <Badge className="bg-accent text-accent-foreground">
              <Heart className="h-3 w-3 mr-1" />2 Free
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {freeMatches.map((match) => (
              <Card
                key={match.id}
                className="border-border/50 hover:shadow-lg transition-all"
              >
                <CardHeader className="pb-3 sm:pb-4 p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md">
                      <span className="text-xl sm:text-2xl font-bold text-primary-foreground">
                        {match.name.charAt(0)}
                      </span>
                    </div>
                    <Badge className="bg-accent text-accent-foreground">
                      New
                    </Badge>
                  </div>
                  <CardTitle className="font-playfair text-lg sm:text-xl">
                    {match.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {match.age} years
                  </p>
                </CardHeader>
                <CardContent className="space-y-2 sm:space-y-3 p-4 sm:p-6 pt-0">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{match.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Briefcase className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{match.profession}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <GraduationCap className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{match.education}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Star className="h-4 w-4 text-primary fill-primary flex-shrink-0" />
                    <span className="font-medium text-foreground">
                      Nakshatra Match: {match.nakshatra}/36
                    </span>
                  </div>
                  <div className="pt-3 sm:pt-4 space-y-2">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-sm sm:text-base">
                      <Heart className="h-4 w-4 mr-2" />
                      Request Introduction
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full text-sm sm:text-base"
                    >
                      View Full Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Premium Matches Section (Blurred) */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-playfair text-xl sm:text-2xl font-semibold text-foreground">
              More Matches Available
            </h2>
            <Badge className="bg-primary text-primary-foreground">
              <Crown className="h-3 w-3 mr-1" />
              Premium
            </Badge>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {premiumMatches.map((match) => (
              <Card
                key={match.id}
                className="border-border/50 relative overflow-hidden"
              >
                {/* Blur overlay */}
                <div className="absolute inset-0 backdrop-blur-md bg-background/60 z-10 flex items-center justify-center">
                  <div className="text-center p-4">
                    <Lock className="h-8 w-8 sm:h-10 sm:w-10 text-primary mx-auto mb-2" />
                    <p className="text-xs sm:text-sm font-semibold text-foreground mb-1">
                      Unlock to View
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Subscribe to see details
                    </p>
                  </div>
                </div>

                {/* Blurred content */}
                <CardHeader className="pb-3 sm:pb-4 blur-sm p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-muted to-muted-foreground/20"></div>
                    <Badge>New</Badge>
                  </div>
                  <CardTitle className="font-playfair text-lg sm:text-xl">
                    Match #{match.id}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {match.age} years
                  </p>
                </CardHeader>
                <CardContent className="space-y-2 sm:space-y-3 blur-sm p-4 sm:p-6 pt-0">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{match.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Star className="h-4 w-4" />
                    <span>Match: {match.nakshatra}/36</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upgrade CTA */}
        <Card className="border-primary/50 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="pt-6 sm:pt-8 text-center p-4 sm:p-6">
            <Crown className="h-12 w-12 sm:h-16 sm:w-16 text-primary mx-auto mb-4" />
            <h3 className="font-playfair text-xl sm:text-2xl font-bold text-foreground mb-2">
              Unlock More Matches
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get access to {premiumMatches.length}+ additional carefully
              curated matches with detailed profiles, compatibility reports, and
              priority introductions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
                asChild
              >
                <Link to="/pricing">
                  <Crown className="h-4 w-4 mr-2" />
                  View Pricing Plans
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

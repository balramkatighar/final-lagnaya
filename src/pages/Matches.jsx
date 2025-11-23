import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Briefcase, GraduationCap, Star } from "lucide-react";

const Matches = () => {
  const matches = [
    {
      id: 1,
      name: "Match 1",
      age: 28,
      location: "Bengaluru",
      profession: "Software Engineer",
      education: "B.Tech",
      compatibility: 28,
    },
    {
      id: 2,
      name: "Match 2",
      age: 26,
      location: "Mumbai",
      profession: "Business Analyst",
      education: "MBA",
      compatibility: 32,
    },
    {
      id: 3,
      name: "Match 3",
      age: 27,
      location: "Delhi",
      profession: "Doctor",
      education: "MBBS",
      compatibility: 30,
    },
  ];

  return (
    <div className="min-h-screen py-6 sm:py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
            Your Matches
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Carefully curated matches based on your preferences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {matches.map((match) => (
            <Card
              key={match.id}
              className="border-border/50 hover:shadow-lg transition-all"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {match.name.charAt(match.name.length - 1)}
                    </span>
                  </div>
                  <Badge className="bg-accent text-accent-foreground">
                    New
                  </Badge>
                </div>
                <CardTitle className="font-playfair text-xl">
                  {match.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {match.age} years
                </p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{match.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Briefcase className="h-4 w-4 text-primary" />
                  <span>{match.profession}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <GraduationCap className="h-4 w-4 text-primary" />
                  <span>{match.education}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Star className="h-4 w-4 text-primary fill-primary" />
                  <span className="font-medium text-foreground">
                    Nakshatra Match: {match.compatibility}/36
                  </span>
                </div>

                <div className="pt-4 space-y-2">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Heart className="h-4 w-4 mr-2" />
                    Request Introduction
                  </Button>
                  <Button variant="outline" className="w-full">
                    View Full Profile
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8 bg-muted/30 border-border/50">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Want to see more matches? Upgrade to our Standard Package
              </p>
              <Button asChild>
                <a href="/pricing">View Pricing Plans</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Matches;

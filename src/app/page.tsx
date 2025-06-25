import { Container } from "@/components/atoms/container";
import { Button } from "@/components/ui/button";
import { Features } from "@/components/features";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Container>
        <section className="flex min-h-screen items-center justify-center py-20">
          <div className="text-center max-w-4xl">
            <h1 className="roadmunch-hero text-foreground mb-6">
              RoadMunch
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Code your kitchen on wheels with scrappy intelligence
            </p>
            <Button size="lg" className="text-lg px-8 py-4 h-auto">
              Get Started
            </Button>
          </div>
        </section>
      </Container>
      
      {/* Features Section */}
      <Features />
    </div>
  );
}

import { Container } from "@/components/atoms/container";
import { Features } from "@/components/features";
import { Pricing } from "@/components/pricing";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <Container>
        <section className="flex min-h-screen items-center justify-center py-20">
          <div className="max-w-4xl text-center">
            <h1 className="roadmunch-hero text-foreground mb-6">RoadMunch</h1>
            <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl md:text-2xl">
              Code your kitchen on wheels with scrappy intelligence
            </p>
            <Button size="lg" className="h-auto px-8 py-4 text-lg">
              Get Started
            </Button>
          </div>
        </section>
      </Container>

      {/* Features Section */}
      <Features />

      {/* Pricing Section */}
      <Pricing />

      {/* CTA Section */}
      <section className="bg-primary/10 py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-4xl md:text-5xl">Ready to build?</h2>
            <Button size="lg" className="h-auto px-8 py-4 text-lg">
              Start Free Trial
            </Button>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8">
        <Container>
          <div className="text-center">
            <p>&copy; 2024 RoadMunch</p>
          </div>
        </Container>
      </footer>
    </div>
  );
}

import { Container } from "@/components/atoms/container";
import { Button } from "@/components/ui/button";

export function Pricing() {
  return (
    <section className="bg-background py-20">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl md:text-5xl">Pricing</h2>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {/* Free Tier */}
          <div className="bg-card border-border rounded-lg border p-8">
            <div className="mb-6 text-center">
              <h3 className="mb-2 text-2xl">Street Corner</h3>
              <div className="text-3xl font-bold">Free</div>
            </div>
            <div className="mb-6">
              <p className="text-muted-foreground mb-4">
                Basic kitchen flow tools
              </p>
            </div>
            <Button variant="outline" className="w-full">
              Get Started
            </Button>
          </div>

          {/* Pro Tier */}
          <div className="bg-primary/5 border-primary relative rounded-lg border-2 p-8">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform">
              <span className="bg-primary text-primary-foreground rounded-full px-4 py-1 text-sm font-medium">
                Popular
              </span>
            </div>
            <div className="mb-6 text-center">
              <h3 className="mb-2 text-2xl">Food Truck Hero</h3>
              <div className="text-3xl font-bold">
                $49
                <span className="text-muted-foreground text-lg font-normal">
                  /month
                </span>
              </div>
            </div>
            <div className="mb-6">
              <p className="text-muted-foreground mb-4">
                Full route optimization + permit tracking
              </p>
            </div>
            <Button className="w-full">Start Free Trial</Button>
          </div>

          {/* Enterprise Tier */}
          <div className="bg-card border-border rounded-lg border p-8">
            <div className="mb-6 text-center">
              <h3 className="mb-2 text-2xl">Fleet Commander</h3>
              <div className="text-3xl font-bold">Custom</div>
            </div>
            <div className="mb-6">
              <p className="text-muted-foreground mb-4">
                Custom pricing for multiple trucks
              </p>
            </div>
            <Button variant="outline" className="w-full">
              Contact Sales
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

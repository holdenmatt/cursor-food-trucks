import { Container } from "@/components/atoms/container";
import { Button } from "@/components/ui/button";

export function Pricing() {
  return (
    <section className="py-20 bg-background">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Pricing
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Tier */}
          <div className="p-8 bg-card rounded-lg border border-border">
            <div className="text-center mb-6">
              <h3 className="text-2xl mb-2">Street Corner</h3>
              <div className="text-3xl font-bold">Free</div>
            </div>
            <div className="mb-6">
              <p className="text-muted-foreground mb-4">Basic kitchen flow tools</p>
            </div>
            <Button variant="outline" className="w-full">
              Get Started
            </Button>
          </div>
          
          {/* Pro Tier */}
          <div className="p-8 bg-primary/5 rounded-lg border-2 border-primary relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                Popular
              </span>
            </div>
            <div className="text-center mb-6">
              <h3 className="text-2xl mb-2">Food Truck Hero</h3>
              <div className="text-3xl font-bold">$49<span className="text-lg font-normal text-muted-foreground">/month</span></div>
            </div>
            <div className="mb-6">
              <p className="text-muted-foreground mb-4">Full route optimization + permit tracking</p>
            </div>
            <Button className="w-full">
              Start Free Trial
            </Button>
          </div>
          
          {/* Enterprise Tier */}
          <div className="p-8 bg-card rounded-lg border border-border">
            <div className="text-center mb-6">
              <h3 className="text-2xl mb-2">Fleet Commander</h3>
              <div className="text-3xl font-bold">Custom</div>
            </div>
            <div className="mb-6">
              <p className="text-muted-foreground mb-4">Custom pricing for multiple trucks</p>
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
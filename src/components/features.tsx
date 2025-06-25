import { Container } from "@/components/atoms/container";

export function Features() {
  return (
    <section className="py-20 bg-muted/30">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Built for Food Truck Entrepreneurs
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-card rounded-lg border border-border">
            <h3 className="text-2xl mb-4">Kitchen Flow Optimizer</h3>
            <p className="text-muted-foreground leading-relaxed">
              AI assistant that helps code inventory management, POS integration, and prep scheduling 
              systems tailored to cramped truck layouts
            </p>
          </div>
          
          <div className="text-center p-8 bg-card rounded-lg border border-border">
            <h3 className="text-2xl mb-4">Route & Permit Navigator</h3>
            <p className="text-muted-foreground leading-relaxed">
              Smart coding helper that builds location-based apps connecting health permits, 
              parking regulations, and customer density data
            </p>
          </div>
          
          <div className="text-center p-8 bg-card rounded-lg border border-border">
            <h3 className="text-2xl mb-4">Emergency Napkin Dispenser Override</h3>
            <p className="text-muted-foreground leading-relaxed">
              When your napkin dispenser inevitably breaks during lunch rush, voice-activated code 
              generation that instantly creates a "digital napkin" customer notification system
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
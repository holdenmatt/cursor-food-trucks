import { Container } from "@/components/atoms/container";

export function Features() {
  return (
    <section className="bg-muted/30 py-20">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl md:text-5xl">
            Built for Food Truck Entrepreneurs
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-card border-border rounded-lg border p-8 text-center">
            <h3 className="mb-4 text-2xl">Kitchen Flow Optimizer</h3>
            <p className="text-muted-foreground leading-relaxed">
              AI assistant that helps code inventory management, POS
              integration, and prep scheduling systems tailored to cramped truck
              layouts
            </p>
          </div>

          <div className="bg-card border-border rounded-lg border p-8 text-center">
            <h3 className="mb-4 text-2xl">Route & Permit Navigator</h3>
            <p className="text-muted-foreground leading-relaxed">
              Smart coding helper that builds location-based apps connecting
              health permits, parking regulations, and customer density data
            </p>
          </div>

          <div className="bg-card border-border rounded-lg border p-8 text-center">
            <h3 className="mb-4 text-2xl">
              Emergency Napkin Dispenser Override
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              When your napkin dispenser inevitably breaks during lunch rush,
              voice-activated code generation that instantly creates a
              &ldquo;digital napkin&rdquo; customer notification system
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

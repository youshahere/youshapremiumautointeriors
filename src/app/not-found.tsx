import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <>
      <Hero
        eyebrow="Page not found"
        title="This seam has come apart."
        sub="The page you are looking for does not exist or has moved."
        actions={
          <>
            <Button href="/" variant="primary" size="lg">
              Back to home
            </Button>
            <Button href="/services" variant="outline" size="lg">
              See our services
            </Button>
          </>
        }
      />
      <Container className="py-6" />
    </>
  );
}

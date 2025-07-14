import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SCMPartnershipSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
            Official Partnership
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-industrial-dark mb-6">
            Proud SCM Authorized Dealer
          </h2>
          <p className="text-xl text-industrial-gray max-w-3xl mx-auto">
            As an official SCM partner, we bring you the finest Italian woodworking machinery 
            with full manufacturer warranty and authentic Italian engineering excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* Embedded YouTube Video replaces the card */}
            <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg bg-black flex items-center justify-center">
              <iframe
                src="https://www.youtube.com/embed/pTfEqf6eJlg?start=27&autoplay=1&mute=1"
                title="SCM Group - Morbidelli m100/200 CNC Machining Centre"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-italian-green rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-industrial-dark mb-2">
                  Genuine SCM Products
                </h3>
                <p className="text-industrial-gray">
                  Direct from Italy with full manufacturer warranty and authentic documentation.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-industrial-blue rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-industrial-dark mb-2">
                  Factory Training & Certification
                </h3>
                <p className="text-industrial-gray">
                  Our technicians are trained directly by SCM in Italy for optimal service quality.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-italian-red rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-industrial-dark mb-2">
                  Complete Parts & Service Network
                </h3>
                <p className="text-industrial-gray">
                  Comprehensive spare parts inventory and technical support across the region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SCMPartnershipSection;

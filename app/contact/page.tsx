import Footer from "@/components/sections/footer/default";
import ContactForm from "@/components/sections/contact-form/default";
import { LayoutLines } from "@/components/ui/layout-lines";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { MailIcon, PhoneIcon, MapPinIcon, ClockIcon } from "lucide-react";

export const metadata = {
  title: "Contact Us - WebDesino",
  description:
    "Get in touch with WebDesino for web development, SEO, and digital marketing services. Contact us for a free consultation.",
};

export default function ContactPage() {

  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      {/* Contact Information and Map Section */}
      <Section>
        <div className="max-w-container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Information Cards */}
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-6">
                  Reach out to us through any of these channels. We're here to help you grow your business online.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <MailIcon className="size-5 text-primary" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a 
                      href={siteConfig.links.email} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@webdesino.com
                    </a>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <PhoneIcon className="size-5 text-primary" />
                      Phone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a 
                      href="tel:+911234567890" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 123 456 7890
                    </a>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <MapPinIcon className="size-5 text-primary" />
                      Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Delhi NCR, India
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <ClockIcon className="size-5 text-primary" />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-muted-foreground text-sm space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Google Map */}
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="text-2xl font-semibold mb-2">Find Us</h2>
                <p className="text-muted-foreground mb-4">
                  Visit our office in Delhi NCR, India
                </p>
              </div>
              <Card className="overflow-hidden p-0">
                <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.48129454468!2d77.06889949999999!3d28.5272804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347ebffff%3A0x3b0b5b0b0b0b0b0b!2sDelhi%20NCR%2C%20India!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                    title="WebDesino Office Location - Delhi NCR, India"
                  />
                </div>
                <div className="p-4 bg-card border-t">
                  <p className="text-sm text-muted-foreground">
                    <MapPinIcon className="size-4 inline mr-1" />
                    Delhi NCR, India
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}


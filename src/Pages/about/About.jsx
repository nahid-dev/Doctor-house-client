import { Users, Award, Heart, Shield, Clock, MapPin } from "lucide-react";
import Button from "../../components/button/Button";
import Badge from "../../components/badge/Badge";
import medicalEquipment from "../../assets/medical-equipment.jpg";
import medicalTeam from "../../assets/medical-team.jpg";
import CardContent from "../../components/card/CardContent";
import Card from "../../components/card/Card";
import medicalFacility from "../../assets/medical-facility.jpg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "We treat every patient with empathy, understanding, and genuine care for their wellbeing.",
    },
    {
      icon: Award,
      title: "Excellence in Medicine",
      description:
        "Our commitment to the highest standards of medical practice and continuous improvement.",
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description:
        "Building lasting relationships through transparent, safe, and reliable healthcare services.",
    },
    {
      icon: Users,
      title: "Community Focus",
      description:
        "Dedicated to serving our community and improving the health of those around us.",
    },
  ];

  const stats = [
    { number: "15+", label: "Years of Service" },
    { number: "50+", label: "Medical Professionals" },
    { number: "10,000+", label: "Patients Served" },
    { number: "24/7", label: "Emergency Care" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <Badge className="mb-4 bg-accent text-accent-foreground">
            About Doc House
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Trusted Medical Partner Since 2008
          </h1>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            We are dedicated to providing exceptional healthcare services with a
            focus on compassionate care, cutting-edge technology, and medical
            excellence.
          </p>
        </div>
      </section>
      {/* Mission & Vision */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={medicalFacility}
                alt="Modern medical facility"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <Badge className="mb-4">Our Mission</Badge>
              <h2 className="text-3xl font-bold mb-6">
                Committed to Your Health and Wellbeing
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Doc House, our mission is to provide comprehensive,
                accessible, and compassionate healthcare services to our
                community. We believe that quality healthcare is a fundamental
                right, not a privilege.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <h4 className="font-semibold">24/7 Emergency Services</h4>
                    <p className="text-sm text-muted-foreground">
                      Round-the-clock emergency care when you need it most
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <h4 className="font-semibold">Multiple Locations</h4>
                    <p className="text-sm text-muted-foreground">
                      Convenient locations across the city for easy access
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Our Values</Badge>
            <h2 className="text-3xl font-bold mb-4">
              What Drives Us Every Day
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our core values guide everything we do, from patient care to
              community outreach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Stats */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our Impact by the Numbers
            </h2>
            <p className="text-xl opacity-90">
              Making a difference in our community`&apos;`s health
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Our Team</Badge>
              <h2 className="text-3xl font-bold mb-6">
                Expert Medical Professionals
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our team consists of highly qualified doctors, nurses, and
                healthcare professionals who are passionate about providing the
                best possible care for our patients.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">Board Certified Physicians</Badge>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">Specialized Nursing Staff</Badge>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">
                    Continuous Medical Education
                  </Badge>
                </div>
              </div>
              <Button
                onClick={() => navigate("/")}
                variant="secondary"
                className="primary-btn-bg"
              >
                Meet Our Doctors
              </Button>
            </div>
            <div>
              <img
                src={medicalTeam}
                alt="Medical team"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Technology */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src={medicalEquipment}
                alt="Medical equipment"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <Badge className="mb-4">Advanced Technology</Badge>
              <h2 className="text-3xl font-bold mb-6">
                State-of-the-Art Medical Equipment
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We continuously invest in the latest medical technology and
                equipment to ensure our patients receive the most accurate
                diagnoses and effective treatments available.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">
                    99%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Diagnostic Accuracy
                  </div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">
                    15min
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Average Wait Time
                  </div>
                </div>
              </div>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience Quality Healthcare?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule an appointment today and discover why thousands of patients
            trust Doc House with their healthcare needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Schedule Appointment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-accent"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

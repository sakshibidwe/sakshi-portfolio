import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Linkedin, Github, Send, MapPin } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { toast } from '@/hooks/use-toast';
import { useState } from 'react';

// Form validation schema
const contactFormSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "sakshibidwe3@gmail.com",
      href: "mailto:sakshibidwe3@gmail.com",
      color: "text-primary"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 9767747087",
      href: "tel:+919767747087",
      color: "text-accent"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/sakshibidwe",
      href: "https://linkedin.com/in/sakshibidwe",
      color: "text-blue-600"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "github.com/sakshibidwe",
      href: "https://github.com/sakshibidwe",
      color: "text-purple-600"
    }
  ];

  const handleSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const templateParams = {
        from_name: `${data.firstName} ${data.lastName}`,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_name: 'Sakshi Bidwe',
      };

      await emailjs.send(
        'service_16npqxc', // Service ID
        'template_q933ptw', // Template ID
        templateParams,
        'UZvmv5AJYJFiouuj7' // Public Key
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      form.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">Let's Connect</h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Ready to discuss opportunities or collaborate on exciting projects? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary-foreground mb-6">Get In Touch</h3>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
                I'm currently seeking entry-level opportunities in software development, 
                data science, and AI. Whether you have a job opportunity, project collaboration, 
                or just want to connect, don't hesitate to reach out!
              </p>
            </div>

            <div className="grid gap-4">
              {contactInfo.map((item, index) => (
                <Card 
                  key={index}
                  className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300 group"
                >
                  <CardContent className="p-4">
                    <a 
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 group-hover:scale-105 transition-transform duration-300"
                    >
                      <div className={`p-3 rounded-lg bg-primary-foreground/20 ${item.color} group-hover:bg-primary-foreground group-hover:text-primary transition-all duration-300`}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-foreground">{item.label}</h4>
                        <p className="text-primary-foreground/80 text-sm">{item.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Location */}
            <Card className="bg-primary-foreground/10 border-primary-foreground/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary-foreground/20 text-green-500">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-foreground">Location</h4>
                    <p className="text-primary-foreground/80 text-sm">Maharashtra, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-primary-foreground/95 shadow-large">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input 
                      placeholder="John" 
                      className="bg-background"
                      {...form.register('firstName')}
                    />
                    {form.formState.errors.firstName && (
                      <p className="text-destructive text-sm mt-1">
                        {form.formState.errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input 
                      placeholder="Doe" 
                      className="bg-background"
                      {...form.register('lastName')}
                    />
                    {form.formState.errors.lastName && (
                      <p className="text-destructive text-sm mt-1">
                        {form.formState.errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="john.doe@example.com" 
                    className="bg-background"
                    {...form.register('email')}
                  />
                  {form.formState.errors.email && (
                    <p className="text-destructive text-sm mt-1">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input 
                    placeholder="Job Opportunity / Project Collaboration" 
                    className="bg-background"
                    {...form.register('subject')}
                  />
                  {form.formState.errors.subject && (
                    <p className="text-destructive text-sm mt-1">
                      {form.formState.errors.subject.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Hi Sakshi, I'd like to discuss..."
                    className="min-h-32 bg-background"
                    {...form.register('message')}
                  />
                  {form.formState.errors.message && (
                    <p className="text-destructive text-sm mt-1">
                      {form.formState.errors.message.message}
                    </p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

const formSchema = z.object({
  firstName: z.string().min(2, { message: 'First name must be at least 2 characters.' }),
  lastName: z.string().min(2, { message: 'Last name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  company: z.string().optional(),
  service: z.string({ required_error: 'Please select a service.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      service: '',
      message: '',
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    try {
      await apiRequest('POST', '/api/contact', data);
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly via email.",
        variant: "destructive",
      });
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gray-800/50 relative">
      <div className="absolute w-96 h-96 -bottom-40 -left-40 rounded-full blur-3xl bg-purple-900/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">Get in Touch</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Ready to transform your business with AI? Contact us today to discuss how our AI solutions can drive innovation and efficiency for your organization.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-purple-400">
                    <Mail className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Email</h3>
                  <p className="mt-1 text-gray-300">
                    <a href="mailto:info@milli-intelligent.com" className="hover:text-purple-400 transition-colors duration-200">info@milli-intelligent.com</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-purple-400">
                    <Phone className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Phone</h3>
                  <p className="mt-1 text-gray-300">
                    <a href="tel:+15551234567" className="hover:text-purple-400 transition-colors duration-200">+1 (555) 123-4567</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-purple-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Location</h3>
                  <p className="mt-1 text-gray-300">
                    San Francisco, CA<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-medium text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-400 hover:bg-purple-500 hover:text-white transition-all duration-200">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-400 hover:bg-purple-500 hover:text-white transition-all duration-200">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-400 hover:bg-purple-500 hover:text-white transition-all duration-200">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-gray-900 p-6 sm:p-8 rounded-xl border border-gray-700 shadow-lg shadow-gray-900/50">
              <h3 className="text-xl font-bold text-white mb-6">Send us a message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">First name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="John" 
                              className="bg-gray-800 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-300">Last name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Doe" 
                              className="bg-gray-800 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="john@example.com" 
                            className="bg-gray-800 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Company</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your Company" 
                            className="bg-gray-800 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Service of interest</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-gray-800 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-gray-800 border border-gray-700 text-white">
                            <SelectItem value="workflow-automation">AI & Workflow Automation</SelectItem>
                            <SelectItem value="enterprise-solutions">AI Consulting & Enterprise Solutions</SelectItem>
                            <SelectItem value="chatbots">AI-Powered Chatbots & Assistants</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-300">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project..." 
                            className="bg-gray-800 border border-gray-600 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500" 
                            rows={4}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200 shadow-lg shadow-purple-500/20 h-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

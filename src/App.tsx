import React, { useState } from 'react';
import { Button } from "/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "/components/ui/card";
import { Input } from "/components/ui/input";
import { Label } from "/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "/components/ui/select";
import { Textarea } from "/components/ui/textarea";

const services = [
  { id: 1, name: 'Security Guards', description: 'Our security guards are highly trained and experienced in providing top-notch security services.' },
  { id: 2, name: 'Trainers', description: 'Our trainers are certified and experienced in providing training services for various industries.' },
  { id: 3, name: 'Nurses', description: 'Our nurses are highly skilled and experienced in providing quality healthcare services.' },
  { id: 4, name: 'Homemakers', description: 'Our homemakers are experienced in providing household services such as cleaning, cooking, and laundry.' },
  { id: 5, name: 'Bouncers', description: 'Our bouncers are highly trained and experienced in providing security services for events and establishments.' },
  { id: 6, name: 'Teachers', description: 'Our teachers are certified and experienced in providing educational services for various subjects and age groups.' },
  { id: 7, name: 'Concierge', description: 'Our concierge services provide personalized assistance for various tasks and errands.' },
  { id: 8, name: 'Cleaners', description: 'Our cleaners are experienced in providing cleaning services for homes, offices, and establishments.' },
  { id: 9, name: 'Drivers', description: 'Our drivers are highly skilled and experienced in providing transportation services.' },
];

const EssentialManpower = () => {
  const [selectedService, setSelectedService] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleServiceChange = (value: string) => {
    setSelectedService(value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Submit the form data
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-bold text-gray-900">Essential Manpower Services</h1>
      <p className="text-lg text-gray-600">We provide a range of services to meet your needs.</p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.id}>
            <CardHeader>
              <CardTitle>{service.name}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Our {service.name} services are designed to meet your specific needs.</p>
            </CardContent>
            <CardFooter>
              <Button variant="secondary">Learn More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
        <p className="text-lg text-gray-600">Contact us to learn more about our services.</p>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" value={name} onChange={handleNameChange} />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={handleEmailChange} />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" value={phone} onChange={handlePhoneChange} />
            </div>
            <div>
              <Label htmlFor="service">Service</Label>
              <Select onValueChange={handleServiceChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.id} value={service.name}>
                      {service.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" value={message} onChange={handleMessageChange} />
            </div>
          </div>

          <Button type="submit" variant="primary">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default EssentialManpower;
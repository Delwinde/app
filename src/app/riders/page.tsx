"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  DollarSign, Calendar, TrendingUp, Shield, 
  CheckCircle2, Clock, Smartphone, Car, User, Mail, Phone 
} from "lucide-react";
import { useState } from "react";

export default function RidersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicleType: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your interest! We'll contact you soon.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Drive with Ride-On</h1>
              <p className="text-xl text-blue-100 mb-8">
                Be your own boss. Set your own schedule. Earn on your terms. Join thousands of riders making great income with Ride-On.
              </p>
              <div className="flex items-center space-x-8">
                <div>
                  <div className="text-3xl font-bold">GH₵800+</div>
                  <div className="text-blue-200 text-sm">Weekly Earnings*</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-blue-200 text-sm">Flexible Hours</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600"
                alt="Rider"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Drive with Ride-On?
            </h2>
            <p className="text-xl text-gray-600">
              Join the best ride-hailing platform for riders
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-2">Great Earnings</h3>
              <p className="text-gray-600">
                Earn competitive rates with bonuses and incentives
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-xl mb-2">Flexible Schedule</h3>
              <p className="text-gray-600">
                Drive whenever you want, as much as you want
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-xl mb-2">Weekly Payouts</h3>
              <p className="text-gray-600">
                Get paid weekly directly to your bank account
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="font-bold text-xl mb-2">Insurance Coverage</h3>
              <p className="text-gray-600">
                Comprehensive insurance for peace of mind
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Requirements to Join
            </h2>
            <p className="text-xl text-gray-600">
              Simple requirements to get started
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">For Bike/Scooter Riders</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span>Must be 18 years or older</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span>Valid driver's license</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span>Own or have access to a bike/scooter</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span>Valid vehicle registration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span>Smartphone with GPS</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span>Clean driving record</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">For Car Drivers</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span>Must be 21 years or older</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span>Valid driver's license (2+ years)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span>4-door vehicle (2015 or newer)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span>Vehicle insurance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span>Vehicle inspection certificate</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span>Background check clearance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Earnings Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Earnings Potential
            </h2>
            <p className="text-xl text-gray-600">
              See what you could earn with Ride-On
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">GH₵400</div>
              <div className="text-gray-600 mb-4">Part-time (15hrs/week)</div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Perfect for side income</li>
                <li>• Flexible weekend hours</li>
                <li>• +Bonuses available</li>
              </ul>
            </Card>

            <Card className="p-8 text-center border-2 border-blue-600">
              <div className="text-xs font-semibold text-blue-600 mb-2">MOST POPULAR</div>
              <div className="text-5xl font-bold text-blue-600 mb-2">GH₵800</div>
              <div className="text-gray-600 mb-4">Standard (30hrs/week)</div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Great work-life balance</li>
                <li>• Peak hours earnings</li>
                <li>• +Bonuses available</li>
              </ul>
            </Card>

            <Card className="p-8 text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">GH₵1200+</div>
              <div className="text-gray-600 mb-4">Full-time (40+hrs/week)</div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Maximum earnings</li>
                <li>• Priority support</li>
                <li>• +Premium bonuses</li>
              </ul>
            </Card>
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            *Earnings vary by location, time, and number of trips. These are estimates based on average rider performance.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How to Get Started
            </h2>
            <p className="text-xl text-gray-600">
              Start earning in 3 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Sign Up</h3>
              <p className="text-gray-600">
                Complete the online application form with your details and documents
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Get Approved</h3>
              <p className="text-gray-600">
                We'll review your application and verify your documents within 24-48 hours
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Start Earning</h3>
              <p className="text-gray-600">
                Download the driver app, go online, and start accepting rides
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up Form */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to Drive?
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get in touch
            </p>
          </div>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="pl-10"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="pl-10"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="0209013342"
                    className="pl-10"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="vehicle">Vehicle Type</Label>
                <div className="relative">
                  <Car className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select
                    id="vehicle"
                    className="w-full pl-10 pr-3 py-2 border border-input rounded-md bg-background"
                    value={formData.vehicleType}
                    onChange={(e) => setFormData({...formData, vehicleType: e.target.value})}
                    required
                  >
                    <option value="">Select vehicle type</option>
                    <option value="bike">Bike</option>
                    <option value="scooter">Scooter/Motorcycle</option>
                    <option value="car">Car</option>
                  </select>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                Submit Application
              </Button>

              <p className="text-sm text-gray-500 text-center">
                By submitting this form, you agree to our Terms & Conditions
              </p>
            </form>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
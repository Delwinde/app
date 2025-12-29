"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Smartphone, Package, Megaphone, Check, Clock, 
  Shield, DollarSign, TrendingUp, Zap, Users, BarChart3, Target 
} from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive solutions for rides, deliveries, and advertising. Everything you need in one powerful platform.
          </p>
        </div>
      </section>

      {/* Ride Booking Service */}
      <section id="rides" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                <Smartphone className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-4xl font-bold mb-6">Ride Booking</h2>
              <p className="text-lg text-gray-600 mb-6">
                Get where you need to go with our reliable and affordable ride-booking service. 
                Choose from a variety of vehicle options to suit your needs.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Multiple Vehicle Options</h4>
                    <p className="text-gray-600">Bikes, scooters, and cars available for your comfort</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Transparent Pricing</h4>
                    <p className="text-gray-600">Know the fare before you book, no hidden charges</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Safety First</h4>
                    <p className="text-gray-600">Verified riders, in-app emergency button, and ride sharing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">24/7 Availability</h4>
                    <p className="text-gray-600">Book rides anytime, day or night</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Download App to Book
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=700"
                alt="Ride Booking"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-blue-600 mb-2">GH₵2.99</div>
              <div className="text-gray-600 mb-4">Base Fare (Bike)</div>
              <p className="text-sm text-gray-500">+ GH₵0.50 per km</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-2 border-blue-600">
              <div className="text-3xl font-bold text-blue-600 mb-2">GH₵5.99</div>
              <div className="text-gray-600 mb-4">Base Fare (Scooter)</div>
              <p className="text-sm text-gray-500">+ GH₵0.75 per km</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-blue-600 mb-2">GH₵8.99</div>
              <div className="text-gray-600 mb-4">Base Fare (Car)</div>
              <p className="text-sm text-gray-500">+ GH₵1.20 per km</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Delivery Service */}
      <section id="delivery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700"
                alt="Delivery Service"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-6">
                <Package className="w-8 h-8 text-purple-600" />
              </div>
              <h2 className="text-4xl font-bold mb-6">Delivery Services</h2>
              <p className="text-lg text-gray-600 mb-6">
                Fast, reliable delivery for everything from documents to packages. 
                Track your delivery in real-time and get instant notifications.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-purple-600" />
                  <span className="font-semibold">Same-Day Delivery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-purple-600" />
                  <span className="font-semibold">Secure Handling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-6 h-6 text-purple-600" />
                  <span className="font-semibold">Express Options</span>
                </div>
                <div className="flex items-center space-x-3">
                  <DollarSign className="w-6 h-6 text-purple-600" />
                  <span className="font-semibold">Affordable Rates</span>
                </div>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 mb-8">
                <h4 className="font-semibold mb-4">What We Deliver</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-purple-600" />
                    <span>Food & Groceries</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-purple-600" />
                    <span>Documents & Parcels</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-purple-600" />
                    <span>Small to Medium Packages</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-purple-600" />
                    <span>Urgent Deliveries</span>
                  </li>
                </ul>
              </div>

              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Start Delivery
              </Button>
            </div>
          </div>

          {/* Delivery Options */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="p-6">
              <h4 className="font-bold text-xl mb-3">Standard</h4>
              <div className="text-2xl font-bold text-purple-600 mb-2">GH₵4.99</div>
              <p className="text-gray-600 mb-4">Delivery within 2-4 hours</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Real-time tracking</li>
                <li>✓ Up to 5kg</li>
                <li>✓ Photo confirmation</li>
              </ul>
            </Card>
            <Card className="p-6 border-2 border-purple-600">
              <div className="text-xs font-semibold text-purple-600 mb-2">POPULAR</div>
              <h4 className="font-bold text-xl mb-3">Express</h4>
              <div className="text-2xl font-bold text-purple-600 mb-2">GH₵9.99</div>
              <p className="text-gray-600 mb-4">Delivery within 1 hour</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Priority delivery</li>
                <li>✓ Up to 10kg</li>
                <li>✓ Live chat support</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h4 className="font-bold text-xl mb-3">Premium</h4>
              <div className="text-2xl font-bold text-purple-600 mb-2">GH₵14.99</div>
              <p className="text-gray-600 mb-4">Delivery within 30 mins</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Ultra-fast delivery</li>
                <li>✓ Up to 15kg</li>
                <li>✓ Dedicated support</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Advertising Service */}
      <section id="advertising" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-6">
                <Megaphone className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-4xl font-bold mb-6">Advertising Solutions</h2>
              <p className="text-lg text-gray-600 mb-6">
                Reach thousands of potential customers through our innovative mobile advertising platform. 
                Target specific demographics and track campaign performance in real-time.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Target className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Targeted Campaigns</h4>
                    <p className="text-gray-600">Reach your ideal audience based on location, demographics, and behavior</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BarChart3 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Real-Time Analytics</h4>
                    <p className="text-gray-600">Track impressions, clicks, and conversions with detailed reports</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Wide Reach</h4>
                    <p className="text-gray-600">Access to 50,000+ active users across multiple cities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">High ROI</h4>
                    <p className="text-gray-600">Cost-effective advertising with measurable results</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Start Advertising
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700"
                alt="Advertising"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Advertising Packages */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Card className="p-6">
              <h4 className="font-bold text-xl mb-3">Starter</h4>
              <div className="text-2xl font-bold text-green-600 mb-2">GH₵299<span className="text-sm font-normal text-gray-600">/month</span></div>
              <p className="text-gray-600 mb-6">Perfect for small businesses</p>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>50,000 impressions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Basic analytics</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Location targeting</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Email support</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">Get Started</Button>
            </Card>

            <Card className="p-6 border-2 border-green-600 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
                RECOMMENDED
              </div>
              <h4 className="font-bold text-xl mb-3">Business</h4>
              <div className="text-2xl font-bold text-green-600 mb-2">GH₵699<span className="text-sm font-normal text-gray-600">/month</span></div>
              <p className="text-gray-600 mb-6">For growing companies</p>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>150,000 impressions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Demographic targeting</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>A/B testing</span>
                </li>
              </ul>
              <Button className="w-full bg-green-600">Get Started</Button>
            </Card>

            <Card className="p-6">
              <h4 className="font-bold text-xl mb-3">Enterprise</h4>
              <div className="text-2xl font-bold text-green-600 mb-2">Custom</div>
              <p className="text-gray-600 mb-6">For large organizations</p>
              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Unlimited impressions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Custom analytics</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Full targeting suite</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Dedicated manager</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Custom integration</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">Contact Sales</Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
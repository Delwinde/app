"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Target, Heart, Users, Zap, Award, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About Ride-On</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Connecting communities through innovative transportation, delivery, and advertising solutions
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Ride-On, we're committed to revolutionizing urban mobility by creating a seamless, 
                reliable, and affordable platform that connects riders with customers. Our mission is to 
                empower small vehicle riders while providing exceptional service to our users.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe in creating opportunities for riders to earn a sustainable income while offering 
                our customers safe, efficient transportation and delivery services. Through innovation and 
                technology, we're building a better future for urban communities.
              </p>
              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-blue-600">2020</div>
                  <div className="text-gray-600">Founded</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-gray-600">Cities</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">5000+</div>
                  <div className="text-gray-600">Riders</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700"
                alt="Team collaboration"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Customer First</h3>
              <p className="text-gray-600">
                We prioritize customer satisfaction in every decision we make, ensuring safe and reliable service.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Rider Empowerment</h3>
              <p className="text-gray-600">
                We create opportunities for riders to build sustainable livelihoods with fair earnings and support.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously improve our technology to provide faster, smarter, and more efficient services.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in service quality, safety, and customer experience.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-gray-600">
                We build strong relationships within the communities we serve, creating positive impact.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We promote eco-friendly transportation options and sustainable business practices.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Story</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    2020
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">The Beginning</h3>
                  <p className="text-gray-600">
                    Ride-On was founded with a simple vision: to create opportunities for small vehicle riders 
                    while solving urban transportation challenges. We started in a single city with just 50 riders.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                    2021
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Expansion</h3>
                  <p className="text-gray-600">
                    We expanded to 5 cities and launched our delivery services, completing over 100,000 rides 
                    and deliveries. Our rider community grew to 1,000 partners.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    2022
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Innovation</h3>
                  <p className="text-gray-600">
                    We introduced our advertising platform, helping local businesses reach customers. 
                    We also launched advanced safety features and real-time tracking across all services.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold">
                    2023
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Growth</h3>
                  <p className="text-gray-600">
                    Reached 15 cities with 5,000+ riders and 50,000+ active users. Completed over 500,000 rides 
                    and 200,000 deliveries, maintaining a 4.8-star rating.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                    2024
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">The Future</h3>
                  <p className="text-gray-600">
                    We continue to innovate and expand, with plans to enter 30 new cities and introduce 
                    electric vehicle options, further reducing our environmental impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Meet the people driving Ride-On forward
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300"
                alt="CEO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-lg mb-1">David Johnson</h3>
              <p className="text-blue-600 text-sm mb-2">CEO & Founder</p>
              <p className="text-gray-600 text-sm">
                10+ years in tech and transportation
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300"
                alt="CTO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-lg mb-1">Sarah Chen</h3>
              <p className="text-blue-600 text-sm mb-2">CTO</p>
              <p className="text-gray-600 text-sm">
                Former tech lead at major platforms
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300"
                alt="COO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-lg mb-1">Michael Torres</h3>
              <p className="text-blue-600 text-sm mb-2">COO</p>
              <p className="text-gray-600 text-sm">
                Operations expert with 12+ years experience
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300"
                alt="CMO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bold text-lg mb-1">Emily Martinez</h3>
              <p className="text-blue-600 text-sm mb-2">CMO</p>
              <p className="text-gray-600 text-sm">
                Marketing strategist and brand builder
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Ride-On by the Numbers</h2>
            <p className="text-xl text-blue-100">Our impact in the communities we serve</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">5K+</div>
              <div className="text-blue-100">Riders</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Cities</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">700K+</div>
              <div className="text-blue-100">Total Trips</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BookOpen, Laptop, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white text-gray-900">
      {/* 🟦 Hero Section */}
      <section className="text-center py-20 px-6 md:px-12">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-blue-700 mb-6"
        >
          Welcome to SRD Education Center
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8"
        >
          Empowering Students with <span className="text-blue-600 font-semibold">IT & Computer Education</span> 
          through modern learning methods and certified courses.
        </motion.p>

        <Link to="/courses">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg">
            Explore Our Courses
          </Button>
        </Link>
      </section>

      {/* 💎 Highlights Section */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-700">Why Choose SRD Education?</h2>
          <p className="text-gray-600 mt-2">
            We provide high-quality computer education for everyone — from beginners to professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card className="shadow-md border-blue-100 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Laptop className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Modern Computer Labs</h3>
                <p className="text-gray-600">
                  Hands-on training with the latest computers and updated software tools.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 2 */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card className="shadow-md border-blue-100 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Certified Courses</h3>
                <p className="text-gray-600">
                  Get government and industry-recognized certifications for career growth.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 3 */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card className="shadow-md border-blue-100 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Faculty</h3>
                <p className="text-gray-600">
                  Learn from experienced teachers dedicated to helping you succeed.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* 🧭 Call to Action */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6"
        >
          Start Your Learning Journey Today!
        </motion.h3>

        <Link to="/student-form">
          <Button size="lg" variant="secondary" className="rounded-xl shadow-md">
            Register as a Student
          </Button>
        </Link>
      </section>
    </div>
  );
}

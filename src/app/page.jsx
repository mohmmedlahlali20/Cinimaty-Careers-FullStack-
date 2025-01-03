import Link from 'next/link'
import { ArrowRight, Briefcase, MapPin, Search } from 'lucide-react'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <section className="relative bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-28">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 text-center">
            <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl md:text-7xl text-white">
              Find Your Dream Job in Morocco
            </h1>
            <p className="mt-4 max-w-xl mx-auto text-lg sm:text-xl md:mt-6 text-gray-200">
              Discover thousands of job opportunities across Morocco. Your next career move starts here.
            </p>
            <div className="mt-8 flex justify-center">
              <Link href="/offers" className="inline-flex items-center px-10 py-4 bg-blue-500 hover:bg-blue-600 text-lg font-semibold rounded-full shadow-xl transition duration-300 transform hover:scale-105">
                Explore Jobs
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        

        <section className="bg-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose JobConnect?
            </h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
              <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg">
                <Briefcase className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">Endless Opportunities</h3>
                <p className="mt-4 text-gray-600">Browse thousands of job listings that match your skills and experience.</p>
              </div>
              <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg">
                <MapPin className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">Location Flexibility</h3>
                <p className="mt-4 text-gray-600">Find job opportunities in your city or explore new locations around Morocco.</p>
              </div>
              <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg">
                <Search className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">Easy Search</h3>
                <p className="mt-4 text-gray-600">Use powerful filters to refine your job search based on your preferences.</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-gray-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">For Job Seekers</h3>
                <ul className="space-y-2">
                  <li><Link href="/jobs" className="hover:text-blue-400">Browse Jobs</Link></li>
                  <li><Link href="/companies" className="hover:text-blue-400">Companies</Link></li>
                  <li><Link href="/career-advice" className="hover:text-blue-400">Career Advice</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">For Employers</h3>
                <ul className="space-y-2">
                  <li><Link href="/employers/post-job" className="hover:text-blue-400">Post a Job</Link></li>
                  <li><Link href="/employers/pricing" className="hover:text-blue-400">Pricing</Link></li>
                  <li><Link href="/employers/resources" className="hover:text-blue-400">Resources</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="hover:text-blue-400">About Us</Link></li>
                  <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
                  <li><Link href="/privacy" className="hover:text-blue-400">Privacy Policy</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect</h3>
                <ul className="space-y-2">
                  <li><Link href="#" className="hover:text-blue-400">Facebook</Link></li>
                  <li><Link href="#" className="hover:text-blue-400">Twitter</Link></li>
                  <li><Link href="#" className="hover:text-blue-400">LinkedIn</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 text-center text-gray-400">
              <p>&copy; 2023 JobConnect. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

import Link from 'next/link'
import { Search, Briefcase, MapPin, ArrowRight } from 'lucide-react'
import Navbar from './components/Navbar'

const featuredJobs = [
  { id: 1, title: 'Senior Frontend Developer', company: 'TechCorp', location: 'Remote', salary: '80,000 - 120,000 MAD' },
  { id: 2, title: 'UX Designer', company: 'DesignHub', location: 'Casablanca', salary: '60,000 - 90,000 MAD' },
  { id: 3, title: 'Data Analyst', company: 'DataDrive', location: 'Rabat', salary: '70,000 - 100,000 MAD' },
  { id: 4, title: 'Full Stack Developer', company: 'WebSolutions', location: 'Marrakech', salary: '75,000 - 110,000 MAD' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      <main>
        <section className="bg-gray-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
                Find Your Dream Job in Morocco
              </h1>
              <p className="mt-3 max-w-md mx-auto text-xl sm:text-2xl md:mt-5 md:max-w-3xl">
                Discover thousands of job opportunities across Morocco. Your next career move starts here.
              </p>
            </div>
          </div>
        </section>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Featured Job Opportunities</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredJobs.map((job) => (
              <div key={job.id} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                <p className="text-gray-600 mb-4">{job.company}</p>
                <div className="flex items-center text-gray-500 mb-2">
                  <MapPin className="h-5 w-5 mr-2" />
                  {job.location}
                </div>
                <div className="flex items-center text-gray-500 mb-4">
                  <Briefcase className="h-5 w-5 mr-2" />
                  {job.salary}
                </div>
                <Link href={`/jobs/${job.id}`} className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  View Details
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/jobs" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              View All Jobs
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </section>

        <section className="bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="px-6 py-12 md:p-12 text-center md:text-left md:flex md:items-center md:justify-between">
                <div>
                  <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Are you an employer?
                  </h2>
                  <p className="mt-3 max-w-3xl text-xl text-gray-500">
                    Post your job openings and find the perfect candidates for your company.
                  </p>
                </div>
                <div className="mt-8 md:mt-0 md:ml-8">
                  <Link href="/employers/post-job" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                    Post a Job
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2023 JobConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}


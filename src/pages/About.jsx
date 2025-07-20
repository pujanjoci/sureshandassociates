import { BuildingOfficeIcon, ScaleIcon, ChartBarIcon, ShieldCheckIcon, LightBulbIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
          <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About S. Suresh & Associates
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            Chartered Accountants serving as your strategic partner in compliance, growth, and governance.
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Welcome to S. Suresh & Associates
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                At S. Suresh & Associates, Chartered Accountants, we go beyond numbers. With years of expertise across industries, we deliver insightful audits, practical advisory, and digital transformation solutions to elevate your business performance.
              </p>
              <div className="mt-8 sm:flex">
                <div className="rounded-md shadow">
                  <a
                    href="tel:9851135421"
                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    <span className="mr-2">📞</span> Call us today: 9851135421
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <img
                className="w-full rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Team working"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:order-2">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Mission
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                To build sustainable businesses by providing reliable, value-driven audit and advisory services that uphold the highest standards of integrity and excellence.
              </p>
            </div>
            <div className="mt-12 lg:mt-0 lg:order-1">
              <img
                className="w-full rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Mission illustration"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Objectives & Goals */}
      <div className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Objectives & Goals
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Driving excellence in financial services and business advisory
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Objective 1 */}
              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <ScaleIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Financial Transparency</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Ensure financial transparency through efficient audits that provide clear insights into your business operations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Objective 2 */}
              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <LightBulbIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Strategic Insights</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Empower businesses with strategic and tax insights that drive informed decision-making and growth.
                    </p>
                  </div>
                </div>
              </div>

              {/* Objective 3 */}
              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <ArrowTrendingUpIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Sustainable Growth</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Foster accountability and sustainable growth for clients through comprehensive financial planning.
                    </p>
                  </div>
                </div>
              </div>

              {/* Goal 1 */}
              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <BuildingOfficeIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Trusted Partnership</h3>
                    <p className="mt-5 text-base text-gray-500">
                      To become a trusted partner for 100+ enterprises in South Asia by 2030 through exceptional service delivery.
                    </p>
                  </div>
                </div>
              </div>

              {/* Goal 2 */}
              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <ChartBarIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Digital Transformation</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Lead the way in digital finance and ERP adoption for SMEs to enhance operational efficiency.
                    </p>
                  </div>
                </div>
              </div>

              {/* Goal 3 */}
              <div className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <ShieldCheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Forensic Excellence</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Establish a benchmark in forensic and investigative auditing with cutting-edge methodologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Values</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              The Foundation of Our Practice
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Integrity</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Uncompromising ethical standards in all our engagements and recommendations.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Expertise</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Deep technical knowledge combined with practical business acumen.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Innovation</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Embracing technology to deliver forward-thinking solutions for our clients.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Client-Centric Approach</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Tailored solutions that address unique business challenges and opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Leadership
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Experienced professionals guiding your financial success
            </p>
          </div>

          <div className="mt-16">
            <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
              <div className="group relative">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                    alt="S. Suresh"
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">
                  <span className="absolute inset-0" />
                  S. Suresh
                </h3>
                <p className="text-base text-gray-500">Founder & Managing Partner</p>
                <p className="mt-2 text-sm text-gray-500">
                  With over 25 years of experience in audit and advisory services, S. Suresh brings unparalleled expertise in financial governance and compliance.
                </p>
              </div>

              <div className="group relative">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                    alt="R. Meena"
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">
                  <span className="absolute inset-0" />
                  R. Meena
                </h3>
                <p className="text-base text-gray-500">Partner - Audit & Assurance</p>
                <p className="mt-2 text-sm text-gray-500">
                  Specializing in statutory audits and internal controls, Meena leads our audit practice with meticulous attention to detail.
                </p>
              </div>

              <div className="group relative">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src="https://images.unsplash.com/photo-1573497019704-22b3b9c6b1f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                    alt="K. Arvind"
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">
                  <span className="absolute inset-0" />
                  K. Arvind
                </h3>
                <p className="text-base text-gray-500">Partner - Advisory & Digital Transformation</p>
                <p className="mt-2 text-sm text-gray-500">
                  Arvind drives our digital transformation initiatives, helping clients leverage technology for financial excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
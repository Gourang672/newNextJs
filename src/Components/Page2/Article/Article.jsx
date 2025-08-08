import React from 'react'
import Image from "next/image";
import ArticleTags from '../ArticleTags/ArticleTags';

const Article = () => {
  return (
    <>
      <div className="lg:col-span-2 space-y-6">
          <div className="w-full relative h-64 sm:h-80 rounded-lg overflow-hidden">
            <Image src="/images/17167.jpg" alt="Reading" fill className="object-cover" priority />
          </div>

          <p className="text-base text-gray-700">
            The traditional 9-to-5 workday, a relic of the industrial era, is increasingly being questioned in our modern knowledge economy...
          </p>

          <h2 className="text-lg sm:text-xl font-bold text-[#004274]">The Origins of the 9-to-5 Schedule</h2>
          <p className="text-base text-gray-700">
            The concept of the 8-hour workday was popularized during the Industrial Revolution...
          </p>

          <blockquote className="italic text-sm text-blue-900 border-l-4 pl-4 border-blue-500">
            “The future of work isn’t about when you work, but what you accomplish. The 9-to-5 is an outdated concept that belongs in the last century.”
          </blockquote>

          {/* New Content from Screenshot */}
          <h2 className="text-lg sm:text-xl font-bold text-[#004274] mt-6">Alternative Work Models</h2>
          <p className="text-base text-gray-700">
            Forward-thinking companies are experimenting with various alternatives...
          </p>
          <ul className="list-disc pl-5 text-base text-gray-700 space-y-1">
            <li><b>Flexible Scheduling:</b> Allowing employees to choose their hours...</li>
            <li><b>Results-Only Work Environment (ROWE):</b> Employees are evaluated on output...</li>
            <li><b>4-Day Workweek:</b> Compressing the standard 40 hours...</li>
            <li><b>Remote-First Policies:</b> Giving employees location independence</li>
            <li><b>Asynchronous Work:</b> Teams collaborate without requiring simultaneous availability</li>
          </ul>

          <h2 className="text-lg sm:text-xl font-bold text-[#004274] mt-6">The Benefits of Flexibility</h2>
          <p className="text-base text-gray-700">
            Research has shown that flexible work arrangements offer numerous advantages:
          </p>
          <ul className="list-disc pl-5 text-base text-gray-700 space-y-1">
            <li>Increased productivity and focus</li>
            <li>Improved work-life balance</li>
            <li>Reduced stress and burnout</li>
            <li>Higher retention rates and talent attraction</li>
            <li>Better accommodation of diverse lifestyles</li>
          </ul>

          <p className="text-base text-gray-700">
            As we continue to evolve our understanding of work and productivity...
          </p>

         
          <ArticleTags />
        </div>
    </>
  )
}

export default Article

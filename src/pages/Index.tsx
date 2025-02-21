import React from 'react';

const Index = () => {
  return (
    <div className="max-w-[21cm] mx-auto bg-white p-8 print:p-6 min-h-[29.7cm]">
      {/* Header / Contact Info */}
      <header className="text-center mb-6">
        <h1 className="text-2xl font-bold text-[#1a365d] mb-2">Pritam Patil</h1>
        <h2 className="text-xl mb-2">Generative AI & Machine Learning Engineer</h2>
        <p className="text-sm">
          Email: pritam1998patil@gmail.com | {' '}
          <a href="https://linkedin.com/in/pritam-patil-0a6552166/" className="text-blue-600 hover:underline print:text-black">
            LinkedIn: linkedin.com/in/pritam-patil-0a6552166/
          </a>
        </p>
        <p className="text-sm">
          <a href="https://github.com/PritamPatil2603" className="text-blue-600 hover:underline print:text-black">
            GitHub: github.com/PritamPatil2603
          </a>
        </p>
      </header>

      {/* Technical Skills */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-[#1a365d] mb-2 border-b border-gray-300">Technical Skills</h2>
        <ul className="text-sm list-disc pl-5 space-y-1">
          <li><span className="font-semibold">Programming Languages:</span> Python, JavaScript, TypeScript</li>
          <li><span className="font-semibold">AI & Machine Learning:</span> Large Language Models (LLMs), Hugging Face Transformers, LangChain, Prompt Engineering, Retrieval-Augmented Generation (RAG), Natural Language Processing (NLP), Deep Learning, AI Agents, Vector Embeddings</li>
          <li><span className="font-semibold">Full Stack Development:</span> React.js, Node.js, FastAPI, PostgreSQL, Supabase (Edge Functions, Auth, Storage), Tailwind CSS</li>
          <li><span className="font-semibold">Cloud & DevOps:</span> AWS Services (SageMaker, Textract, OpenSearch, S3, Step Functions, Bedrock, EC2), Cloud Computing, Workflow Automation, Vercel, Google Cloud Platform(GCP)</li>
          <li><span className="font-semibold">AI Development Tools:</span> OpenAI API, Pinecone, Cursor AI, Copilot, Lovable AI, CrewAI, LangGraph, Claude 3.5 Sonnet Computer Use</li>
        </ul>
      </section>

      {/* Professional Experience */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-[#1a365d] mb-2 border-b border-gray-300">Professional Experience</h2>
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <h3 className="font-semibold text-sm">Generative AI & Machine Learning Engineer — Accenture</h3>
            <span className="text-sm">April 2022 – Present</span>
          </div>
          <ul className="text-sm list-disc pl-5 space-y-1">
            <li>Engineered enterprise-grade Retrieval-Augmented Generation (RAG) pipeline using AWS SageMaker and OpenSearch, improving document retrieval accuracy by 30%</li>
            <li>Automated large-scale PDF data extraction with Amazon Textract, reducing manual processing time by 70%</li>
            <li>Developed AI-powered chatbots using Hugging Face Transformers and LangChain for enhanced customer interaction</li>
            <li>Built scalable AWS pipelines with Step Functions and Fargate, processing over 1 TB of data monthly</li>
            <li>Orchestrated document ingestion and retrieval workflows, processing 1,000+ PDFs daily</li>
            <li>Created full-stack integrations for AI-driven applications using React.js and FastAPI</li>
            <li>Collaborated with cross-functional teams, achieving 95% project success rate</li>
          </ul>
        </div>
      </section>

      {/* Key Projects */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-[#1a365d] mb-2 border-b border-gray-300">Key Projects</h2>
        
        <div className="mb-4">
          <h3 className="font-semibold text-sm mb-1">
            AI Voice Agent for Healthcare Sector
            {' '}
            <a 
              href="https://futureaichatbot.com/" 
              className="text-blue-600 hover:underline print:text-black"
              target="_blank"
              rel="noopener noreferrer"
            >
              (futureaichatbot.com)
            </a>
          </h3>
          <p className="text-sm italic mb-1">Technologies: OpenAI GPT-4, Claude 3.5 Sonnet, ElevenLabs, React.js, Twilio, GoHighLevel, n8n, CrewAI Agents</p>
          <ul className="text-sm list-disc pl-5 space-y-1">
            <li>Implemented Twilio integration for automated voice processing of inbound/outbound calls</li>
            <li>Utilized GPT-4 and ElevenLabs for advanced natural language understanding and voice synthesis</li>
            <li>Integrated GoHighLevel CRM's calendar API for dynamic appointment scheduling, supporting 500+ monthly bookings</li>
            <li>Automated email and SMS reminders, reducing patient no-show rates by 25%</li>
          </ul>
        </div>

        <div className="mb-12"></div>

        <div className="mb-4">
          <h3 className="font-semibold text-sm mb-1">
            AI-Powered Document Analysis & Chat Platform
          </h3>
          <p className="text-sm mb-1">
            Link: <a 
              href="https://upstageai-document-parser.vercel.app/" 
              className="text-blue-600 hover:underline print:text-black"
              target="_blank"
              rel="noopener noreferrer"
            >
              upstageai-document-parser.vercel.app
            </a>
          </p>
          <p className="text-sm italic mb-1">
            Technical Stack: Frontend: React, TypeScript, Tailwind CSS, shadcn/ui | Backend: Supabase (Edge Functions, Auth, Storage), PostgreSQL | AI/ML: OpenAI API, Vector Embeddings, RAG Architecture | Infrastructure: Vercel, Supabase Cloud
          </p>
          <ul className="text-sm list-disc pl-5 space-y-1">
            <li>Architected and implemented a production-grade document analysis platform using React, TypeScript, and Supabase, enabling intelligent document processing and interactive AI-powered chat functionality</li>
            <li>Engineered a sophisticated RAG (Retrieval Augmented Generation) system for accurate document analysis, implementing semantic chunking and vector embeddings for enhanced context retrieval</li>
            <li>Built a responsive chat interface with real-time streaming capabilities, leveraging OpenAI's API for dynamic content generation and implementing advanced prompt engineering techniques for improved response accuracy</li>
            <li>Developed robust backend architecture using Supabase Edge Functions, implementing secure file storage, user authentication, and real-time database operations</li>
            <li>Implemented efficient document processing pipeline with automated chunking, embedding generation, and context-aware retrieval system</li>
            <li>Enhanced system reliability through implementation of error handling, loading states, and proper cleanup functions, resulting in a stable production environment</li>
            <li>Optimized application performance through proper state management, efficient data fetching, and implementation of responsive design patterns</li>
            <li>Successfully deployed and maintained the application on Vercel, implementing custom routing solutions and ensuring seamless client-side navigation</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-sm mb-1">
            AI-Powered CRM and Chatbots
            {' '}
            <a 
              href="https://futureaimarketing.in/" 
              className="text-blue-600 hover:underline print:text-black"
              target="_blank"
              rel="noopener noreferrer"
            >
              (futureaimarketing.in)
            </a>
          </h3>
          <p className="text-sm italic mb-1">Technologies: GoHighLevel, LangChain, GPT-4, Node.js, React.js</p>
          <ul className="text-sm list-disc pl-5 space-y-1">
            <li>Developed AI-integrated CRM systems with multi-channel chatbots across Instagram, Facebook, and web platforms</li>
            <li>Increased lead conversion rates by 25% through automated follow-up strategies</li>
          </ul>
        </div>
      </section>

      {/* Education and Certifications */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-[#1a365d] mb-2 border-b border-gray-300">Education & Certifications</h2>
        <div className="mb-2">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-sm">Bachelor of Technology — Institute of Chemical Technology (ICT)</h3>
          </div>
        </div>
        <ul className="text-sm list-disc pl-5 space-y-1">
          <li>DeepLearning.AI Generative AI Specialist</li>
          <li>AWS Certified Machine Learning – Specialty</li>
          <li>LangChain for LLM Application Development</li>
          <li>Multi AI Agent Systems with crewAI</li>
        </ul>
      </section>

      {/* Key Achievements */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-[#1a365d] mb-2 border-b border-gray-300">Key Achievements</h2>
        <ul className="text-sm list-disc pl-5 space-y-1">
          <li>Reduced project delivery times by 40% through innovative AI tool integration</li>
          <li>Trained and mentored team members in AI-enhanced workflow adoption</li>
        </ul>
      </section>

      {/* Professional Interests */}
      <section>
        <h2 className="text-lg font-bold text-[#1a365d] mb-2 border-b border-gray-300">Professional Interests</h2>
        <ul className="text-sm list-disc pl-5 space-y-1">
          <li>Developing AI-powered agents for software development automation</li>
          <li>Exploring advanced Large Language Models (LLMs)</li>
          <li>Mentoring emerging engineers in AI technologies</li>
        </ul>
      </section>
    </div>
  );
};

export default Index;

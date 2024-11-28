import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Bot, FileText, MessageSquare, Upload, ChevronRight } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 sticky top-0 z-50">
        <Link className="flex items-center justify-center" href="#">
          <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">notch</span>
          <Badge variant="secondary" className="ml-2">
            beta
          </Badge>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-purple-600 transition-colors" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-purple-600 transition-colors" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:text-purple-600 transition-colors" href="#">
            Blog
          </Link>
          <Button variant="outline" className="hidden sm:inline-flex">Sign In</Button>
          <Button>Get Started</Button>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-8 text-center lg:text-left lg:w-1/2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  Chat with your documents.
                  <br />
                  Take smarter notes.
                </h1>
                <p className="mx-auto lg:mx-0 max-w-[700px] text-gray-700 md:text-xl dark:text-gray-300">
                  Transform your documents into interactive conversations. Use AI to analyze, summarize, and create notes from
                  any document instantly.
                </p>
                <div className="space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    Get Started for Free
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Watch Demo
                  </Button>
                </div>
              </div>
              <div className="lg:w-1/2">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="notch AI interface"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Powerful Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg transition-transform hover:scale-105">
                <div className="p-4 bg-purple-100 dark:bg-purple-900 rounded-full">
                  <MessageSquare className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">Interactive Conversations</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Chat with your documents naturally. Ask questions and get instant, relevant responses.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg transition-transform hover:scale-105">
                <div className="p-4 bg-purple-100 dark:bg-purple-900 rounded-full">
                  <Bot className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">AI-Powered Analysis</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Let AI analyze your documents and generate comprehensive summaries and insights.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg transition-transform hover:scale-105">
                <div className="p-4 bg-purple-100 dark:bg-purple-900 rounded-full">
                  <FileText className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">Smart Note Taking</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Create intelligent notes that link directly to your source documents and conversations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                How It Works
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Get started with notch in three simple steps
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                  <Upload className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">1. Upload Documents</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Upload any document - PDFs, Word files, or text documents. We&apos;ll process them instantly.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                  <MessageSquare className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">2. Start Chatting</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Ask questions, request summaries, or dive deep into specific topics within your documents.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                  <FileText className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">3. Create Notes</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Generate smart notes from your conversations and documents with a single click.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to get started?</h2>
              <p className="max-w-[600px] md:text-xl">
                Join thousands of users who are already transforming their document workflow with notch.
              </p>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-white/10 text-white placeholder:text-white/70"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit" className="bg-white text-purple-600 hover:bg-purple-50">
                    Get Started
                  </Button>
                </form>
                <p className="text-sm text-white/80">
                  Try free for 14 days. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-white dark:bg-gray-800">
        <div className="container px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2024 notch. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-sm hover:underline underline-offset-4 text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm hover:underline underline-offset-4 text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400" href="#">
              Privacy Policy
            </Link>
            <Link className="text-sm hover:underline underline-offset-4 text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400" href="#">
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </div>

  );
}

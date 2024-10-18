'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail } from "lucide-react"

export function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="p-6 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Your Name</h1>
          <p className="text-xl">Web Developer</p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-muted-foreground">
            Hello! I'm a web developer passionate about creating clean and functional websites. 
            I specialize in HTML, CSS, and JavaScript, and I'm always eager to learn new technologies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
          <form className="space-y-4">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" />
            <Button type="submit">Send Message</Button>
          </form>
        </section>
      </main>

      <footer className="p-6 bg-muted">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2023 Your Name. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
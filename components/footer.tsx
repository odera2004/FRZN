"use client"

import Link from "next/link"
import { Instagram, Twitter, Youtube, Linkedin } from "lucide-react"

const footerLinks = {
  navigation: [
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/booking", label: "Book a Call" },
  ],
  services: [
    { href: "/services#production", label: "Music Production" },
    { href: "/services#songwriting", label: "Songwriting" },
    { href: "/services#branding", label: "Full Branding" },
    { href: "/booking", label: "Book a Vision Call" },
  ],
  socials: [
    { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
    { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
    { href: "https://youtube.com", icon: Youtube, label: "YouTube" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold tracking-tighter">
                FRZN<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Premium music production and branding for elite international artists.
            </p>
            <div className="flex gap-4">
              {footerLinks.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@frzndigital.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  hello@frzndigital.com
                </a>
              </li>
              <li>
                <p className="text-sm text-muted-foreground">
                  UK • USA • AUS • KENYA
                </p>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FRZN Digital. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
      
      {/* Large brand text */}
      <div className="border-t border-border overflow-hidden">
        <div className="container mx-auto px-6 py-8">
          <p className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-foreground/5 text-center whitespace-nowrap">
            FRZN SOCIETY
          </p>
        </div>
      </div>
    </footer>
  )
}

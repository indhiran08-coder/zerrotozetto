import React, { useState, useEffect } from 'react';
import {
  Cpu,
  Brain,
  Globe,
  Smartphone,
  Layers,
  ArrowRight,
  Mail,
  MapPin,
  ChevronDown,
  Activity,
  Zap,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  Users,
  HardDrive,
  Code2,
  Menu,
  X,
  Phone,
  Clock,
  ShieldCheck,
  Award,
  Check,
  Star,
  ArrowUp,
  Cookie,
  FileText,
  AlertTriangle,
  Lock
} from 'lucide-react';
import './App.css';

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.414z"/>
  </svg>
);

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProjectFilter, setActiveProjectFilter] = useState<'all' | 'ai' | 'iot' | 'web' | 'academic'>('all');
  const [activeTechFilter, setActiveTechFilter] = useState<'all' | 'ai' | 'iot' | 'web'>('all');
  const [selectedServiceModal, setSelectedServiceModal] = useState<any | null>(null);

  // Animated counters
  const [stats, setStats] = useState({ projects: 0, satisfaction: 0, support: 0, speed: 0 });

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Policy & Cookie Consent Modals
  const [cookieConsent, setCookieConsent] = useState<'unknown' | 'accepted' | 'declined' | 'custom'>('unknown');
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: true,
    marketing: false
  });
  const [activePolicyModal, setActivePolicyModal] = useState<'privacy' | 'terms' | 'cookies' | null>(null);

  // Back to Top & 404 Route state
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [is404, setIs404] = useState(false);

  // Spam protection & form state
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [formError, setFormError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState('');
  const [formMountTime] = useState<number>(Date.now());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'AI & Machine Learning Solutions',
    message: ''
  });

  useEffect(() => {
    // Check saved cookie preference
    const savedConsent = localStorage.getItem('zerotozetta_cookie_consent');
    if (savedConsent) {
      if (savedConsent === 'accepted' || savedConsent === 'declined') {
        setCookieConsent(savedConsent as any);
      } else {
        try {
          const parsed = JSON.parse(savedConsent);
          setCookiePreferences(parsed);
          setCookieConsent('custom');
        } catch {
          setCookieConsent('accepted');
        }
      }
    }

    // Check 404 route
    if (window.location.hash === '#404' || window.location.pathname === '/404') {
      setIs404(true);
    }

    const handleHashChange = () => {
      setIs404(window.location.hash === '#404');
    };
    window.addEventListener('hashchange', handleHashChange);

    // Scroll listener for Back to Top button
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 320);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Smooth counter animation
    const interval = setInterval(() => {
      setStats(prev => ({
        projects: prev.projects < 120 ? prev.projects + 4 : 120,
        satisfaction: prev.satisfaction < 99 ? prev.satisfaction + 3 : 99,
        support: 24,
        speed: 4
      }));
    }, 40);

    // Scroll Landing & Fade-in Intersection Observer
    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      clearInterval(interval);
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Privacy-respecting analytics event dispatcher
  const trackAnalyticsEvent = (eventName: string, data?: Record<string, any>) => {
    if (cookieConsent === 'accepted' || (cookieConsent === 'custom' && cookiePreferences.analytics)) {
      if (typeof window !== 'undefined' && (window as any).va) {
        try {
          (window as any).va('event', { name: eventName, data });
        } catch {
          // ignore
        }
      }
    }
  };

  const handleAcceptAllCookies = () => {
    setCookieConsent('accepted');
    setCookiePreferences({ essential: true, analytics: true, marketing: true });
    localStorage.setItem('zerotozetta_cookie_consent', 'accepted');
    trackAnalyticsEvent('cookie_consent_accepted');
  };

  const handleDeclineCookies = () => {
    setCookieConsent('declined');
    setCookiePreferences({ essential: true, analytics: false, marketing: false });
    localStorage.setItem('zerotozetta_cookie_consent', 'declined');
  };

  const handleSaveCustomCookies = () => {
    setCookieConsent('custom');
    localStorage.setItem('zerotozetta_cookie_consent', JSON.stringify(cookiePreferences));
    setActivePolicyModal(null);
    trackAnalyticsEvent('cookie_consent_customized');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getWhatsAppUrl = () => {
    const phoneNumber = "917604883377";
    const text = 
      `*New Project Inquiry - ZeroToZetta*\n\n` +
      `👤 *Name:* ${formData.name || 'Not provided'}\n` +
      `📧 *Email:* ${formData.email || 'Not provided'}\n` +
      `📱 *Phone:* ${formData.phone || 'Not provided'}\n` +
      `🛠 *Service:* ${formData.service}\n\n` +
      `💬 *Project Details:*\n${formData.message || 'Interested in technical consultation'}`;

    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // Spam Protection 1: Honeypot bot trap
    if (honeypot.trim() !== '') {
      setFormError('Submission failed security validation. Please chat directly on WhatsApp.');
      return;
    }

    // Spam Protection 2: Automated speed test (< 1.2s)
    const elapsedSeconds = (Date.now() - formMountTime) / 1000;
    if (elapsedSeconds < 1.2) {
      setFormError('Please review your project details before sending.');
      return;
    }

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError('Please fill out all required fields marked with *');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setFormError('Please enter a valid email address.');
      return;
    }

    trackAnalyticsEvent('contact_form_submitted', { service: formData.service });

    setFormStatus('sending');
    const whatsappUrl = getWhatsAppUrl();

    setTimeout(() => {
      setFormStatus('success');
      window.open(whatsappUrl, '_blank');
    }, 600);
  };

  // 5 Core Service categories matching Phoenova with rich item breakdowns
  const servicesList = [
    {
      id: "ai-solutions",
      category: "AI & Machine Learning",
      subtitle: "Intelligent Automation & Vision",
      icon: <Brain size={26} />,
      desc: "Custom neural networks, predictive algorithms, computer vision pipelines, and domain LLM integration to automate and accelerate your business operations.",
      items: [
        "Machine Learning Models",
        "Deep Learning & PyTorch",
        "Computer Vision & OpenCV",
        "Natural Language Processing",
        "Custom LLMs & RAG Pipelines",
        "Predictive Business Analytics",
        "Automated OCR & Document AI",
        "Edge TinyML Inference"
      ],
      techStack: ["Python", "TensorFlow", "PyTorch", "OpenCV", "FastAPI", "OpenAI API"]
    },
    {
      id: "iot-hardware",
      category: "IoT & Smart Hardware",
      subtitle: "Embedded Silicon & Telemetry",
      icon: <Cpu size={26} />,
      desc: "Turnkey hardware engineering: multi-layer custom PCB design, microcontrollers, sensor integration, real-time telemetry, and industrial edge computing.",
      items: [
        "Custom PCB Schematic & Layout",
        "ESP32 & STM32 Firmware",
        "Sensor Bus Routing (I2C/SPI/CAN)",
        "MQTT & WebSocket Gateways",
        "Industrial Automation & SCADA",
        "Raspberry Pi Edge Gateways",
        "Power Management Circuits",
        "Hardware Prototyping & Enclosures"
      ],
      techStack: ["ESP32-S3", "STM32", "Altium/KiCAD", "FreeRTOS", "MQTT", "C/C++"]
    },
    {
      id: "web-development",
      category: "Website & Web Development",
      subtitle: "Modern, High-Performance Web Apps",
      icon: <Globe size={26} />,
      desc: "Ultra-fast, responsive web applications, enterprise portals, and high-converting landing pages built with modern frameworks and pristine UX.",
      items: [
        "Custom Websites",
        "Responsive Modern Design",
        "E-Commerce Platforms",
        "Portfolio Websites",
        "High-Converting Landing Pages",
        "Website Redesign & Modernization",
        "Cloud Hosting & SSL Setup",
        "Speed Optimization & SEO"
      ],
      techStack: ["React", "Next.js", "Tailwind CSS", "Node.js", "Vercel", "PostgreSQL"]
    },
    {
      id: "mobile-apps",
      category: "Mobile App Development",
      subtitle: "Native & Cross-Platform Apps",
      icon: <Smartphone size={26} />,
      desc: "User-friendly, scalable mobile apps for iOS and Android featuring Bluetooth Low Energy (BLE) hardware connectivity and offline-first capabilities.",
      items: [
        "Cross-Platform Flutter Apps",
        "Native Android & iOS",
        "Bluetooth BLE Hardware Sync",
        "Real-Time Push Notifications",
        "Offline-First Data Storage",
        "Interactive Dashboards",
        "App Store & Play Store Deployment",
        "API Integration & Security"
      ],
      techStack: ["Flutter", "Dart", "Swift", "Kotlin", "Firebase", "BLE GATT"]
    },
    {
      id: "academic-projects",
      category: "College & Academic Projects",
      subtitle: "Academic Project Assistance & Mentorship",
      icon: <HardDrive size={26} />,
      desc: "Comprehensive engineering guidance for engineering college students: Mini/Major projects, Machine Learning, IoT hardware, and publication-ready documentation.",
      items: [
        "Machine Learning Projects",
        "IoT & Hardware Projects",
        "Python & Web Projects",
        "Final Year Major Projects",
        "Mini Projects for Diploma/BE",
        "Full Project Documentation & Reports",
        "Research Paper Assistance",
        "Viva & Presentation Support"
      ],
      techStack: ["Python", "Flask/FastAPI", "Arduino/ESP32", "React", "LaTeX", "OpenCV"]
    }
  ];

  // 8 Why Choose Us items matching Phoenova
  const whyChooseUs = [
    {
      icon: <Cpu size={24} />,
      title: "Full-Stack In-House Engineering",
      desc: "From PCB silicon and hardware firmware to mobile apps and cloud servers, we engineer the entire vertical stack in-house."
    },
    {
      icon: <Zap size={24} />,
      title: "Rapid Prototyping & Delivery",
      desc: "Agile sprints ensure functional prototypes in weeks, not months, accelerating your product's time-to-market."
    },
    {
      icon: <Clock size={24} />,
      title: "24/7 Dedicated Support",
      desc: "Continuous technical maintenance, emergency uptime assistance, and active monitoring for all delivered solutions."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Enterprise Security & Privacy",
      desc: "Bank-grade TLS 1.3 encryption, secure boot firmware, strict NDAs, and full intellectual property ownership."
    },
    {
      icon: <Award size={24} />,
      title: "Senior Engineering Craftsmanship",
      desc: "Built with senior architectural rigor, deterministic low-latency code, and fault-tolerant cloud backends."
    },
    {
      icon: <Sparkles size={24} />,
      title: "Custom Tailored Solutions",
      desc: "No cookie-cutter templates. Every line of code and hardware schematic is customized to your exact operational requirements."
    },
    {
      icon: <Layers size={24} />,
      title: "Scalable & Future-Proof",
      desc: "Designed to grow effortlessly from early-stage proof-of-concept to hundreds of thousands of active devices."
    },
    {
      icon: <CheckCircle2 size={24} />,
      title: "Transparent & Fair Pricing",
      desc: "Honest milestone-based pricing with no hidden fees, clear deliverables, and comprehensive documentation."
    }
  ];

  // 6 Work Process Steps matching Phoenova
  const workProcess = [
    {
      step: "01",
      title: "Discovery & Requirement Analysis",
      desc: "We dive deep into your project goals, technical constraints, budget, and power/hardware requirements to form a concrete spec sheet."
    },
    {
      step: "02",
      title: "Architecture & Schematic Design",
      desc: "Our engineers architect the hardware schematics, cloud database schemas, model pipelines, and UI wireframes."
    },
    {
      step: "03",
      title: "Prototyping & Development",
      desc: "We write clean code, fabricate prototype circuit boards, train AI models, and assemble the working software application."
    },
    {
      step: "04",
      title: "Testing & Quality Assurance",
      desc: "Rigorous hardware stress testing, firmware memory validation, cross-browser audits, and automated security checks."
    },
    {
      step: "05",
      title: "Deployment & Production Handover",
      desc: "Seamless cloud deployment, firmware flashing, user training, complete source code handover, and production launch."
    },
    {
      step: "06",
      title: "Maintenance & 24/7 Support",
      desc: "Ongoing monitoring, telemetry health tracking, feature updates, and round-the-clock technical troubleshooting."
    }
  ];

  // Tech Stack matching Phoenova
  const techStack = [
    { name: "Python", cat: "ai" },
    { name: "TensorFlow", cat: "ai" },
    { name: "PyTorch", cat: "ai" },
    { name: "OpenCV", cat: "ai" },
    { name: "FastAPI", cat: "web" },
    { name: "React", cat: "web" },
    { name: "Next.js", cat: "web" },
    { name: "Node.js", cat: "web" },
    { name: "Tailwind CSS", cat: "web" },
    { name: "ESP32 / STM32", cat: "iot" },
    { name: "Custom PCB CAD", cat: "iot" },
    { name: "FreeRTOS", cat: "iot" },
    { name: "Flutter", cat: "web" },
    { name: "PostgreSQL", cat: "web" },
    { name: "MongoDB", cat: "web" },
    { name: "Docker", cat: "web" }
  ];

  // Project Showcase matching Phoenova
  const projects = [
    {
      title: "Real-Time Telemetry & Operations Dashboard",
      cat: "web",
      desc: "Cloud-connected operations platform featuring live sensor telemetry, automated alerts, and responsive multi-device analytics.",
      tech: ["React", "Node.js", "PostgreSQL", "Tailwind"],
      highlight: "Web Application"
    },
    {
      title: "Edge AI Industrial Vision Defect Detection",
      cat: "ai",
      desc: "Real-time computer vision system running on local edge accelerators to detect surface anomalies on manufacturing lines at 60 FPS.",
      tech: ["Python", "PyTorch", "TensorRT", "FastAPI"],
      highlight: "Sub-10ms Inference"
    },
    {
      title: "High-Performance E-Commerce Platform",
      cat: "web",
      desc: "Modern digital storefront featuring sub-second page loads, real-time product catalogs, seamless payment gateway integration, and customer order tracking.",
      tech: ["Next.js", "React", "Node.js", "Tailwind"],
      highlight: "Web Application"
    },
    {
      title: "Interactive Analytics & Monitoring Dashboard",
      cat: "web",
      desc: "Rich data visualization portal providing real-time telemetry analytics, interactive charts, and role-based client management.",
      tech: ["React", "TypeScript", "Tailwind", "PostgreSQL"],
      highlight: "Cloud Platform"
    },
    {
      title: "IoT Environmental Telemetry Gateway",
      cat: "iot",
      desc: "Custom 4-layer ESP32 PCB monitoring ambient temperature, humidity, air quality, and broadcasting via encrypted MQTT to a cloud dashboard.",
      tech: ["ESP32-S3", "Custom PCB", "MQTT", "React"],
      highlight: "Turnkey Hardware"
    },
    {
      title: "Mobile BLE Hardware Companion App",
      cat: "web",
      desc: "Flutter cross-platform application connecting directly to embedded machinery via Bluetooth Low Energy for field calibration and logs.",
      tech: ["Flutter", "BLE GATT", "Dart", "Firebase"],
      highlight: "Mobile & Hardware"
    },
    {
      title: "Student Academic AI & IoT Major Project",
      cat: "academic",
      desc: "Smart autonomous drone navigation and agriculture analysis project with IEEE standard research documentation for final-year engineering students.",
      tech: ["Python", "TensorFlow", "Raspberry Pi", "Documentation"],
      highlight: "College Major Project"
    }
  ];

  // Client Testimonials matching Phoenova
  const testimonials = [
    {
      name: "R. Karthikeyan",
      role: "Managing Director, Industrial Systems",
      text: "ZeroToZetta transformed our manufacturing plant with their incredible AI vision and IoT telemetry solutions. Highly recommended for any serious business!"
    },
    {
      name: "Dr. S. Priya",
      role: "Academic Project Coordinator",
      text: "Professional engineering team, fast delivery, and excellent project documentation. The hardware prototypes and ML algorithms were top quality."
    },
    {
      name: "V. Anand Kumar",
      role: "Founder, SaaS Platform",
      text: "Their software development and system support are outstanding. 24/7 availability, lightning-fast turnaround, and clean, scalable code."
    }
  ];

  // FAQs matching Phoenova
  const faqs = [
    {
      q: "What services do you offer?",
      a: "ZeroToZetta provides end-to-end technology solutions: AI & Machine Learning, Custom IoT Hardware & PCB Design, Web Application Development, Mobile Apps, and Engineering College Project Assistance."
    },
    {
      q: "How long does a project take?",
      a: "Project timelines depend on complexity. Small websites or prototypes typically take 1–3 weeks. Custom hardware, mobile applications, or full-stack web platforms generally take 4–8 weeks with continuous milestone demos."
    },
    {
      q: "Do you provide 24/7 support and maintenance?",
      a: "Yes! We provide 24/7 technical support and maintenance for all deployed software systems and hardware telemetry products to ensure zero downtime."
    },
    {
      q: "How much do your services cost?",
      a: "Our pricing is transparent, competitive, and tailored to project scope. Contact us today through our form or WhatsApp for a free technical consultation and quote."
    },
    {
      q: "Can you design both physical hardware and web/mobile software?",
      a: "Absolutely! Unlike standard software agencies, we are hardware and software engineers. We design physical circuit boards, flash embedded microcontrollers, and connect them seamlessly to cloud platforms and mobile apps."
    },
    {
      q: "Do you assist with college and academic projects?",
      a: "Yes! We mentor engineering and diploma students on mini and major projects in Machine Learning, IoT, Python, and Web Development, complete with reports, presentations, and working demonstration hardware."
    }
  ];

  const filteredProjects = projects.filter(p => {
    if (activeProjectFilter === 'all') return true;
    return p.cat === activeProjectFilter;
  });

  const filteredTech = techStack.filter(t => {
    if (activeTechFilter === 'all') return true;
    return t.cat === activeTechFilter;
  });

  return (
    <div className="app-container">
      {/* Background Ambient Glows */}
      <div className="ambient-glow-1"></div>
      <div className="ambient-glow-2"></div>
      <div className="ambient-glow-3"></div>

      {/* Navigation Header */}
      <nav className="navbar">
        <div className="nav-inner">
          <a href="#" className="brand-logo">
            <img src="./logo.png" alt="ZeroToZetta Logo" className="brand-logo-img" />
            <div className="brand-name">
              ZeroTo<span>Zetta</span>
            </div>
          </a>

          <ul className="nav-links">
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#why-us" className="nav-link">Why Us</a></li>
            <li><a href="#process" className="nav-link">Process</a></li>
            <li><a href="#projects" className="nav-link">Projects</a></li>
            <li><a href="#tech" className="nav-link">Tech Stack</a></li>
            <li><a href="#testimonials" className="nav-link">Reviews</a></li>
            <li><a href="#faq" className="nav-link">FAQ</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a href="#contact" className="btn-primary" style={{ padding: '0.6rem 1.3rem', fontSize: '0.88rem' }}>
              <span>Get Started</span>
              <ArrowRight size={16} />
            </a>

            <button 
              className="nav-mobile-btn" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu animated drawer */}
        {mobileMenuOpen && (
          <div className="mobile-drawer">
            <a href="#about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              <span>About ZeroToZetta</span>
              <ArrowRight size={16} />
            </a>
            <a href="#services" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              <span>Services & Offerings</span>
              <ArrowRight size={16} />
            </a>
            <a href="#why-us" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              <span>Why Choose Us</span>
              <ArrowRight size={16} />
            </a>
            <a href="#process" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              <span>Work Process</span>
              <ArrowRight size={16} />
            </a>
            <a href="#projects" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              <span>Project Showcase</span>
              <ArrowRight size={16} />
            </a>
            <a href="#tech" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              <span>Tech Stack</span>
              <ArrowRight size={16} />
            </a>
            <a href="#testimonials" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              <span>Client Reviews</span>
              <ArrowRight size={16} />
            </a>
            <a href="#faq" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
              <span>FAQ</span>
              <ArrowRight size={16} />
            </a>
            <a 
              href="#contact" 
              className="btn-primary" 
              style={{ width: '100%', marginTop: '0.8rem', textDecoration: 'none' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Get Started / Contact Us</span>
              <ArrowRight size={16} />
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section with Interactive Orbit Graphic */}
      <section className="section-wrapper" style={{ paddingTop: '4rem', paddingBottom: '3rem' }}>
        <div className="hero-canvas-grid"></div>
        <div className="hero-content">
          <div>
            <h1 className="hero-h1">
              Transforming <br />
              Businesses Through <br />
              <span className="gradient-text-blue">Technology & AI</span>
            </h1>

            <p className="hero-paragraph">
              Helping businesses grow with intelligent AI automation, modern websites & mobile apps, custom IoT hardware, and professional engineering support.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn-primary">
                <span>Get Started</span>
                <ArrowRight size={18} />
              </a>

              <a href="#services" className="btn-secondary">
                <span>View Services</span>
              </a>
            </div>

            {/* Quick check badges */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#94a3b8' }}>
                <CheckCircle2 size={16} style={{ color: '#3b82f6' }} />
                <span>AI & Automation</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#94a3b8' }}>
                <CheckCircle2 size={16} style={{ color: '#3b82f6' }} />
                <span>IoT & Hardware</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#94a3b8' }}>
                <CheckCircle2 size={16} style={{ color: '#3b82f6' }} />
                <span>24/7 Professional Support</span>
              </div>
            </div>
          </div>

          {/* Interactive Live AI Orbit Graphic Visualizer */}
          <div className="orbit-container">
            {/* AI Radar Scanner Sweep */}
            <div className="orbit-radar-sweep"></div>

            {/* Concentric Neural Energy Pulse Waves */}
            <div className="orbit-pulse-wave"></div>
            <div className="orbit-pulse-wave"></div>
            <div className="orbit-pulse-wave"></div>

            {/* SVG Laser Stream Connectors */}
            <svg className="orbit-svg-connectors" viewBox="0 0 480 480">
              {/* Outer Glow Lines */}
              <line x1="240" y1="240" x2="240" y2="48" className="orbit-laser-glow" />
              <line x1="240" y1="240" x2="410" y2="160" className="orbit-laser-glow" />
              <line x1="240" y1="240" x2="360" y2="400" className="orbit-laser-glow" />
              <line x1="240" y1="240" x2="120" y2="400" className="orbit-laser-glow" />
              <line x1="240" y1="240" x2="70" y2="160" className="orbit-laser-glow" />

              {/* Animated Laser Pulses */}
              <line x1="240" y1="240" x2="240" y2="48" className="orbit-laser-line" />
              <line x1="240" y1="240" x2="410" y2="160" className="orbit-laser-line" />
              <line x1="240" y1="240" x2="360" y2="400" className="orbit-laser-line" />
              <line x1="240" y1="240" x2="120" y2="400" className="orbit-laser-line" />
              <line x1="240" y1="240" x2="70" y2="160" className="orbit-laser-line" />
            </svg>

            {/* Concentric Orbit Rings */}
            <div className="orbit-ring-2"></div>
            <div className="orbit-ring-1"></div>

            {/* Orbiting Photon Particles */}
            <div className="orbit-particle-track">
              <div className="orbit-photon"></div>
            </div>
            <div className="orbit-particle-track-rev">
              <div className="orbit-photon-2"></div>
            </div>

            {/* Center Core with Rotating Outer Spin Ring & AI Aura */}
            <div className="orbit-center-core" onClick={() => setSelectedServiceModal(servicesList[0])}>
              <div className="orbit-core-ring-spin"></div>
              <img src="./logo.png" alt="ZeroToZetta Logo" className="orbit-core-logo" />
              <span className="orbit-core-text">ZEROTOZETTA</span>
            </div>

            {/* Orbiting Capability Nodes with Individual AI Floating Motion */}
            <div 
              className="orbit-node orbit-node-1" 
              style={{ top: '4%', left: '50%', transform: 'translateX(-50%)' }}
              onClick={() => setSelectedServiceModal(servicesList[0])}
            >
              <Brain size={20} />
              <span className="orbit-node-label">AI & ML</span>
            </div>

            <div 
              className="orbit-node orbit-node-2" 
              style={{ top: '28%', right: '2%' }}
              onClick={() => setSelectedServiceModal(servicesList[1])}
            >
              <Cpu size={20} />
              <span className="orbit-node-label">IOT PCB</span>
            </div>

            <div 
              className="orbit-node orbit-node-3" 
              style={{ bottom: '8%', right: '14%' }}
              onClick={() => setSelectedServiceModal(servicesList[2])}
            >
              <Globe size={20} />
              <span className="orbit-node-label">WEB</span>
            </div>

            <div 
              className="orbit-node orbit-node-4" 
              style={{ bottom: '8%', left: '14%' }}
              onClick={() => setSelectedServiceModal(servicesList[3])}
            >
              <Smartphone size={20} />
              <span className="orbit-node-label">MOBILE</span>
            </div>

            <div 
              className="orbit-node orbit-node-5" 
              style={{ top: '28%', left: '2%' }}
              onClick={() => setSelectedServiceModal(servicesList[4])}
            >
              <HardDrive size={20} />
              <span className="orbit-node-label">ACADEMIC</span>
            </div>
          </div>
        </div>

        {/* Global Stats Banner (100+ Projects, 99% Satisfaction, 24/7 Support, 4x Speed) */}
        <div className="stats-banner reveal-on-scroll">
          <div className="stat-item">
            <div className="stat-number">
              <span>{stats.projects}</span>
              <span>+</span>
            </div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              <span>{stats.satisfaction}</span>
              <span>%</span>
            </div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              <span>{stats.support}</span>
              <span>/7</span>
            </div>
            <div className="stat-label">Professional Support</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              <span>{stats.speed}</span>
              <span>x</span>
            </div>
            <div className="stat-label">Faster Turnaround</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-wrapper">
        <div className="section-header reveal-on-scroll">
          <div className="section-tag">
            <Award size={14} />
            <span>About ZeroToZetta</span>
          </div>
          <h2 className="section-title">
            Engineering Tomorrow's Solutions, <span className="gradient-text-blue">Today</span>
          </h2>
          <p className="section-desc">
            Headquartered in Erode, Tamil Nadu, ZeroToZetta is a premier technology & software development studio dedicated to delivering high-performance digital systems and smart hardware.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
          <div className="glass-card ai-interactive-card reveal-on-scroll stagger-1" style={{ padding: '2rem', borderRadius: '18px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.6rem' }}>Our Mission</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6 }}>
              To empower modern businesses with intelligent AI automation, reliable IoT hardware, and robust web applications that drive tangible operational growth.
            </p>
          </div>

          <div className="glass-card ai-interactive-card reveal-on-scroll stagger-2" style={{ padding: '2rem', borderRadius: '18px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.6rem' }}>Silicon to Cloud</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6 }}>
              We eliminate technical fragmentation by designing the physical circuit boards, programming microcontrollers, and building cloud backends all under one roof.
            </p>
          </div>

          <div className="glass-card ai-interactive-card reveal-on-scroll stagger-3" style={{ padding: '2rem', borderRadius: '18px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.6rem' }}>Student Mentorship</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6 }}>
              We bridge academic curriculum and industrial reality, guiding engineering students through real-world AI, Machine Learning, and IoT major projects.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section with Interactive Modal Trigger */}
      <section id="services" className="section-wrapper">
        <div className="section-header reveal-on-scroll">
          <div className="section-tag">
            <Cpu size={14} />
            <span>Our Services</span>
          </div>
          <h2 className="section-title">
            What We Offer at <span className="gradient-text-blue">ZeroToZetta</span>
          </h2>
          <p className="section-desc">
            Click any service to explore detailed features, tech stacks, and capabilities.
          </p>
        </div>

        <div className="services-grid">
          {servicesList.map((srv, srvIdx) => (
            <div 
              key={srv.id} 
              className={`service-card ai-interactive-card reveal-on-scroll stagger-${(srvIdx % 5) + 1}`}
              onClick={() => setSelectedServiceModal(srv)}
            >
              <div className="service-card-top">
                <div className="service-icon-box">
                  {srv.icon}
                </div>
                <div className="service-count-badge">
                  {srv.items.length} Offerings
                </div>
              </div>

              <h3 className="service-title">{srv.category}</h3>
              <div className="service-subtitle">{srv.subtitle}</div>
              <p className="service-desc">{srv.desc}</p>

              <div className="service-items-chips">
                {srv.items.slice(0, 4).map((it, idx) => (
                  <span key={idx} className="service-item-chip">{it}</span>
                ))}
                {srv.items.length > 4 && (
                  <span className="service-item-chip" style={{ color: '#60a5fa' }}>+{srv.items.length - 4} more</span>
                )}
              </div>

              <div className="service-footer-action">
                <span>Explore Full Details</span>
                <ArrowRight size={15} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Service Details Modal (Phoenova Feature) */}
      {selectedServiceModal && (
        <div className="service-modal-overlay" onClick={() => setSelectedServiceModal(null)}>
          <div className="service-modal-dialog" onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(59,130,246,0.2)' }}>
              <div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff' }}>{selectedServiceModal.category}</h3>
                <div style={{ color: '#60a5fa', fontSize: '0.9rem', fontWeight: 600 }}>{selectedServiceModal.subtitle}</div>
              </div>
              <button 
                onClick={() => setSelectedServiceModal(null)}
                style={{ background: 'rgba(255,255,255,0.06)', border: 'none', color: '#cbd5e1', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>

            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              {selectedServiceModal.desc}
            </p>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', marginBottom: '0.8rem', letterSpacing: '0.04em' }}>
                Included Capabilities & Offerings:
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.6rem' }}>
                {selectedServiceModal.items.map((it: string, idx: number) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
                    <Check size={16} className="text-[#3b82f6]" />
                    <span>{it}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', marginBottom: '0.8rem', letterSpacing: '0.04em' }}>
                Technology Stack:
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {selectedServiceModal.techStack.map((tech: string, idx: number) => (
                  <span key={idx} className="tech-badge" style={{ color: '#93c5fd' }}>{tech}</span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <a 
                href="#contact" 
                className="btn-primary" 
                style={{ flex: 1, textDecoration: 'none' }}
                onClick={() => {
                  setFormData(prev => ({ ...prev, service: selectedServiceModal.category }));
                  setSelectedServiceModal(null);
                }}
              >
                <span>Request Quote for This Service</span>
                <ArrowRight size={16} />
              </a>
              <button 
                onClick={() => setSelectedServiceModal(null)}
                className="btn-secondary"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Why Choose Us Section (8 Cards) */}
      <section id="why-us" className="section-wrapper">
        <div className="section-header reveal-on-scroll">
          <div className="section-tag">
            <ShieldCheck size={14} />
            <span>Why Choose Us</span>
          </div>
          <h2 className="section-title">
            The ZeroToZetta <span className="gradient-text-blue">Advantage</span>
          </h2>
          <p className="section-desc">
            We deliver reliable, production-tested software and hardware that solves real problems.
          </p>
        </div>

        <div className="why-grid">
          {whyChooseUs.map((w, idx) => (
            <div key={idx} className={`why-card ai-interactive-card reveal-on-scroll stagger-${(idx % 4) + 1}`}>
              <div className="why-icon-box">
                {w.icon}
              </div>
              <h3 className="why-title">{w.title}</h3>
              <p className="why-desc">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Work Process (6 Steps) */}
      <section id="process" className="section-wrapper">
        <div className="section-header reveal-on-scroll">
          <div className="section-tag">
            <Layers size={14} />
            <span>How We Work</span>
          </div>
          <h2 className="section-title">
            Our Proven <span className="gradient-text-blue">6-Step Process</span>
          </h2>
          <p className="section-desc">
            From initial idea to live production launch and continuous support.
          </p>
        </div>

        <div className="process-grid">
          {workProcess.map((p, idx) => (
            <div key={idx} className={`process-card ai-interactive-card reveal-on-scroll stagger-${(idx % 3) + 1}`}>
              <div className="process-number">{p.step}</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.6rem' }}>{p.title}</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section with Category Filter */}
      <section id="tech" className="section-wrapper">
        <div className="section-header reveal-on-scroll">
          <div className="section-tag">
            <Code2 size={14} />
            <span>Our Toolbox</span>
          </div>
          <h2 className="section-title">
            Technologies <span className="gradient-text-blue">We Master</span>
          </h2>
          <p className="section-desc">
            Modern, battle-tested technologies selected for speed, stability, and scale.
          </p>
        </div>

        <div className="tech-tabs reveal-on-scroll">
          <button 
            className={`tech-tab ${activeTechFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTechFilter('all')}
          >
            All Technologies
          </button>
          <button 
            className={`tech-tab ${activeTechFilter === 'ai' ? 'active' : ''}`}
            onClick={() => setActiveTechFilter('ai')}
          >
            AI & Machine Learning
          </button>
          <button 
            className={`tech-tab ${activeTechFilter === 'iot' ? 'active' : ''}`}
            onClick={() => setActiveTechFilter('iot')}
          >
            IoT & Hardware
          </button>
          <button 
            className={`tech-tab ${activeTechFilter === 'web' ? 'active' : ''}`}
            onClick={() => setActiveTechFilter('web')}
          >
            Web & Cloud
          </button>
        </div>

        <div className="tech-grid reveal-on-scroll">
          {filteredTech.map((tech, idx) => (
            <div key={idx} className="tech-item-card ai-interactive-card">
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(37,99,235,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60a5fa', flexShrink: 0 }}>
                <Code2 size={20} />
              </div>
              <div style={{ fontWeight: 600, fontSize: '0.95rem', color: '#ffffff' }}>
                {tech.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Showcase / Portfolio Section */}
      <section id="projects" className="section-wrapper">
        <div className="section-header reveal-on-scroll">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Portfolio</span>
          </div>
          <h2 className="section-title">
            Project <span className="gradient-text-blue">Showcase</span>
          </h2>
          <p className="section-desc">
            Explore recent software, IoT hardware, and AI platforms built by ZeroToZetta.
          </p>
        </div>

        <div className="tech-tabs reveal-on-scroll" style={{ marginBottom: '2.5rem' }}>
          <button 
            className={`tech-tab ${activeProjectFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveProjectFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`tech-tab ${activeProjectFilter === 'ai' ? 'active' : ''}`}
            onClick={() => setActiveProjectFilter('ai')}
          >
            AI & Vision
          </button>
          <button 
            className={`tech-tab ${activeProjectFilter === 'iot' ? 'active' : ''}`}
            onClick={() => setActiveProjectFilter('iot')}
          >
            IoT Hardware
          </button>
          <button 
            className={`tech-tab ${activeProjectFilter === 'web' ? 'active' : ''}`}
            onClick={() => setActiveProjectFilter('web')}
          >
            Web Systems
          </button>
          <button 
            className={`tech-tab ${activeProjectFilter === 'academic' ? 'active' : ''}`}
            onClick={() => setActiveProjectFilter('academic')}
          >
            College Projects
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((p, idx) => (
            <div key={idx} className={`project-card ai-interactive-card reveal-on-scroll stagger-${(idx % 3) + 1}`}>
              <div className="project-tag">{p.highlight}</div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tech-pills">
                {p.tech.map((t, tIdx) => (
                  <span key={tIdx} className="project-tech-pill">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Testimonials */}
      <section id="testimonials" className="section-wrapper">
        <div className="section-header reveal-on-scroll">
          <div className="section-tag">
            <Star size={14} />
            <span>Client Feedback</span>
          </div>
          <h2 className="section-title">
            What Our Clients <span className="gradient-text-blue">Say About Us</span>
          </h2>
          <p className="section-desc">
            Trusted by businesses, founders, and academic departments across Tamil Nadu and beyond.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className={`testimonial-card ai-interactive-card reveal-on-scroll stagger-${idx + 1}`}>
              <div style={{ display: 'flex', gap: '3px', color: '#f59e0b', marginBottom: '1.2rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#f59e0b" />
                ))}
              </div>
              <p className="testimonial-quote">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>{t.name}</div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Spotlight (Rishvanth SK & Agalya N) */}
      <section className="section-wrapper">
        <div className="section-header reveal-on-scroll">
          <div className="section-tag">
            <Users size={14} />
            <span>Executive Team</span>
          </div>
          <h2 className="section-title">
            Leadership at <span className="gradient-text-blue">ZeroToZetta</span>
          </h2>
          <p className="section-desc">
            Visionary leaders driving technological advancement and customer success.
          </p>
        </div>

        <div className="team-grid">
          <div className="team-card ai-interactive-card reveal-on-scroll stagger-1">
            <div className="team-avatar-box">
              <span>RS</span>
            </div>
            <div>
              <div style={{ display: 'inline-block', padding: '3px 10px', borderRadius: '999px', background: 'rgba(37,99,235,0.15)', color: '#60a5fa', fontSize: '0.78rem', fontWeight: 600, marginBottom: '6px' }}>
                FOUNDER / CEO
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff' }}>Rishvanth SK</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '6px', lineHeight: 1.5 }}>
                Visionary technologist driving AI architectures, embedded hardware engineering, and technical innovation strategy at ZeroToZetta.
              </p>
              <div style={{ marginTop: '0.8rem', display: 'flex', gap: '0.6rem' }}>
                <span className="tech-badge">AI & Hardware Architect</span>
                <span className="tech-badge">Erode, TN</span>
              </div>
            </div>
          </div>

          <div className="team-card ai-interactive-card reveal-on-scroll stagger-2">
            <div className="team-avatar-box">
              <span>AN</span>
            </div>
            <div>
              <div style={{ display: 'inline-block', padding: '3px 10px', borderRadius: '999px', background: 'rgba(37,99,235,0.15)', color: '#60a5fa', fontSize: '0.78rem', fontWeight: 600, marginBottom: '6px' }}>
                MANAGER
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff' }}>Agalya N</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '6px', lineHeight: 1.5 }}>
                Directs operational excellence, project execution pipelines, client partnerships, and strategic solution delivery.
              </p>
              <div style={{ marginTop: '0.8rem', display: 'flex', gap: '0.6rem' }}>
                <span className="tech-badge">Operations & Delivery</span>
                <span className="tech-badge">Client Strategy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) */}
      <section id="faq" className="section-wrapper">
        <div className="section-header reveal-on-scroll">
          <div className="section-tag">
            <MessageSquare size={14} />
            <span>Got Questions?</span>
          </div>
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text-blue">Questions</span>
          </h2>
          <p className="section-desc">
            Everything you need to know about our services, pricing, and project process.
          </p>
        </div>

        <div className="faq-grid reveal-on-scroll">
          {faqs.map((faq, idx) => (
            <div key={idx} className="faq-item">
              <button 
                className="faq-question-btn"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <span>{faq.q}</span>
                <ChevronDown 
                  size={18} 
                  style={{ 
                    transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)', 
                    transition: 'transform 0.25s ease',
                    color: '#60a5fa'
                  }} 
                />
              </button>
              {openFaq === idx && (
                <div className="faq-answer">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section (With Phoenova 4-Box Quick Contact Channels) */}
      <section id="contact" className="section-wrapper">
        <div className="section-header reveal-on-scroll">
          <div className="section-tag">
            <Mail size={14} />
            <span>Contact Us</span>
          </div>
          <h2 className="section-title">
            Ready to Transform <span className="gradient-text-blue">Your Business?</span>
          </h2>
          <p className="section-desc">
            Contact us today for a free technical consultation, custom project quote, or hardware assessment.
          </p>
        </div>

        {/* 4 Direct Contact Channel Cards (Phoenova Style) */}
        <div className="contact-grid-top reveal-on-scroll">
          <div className="contact-channel-card ai-interactive-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#60a5fa', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.5rem' }}>
              <Phone size={18} />
              <span>CALL US</span>
            </div>
            <a href="tel:7604883377" style={{ color: '#fff', fontSize: '1rem', fontWeight: 600, textDecoration: 'none', display: 'block' }}>
              +91 76048 83377
            </a>
            <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '4px' }}>Direct phone inquiry</div>
          </div>

          <div className="contact-channel-card ai-interactive-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#60a5fa', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.5rem' }}>
              <Mail size={18} />
              <span>EMAIL US</span>
            </div>
            <a href="mailto:infozerotozetta@gmail.com" style={{ color: '#60a5fa', fontSize: '0.92rem', fontWeight: 600, textDecoration: 'none', display: 'block', wordBreak: 'break-all' }}>
              infozerotozetta@gmail.com
            </a>
            <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '4px' }}>Response within 24h</div>
          </div>

          <div className="contact-channel-card ai-interactive-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#60a5fa', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.5rem' }}>
              <InstagramIcon size={18} />
              <span>INSTAGRAM</span>
            </div>
            <a href="https://instagram.com/zerotozetta" target="_blank" rel="noreferrer" style={{ color: '#93c5fd', fontSize: '1rem', fontWeight: 600, textDecoration: 'none', display: 'block' }}>
              @zerotozetta
            </a>
            <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '4px' }}>Follow builds & demos</div>
          </div>

          <div className="contact-channel-card ai-interactive-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#60a5fa', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.5rem' }}>
              <Clock size={18} />
              <span>WORKING HOURS</span>
            </div>
            <div style={{ color: '#fff', fontSize: '0.92rem', fontWeight: 600 }}>
              Mon – Sat: 9am – 8pm
            </div>
            <div style={{ fontSize: '0.78rem', color: '#38bdf8', marginTop: '4px' }}>Support: 24/7 Available</div>
          </div>
        </div>

        {/* Contact Form & Facility Information */}
        <div className="contact-layout reveal-on-scroll">
          <div className="contact-info-card">
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '1.2rem' }}>
              ZeroToZetta Headquarters
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              We serve clients locally across Tamil Nadu and globally across the world with state-of-the-art AI, IoT hardware, and custom software architectures.
            </p>

            <div className="info-item">
              <div className="info-icon">
                <MapPin size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', color: '#64748b' }}>OFFICE LOCATION</div>
                <div style={{ fontWeight: 600, color: '#fff' }}>Erode, Tamil Nadu, India</div>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Innovation & Development Center</div>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <Mail size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', color: '#64748b' }}>OFFICIAL INQUIRY</div>
                <a href="mailto:infozerotozetta@gmail.com" style={{ fontWeight: 600, color: '#60a5fa', textDecoration: 'none' }}>
                  infozerotozetta@gmail.com
                </a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon" style={{ background: 'rgba(34,197,94,0.15)', borderColor: 'rgba(34,197,94,0.3)', color: '#4ade80' }}>
                <Phone size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', color: '#64748b' }}>PHONE & WHATSAPP</div>
                <a href="https://wa.me/917604883377" target="_blank" rel="noreferrer" style={{ fontWeight: 600, color: '#4ade80', textDecoration: 'none' }}>
                  +91 76048 83377
                </a>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Instant Technical Consultation</div>
              </div>
            </div>

            <div style={{ marginTop: '2rem', padding: '1.2rem', borderRadius: '16px', background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(59,130,246,0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#60a5fa', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                <span className="pulse-dot"></span>
                <span>Active Engineering Pipeline</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.5 }}>
                Accepting new client engagements for AI, custom PCB hardware, and full-stack software development.
              </p>
            </div>
          </div>

          {/* Interactive Form with Phone Field & Submission States */}
          <div className="contact-form-card">
            {formStatus === 'success' ? (
              <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(34,197,94,0.15)', border: '1px solid #22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#4ade80' }}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '0.6rem' }}>Inquiry Prepared!</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '440px', margin: '0 auto 1.5rem' }}>
                  WhatsApp should open automatically with your project details pre-filled. If it didn't open, click below to chat directly with our team at <strong>+91 76048 83377</strong>:
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a 
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', background: 'linear-gradient(135deg, #16a34a, #15803d)' }}
                  >
                    <WhatsAppIcon size={18} />
                    <span>Open in WhatsApp</span>
                  </a>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="btn-secondary"
                  >
                    Edit / Send Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit}>
                {formError && (
                  <div className="form-error-toast">
                    <AlertTriangle size={18} />
                    <span>{formError}</span>
                  </div>
                )}

                {/* Honeypot anti-spam bot trap */}
                <input 
                  type="text" 
                  name="website_url_trap" 
                  className="honeypot-field" 
                  tabIndex={-1} 
                  autoComplete="off" 
                  value={honeypot} 
                  onChange={e => setHoneypot(e.target.value)} 
                />

                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    className="form-input" 
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input 
                      type="email" 
                      required 
                      className="form-input" 
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input 
                      type="tel" 
                      className="form-input" 
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Select Service *</label>
                  <select 
                    className="form-select"
                    value={formData.service}
                    onChange={e => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="AI & Machine Learning Solutions">AI & Machine Learning Solutions</option>
                    <option value="IoT & Smart Hardware Engineering">IoT & Smart Hardware Engineering</option>
                    <option value="Website & Web Development">Website & Web Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="College & Academic Projects">College & Academic Projects</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Tell us about your project *</label>
                  <textarea 
                    rows={4} 
                    required 
                    className="form-textarea" 
                    placeholder="Describe your goals, timeline, or hardware requirements..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === 'sending'}
                  className="btn-primary" 
                  style={{ width: '100%', padding: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem' }}
                >
                  {formStatus === 'sending' ? (
                    <>
                      <Activity size={18} className="animate-spin" />
                      <span>Connecting to WhatsApp...</span>
                    </>
                  ) : (
                    <>
                      <WhatsAppIcon size={18} />
                      <span>Send via WhatsApp</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Comprehensive Footer */}
      <footer className="footer-wrap">
        <div className="footer-inner">
          <div>
            <div className="brand-logo" style={{ marginBottom: '1rem' }}>
              <img src="./logo.png" alt="ZeroToZetta Logo" className="brand-logo-img" />
              <div className="brand-name">
                ZeroTo<span>Zetta</span>
              </div>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, maxWidth: '320px', marginBottom: '1.2rem' }}>
              From Zero to Zetta — Building the Future. Innovating, engineering, and scaling next-gen AI, smart IoT hardware, modern web platforms, and mobile apps.
            </p>
            <div style={{ display: 'flex', gap: '0.8rem' }}>
              <a 
                href="https://wa.me/917604883377" 
                target="_blank" 
                rel="noreferrer"
                style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(34,197,94,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4ade80', textDecoration: 'none' }}
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <a 
                href="https://instagram.com/zerotozetta" 
                target="_blank" 
                rel="noreferrer"
                style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(59,130,246,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cbd5e1', textDecoration: 'none' }}
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a 
                href="mailto:infozerotozetta@gmail.com" 
                style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(59,130,246,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cbd5e1', textDecoration: 'none' }}
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a 
                href="tel:7604883377"
                style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(15,23,42,0.8)', border: '1px solid rgba(59,130,246,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cbd5e1', textDecoration: 'none' }}
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
              Quick Links
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem', color: '#94a3b8' }}>
              <li><a href="#about" style={{ color: 'inherit', textDecoration: 'none' }}>About Us</a></li>
              <li><a href="#services" style={{ color: 'inherit', textDecoration: 'none' }}>Services</a></li>
              <li><a href="#why-us" style={{ color: 'inherit', textDecoration: 'none' }}>Why Choose Us</a></li>
              <li><a href="#process" style={{ color: 'inherit', textDecoration: 'none' }}>Our Process</a></li>
              <li><a href="#projects" style={{ color: 'inherit', textDecoration: 'none' }}>Project Showcase</a></li>
              <li><a href="#faq" style={{ color: 'inherit', textDecoration: 'none' }}>FAQ</a></li>
              <li><a href="#contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact Us</a></li>
            </ul>
          </div>

          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
              Services
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.9rem', color: '#94a3b8' }}>
              <li><a href="#services" style={{ color: 'inherit', textDecoration: 'none' }}>AI & Machine Learning</a></li>
              <li><a href="#services" style={{ color: 'inherit', textDecoration: 'none' }}>IoT & Smart Hardware</a></li>
              <li><a href="#services" style={{ color: 'inherit', textDecoration: 'none' }}>Web Development</a></li>
              <li><a href="#services" style={{ color: 'inherit', textDecoration: 'none' }}>Mobile Applications</a></li>
              <li><a href="#services" style={{ color: 'inherit', textDecoration: 'none' }}>College Projects</a></li>
            </ul>
          </div>

          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
              Headquarters
            </div>
            <div style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '0.8rem' }}>
              ZeroToZetta Technologies<br />
              Erode, Tamil Nadu, India<br />
              <a href="mailto:infozerotozetta@gmail.com" style={{ color: '#60a5fa', textDecoration: 'none' }}>infozerotozetta@gmail.com</a><br />
              <a href="tel:7604883377" style={{ color: '#cbd5e1', textDecoration: 'none' }}>+91 76048 83377</a>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '4px 10px', borderRadius: '6px', background: 'rgba(37,99,235,0.15)', color: '#93c5fd', fontSize: '0.75rem', border: '1px solid rgba(59,130,246,0.3)' }}>
              <span className="pulse-dot"></span>
              <span>24/7 Professional Support</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} ZeroToZetta. All rights reserved. Erode, Tamil Nadu.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <button 
              onClick={() => setActivePolicyModal('privacy')} 
              style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '0.88rem' }}
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setActivePolicyModal('terms')} 
              style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '0.88rem' }}
            >
              Terms of Service
            </button>
            <button 
              onClick={() => setActivePolicyModal('cookies')} 
              style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '0.88rem' }}
            >
              Cookie Preferences
            </button>
            <a href="#contact" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.88rem' }}>
              Support
            </a>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons: WhatsApp & Back to Top */}
      <div className="floating-actions-container">
        <button 
          onClick={scrollToTop} 
          className={`back-to-top-btn ${showBackToTop ? 'visible' : ''}`}
          aria-label="Back to Top"
        >
          <ArrowUp size={20} />
        </button>

        <a 
          href="https://wa.me/917604883377" 
          target="_blank" 
          rel="noreferrer"
          className="floating-whatsapp-btn"
          aria-label="Chat on WhatsApp"
        >
          <div className="whatsapp-pulse-ring"></div>
          <WhatsAppIcon size={28} />
          <span className="floating-whatsapp-tooltip">Chat with our Engineers</span>
        </a>
      </div>

      {/* Cookie Consent Banner */}
      {cookieConsent === 'unknown' && (
        <div className="cookie-banner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#60a5fa', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.4rem' }}>
            <Cookie size={20} />
            <span>Cookie & Privacy Preferences</span>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.5 }}>
            We use cookies to improve navigation speed, enable direct WhatsApp communication, and analyze anonymous telemetry to deliver optimal engineering experiences.
          </p>
          <div className="cookie-actions">
            <button onClick={handleAcceptAllCookies} className="btn-cookie-accept">
              Accept All
            </button>
            <button onClick={handleDeclineCookies} className="btn-cookie-decline">
              Decline Non-Essential
            </button>
            <button onClick={() => setActivePolicyModal('cookies')} className="btn-cookie-customize">
              Customize
            </button>
          </div>
        </div>
      )}

      {/* Policy, Terms & Cookie Preferences Modal */}
      {activePolicyModal && (
        <div className="policy-modal-overlay" onClick={() => setActivePolicyModal(null)}>
          <div className="policy-modal-dialog" onClick={e => e.stopPropagation()}>
            <div className="policy-modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                {activePolicyModal === 'privacy' && <ShieldCheck size={22} style={{ color: '#60a5fa' }} />}
                {activePolicyModal === 'terms' && <FileText size={22} style={{ color: '#60a5fa' }} />}
                {activePolicyModal === 'cookies' && <Cookie size={22} style={{ color: '#60a5fa' }} />}
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff' }}>
                  {activePolicyModal === 'privacy' && 'Privacy Policy'}
                  {activePolicyModal === 'terms' && 'Terms of Service'}
                  {activePolicyModal === 'cookies' && 'Cookie Preferences'}
                </h3>
              </div>
              <button 
                onClick={() => setActivePolicyModal(null)}
                style={{ background: 'rgba(255,255,255,0.06)', border: 'none', color: '#cbd5e1', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
              >
                <X size={18} />
              </button>
            </div>

            <div className="policy-modal-body">
              {activePolicyModal === 'privacy' && (
                <div>
                  <div className="policy-section">
                    <h4>1. Overview & Scope</h4>
                    <p>At ZeroToZetta Technologies (Erode, Tamil Nadu), we take your privacy seriously. This privacy disclosure outlines how we collect, handle, and protect your information when using our website and technical consulting services.</p>
                  </div>
                  <div className="policy-section">
                    <h4>2. Information We Collect</h4>
                    <p>When you submit a project inquiry or contact us via WhatsApp, we collect only the necessary technical details: your full name, email address, phone number, and project specifications.</p>
                  </div>
                  <div className="policy-section">
                    <h4>3. How Information Is Used</h4>
                    <p>Your details are exclusively used to prepare architectural proposals, provide technical assessments, schedule consultations, and deliver engineering updates. We never sell, rent, or trade your personal data to third parties.</p>
                  </div>
                  <div className="policy-section">
                    <h4>4. Data Security</h4>
                    <p>We implement enterprise-grade encryption and secure protocols across our hardware and software pipelines to protect your proprietary schematics and intellectual property.</p>
                  </div>
                  <div className="policy-section">
                    <h4>5. Contact Our Privacy Officer</h4>
                    <p>For any inquiries regarding data protection or to request information removal, email us at <strong style={{ color: '#60a5fa' }}>infozerotozetta@gmail.com</strong>.</p>
                  </div>
                </div>
              )}

              {activePolicyModal === 'terms' && (
                <div>
                  <div className="policy-section">
                    <h4>1. Services Agreement</h4>
                    <p>ZeroToZetta provides specialized services in Artificial Intelligence & Machine Learning model engineering, custom IoT printed circuit board (PCB) design, embedded firmware programming, scalable web systems, and academic mentoring.</p>
                  </div>
                  <div className="policy-section">
                    <h4>2. Intellectual Property</h4>
                    <p>Upon final settlement and project delivery, all custom developed software codebases, firmware binaries, and hardware PCB Gerber design files become the exclusive intellectual property of the commissioning client.</p>
                  </div>
                  <div className="policy-section">
                    <h4>3. Quotations & Milestone Payments</h4>
                    <p>Project milestones, hardware component procurement, and delivery schedules are agreed upon in advance. Hardware development commences upon initial component procurement clearance.</p>
                  </div>
                  <div className="policy-section">
                    <h4>4. Support & Warranty</h4>
                    <p>We provide ongoing technical support and maintenance for all deployed software systems and hardware prototypes as outlined in respective project agreements.</p>
                  </div>
                  <div className="policy-section">
                    <h4>5. Jurisdiction</h4>
                    <p>Any disputes or legal matters shall be governed under the jurisdiction of the courts of Erode, Tamil Nadu, India.</p>
                  </div>
                </div>
              )}

              {activePolicyModal === 'cookies' && (
                <div>
                  <p style={{ marginBottom: '1.4rem' }}>Manage your cookie preferences below. Essential cookies are required for website core features, security, and WhatsApp integration.</p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ padding: '1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(59,130,246,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <Lock size={16} style={{ color: '#60a5fa' }} />
                          <span>Essential & Security Cookies</span>
                        </div>
                        <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '2px' }}>Required for site security, spam protection, and WhatsApp routing.</div>
                      </div>
                      <span style={{ fontSize: '0.8rem', color: '#4ade80', fontWeight: 700 }}>Always Active</span>
                    </div>

                    <div style={{ padding: '1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(59,130,246,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ fontWeight: 700, color: '#fff' }}>Analytics & Performance</div>
                        <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '2px' }}>Helps us measure site performance and page load speed anonymously.</div>
                      </div>
                      <input 
                        type="checkbox" 
                        checked={cookiePreferences.analytics} 
                        onChange={e => setCookiePreferences({ ...cookiePreferences, analytics: e.target.checked })} 
                        style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: '#2563eb' }}
                      />
                    </div>

                    <div style={{ padding: '1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(59,130,246,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ fontWeight: 700, color: '#fff' }}>Social & Marketing Features</div>
                        <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '2px' }}>Enables social feed previews and video demo embeds.</div>
                      </div>
                      <input 
                        type="checkbox" 
                        checked={cookiePreferences.marketing} 
                        onChange={e => setCookiePreferences({ ...cookiePreferences, marketing: e.target.checked })} 
                        style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: '#2563eb' }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="policy-modal-footer">
              {activePolicyModal === 'cookies' ? (
                <button onClick={handleSaveCustomCookies} className="btn-primary" style={{ padding: '0.55rem 1.4rem', fontSize: '0.88rem' }}>
                  Save Preferences
                </button>
              ) : (
                <button onClick={() => setActivePolicyModal(null)} className="btn-secondary" style={{ padding: '0.55rem 1.4rem', fontSize: '0.88rem' }}>
                  Close
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 404 Fallback Screen Overlay if triggered */}
      {is404 && (
        <div style={{ position: 'fixed', inset: 0, background: '#06090e', zIndex: 120, overflowY: 'auto' }}>
          <div className="not-found-screen">
            <div className="not-found-code">404</div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '0.8rem' }}>
              System Coordinate Not Found
            </h2>
            <p style={{ color: '#94a3b8', maxWidth: '480px', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              The requested page or resource has been shifted in cyber space. Return to the main portal or contact our engineering team directly.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button 
                onClick={() => { window.location.hash = ''; setIs404(false); }} 
                className="btn-primary"
              >
                <span>Return to ZeroToZetta Home</span>
                <ArrowRight size={18} />
              </button>
              <a href="https://wa.me/917604883377" target="_blank" rel="noreferrer" className="btn-secondary">
                <span>WhatsApp Support</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

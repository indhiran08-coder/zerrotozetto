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
  Send,
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
  Star
} from 'lucide-react';
import './App.css';

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
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

  // Form submission state
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'AI & Machine Learning Solutions',
    message: ''
  });

  useEffect(() => {
    // Smooth counter animation
    const interval = setInterval(() => {
      setStats(prev => ({
        projects: prev.projects < 120 ? prev.projects + 4 : 120,
        satisfaction: prev.satisfaction < 99 ? prev.satisfaction + 3 : 99,
        support: 24,
        speed: 4
      }));
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
    }, 1200);
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

      {/* Top Announcement Bar */}
      <div className="top-bar">
        <div className="top-bar-inner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span className="pulse-dot"></span>
            <span>ZeroToZetta Technologies • Innovation, Development & Smart Solutions</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            <span>Erode, Tamil Nadu</span>
            <span style={{ color: '#1e3a5f' }}>|</span>
            <a href="mailto:infozerotozetta@gmail.com" style={{ color: '#60a5fa', textDecoration: 'none' }}>infozerotozetta@gmail.com</a>
          </div>
        </div>
      </div>

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
      <section className="section-wrapper" style={{ paddingTop: '3.5rem', paddingBottom: '3rem' }}>
        <div className="hero-canvas-grid"></div>
        <div className="hero-content">
          <div>
            <div className="hero-pill-badge">
              <span className="pulse-dot"></span>
              <span style={{ fontWeight: 600 }}>Premium Tech Solutions</span>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>•</span>
              <span style={{ color: '#60a5fa' }}>Erode, Tamil Nadu</span>
            </div>

            <h1 className="hero-h1">
              Transforming Businesses Through <br />
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.86rem', color: '#94a3b8' }}>
                <CheckCircle2 size={16} className="text-[#3b82f6]" />
                <span>AI & Automation</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.86rem', color: '#94a3b8' }}>
                <CheckCircle2 size={16} className="text-[#3b82f6]" />
                <span>IoT & Hardware</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.86rem', color: '#94a3b8' }}>
                <CheckCircle2 size={16} className="text-[#3b82f6]" />
                <span>24/7 Professional Support</span>
              </div>
            </div>
          </div>

          {/* Interactive Orbit Graphic Visualizer (Phoenova Signature) */}
          <div className="orbit-container">
            <div className="orbit-ring-2"></div>
            <div className="orbit-ring-1"></div>

            {/* Center Core */}
            <div className="orbit-center-core" onClick={() => setSelectedServiceModal(servicesList[0])}>
              <img src="./logo.png" alt="ZeroToZetta Logo" className="orbit-core-logo" />
              <span className="orbit-core-text">ZEROTOZETTA</span>
            </div>

            {/* Orbiting Capability Nodes */}
            <div 
              className="orbit-node" 
              style={{ top: '8%', left: '42%' }}
              onClick={() => setSelectedServiceModal(servicesList[0])}
            >
              <Brain size={20} />
              <span className="orbit-node-label">AI & ML</span>
            </div>

            <div 
              className="orbit-node" 
              style={{ top: '32%', right: '4%' }}
              onClick={() => setSelectedServiceModal(servicesList[1])}
            >
              <Cpu size={20} />
              <span className="orbit-node-label">IoT PCB</span>
            </div>

            <div 
              className="orbit-node" 
              style={{ bottom: '8%', right: '16%' }}
              onClick={() => setSelectedServiceModal(servicesList[2])}
            >
              <Globe size={20} />
              <span className="orbit-node-label">Web</span>
            </div>

            <div 
              className="orbit-node" 
              style={{ bottom: '8%', left: '16%' }}
              onClick={() => setSelectedServiceModal(servicesList[3])}
            >
              <Smartphone size={20} />
              <span className="orbit-node-label">Mobile</span>
            </div>

            <div 
              className="orbit-node" 
              style={{ top: '32%', left: '4%' }}
              onClick={() => setSelectedServiceModal(servicesList[4])}
            >
              <HardDrive size={20} />
              <span className="orbit-node-label">Academic</span>
            </div>
          </div>
        </div>

        {/* Global Stats Banner (100+ Projects, 99% Satisfaction, 24/7 Support, 4x Speed) */}
        <div className="stats-banner">
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
        <div className="section-header">
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
          <div className="glass-card" style={{ padding: '2rem', borderRadius: '18px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.6rem' }}>Our Mission</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6 }}>
              To empower modern businesses with intelligent AI automation, reliable IoT hardware, and robust web applications that drive tangible operational growth.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2rem', borderRadius: '18px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.6rem' }}>Silicon to Cloud</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6 }}>
              We eliminate technical fragmentation by designing the physical circuit boards, programming microcontrollers, and building cloud backends all under one roof.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '2rem', borderRadius: '18px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.6rem' }}>Student Mentorship</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6 }}>
              We bridge academic curriculum and industrial reality, guiding engineering students through real-world AI, Machine Learning, and IoT major projects.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section with Interactive Modal Trigger */}
      <section id="services" className="section-wrapper">
        <div className="section-header">
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
          {servicesList.map(srv => (
            <div 
              key={srv.id} 
              className="service-card"
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
        <div className="section-header">
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
            <div key={idx} className="why-card">
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
        <div className="section-header">
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
            <div key={idx} className="process-card">
              <div className="process-number">{p.step}</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.6rem' }}>{p.title}</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section with Category Filter */}
      <section id="tech" className="section-wrapper">
        <div className="section-header">
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

        <div className="tech-tabs">
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

        <div className="tech-grid">
          {filteredTech.map((tech, idx) => (
            <div key={idx} className="tech-item-card">
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
        <div className="section-header">
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

        <div className="tech-tabs" style={{ marginBottom: '2.5rem' }}>
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
            <div key={idx} className="project-card">
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
        <div className="section-header">
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
            <div key={idx} className="testimonial-card">
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
        <div className="section-header">
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
          <div className="team-card">
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

          <div className="team-card">
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
        <div className="section-header">
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

        <div className="faq-grid">
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
        <div className="section-header">
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
        <div className="contact-grid-top">
          <div className="contact-channel-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#60a5fa', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.5rem' }}>
              <Phone size={18} />
              <span>CALL US</span>
            </div>
            <a href="tel:9843494975" style={{ color: '#fff', fontSize: '1rem', fontWeight: 600, textDecoration: 'none', display: 'block' }}>
              +91 98434 94975
            </a>
            <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '4px' }}>Direct phone inquiry</div>
          </div>

          <div className="contact-channel-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#60a5fa', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.5rem' }}>
              <Mail size={18} />
              <span>EMAIL US</span>
            </div>
            <a href="mailto:infozerotozetta@gmail.com" style={{ color: '#60a5fa', fontSize: '0.92rem', fontWeight: 600, textDecoration: 'none', display: 'block', wordBreak: 'break-all' }}>
              infozerotozetta@gmail.com
            </a>
            <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '4px' }}>Response within 24h</div>
          </div>

          <div className="contact-channel-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#60a5fa', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.5rem' }}>
              <InstagramIcon size={18} />
              <span>INSTAGRAM</span>
            </div>
            <a href="https://instagram.com/zerotozetta" target="_blank" rel="noreferrer" style={{ color: '#93c5fd', fontSize: '1rem', fontWeight: 600, textDecoration: 'none', display: 'block' }}>
              @zerotozetta
            </a>
            <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '4px' }}>Follow builds & demos</div>
          </div>

          <div className="contact-channel-card">
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
        <div className="contact-layout">
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
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(37,99,235,0.2)', border: '1px solid #3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: '#60a5fa' }}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '0.6rem' }}>Message Transmitted!</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '420px', margin: '0 auto 1.5rem' }}>
                  Thank you for contacting ZeroToZetta. Rishvanth SK and our technical team will review your project requirements and follow up at <strong>{formData.email}</strong> shortly.
                </p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="btn-secondary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit}>
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
                  style={{ width: '100%', padding: '0.85rem' }}
                >
                  {formStatus === 'sending' ? (
                    <>
                      <Activity size={18} className="animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Comprehensive Footer (Phoenova Layout with ZeroToZetta Brand) */}
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
                href="tel:9843494975"
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
              <a href="tel:9843494975" style={{ color: '#cbd5e1', textDecoration: 'none' }}>+91 98434 94975</a>
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
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Support</span>
          </div>
        </div>
      </footer>

      {/* Floating Action Button for Mobile Users */}
      <div className="floating-mobile-action">
        <a href="#contact" className="floating-action-btn" aria-label="Contact ZeroToZetta">
          <MessageSquare size={22} />
        </a>
      </div>
    </div>
  );
}

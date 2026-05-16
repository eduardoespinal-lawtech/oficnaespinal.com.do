import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  TrendingUp, 
  Briefcase, 
  Building, 
  Gavel, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  ChevronRight,
  PhoneForwarded,
  ArrowRight,
  Search,
  Globe,
  Users
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Nuestra Firma', href: '#firma' },
    { name: 'Prácticas', href: '#servicios' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const practices = [
    {
      title: 'Derecho Corporativo & M&A',
      desc: 'Lideramos fusiones y adquisiciones complejas, estructuración de capital y cumplimiento transaccional transfronterizo.',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000',
      details: ['Gobierno Corporativo', 'Joint Ventures', 'Venture Capital', 'Due Diligence']
    },
    {
      title: 'Energía & Infraestructura',
      desc: 'Asesoría estratégica en proyectos de infraestructura, energía renovable, concesiones y marcos regulatorios eléctricos.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000',
      details: ['Energía Solar & Eólica', 'Minería', 'Asocaiciones Público-Privadas', 'Permitomanía']
    },
    {
      title: 'Litigio & Arbitraje',
      desc: 'Representación de alto impacto en resoluciones de disputas civiles, comerciales y procesos de arbitraje internacional.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000',
      details: ['Arbitraje de Inversión', 'Litigio Civil', 'Derecho Constitucional', 'Cobros Estratégicos']
    },
    {
      title: 'Banca & Finanzas',
      desc: 'Asesoría a instituciones financieras en regulaciones monetarias, préstamos sindicados y mercado de valores.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
      details: ['Financiamiento de Proyectos', 'Cumplimiento LDFT', 'Mercado de Capitales', 'Derivados']
    },
    {
      title: 'Inmobiliario & Turismo',
      desc: 'Desarrollo de proyectos turísticos bajo regímenes especiales (CONFOTUR), inversiones de lujo y urbanismo.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000',
      details: ['Gestión de Tierras', 'Inversión Extranjera', 'Hospitality', 'Fideicomiso Inmobiliario']
    },
    {
      title: 'Tecnología & Propiedad Intelectual',
      desc: 'Protección de activos intangibles, registro de patentes, marcas y asesoría en marcos legales de economía digital.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000',
      details: ['Marcas y Patentes', 'Ciberseguridad', 'Protección de Datos', 'E-commerce']
    }
  ];

  return (
    <div className="min-h-screen bg-white text-latham-black selection:bg-latham-red selection:text-white">
      {/* Utility Bar */}
      <div className="bg-latham-navy text-white text-[10px] py-2 px-6 flex justify-between items-center font-bold tracking-[0.15em] uppercase hidden md:flex border-b border-white/10">
        <div className="flex gap-10">
          <span className="flex items-center gap-2"><Globe className="w-3.5 h-3.5 text-latham-red" /> República Dominicana | Alcance Global</span>
          <a href="mailto:info@oficinaespinal.do" className="hover:text-latham-red transition-colors flex items-center gap-2"><Mail className="w-3.5 h-3.5" /> info@oficinaespinal.do</a>
        </div>
        <div className="flex gap-8 items-center">
          <div className="flex items-center gap-2 border-r border-white/20 pr-8">
            <Search className="w-4 h-4 opacity-50" />
            <span className="opacity-50 tracking-[0.2em]">Búsqueda Global</span>
          </div>
          <span className="text-latham-red font-extrabold tracking-widest">+1 829.442.4222</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 bg-white transition-all duration-500 ${scrolled ? 'shadow-2xl py-3' : 'py-7'} border-b border-latham-grey-mid`}>
        <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-base sm:text-xl md:text-3xl font-display font-extrabold tracking-tighter leading-none flex items-center gap-1 px-1">
              ESPINAL, ALMONTE <span className="text-latham-red">&</span> RICTH
            </h1>
            <p className="text-[6px] xs:text-[7px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.4em] text-slate-400 font-bold mt-2">Inteligencia Jurídica • Consultores de Élite</p>
          </div>
          
          <div className="hidden lg:flex items-center gap-12 text-[11px] font-bold uppercase tracking-[0.2em]">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-latham-red latham-link py-1">
                {link.name}
              </a>
            ))}
            <a href="#contacto" className="latham-button bg-latham-red hover:bg-latham-navy">
              Solicitar Consulta
            </a>
          </div>

          <button className="lg:hidden text-latham-navy p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-32 px-10 lg:hidden"
          >
            <div className="flex flex-col gap-8 text-2xl font-display font-bold uppercase tracking-widest text-latham-navy">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)}>{link.name}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-latham-navy">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2400" 
            className="w-full h-full object-cover opacity-25 mix-blend-luminosity grayscale" 
            alt="Corporate Integrity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-latham-navy via-latham-navy/70 to-transparent"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl space-y-12"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-[2px] bg-latham-red"></div>
              <span className="text-latham-red text-[12px] font-bold uppercase tracking-[0.5em]">Advantaged Strategic Thinking</span>
            </div>
            
            <h2 className="text-6xl md:text-[95px] font-display font-extrabold leading-[0.9] text-white tracking-tighter">
              Defendemos Su <br />
              <span className="italic font-light text-white/50">Visión Corporativa</span> <br />
              Con Rigor Global.
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl border-l-2 border-latham-red/40 pl-10">
              Lideramos el mercado legal en el Caribe mediante la integración de inteligencia procesal, análisis de riesgo y un despliegue táctico sin precedentes.
            </p>

            <div className="flex flex-wrap gap-8 pt-8">
              <a href="#servicios" className="latham-button px-14 py-6 text-[13px] bg-latham-red hover:bg-white hover:text-latham-navy">Explorar Prácticas</a>
              <a href="#firma" className="border-2 border-white/40 text-white px-14 py-6 font-bold uppercase text-[13px] tracking-[0.25em] hover:bg-white hover:text-latham-navy transition-all backdrop-blur-sm">Nuestra Firma</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Institutional Profile - Refined for "Resultados y Ética" */}
      <section id="firma" className="py-24 md:py-48 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-latham-red/5 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"></div>
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-48 items-center">
            <div className="space-y-12 md:space-y-20 order-2 lg:order-1">
              <div className="space-y-8 md:space-y-10">
                <span className="text-latham-red text-[11px] md:text-[14px] font-extrabold uppercase tracking-[0.6em] flex items-center gap-4">
                  <div className="w-12 md:w-16 h-[1px] bg-latham-red"></div>
                  Excelencia Institucional
                </span>
                <h3 className="text-4xl xs:text-5xl md:text-[110px] font-display font-extrabold tracking-[calc(-0.06em)] text-latham-navy leading-[0.85]">
                  LIDERAZGO <br /> 
                  <span className="text-latham-red">JURÍDICO</span> <br /> 
                  TOTAL.
                </h3>
                <p className="text-xl md:text-3xl font-display font-bold text-slate-400 tracking-tight">Basado en resultados y ética absoluta.</p>
              </div>

              <div className="space-y-12">
                <p className="text-lg md:text-2xl text-slate-600 leading-relaxed font-light border-l-4 border-latham-red pl-8 md:pl-14 italic max-w-2xl">
                  "Operamos bajo la premisa de que cada desafío legal es una oportunidad para fortalecer la arquitectura empresarial de nuestros constituyentes."
                </p>
                
                <div className="grid sm:grid-cols-2 gap-10 md:gap-16 pt-8">
                  <div className="group space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-latham-red w-8 h-8 flex items-center justify-center text-white text-xs font-bold ring-8 ring-latham-red/5">01</div>
                      <h4 className="text-[12px] font-black uppercase tracking-[0.3em] text-latham-navy group-hover:text-latham-red transition-colors">
                        Misión
                      </h4>
                    </div>
                    <p className="text-sm text-slate-500 leading-loose font-medium">Proteger y potenciar el capital mediante ingenierías legales blindadas ante cualquier escenario de riesgo transaccional.</p>
                  </div>
                  <div className="group space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-latham-navy w-8 h-8 flex items-center justify-center text-white text-xs font-bold ring-8 ring-latham-red/5">02</div>
                      <h4 className="text-[12px] font-black uppercase tracking-[0.3em] text-latham-navy group-hover:text-latham-red transition-colors">
                        Visión
                      </h4>
                    </div>
                    <p className="text-sm text-slate-500 leading-loose font-medium">Ser el estándar de excelencia jurídica en el Caribe, integrando tecnología y ética en el centro de nuestras operaciones.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <div className="absolute -top-8 -right-8 md:-top-20 md:-right-20 w-full h-full border-[1px] border-latham-red/30 -z-10"></div>
              <div className="relative aspect-[3/4] overflow-hidden shadow-[20px_20px_0px_#f8f8f8] md:shadow-[140px_140px_0px_#f8f8f8]">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100" 
                  alt="Business Leadership" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-latham-navy/40 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 md:-bottom-12 md:-left-24 bg-latham-red p-8 md:p-14 text-white max-w-[220px] md:max-w-md shadow-2xl">
                <div className="space-y-4">
                  <p className="text-3xl md:text-6xl font-display font-extrabold tracking-tighter">98.4%</p>
                  <p className="text-[9px] md:text-[12px] uppercase font-bold tracking-[0.4em] opacity-90 leading-tight">Lealtad Clientes Corporativos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Values Section - Added Content */}
      <section className="py-24 md:py-40 bg-latham-navy text-white overflow-hidden relative">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-3 gap-24 items-start">
            <div className="space-y-12">
              <span className="text-latham-red text-[13px] font-extrabold uppercase tracking-[0.6em]">Pilares Directivos</span>
              <h3 className="text-5xl md:text-6xl font-display font-extrabold tracking-tighter leading-none">Nuestros <br />Diferenciadores.</h3>
              <p className="text-slate-400 text-lg font-light leading-relaxed">No somos solo una firma; somos una unidad de inteligencia estratégica dedicada a la protección de sus intereses a largo plazo.</p>
            </div>
            
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-12 md:gap-20">
              {[
                { title: 'Análisis Predictivo', desc: 'Evaluamos escenarios antes de que ocurran, permitiendo a nuestros clientes tomar decisiones desde una posición de fuerza.' },
                { title: 'Ética Absoluta', desc: 'Cada paso que damos sigue los más altos estándares de cumplimiento internacional (ISO 37001).' },
                { title: 'Velocidad Táctica', desc: 'En un mundo globalizado, el tiempo es capital. Respondemos con la agilidad que los negocios modernos exigen.' },
                { title: 'Red Global', desc: 'Nuestra presencia en los principales foros internacionales garantiza un blindaje sin fronteras para sus activos.' }
              ].map((val, idx) => (
                <div key={idx} className="space-y-6 group">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 border border-white/20 flex items-center justify-center font-display font-bold text-latham-red text-xl group-hover:bg-latham-red group-hover:text-white group-hover:border-latham-red transition-all" style={{ paddingLeft: 'unset' }}>
                      {idx + 1}
                    </div>
                    <h4 className="text-xl font-display font-bold uppercase tracking-tight">{val.title}</h4>
                  </div>
                  <p className="text-slate-400 text-[15px] leading-relaxed font-medium pl-18">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Sectors - More Content */}
      <section className="py-24 md:py-40 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-end mb-24">
            <div className="space-y-8">
              <span className="text-latham-red text-[13px] font-extrabold uppercase tracking-[0.5em]">Sector Experience</span>
              <h3 className="text-5xl md:text-8xl font-display font-extrabold tracking-tighter text-latham-navy">Industrias que <br />Impulsamos.</h3>
            </div>
            <p className="text-xl text-slate-500 font-light leading-relaxed max-w-xl">
              Nuestra experiencia transversal nos permite comprender las dinámicas internas de cada industria, ofreciendo soluciones que no solo cumplen con la ley, sino que potencian el negocio.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Fintech & Banca', icon: <Building className="w-8 h-8" /> },
              { name: 'Energía Renovable', icon: <TrendingUp className="w-8 h-8" /> },
              { name: 'Real Estate de Lujo', icon: <MapPin className="w-8 h-8" /> },
              { name: 'Turismo & Hospitality', icon: <Globe className="w-8 h-8" /> },
              { name: 'Pharma & Salud', icon: <ShieldCheck className="w-8 h-8" /> },
              { name: 'Retail & Logística', icon: <Briefcase className="w-8 h-8" /> },
              { name: 'Minería & Recursos', icon: <Gavel className="w-8 h-8" /> },
              { name: 'Tecnología Avanzada', icon: <Clock className="w-8 h-8" /> }
            ].map((sector, idx) => (
              <div key={idx} className="p-10 border border-latham-grey-mid hover:border-latham-red transition-all group flex flex-col items-center text-center space-y-6">
                <div className="text-slate-300 group-hover:text-latham-red transition-colors">{sector.icon}</div>
                <h5 className="font-display font-bold uppercase tracking-tight text-latham-navy">{sector.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insight Stats Strip */}
      <section className="bg-latham-grey-light border-b border-latham-grey-mid py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          {[
            { val: '15+', label: 'Años de Experiencia', icon: <Briefcase className="w-5 h-5 text-latham-red" /> },
            { val: '98%', label: 'Tasa de Éxito Corporativo', icon: <ShieldCheck className="w-5 h-5 text-latham-red" /> },
            { val: '1.2B+', label: 'USD en Transacciones', icon: <TrendingUp className="w-5 h-5 text-latham-red" /> },
            { val: '24/7', label: 'Asesoría Crítica Directa', icon: <Globe className="w-5 h-5 text-latham-red" /> }
          ].map((stat, idx) => (
            <div key={idx} className="flex gap-6 items-center">
              <div className="bg-white p-4 rounded-sm shadow-sm">{stat.icon}</div>
              <div className="flex flex-col">
                <span className="text-2xl font-display font-extrabold text-latham-navy leading-none">{stat.val}</span>
                <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mt-1">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Practices Section */}
      <section id="servicios" className="py-40 bg-latham-grey-light">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-28 space-y-8">
            <span className="text-latham-red text-[13px] font-extrabold uppercase tracking-[0.5em]">Core Capabilities</span>
            <h3 className="text-5xl md:text-8xl font-display font-extrabold tracking-tighter text-latham-navy">Nuestras Áreas de Impacto.</h3>
            <div className="w-32 h-[3px] bg-latham-red mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {practices.map((p, idx) => (
              <motion.div 
                whileHover={{ y: -15 }}
                key={idx} 
                className="bg-white group overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 relative"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" alt={p.title} />
                  <div className="absolute inset-0 bg-latham-navy/30 group-hover:bg-transparent transition-all"></div>
                </div>
                <div className="p-12 space-y-6">
                  <h4 className="text-2xl font-display font-bold text-latham-navy group-hover:text-latham-red transition-colors">{p.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">
                    {p.desc}
                  </p>
                  <ul className="grid grid-cols-2 gap-y-3 pt-4 border-t border-slate-100">
                    {p.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-slate-400">
                        <div className="w-1 h-1 bg-latham-red"></div> {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-end pt-6">
                    <ArrowRight className="w-6 h-6 text-latham-navy group-hover:translate-x-3 transition-transform cursor-pointer" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Insights Section */}
      <section id="insights" className="bg-latham-navy py-40 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-latham-red/5 skew-x-12 translate-x-32"></div>
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
            <div className="space-y-8">
              <span className="text-latham-red text-[13px] font-extrabold uppercase tracking-[0.5em]">Institutional Intelligence</span>
              <h3 className="text-5xl md:text-8xl font-display font-extrabold tracking-tighter">Insights & Análisis.</h3>
            </div>
            <button className="border-b-2 border-white pb-2 text-[12px] font-bold uppercase tracking-widest hover:text-latham-red hover:border-latham-red transition-all cursor-pointer">Ver toda la biblioteca jurídica</button>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/10">
            {[
              {
                date: 'Mayo 2024',
                title: 'Tendencias en Fideicomisos de Oferta Pública en RD.',
                category: 'Banca y Valores'
              },
              {
                date: 'Abril 2024',
                title: 'Actualización Protocolar: Ley de Lavado de Activos para 2024.',
                category: 'Cumplimiento'
              },
              {
                date: 'Marzo 2024',
                title: 'Marco Regulatorio para Proyectos de Hidrógeno Verde.',
                category: 'Energía'
              }
            ].map((insight, idx) => (
              <div key={idx} className="bg-latham-navy p-16 hover:bg-white/5 transition-all group cursor-pointer border-r border-white/10 last:border-0 h-full">
                <span className="text-latham-red text-[10px] font-bold uppercase tracking-[0.4em] block mb-10">{insight.date}</span>
                <span className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-4 block underline decoration-latham-red/30">{insight.category}</span>
                <h5 className="text-2xl font-display font-bold leading-tight group-hover:text-latham-red transition-colors mb-10">{insight.title}</h5>
                <ArrowRight className="w-8 h-8 opacity-20 group-hover:opacity-100 group-hover:translate-x-4 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Global Contact Section */}
      <section id="contacto" className="py-40 bg-white grid lg:grid-cols-12 max-w-[1400px] mx-auto px-6 gap-20">
        <div className="lg:col-span-5 flex flex-col justify-center space-y-16">
          <div className="space-y-10">
            <span className="text-latham-red text-[13px] font-extrabold uppercase tracking-[0.5em]">Conexión Estratégica</span>
            <h3 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter text-latham-navy">Inicie una consulta <br /> confidencial hoy.</h3>
            <p className="text-xl text-slate-500 font-light leading-relaxed max-w-md">
              Estamos preparados para desplegar nuestra capacidad de respuesta inmediata ante sus requerimientos más complejos.
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="flex gap-10 items-start group">
              <div className="bg-latham-grey-light p-6 rounded-sm text-latham-navy group-hover:bg-latham-red group-hover:text-white transition-all"><MapPin className="w-8 h-8" /></div>
              <div>
                <span className="text-[10px] uppercase font-extrabold text-slate-400 tracking-[0.4em] block mb-3">Headquarters</span>
                <p className="font-display font-bold text-2xl uppercase tracking-tighter text-balance">Avenida Winston Churchill 103, 01030, Santo Domingo</p>
              </div>
            </div>
            <div className="flex gap-10 items-start group">
              <div className="bg-latham-grey-light p-6 rounded-sm text-latham-navy group-hover:bg-latham-red group-hover:text-white transition-all"><Phone className="w-8 h-8" /></div>
              <div>
                <span className="text-[10px] uppercase font-extrabold text-slate-400 tracking-[0.4em] block mb-3">Priority Line</span>
                <p className="font-display font-bold text-3xl text-latham-red tracking-tighter">+1 829.442.4222</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-latham-grey-light p-12 md:p-24 shadow-[60px_60px_0px_#f5f5f5] h-full">
          <form 
            className="space-y-12" 
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const formData = new FormData(form);
              const data = {
                name: formData.get('name') as string,
                email: formData.get('email') as string,
                message: formData.get('message') as string,
              };

              const submitBtn = form.querySelector('button');
              if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerText = 'PROCESANDO SOLICITUD...';
              }
              
              try {
                const response = await fetch('/api/contact', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(data),
                });

                const result = await response.json();

                if (response.ok) {
                  alert('¡Consulta enviada exitosamente! Nuestro equipo procesará su requerimiento en tiempo real.');
                  form.reset();
                } else {
                  alert('Error institucional: ' + (result.error || 'Falla en la transmisión.'));
                }
              } catch (err) {
                alert('Error crítico de red. Verifique su conexión institucional.');
              } finally {
                if (submitBtn) {
                  submitBtn.disabled = false;
                  submitBtn.innerText = 'SOLICITAR CONSULTA ESTRATÉGICA';
                }
              }
            }}
          >
            <div className="space-y-3">
              <label className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 flex items-center gap-2">
                <div className="w-1 h-3 bg-latham-red"></div> Identidad Institucional
              </label>
              <input name="name" type="text" required placeholder="Nombre Completo / Razón Social" className="w-full border-b-2 border-latham-grey-mid py-5 focus:border-latham-navy focus:outline-none transition-all bg-transparent font-display font-bold text-xl uppercase tracking-tighter" />
            </div>
            <div className="space-y-3">
              <label className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 flex items-center gap-2">
                <div className="w-1 h-3 bg-latham-red"></div> Vínculo de Contacto
              </label>
              <input name="email" type="email" required placeholder="Email Corporativo" className="w-full border-b-2 border-latham-grey-mid py-5 focus:border-latham-navy focus:outline-none transition-all bg-transparent font-display font-bold text-xl uppercase tracking-tighter" />
            </div>
            <div className="space-y-3">
              <label className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 flex items-center gap-2">
                <div className="w-1 h-3 bg-latham-red"></div> Materia del Caso
              </label>
              <textarea name="message" required rows={4} placeholder="Describa la naturaleza de su requerimiento legal..." className="w-full border-b-2 border-latham-grey-mid py-5 focus:border-latham-navy focus:outline-none transition-all bg-transparent font-medium text-lg resize-none"></textarea>
            </div>
            <button type="submit" className="latham-button w-full py-8 text-sm group flex items-center justify-center gap-6 shadow-2xl disabled:opacity-50">
              SOLICITAR CONSULTA ESTRATÉGICA <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
            </button>
            <p className="text-[9px] uppercase font-bold text-slate-400 text-center tracking-[0.4em] mt-8">CUMPLIMIENTO ISO 27001 | CONFIDENCIALIDAD TOTAL GARANTIZADA</p>
          </form>
        </div>
      </section>

      {/* Global Footer */}
      <footer className="bg-latham-navy text-white pt-32 pb-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-24 pb-28 items-start border-b border-white/5">
            <div className="col-span-2 space-y-10">
              <h1 className="text-3xl font-display font-extrabold tracking-tighter leading-none flex items-center gap-1">
                ESPINAL, ALMONTE <span className="text-latham-red">&</span> RICTH
              </h1>
              <p className="text-slate-400 max-w-md leading-loose text-base font-light">
                Asesoría jurídica transaccional de primer nivel. Somos el puente entre las oportunidades de inversión y el blindaje legal absoluto en la República Dominicana y el Caribe.
              </p>
              <div className="flex gap-8">
                <div className="w-12 h-12 rounded-sm border border-white/10 flex items-center justify-center hover:bg-latham-red hover:border-latham-red transition-all cursor-pointer group">
                  <span className="text-xs font-bold group-hover:scale-110 transition-transform">LI</span>
                </div>
                <div className="w-12 h-12 rounded-sm border border-white/10 flex items-center justify-center hover:bg-latham-red hover:border-latham-red transition-all cursor-pointer group">
                  <span className="text-xs font-bold group-hover:scale-110 transition-transform">X</span>
                </div>
                <div className="w-12 h-12 rounded-sm border border-white/10 flex items-center justify-center hover:bg-latham-red hover:border-latham-red transition-all cursor-pointer group">
                  <span className="text-xs font-bold group-hover:scale-110 transition-transform">FB</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-10">
              <h4 className="text-[12px] font-extrabold uppercase tracking-widest text-latham-red">Oficinas Globales</h4>
              <div className="space-y-6">
                <div>
                  <p className="font-bold text-sm">Santo Domingo - HQ</p>
                  <p className="font-display font-medium text-lg text-slate-500 mt-2">Avenida Winston Churchill 103, 01030, Santo Domingo.</p>
                </div>
                <div>
                  <p className="font-bold text-sm">Punta Cana - Desk</p>
                  <p className="text-xs text-slate-500 mt-2 font-medium">Cap Cana, Marina Business Center.</p>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <h4 className="text-[12px] font-extrabold uppercase tracking-widest text-latham-red">Gobierno & Ética</h4>
              <nav className="flex flex-col gap-5 text-sm text-slate-400 font-medium">
                <a href="#" className="hover:text-latham-red transition-colors flex items-center gap-2">Políticas de Privacidad <ChevronRight className="w-3 h-3" /></a>
                <a href="#" className="hover:text-latham-red transition-colors flex items-center gap-2">Términos de Servicio <ChevronRight className="w-3 h-3" /></a>
                <a href="#" className="hover:text-latham-red transition-colors flex items-center gap-2">Aviso de Cookies <ChevronRight className="w-3 h-3" /></a>
                <a href="#" className="hover:text-latham-red transition-colors flex items-center gap-2">Responsabilidad <ChevronRight className="w-3 h-3" /></a>
              </nav>
            </div>
          </div>

          <div className="pt-16 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex flex-col gap-2">
              <p className="text-[11px] uppercase font-bold text-slate-500 tracking-[0.4em]">© 2024 Espinal, Almonte & Ricth. Consultores Legales de Élite.</p>
              <p className="text-[9px] uppercase font-bold text-slate-400/40 tracking-[0.2em]">Advertencia: Este sitio es solo informativo y no constituye una relación abogado-cliente hasta mediar contrato.</p>
            </div>
            <div className="flex gap-12 text-[10px] uppercase font-bold tracking-[0.2em]">
              <span className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-green-500"></div> System Status: Operational</span>
              <span className="text-latham-red">Inteligencia Juridica • SDQ • 2024</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Tactical Contact */}
      <a 
        href="https://wa.me/18294424222" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-12 right-12 bg-[#25D366] text-white p-6 rounded-sm shadow-[10px_10px_0px_#002244] hover:shadow-none hover:translate-x-1 hover:translate-y-1 active:scale-95 transition-all z-50 group border border-white/20"
      >
        <div className="flex items-center gap-4">
          <PhoneForwarded className="w-7 h-7 group-hover:rotate-12 transition-transform" />
          <div className="hidden lg:block">
            <p className="text-[9px] font-bold uppercase tracking-widest leading-none">Contacto Directo</p>
            <p className="font-display font-bold text-lg leading-tight mt-1">Socio de Turno</p>
          </div>
        </div>
      </a>
    </div>
  );
}

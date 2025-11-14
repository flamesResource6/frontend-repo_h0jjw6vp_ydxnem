import { useState } from 'react'
import { Check, Sparkles, Zap, Shield, Brain, Workflow, Quote, HelpCircle } from 'lucide-react'
import Spline from '@splinetool/react-spline'

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/70 text-gray-700 border border-white/60 shadow-sm">
      <Sparkles className="h-3.5 w-3.5 text-violet-500" /> {children}
    </span>
  )
}

function CTAButtons() {
  return (
    <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
      <a href="#pricing" className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-gray-900 text-white font-medium shadow-lg shadow-indigo-500/10 hover:bg-black transition">Get started free</a>
      <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white/80 backdrop-blur border border-white/60 text-gray-800 font-medium hover:bg-white transition">See how it works</a>
    </div>
  )
}

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="p-5 rounded-2xl bg-white/70 border border-white/60 shadow-sm hover:shadow-md transition">
      <div className="h-10 w-10 rounded-xl grid place-items-center bg-gradient-to-tr from-indigo-500 via-violet-500 to-orange-400 text-white shadow-inner shadow-indigo-500/20">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
      <p className="mt-1.5 text-sm text-gray-600">{desc}</p>
    </div>
  )
}

function PricingCard({ name, price, description, features, highlighted }) {
  return (
    <div className={`relative flex flex-col rounded-3xl p-6 sm:p-8 bg-white/80 border border-white/60 ${highlighted ? 'ring-2 ring-violet-500 shadow-xl shadow-violet-500/10' : 'shadow-sm'}`}>
      {highlighted && (
        <span className="absolute -top-3 left-6 px-3 py-1 text-xs rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow">Most popular</span>
      )}
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      <p className="mt-1 text-sm text-gray-600">{description}</p>
      <div className="mt-6">
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold text-gray-900">{price}</span>
          {price !== 'Custom' && <span className="text-sm text-gray-500">/mo</span>}
        </div>
      </div>
      <ul className="mt-6 space-y-3 text-sm text-gray-700">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check className="h-4 w-4 text-violet-500 mt-0.5" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a href="#" className={`mt-6 inline-flex items-center justify-center rounded-full px-5 py-3 font-medium transition ${highlighted ? 'bg-gray-900 text-white hover:bg-black' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>Choose plan</a>
    </div>
  )
}

function Testimonial({ quote, author, role }) {
  return (
    <div className="p-6 rounded-2xl bg-white/70 border border-white/60 shadow-sm hover:shadow-md transition">
      <Quote className="h-6 w-6 text-violet-500" />
      <p className="mt-3 text-gray-800">“{quote}”</p>
      <div className="mt-4 text-sm text-gray-600">
        <span className="font-medium text-gray-900">{author}</span> — {role}
      </div>
    </div>
  )
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-2xl bg-white/70 border border-white/60 p-5">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between text-left">
        <span className="font-medium text-gray-900">{q}</span>
        <HelpCircle className={`h-5 w-5 text-violet-500 transition ${open ? 'rotate-45' : ''}`} />
      </button>
      {open && <p className="mt-3 text-sm text-gray-600">{a}</p>}
    </div>
  )
}

function Footer() {
  return (
    <footer className="mt-20 border-t border-white/60 bg-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-orange-400 grid place-items-center text-white shadow-md shadow-indigo-500/20">
              <Sparkles size={18} />
            </div>
            <span className="font-semibold text-gray-900">SynaptIQ</span>
          </div>
          <p className="mt-3 text-sm text-gray-600">AI-powered productivity platform for modern teams.</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Product</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><a href="#features" className="hover:text-gray-900">Features</a></li>
            <li><a href="#pricing" className="hover:text-gray-900">Pricing</a></li>
            <li><a href="#faq" className="hover:text-gray-900">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-900">About</a></li>
            <li><a href="#" className="hover:text-gray-900">Careers</a></li>
            <li><a href="#" className="hover:text-gray-900">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Legal</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
            <li><a href="#" className="hover:text-gray-900">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/60 py-6 text-center text-sm text-gray-600">© {new Date().getFullYear()} SynaptIQ. All rights reserved.</div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50 text-gray-900">
      {/* Top nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-orange-400 grid place-items-center text-white shadow-md shadow-indigo-500/20">
              <Sparkles size={18} />
            </div>
            <span className="font-semibold">SynaptIQ</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#testimonials" className="hover:text-gray-900">Testimonials</a>
            <a href="#faq" className="hover:text-gray-900">FAQ</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:text-gray-900" href="#pricing">Sign in</a>
            <a className="px-4 py-2 rounded-full text-sm font-medium text-white bg-gray-900 hover:bg-black transition" href="#pricing">Get started</a>
          </div>
          <a href="#pricing" className="md:hidden px-4 py-2 rounded-full text-sm font-medium text-white bg-gray-900">Start</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 grid lg:grid-cols-2 items-center gap-10">
          <div className="relative z-10">
            <Badge>AI-powered productivity</Badge>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Work smarter with SynaptIQ
            </h1>
            <p className="mt-4 text-gray-700 text-lg">
              Automate workflows, prioritize what matters, and move faster with an intelligent copilot for your team.
            </p>
            <CTAButtons />
            <p className="mt-3 text-sm text-gray-500">No credit card required • Set up in minutes</p>
          </div>
          <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-3xl bg-white/70 border border-white/60 shadow-xl">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-violet-200/20 via-transparent to-orange-200/20" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold">Everything you need to focus</h2>
            <p className="mt-2 text-gray-600">Streamline your day with an AI that understands context, priorities, and outcomes.</p>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Feature icon={Brain} title="Intelligent prioritization" desc="SynaptIQ analyzes tasks and suggests what to do next based on impact." />
            <Feature icon={Workflow} title="Automated workflows" desc="Trigger multi-step actions across your tools with natural language." />
            <Feature icon={Zap} title="Real-time insights" desc="Dashboards surface blockers and trends so you can move faster." />
            <Feature icon={Shield} title="Enterprise-grade security" desc="SOC2-ready controls and fine-grained permissions by default." />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-bold">Simple, transparent pricing</h2>
            <p className="mt-2 text-gray-600">Start free. Upgrade when you need advanced collaboration and controls.</p>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-4 sm:gap-6">
            <PricingCard
              name="Free"
              price="$0"
              description="For individuals exploring SynaptIQ"
              features={[
                'Up to 3 projects',
                'Basic AI suggestions',
                'Community support',
              ]}
            />
            <PricingCard
              highlighted
              name="Pro"
              price="$19"
              description="Best for growing teams"
              features={[
                'Unlimited projects',
                'Advanced automations',
                'Priority support',
                'Integrations (Slack, Notion, Jira)'
              ]}
            />
            <PricingCard
              name="Enterprise"
              price="Custom"
              description="Security, scale, and support"
              features={[
                'SSO & SCIM',
                'Dedicated success manager',
                'Custom contracts & SLAs',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-bold">Loved by modern teams</h2>
            <p className="mt-2 text-gray-600">Hear how leaders accelerate work with SynaptIQ.</p>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Testimonial quote="SynaptIQ feels like a teammate that keeps everyone aligned and unblocked." author="Amira K." role="Head of Product, NxtWave" />
            <Testimonial quote="We automated weekly ops and cut context switching by 40%." author="Devon S." role="COO, Atlas Labs" />
            <Testimonial quote="Setup took minutes. The insights are shockingly good." author="Rina T." role="Engineering Manager, Kite" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-bold">Frequently asked questions</h2>
            <p className="mt-2 text-gray-600">Everything you need to know about getting started.</p>
          </div>
          <div className="mt-8 grid gap-3 sm:gap-4 md:grid-cols-2">
            <FAQItem q="How does the AI prioritize my tasks?" a="It uses metadata, deadlines, dependencies, and historical outcomes to rank what matters most, and adapts as you work." />
            <FAQItem q="Can I connect my existing tools?" a="Yes—connect Slack, Notion, Jira, GitHub and more. Use natural language to build automated workflows." />
            <FAQItem q="Is my data secure?" a="We apply encryption in transit and at rest, with fine-grained access controls. Enterprise plans include SSO/SCIM." />
            <FAQItem q="Do you offer trials?" a="Start on the Free plan and upgrade anytime. Pro has a 14‑day money‑back guarantee." />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, ShieldCheck, LineChart, Users2, Sparkles,
  Layers, FileText, Radar, Rocket, DollarSign, Scale,
  Presentation, BarChart4, AlertTriangle, BookOpen,
  Globe2, Inbox, Zap, Cloud, ChevronRight
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Badge } from "./components/ui/badge";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./components/ui/accordion";

// PenguinAI Logo
const PenguinLogo = () => (
  <img 
    src="/logo/penguinai_logo01.jpg" 
    alt="PenguinAI Platform" 
    className="w-16 h-12 md:w-20 md:h-14 object-contain"
  />
);

// Section wrapper
const Section = ({ id, title, icon: Icon, children, kicker }: { id: string, title: string, icon: any, children: React.ReactNode, kicker?: string }) => (
  <section id={id} className="scroll-mt-28">
    <Card className="border-0 bg-white/90 backdrop-blur shadow-lg rounded-2xl">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-sky-100"><Icon className="w-5 h-5 text-sky-700"/></div>
          <div>
            {kicker && <p className="text-xs uppercase tracking-wider text-sky-600 font-medium">{kicker}</p>}
            <CardTitle className="text-xl md:text-2xl text-slate-800">{title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="prose prose-slate max-w-none text-slate-700">{children}</CardContent>
    </Card>
  </section>
);

const Stat = ({label, value, sub}: {label: string, value: string, sub?: string}) => (
  <div className="p-4 rounded-2xl bg-gradient-to-b from-slate-50 to-white border shadow-sm">
    <p className="text-sm text-slate-500">{label}</p>
    <p className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-800">{value}</p>
    {sub && <p className="text-xs text-slate-500 mt-1">{sub}</p>}
  </div>
);

const NavLink = ({href, children}: {href: string, children: React.ReactNode}) => (
  <a href={href} className="group flex items-center gap-2 text-sm text-slate-600 hover:text-sky-700 transition-colors">
    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"/>{children}
  </a>
);

export default function App(){
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Beautiful background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_80%_-10%,rgba(186,230,253,0.3)_0%,transparent_60%),radial-gradient(50%_40%_at_0%_0%,rgba(224,242,254,0.2)_0%,transparent_50%)]"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      
      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Top bar */}
        <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <PenguinLogo/>
              <div>
                <p className="text-xs uppercase tracking-wider text-sky-600">PenguinAI</p>
                <h1 className="text-sm md:text-base font-semibold text-slate-800">Human‑Centric M&A Intelligence</h1>
              </div>
              <Badge variant="secondary" className="ml-3">Investor Report</Badge>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.5}}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs mb-4 backdrop-blur-sm border border-white/30">
                <Sparkles className="w-4 h-4"/> The Strategic Edge for M&A
              </div>
              <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-white">
                Leverage Employee Sentiment to <span className="text-sky-300">De‑risk</span> Deals & Accelerate Synergies
              </h2>
              <p className="mt-4 text-white/90 text-base md:text-lg">
                PenguinAI turns real‑time communications into anonymized, actionable intelligence—so investors and acquirers can predict cultural risk, retain superstars, and deliver integration on time.
              </p>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <Stat label="M&A Failure Rate" value="≈70%" sub="Deals miss objectives"/>
                <Stat label="Cultural Clash Impact" value="50–75%" sub="Primary failure driver"/>
                <Stat label="Turnover Jump" value="+45%" sub="Post‑merger attrition"/>
                <Stat label="Iconic Loss" value="$99B" sub="AOL–Time Warner"/>
              </div>
            </motion.div>
            <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="md:pl-6">
              <Card className="border-0 shadow-2xl rounded-3xl bg-white/80">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Radar className="w-5 h-5"/> Early‑Warning Dashboard</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 rounded-2xl bg-slate-50">
                      <p className="text-xs text-slate-500">Sentiment (Org)</p>
                      <p className="text-2xl font-semibold">↑ Positive drift</p>
                      <p className="text-xs text-emerald-600 mt-1">Risk −18% vs last week</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50">
                      <p className="text-xs text-slate-500">Flight Risk (Superstars)</p>
                      <p className="text-2xl font-semibold">7 flagged</p>
                      <p className="text-xs text-rose-600 mt-1">Action required</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50">
                      <p className="text-xs text-slate-500">Cultural Alignment</p>
                      <p className="text-2xl font-semibold">Medium → High</p>
                      <p className="text-xs text-amber-600 mt-1">Improving with onboarding</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50">
                      <p className="text-xs text-slate-500">Integration Velocity</p>
                      <p className="text-2xl font-semibold">1.4× baseline</p>
                      <p className="text-xs text-sky-600 mt-1">On‑track for synergy goals</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <main className="max-w-6xl mx-auto px-4 pb-24 space-y-10 md:space-y-14">
          {/* Executive Summary */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Section id="summary" title="Executive Summary" icon={FileText} kicker="Report">
              <p>
                The PenguinAI platform addresses a critical and often‑overlooked failure point in mergers and acquisitions (M&A): the human element. While traditional due diligence focuses on financial and legal metrics, up to 75% of M&A deals fail to meet their objectives due to cultural clashes, leadership conflicts, and employee attrition. PenguinAI treats employee sentiment as a strategic asset, using AI and NLP to turn real‑time, anonymized insights from internal communications into an early‑warning system. The market is primed; success hinges on a robust go‑to‑market motion centered on partnerships and data‑driven case studies, alongside rigorous privacy engineering.
              </p>
            </Section>
          </motion.div>

          {/* Strategic Imperative */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Section id="imperative" title="1. The Strategic Imperative: Human‑Centric M&A" icon={Users2} kicker="Why Now">
              <h4 className="mt-0">1.1. The Overlooked Crisis in Post‑Merger Integration</h4>
              <p>
                Most integration failures cascade from human factors—culture incompatibility, leadership friction, and communication breakdowns—rather than spreadsheets. Historic cases (e.g., AOL–Time Warner; Daimler‑Chrysler) show how cultural mismatch drives value loss. PenguinAI shifts due diligence from static, document‑based reviews to dynamic, people‑centric signals, surfacing friction early and enabling pre‑emptive action.
              </p>
              <h4>1.2. The Financial and Human Cost of Attrition</h4>
              <p>
                Post‑merger, average turnover jumps ~45%. Replacement costs, lost productivity, and slowed integration erode deal value. PenguinAI identifies at‑risk "superstars," enabling selective retention and targeted cost management to preserve and unlock value.
              </p>
            </Section>
          </motion.div>

          {/* Attrition Economics & Table */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Section id="attrition" title="The Costs of M&A Failure" icon={BarChart4} kicker="Metrics">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-slate-600">
                      <th className="py-2">Metric</th>
                      <th className="py-2">Data</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="py-2">Overall M&A Failure Rate</td>
                      <td className="py-2">≈70% of deals fail to meet goals</td>
                    </tr>
                    <tr>
                      <td className="py-2">Failure due to Cultural Clashes</td>
                      <td className="py-2">≈50–75% of integrations miss objectives</td>
                    </tr>
                    <tr>
                      <td className="py-2">Employee Turnover Jump</td>
                      <td className="py-2">+45% (19.7% → 28.6%) post‑merger</td>
                    </tr>
                    <tr>
                      <td className="py-2">Example Financial Impact</td>
                      <td className="py-2">$99B loss in <span className="whitespace-nowrap">AOL–Time Warner</span></td>
                    </tr>
                    <tr>
                      <td className="py-2">High‑Value Replacement Costs</td>
                      <td className="py-2">Millions in recruiting, training, lost productivity</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Section>
          </motion.div>

          {/* Platform */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Section id="platform" title="2. PenguinAI: Platform & Architecture" icon={Layers} kicker="Product">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border border-white/20 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-3"><CardTitle className="text-lg flex items-center gap-3 text-slate-800"><div className="p-2 bg-blue-100 rounded-lg"><Inbox className="w-5 h-5 text-blue-600"/></div> Ingest</CardTitle></CardHeader>
                  <CardContent className="text-slate-700 leading-relaxed">Secure connectors for Slack, Teams, G‑Suite; surveys & open‑text. Streams unstructured signals in real time.</CardContent>
                </Card>
                <Card className="border border-white/20 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-3"><CardTitle className="text-lg flex items-center gap-3 text-slate-800"><div className="p-2 bg-cyan-100 rounded-lg"><Cloud className="w-5 h-5 text-cyan-600"/></div> Understand</CardTitle></CardHeader>
                  <CardContent className="text-slate-700 leading-relaxed">NLP + sentiment + cultural pattern detection. Trained on M&A‑specific contexts (deal stages, leadership changes).</CardContent>
                </Card>
                <Card className="border border-white/20 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="pb-3"><CardTitle className="text-lg flex items-center gap-3 text-slate-800"><div className="p-2 bg-yellow-100 rounded-lg"><Zap className="w-5 h-5 text-yellow-600"/></div> Act</CardTitle></CardHeader>
                  <CardContent className="text-slate-700 leading-relaxed">Proactive risk flags, talent flight alerts, alignment scores, and playbooks surfaced where teams work.</CardContent>
                </Card>
              </div>
              <Accordion type="single" collapsible className="mt-4">
                <AccordionItem value="tech">
                  <AccordionTrigger>Technical Notes</AccordionTrigger>
                  <AccordionContent>
                    <ul>
                      <li>Purpose‑built NLP models; sentiment + topic + entity + role mapping.</li>
                      <li>Anonymized, aggregated analytics at team/org level (no individual surveillance).</li>
                      <li>APIs & webhooks for BI tools and VDR/PM integrations.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Section>
          </motion.div>

          {/* ROI */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Section id="roi" title="2.2. Value Proposition & ROI" icon={LineChart} kicker="Outcomes">
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="border-0">
                  <CardHeader className="pb-1"><CardTitle className="text-base flex items-center gap-2"><DollarSign className="w-4 h-4"/> Cost Savings</CardTitle></CardHeader>
                  <CardContent className="text-sm text-slate-600">Reduce attrition and replacement spend. Focus retention on high‑value talent.</CardContent>
                </Card>
                <Card className="border-0">
                  <CardHeader className="pb-1"><CardTitle className="text-base flex items-center gap-2"><Rocket className="w-4 h-4"/> Accelerated Integration</CardTitle></CardHeader>
                  <CardContent className="text-sm text-slate-600">Resolve communication friction early to hit synergy timelines.</CardContent>
                </Card>
                <Card className="border-0">
                  <CardHeader className="pb-1"><CardTitle className="text-base flex items-center gap-2"><Presentation className="w-4 h-4"/> Enhanced Deal Value</CardTitle></CardHeader>
                  <CardContent className="text-sm text-slate-600">Quantify cultural risk and factor people‑related upside into valuation.</CardContent>
                </Card>
              </div>
            </Section>
          </motion.div>

          {/* Privacy */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Section id="privacy" title="2.3. Data Privacy & Ethical AI" icon={ShieldCheck} kicker="Trust">
              <ul>
                <li><strong>Privacy by Design:</strong> Full anonymization + aggregation; insights at team/organizational level only.</li>
                <li><strong>Compliance‑Ready:</strong> Built for GDPR/industry requirements; rigorous security posture.</li>
                <li><strong>Scoped Access:</strong> Least‑privilege connectors; transparent governance & auditability.</li>
              </ul>
            </Section>
          </motion.div>

          {/* Market */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Section id="market" title="3. Market & Competitive Dynamics" icon={Globe2} kicker="Landscape">
              <p>
                Tailwinds favor AI‑assisted M&A. Private equity and strategic acquirers seek people‑centric risk insights. PenguinAI sits between VDRs (document‑centric) and general engagement tools, as a new class: <em>Human‑Capital Due Diligence & Integration Intelligence</em>.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-slate-600"><th className="py-2">Feature</th><th className="py-2">PenguinAI</th></tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr><td className="py-2">Real‑time Sentiment from Internal Comms</td><td className="py-2">Yes</td></tr>
                    <tr><td className="py-2">M&A‑Specific Focus</td><td className="py-2">Yes</td></tr>
                    <tr><td className="py-2">Cultural Alignment Assessment</td><td className="py-2">Yes</td></tr>
                    <tr><td className="py-2">Virtual Data Room</td><td className="py-2">No</td></tr>
                    <tr><td className="py-2">Proactive Risk Alerts</td><td className="py-2">Yes</td></tr>
                    <tr><td className="py-2">Pricing Model</td><td className="py-2">Tiered SaaS</td></tr>
                  </tbody>
                </table>
              </div>
            </Section>
          </motion.div>

          {/* Pricing */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Section id="pricing" title="4. Business Model & Pricing" icon={Scale} kicker="Monetization">
              <Tabs defaultValue="tier1" className="w-full">
                <TabsList className="grid grid-cols-3 w-full bg-white/20 backdrop-blur-sm p-1 rounded-xl border border-white/30">
                  <TabsTrigger value="tier1" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-md text-slate-700 font-medium">Tier 1 · Project</TabsTrigger>
                  <TabsTrigger value="tier2" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-md text-slate-700 font-medium">Tier 2 · Enterprise</TabsTrigger>
                  <TabsTrigger value="tier3" className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-md text-slate-700 font-medium">Tier 3 · Custom</TabsTrigger>
                </TabsList>
                <TabsContent value="tier1">
                  <Card className="border border-white/20 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm shadow-lg mt-4">
                    <CardHeader className="pb-4"><CardTitle className="text-xl text-slate-800 flex items-center gap-3"><div className="w-3 h-3 bg-green-500 rounded-full"></div>Project‑based</CardTitle></CardHeader>
                    <CardContent className="text-slate-700 leading-relaxed">
                      Per‑deal pricing aligned to size/complexity (e.g., headcount). Ideal entry point to validate value and seed case studies.
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="tier2">
                  <Card className="border border-white/20 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm shadow-lg mt-4">
                    <CardHeader className="pb-4"><CardTitle className="text-xl text-slate-800 flex items-center gap-3"><div className="w-3 h-3 bg-blue-500 rounded-full"></div>Enterprise Subscription</CardTitle></CardHeader>
                    <CardContent className="text-slate-700 leading-relaxed">
                      Annual plan for PE firms/corporates running multiple deals; predictable costs and portfolio‑wide oversight.
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="tier3">
                  <Card className="border border-white/20 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm shadow-lg mt-4">
                    <CardHeader className="pb-4"><CardTitle className="text-xl text-slate-800 flex items-center gap-3"><div className="w-3 h-3 bg-purple-500 rounded-full"></div>Custom/Consulting</CardTitle></CardHeader>
                    <CardContent className="text-slate-700 leading-relaxed">
                      Complex integrations, bespoke dashboards, and advisory services paired with the platform.
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </Section>
          </motion.div>

          {/* Capital Requirements Table */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Section id="capital" title="Foundational Capital Allocation (Seed)" icon={DollarSign} kicker="Financials">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-slate-600"><th className="py-2">Item</th><th className="py-2">Estimated Cost Range (USD)</th></tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr><td className="py-2">Platform Development (FE/BE/AI/DevOps)</td><td className="py-2">$50,000 – $150,000</td></tr>
                    <tr><td className="py-2">Initial Team Hiring</td><td className="py-2">$200,000 – $500,000</td></tr>
                    <tr><td className="py-2">Operational Costs (Mktg/Sales/Legal)</td><td className="py-2">$150,000 – $400,000</td></tr>
                    <tr><td className="py-2">Data Acquisition / Licensing</td><td className="py-2">$50,000 – $100,000</td></tr>
                    <tr><td className="py-2">Contingency Fund</td><td className="py-2">$50,000 – $150,000</td></tr>
                    <tr className="font-semibold"><td className="py-2">Total Seed Capital Required</td><td className="py-2">$500,000 – $1,300,000</td></tr>
                  </tbody>
                </table>
              </div>
            </Section>
          </motion.div>

          {/* Risks & Recommendations */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Section id="risks" title="5. Risks & Recommendations" icon={AlertTriangle} kicker="Critical View">
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="border-0">
                  <CardHeader className="pb-1"><CardTitle className="text-base">Key Risks</CardTitle></CardHeader>
                  <CardContent className="text-sm text-slate-600">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Data privacy & security across internal comms.</li>
                      <li>Adoption barrier in a relationship‑driven industry.</li>
                      <li>Fast‑follower risk from established vendors.</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-0">
                  <CardHeader className="pb-1"><CardTitle className="text-base">Actionable Recommendations</CardTitle></CardHeader>
                  <CardContent className="text-sm text-slate-600">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Ship a focused MVP: real‑time sentiment + risk flags.</li>
                      <li>Pilot with a strategic PE/advisory partner; capture ROI.</li>
                      <li>Lead with privacy engineering; make trust a feature.</li>
                      <li>Recruit multi‑disciplinary team (M&A, HR, Legal).</li>
                      <li>Maintain a living financial model with contingency.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </Section>
          </motion.div>


          {/* CTA */}
          <motion.section 
            className="mt-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 bg-gradient-to-r from-sky-600 to-cyan-500 text-white rounded-3xl shadow-xl">
              <CardContent className="py-8 md:py-10 flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
                <div>
                  <p className="uppercase text-xs/relaxed tracking-[0.2em] opacity-80">Get Started</p>
                  <h3 className="text-2xl md:text-3xl font-semibold">Pilot PenguinAI on Your Next Deal</h3>
                  <p className="text-white/90 mt-2 max-w-xl">Deploy in weeks. See anonymized, real‑time sentiment and cultural alignment insights that keep integrations on track.</p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="text-white/80 text-sm">Contact us for partnership opportunities and strategic insights.</p>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </main>

        <footer className="border-t border-white/20 py-8 bg-white/10 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-white/80"><PenguinLogo/><span>© {new Date().getFullYear()} PenguinAI</span></div>
            <div className="flex gap-6 text-white/70 text-sm">
              <a href="#privacy" className="hover:text-white">Privacy & Security</a>
              <a href="#pricing" className="hover:text-white">Pricing</a>
              <a href="#full" className="hover:text-white">Full Report</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
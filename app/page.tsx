export default function Home() {
  const faqs = [
    {
      q: 'What file formats does it support?',
      a: 'Upload PDF or DOCX contracts. Our AI extracts every deadline, milestone, and deliverable automatically.'
    },
    {
      q: 'How do the escalating reminders work?',
      a: 'You receive email and SMS alerts at 30, 14, 7, 3, and 1 day before each deadline — plus instant team notifications.'
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes. Cancel anytime from your dashboard with no questions asked and no hidden fees.'
    }
  ]

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-16">
      {/* Hero */}
      <section className="max-w-2xl w-full text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Contract Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Never miss a contract<br />
          <span className="text-[#58a6ff]">deliverable deadline</span> again
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Upload your contracts. Our AI extracts every deadline and deliverable, creates calendar events, and fires escalating email &amp; SMS reminders so your team stays ahead — automatically.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-xl transition-colors"
        >
          Start for $13/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-4">No credit card required to try. Cancel anytime.</p>
      </section>

      {/* Pricing */}
      <section className="max-w-sm w-full mb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$13<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stay compliant</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited contract uploads (PDF & DOCX)',
              'AI deadline & deliverable extraction',
              'Google & Outlook calendar sync',
              'Escalating email + SMS reminders',
              'Team notifications & assignments',
              'Dashboard with deadline timeline'
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-xl transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl w-full">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-20 text-[#8b949e] text-xs text-center">
        &copy; {new Date().getFullYear()} Contract Deadline Enforcer. Built for agencies &amp; consultants.
      </footer>
    </main>
  )
}


import React, { useState, useEffect } from 'react';
import { SECTIONS, FAQS } from './constants';
import { ChevronRight, Menu, X, Sun, Moon, ArrowUpCircle } from 'lucide-react';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsSidebarOpen(false);
    }
  };

  const handleStartRevising = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection('core-java');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      
      {/* AdSense Top Banner */}
      <div className="hidden md:flex justify-center py-4 bg-gray-200 dark:bg-gray-800 text-xs text-gray-500 uppercase">
        Advertisement Space
      </div>

      {/* Header / Navbar */}
      <header className={`sticky top-0 z-50 w-full backdrop-blur-md border-b transition-colors ${isDarkMode ? 'bg-gray-900/80 border-gray-700' : 'bg-white/80 border-gray-200'}`}>
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="bg-orange-600 text-white p-1.5 rounded-lg">
              <span className="font-bold text-lg">J</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline-block">Java Interview Cheat Sheet</span>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            {SECTIONS.map((s) => (
              <button 
                key={s.id} 
                onClick={() => scrollToSection(s.id)}
                className="hover:text-orange-600 transition-colors font-semibold"
              >
                {s.title.split(' ')[0]}
              </button>
            ))}
            <button onClick={() => scrollToSection('faqs')} className="hover:text-orange-600 transition-colors font-semibold">FAQs</button>
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              className="lg:hidden p-2" 
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsSidebarOpen(false)} />
          <div className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 p-6 shadow-xl transition-transform ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            <div className="flex justify-between items-center mb-8">
              <span className="font-bold">Navigation</span>
              <button onClick={() => setIsSidebarOpen(false)}><X size={24} /></button>
            </div>
            <div className="flex flex-col gap-4">
              {SECTIONS.map((s) => (
                <button 
                  key={s.id} 
                  onClick={() => scrollToSection(s.id)}
                  className="text-lg py-2 text-left border-b border-gray-100 dark:border-gray-700 font-medium"
                >
                  {s.title}
                </button>
              ))}
              <button onClick={() => scrollToSection('faqs')} className="text-lg py-2 text-left font-medium">FAQs</button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
            Java Interview Cheat Sheet
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-400 max-w-3xl mx-auto mb-8 font-medium">
            The ultimate quick revision guide for job seekers and freshers. Master Core Java, JVM, Collections, and Multithreading in minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={handleStartRevising}
              className="bg-orange-600 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-700 transition shadow-lg shadow-orange-600/20 active:scale-95"
            >
              Start Revising
            </button>
            <button className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-8 py-3 rounded-full font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition active:scale-95">
              Download PDF (Beta)
            </button>
          </div>
        </div>
      </section>

      {/* AdSense In-Content Placeholder */}
      <div className="container mx-auto px-4 my-8 text-center text-xs text-gray-500">
        Advertisement
      </div>

      <main className="container mx-auto px-4 pb-20 max-w-5xl">
        {/* Cheat Sections */}
        {SECTIONS.map((section) => (
          <section key={section.id} id={section.id} className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded flex items-center justify-center text-sm font-bold">
                #
              </span>
              {section.title}
            </h2>
            <div className="grid gap-6">
              {section.items.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`p-6 rounded-2xl border transition shadow-sm hover:shadow-md ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
                >
                  <h3 className="text-xl font-bold mb-3 text-orange-600 flex items-center gap-2">
                    <ChevronRight size={18} />
                    {item.label}
                  </h3>
                  <p className="mb-4 leading-relaxed text-gray-900 dark:text-gray-500 font-medium">
                    {item.content}
                  </p>
                  {item.code && (
                    <div className="rounded-lg bg-gray-950 p-4 overflow-x-auto border border-gray-800 shadow-inner">
                      <code className="text-blue-300 text-sm code-font block">
                        <pre>{item.code}</pre>
                      </code>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Interview Tips Section */}
        <section id="interview-tips" className="mb-16 p-8 bg-orange-50 dark:bg-orange-900/10 rounded-3xl border-2 border-orange-100 dark:border-orange-900/30 shadow-sm">
          <h2 className="text-3xl font-bold mb-6">Pro Interview Tips</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Common Mistakes</h3>
              <ul className="space-y-3">
                <li className="flex gap-2">❌ <span className="text-sm font-bold text-gray-900 dark:text-gray-500">Not knowing internal working of <code>HashMap</code>.</span></li>
                <li className="flex gap-2">❌ <span className="text-sm font-bold text-gray-900 dark:text-gray-500">Confusing <code>final</code>, <code>finally</code>, and <code>finalize</code>.</span></li>
                <li className="flex gap-2">❌ <span className="text-sm font-bold text-gray-900 dark:text-gray-500">Explaining JVM memory areas vaguely.</span></li>
                <li className="flex gap-2">❌ <span className="text-sm font-bold text-gray-900 dark:text-gray-500">Ignoring <code>String Pool</code> and immutability.</span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">What Interviewers Expect</h3>
              <ul className="space-y-3">
                <li className="flex gap-2">✅ <span className="text-sm font-bold text-gray-900 dark:text-gray-500">Deep understanding of <strong>Java 8+</strong> features.</span></li>
                <li className="flex gap-2">✅ <span className="text-sm font-bold text-gray-900 dark:text-gray-500">Ability to write code on paper/whiteboard.</span></li>
                <li className="flex gap-2">✅ <span className="text-sm font-bold text-gray-900 dark:text-gray-500">Clarity on <strong>Memory Management</strong> and GC.</span></li>
                <li className="flex gap-2">✅ <span className="text-sm font-bold text-gray-900 dark:text-gray-500">Correct terminology (e.g., "Thread safety").</span></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-inner border border-orange-100 dark:border-gray-700">
            <h4 className="font-bold mb-2">5-Minute Revision Strategy:</h4>
            <p className="text-sm text-gray-900 dark:text-gray-200 italic font-medium">Scan the Collections hierarchy, recite JVM memory areas, and double-check volatile/synchronized definitions just before the call.</p>
          </div>
        </section>

        {/* SEO Content Section */}
        <article className="prose dark:prose-invert max-w-none mb-16 p-8 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-4">Mastering the Java Interview Cheat Sheet</h2>
          <p className="text-gray-900 dark:text-gray-500 font-medium">
            This <strong>Java Interview Cheat Sheet</strong> is designed for developers who need a quick, accurate refresh on <strong>Core Java Cheat Sheet</strong> fundamentals. Whether you are a fresher or a seasoned architect, the complexity of the Java Ecosystem (JVM, Garbage Collection, Multithreading) often requires structured revision.
          </p>
          <p className="text-gray-900 dark:text-gray-500 font-medium">
            Our <strong>Core Java Cheat Sheet</strong> focuses on memory efficiency, design patterns, and standard collection API usage. By studying this <strong>Java Interview Cheat Sheet</strong>, you ensure that you can explain complex topics like G1 Garbage Collection or the internal workings of ConcurrentHashMap with confidence and technical precision.
          </p>
        </article>

        {/* FAQ Section */}
        <section id="faqs" className="mb-16 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <details key={idx} className={`group rounded-xl border transition-all duration-200 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200 hover:border-orange-200'}`}>
                <summary className="flex cursor-pointer items-center justify-between p-6 list-none focus:outline-none">
                  <span className="font-bold text-lg pr-4">{faq.question}</span>
                  <span className="text-orange-600 transition-transform duration-200 group-open:rotate-90">
                    <ChevronRight size={20} />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-900 dark:text-gray-500 border-t border-gray-100 dark:border-gray-700 pt-4 font-medium leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`border-t py-12 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-100 border-gray-200'}`}>
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">
              DevSheet.java
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-4 font-medium">
            &copy; {new Date().getFullYear()} Java Interview Cheat Sheet. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 text-sm font-bold text-gray-600 dark:text-gray-400">
            <a href="#" className="hover:text-orange-600">Privacy Policy</a>
            <a href="#" className="hover:text-orange-600">Contact Us</a>
            <a href="#" className="hover:text-orange-600">About</a>
          </div>
          {/* AdSense Footer Placeholder */}
          <div className="mt-10 text-xs text-gray-400">
            Promoted Content
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      {showScrollTop && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 p-3 bg-orange-600 text-white rounded-full shadow-lg hover:scale-110 transition active:scale-95 z-50"
          aria-label="Back to top"
        >
          <ArrowUpCircle size={28} />
        </button>
      )}

      {/* JSON-LD for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": FAQS.map(f => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": f.answer
            }
          }))
        })}
      </script>
    </div>
  );
};

export default App;

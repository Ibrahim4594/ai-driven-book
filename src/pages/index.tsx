import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import ParticleBackground from '@site/src/components/ParticleBackground';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroContent}>
        <div className={styles.heroLeft}>
          <div className={styles.heroLabel}>✨ The Complete Guide</div>
          <h1 className={styles.heroTitle}>
            Build the Future with <span className={styles.pakistanText}>AI-Driven Development</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Transform from traditional coding to AI-native development. Build enterprise apps 10x faster with specification-driven methodologies.
          </p>
          <div className={styles.heroDescription}>
            <p>🎯 Master LLM-powered development • 🚀 Build production RAG systems • 💻 Deploy real-world AI applications</p>
          </div>
          <div className={styles.buttons}>
            <Link
              className={styles.buttonPrimary}
              to="docs/preface">
              📘 Start Reading Free
            </Link>
            <Link
              className={styles.buttonSecondary}
              to="docs/chapters/03-rag-chatbots">
              🤖 Build Your First Bot
            </Link>
          </div>
          <div className={styles.features}>
            <div className={styles.featureTag}>
              <span className={styles.featureIcon}>⚡</span>
              <span>10x Productivity</span>
            </div>
            <div className={styles.featureTag}>
              <span className={styles.featureIcon}>🎓</span>
              <span>Zero to Expert</span>
            </div>
            <div className={styles.featureTag}>
              <span className={styles.featureIcon}>💎</span>
              <span>100% Free</span>
            </div>
          </div>
        </div>
        <div className={styles.heroRight}>
          <img
            src="/ai-driven-book/img/hero-coding.svg"
            alt="AI-Driven Development"
            className={styles.heroImage}
          />
        </div>
      </div>
    </header>
  );
}

function FeatureSection() {
  const features = [
    {
      title: '🎯 Comprehensive Curriculum',
      description: 'From LLM fundamentals to production deployment, covering everything you need to master AI-driven development.',
      icon: '📚'
    },
    {
      title: '🚀 Hands-On Projects',
      description: 'Build real-world applications including RAG chatbots, vector databases, and AI-powered tools.',
      icon: '💻'
    },
    {
      title: '🧠 Smart Chatbot Assistant',
      description: 'Ask questions about any content. Select text for context-aware answers. Get instant help while learning.',
      icon: '🤖'
    },
    {
      title: '📖 Spec-Driven Methodology',
      description: 'Learn the proven approach to writing specifications that enable AI to generate high-quality code.',
      icon: '📝'
    },
    {
      title: '⚡ Modern Tech Stack',
      description: 'FastAPI, React, TypeScript, OpenAI/Gemini, Qdrant, Docker - all the tools professionals use.',
      icon: '🛠️'
    },
    {
      title: '🎓 Free & Open Source',
      description: 'Complete code examples, reusable templates, and Claude Code skills included at no cost.',
      icon: '💎'
    }
  ];

  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionHeaderContent}>
            <h2 className={styles.sectionTitle}>
              Why <span className={styles.gradient}>This Book</span>?
            </h2>
            <p className={styles.sectionSubtitle}>Everything you need to become an AI development expert in one comprehensive guide</p>
          </div>
          <div className={styles.sectionImage}>
            <img
              src="/ai-driven-book/img/undraw-learning.svg"
              alt="Comprehensive Learning"
              className={styles.floatingImage}
              style={{maxWidth: '400px'}}
            />
          </div>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { number: '10+', label: 'Chapters', icon: '📖' },
    { number: '50+', label: 'Code Examples', icon: '💻' },
    { number: '100%', label: 'Free', icon: '💰' },
    { number: '24/7', label: 'AI Assistant', icon: '🤖' }
  ];

  return (
    <section className={styles.statsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          By The <span className={styles.gradient}>Numbers</span>
        </h2>
        <div className={styles.sectionHeader}>
          <div className={styles.statsGrid}>
            {stats.map((stat, idx) => (
              <div key={idx} className={styles.statCard}>
                <div className={styles.statIcon}>{stat.icon}</div>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
          <div className={styles.sectionImage}>
            <img
              src="/ai-driven-book/img/data-analytics.svg"
              alt="Analytics and Progress"
              className={styles.floatingImage}
              style={{maxWidth: '350px'}}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TechStackSection() {
  const technologies = [
    { name: 'OpenAI GPT-4', category: 'AI Models' },
    { name: 'Google Gemini', category: 'AI Models' },
    { name: 'FastAPI', category: 'Backend' },
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Qdrant', category: 'Vector DB' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'GitHub Actions', category: 'CI/CD' }
  ];

  return (
    <section className={styles.techSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionHeaderContent}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.gradient}>Tech Stack</span> You'll Master
            </h2>
            <p className={styles.sectionSubtitle}>Industry-standard tools and frameworks used by professionals</p>
          </div>
          <div className={styles.sectionImage}>
            <img
              src="/ai-driven-book/img/code-ai.svg"
              alt="Technology Stack"
              className={styles.floatingImage}
              style={{maxWidth: '320px'}}
            />
          </div>
        </div>
        <div className={styles.techGrid}>
          {technologies.map((tech, idx) => (
            <div key={idx} className={styles.techCard}>
              <div className={styles.techName}>{tech.name}</div>
              <div className={styles.techCategory}>{tech.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LearningPathSection() {
  const paths = [
    {
      step: '1',
      title: 'Master the Foundations',
      description: 'Learn LLM basics, prompt engineering, and AI development fundamentals',
      duration: '2-3 hours',
      icon: '🎯'
    },
    {
      step: '2',
      title: 'Spec-Driven Development',
      description: 'Master the Spec-Kit Plus methodology for AI-assisted coding',
      duration: '3-4 hours',
      icon: '📝'
    },
    {
      step: '3',
      title: 'Build RAG Systems',
      description: 'Create production-ready chatbots with vector databases',
      duration: '4-5 hours',
      icon: '🤖'
    },
    {
      step: '4',
      title: 'Deploy & Scale',
      description: 'Learn deployment strategies, monitoring, and optimization',
      duration: '2-3 hours',
      icon: '🚀'
    }
  ];

  return (
    <section className={styles.learningPath}>
      <div className={styles.container}>
        <div className={styles.pathHeader}>
          <div>
            <h2 className={styles.sectionTitle}>
              Your <span className={styles.gradient}>Learning Journey</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Follow our proven 4-step path from beginner to AI development expert
            </p>
          </div>
          <div className={styles.pathRocketImage}>
            <img
              src="/ai-driven-book/img/rocket-launch.svg"
              alt="Your Learning Journey"
              className={styles.rocketImage}
              style={{maxWidth: '280px'}}
            />
          </div>
        </div>
        <div className={styles.pathGrid}>
          {paths.map((path, idx) => (
            <div key={idx} className={styles.pathCard}>
              <div className={styles.pathStep}>{path.step}</div>
              <div className={styles.pathIcon}>{path.icon}</div>
              <h3>{path.title}</h3>
              <p>{path.description}</p>
              <div className={styles.pathDuration}>⏱️ {path.duration}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  const useCases = [
    {
      title: 'Documentation Chatbots',
      description: 'Build intelligent assistants that answer questions about your docs, just like this website!',
      tags: ['RAG', 'FastAPI', 'React'],
      icon: '📚'
    },
    {
      title: 'Code Generation Tools',
      description: 'Create AI-powered tools that generate boilerplate code from specifications',
      tags: ['LLM', 'Templates', 'Automation'],
      icon: '⚡'
    },
    {
      title: 'Customer Support Bots',
      description: 'Deploy AI agents that handle customer queries using your knowledge base',
      tags: ['Vector DB', 'APIs', 'Integration'],
      icon: '💬'
    },
    {
      title: 'Research Assistants',
      description: 'Build tools that analyze documents and extract insights from large text corpora',
      tags: ['NLP', 'Analysis', 'Embeddings'],
      icon: '🔍'
    }
  ];

  return (
    <section className={styles.useCases}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionHeaderContent}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.gradient}>Real-World</span> Applications
            </h2>
            <p className={styles.sectionSubtitle}>
              Learn by building actual AI-powered applications that solve real problems
            </p>
          </div>
          <div className={styles.sectionImage}>
            <img
              src="/ai-driven-book/img/undraw-ai-chat.svg"
              alt="Real Applications"
              className={styles.floatingImage}
              style={{maxWidth: '350px'}}
            />
          </div>
        </div>
        <div className={styles.useCaseGrid}>
          {useCases.map((useCase, idx) => (
            <div key={idx} className={styles.useCaseCard}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>{useCase.icon}</div>
              <h3>{useCase.title}</h3>
              <p>{useCase.description}</p>
              <div className={styles.tags}>
                {useCase.tags.map((tag, i) => (
                  <span key={i} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: 'Do I need prior AI/ML experience?',
      answer: 'No! This book starts from the basics and gradually builds up to advanced topics. If you can code in Python or TypeScript, you\'re ready to start.'
    },
    {
      question: 'Is this really completely free?',
      answer: 'Yes! All content, code examples, and the interactive chatbot are 100% free. No hidden fees, no signup required.'
    },
    {
      question: 'What AI APIs do I need?',
      answer: 'You can use either OpenAI (GPT-4) or Google Gemini (free tier available). We provide examples for both. Qdrant vector database offers a free tier as well.'
    },
    {
      question: 'Can I use this for commercial projects?',
      answer: 'Absolutely! All code examples are open source. Build commercial applications, modify the code, and use our patterns in production.'
    },
    {
      question: 'How long does it take to complete?',
      answer: 'The entire book takes about 12-15 hours to complete, but you can go at your own pace. Each chapter is self-contained.'
    },
    {
      question: 'Will I build real projects?',
      answer: 'Yes! You\'ll build a complete RAG chatbot system, just like the one on this website. Plus several smaller projects along the way.'
    }
  ];

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
        <div className={styles.faqGrid}>
          {faqs.map((faq, idx) => (
            <div key={idx} className={styles.faqCard}>
              <h3 className={styles.faqQuestion}>❓ {faq.question}</h3>
              <p className={styles.faqAnswer}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <h2 className={styles.ctaTitle}>Ready to Transform Your Development Skills?</h2>
        <p className={styles.ctaSubtitle}>
          Join thousands learning AI-driven development. Start building intelligent applications today.
        </p>
        <div className={styles.ctaButtons}>
          <Link
            className={styles.buttonPrimary}
            to="docs/intro">
            Get Started Free
          </Link>
          <Link
            className={styles.buttonOutline}
            to="docs/chapters/01-foundations">
            View Curriculum
          </Link>
        </div>
        <div className={styles.ctaNote}>
          💡 Interactive chatbot included • No signup required • 100% free
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Master AI-Driven and Spec-Driven Software Development with our comprehensive interactive guide">
      <BrowserOnly>
        {() => <ParticleBackground />}
      </BrowserOnly>
      <HomepageHeader />
      <main>
        <StatsSection />
        <FeatureSection />
        <LearningPathSection />
        <UseCasesSection />
        <TechStackSection />
        <FAQSection />
        <CTASection />
      </main>
    </Layout>
  );
}

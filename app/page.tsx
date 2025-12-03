'use client';

import { Button3D } from 'react-3d-button';
import 'react-3d-button/styles';
import { useState } from 'react';
import Link from 'next/link';
import CodeBlock from '@/components/CodeBlock';
import FeatureCard from '@/components/FeatureCard';
import FAQSection from '@/components/FAQSection';
import {
  Palette,
  Smartphone,
  Zap,
  Code,
  Package,
  Sparkles,
  Check,
  Circle,
} from 'lucide-react';

export default function Home() {
  const [count, setCount] = useState(0);
  const [toggleState1, setToggleState1] = useState(false);
  const [toggleState2, setToggleState2] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="border-b border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                React 3D Button
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Beautiful 3D buttons for React & Next.js
              </p>
            </div>
            <nav className="flex gap-3" aria-label="Main navigation">
              <Link
                href="/themes"
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
              >
                Themes
              </Link>
              <Link
                href="/toggle"
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
              >
                Toggle
              </Link>
              <a
                href="https://github.com/boranfurkan/react-3d-button"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.npmjs.com/package/react-3d-button"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
              >
                NPM
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Decorative gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Version 1.0.4 - Toggle Mode Available
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 bg-clip-text">
            React 3D Button Component
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300 mb-4">
            Beautiful Tactile 3D Buttons for React & Next.js
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            A beautiful, customizable 3D button component for React with
            realistic press effects, toggle mode, 5 pre-built themes, TypeScript
            support, and mobile optimization. Perfect for modern web
            applications and Next.js 13+ projects.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button3D type="primary" size="medium" ripple>
              Try Me!
            </Button3D>
            <Link href="/themes">
              <Button3D type="secondary" size="medium">
                Explore Themes
              </Button3D>
            </Link>
            <Link href="/toggle">
              <Button3D type="info" size="medium">
                Toggle Examples
              </Button3D>
            </Link>
          </div>

          <div className="flex flex-wrap gap-4 justify-center text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Next.js 13+ Ready
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              TypeScript
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>5
              Themes Included
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              ~24KB Package
            </div>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <Package className="w-6 h-6 text-blue-500" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Quick Start
            </h3>
          </div>

          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Install the package using npm, yarn, or pnpm:
          </p>

          <CodeBlock
            code={`npm install react-3d-button
# or
yarn add react-3d-button
# or
pnpm add react-3d-button`}
            language="bash"
          />

          <div className="mt-6">
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Import and use in your React components:
            </p>
            <CodeBlock
              code={`import { Button3D } from 'react-3d-button';
import 'react-3d-button/styles';

function App() {
  return (
    <Button3D type="primary" onPress={() => console.log('Clicked!')}>
      Click Me!
    </Button3D>
  );
}`}
              language="typescript"
            />
          </div>
        </div>
      </section>

      {/* Button Variants */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Button Variants
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Choose from 8 semantic button variants to match your UI needs.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div className="text-center">
              <Button3D type="primary">Primary</Button3D>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                Primary
              </p>
            </div>
            <div className="text-center">
              <Button3D type="secondary">Secondary</Button3D>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                Secondary
              </p>
            </div>
            <div className="text-center">
              <Button3D type="tertiary">Tertiary</Button3D>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                Tertiary
              </p>
            </div>
            <div className="text-center">
              <Button3D type="success">Success</Button3D>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                Success
              </p>
            </div>
            <div className="text-center">
              <Button3D type="error">Error</Button3D>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                Error
              </p>
            </div>
            <div className="text-center">
              <Button3D type="warning">Warning</Button3D>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                Warning
              </p>
            </div>
            <div className="text-center">
              <Button3D type="info">Info</Button3D>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                Info
              </p>
            </div>
            <div className="text-center">
              <Button3D type="danger">Danger</Button3D>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                Danger
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Button Sizes
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Three predefined sizes to fit your design system.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <div className="text-center">
              <Button3D type="primary" size="small">
                Small
              </Button3D>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                Small (32px)
              </p>
            </div>
            <div className="text-center">
              <Button3D type="primary" size="medium">
                Medium
              </Button3D>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                Medium (48px)
              </p>
            </div>
            <div className="text-center">
              <Button3D type="primary" size="large">
                Large
              </Button3D>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                Large (64px)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Interactive Features
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Explore the rich interactive capabilities with ripple effects,
            active states, and toggles.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                Ripple Effect
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                Add visual feedback with built-in ripple animations.
              </p>
              <div className="flex gap-3">
                <Button3D type="primary" ripple>
                  With Ripple
                </Button3D>
                <Button3D type="secondary">No Ripple</Button3D>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                Toggle Mode
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                Enable toggle mode for persistent pressed states.
              </p>
              <div className="flex gap-3">
                <Button3D
                  type="success"
                  toggle
                  active={toggleState1}
                  onChange={setToggleState1}
                >
                  <span className="w-20 inline-flex items-center gap-1 justify-center">
                    {toggleState1 ? (
                      <>
                        <Check size={16} /> ON
                      </>
                    ) : (
                      <>
                        <Circle size={16} /> OFF
                      </>
                    )}
                  </span>
                </Button3D>
                <Button3D
                  type="warning"
                  toggle
                  defaultActive={false}
                  onChange={(active) => setToggleState2(active)}
                >
                  <span className="w-20 inline-flex items-center gap-1 justify-center">
                    {toggleState2 ? (
                      <>
                        <Check size={16} /> Active
                      </>
                    ) : (
                      <>
                        <Circle size={16} /> Inactive
                      </>
                    )}
                  </span>
                </Button3D>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                <Link
                  href="/toggle"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View more toggle examples →
                </Link>
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                Counter Example
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                Build interactive counters with disabled state logic.
              </p>
              <div className="flex items-center gap-3">
                <Button3D
                  type="error"
                  size="small"
                  onPress={() => setCount(Math.max(0, count - 1))}
                  disabled={count <= 0}
                >
                  -
                </Button3D>
                <span className="text-2xl font-bold text-slate-900 dark:text-white min-w-12 text-center">
                  {count}
                </span>
                <Button3D
                  type="success"
                  size="small"
                  onPress={() => setCount(count + 1)}
                >
                  +
                </Button3D>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                Disabled State
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                Prevent interaction with the disabled prop.
              </p>
              <div className="flex gap-3">
                <Button3D type="primary" disabled>
                  Disabled
                </Button3D>
                <Button3D type="secondary" disabled>
                  Can&apos;t Click
                </Button3D>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
          Why React 3D Button?
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Palette size={24} />}
            title="Multiple Themes"
            description="5 pre-built themes included: Ocean, Sunset, Forest, Pirate, and Neon. Easily customize with CSS variables."
          />
          <FeatureCard
            icon={<Smartphone size={24} />}
            title="Mobile Optimized"
            description="Enhanced touch support with fixed mobile interaction issues. Works perfectly on all devices and screen sizes."
          />
          <FeatureCard
            icon={<Zap size={24} />}
            title="Next.js Ready"
            description="Works seamlessly with Next.js 13+ App Router and server components. Zero configuration needed."
          />
          <FeatureCard
            icon={<Code size={24} />}
            title="TypeScript Support"
            description="Built with TypeScript. Includes full type definitions and IntelliSense support out of the box."
          />
          <FeatureCard
            icon={<Sparkles size={24} />}
            title="Rich Effects"
            description="Built-in ripple effects, 3D press animations, hover states, and smooth transitions for better UX."
          />
          <FeatureCard
            icon={<Package size={24} />}
            title="Lightweight"
            description="Small bundle size with zero runtime dependencies. Only ~24KB for the entire package."
          />
        </div>
      </section>
      {/* FAQ Section */}
      <FAQSection />

      {/* SEO Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            About React 3D Button
          </h2>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              <strong>React 3D Button</strong> is a powerful, easy-to-use button
              component library for React and Next.js applications. It provides
              beautiful 3D press effects, realistic animations, and a delightful
              user experience that makes your web applications stand out.
            </p>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
              Perfect for Modern React Applications
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Whether you&apos;re building a landing page, SaaS dashboard,
              e-commerce site, or any modern web application, React 3D Button
              provides the interactive elements you need. With full TypeScript
              support, mobile optimization, and Next.js 13+ compatibility, it
              integrates seamlessly into your existing React projects.
            </p>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
              Key Features for Developers
            </h3>
            <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 space-y-2 mb-4">
              <li>
                <strong>9 Button Variants:</strong> Primary, Secondary,
                Tertiary, Success, Error, Warning, Info, Anchor, and Danger
              </li>
              <li>
                <strong>5 Pre-built Themes:</strong> Ocean, Sunset, Forest,
                Pirate, and Neon - ready to use out of the box
              </li>
              <li>
                <strong>TypeScript First:</strong> Full type definitions for
                excellent IDE support and autocomplete
              </li>
              <li>
                <strong>Mobile Optimized:</strong> Enhanced touch support with
                fixed mobile interaction issues
              </li>
              <li>
                <strong>Highly Customizable:</strong> Override CSS variables to
                match your brand colors
              </li>
              <li>
                <strong>Lightweight Package:</strong> Only ~24KB with zero
                runtime dependencies
              </li>
              <li>
                <strong>Next.js Ready:</strong> Works perfectly with Next.js 13+
                App Router and Server Components
              </li>
              <li>
                <strong>Accessible:</strong> Built with accessibility in mind,
                supporting keyboard navigation
              </li>
            </ul>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
              Use Cases and Applications
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              React 3D Button is ideal for call-to-action buttons, form
              submissions, navigation elements, interactive dashboards, gaming
              interfaces, and any application where you want to provide tactile,
              engaging user interactions. The realistic 3D press effect gives
              users immediate visual feedback, improving the overall user
              experience.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-700 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Built with ❤️ by{' '}
                <a
                  href="https://github.com/boranfurkan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Furkan Boran
                </a>
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Inspired by{' '}
                <a
                  href="https://github.com/rcaferati/react-awesome-button"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  react-awesome-button
                </a>
              </p>
            </div>
            <nav className="flex gap-4" aria-label="Footer navigation">
              <a
                href="https://github.com/boranfurkan/react-3d-button"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.npmjs.com/package/react-3d-button"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                NPM
              </a>
              <Link
                href="/themes"
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Themes
              </Link>
              <Link
                href="/toggle"
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Toggle
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}

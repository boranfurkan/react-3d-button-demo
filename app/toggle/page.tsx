'use client';

import { Button3D } from 'react-3d-button';
import 'react-3d-button/styles';
import { useState } from 'react';
import Link from 'next/link';
import CodeBlock from '@/components/CodeBlock';
import { ToggleLeft, Check, Circle, Moon, Sun, Wifi } from 'lucide-react';

export default function TogglePage() {
  const [controlledToggle, setControlledToggle] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [wifi, setWifi] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="border-b border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <Link
                href="/"
                className="text-2xl font-bold text-slate-900 dark:text-white hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
              >
                React 3D Button
              </Link>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Toggle Component Demo
              </p>
            </div>
            <nav className="flex gap-3" aria-label="Main navigation">
              <Link
                href="/"
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/themes"
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
              >
                Themes
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900 rounded-full mb-6">
            <ToggleLeft className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
              New Toggle Mode
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
            3D Toggle Components
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Transform your 3D buttons into interactive toggle switches. Perfect
            for settings, preferences, and binary choices with tactile feedback.
          </p>
        </div>
      </section>

      {/* Uncontrolled Toggle */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Uncontrolled Toggle (Manages its own state)
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            The simplest way to use toggle mode. The component manages its own
            state internally.
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            <Button3D
              type="primary"
              toggle
              onChange={(active) => console.log('Toggle state:', active)}
            >
              <span className="w-32 inline-block">Click to Toggle</span>
            </Button3D>

            <Button3D
              type="success"
              toggle
              defaultActive={true}
              onChange={(active) => console.log('Success toggle:', active)}
            >
              <span className="w-24 inline-block">Default ON</span>
            </Button3D>

            <Button3D
              type="error"
              toggle
              onChange={(active) => console.log('Error toggle:', active)}
            >
              <span className="w-24 inline-block">Error Toggle</span>
            </Button3D>
          </div>

          <CodeBlock
            code={`<Button3D
  type="primary"
  toggle
  onChange={(active) => console.log('Toggle state:', active)}
>
  Click to Toggle
</Button3D>

<Button3D
  type="success"
  toggle
  defaultActive={true}
>
  Default ON
</Button3D>`}
            language="typescript"
          />
        </div>
      </section>

      {/* Controlled Toggle */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Controlled Toggle (You manage the state)
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            For more control, manage the state yourself. Perfect for forms and
            complex state management.
          </p>

          <div className="flex items-center gap-4 mb-4">
            <Button3D
              type="info"
              toggle
              active={controlledToggle}
              onChange={setControlledToggle}
            >
              <span className="w-16 inline-flex items-center gap-1">
                {controlledToggle ? (
                  <>
                    <Check size={14} /> ON
                  </>
                ) : (
                  <>
                    <Circle size={14} /> OFF
                  </>
                )}
              </span>
            </Button3D>
            <span className="text-slate-700 dark:text-slate-300">
              Current state:{' '}
              <strong>{controlledToggle ? 'Active' : 'Inactive'}</strong>
            </span>
          </div>

          <CodeBlock
            code={`const [isActive, setIsActive] = useState(false);

<Button3D
  type="info"
  toggle
  active={isActive}
  onChange={setIsActive}
>
  {isActive ? 'ON' : 'OFF'}
</Button3D>`}
            language="typescript"
          />
        </div>
      </section>

      {/* Settings Panel Example */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Settings Panel Example
          </h2>

          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Notifications
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Receive push notifications
                </p>
              </div>
              <Button3D
                type={notifications ? 'success' : 'secondary'}
                toggle
                active={notifications}
                onChange={setNotifications}
                size="small"
              >
                <span className="w-14 inline-flex items-center justify-center gap-1">
                  {notifications ? (
                    <>
                      <Check size={14} /> ON
                    </>
                  ) : (
                    <>
                      <Circle size={14} /> OFF
                    </>
                  )}
                </span>
              </Button3D>
            </div>

            <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Dark Mode
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Use dark theme
                </p>
              </div>
              <Button3D
                type={darkMode ? 'primary' : 'secondary'}
                toggle
                active={darkMode}
                onChange={setDarkMode}
                size="small"
              >
                <span className="w-14 inline-flex items-center justify-center gap-1">
                  {darkMode ? (
                    <>
                      <Moon size={14} /> ON
                    </>
                  ) : (
                    <>
                      <Sun size={14} /> OFF
                    </>
                  )}
                </span>
              </Button3D>
            </div>

            <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Wi-Fi
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Connect to wireless network
                </p>
              </div>
              <Button3D
                type={wifi ? 'info' : 'secondary'}
                toggle
                active={wifi}
                onChange={setWifi}
                size="small"
              >
                <span className="w-14 inline-flex items-center justify-center gap-1">
                  {wifi ? (
                    <>
                      <Wifi size={14} /> ON
                    </>
                  ) : (
                    <>
                      <Circle size={14} /> OFF
                    </>
                  )}
                </span>
              </Button3D>
            </div>
          </div>
        </div>
      </section>

      {/* All Variants */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            All Toggle Variants
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <div className="text-center">
              <Button3D type="primary" toggle defaultActive>
                <span className="w-20 inline-flex items-center gap-1">
                  <Check size={14} /> Primary
                </span>
              </Button3D>
              <p className="text-xs text-slate-500 mt-2">Primary</p>
            </div>
            <div className="text-center">
              <Button3D type="secondary" toggle defaultActive>
                <span className="w-24 inline-flex items-center gap-1">
                  <Check size={14} /> Secondary
                </span>
              </Button3D>
              <p className="text-xs text-slate-500 mt-2">Secondary</p>
            </div>
            <div className="text-center">
              <Button3D type="tertiary" toggle defaultActive>
                <span className="w-20 inline-flex items-center gap-1">
                  <Check size={14} /> Tertiary
                </span>
              </Button3D>
              <p className="text-xs text-slate-500 mt-2">Tertiary</p>
            </div>
            <div className="text-center">
              <Button3D type="success" toggle defaultActive>
                <span className="w-20 inline-flex items-center gap-1">
                  <Check size={14} /> Success
                </span>
              </Button3D>
              <p className="text-xs text-slate-500 mt-2">Success</p>
            </div>
            <div className="text-center">
              <Button3D type="error" toggle defaultActive>
                <span className="w-16 inline-flex items-center gap-1">
                  <Check size={14} /> Error
                </span>
              </Button3D>
              <p className="text-xs text-slate-500 mt-2">Error</p>
            </div>
            <div className="text-center">
              <Button3D type="warning" toggle defaultActive>
                <span className="w-20 inline-flex items-center gap-1">
                  <Check size={14} /> Warning
                </span>
              </Button3D>
              <p className="text-xs text-slate-500 mt-2">Warning</p>
            </div>
            <div className="text-center">
              <Button3D type="info" toggle defaultActive>
                <span className="w-16 inline-flex items-center gap-1">
                  <Check size={14} /> Info
                </span>
              </Button3D>
              <p className="text-xs text-slate-500 mt-2">Info</p>
            </div>
            <div className="text-center">
              <Button3D type="danger" toggle defaultActive>
                <span className="w-20 inline-flex items-center gap-1">
                  <Check size={14} /> Danger
                </span>
              </Button3D>
              <p className="text-xs text-slate-500 mt-2">Danger</p>
            </div>
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Toggle API Reference
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">
                    Prop
                  </th>
                  <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">
                    Type
                  </th>
                  <th className="pb-3 pr-4 font-semibold text-slate-900 dark:text-white">
                    Default
                  </th>
                  <th className="pb-3 font-semibold text-slate-900 dark:text-white">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="text-slate-600 dark:text-slate-400">
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 pr-4 font-mono text-sm">toggle</td>
                  <td className="py-3 pr-4">boolean</td>
                  <td className="py-3 pr-4">false</td>
                  <td className="py-3">
                    Enables toggle mode - button stays pressed when clicked
                  </td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 pr-4 font-mono text-sm">active</td>
                  <td className="py-3 pr-4">boolean</td>
                  <td className="py-3 pr-4">undefined</td>
                  <td className="py-3">
                    Controlled mode: the current toggle state
                  </td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 pr-4 font-mono text-sm">defaultActive</td>
                  <td className="py-3 pr-4">boolean</td>
                  <td className="py-3 pr-4">false</td>
                  <td className="py-3">
                    Uncontrolled mode: initial toggle state
                  </td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-mono text-sm">onChange</td>
                  <td className="py-3 pr-4">(active: boolean) =&gt; void</td>
                  <td className="py-3 pr-4">undefined</td>
                  <td className="py-3">
                    Callback fired when toggle state changes
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-700 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
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
            <nav className="flex gap-4" aria-label="Footer navigation">
              <Link
                href="/"
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/themes"
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Themes
              </Link>
              <a
                href="https://github.com/boranfurkan/react-3d-button"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                GitHub
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}

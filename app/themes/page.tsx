'use client';

import { Button3D } from 'react-3d-button';
import 'react-3d-button/styles';
import 'react-3d-button/themes/ocean.css';
import 'react-3d-button/themes/sunset.css';
import 'react-3d-button/themes/forest.css';
import 'react-3d-button/themes/pirate.css';
import 'react-3d-button/themes/neon.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import CodeBlock from '@/components/CodeBlock';
import { Palette } from 'lucide-react';

const themes = [
  { name: 'Default', className: '', description: 'Clean, modern blue theme' },
  {
    name: 'Ocean',
    className: 'theme-ocean',
    description: 'Cool blues and teals',
  },
  {
    name: 'Sunset',
    className: 'theme-sunset',
    description: 'Warm oranges and purples',
  },
  {
    name: 'Forest',
    className: 'theme-forest',
    description: 'Earthy greens and browns',
  },
  {
    name: 'Pirate',
    className: 'theme-pirate',
    description: 'Rich browns and tans',
  },
  {
    name: 'Neon',
    className: 'theme-neon',
    description: 'Vibrant neon colors',
  },
];

export default function ThemesPage() {
  const [selectedTheme, setSelectedTheme] = useState('Default');
  const [currentThemeClass, setCurrentThemeClass] = useState('');
  const [customColors, setCustomColors] = useState({
    primary: '#6366f1',
    primaryDark: '#4f46e5',
    primaryLight: '#ffffff',
  });

  const loadTheme = (themeName: string, themeClassName: string) => {
    setSelectedTheme(themeName);
    setCurrentThemeClass(themeClassName);
  };

  const handleColorChange = (key: keyof typeof customColors, value: string) => {
    setCustomColors((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    // Update CSS variables dynamically
    const style = document.getElementById('custom-theme-style');
    if (style) {
      style.textContent = `
        .custom-override-demo .aws-btn {
          --button-primary-color: ${customColors.primary} !important;
          --button-primary-color-dark: ${customColors.primaryDark} !important;
          --button-primary-color-light: ${customColors.primaryLight} !important;
          --button-primary-color-hover: ${customColors.primary} !important;
        }
      `;
    }
  }, [customColors]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <style id="custom-theme-style">{`
        .custom-override-demo .aws-btn {
          --button-primary-color: ${customColors.primary};
          --button-primary-color-dark: ${customColors.primaryDark};
          --button-primary-color-light: ${customColors.primaryLight};
          --button-primary-color-hover: ${customColors.primary};
        }
      `}</style>
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
                Explore Themes
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
            </nav>
          </div>
        </div>
      </header>

      {/* Theme Selector */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900 rounded-full mb-6">
            <Palette className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
              5 Beautiful Themes
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Choose Your Theme
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Select a theme to see it in action. All themes are included in the
            package and can be imported with a single line.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {themes.map((theme) => (
            <button
              key={theme.name}
              onClick={() => loadTheme(theme.name, theme.className)}
              className={`p-6 rounded-xl border-2 transition-all text-left ${
                selectedTheme === theme.name
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/20'
                  : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600'
              }`}
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {theme.name}
                {selectedTheme === theme.name && (
                  <span className="ml-2 text-blue-500">✓</span>
                )}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                {theme.description}
              </p>
              {theme.className && (
                <code className="text-xs bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded">
                  react-3d-button/themes/{theme.className.replace('theme-', '')}
                  .css
                </code>
              )}
            </button>
          ))}
        </div>

        {/* Live Preview */}
        <div
          className={`bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 ${currentThemeClass}`}
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Live Preview - {selectedTheme} Theme
          </h3>

          <div className="space-y-8">
            {/* Button Types */}
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                Button Types
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <Button3D type="primary">Primary</Button3D>
                <Button3D type="secondary">Secondary</Button3D>
                <Button3D type="tertiary">Tertiary</Button3D>
                <Button3D type="success">Success</Button3D>
                <Button3D type="error">Error</Button3D>
                <Button3D type="warning">Warning</Button3D>
                <Button3D type="info">Info</Button3D>
                <Button3D type="danger">Danger</Button3D>
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                Sizes
              </h4>
              <div className="flex flex-wrap items-end gap-3">
                <Button3D type="primary" size="xs">
                  XS
                </Button3D>
                <Button3D type="primary" size="sm">
                  SM
                </Button3D>
                <Button3D type="primary" size="md">
                  MD
                </Button3D>
                <Button3D type="primary" size="lg">
                  LG
                </Button3D>
                <Button3D type="primary" size="xl">
                  XL
                </Button3D>
                <Button3D type="primary" size="2xl">
                  2XL
                </Button3D>
              </div>
            </div>

            {/* States */}
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                States
              </h4>
              <div className="flex flex-wrap gap-4">
                <Button3D type="primary">Normal</Button3D>
                <Button3D type="primary" ripple>
                  With Ripple
                </Button3D>
                <Button3D type="primary" disabled>
                  Disabled
                </Button3D>
              </div>
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 mt-12">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
            How to use {selectedTheme} theme
          </h3>

          {currentThemeClass && (
            <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg">
              <p className="text-sm text-blue-900 dark:text-blue-100 font-medium mb-2">
                💡 Two ways to apply themes:
              </p>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1 ml-4">
                <li>
                  <strong>Global:</strong> Use{' '}
                  <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
                    .global.css
                  </code>{' '}
                  to apply to all buttons
                </li>
                <li>
                  <strong>Scoped:</strong> Use{' '}
                  <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded">
                    .css
                  </code>{' '}
                  with wrapper div for multi-theme apps
                </li>
              </ul>
            </div>
          )}

          <div className="space-y-4">
            {currentThemeClass && (
              <>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
                    Option 1: Global (entire app)
                  </h4>
                  <CodeBlock
                    code={`import { Button3D } from 'react-3d-button';
import 'react-3d-button/styles';
import 'react-3d-button/themes/${currentThemeClass.replace(
                      'theme-',
                      ''
                    )}.global.css';

function App() {
  return <Button3D type="primary">Click Me!</Button3D>;
}`}
                    language="typescript"
                  />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
                    Option 2: Scoped (with wrapper)
                  </h4>
                  <CodeBlock
                    code={`import { Button3D } from 'react-3d-button';
import 'react-3d-button/styles';
import 'react-3d-button/themes/${currentThemeClass.replace('theme-', '')}.css';

function App() {
  return (
    <div className="${currentThemeClass}">
      <Button3D type="primary">Click Me!</Button3D>
    </div>
  );
}`}
                    language="typescript"
                  />
                </div>
              </>
            )}

            {!currentThemeClass && (
              <CodeBlock
                code={`import { Button3D } from 'react-3d-button';
import 'react-3d-button/styles';

function App() {
  return <Button3D type="primary">Click Me!</Button3D>;
}`}
                language="typescript"
              />
            )}
          </div>
        </div>
      </section>

      {/* Custom Theme Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700 mb-12">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Create Your Own Theme
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Override CSS variables to create a custom theme that matches your
            brand. Try it live below:
          </p>

          {/* Interactive Color Picker */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                Customize Colors
              </h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Primary Color
                  </label>
                  <div className="flex gap-3 items-center">
                    <input
                      type="color"
                      value={customColors.primary}
                      onChange={(e) =>
                        handleColorChange('primary', e.target.value)
                      }
                      className="h-10 w-20 rounded border border-slate-300 dark:border-slate-600 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={customColors.primary}
                      onChange={(e) =>
                        handleColorChange('primary', e.target.value)
                      }
                      className="flex-1 px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded text-slate-900 dark:text-white text-sm"
                      placeholder="#6366f1"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Primary Dark (Shadow)
                  </label>
                  <div className="flex gap-3 items-center">
                    <input
                      type="color"
                      value={customColors.primaryDark}
                      onChange={(e) =>
                        handleColorChange('primaryDark', e.target.value)
                      }
                      className="h-10 w-20 rounded border border-slate-300 dark:border-slate-600 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={customColors.primaryDark}
                      onChange={(e) =>
                        handleColorChange('primaryDark', e.target.value)
                      }
                      className="flex-1 px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded text-slate-900 dark:text-white text-sm"
                      placeholder="#4f46e5"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Text Color
                  </label>
                  <div className="flex gap-3 items-center">
                    <input
                      type="color"
                      value={customColors.primaryLight}
                      onChange={(e) =>
                        handleColorChange('primaryLight', e.target.value)
                      }
                      className="h-10 w-20 rounded border border-slate-300 dark:border-slate-600 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={customColors.primaryLight}
                      onChange={(e) =>
                        handleColorChange('primaryLight', e.target.value)
                      }
                      className="flex-1 px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded text-slate-900 dark:text-white text-sm"
                      placeholder="#ffffff"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Live Preview */}
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">
                Live Preview
              </h4>
              <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700 custom-override-demo">
                <div className="flex items-center gap-4">
                  <Button3D type="primary">Custom Primary Button</Button3D>
                  <Button3D type="primary" ripple>
                    With Ripple Effect
                  </Button3D>
                </div>
              </div>
            </div>
          </div>

          {/* Code Example */}
          <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-4 overflow-x-auto">
            <CodeBlock
              code={`/* In your CSS file or styled component */
.my-custom-theme .aws-btn {
  --button-primary-color: ${customColors.primary};
  --button-primary-color-dark: ${customColors.primaryDark};
  --button-primary-color-light: ${customColors.primaryLight};
  --button-primary-color-hover: ${customColors.primary};
}

/* Or use inline styles in React */
<div style={{
  '--button-primary-color': '${customColors.primary}',
  '--button-primary-color-dark': '${customColors.primaryDark}',
  '--button-primary-color-light': '${customColors.primaryLight}',
}}>
  <Button3D type="primary">Custom Button</Button3D>
</div>`}
              language="typescript"
            />
          </div>
        </div>

        {/* Available Variables */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Available CSS Variables
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            All available CSS variables you can override for each button type:
          </p>
          <CodeBlock
            code={`/* Colors for each button type */
--button-primary-color
--button-primary-color-dark
--button-primary-color-light
--button-primary-color-hover

--button-secondary-color
--button-secondary-color-dark
--button-secondary-color-light
--button-secondary-color-hover

--button-success-color
--button-error-color
--button-warning-color
--button-info-color
--button-danger-color
--button-tertiary-color
--button-anchor-color

/* 3D Effect */
--button-raise-level: 6px;
--button-hover-pressure: 2;

/* Transitions */
--button-transition-duration: 0.3s;

/* Sizes */
--button-padding-small: 8px 16px;
--button-padding-medium: 12px 24px;
--button-padding-large: 16px 32px;

/* And more... */`}
            language="css"
          />
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
            </div>
            <nav className="flex gap-4" aria-label="Footer navigation">
              <Link
                href="/"
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/toggle"
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Toggle
              </Link>
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
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}

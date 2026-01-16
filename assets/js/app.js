const defaultConfig = {
      full_name: 'Magnus Sandfeld Larsen',
      job_title: 'IT-Sikkerhedsspecialist',
      email: 'magnus.s.larsen@hotmail.com',
      phone: '28 71 55 38',
      location: 'Spobjergvej 12, 8220 Brabrand',
      background_color: '#0a1628',
      sidebar_color: '#0d1f3c',
      text_color: '#e2e8f0',
      accent_color: '#3b82f6',
      secondary_color: '#1e3a5f',
      font_family: 'Inter',
      font_size: 16
    };

    // Code snippets with jokes and references
    const codeSnippets = [
      `async function penetrationTest() {
  try {
    const vulnScan = await scanVulnerabilities();
    await testSSL();
    await checkSQLInjection({ payload: "' OR '1'='1" });
    console.log("Penetration test successful");
    // It works on my machine ¯\\_(ツ)_/¯
  } catch (error) {
    console.log("Security hole found!");
    await notifyClient();
    hide_from_manager();
  }
}
// This is fine`,
      
      `function validatePassword(password) {
  const hasNumbers = /[0-9]/.test(password);
  const hasSymbols = /[!@#$%]/.test(password);
  const isLongEnough = password.length > 8;
  
  if (isLongEnough && hasNumbers && hasSymbols) {
    console.log("Password secure");
    return true;
  }
  
  // But password123 works too
  return password === "admin123";
}

// Security through difficulty of understanding`,
      
      `class EncryptionService {
  constructor() {
    this.algorithm = "AES-256";
    this.keySize = 256;
  }
  
  encrypt(data) {
    // This should never be plaintext
    // But it happens
    if (data.includes("password")) {
      logToFile(data); // For debugging...
      return this.hardcodedKey(data);
    }
    return crypto.encrypt(data);
  }
}`,
      
      `const securityConfig = {
  // TODO: Implement proper TLS
  // WARNING: DO NOT HARDCODE KEYS
  // ...but the deployment is at 3pm
  API_KEY: "sk-1234567890abcdef",
  DATABASE_PASSWORD: "ChangeMeLater2024",
  // This was supposed to be changed
  JWT_SECRET: "my-secret-key-123",
  SSL_VERIFY: false // For testing only (it's been 2 years)
};`,
      
      `function validateInput(userInput) {
  // SQL injection check
  if (userInput.includes("DROP TABLE")) {
    return false;
  }
  
  // XSS prevention - 50% effective
  const sanitized = userInput.replace("<script>", "");
  
  function isActuallySafe(input) {
    return true; // Trust the user
  }
  
  return isActuallySafe(sanitized);
}`,
      
      `const authRoutes = [
  { path: "/api/admin", method: "GET", auth: true },
  { path: "/api/users/delete", auth: "maybe" },
  { path: "/admin/reset-db", backup: false },
];

function checkAuthentication(token) {
  // Security through obscurity
  return token !== undefined;
}

// Works in production... sometimes`,
      
      `let securityActive = true;
while (securityActive) {
  try {
    monitorThreats();
    updateVulnDatabase();
    patchServers();
    sleep(86400000);
  } catch (breach) {
    sendAlertToTeam();
    panic();
    restart();
  }
}

// This loop controls our sanity`,
      
      `const commonVulnerabilities = [
  "SQL Injection",
  "XSS Attacks",
  "CSRF Tokens Missing",
  "Weak Passwords",
  "Forgotten SSH Keys",
  "That one library with CVE-2024-XXXXX"
];

const fixedIssues = [];
// Still waiting for fixes...
const budget = "$0";
const time = "next sprint"`
    ];

    let currentSnippetIndex = 0;
    let currentText = '';
    let charIndex = 0;
    let isDeleting = false;

    function typewriterEffect() {
      const typewriterEl = document.getElementById('code-typewriter');
      const currentSnippet = codeSnippets[currentSnippetIndex];
      
      if (!isDeleting && charIndex < currentSnippet.length) {
        // Typing
        currentText = currentSnippet.substring(0, charIndex + 1);
        charIndex++;
        typewriterEl.textContent = currentText;
        setTimeout(typewriterEffect, 30);
      } else if (!isDeleting && charIndex === currentSnippet.length) {
        // Pause at end
        setTimeout(() => {
          isDeleting = true;
          typewriterEffect();
        }, 3000);
      } else if (isDeleting && charIndex > 0) {
        // Deleting
        currentText = currentSnippet.substring(0, charIndex - 1);
        charIndex--;
        typewriterEl.textContent = currentText;
        setTimeout(typewriterEffect, 15);
      } else if (isDeleting && charIndex === 0) {
        // Move to next snippet
        isDeleting = false;
        currentSnippetIndex = (currentSnippetIndex + 1) % codeSnippets.length;
        setTimeout(typewriterEffect, 500);
      }
    }

    function applyColors(config) {
      const root = document.documentElement;
      const backgroundColor = config.background_color || defaultConfig.background_color;
      const sidebarColor = config.sidebar_color || defaultConfig.sidebar_color;
      root.style.setProperty('--accent-color', config.accent_color || defaultConfig.accent_color);
      root.style.setProperty('--background-color', backgroundColor);
      root.style.setProperty('--sidebar-color', sidebarColor);
      
      const container = document.getElementById('cv-container');
      const sidebar = document.getElementById('sidebar');
      const mainContent = document.getElementById('main-content');
      const profileIcon = document.getElementById('profile-icon');
      const lockWatermark = document.getElementById('lock-watermark');
      
      container.style.backgroundColor = backgroundColor;
      sidebar.style.backgroundColor = sidebarColor;
      document.body.style.backgroundColor = backgroundColor;
      document.documentElement.style.backgroundColor = backgroundColor;
      
      const textColor = config.text_color || defaultConfig.text_color;
      const accentColor = config.accent_color || defaultConfig.accent_color;
      
      sidebar.style.color = textColor;
      mainContent.style.color = textColor;
      
      profileIcon.style.borderColor = accentColor;
      lockWatermark.style.color = accentColor;
      
      document.getElementById('section-icon-about').style.color = accentColor;
      document.getElementById('section-icon-exp').style.color = accentColor;
      document.getElementById('section-icon-edu').style.color = accentColor;
      document.getElementById('section-icon-projects').style.color = accentColor;
    }

    function applyFonts(config) {
      const fontFamily = config.font_family || defaultConfig.font_family;
      const fontSize = config.font_size || defaultConfig.font_size;
      const baseFontStack = 'Inter, system-ui, sans-serif';
      
      document.body.style.fontFamily = `${fontFamily}, ${baseFontStack}`;
      document.body.style.fontSize = `${fontSize}px`;
      
      document.getElementById('name-display').style.fontSize = `${fontSize * 2.5}px`;
      document.getElementById('title-display').style.fontSize = `${fontSize * 1.125}px`;
    }

    function applyContent(config) {
      document.getElementById('name-display').textContent = config.full_name || defaultConfig.full_name;
      document.getElementById('title-display').textContent = config.job_title || defaultConfig.job_title;
      const emailText = config.email || defaultConfig.email;
      const phoneText = config.phone || defaultConfig.phone;
      const locationText = config.location || defaultConfig.location;
      const userAgent = navigator.userAgent || '';
      const isMobile = /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(userAgent);
      const isIOS = /iPad|iPhone|iPod/i.test(userAgent);
      const isAndroid = /Android/i.test(userAgent);

      document.getElementById('email-display').textContent = emailText;
      document.getElementById('phone-display').textContent = phoneText;
      const locationDisplayText = locationText.replace(/(\d{4})\s+([^\s].*)$/, '$1\u00a0$2');
      document.getElementById('location-display').textContent = locationDisplayText;

      const emailLink = document.getElementById('email-link');
      const phoneLink = document.getElementById('phone-link');
      const locationLink = document.getElementById('location-link');
      const linkedinLink = document.getElementById('linkedin-link');

      if (emailLink) {
        emailLink.href = `mailto:${emailText}`;
      }
      if (phoneLink) {
        if (isMobile) {
          phoneLink.href = `tel:${phoneText.replace(/[^\d+]/g, '')}`;
          phoneLink.style.pointerEvents = '';
          phoneLink.style.cursor = '';
        } else {
          phoneLink.removeAttribute('href');
          phoneLink.style.pointerEvents = 'none';
          phoneLink.style.cursor = 'default';
        }
      }
      if (locationLink) {
        if (isMobile) {
          const encodedLocation = encodeURIComponent(locationText);
          locationLink.href = isIOS
            ? `maps://?q=${encodedLocation}`
            : `geo:0,0?q=${encodedLocation}`;
        } else {
          locationLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationText)}`;
        }
      }
      if (linkedinLink) {
        const linkedinWebUrl = linkedinLink.getAttribute('href') || 'https://linkedin.com/in/magnus-sandfeld-larsen';
        const match = linkedinWebUrl.match(/linkedin\.com\/in\/([^/?#]+)/i);
        const slug = match ? match[1] : '';
        const linkedinAppUrl = slug ? `linkedin://in/${slug}` : 'linkedin://';
        const androidIntentUrl = slug
          ? `intent://in/${slug}#Intent;scheme=linkedin;package=com.linkedin.android;S.browser_fallback_url=${encodeURIComponent(linkedinWebUrl)};end`
          : '';

        if (isMobile && slug) {
          if (!linkedinLink.dataset.mobileBound) {
            linkedinLink.addEventListener('click', (event) => {
              if (!isMobile) {
                return;
              }
              event.preventDefault();

              if (isAndroid && androidIntentUrl) {
                window.location.href = androidIntentUrl;
                return;
              }
              if (isIOS) {
                // Universal link opens app if installed, otherwise falls back to browser.
                window.location.href = linkedinWebUrl;
                return;
              }

              window.location.href = linkedinAppUrl;
            });
            linkedinLink.dataset.mobileBound = 'true';
          }
          // Ensure mobile clicks stay in same tab so the app can open.
          linkedinLink.removeAttribute('target');
          linkedinLink.removeAttribute('rel');
          if (isAndroid && androidIntentUrl) {
            linkedinLink.href = androidIntentUrl;
          } else {
            linkedinLink.href = linkedinWebUrl;
          }
        } else {
          linkedinLink.href = linkedinWebUrl;
          linkedinLink.setAttribute('target', '_blank');
          linkedinLink.setAttribute('rel', 'noopener noreferrer');
        }
      }
    }

    async function onConfigChange(config) {
      applyColors(config);
      applyFonts(config);
      applyContent(config);
    }

    function mapToCapabilities(config) {
      return {
        recolorables: [
          {
            get: () => config.background_color || defaultConfig.background_color,
            set: (value) => { config.background_color = value; window.elementSdk.setConfig({ background_color: value }); }
          },
          {
            get: () => config.sidebar_color || defaultConfig.sidebar_color,
            set: (value) => { config.sidebar_color = value; window.elementSdk.setConfig({ sidebar_color: value }); }
          },
          {
            get: () => config.text_color || defaultConfig.text_color,
            set: (value) => { config.text_color = value; window.elementSdk.setConfig({ text_color: value }); }
          },
          {
            get: () => config.accent_color || defaultConfig.accent_color,
            set: (value) => { config.accent_color = value; window.elementSdk.setConfig({ accent_color: value }); }
          }
        ],
        borderables: [],
        fontEditable: {
          get: () => config.font_family || defaultConfig.font_family,
          set: (value) => { config.font_family = value; window.elementSdk.setConfig({ font_family: value }); }
        },
        fontSizeable: {
          get: () => config.font_size || defaultConfig.font_size,
          set: (value) => { config.font_size = value; window.elementSdk.setConfig({ font_size: value }); }
        }
      };
    }

    function mapToEditPanelValues(config) {
      return new Map([
        ['full_name', config.full_name || defaultConfig.full_name],
        ['job_title', config.job_title || defaultConfig.job_title],
        ['email', config.email || defaultConfig.email],
        ['phone', config.phone || defaultConfig.phone],
        ['location', config.location || defaultConfig.location],
      ]);
    }

    function initPrintButton() {
      const btn = document.getElementById('print-button');
      if (!btn) return;
      // Prefer JS handler (handles mobile fallbacks) over inline onclick
      btn.removeAttribute('onclick');
      btn.addEventListener('click', async (event) => {
        event.preventDefault();
        event.stopPropagation();

        const canPrint = typeof window.print === 'function';
        if (canPrint) {
          window.print();
          return;
        }

        // Fallback: offer share sheet if available (some mobile browsers)
        if (navigator.share) {
          try {
            await navigator.share({
              title: document.title || 'CV',
              text: 'Gem eller print CV',
              url: window.location.href
            });
            return;
          } catch (err) {
            // Ignore share cancellation and continue to alert
          }
        }

        alert('På mobilen: Brug browserens del/print-funktion for at gemme som PDF.');
      });
    }

    if (window.elementSdk) {
      window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities,
        mapToEditPanelValues
      });
    } else {
      onConfigChange(defaultConfig);
    }

    // Start the typewriter effect
    typewriterEffect();
    // Initialize print/download handling (with mobile-friendly fallback)
    initPrintButton();


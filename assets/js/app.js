(function () {
  'use strict';

  const groups = window.PORTFOLIO_SKILLS || {};
  const accordions = document.getElementById('skillAccordions');
  const groupMeta = {
    frontend: { label: 'Frontend & UX/UI', icon: 'FE', th: 'หน้าจอ การโต้ตอบ เว็บไซต์ที่รองรับทุกขนาด และประสบการณ์ผู้ใช้', en: 'Interfaces, interaction, responsive design, and user experience' },
    backend: { label: 'Backend, API & AI', icon: 'BE', th: 'ระบบหลังบ้าน ตรรกะ API ความปลอดภัย และการนำ AI มาใช้งาน', en: 'Server-side logic, APIs, integrations, security, and AI features' },
    platform: { label: 'Data, DevOps & Domain', icon: 'OPS', th: 'ฐานข้อมูล การทดสอบ การนำระบบขึ้นใช้งาน โครงสร้างพื้นฐาน และโดเมน', en: 'Databases, testing, deployment, infrastructure, and domains' }
  };

  const currentLanguage = () => document.documentElement.lang === 'en' ? 'en' : 'th';

  function createSkillCard([icon, name, color, description, level]) {
    const card = document.createElement('article');
    card.className = 'skill-card';
    const top = document.createElement('div');
    top.className = 'skill-card-top';
    const badge = document.createElement('span');
    badge.className = 'skill-badge';
    badge.style.backgroundColor = color;
    badge.textContent = icon;
    badge.setAttribute('aria-hidden', 'true');
    const title = document.createElement('h4');
    title.textContent = name;
    top.append(badge, title);
    const levelRow = document.createElement('div');
    levelRow.className = 'skill-level-row';
    const levelLabel = document.createElement('span');
    levelLabel.className = 'skill-level';
    levelLabel.textContent = currentLanguage() === 'th' ? 'ระดับ' : 'Level';
    const levelValue = document.createElement('strong');
    levelValue.className = 'skill-level-value';
    const experience = currentLanguage() === 'th'
      ? (level >= 85 ? 'มั่นใจ' : level >= 70 ? 'ใช้งานได้ดี' : 'กำลังพัฒนา')
      : (level >= 85 ? 'Confident' : level >= 70 ? 'Working knowledge' : 'Learning');
    levelValue.textContent = `${experience} · ${level}%`;
    levelRow.append(levelLabel, levelValue);
    const progress = document.createElement('div');
    progress.className = 'skill-progress';
    progress.setAttribute('role', 'progressbar');
    progress.setAttribute('aria-label', `ระดับทักษะ ${name}`);
    progress.setAttribute('aria-valuemin', '0');
    progress.setAttribute('aria-valuemax', '100');
    progress.setAttribute('aria-valuenow', String(level));
    const progressFill = document.createElement('span');
    progressFill.className = 'skill-progress-fill';
    progressFill.dataset.level = String(level);
    progressFill.style.transform = `scaleX(${level / 100})`;
    progress.append(progressFill);
    const detail = document.createElement('p');
    detail.textContent = currentLanguage() === 'th'
      ? description
      : `Hands-on use of ${name} in web application and product development workflows.`;
    card.append(top, levelRow, progress, detail);
    return card;
  }

  function renderSkills() {
    if (!accordions) return;
    accordions.replaceChildren();
    Object.entries(groupMeta).forEach(([key, meta], index) => {
      const skills = groups[key] || [];
      const details = document.createElement('details');
      details.className = 'skill-group';
      details.open = index === 0;
      const summary = document.createElement('summary');
      summary.className = 'skill-summary';
      const icon = document.createElement('span');
      icon.className = 'skill-summary-icon';
      icon.textContent = meta.icon;
      icon.setAttribute('aria-hidden', 'true');
      const heading = document.createElement('div');
      const title = document.createElement('h3');
      title.textContent = meta.label;
      const description = document.createElement('span');
      description.className = 'sr-only';
      description.textContent = meta[currentLanguage()];
      heading.append(title, description);
      const count = document.createElement('span');
      count.className = 'skill-count';
      count.textContent = currentLanguage() === 'th' ? `${skills.length} รายการ` : `${skills.length} items`;
      const chevron = document.createElement('span');
      chevron.className = 'skill-chevron';
      chevron.textContent = '+';
      chevron.setAttribute('aria-hidden', 'true');
      const grid = document.createElement('div');
      grid.className = 'skill-grid';
      grid.append(...skills.map(createSkillCard));
      summary.append(icon, heading, count, chevron);
      details.append(summary, grid);
      accordions.append(details);
    });
  }

  renderSkills();
  window.addEventListener('portfolio:languagechange', renderSkills);

  const menuButton = document.getElementById('menuButton');
  const navigation = document.getElementById('siteNav');
  function closeMenu() {
    if (!menuButton || !navigation) return;
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  }

  menuButton?.addEventListener('click', () => {
    const willOpen = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(willOpen));
    navigation?.classList.toggle('is-open', willOpen);
    document.body.classList.toggle('menu-open', willOpen);
  });
  navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });

  if (typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined') return;
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  gsap.registerPlugin(ScrollTrigger);

  const header = document.getElementById('siteHeader');
  const headerTrigger = ScrollTrigger.create({
    start: 24,
    end: 'max',
    onUpdate: (self) => header?.classList.toggle('is-scrolled', self.scroll() > 24)
  });

  const media = gsap.matchMedia();
  media.add({
    reduceMotion: '(prefers-reduced-motion: reduce)',
    animateMotion: '(prefers-reduced-motion: no-preference)',
    finePointer: '(hover: hover) and (pointer: fine)'
  }, (context) => {
    const { reduceMotion, animateMotion, finePointer } = context.conditions;
    const roleOutput = document.getElementById('roleTypewriter');
    const roleSets = {
      th: ['นักพัฒนา Full Stack', 'นักพัฒนา AI', 'นักพัฒนา Frontend', 'นักออกแบบ UX/UI'],
      en: ['Full Stack Developer', 'AI Developer', 'Frontend Developer', 'UX/UI Designer']
    };
    if (reduceMotion) {
      const updateReducedMotionRole = () => {
        if (roleOutput) roleOutput.textContent = roleSets[currentLanguage()][0];
      };
      updateReducedMotionRole();
      window.addEventListener('portfolio:languagechange', updateReducedMotionRole);
      return () => window.removeEventListener('portfolio:languagechange', updateReducedMotionRole);
    }
    if (!animateMotion) return;

    const ambientTimeline = gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: 'sine.inOut' } });
    ambientTimeline
      .to('.wallpaper-orb-a', { xPercent: 18, yPercent: 12, rotation: 18, duration: 16 }, 0)
      .to('.wallpaper-orb-b', { xPercent: -14, yPercent: -10, rotation: -14, duration: 20 }, 0)
      .to('.wallpaper-orb-c', { xPercent: 10, yPercent: -12, scale: 1.08, duration: 18 }, 0)
      .to('.wallpaper-ribbon', { xPercent: -8, yPercent: 12, rotation: -12, duration: 22 }, 0)
      .to('.tag-code', { y: -9, rotation: 3, duration: 2.8 }, 0)
      .to('.tag-ai', { y: 8, rotation: -4, duration: 3.3 }, 0)
      .to('.tag-ux', { y: -7, x: 4, rotation: 4, duration: 3.7 }, 0);

    const wallpaperParallax = gsap.to('.wallpaper-grid', {
      yPercent: 10,
      rotation: -1,
      ease: 'none',
      scrollTrigger: { trigger: document.documentElement, start: 'top top', end: 'bottom bottom', scrub: 1 }
    });

    const heroItems = gsap.utils.toArray('.hero [data-reveal]');
    gsap.timeline({ defaults: { ease: 'power3.out' } })
      .fromTo(heroItems, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.65, stagger: 0.09, clearProps: 'transform,opacity,visibility' });

    const revealItems = gsap.utils.toArray('.section [data-reveal], .contact [data-reveal]');
    gsap.set(revealItems, { autoAlpha: 0, y: 28 });
    const revealTriggers = ScrollTrigger.batch(revealItems, {
      start: 'top 88%',
      once: true,
      interval: 0.08,
      batchMax: 4,
      onEnter: (batch) => gsap.to(batch, {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out',
        overwrite: 'auto',
        clearProps: 'transform,opacity,visibility'
      })
    });

    const certificateCards = gsap.utils.toArray('.certificate-card');
    const certificateTimeline = gsap.timeline({
      scrollTrigger: { trigger: '.certificate-grid', start: 'top 82%', once: true },
      defaults: { ease: 'power3.out' }
    });
    certificateTimeline.fromTo(certificateCards,
      { autoAlpha: 0, y: 52, scale: 0.96 },
      { autoAlpha: 1, y: 0, scale: 1, duration: 0.72, stagger: 0.1 }
    );

    const panel = document.querySelector('.hero-panel');
    const pointerCleanups = [];
    if (finePointer && panel) {
      gsap.set(panel, { transformPerspective: 1000, transformOrigin: 'center' });
      const rotateX = gsap.quickTo(panel, 'rotationX', { duration: 0.45, ease: 'power3.out' });
      const rotateY = gsap.quickTo(panel, 'rotationY', { duration: 0.45, ease: 'power3.out' });
      let bounds;
      const readBounds = () => { bounds = panel.getBoundingClientRect(); };
      const tiltPanel = (event) => {
        if (!bounds) readBounds();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        rotateX(y * -5);
        rotateY(x * 6);
      };
      const resetPanel = () => { rotateX(0); rotateY(0); bounds = undefined; };
      panel.addEventListener('pointerenter', readBounds);
      panel.addEventListener('pointermove', tiltPanel, { passive: true });
      panel.addEventListener('pointerleave', resetPanel);
      pointerCleanups.push(() => {
        panel.removeEventListener('pointerenter', readBounds);
        panel.removeEventListener('pointermove', tiltPanel);
        panel.removeEventListener('pointerleave', resetPanel);
      });
    }

    let roleTimeline;
    const buildRoleTimeline = () => {
      roleTimeline?.kill();
      roleTimeline = gsap.timeline({ repeat: -1 });
      roleSets[currentLanguage()].forEach((role) => {
        const cursor = { value: 0 };
        roleTimeline
          .call(() => { cursor.value = 0; if (roleOutput) roleOutput.textContent = ''; })
          .to(cursor, {
            value: role.length,
            duration: Math.max(0.75, role.length * 0.05),
            ease: 'none',
            snap: { value: 1 },
            onUpdate: () => { if (roleOutput) roleOutput.textContent = role.slice(0, cursor.value); }
          })
          .to({}, { duration: 1.2 })
          .to(cursor, {
            value: 0,
            duration: Math.max(0.4, role.length * 0.025),
            ease: 'none',
            snap: { value: 1 },
            onUpdate: () => { if (roleOutput) roleOutput.textContent = role.slice(0, cursor.value); }
          });
      });
    };
    buildRoleTimeline();
    window.addEventListener('portfolio:languagechange', buildRoleTimeline);

    const toggleCleanups = [];
    document.querySelectorAll('.skill-group').forEach((details) => {
      const onToggle = () => {
        if (!details.open) return;
        const cards = details.querySelectorAll('.skill-card');
        const fills = details.querySelectorAll('.skill-progress-fill');
        gsap.fromTo(cards,
          { autoAlpha: 0, y: 10 },
          { autoAlpha: 1, y: 0, duration: 0.32, stagger: 0.025, ease: 'power2.out', clearProps: 'transform,opacity,visibility' }
        );
        gsap.fromTo(fills,
          { scaleX: 0 },
          { scaleX: (index, fill) => Number(fill.dataset.level) / 100, duration: 0.7, stagger: 0.025, ease: 'power3.out', overwrite: 'auto' }
        );
      };
      details.addEventListener('toggle', onToggle);
      toggleCleanups.push(() => details.removeEventListener('toggle', onToggle));
    });

    document.querySelectorAll('[data-project-folder]').forEach((details) => {
      const onToggle = () => {
        if (!details.open) {
          ScrollTrigger.refresh();
          return;
        }
        const items = details.querySelectorAll('[data-folder-item]');
        gsap.fromTo(items,
          { autoAlpha: 0, y: 24, scale: 0.99 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.55,
            stagger: 0.055,
            ease: 'power3.out',
            overwrite: 'auto',
            clearProps: 'transform,opacity,visibility',
            onComplete: () => ScrollTrigger.refresh()
          }
        );
        details.querySelectorAll('img').forEach((image) => {
          if (!image.complete) image.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
        });
      };
      details.addEventListener('toggle', onToggle);
      toggleCleanups.push(() => details.removeEventListener('toggle', onToggle));
    });

    return () => {
      ambientTimeline.kill();
      wallpaperParallax.kill();
      certificateTimeline.kill();
      roleTimeline?.kill();
      window.removeEventListener('portfolio:languagechange', buildRoleTimeline);
      revealTriggers.forEach((trigger) => trigger.kill());
      toggleCleanups.forEach((cleanup) => cleanup());
      pointerCleanups.forEach((cleanup) => cleanup());
    };
  });

  window.addEventListener('pagehide', () => {
    closeMenu();
    headerTrigger.kill();
    media.revert();
  }, { once: true });
})();

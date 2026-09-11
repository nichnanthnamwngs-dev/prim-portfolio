(function () {
  'use strict';

  const copy = {
    th: {
      brandName: 'พริ้ม ณิชนันท์', navAbout: 'เกี่ยวกับฉัน', navEducation: 'การศึกษา', navSkills: 'ทักษะ',
      navCertificates: 'ใบรับรอง', navProjects: 'ผลงาน', navContact: 'ติดต่อ',
      heroEyebrow: 'นักศึกษาวิศวกรรมคอมพิวเตอร์ · พร้อมฝึกงาน', heroFirstName: 'พริ้ม', heroLastName: 'ณิชนันท์.',
      rolePrefix: 'สนใจทำงานด้าน',
      heroIntro: 'พัฒนาเว็บและผลิตภัณฑ์ดิจิทัลตั้งแต่การออกแบบหน้าจอ ไปจนถึงระบบหลังบ้านและ AI โดยให้ความสำคัญกับความเข้าใจง่ายและการใช้งานจริง',
      viewProjects: 'ดูผลงาน', downloadResume: 'ดาวน์โหลดเรซูเม่', internContact: 'ติดต่อเรื่องฝึกงาน', available: 'พร้อมรับโอกาสฝึกงาน',
      aboutIndex: '01 / เกี่ยวกับฉัน', aboutKicker: 'คิดแบบนักพัฒนา · ออกแบบโดยเข้าใจผู้ใช้',
      aboutLead: 'สวัสดีค่ะ ชื่อพริ้ม—ณิชนันท์ นามวงศ์ เป็นนักศึกษาวิศวกรรมคอมพิวเตอร์ที่สนใจทั้งการออกแบบและพัฒนาผลิตภัณฑ์ดิจิทัล',
      aboutCopy: 'พริ้มชอบนำ UX/UI, Frontend, Backend และ AI มาทำงานร่วมกัน สนุกกับการเรียนรู้เทคโนโลยีใหม่และแก้ปัญหาอย่างเป็นขั้นตอน เป้าหมายคือสร้างงานที่ใช้งานได้จริงและเข้าใจง่าย ตอนนี้กำลังมองหาโอกาสฝึกงาน เพื่อเรียนรู้จากทีมมืออาชีพและพัฒนาทักษะผ่านโปรเจกต์จริง',
      nicknameLabel: 'ชื่อเล่น', nicknameValue: 'พริ้ม', birthdayLabel: 'วันเกิด', birthdayValue: '9 พฤษภาคม 2003', ageLabel: 'อายุ', ageValue: '23 ปี', interestsLabel: 'สิ่งที่สนใจ',
      galleryNote: 'เรียนรู้ทั้งงานเขียนโค้ด AI<br>และการออกแบบที่เข้าใจผู้ใช้', educationIndex: '02 / การศึกษา', educationTitle: 'ประวัติการศึกษา',
      skillsIndex: '03 / ทักษะ', skillsTitle: 'ทักษะที่ใช้พัฒนา<br>งานตั้งแต่ต้นจนจบ',
      skillsIntro: 'รวมทักษะด้านการออกแบบหน้าจอ การพัฒนาเว็บ ระบบหลังบ้าน AI ฐานข้อมูล และการนำระบบขึ้นใช้งาน โดยแสดงระดับความถนัดตามประสบการณ์ปัจจุบัน',
      skillsLegend: '43 เทคโนโลยีและแนวทางการทำงาน · แบ่งตามประสบการณ์'
    },
    en: {
      brandName: 'Prim Nichanan', navAbout: 'About', navEducation: 'Education', navSkills: 'Skills',
      navCertificates: 'Certificates', navProjects: 'Projects', navContact: 'Contact',
      heroEyebrow: 'Computer Engineering Student · Open for Internship', heroFirstName: 'Nichanan', heroLastName: 'Namwong.',
      rolePrefix: 'I am exploring',
      heroIntro: 'I develop digital products from interface design to backend systems and AI, with a focus on clarity, usability, and real-world value.',
      viewProjects: 'View projects', downloadResume: 'Download resume', internContact: 'Internship contact', available: 'Available for internship',
      aboutIndex: '01 / About', aboutKicker: 'Developer mindset · Human-centered design',
      aboutLead: 'Hi, I’m Prim—Nichanan Namwong, a Computer Engineering student interested in both designing and developing complete digital products.',
      aboutCopy: 'I enjoy bringing UX/UI, frontend, backend, and AI together. I learn new technologies, solve problems step by step, and turn ideas into practical, easy-to-use products. I am currently seeking an internship where I can learn from a professional team and grow through real projects.',
      nicknameLabel: 'Nickname', nicknameValue: 'Prim', birthdayLabel: 'Birthday', birthdayValue: '9 May 2003', ageLabel: 'Age', ageValue: '23', interestsLabel: 'Interests',
      galleryNote: 'Learning across code, AI<br>and human-centered design.', educationIndex: '02 / Education', educationTitle: 'Education',
      skillsIndex: '03 / Skills', skillsTitle: 'Tools for building<br>from idea to launch',
      skillsIntro: 'My toolkit covers interface design, frontend and backend development, AI, databases, and deployment. Levels reflect my current hands-on experience.',
      skillsLegend: '43 technologies & practices · grouped by experience'
    }
  };

  const phrasePairs = [
    ['04 / Certificates', '04 / ใบรับรอง'], ['Certificates &', 'ใบรับรองและ'], ['achievements', 'ความสำเร็จ'],
    ['ใบรับรองด้าน IoT, UX/UI และ Frontend ที่สะท้อนการเรียนรู้ทั้งการออกแบบประสบการณ์ผู้ใช้และการพัฒนาระบบ', 'These certificates reflect my learning across IoT, UX/UI, frontend development, and digital systems.'],
    ['3 certificates · click to view full size', 'ใบรับรอง 3 รายการ · กดเพื่อดูภาพขนาดเต็ม'],
    ['05 / University Projects', '05 / ผลงานมหาวิทยาลัย'], ['Academic', 'ผลงาน'], ['work', 'จากมหาวิทยาลัย'],
    ['แฟ้มรวบรวมผลงานจากมหาวิทยาลัย กดที่แต่ละโปรเจกต์เพื่อดูโจทย์ กระบวนการ เทคโนโลยี และภาพการทำงานจริง', 'A collection of university projects. Open each folder to explore the problem, process, technologies, and working examples.'],
    ['Open folder', 'เปิดดูรายละเอียด'], ['Close folder', 'ปิดรายละเอียด'], ['Project Overview', 'ภาพรวมโปรเจกต์'],
    ['Problem', 'โจทย์ที่ต้องแก้'], ['Process & Solution', 'ขั้นตอนและวิธีแก้'], ['Architecture & Technology', 'โครงสร้างและเทคโนโลยี'],
    ['My Contribution', 'สิ่งที่พริ้มรับผิดชอบ'], ['Key Capabilities', 'ความสามารถหลัก'], ['Challenges', 'ความท้าทาย'], ['Outcome', 'ผลลัพธ์'],
    ['Target Personas', 'กลุ่มผู้ใช้งาน'], ['Design Focus', 'แนวทางการออกแบบ'], ['Design Advantages', 'จุดเด่นของแนวคิด'], ['Risks & Limitations', 'ข้อจำกัดที่ต้องคำนึงถึง'],
    ['06 / Contact', '06 / ติดต่อ'], ['Let’s create', 'มาสร้าง'], ['something useful.', 'สิ่งที่มีประโยชน์ไปด้วยกัน'],
    ['พร้อมเรียนรู้ ลงมือทำ และเติบโตไปกับทีม กำลังมองหาโอกาสฝึกงานด้าน Full Stack, AI, Frontend หรือ UX/UI', 'Ready to learn, contribute, and grow with a team. I am seeking an internship in Full Stack, AI, Frontend, or UX/UI.'],
    ['Open for internship · Bangkok', 'พร้อมฝึกงาน · กรุงเทพฯ'],
    ['Bachelor’s Degree · Current', 'ปริญญาตรี · กำลังศึกษา'], ['Secondary Education', 'มัธยมศึกษา'],
    ['สาขาวิศวกรรมคอมพิวเตอร์', 'Computer Engineering'], ['แผนการเรียนวิทยาศาสตร์–คณิตศาสตร์', 'Science–Mathematics Program'],
    ['ระบบอัตโนมัติที่เปลี่ยน LINE ให้เป็นผู้ช่วยการเงิน ผู้ใช้พิมพ์รายการหรือส่งสลิป จากนั้น AI จะอ่าน จัดหมวด และบันทึกลง Google Sheets พร้อมเรียกดูสรุปรายเดือนหรือรายปีได้ทันที', 'An automated finance assistant in LINE. Users can type an expense or send a receipt; AI extracts and categorizes the data, saves it to Google Sheets, and returns monthly or yearly summaries.'],
    ['ลดขั้นตอนการจดรายจ่ายและการพิมพ์ข้อมูลจากสลิปซ้ำ', 'Reduce manual expense entry and repeated receipt transcription'],
    ['การบันทึกด้วยตนเองใช้หลายขั้นตอนและทำให้ข้อมูลกระจัดกระจาย จึงออกแบบให้ LINE เป็นจุดเริ่มต้นเดียวสำหรับทั้งข้อความและรูปภาพ', 'Manual entry takes too many steps and scatters information, so LINE became the single entry point for both text and receipt images.'],
    ['รับข้อมูลผ่าน LINE', 'Receive data through LINE'], ['รองรับข้อความภาษาพูดและภาพสลิปในช่องทางที่ผู้ใช้คุ้นเคย', 'Accept conversational text and receipt images through a familiar channel.'],
    ['ส่งเข้า Make workflow', 'Route through Make'], ['Webhook แยกเส้นทางตามชนิดข้อมูลและควบคุมลำดับการทำงาน', 'A webhook routes each input type and controls the workflow sequence.'],
    ['วิเคราะห์ด้วย Gemini', 'Analyze with Gemini'], ['อ่านข้อความ ดึงยอด ร้านค้า วันที่ และจัดหมวดค่าใช้จ่ายเป็นข้อมูลมาตรฐาน', 'Extract the amount, merchant, and date, then normalize the expense category.'],
    ['จัดเก็บและตอบกลับ', 'Save and respond'], ['บันทึกข้อมูลลง Google Sheets เก็บไฟล์ใน Google Drive และส่งผลยืนยันกลับ LINE', 'Save structured data to Google Sheets, store files in Google Drive, and send confirmation through LINE.'],
    ['ออกแบบโครงสร้าง automation และเส้นทาง Webhook, เชื่อม LINE Messaging API กับ Make, กำหนดรูปแบบข้อมูลที่ Gemini ต้องส่งกลับ และจัดระเบียบข้อมูลสำหรับบันทึกลง Google Sheets รวมถึงออกแบบข้อความยืนยันและกรณีแจ้งเตือนเมื่อข้อมูลจากสลิปไม่ชัดเจน', 'Designed the automation and webhook routes, connected LINE Messaging API with Make, defined Gemini’s response structure, prepared data for Google Sheets, and designed confirmation and low-confidence warning messages.'],
    ['บันทึกรายการด้วยภาษาพูด', 'Record expenses in natural language'], ['อ่านยอด ร้านค้า และวันที่จากสลิป', 'Extract amount, merchant, and date from receipts'],
    ['บันทึกลง Google Sheets อัตโนมัติ', 'Save automatically to Google Sheets'], ['สรุปรายเดือนและรายปี', 'Generate monthly and yearly summaries'],
    ['เรียงหมวดค่าใช้จ่ายจากมากไปน้อย', 'Rank expense categories from highest to lowest'], ['รองรับภาษาไทยและอังกฤษ', 'Support Thai and English'],
    ['ทำให้สลิปหลายรูปแบบกลายเป็นข้อมูลที่สม่ำเสมอ', 'Normalize data from different receipt formats'], ['ตีความภาษาพูดทั้งไทยและอังกฤษ', 'Interpret conversational Thai and English'],
    ['ออกแบบ no-code workflow ให้ตรวจสอบและดูแลต่อได้ง่าย', 'Keep the no-code workflow easy to inspect and maintain'],
    ['ได้ระบบรายจ่ายแบบสนทนาที่รับทั้งข้อความและสลิป แปลงข้อมูลให้อยู่ในรูปแบบเดียวกัน และจัดเก็บเป็นโครงสร้างสำหรับค้นหาและสรุปผลภายหลัง', 'Delivered a conversational expense system that accepts text and receipts, normalizes the data, and stores it in a searchable structure for later summaries.'],
    ['แนวคิดแอปผู้ช่วยออกกำลังกายส่วนบุคคลสำหรับผู้ที่ขาดเวลา คำแนะนำ หรือแรงจูงใจ โดยออกแบบประสบการณ์ให้เริ่มต้นง่าย ปรับตามข้อมูลสุขภาพและเป้าหมาย และช่วยให้ผู้ใช้ติดตามความก้าวหน้าได้จากทุกที่', 'A personal fitness coach concept for people who lack time, guidance, or motivation. The experience is easy to start, adapts to health data and goals, and supports progress tracking anywhere.'],
    ['อยากเริ่มออกกำลังกาย แต่ไม่รู้ว่าอะไรเหมาะและปลอดภัยกับตัวเอง', 'Users want to exercise but do not know what is suitable or safe'],
    ['ผู้ใช้จำนวนมากไม่มีเวลาไปยิม ไม่แน่ใจว่าทำท่าถูกหรือไม่ และเลิกกลางทางเมื่อไม่เห็นผล จึงต้องการเส้นทางที่ชัดเจนและปรับให้เข้ากับชีวิตจริง', 'Many users lack time for the gym, feel unsure about form, and stop when progress is slow. They need a clear plan that fits real life.'],
    ['คนเวลาน้อย', 'Busy people'], ['ต้องการโปรแกรมสั้น 10–20 นาทีที่ทำได้ที่บ้าน', 'Need short 10–20 minute workouts they can do at home.'],
    ['ผู้เริ่มต้น', 'Beginners'], ['ไม่รู้ว่าจะเริ่มจากไหนและกังวลเรื่องท่าทาง', 'Need a clear starting point and guidance on exercise form.'],
    ['ผู้ดูแลสุขภาพ', 'Health-focused users'], ['ต้องการลดน้ำหนักและติดตามกิจกรรมอย่างต่อเนื่อง', 'Want to manage weight and track activity consistently.'],
    ['ผู้มีข้อจำกัดสุขภาพ', 'Users with health constraints'], ['ต้องการคำแนะนำที่คำนึงถึงอายุและข้อมูลสุขภาพ', 'Need recommendations that consider age and health information.'],
    ['เข้าใจสิ่งที่ผู้ใช้พูด คิด ทำ รู้สึก เห็น และได้ยิน', 'Understanding what users say, think, do, feel, see, and hear'],
    ['ศึกษาปัญหาและความต้องการของกลุ่มเป้าหมาย สรุป Persona และ Empathy Map วาง user flow ตั้งแต่ onboarding ถึง dashboard แล้วออกแบบ wireframe, visual interface และ interactive prototype ใน Figma', 'Researched user needs, created personas and an empathy map, planned the flow from onboarding to dashboard, and designed wireframes, visual interfaces, and an interactive Figma prototype.'],
    ['ปรับโปรแกรมตามอายุ สุขภาพ เวลา และเป้าหมาย', 'Adapt workouts to age, health, time, and goals'], ['ออกกำลังกายที่บ้านได้โดยไม่ต้องใช้อุปกรณ์มาก', 'Support home workouts with minimal equipment'],
    ['ติดตามชีพจร น้ำ การนอน และแคลอรีในมุมมองเดียว', 'Track heart rate, water, sleep, and calories in one view'], ['รองรับตั้งแต่มือใหม่จนถึงผู้ใช้ที่มีประสบการณ์', 'Support beginners through experienced users'],
    ['คำแนะนำของ AI อาจคลาดเคลื่อนและไม่แทนผู้เชี่ยวชาญสุขภาพ', 'AI guidance may be inaccurate and cannot replace a health professional'], ['การตรวจท่าทางยังต้องพึ่งข้อมูลหรือเซนเซอร์ที่เหมาะสม', 'Form detection requires suitable data or sensors'],
    ['ผู้ใช้ที่ไม่คุ้นเทคโนโลยีอาจต้องการขั้นตอนเริ่มต้นที่ง่ายมาก', 'Less technical users may need a much simpler onboarding flow'], ['โภชนาการและฟีเจอร์พรีเมียมต้องออกแบบเพิ่มเติมในอนาคต', 'Nutrition and premium features require future design work'],
    ['ได้แนวคิดและ interactive prototype ที่เชื่อมการตั้งค่าข้อมูลสุขภาพ การเลือกเป้าหมาย ตารางฝึก และ dashboard ติดตามผลไว้ในประสบการณ์เดียว พร้อมกรอบความเสี่ยงที่ต้องตรวจสอบก่อนพัฒนา AI จริง', 'Created an interactive prototype combining health setup, goal selection, workout planning, and progress tracking, with safety risks identified before real AI development.']
  ];

  const originals = new WeakMap();
  function translateLooseText(language) {
    const lookup = new Map();
    phrasePairs.forEach(([first, second]) => {
      const firstIsThai = /[ก-๙]/.test(first);
      const th = firstIsThai ? first : second;
      const en = firstIsThai ? second : first;
      lookup.set(language === 'th' ? en : th, language === 'th' ? th : en);
    });
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (node.parentElement?.closest('script, style, [data-i18n]')) continue;
      const value = node.nodeValue.trim();
      if (!value) continue;
      if (!originals.has(node)) originals.set(node, value);
      const source = originals.get(node);
      const translated = lookup.get(source) || lookup.get(value);
      if (translated) node.nodeValue = node.nodeValue.replace(value, translated);
    }
  }

  function applyLanguage(language) {
    const lang = language === 'en' ? 'en' : 'th';
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const value = copy[lang][element.dataset.i18n];
      if (value) element.innerHTML = value;
    });
    translateLooseText(lang);
    const button = document.getElementById('languageToggle');
    if (button) {
      button.querySelector('.language-current').textContent = lang.toUpperCase();
      button.querySelector('.language-next').textContent = lang === 'th' ? 'EN' : 'TH';
      button.setAttribute('aria-pressed', String(lang === 'en'));
      button.setAttribute('aria-label', lang === 'th' ? 'Switch to English' : 'เปลี่ยนเป็นภาษาไทย');
    }
    localStorage.setItem('portfolio-language', lang);
    window.PORTFOLIO_LANGUAGE = lang;
    window.dispatchEvent(new CustomEvent('portfolio:languagechange', { detail: { language: lang } }));
  }

  window.PORTFOLIO_I18N = { applyLanguage, copy };
  document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('portfolio-language');
    applyLanguage(saved === 'en' ? 'en' : 'th');
    document.getElementById('languageToggle')?.addEventListener('click', () => {
      applyLanguage(document.documentElement.lang === 'th' ? 'en' : 'th');
    });
  });
})();

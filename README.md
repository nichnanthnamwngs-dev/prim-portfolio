# Prim Nichanan Portfolio

โครงสร้างเว็บไซต์ Portfolio สำหรับนักศึกษาสมัคร Internship แสดงผลงานมหาวิทยาลัยและทักษะด้าน Full Stack, AI, Frontend และ UX/UI

ตำแหน่งบนหน้าแรกแสดงแบบ typewriter animation ด้วย GSAP

## เริ่มใช้งาน

```bash
npm run dev
```

เปิด <http://127.0.0.1:4173>

## โครงสร้างโปรเจกต์

- `index.html` — โครงสร้างและเนื้อหาหลักของหน้า
- `assets/css/styles.css` — visual system และ responsive layout
- `assets/js/skills-data.js` — รายการ Full Stack skills ทั้งหมด
- `assets/js/app.js` — การแสดง Skills, เมนู และ GSAP animation
- `assets/vendor/gsap/` — GSAP และ ScrollTrigger
- `scripts/dev-server.mjs` — local development server

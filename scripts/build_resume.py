from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "assets" / "resume" / "nichanan-namwong-resume.pdf"
OUTPUT.parent.mkdir(parents=True, exist_ok=True)

font_candidates = [
    Path("/System/Library/Fonts/Supplemental/Arial Unicode.ttf"),
    Path("/System/Library/Fonts/Thonburi.ttc"),
    Path("/Library/Fonts/Arial Unicode.ttf"),
]
font_path = next((path for path in font_candidates if path.exists()), None)
font_name = "Helvetica"
if font_path:
    font_name = "PortfolioSans"
    pdfmetrics.registerFont(TTFont(font_name, str(font_path)))

INK = HexColor("#38262F")
SOFT = HexColor("#705563")
PINK = HexColor("#FFB0C9")
BLUSH = HexColor("#FFE0EA")
PAPER = HexColor("#FFF9FB")

styles = getSampleStyleSheet()
base = ParagraphStyle("base", parent=styles["BodyText"], fontName=font_name, fontSize=8.8, leading=13, textColor=INK)
label = ParagraphStyle("label", parent=base, fontSize=7.2, leading=9, textColor=SOFT, spaceAfter=3)
heading = ParagraphStyle("heading", parent=base, fontSize=12.5, leading=15, textColor=INK, spaceBefore=4, spaceAfter=7)
name = ParagraphStyle("name", parent=base, fontSize=25, leading=27, textColor=INK, alignment=TA_LEFT)
role = ParagraphStyle("role", parent=base, fontSize=9, leading=12, textColor=SOFT)
small = ParagraphStyle("small", parent=base, fontSize=7.7, leading=11, textColor=SOFT)


def section(title, body):
    return [Paragraph(title.upper(), label), Paragraph(body, base), Spacer(1, 4 * mm)]


doc = SimpleDocTemplate(
    str(OUTPUT), pagesize=A4,
    rightMargin=15 * mm, leftMargin=15 * mm,
    topMargin=13 * mm, bottomMargin=12 * mm,
    title="Nichanan Namwong - Student Developer Resume",
    author="Nichanan Namwong",
)

story = []
header_left = [Paragraph("Nichanan<br/>Namwong", name), Spacer(1, 2 * mm), Paragraph("COMPUTER ENGINEERING STUDENT", role)]
header_right = [
    Paragraph("Prim · Bangkok, Thailand", base),
    Paragraph("nichnanthnamwngs@gmail.com", small),
    Paragraph("063-981-1982 · LINE: Primprao123", small),
    Paragraph("Instagram: @pxxm9ncn", small),
]
header = Table([[header_left, header_right]], colWidths=[112 * mm, 68 * mm])
header.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (-1, -1), BLUSH),
    ("BOX", (0, 0), (-1, -1), 0.7, PINK),
    ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
    ("LEFTPADDING", (0, 0), (-1, -1), 9),
    ("RIGHTPADDING", (0, 0), (-1, -1), 9),
    ("TOPPADDING", (0, 0), (-1, -1), 9),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 9),
]))
story.extend([header, Spacer(1, 7 * mm)])

summary = Paragraph(
    "นักศึกษาวิศวกรรมคอมพิวเตอร์ที่สนใจการพัฒนาผลิตภัณฑ์ดิจิทัลแบบครบวงจร เชื่อมโยง UX/UI, Frontend, Backend และ AI เพื่อเปลี่ยนแนวคิดให้เป็นระบบที่ใช้งานได้จริง กำลังมองหาโอกาสฝึกงานเพื่อเรียนรู้จากโจทย์จริงและเติบโตไปกับทีมมืออาชีพ",
    base,
)
story.extend([Paragraph("PROFILE", heading), summary, Spacer(1, 5 * mm)])

left = []
left.extend(section("Education", "<b>มหาวิทยาลัยศรีปทุม</b><br/>สาขาวิศวกรรมคอมพิวเตอร์ · กำลังศึกษา<br/><br/><b>โรงเรียนดงเจนวิทยาคม</b><br/>แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์"))
left.extend(section("Core skills", "<b>Frontend & UX/UI</b><br/>HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS, GSAP, Figma, Accessibility<br/><br/><b>Backend, API & AI</b><br/>Node.js, Express, Python, FastAPI, REST API, AI API Integration, LLM/RAG, Postman<br/><br/><b>Data & delivery</b><br/>SQL, PostgreSQL/MySQL, MongoDB, Git/GitHub, Testing, Docker, Linux, CI/CD, Cloud Deployment, Domain/DNS"))
left.extend(section("Languages", "Thai · English"))

right = []
right.extend(section("Project 01 · LINE AI", "<b>ผู้ช่วยบันทึกรายรับรายจ่าย</b><br/>Role: Automation Engineer & AI Integration<br/><br/>ออกแบบ workflow รับข้อความและสลิปผ่าน LINE ส่งให้ Gemini อ่านและจัดหมวด ก่อนบันทึกข้อมูลลง Google Sheets พร้อมรองรับสรุปรายเดือนและรายปี<br/><br/><b>Make · LINE Messaging API · Gemini · Google Sheets · Google Drive · Webhook</b>"))
right.extend(section("Project 02 · Fitness Coach", "<b>แอปแนะนำการออกกำลังกายตามสุขภาพ</b><br/>Role: UX/UI Designer & Product Researcher<br/><br/>ศึกษากลุ่มผู้ใช้ สร้าง Persona และ Empathy Map ออกแบบ user flow และ interactive prototype สำหรับการตั้งค่าข้อมูลสุขภาพ เลือกเป้าหมาย และติดตามผล<br/><br/><b>Figma · Persona · Empathy Map · Prototype</b>"))
right.extend(section("Certificates", "HCIA-IoT V3.0 Course · Huawei ICT Academy<br/>Google UX Design Professional Certificate<br/>Meta Front-End Developer Professional Certificate"))

columns = Table([[left, right]], colWidths=[83 * mm, 92 * mm], hAlign="LEFT")
columns.setStyle(TableStyle([
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("LEFTPADDING", (0, 0), (0, 0), 0),
    ("RIGHTPADDING", (0, 0), (0, 0), 9),
    ("LEFTPADDING", (1, 0), (1, 0), 9),
    ("RIGHTPADDING", (1, 0), (1, 0), 0),
    ("LINEBEFORE", (1, 0), (1, 0), 0.7, PINK),
]))
story.append(columns)


def decorate(canvas, document):
    canvas.saveState()
    canvas.setFillColor(PAPER)
    canvas.rect(0, 0, A4[0], A4[1], stroke=0, fill=1)
    canvas.setFillColor(PINK)
    canvas.rect(0, A4[1] - 5 * mm, A4[0], 5 * mm, stroke=0, fill=1)
    canvas.setFont(font_name, 7)
    canvas.setFillColor(SOFT)
    canvas.drawString(15 * mm, 7 * mm, "Portfolio resume · 2026")
    canvas.drawRightString(A4[0] - 15 * mm, 7 * mm, "Nichanan Namwong")
    canvas.restoreState()


doc.build(story, onFirstPage=decorate, onLaterPages=decorate)
print(OUTPUT)

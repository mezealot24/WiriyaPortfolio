// Thai copy (default locale). Source: freelance-site/content/site-structure.md.
// Fields named *Html may contain <span class="nb"> (keeps a Thai word on one line) or <br class="br-md">;
// they are authored here, never user input, and rendered with set:html.
// Package details live in src/content/services/, the case study in src/content/work/.

export const th = {
  meta: {
    siteDescription:
      "Silicon Warin โดย Wiriya: solo developer ที่ทำเว็บ SEO เร็ว ต่อ LINE OA และสร้างระบบหลังบ้านให้ธุรกิจ SME ไทย",
    suffix: "Silicon Warin",
  },

  a11y: {
    skip: "ข้ามไปยังเนื้อหา",
    mainNav: "เมนูหลัก",
    mobileNav: "เมนูมือถือ",
    footerNav: "ลิงก์ท้ายหน้า",
    openMenu: "เปิดเมนู",
    closeMenu: "ปิดเมนู",
    theme: "สลับโหมดสว่าง/มืด",
    breadcrumb: "ตำแหน่งของหน้านี้",
    language: "ภาษา",
    homeLink: "Silicon Warin by Wiriya — หน้าแรก",
    to: "ไปยัง",
  },

  nav: {
    home: "หน้าแรก",
    services: "บริการ",
    work: "ผลงาน",
    about: "เกี่ยวกับ",
    insights: "Insights",
    contact: "ติดต่อ",
    audit: "Website Audit",
    privacy: "Privacy",
    lineOa: "LINE OA",
  },

  line: {
    talk: "คุยทาง LINE",
    addFriend: "เพิ่มเพื่อน LINE OA",
    askPackage: "ถามเรื่องแพ็กเกจนี้ทาง LINE",
    faster: "ทักเร็วกว่าทาง LINE",
    reassure: "ตอบภายใน 1 วันทำการ · ปรึกษาครั้งแรกฟรี",
    barHtml: "ตอบภายใน 1 วันทำการ<br>ปรึกษาครั้งแรกฟรี",
    booked: "ช่วงนี้คิวเต็ม · ทักไว้ก่อนได้ ผมจะตอบภายใน 1 วันทำการ",
    packageMessage: (name: string) => `สนใจแพ็กเกจ ${name}`,
  },

  common: {
    pending: "รออนุญาตจากลูกค้า",
    illustrative: "ภาพประกอบ ไม่ใช่กราฟจริง",
    periodPending: "ช่วงเวลา: รอยืนยัน",
    tbc: "รอยืนยัน",
    source: "แหล่งข้อมูล",
    readCase: "อ่านเคสเต็ม",
    copied: "คัดลอกแล้ว",
    copyFailed: "คัดลอกไม่ได้ — กดค้างเพื่อคัดลอก",
    from: "เริ่มต้น",
    baht: "บาท",
    priceNote: "ราคาเป็นช่วงเริ่มต้น ยังไม่รวม VAT (ถ้ามี) — ยืนยันราคาจริงหลังคุยโจทย์",
    sendForm: "ส่งข้อความผ่านฟอร์ม",
    caseEyebrow: "Case study",
  },

  footer: {
    about: "Solo developer studio โดย Wiriya — เว็บ SEO, LINE OA และระบบหลังบ้านสำหรับ SME ไทย",
    built: "Built with Astro on Cloudflare",
  },

  home: {
    title: "รับทำเว็บไซต์ SEO สำหรับธุรกิจ SME – Silicon Warin",
    description:
      "ผมช่วย SME ไทยทำเว็บที่ติด Google เร็ว พร้อม AEO/GEO และเชื่อม LINE OA ดูผลงานและแพ็กเกจราคาชัดเจน คุยฟรี",
    eyebrow: "Web · SEO · LINE OA · Backoffice",
    h1Html: 'เว็บที่ลูกค้าหาเจอบน Google — <br class="br-md">และ AI ก็ตอบชื่อธุรกิจคุณได้',
    subHtml:
      'ผมเป็น solo developer ที่ทำเว็บ SEO เร็ว ต่อ LINE OA และสร้างระบบหลังบ้านให้ธุรกิจ SME ไทย คุยตรงกับคนที่เขียนโค้ดเอง ไม่ผ่าน<span class="nb">เอเจนซี่</span>',
    seeWork: "ดูผลงานจริง",
    proofTitle: "ผลลัพธ์จากงานจริง",
    proofMove: "ย้ายจากเว็บที่โดนแฮ็ก ขึ้น edge",
    proofCaption: "ข้อมูลจาก Google Search Console ของเว็บดีลเลอร์รถยนต์ลูกค้าจริง",
    proofLink: "ดูที่มาของตัวเลข",
    problemsTitle: "ถ้าเป็นแบบนี้ เราคุยกันได้",
    problemsHtml: [
      "เว็บช้า โดนแฮ็ก หรือ WordPress อัปเดตแล้วพังซ้ำ ๆ",
      "มีเว็บแต่ไม่มีใครหาเจอ จ่ายค่าโฆษณาตลอดเพราะ organic ไม่มา",
      'ลูกค้าทักมาทาง LINE แต่<span class="nb">ข้อมูล</span><span class="nb">กระจาย</span> ตามงานไม่ได้',
      'ทีมยังใช้ Excel/กลุ่ม LINE <span class="nb">จัดการ</span><span class="nb">สต็อก</span> <span class="nb">ใบเสนอราคา</span> ลูกค้า',
    ],
    packagesTitle: "เลือกแพ็กเกจที่ตรงกับงาน — ราคาชัด ขอบเขตชัด",
    compareLink: "เปรียบเทียบแพ็กเกจ",
    processTitle: "วิธีทำงาน 4 ขั้น",
    whyTitle: "ทำไมเลือก Silicon Warin",
    why: [
      { title: "เร็วโดยโครงสร้าง", body: "static-first บน Cloudflare edge ไม่ต้องพึ่ง plugin" },
      { title: "SEO วัดผลได้", body: "ทำงานจากข้อมูล Search Console จริง" },
      { title: "รู้จักบริบทไทย", body: "LINE OA/LIFF, ภาษาไทย, ใบกำกับภาษี, ธุรกิจ SME" },
    ],
    auditTitle: "อยากรู้ก่อนว่าเว็บคุณมีปัญหาตรงไหน?",
    auditSub:
      "ส่ง URL มา ผมตรวจ SEO พื้นฐาน ความเร็ว และความพร้อมสำหรับ AI search แล้วส่งสรุป 1 หน้าให้ทาง LINE/อีเมล ฟรี ไม่ผูกมัด",
    auditList: [
      "SEO พื้นฐาน: title/meta, heading, sitemap, indexing",
      "ความเร็วและ Core Web Vitals บนมือถือ",
      "ความพร้อมสำหรับ AI search (AEO/GEO)",
    ],
    faqTitle: "คำถามที่เจอบ่อย",
    finalTitle: "เล่าโจทย์ให้ฟังสั้น ๆ ได้เลย",
    finalSub: "ไม่ต้องมี brief สวย ๆ แค่บอกว่าทำธุรกิจอะไร อยากให้เว็บช่วยเรื่องอะไร",
  },

  process: [
    { title: "คุยโจทย์ (ฟรี)", body: "เข้าใจธุรกิจ เป้าหมาย งบ" },
    { title: "เสนอขอบเขตและราคาตายตัว", body: "เขียนชัดว่าได้อะไร/ไม่ได้อะไร" },
    { title: "ลงมือทำ + อัปเดตทุกสัปดาห์", body: "เห็นของจริงบน staging ตลอด" },
    { title: "ส่งมอบและวัดผล", body: "ตั้ง Search Console/Analytics ให้ ดูผลร่วมกัน" },
  ],

  // Shared by Home (first five) and Services (all). Also emitted as FAQPage JSON-LD.
  faq: [
    {
      q: "ใช้เวลานานเท่าไร?",
      a: "เว็บทั่วไป 2–6 สัปดาห์ ระบบหลังบ้านขึ้นกับขอบเขต ผมแจ้งเป็นวันที่ชัดเจนก่อนเริ่ม",
    },
    {
      q: "ต้องเตรียม content เองไหม?",
      a: "ช่วยจัดโครงให้ และมี add-on เขียนเนื้อหา แต่ข้อมูลจริงของธุรกิจต้องมาจากคุณ",
    },
    { q: "ดูแลต่อหลังส่งงานไหม?", a: "มีช่วง support ตามแพ็กเกจ และ monthly care ถ้าต้องการ" },
    {
      q: "ย้ายจาก WordPress ได้ไหม อันดับจะตกไหม?",
      a: "ได้ ผมวาง redirect map และตรวจ Search Console ก่อน/หลังย้ายเพื่อลดความเสี่ยง",
    },
    {
      q: "การันตีอันดับ 1 ไหม?",
      a: "ไม่การันตี ไม่มีใครการันตีได้ แต่ผมทำสิ่งที่วัดและตรวจสอบได้ และรายงานตัวเลขจริงให้",
    },
    {
      // TODO(owner): confirm payment terms (site-structure.md §3.6 lists a 40–50% deposit as an assumption).
      q: "ชำระเงินอย่างไร?",
      a: "มัดจำก่อนเริ่มงาน ที่เหลือแบ่งตามงวดส่งมอบ รับโอนหรือ PromptPay พร้อมใบเสนอราคาและใบเสร็จ",
    },
  ],

  services: {
    title: "แพ็กเกจรับทำเว็บไซต์และระบบหลังบ้าน ราคาชัดเจน – Silicon Warin",
    description:
      "เว็บธุรกิจ SEO, AEO/GEO, LINE OA และระบบหลังบ้าน 3 แพ็กเกจ ขอบเขตและราคาเริ่มต้นชัดเจน เลือกให้ตรงงานคุณ",
    eyebrow: "Services",
    h1: "บริการและแพ็กเกจ",
    sub: "ราคาเริ่มต้นชัดเจน ขอบเขตเขียนเป็นลายลักษณ์อักษร ไม่มีค่าใช้จ่ายซ่อน ถ้างานคุณไม่ตรงแพ็กเกจ เราคุยปรับกันได้",
    toPackages: "ดูแพ็กเกจ",
    details: "ดูรายละเอียด",
    start: "เริ่มแพ็กเกจนี้",
    featuredFlag: "ตรงกับเคสหลัก",
    detailEyebrow: "Scope",
    detailTitle: "ขอบเขตของแต่ละแพ็กเกจ",
    fit: "เหมาะกับ",
    includes: "รวม",
    excludes: "ไม่รวม",
    compareEyebrow: "Compare",
    compareTitle: "เปรียบเทียบแพ็กเกจ",
    compareCaption: "ตารางเปรียบเทียบแพ็กเกจ Launch Site, Growth + AI Search และ Custom System",
    compareRows: [
      { label: "ระยะเวลา", values: ["2–3 สัปดาห์", "4–6 สัปดาห์", "ตามขอบเขต"] },
      { label: "จำนวนหน้า", values: ["5–7", "สูงสุด ~10 หน้าเนื้อหา + ย้ายเว็บ", "—"] },
      { label: "SEO พื้นฐาน", values: ["มี", "มี + เชิงลึก", "—"] },
      { label: "AEO/GEO (schema, llms.txt)", values: ["พื้นฐาน", "เต็ม", "—"] },
      { label: "ย้ายจากเว็บเดิม + 301", values: ["—", "มี", "—"] },
      { label: "LINE OA", values: ["ปุ่ม/ลิงก์", "เชื่อม + tracking", "LIFF/แจ้งเตือน"] },
      { label: "ระบบ login/หลังบ้าน", values: ["—", "—", "มี"] },
      { label: "Support หลังส่งงาน", values: ["14 วัน", "30 วัน", "30–60 วัน"] },
    ],
    comparePrice: "ราคาเริ่มต้น (บาท)",
    tableNote:
      "ทุกแพ็กเกจยังไม่รวม domain/hosting ที่ลูกค้าเป็นเจ้าของ (Cloudflare ฟรีหรือต้นทุนต่ำ) และยังไม่รวม VAT",
    addonsEyebrow: "Add-ons",
    addonsTitle: "งานเสริม",
    // TODO(owner): add-on prices are assumptions from site-structure.md §3.5; confirm before launch.
    addons: [
      { name: "บทความ SEO เพิ่ม", price: "ต่อชิ้น ~1,500–3,000 บาท" },
      { name: "หน้า landing page เพิ่ม", price: "~2,000–3,500 บาท" },
      { name: "Monthly care: อัปเดต, backup, ดู Search Console รายเดือน", price: "~3,000–8,000 บาท/เดือน" },
      { name: "เชื่อม Google Business Profile / Meta Pixel / GA4", price: "ถามราคาได้" },
      { name: "Training ทีมเพิ่ม (วิธีอัปเดตเนื้อหา)", price: "~1,500 บาท/ชม." },
    ],
    addonsAsk: "ถามเรื่องงานเสริมทาง LINE",
    unsureTitle: "ไม่แน่ใจว่าเริ่มตรงไหน?",
    unsureBody:
      "ส่งเว็บปัจจุบันมาให้ผมดูก่อน (Audit ฟรี) หรือบอกปัญหาที่เจอทาง LINE ผมจะแนะนำแพ็กเกจที่พอดี ไม่ดันแพ็กเกจแพงกว่าที่จำเป็น",
    auditCta: "ขอ Website Audit ฟรี",
    processTitle: "ขั้นตอนและระยะเวลา",
    processSub:
      "Launch Site 2–3 สัปดาห์ · Growth + AI Search 4–6 สัปดาห์ · Custom System ประเมินตามขอบเขต แบ่ง milestone ราย 2 สัปดาห์",
    faqTitle: "คำถามที่เจอบ่อย",
    finalTitle: "เลือกแพ็กเกจไม่ถูก หรืออยากปรับขอบเขต?",
    finalSub: "บอกโจทย์สั้น ๆ ผมจะบอกตรง ๆ ว่าแพ็กเกจไหนพอดี หรือไม่ต้องจ้างเลยก็ได้",
  },

  work: {
    title: "ผลงานรับทำเว็บไซต์และ SEO ที่วัดผลได้ – Silicon Warin",
    description:
      "ดูเคสจริง: ย้ายเว็บ WordPress ที่โดนแฮ็กขึ้น Cloudflare พร้อมตัวเลข clicks และ ranking จาก Search Console",
    eyebrow: "Work",
    h1: "ผลงานที่วัดผลได้",
    sub: "ผมไม่โชว์แค่หน้าตาเว็บ — โชว์ว่าก่อนหน้านี้เป็นอย่างไร ทำอะไรไป และตัวเลขหลังจากนั้นเป็นอย่างไร",
    proofNote:
      "ตัวเลขทั้งหมดมาจากข้อมูลของลูกค้า และจะเผยแพร่เต็มรูปแบบเมื่อได้รับอนุญาตเป็นลายลักษณ์อักษร ระหว่างนี้แสดงแบบไม่ระบุชื่อลูกค้า",
    comingTitle: "เคสถัดไปกำลังเขียน",
    comingBody: "ผมเพิ่มเคสใหม่เมื่อมีตัวเลขที่ตรวจสอบได้และลูกค้าอนุญาตแล้วเท่านั้น",
    ctaTitle: "อยากได้ผลแบบนี้?",
    ctaSub: "เริ่มจาก Audit ฟรี หรือทักมาเล่าโจทย์ทาง LINE",
  },

  case: {
    client: "ลูกค้า",
    role: "บทบาท",
    period: "ช่วงเวลา",
    stack: "Stack",
    services: "บริการ",
    resultsEyebrow: "Results",
    resultsTitle: "ผลลัพธ์ที่วัดได้",
    resultsNote:
      "ตัวเลขทุกตัวยังไม่ได้รับอนุญาตให้เผยแพร่ และยังรอยืนยันช่วงเวลา จะอัปเดตเมื่อลูกค้าอนุญาต",
    quoteTitle: "คำพูดลูกค้า",
    quotePending: "รอขออนุญาตจากลูกค้า — จะเพิ่มเมื่อได้รับคำยืนยันเป็นลายลักษณ์อักษร",
    relatedPackage: "แพ็กเกจที่ตรงกับเคสนี้",
    ctaTitle: "อยากได้ผลแบบนี้?",
    ctaSub: "ส่ง URL มาให้ผมตรวจฟรี หรือคุยโจทย์ทาง LINE ได้เลย",
  },

  about: {
    title: "เกี่ยวกับ Silicon Warin: freelance developer สำหรับธุรกิจไทย",
    description:
      "รู้จักผู้พัฒนา วิธีคิดและการทำงาน ทำงานคนเดียว ตอบตรง ขอบเขตชัด ทำเว็บ SEO LINE OA และระบบหลังบ้าน",
    eyebrow: "About",
    h1: "สวัสดีครับ ผม Wiriya — developer ที่ทำเว็บให้ธุรกิจไทยหาเจอบน Google",
    intro:
      "ผมทำงานคนเดียว ดังนั้นคุณคุยกับคนที่เขียนโค้ดเองตั้งแต่วันแรกจนส่งงาน ไม่มีตัวกลาง ไม่มีทีมที่ต้องส่งต่อกัน",
    // TODO(owner): confirm this framing; the facts (years, roles, programme) come from the owner.
    angleEyebrow: "Engineer, with an artist's ear",
    angleTitle: "คิดแบบวิศวกร ฟังแบบนักดนตรี",
    angleBody: [
      "ก่อนจะเขียนโค้ด ผมเล่นกีตาร์รับงานฟรีแลนซ์อยู่ 8 ปี ดนตรีสอนให้ฟังให้จบก่อนเล่น และได้ยินตั้งแต่โน้ตแรกว่าอะไรไม่ลงตัว",
      "ผมใช้หูแบบเดียวกันกับงานเว็บ: ฟังว่าธุรกิจคุณต้องการอะไรจริง แล้วตัดสินด้วยตัวเลขจาก Search Console ไม่ใช่ความรู้สึก",
    ],
    pathEyebrow: "Path",
    pathTitle: "เส้นทางที่มาถึงตรงนี้",
    path: [
      { when: "2010–2018", title: "นักกีตาร์ฟรีแลนซ์", body: "รับงานเล่นกีตาร์แบบอิสระ" },
      { when: "2020–2024", title: "ผู้ช่วยช่างเทคนิคเครื่องปรับอากาศ", body: "งานหน้างานกับลูกค้าจริง" },
      { when: "2024", title: "Generation Thailand", body: "หลักสูตร full-stack developer" },
      {
        when: "ปัจจุบัน",
        title: "Freelance developer · Silicon Warin",
        body: "ทำเว็บ SEO, LINE OA และระบบหลังบ้านให้ SME ไทย รวมถึงเว็บและระบบหลังบ้านของดีลเลอร์รถยนต์ในหน้าผลงาน",
      },
    ],
    principlesEyebrow: "Principles",
    principlesTitle: "หลักการทำงาน",
    principles: [
      { title: "วัดผลได้ก่อนสวย", body: "ทุกหน้ามีเป้าหมาย และตรวจผลจาก Search Console" },
      { title: "เร็วและดูแลง่าย", body: "static-first ไม่ผูกกับ plugin ที่ต้องอัปเดตตลอด" },
      { title: "ขอบเขตชัด ราคาชัด", body: "เขียนก่อนเริ่ม ไม่บานปลาย" },
    ],
    doTitle: "ผมรับงาน",
    do: ["เว็บธุรกิจ SEO", "AEO/GEO", "LINE OA/LIFF", "ระบบหลังบ้าน"],
    dontTitle: "ผมไม่รับ",
    dont: [
      "งานที่ต้องการ “การันตีอันดับ 1”",
      "ระบบ e-commerce ขนาดใหญ่ข้ามชาติ",
      "งานที่ต้องเสร็จภายในไม่กี่วัน",
    ],
    stackEyebrow: "Stack",
    stackTitle: "เครื่องมือที่ใช้",
    stack: [
      ["Astro", "Next.js", "TypeScript"],
      ["Cloudflare Workers"],
      ["Postgres (Neon)", "Drizzle"],
      ["LINE Messaging API", "LIFF"],
    ],
    ctaTitle: "อยากรู้ว่าเราเข้ากันไหม?",
    ctaSub: "ทักมาคุยทาง LINE ได้เลย",
  },

  contact: {
    title: "ติดต่อ Silicon Warin ปรึกษาเรื่องเว็บไซต์ฟรี",
    description: "คุยโจทย์ทาง LINE หรือส่งฟอร์ม ตอบกลับภายใน 1 วันทำการ ปรึกษาครั้งแรกไม่มีค่าใช้จ่าย",
    eyebrow: "Contact",
    h1: "คุยโจทย์กับผม",
    sub: "เลือกช่องที่สะดวก LINE ตอบเร็วที่สุด ส่วนฟอร์มเหมาะถ้าต้องการเล่ารายละเอียด",
    lineTitle: "LINE (เร็วที่สุด)",
    lineMissing: "LINE OA กำลังเปิด ระหว่างนี้ส่งฟอร์มด้านล่างได้เลย",
    formTitle: "ส่งข้อความ",
    afterTitle: "หลังส่งแล้วเกิดอะไรขึ้น",
    after: [
      "ผมตอบกลับภายใน 1 วันทำการ",
      "ถามเพิ่มไม่เกิน 3 ข้อ หรือเสนอเวลาคุยสั้น ๆ 15–20 นาที",
      "ไม่มีค่าใช้จ่าย ไม่มีการเร่งขาย",
    ],
    otherTitle: "ช่องทางอื่น",
    email: "อีเมล",
  },

  audit: {
    title: "ตรวจเว็บไซต์ SEO ฟรี – Website Audit – Silicon Warin",
    description:
      "ส่ง URL เพื่อรับสรุป SEO, ความเร็ว และความพร้อม AI search ภายใน 3 วันทำการ ฟรี ไม่ผูกมัด",
    eyebrow: "Free audit",
    h1: "Website Audit ฟรี — รู้ก่อนว่าเว็บคุณเสียโอกาสตรงไหน",
    sub: "ส่ง URL เว็บไซต์ ผมตรวจให้แล้วส่งสรุป 1–2 หน้า พร้อมสิ่งที่ควรแก้ก่อน-หลัง ภายใน 3 วันทำการ",
    coversTitle: "ในรายงานมีอะไรบ้าง",
    covers: [
      "SEO พื้นฐาน: title/meta, heading, internal link, sitemap, indexing",
      "ความเร็วและ Core Web Vitals บนมือถือ",
      "ความพร้อมสำหรับ AI search (AEO/GEO): schema, โครงเนื้อหา, llms.txt",
      "ความปลอดภัยเบื้องต้น: HTTPS, ซอฟต์แวร์/plugin ที่ล้าสมัย",
      "ช่องทางติดต่อ/LINE OA: ลูกค้าติดต่อคุณได้ง่ายแค่ไหน",
    ],
    // TODO(owner): site-structure.md suggests a monthly cap ("รับเดือนละ {N} เว็บ"); add it here once decided.
    terms: "ฟรีจริง ไม่ผูกมัด ผมจะเสนองานต่อเฉพาะเมื่อคุณถาม",
    stepsTitle: "ขั้นตอนและระยะเวลา",
    steps: [
      { title: "ส่ง URL", body: "กรอกฟอร์ม ใช้เวลาไม่ถึง 1 นาที" },
      { title: "ผมตรวจเว็บ", body: "ดู SEO ความเร็ว AI search และช่องทางติดต่อ" },
      { title: "ได้สรุป 1–2 หน้า", body: "ภายใน 3 วันทำการ ทาง LINE หรืออีเมล" },
      { title: "ถามต่อได้", body: "ถ้าอยากให้ช่วยแก้ ค่อยคุยกัน" },
    ],
    faqTitle: "คำถามเรื่อง Audit",
    faq: [
      { q: "ฟรีจริงไหม?", a: "ฟรีจริง ไม่ผูกมัด ผมจะเสนองานต่อเฉพาะเมื่อคุณถาม" },
      {
        q: "ต้องจ้างต่อไหม?",
        a: "ไม่ต้อง สรุปเป็นของคุณ จะแก้เอง ให้ทีมเดิมทำ หรือให้ผมช่วยก็ได้",
      },
      { q: "ใช้เวลานานแค่ไหน?", a: "ส่งสรุปให้ภายใน 3 วันทำการ หลังได้รับ URL" },
    ],
  },

  privacy: {
    title: "นโยบายความเป็นส่วนตัว (PDPA) – Silicon Warin",
    description:
      "Silicon Warin เก็บข้อมูลอะไร ใช้ทำอะไร เก็บที่ไหน และขอดู แก้ไข หรือลบข้อมูลได้อย่างไร ตาม พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล",
    eyebrow: "Privacy",
    h1: "นโยบายความเป็นส่วนตัว",
    updated: "ปรับปรุงล่าสุด 18 พฤศจิกายน 2569",
    // TODO(owner): have this reviewed before launch, and update it when analytics or Turnstile are added.
    sections: [
      {
        h: "ใครเป็นผู้ดูแลข้อมูล",
        p: [
          "Silicon Warin (ดำเนินงานโดย Wiriya) เป็นผู้ควบคุมข้อมูลส่วนบุคคลที่คุณส่งผ่านเว็บไซต์นี้",
        ],
      },
      {
        h: "เก็บข้อมูลอะไร",
        list: [
          "ชื่อ (ชื่อเล่นได้)",
          "ช่องทางติดต่อที่คุณเลือก: LINE ID เบอร์โทร หรืออีเมล",
          "URL เว็บไซต์ (ฟอร์ม Audit)",
          "ข้อความที่คุณเล่าโจทย์ และแพ็กเกจที่สนใจ",
          "เวลาที่คุณกดยินยอม และหน้าที่ส่งฟอร์ม",
        ],
      },
      {
        h: "ใช้ทำอะไร",
        list: ["ติดต่อกลับเรื่องที่คุณถาม", "ส่งผล Website Audit", "ทำใบเสนอราคา ถ้าคุณขอ"],
        p: ["ผมไม่ขายหรือแบ่งปันข้อมูลให้ใครเพื่อการตลาด และไม่ส่งข้อความโฆษณาโดยไม่ได้ขอ"],
      },
      {
        h: "เก็บที่ไหน นานแค่ไหน",
        p: [
          "ข้อมูลจากฟอร์มถูกส่งผ่าน Cloudflare และเก็บในฐานข้อมูล Notion ซึ่งอาจมีเซิร์ฟเวอร์อยู่นอกประเทศไทย ผมเก็บไว้เท่าที่จำเป็นต่อการติดต่อและการทำงานร่วมกัน และลบเมื่อไม่จำเป็นแล้วหรือเมื่อคุณขอ",
        ],
      },
      {
        h: "คุกกี้",
        p: [
          "ตอนนี้เว็บไซต์ไม่ใช้คุกกี้ติดตาม เบราว์เซอร์ของคุณจำเฉพาะโหมดสว่าง/มืดที่คุณเลือก ถ้าเพิ่มเครื่องมือวัดผลในอนาคต จะแจ้งในหน้านี้",
        ],
      },
      {
        h: "สิทธิ์ของคุณ",
        p: [
          "คุณขอดู ขอสำเนา ขอแก้ไข ขอลบ หรือถอนความยินยอมได้ทุกเมื่อ โดยแจ้งทาง LINE หรืออีเมล ผมจะดำเนินการโดยไม่ชักช้า และคุณมีสิทธิ์ร้องเรียนต่อสำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล",
        ],
      },
    ],
    contactLine: "ติดต่อเรื่องข้อมูลส่วนบุคคล:",
  },

  insights: {
    title: "Insights: SEO, AI Search และระบบสำหรับธุรกิจ – Silicon Warin",
    description:
      "บทความเรื่อง SEO, AEO/GEO, LINE OA และระบบหลังบ้านสำหรับ SME ไทย เขียนจากงานจริง",
    eyebrow: "Insights",
    h1: "Insights",
    sub: "บันทึกเรื่อง SEO, AI search และระบบสำหรับธุรกิจไทย",
    emptyTitle: "บทความแรกกำลังเขียน",
    emptyBody: "หัวข้อที่กำลังเขียน:",
    planned: [
      "เว็บ WordPress โดนแฮ็ก ทำอย่างไรต่อ และควรย้ายไหม",
      "AEO/GEO คืออะไร ธุรกิจ SME ต้องทำอะไรเพื่อให้ ChatGPT/Gemini ตอบชื่อเรา",
      "LINE OA vs เว็บไซต์: ธุรกิจบริการควรเริ่มจากอะไร",
      "LIFF คืออะไร และ SME ใช้ทำอะไรได้บ้าง",
      "เมื่อไหร่ที่ Excel/กลุ่ม LINE ไม่พอ และต้องทำระบบหลังบ้าน",
    ],
    updated: "อัปเดต",
    ctaTitle: "อยากรู้ว่าเว็บคุณพร้อมแค่ไหน?",
    ctaSub: "ขอ Website Audit ฟรี ได้สรุป 1–2 หน้าภายใน 3 วันทำการ",
  },

  form: {
    auditLabel: "ขอ Website Audit ฟรี",
    contactLabel: "ฟอร์มติดต่อ",
    url: "URL เว็บไซต์",
    urlPlaceholder: "https://yourbusiness.co.th",
    name: "ชื่อ",
    nameHint: "(ชื่อเล่นได้)",
    channelAudit: "ให้ส่งผลตรวจทางไหน",
    channelContact: "ช่องทางติดต่อกลับ",
    channels: { line: "LINE", phone: "โทร", email: "อีเมล" },
    contactLabels: { line: "LINE ID", phone: "เบอร์โทร", email: "อีเมล" },
    interest: "สนใจเรื่องอะไร",
    unsure: "ยังไม่แน่ใจ",
    message: "เล่าโจทย์สั้น ๆ",
    optional: "(ไม่บังคับ)",
    messagePlaceholder: "ทำธุรกิจอะไร อยากให้เว็บ/ระบบช่วยเรื่องอะไร",
    focus: "อยากให้ดูเรื่องไหนเป็นพิเศษ",
    focusPlaceholder: "เช่น ทำไมไม่ขึ้น Google, เว็บช้าบนมือถือ",
    consentBefore: "ยินยอมให้เก็บข้อมูลนี้เพื่อติดต่อกลับและส่งผล Audit ตาม",
    consentLink: "นโยบายความเป็นส่วนตัว (PDPA)",
    submitAudit: "ขอ Website Audit ฟรี",
    submitContact: "ส่งข้อความ",
    sending: "กำลังส่ง…",
    reassureAudit: "ฟรีจริง ไม่ผูกมัด · ผมจะเสนองานต่อเฉพาะเมื่อคุณถาม",
    reassureContact: "ตอบกลับภายใน 1 วันทำการ · ไม่มีการเร่งขาย",
    doneTitle: "ขอบคุณครับ ได้รับข้อความแล้ว",
    doneBody: "จะติดต่อกลับทาง {channel} ภายใน 1 วันทำการ",
    fail: "ส่งไม่สำเร็จ ลองอีกครั้ง หรือทักมาทาง LINE / อีเมลแทน",
    err: {
      url: "กรอก URL เว็บไซต์ที่อยากให้ตรวจ",
      urlInvalid: "URL ไม่ถูกต้อง เช่น https://yourbusiness.co.th",
      name: "กรอกชื่อ (ชื่อเล่นได้)",
      line: "กรอก LINE ID สำหรับติดต่อกลับ",
      phone: "กรอกเบอร์โทรสำหรับติดต่อกลับ",
      phoneInvalid: "เบอร์โทรไม่ถูกต้อง เช่น 081 234 5678",
      email: "กรอกอีเมลสำหรับติดต่อกลับ",
      emailInvalid: "อีเมลไม่ถูกต้อง เช่น name@example.com",
      interest: "เลือกเรื่องที่สนใจ",
      consent: "ต้องยินยอมก่อนส่งข้อมูล",
    },
  },

  notFound: {
    title: "ไม่พบหน้านี้ – Silicon Warin",
    eyebrow: "404",
    h1: "ไม่พบหน้านี้",
    sub: "ลิงก์อาจเปลี่ยนไปแล้ว ลองกลับไปหน้าแรก หรือดูแพ็กเกจทั้งหมด",
    home: "กลับหน้าแรก",
    en: "Page not found — go to the English home page",
  },
};

export type Copy = typeof th;

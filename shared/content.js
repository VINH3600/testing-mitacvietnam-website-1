/* =====================================================================
 * GRCVN website content — the ONLY file to edit for text and products.
 * Every text is { vi: '...', en: '...' }. Leave en empty to reuse vi.
 * Lines marked  // XÁC NHẬN  still need confirmation from GRCVN.
 * ===================================================================== */
window.GRCVN = {
  company: {
    shortName: 'GRC VN',
    brand: 'General Resources Vietnam',
    legalName: {
      vi: 'Công ty TNHH General Resources Vietnam',
      en: 'General Resources Vietnam Company Limited',
    },
    taxCode: '0314380088',
    established: '28/04/2017',
    address: {
      vi: 'Phòng 201, Tầng 2, Tòa nhà The Galleria Metro 6, 59 Võ Nguyên Giáp, Phường An Khánh, TP. Hồ Chí Minh',
      en: 'Room 201, 2nd Floor, The Galleria Metro 6, 59 Vo Nguyen Giap Street, An Khanh Ward, Ho Chi Minh City, Vietnam',
    },
    mapQuery: 'The Galleria Metro 6, 59 Võ Nguyên Giáp, An Khánh, Thành phố Hồ Chí Minh',
    coords: '10.80°N · 106.74°E',
    phone: '+84 28 2260 7766',
    phoneDisplay: '028 2260 7766',
    email: 'sales@mitac.com.tw', // XÁC NHẬN: email của GRCVN?
    zalo: '', // XÁC NHẬN: số Zalo OA / Zalo bán hàng (điền vào để hiện nút Zalo)
    facebook: '',
    linkedin: '',
  },

  form: {
    // Điền access key Web3Forms (miễn phí, web3forms.com) để form gửi thẳng về email công ty.
    web3formsKey: '',
  },

  seo: {
    title: {
      vi: 'General Resources Vietnam | Máy tính siêu bền Getac & Máy chủ MiTAC',
      en: 'General Resources Vietnam | Getac Rugged Computers & MiTAC Servers',
    },
    description: {
      vi: 'Cung cấp, cấu hình và triển khai máy tính siêu bền chuẩn quân sự Getac và máy chủ, điện toán biên MiTAC cho quốc phòng, an toàn công cộng, giao thông, năng lượng và sản xuất tại Việt Nam.',
      en: 'Supply, configuration and deployment of military-grade Getac rugged computers and MiTAC edge and data-center servers for defense, public safety, transport, energy and manufacturing in Vietnam.',
    },
  },

  hero: {
    eyebrow: {
      vi: 'Getac · MiTAC — Công nghệ cho môi trường khắc nghiệt',
      en: 'Getac · MiTAC — Technology for harsh environments',
    },
    title: {
      vi: 'Máy tính siêu bền và máy chủ biên cho những nơi công việc không được phép dừng lại.',
      en: 'Rugged computers and edge servers for work that cannot stop.',
    },
    short: {
      vi: 'Bền bỉ ở hiện trường. Mạnh mẽ ở trung tâm dữ liệu.',
      en: 'Tough in the field. Powerful in the data center.',
    },
    lead: {
      vi: 'General Resources Vietnam cung cấp, cấu hình và triển khai máy tính siêu bền Getac đạt chuẩn quân sự cùng hệ thống máy chủ MiTAC cho quốc phòng, an toàn công cộng, giao thông, năng lượng và sản xuất tại Việt Nam.',
      en: 'General Resources Vietnam supplies, configures and deploys military-grade Getac rugged computers and MiTAC server systems for defense, public safety, transport, energy and manufacturing across Vietnam.',
    },
  },

  // Số liệu GRC Group lấy từ hồ sơ tuyển dụng công khai  // XÁC NHẬN
  stats: [
    { value: 45, suffix: '+', label: { vi: 'năm kinh nghiệm kỹ thuật của GRC Group (từ 1980)', en: 'years of GRC Group engineering (since 1980)' } },
    { value: 9, label: { vi: 'hệ thống metro (MRT) GRC Group đã tham gia', en: 'MRT networks served by GRC Group' } },
    { value: 4, label: { vi: 'thị trường: Đài Loan, Hồng Kông, Việt Nam, Thái Lan', en: 'markets: Taiwan, Hong Kong, Vietnam, Thailand' } },
    { value: 2017, static: true, label: { vi: 'năm thành lập pháp nhân tại TP. Hồ Chí Minh', en: 'year our Ho Chi Minh City company was founded' } },
  ],

  about: {
    title: { vi: 'Về General Resources Vietnam', en: 'About General Resources Vietnam' },
    body: {
      vi: 'General Resources Vietnam là thành viên của GRC Group — tập đoàn kỹ thuật thành lập năm 1980 tại Đài Loan, hoạt động tại Đài Loan, Hồng Kông, Việt Nam và Thái Lan trong lĩnh vực tín hiệu đường sắt, hệ thống metro và kỹ thuật môi trường. Có mặt tại TP. Hồ Chí Minh từ năm 2017, chúng tôi mang kinh nghiệm tích hợp hệ thống cho hạ tầng trọng yếu vào từng dự án máy tính siêu bền và máy chủ cho doanh nghiệp, cơ quan tại Việt Nam.',
      en: 'General Resources Vietnam is part of GRC Group, an engineering group founded in Taiwan in 1980 and active in Taiwan, Hong Kong, Vietnam and Thailand in railway signalling, metro systems and environmental engineering. Established in Ho Chi Minh City in 2017, we bring critical-infrastructure integration experience to every rugged computing and server project we deliver for Vietnamese enterprises and agencies.',
    },
    points: [
      { vi: 'Pháp nhân Việt Nam — xuất hóa đơn VAT, hợp đồng và bảo hành tại chỗ', en: 'Vietnamese legal entity — local VAT invoices, contracts and warranty' },
      { vi: 'Kinh nghiệm tích hợp hệ thống cho metro và đường sắt', en: 'System-integration experience from metro and rail projects' },
      { vi: 'Tư vấn cấu hình theo từng dự án, không bán hàng đại trà', en: 'Configuration tailored to each project, not off-the-shelf boxes' },
    ],
  },

  pillars: [
    {
      id: 'rugged',
      brand: 'Getac',
      title: { vi: 'Máy tính siêu bền', en: 'Rugged mobile computing' },
      body: {
        vi: 'Laptop, máy tính bảng Windows và Android đạt chuẩn MIL-STD-810H, IP66, màn hình đọc rõ dưới nắng — cho lực lượng hiện trường, xe chuyên dụng và nhà máy.',
        en: 'Windows laptops plus Windows and Android tablets certified to MIL-STD-810H and IP66, with sunlight-readable screens — for field crews, vehicles and plants.',
      },
      tags: { vi: ['Laptop', 'Máy tính bảng', 'Android', 'Lắp đặt trên xe'], en: ['Laptops', 'Tablets', 'Android', 'In-vehicle'] },
      image: '../assets/img/products/getac-b360.webp',
    },
    {
      id: 'server',
      brand: 'MiTAC',
      title: { vi: 'Máy chủ & điện toán biên', en: 'Servers & edge computing' },
      body: {
        vi: 'Máy chủ biên cho 5G vRAN/MEC, máy chủ chuẩn OCP cho trung tâm dữ liệu và máy chủ GPU cho AI — từ nhà sản xuất máy chủ đã tiếp quản dòng máy chủ Intel.',
        en: 'Edge servers for 5G vRAN/MEC, OCP servers for data centers and GPU servers for AI — from the maker that took over Intel’s server-system line.',
      },
      tags: { vi: ['Điện toán biên', '5G O-RAN', 'Máy chủ AI', 'OCP'], en: ['Edge', '5G O-RAN', 'AI servers', 'OCP'] },
      image: '../assets/img/products/mitac-g4826.webp',
    },
  ],

  features: [
    { icon: 'shield', title: { vi: 'Chuẩn quân sự', en: 'Military-grade' }, body: { vi: 'MIL-STD-810H, MIL-STD-461G, IP66 — chống rơi, nước, bụi, rung và nhiệt độ khắc nghiệt.', en: 'MIL-STD-810H, MIL-STD-461G, IP66 — built for drops, water, dust, vibration and extreme heat or cold.' } },
    { icon: 'sun', title: { vi: 'Đọc rõ dưới nắng', en: 'Sunlight-readable' }, body: { vi: 'Màn hình LumiBond® của Getac, độ sáng tới 1.400 nits, cảm ứng được khi đeo găng tay hoặc trời mưa.', en: 'Getac LumiBond® displays up to 1,400 nits, with touch that works with gloves or in the rain.' } },
    { icon: 'edge', title: { vi: 'Điện toán biên & AI', en: 'Edge & AI computing' }, body: { vi: 'Máy chủ MiTAC tối ưu cho 5G O-RAN, MEC, AI và trung tâm dữ liệu mật độ cao.', en: 'MiTAC servers optimised for 5G O-RAN, MEC, AI and high-density data centers.' } },
    { icon: 'wrench', title: { vi: 'Bảo hành Bumper-to-Bumper', en: 'Bumper-to-Bumper warranty' }, body: { vi: 'Bảo hành 3 năm của Getac bao gồm cả hư hỏng do tai nạn trong quá trình làm việc.', en: 'Getac’s 3-year warranty covers even accidental damage on the job.' } },
  ],

  services: [
    { title: { vi: 'Tư vấn & khảo sát', en: 'Consult & survey' }, body: { vi: 'Khảo sát điều kiện làm việc thực tế, phần mềm và quy trình để chọn đúng thiết bị.', en: 'We study your real working conditions, software and workflows to pick the right device.' } },
    { title: { vi: 'Cấu hình theo dự án (CTO)', en: 'Configure-to-order' }, body: { vi: 'Lựa chọn CPU, bộ nhớ, 4G LTE, GPS, đầu đọc mã vạch, RFID, thẻ thông minh theo yêu cầu.', en: 'CPU, memory, 4G LTE, GPS, barcode, RFID and smart-card options built to your spec.' } },
    { title: { vi: 'Tích hợp & triển khai', en: 'Integrate & deploy' }, body: { vi: 'Lắp đặt trên xe, dock, cài đặt phần mềm và tích hợp vào hệ thống hiện có.', en: 'Vehicle mounting, docks, software imaging and integration with your existing systems.' } },
    { title: { vi: 'Bảo hành & hỗ trợ', en: 'Warranty & support' }, body: { vi: 'Đầu mối bảo hành tại Việt Nam, hỗ trợ kỹ thuật tiếng Việt trong suốt vòng đời thiết bị.', en: 'A single warranty contact in Vietnam and local-language technical support for the device’s life.' } },
  ],

  sectors: [
    { id: 'defense', image: '../assets/img/industries/defense.webp', title: { vi: 'Quốc phòng', en: 'Defense' }, body: { vi: 'Máy tính chỉ huy, điều khiển UAV và bảo trì khí tài ở thực địa.', en: 'Command laptops, UAV ground control and equipment maintenance in the field.' }, products: ['b360', 'b360pro', 'k120'] },
    { id: 'safety', image: '../assets/img/industries/public-safety.webp', title: { vi: 'An toàn công cộng', en: 'Public safety' }, body: { vi: 'Máy tính trên xe cho công an, cứu hỏa, cấp cứu — kết nối 4G LTE liên tục.', en: 'In-vehicle computers for police, fire and EMS with always-on 4G LTE.' }, products: ['b360', 'ux10', 'f120'] },
    { id: 'rail', image: '../assets/img/industries/railway.webp', title: { vi: 'Đường sắt & giao thông', en: 'Rail & transport' }, body: { vi: 'Bảo trì đường ray, tín hiệu và đoàn tàu — lĩnh vực GRC Group có hơn 45 năm kinh nghiệm.', en: 'Track, signalling and rolling-stock maintenance — GRC Group’s home turf for 45+ years.' }, products: ['s510', 'zx10', 'ux10'] },
    { id: 'utilities', image: '../assets/img/industries/utilities.webp', title: { vi: 'Điện, nước & tiện ích', en: 'Utilities' }, body: { vi: 'GIS, kiểm tra lưới điện và quản lý đội kỹ thuật hiện trường.', en: 'GIS, grid inspection and field workforce management.' }, products: ['f120', 's510', 'ux10'] },
    { id: 'manufacturing', image: '../assets/img/industries/manufacturing.webp', title: { vi: 'Sản xuất công nghiệp', en: 'Manufacturing' }, body: { vi: 'Giám sát dây chuyền, kho vận và AI tại nhà máy với máy chủ biên.', en: 'Line monitoring, warehousing and on-site AI with edge servers.' }, products: ['ux10', 'zx10', 'g4520'] },
    { id: 'oilgas', image: '../assets/img/industries/oil-gas.webp', title: { vi: 'Dầu khí & năng lượng', en: 'Oil, gas & energy' }, body: { vi: 'Thiết bị cho vùng nguy hiểm cháy nổ, giàn khoan và nhà máy lọc dầu.', en: 'Devices for hazardous locations, offshore rigs and refineries.' }, products: ['b360', 'ux10', 'f120'] },
  ],

  interests: [
    { id: 'rugged', label: { vi: 'Máy tính siêu bền Getac (laptop / máy tính bảng)', en: 'Getac rugged computers (laptops / tablets)' } },
    { id: 'server', label: { vi: 'Máy chủ & điện toán biên MiTAC', en: 'MiTAC servers & edge computing' } },
    { id: 'project', label: { vi: 'Dự án tích hợp hệ thống', en: 'System-integration project' } },
    { id: 'other', label: { vi: 'Khác', en: 'Other' } },
  ],

  categories: [
    { id: 'laptop', label: { vi: 'Laptop siêu bền', en: 'Rugged laptops' } },
    { id: 'tablet', label: { vi: 'Máy tính bảng siêu bền', en: 'Rugged tablets' } },
    { id: 'server', label: { vi: 'Máy chủ MiTAC', en: 'MiTAC servers' } },
  ],

  // Nhãn cho các dòng thông số trong `specs` của từng sản phẩm.
  specLabels: {
    cpu: { vi: 'Bộ xử lý', en: 'Processor' },
    gpu: { vi: 'Đồ họa / GPU', en: 'Graphics / GPU' },
    display: { vi: 'Màn hình', en: 'Display' },
    rugged: { vi: 'Độ bền', en: 'Ruggedness' },
    temp: { vi: 'Nhiệt độ hoạt động', en: 'Operating temp.' },
    connect: { vi: 'Kết nối', en: 'Connectivity' },
    battery: { vi: 'Pin', en: 'Battery' },
    expand: { vi: 'Mở rộng', en: 'Expansion' },
    os: { vi: 'Hệ điều hành', en: 'Operating system' },
    weight: { vi: 'Trọng lượng', en: 'Weight' },
    form: { vi: 'Kiểu máy', en: 'Form factor' },
    memory: { vi: 'Bộ nhớ', en: 'Memory' },
    storage: { vi: 'Lưu trữ', en: 'Storage' },
    network: { vi: 'Mạng & nguồn', en: 'Network & power' },
  },

  // Thông số theo trang chính hãng getac.com / mitaccomputing.com (tra cứu 10/2026).
  // metrics: số liệu dùng cho biểu đồ so sánh (để trống nếu không có).
  products: [
    {
      id: 'b360', brand: 'Getac', category: 'laptop', name: 'Getac B360', gen: 'G3', featured: true,
      image: '../assets/img/products/getac-b360.webp',
      url: 'https://www.getac.com/intl/products/laptops/b360/',
      tagline: { vi: 'Laptop siêu bền 13,3" chủ lực cho hiện trường và xe chuyên dụng.', en: 'The flagship fully rugged 13.3" laptop for field and vehicle work.' },
      badges: ['IP66', 'MIL-STD-810H', 'MIL-STD-461G'],
      specs: {
        cpu: 'Intel® Core™ Ultra Series 2 (H)',
        display: { vi: '13,3" FHD LumiBond®, 1.400 nits', en: '13.3" FHD LumiBond®, 1,400 nits' },
        rugged: { vi: 'IP66 · MIL-STD-810H · MIL-STD-461G · rơi 1,8 m', en: 'IP66 · MIL-STD-810H · MIL-STD-461G · 1.8 m drop' },
        temp: '-29°C → 63°C',
        connect: { vi: 'Wi-Fi 7, 4G LTE tùy chọn', en: 'Wi-Fi 7, optional 4G LTE' },
        battery: { vi: 'Pin kép, thay nóng', en: 'Dual hot-swappable batteries' },
        weight: '2.32 kg · 34.9 mm',
      },
      uses: { vi: ['Quốc phòng', 'Công an & cứu hỏa trên xe', 'Dầu khí'], en: ['Defense', 'In-vehicle police & fire', 'Oil & gas'] },
      metrics: { ip: 66, drop: 1.8, tmin: -29, tmax: 63, nits: 1400, kg: 2.32 },
    },
    {
      id: 'b360pro', brand: 'Getac', category: 'laptop', name: 'Getac B360 Pro', gen: 'G3',
      image: '../assets/img/products/getac-b360-pro.webp',
      url: 'https://www.getac.com/intl/products/laptops/b360-pro/',
      tagline: { vi: 'Thêm khay mở rộng, GPU rời và cổng kết nối đời cũ cho kỹ sư hiện trường.', en: 'Adds a media bay, discrete GPU and legacy ports for field engineers.' },
      badges: ['IP66', 'MIL-STD-810H', 'RTX A500'],
      specs: {
        cpu: 'Intel® Core™ Ultra Series 2 (H)',
        gpu: { vi: 'NVIDIA® RTX™ A500 4 GB tùy chọn', en: 'Optional NVIDIA® RTX™ A500 4 GB' },
        display: { vi: '13,3" FHD LumiBond®, 1.400 nits', en: '13.3" FHD LumiBond®, 1,400 nits' },
        rugged: { vi: 'IP66 · MIL-STD-810H · MIL-STD-461G · rơi 1,8 m', en: 'IP66 · MIL-STD-810H · MIL-STD-461G · 1.8 m drop' },
        expand: { vi: 'Khay media (DVD/Blu-ray hoặc pin thứ ba); cổng Serial, VGA, LAN thứ hai', en: 'Media bay (DVD/Blu-ray or third battery); serial, VGA, second LAN' },
        battery: { vi: 'Thời lượng pin gần gấp đôi B360', en: 'About twice the B360’s battery life' },
        weight: '3.08 kg · 53.5 mm',
      },
      uses: { vi: ['Bảo trì khí tài', 'Chẩn đoán kỹ thuật', 'Kỹ sư hiện trường'], en: ['Equipment maintenance', 'Diagnostics', 'Field engineering'] },
      metrics: { ip: 66, drop: 1.8, tmin: -29, tmax: 63, nits: 1400, kg: 3.08 },
    },
    {
      id: 's510', brand: 'Getac', category: 'laptop', name: 'Getac S510', gen: '',
      image: '../assets/img/products/getac-s510.webp',
      url: 'https://www.getac.com/intl/products/laptops/s510/',
      tagline: { vi: 'Laptop bán siêu bền 15,6" với hiệu năng văn phòng và AI.', en: 'A semi-rugged 15.6" laptop with office-class performance and AI.' },
      badges: ['IP53', 'MIL-STD-810H', 'Wi-Fi 7'],
      specs: {
        cpu: { vi: 'Intel® Core™ Ultra Series 1; bản S510AD dùng AMD Ryzen™ AI', en: 'Intel® Core™ Ultra Series 1; S510AD variant with AMD Ryzen™ AI' },
        gpu: { vi: 'NVIDIA® RTX™ A500 tùy chọn', en: 'Optional NVIDIA® RTX™ A500' },
        display: { vi: '15,6" FHD 1.000 nits, cảm ứng LumiBond® tùy chọn', en: '15.6" FHD 1,000 nits, optional LumiBond® touch' },
        rugged: { vi: 'IP53 · MIL-STD-810H · rơi 0,9 m', en: 'IP53 · MIL-STD-810H · 0.9 m drop' },
        temp: '-29°C → 63°C',
        connect: { vi: 'Wi-Fi 7, Bluetooth 5.4, 4G LTE tùy chọn', en: 'Wi-Fi 7, Bluetooth 5.4, optional 4G LTE' },
        weight: { vi: '2,35 kg · pin thứ hai thay nóng tùy chọn', en: '2.35 kg · optional second hot-swap battery' },
      },
      uses: { vi: ['Điện lực & dịch vụ hiện trường', 'Chẩn đoán ô tô', 'Sản xuất'], en: ['Utilities & field service', 'Automotive diagnostics', 'Manufacturing'] },
      metrics: { ip: 53, drop: 0.9, tmin: -29, tmax: 63, nits: 1000, kg: 2.35 },
    },
    {
      id: 'ux10', brand: 'Getac', category: 'tablet', name: 'Getac UX10', gen: 'G5', featured: true,
      image: '../assets/img/products/getac-ux10.webp',
      url: 'https://www.getac.com/intl/products/tablets/ux10/',
      tagline: { vi: 'Máy tính bảng Windows 10,1" siêu bền, nhẹ và sẵn sàng cho AI.', en: 'A light, AI-ready 10.1" fully rugged Windows tablet.' },
      badges: ['IP66', 'Copilot+ PC', '1.15 kg'],
      specs: {
        cpu: { vi: 'Intel® Core™ Ultra 200V, NPU tới 48 TOPS', en: 'Intel® Core™ Ultra 200V, up to 48 TOPS NPU' },
        display: { vi: '10,1" WUXGA LumiBond®, 1.000 nits', en: '10.1" WUXGA LumiBond®, 1,000 nits' },
        rugged: { vi: 'IP66 · MIL-STD-810H · MIL-STD-461G · rơi 1,8 m khi đang chạy', en: 'IP66 · MIL-STD-810H · MIL-STD-461G · 1.8 m operating drop' },
        temp: '-29°C → 63°C',
        connect: { vi: 'Wi-Fi 7, 2 cổng Thunderbolt™ 4', en: 'Wi-Fi 7, 2× Thunderbolt™ 4' },
        battery: { vi: 'Thay pin nóng trong khoảng 30 giây', en: 'Hot-swap battery in about 30 seconds' },
        weight: { vi: '1,15 kg · bản UX10-EX cho vùng nguy hiểm ATEX/IECEx Zone 2/22', en: '1.15 kg · UX10-EX version for ATEX/IECEx Zone 2/22' },
      },
      uses: { vi: ['Kiểm tra lưới điện', 'Kho vận', 'Y tế'], en: ['Grid inspection', 'Logistics', 'Healthcare'] },
      metrics: { ip: 66, drop: 1.8, tmin: -29, tmax: 63, nits: 1000, kg: 1.15 },
    },
    {
      id: 'f120', brand: 'Getac', category: 'tablet', name: 'Getac F120', gen: '',
      image: '../assets/img/products/getac-f120.webp',
      url: 'https://www.getac.com/intl/products/tablets/f120/',
      tagline: { vi: 'Máy tính bảng 12,2" siêu bền với màn hình lớn 1.200 nits.', en: 'A 12.2" fully rugged tablet with a large 1,200-nit screen.' },
      badges: ['IP66', 'Copilot+ PC', '1.200 nits'],
      specs: {
        cpu: { vi: 'Intel® Core™ Ultra 200V, NPU 48 TOPS', en: 'Intel® Core™ Ultra 200V, 48 TOPS NPU' },
        display: { vi: '12,2", 1.200 nits', en: '12.2", 1,200 nits' },
        rugged: { vi: 'IP66 · rơi 1,8 m', en: 'IP66 · 1.8 m drop' },
        connect: { vi: 'Wi-Fi 7, 4G LTE tùy chọn', en: 'Wi-Fi 7, optional 4G LTE' },
        weight: '1.41 kg',
      },
      uses: { vi: ['Kiểm tra hiện trường', 'Bảo trì nhà máy', 'An toàn công cộng'], en: ['Field inspection', 'Plant maintenance', 'Public safety'] },
      metrics: { ip: 66, drop: 1.8, nits: 1200, kg: 1.41 },
    },
    {
      id: 'k120', brand: 'Getac', category: 'tablet', name: 'Getac K120', gen: 'G3',
      image: '../assets/img/products/getac-k120.webp',
      url: 'https://www.getac.com/intl/products/tablets/k120/',
      tagline: { vi: 'Máy tính bảng 2-trong-1 12,5" — thành laptop khi gắn bàn phím.', en: 'A 12.5" 2-in-1 that becomes a laptop with its keyboard.' },
      badges: ['IP66', '2-in-1', '1.200 nits'],
      specs: {
        cpu: { vi: 'Intel® Core™ i5 / i7 thế hệ 13', en: '13th-gen Intel® Core™ i5 / i7' },
        display: { vi: '12,5", 1.200 nits', en: '12.5", 1,200 nits' },
        rugged: { vi: 'IP66 · rơi 1,8 m', en: 'IP66 · 1.8 m drop' },
        expand: { vi: 'Bàn phím tháo rời, dock trên xe, tay cầm cứng', en: 'Detachable keyboard, vehicle dock, hard handle' },
        weight: { vi: '1,7 kg (chỉ máy tính bảng)', en: '1.7 kg (tablet only)' },
      },
      uses: { vi: ['Kỹ thuật hiện trường', 'Quốc phòng', 'Ô tô'], en: ['Field engineering', 'Defense', 'Automotive'] },
      metrics: { ip: 66, drop: 1.8, nits: 1200, kg: 1.7 },
    },
    {
      id: 'zx10', brand: 'Getac', category: 'tablet', name: 'Getac ZX10', gen: 'G2',
      image: '../assets/img/products/getac-zx10.webp',
      url: 'https://www.getac.com/intl/products/tablets/zx10/',
      tagline: { vi: 'Máy tính bảng Android 10,1" siêu bền cho đội ngũ di động quy mô lớn.', en: 'A 10.1" rugged Android tablet for large mobile teams.' },
      badges: ['IP66', 'Android 15', '906 g'],
      specs: {
        cpu: 'Qualcomm® QCS6490',
        os: { vi: 'Android 15 · Android Enterprise Recommended', en: 'Android 15 · Android Enterprise Recommended' },
        display: '10.1"',
        rugged: { vi: 'IP66 · rơi 1,8 m', en: 'IP66 · 1.8 m drop' },
        weight: '906 g',
      },
      uses: { vi: ['Logistics & kho vận', 'Bảo trì đường sắt', 'Dịch vụ hiện trường'], en: ['Logistics & warehousing', 'Rail maintenance', 'Field service'] },
      metrics: { ip: 66, drop: 1.8, kg: 0.906 },
    },
    {
      id: 'g4826', brand: 'MiTAC', category: 'server', name: 'MiTAC G4826Z5', gen: '', featured: true,
      image: '../assets/img/products/mitac-g4826.webp',
      url: 'https://www.mitaccomputing.com/products/detail/g4826z5u2bc-355x-575?categoryId=1',
      tagline: { vi: 'Máy chủ AI 4U làm mát bằng chất lỏng với 8 GPU AMD Instinct™ MI355X.', en: '4U liquid-cooled AI server with 8× AMD Instinct™ MI355X GPUs.' },
      badges: ['4U', 'Liquid-cooled', '8× MI355X'],
      specs: {
        form: { vi: '4U, làm mát bằng chất lỏng', en: '4U, liquid-cooled' },
        gpu: '8× AMD Instinct™ MI355X',
      },
      uses: { vi: ['Huấn luyện mô hình AI', 'Suy luận LLM', 'Tính toán hiệu năng cao'], en: ['AI training', 'LLM inference', 'HPC'] },
      metrics: {},
    },
    {
      id: 'g4520', brand: 'MiTAC', category: 'server', name: 'MiTAC G4520G6', gen: '',
      image: '../assets/img/products/mitac-g4520.webp',
      url: 'https://www.mitaccomputing.com/products/detail/g4520g6e3bc-n?categoryId=1',
      tagline: { vi: 'Máy chủ GPU 4U nền tảng Intel® Xeon® 6, tới 8 GPU NVIDIA®.', en: '4U GPU server on Intel® Xeon® 6 with up to 8 NVIDIA® GPUs.' },
      badges: ['4U', 'Xeon 6', '8 GPU'],
      specs: {
        form: '4U',
        cpu: '2× Intel® Xeon® 6',
        gpu: { vi: 'Tới 8 GPU NVIDIA® (L40S, H200 NVL, RTX PRO™ 6000 Blackwell)', en: 'Up to 8 NVIDIA® GPUs (L40S, H200 NVL, RTX PRO™ 6000 Blackwell)' },
        memory: { vi: 'Tới 8 TB', en: 'Up to 8 TB' },
      },
      uses: { vi: ['AI doanh nghiệp', 'Phân tích video', 'Mô phỏng & render'], en: ['Enterprise AI', 'Video analytics', 'Simulation & rendering'] },
      metrics: {},
    },
    {
      id: 'r2520', brand: 'MiTAC', category: 'server', name: 'MiTAC R2520G6', gen: '',
      image: '../assets/img/products/mitac-r2520.webp',
      url: 'https://www.mitaccomputing.com/products/detail/r2520g6u2bc?categoryId=4',
      tagline: { vi: 'Máy chủ doanh nghiệp 2U, 24 ổ NVMe cho ảo hóa và cơ sở dữ liệu.', en: '2U enterprise server with 24 NVMe bays for virtualisation and databases.' },
      badges: ['2U', 'Xeon 6', '24× NVMe'],
      specs: {
        form: '2U',
        cpu: '2× Intel® Xeon® 6',
        memory: { vi: '32 khe DIMM', en: '32 DIMM slots' },
        storage: { vi: '24 ổ NVMe', en: '24 NVMe bays' },
      },
      uses: { vi: ['Ảo hóa', 'Cơ sở dữ liệu', 'Lưu trữ tốc độ cao'], en: ['Virtualisation', 'Databases', 'High-speed storage'] },
      metrics: {},
    },
    {
      // XÁC NHẬN: Aowanda là dòng cũ, không còn trên catalog MiTAC — GRCVN còn bán không?
      id: 'aowanda', brand: 'MiTAC', category: 'server', name: 'MiTAC Aowanda AD211', gen: '',
      image: '../assets/img/products/mitac-aowanda.webp',
      url: 'https://www.opencompute.org/marketplace/it-infrastructure/mitac-aowanda-multi-node-edge-server/',
      tagline: { vi: 'Máy chủ biên 2U, 3 node chuẩn OCP cho 5G vRAN và MEC.', en: '2U three-node OCP edge server for 5G vRAN and MEC.' },
      badges: ['Edge', 'NEBS', 'OCP'],
      specs: {
        form: { vi: '2U, 3 node · chuẩn OCP Open Edge', en: '2U, 3 nodes · OCP Open Edge' },
        cpu: { vi: 'Intel® Xeon® Scalable thế hệ 3', en: '3rd Gen Intel® Xeon® Scalable' },
        rugged: { vi: 'Sâu 430 mm, đạt chuẩn NEBS cho tủ viễn thông', en: '430 mm deep, NEBS-compliant for telecom racks' },
        network: { vi: 'Nguồn AC hoặc -48 VDC, dự phòng 1+1', en: 'AC or -48 VDC power, 1+1 redundant' },
      },
      uses: { vi: ['5G vRAN CU/DU', 'Điện toán biên (MEC)', 'AI tại trạm'], en: ['5G vRAN CU/DU', 'Multi-access edge (MEC)', 'AI at the cell site'] },
      metrics: {},
    },
  ],

  ui: {
    navAbout: { vi: 'Giới thiệu', en: 'About' },
    navSolutions: { vi: 'Giải pháp', en: 'Solutions' },
    navProducts: { vi: 'Sản phẩm', en: 'Products' },
    navSectors: { vi: 'Lĩnh vực', en: 'Industries' },
    navServices: { vi: 'Dịch vụ', en: 'Services' },
    navContact: { vi: 'Liên hệ', en: 'Contact' },
    getQuote: { vi: 'Nhận báo giá', en: 'Get a quote' },
    explore: { vi: 'Xem sản phẩm', en: 'Explore products' },
    talk: { vi: 'Trao đổi với kỹ sư', en: 'Talk to an engineer' },
    all: { vi: 'Tất cả', en: 'All' },
    details: { vi: 'Xem chi tiết', en: 'View details' },
    quoteThis: { vi: 'Báo giá sản phẩm này', en: 'Quote this product' },
    quoteFor: { vi: 'Tôi muốn nhận báo giá cho', en: 'I would like a quote for' },
    keySpecs: { vi: 'Thông số chính', en: 'Key specifications' },
    useCases: { vi: 'Phù hợp cho', en: 'Built for' },
    datasheet: { vi: 'Trang sản phẩm chính hãng', en: 'Official product page' },
    close: { vi: 'Đóng', en: 'Close' },
    usedIn: { vi: 'Thiết bị tiêu biểu', en: 'Typical devices' },
    whyTitle: { vi: 'Vì sao chọn thiết bị siêu bền?', en: 'Why rugged?' },
    servicesTitle: { vi: 'Từ tư vấn đến bảo hành', en: 'From first call to warranty' },
    sectorsTitle: { vi: 'Lĩnh vực ứng dụng', en: 'Industries we serve' },
    productsTitle: { vi: 'Sản phẩm tiêu biểu', en: 'Featured products' },
    solutionsTitle: { vi: 'Hai mảng giải pháp', en: 'Two solution lines' },
    contactTitle: { vi: 'Nhận tư vấn cấu hình & báo giá', en: 'Get a configuration and a quote' },
    contactLead: { vi: 'Cho chúng tôi biết môi trường làm việc và số lượng dự kiến — kỹ sư của GRC VN sẽ phản hồi trong 1 ngày làm việc.', en: 'Tell us about the working environment and expected quantity — a GRC VN engineer will reply within one business day.' },
    fName: { vi: 'Họ và tên', en: 'Full name' },
    fCompany: { vi: 'Công ty / Đơn vị', en: 'Company / Organisation' },
    fPhone: { vi: 'Số điện thoại', en: 'Phone' },
    fEmail: { vi: 'Email công ty', en: 'Work email' },
    fInterest: { vi: 'Giải pháp quan tâm', en: 'Interested in' },
    fChoose: { vi: 'Chọn giải pháp', en: 'Choose one' },
    fMessage: { vi: 'Nhu cầu của bạn', en: 'Your requirements' },
    fMessageHint: { vi: 'Ví dụ: 20 máy tính bảng cho đội bảo trì đường dây, cần 4G và đầu đọc mã vạch.', en: 'E.g. 20 tablets for a line-maintenance crew, with 4G and a barcode reader.' },
    fConsent: { vi: 'Tôi đồng ý để GRC VN sử dụng thông tin trên nhằm liên hệ tư vấn, theo quy định về bảo vệ dữ liệu cá nhân.', en: 'I agree that GRC VN may use this information to contact me, in line with personal-data protection rules.' },
    submit: { vi: 'Gửi yêu cầu', en: 'Send request' },
    sending: { vi: 'Đang gửi…', en: 'Sending…' },
    sent: { vi: 'Đã nhận yêu cầu. Chúng tôi sẽ liên hệ lại sớm.', en: 'Request received. We will be in touch shortly.' },
    demoNote: { vi: '(Bản demo: chưa gửi email thật.)', en: '(Demo: no email was actually sent.)' },
    sendFail: { vi: 'Chưa gửi được. Vui lòng gọi', en: 'Could not send. Please call' },
    address: { vi: 'Địa chỉ', en: 'Address' },
    phone: { vi: 'Điện thoại', en: 'Phone' },
    email: { vi: 'Email', en: 'Email' },
    taxCode: { vi: 'Mã số thuế', en: 'Tax code' },
    call: { vi: 'Gọi', en: 'Call' },
    chatZalo: { vi: 'Chat Zalo', en: 'Chat on Zalo' },
    directions: { vi: 'Chỉ đường', en: 'Directions' },
    rights: { vi: 'Bảo lưu mọi quyền.', en: 'All rights reserved.' },
    trademarks: { vi: 'Getac, LumiBond và MiTAC là thương hiệu của các chủ sở hữu tương ứng.', en: 'Getac, LumiBond and MiTAC are trademarks of their respective owners.' },
    menu: { vi: 'Mở menu', en: 'Open menu' },
  },
};

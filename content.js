const siteContent = {
  vi: {
    nav: {
      home: 'Trang chủ',
      research: 'Nghiên cứu',
      people: 'Nhân sự',
      publications: 'Công bố',
      activities: 'Hoạt động',
      contact: 'Liên hệ'
    },
    common: {
      labName: 'Phòng Vật liệu Vô cơ',
      labShort: 'IML',
      affiliation: 'Viện Khoa học vật liệu',
      ctaResearch: 'Xem hướng nghiên cứu',
      ctaContact: 'Trao đổi hợp tác',
      sourceNote: 'Nội dung nền tham khảo từ trang công khai của Phòng Vật liệu vô cơ, Viện Khoa học vật liệu.'
    },
    home: {
      eyebrow: 'Vật liệu vô cơ • Đất hiếm • Xúc tác môi trường',
      title: 'Nghiên cứu vật liệu vô cơ chức năng cho năng lượng, môi trường và thiết bị thông minh.',
      lead: 'Chúng tôi tập trung vào chiết tách và làm sạch đất hiếm, thủy luyện thu hồi kim loại quý hiếm, vật liệu nano xử lý môi trường, công nghệ xử lý chất thải công nghiệp và phân tích đánh giá ô nhiễm.',
      aboutTitle: 'Kết nối tổng hợp vật liệu chính xác với hiệu năng ứng dụng thực tế.',
      aboutText: 'Dựa trên định hướng của Phòng Vật liệu vô cơ, Viện Khoa học vật liệu, chúng tôi phát triển các quy trình hóa học và công nghệ vật liệu phục vụ khai thác - làm sạch nguyên tố đất hiếm, thu hồi kim loại quý hiếm, chế tạo vật liệu nano xử lý nước/không khí, xử lý chất thải công nghiệp và đánh giá ô nhiễm môi trường.',
      programsTitle: 'Các hướng nghiên cứu chính',
      capabilitiesTitle: 'Năng lực nghiên cứu và hợp tác',
      outputsTitle: 'Kết quả và hoạt động nổi bật',
      collaborationTitle: 'Mang tới cho chúng tôi một bài toán vật liệu.',
      collaborationText: 'Phòng sẵn sàng hợp tác nghiên cứu, đồng hướng dẫn sinh viên, phát triển đề tài chung, thử nghiệm vật liệu và tư vấn giải pháp công nghệ.'
    },
    research: {
      title: 'Hướng nghiên cứu',
      lead: 'Từ tổng hợp vật liệu đến cấu trúc, tính chất và ứng dụng.',
      intro: 'Các chương trình nghiên cứu tập trung vào đất hiếm, thủy luyện kim loại quý hiếm, vật liệu nano xử lý môi trường, công nghệ xử lý chất thải công nghiệp và phân tích đánh giá ô nhiễm.'
    },
    people: {
      title: 'Nhân sự',
      lead: 'Một nhóm nghiên cứu mở, tập trung vào thí nghiệm cẩn trọng và hợp tác liên ngành.',
      intro: 'Thay thế các thẻ mẫu bằng thông tin trưởng phòng, cán bộ nghiên cứu, nghiên cứu sinh, học viên và sinh viên đang tham gia đề tài.'
    },
    publications: {
      title: 'Công bố khoa học',
      lead: 'Danh sách bài báo, bằng sáng chế và sở hữu trí tuệ có thể cập nhật định kỳ.',
      intro: 'Các mục dưới đây là dữ liệu thật đã được chọn lọc từ CV của anh và chuẩn bị cho website.'
    },
    activities: {
      title: 'Hoạt động',
      lead: 'Tin tức, seminar, hợp tác, đào tạo và hoạt động học thuật của phòng.',
      intro: 'Cấu trúc dạng thẻ tin giống phong cách các trang viện/phòng: ảnh đại diện, nhãn chuyên mục, ngày tháng và mô tả ngắn.'
    },
    contact: {
      title: 'Liên hệ',
      lead: 'Kết nối để hợp tác nghiên cứu, đào tạo và chuyển giao vật liệu vô cơ.',
      intro: 'Gửi thông tin đề tài, nhu cầu phân tích hoặc ý tưởng hợp tác để phòng phản hồi và trao đổi hướng triển khai phù hợp.',
      email: 'nhiemdn@ims.vast.ac.vn',
      address: '406B2, 18 Hoàng Quốc Việt, Nghĩa Đô, Hà Nội',
      mapsUrl: 'https://maps.app.goo.gl/9ETvBbCDyM5J5xkx8',
      mapsLabel: 'Mở bằng Google Maps',
      head: { name: 'PGS.TS. Đào Ngọc Nhiệm', title: 'Trưởng phòng', office: 'Phòng 406, nhà B2', phone: '0915417696', email: 'nhiemdn@ims.vast.ac.vn', links: [ { label: 'ORCID', url: 'https://orcid.org/0000-0002-7769-3701' }, { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Ngoc-Dao-2' } ] },
      hours: 'Thứ Hai - Thứ Sáu, 08:00 - 17:00'
    },
    researchItems: [
      { slug: 'rare-earths', title: 'Chiết tách, phân chia và ứng dụng đất hiếm', text: 'Từ khoáng xenotime/monazit đến hợp chất đất hiếm, phân bón vi lượng, vật liệu hấp phụ và xúc tác chứa Ce/La.', url: 'research-detail.html?topic=rare-earths' },
      { slug: 'hydrometallurgy', title: 'Thủy luyện và thu hồi kim loại quý hiếm', text: 'Phát triển quy trình chế biến quặng, thu hồi antimony và tách các dòng kim loại có giá trị từ nguồn sơ cấp và thứ cấp.', url: 'research-detail.html?topic=hydrometallurgy' },
      { slug: 'environmental-nanomaterials', title: 'Vật liệu nano xử lý môi trường', text: 'Thiết kế vật liệu BiVO4, ZnO, ferrite, GO/g-C3N4 và oxide hỗn hợp cho quang xúc tác, hấp phụ và phân hủy chất ô nhiễm.', url: 'research-detail.html?topic=environmental-nanomaterials' },
      { slug: 'pollution-assessment', title: 'Đánh giá ô nhiễm vi nhựa, kim loại nặng và rác biển', text: 'Khảo sát trầm tích sông, đầm phá, bãi biển và mối liên hệ giữa vi nhựa, kim loại vết và nguồn phát thải.', url: 'research-detail.html?topic=pollution-assessment' },
      { slug: 'porous-materials', title: 'Vật liệu xốp và hấp phụ khí/môi trường', text: 'Biến tính khung UiO-66(Zr), oxide đất hiếm và vật liệu vô cơ xốp cho hấp phụ CO2, arsenite, phosphate và xử lý nước.', url: 'research-detail.html?topic=porous-materials' }
    ],

    researchDetails: {
      'rare-earths': { title: 'Chiết tách, phân chia và ứng dụng đất hiếm', lead: 'Khai thác giá trị của khoáng đất hiếm Việt Nam bằng quy trình hóa học và vật liệu chức năng.', studies: ['Chế biến khoáng vật xenotime và quặng monazit.', 'Sản xuất phức đất hiếm cho phân bón lá bổ sung vi lượng nano.', 'Vật liệu La2O3/CeO2 cho hấp phụ arsenite, phosphate và xúc tác môi trường.', 'Vật liệu Ce-doped ZnO, C/Ce-co-doped ZnO/graphene cho quang xúc tác.'], outputs: ['VN Patent No. 44433 (2025): Phương pháp chế biến khoáng vật xenotime.', 'VN Patent No. 52319 (2025): Process of manufacturing foliar fertilizer based on rare earth complexes supplemented with nano micronutrients.', 'VN Patent No. 41857 (2024): Quy trình chế biến quặng monazit.', 'Luu et al. (2026), Inorganic Chemistry Communications, DOI: 10.1016/j.inoche.2026.116329.', 'Nguyen et al. (2021), La2O3 nanoparticles for arsenite and phosphate removal.'] },
      'hydrometallurgy': { title: 'Thủy luyện và thu hồi kim loại quý hiếm', lead: 'Tối ưu hóa các bước hòa tách, phân chia, kết tủa và thu hồi kim loại từ quặng và nguồn thứ cấp.', studies: ['Thu hồi xenotime từ quặng giàu sắt-silicate.', 'Chế biến monazit theo hướng tách đất hiếm và giảm tạp.', 'Thu hồi antimony từ nguồn chứa antimony.', 'Kết nối thủy luyện với đánh giá môi trường và tận dụng phụ phẩm.'], outputs: ['VN Patent No. 23004 (2019): Process of recovering antimony from antimony sources.', 'A beneficiation study to recover xenotime minerals from rich-iron-silicate ores, DOI: 10.1002/cjce.25038.', 'VN Patent No. 44433 (2025) và VN Patent No. 41857 (2024).'] },
      'environmental-nanomaterials': { title: 'Vật liệu nano xử lý môi trường', lead: 'Thiết kế vật liệu vô cơ có thể thu hồi, bền và hoạt động dưới ánh sáng khả kiến/mặt trời.', studies: ['BiVO4, BiTaO4 và BiFeO3 cho phân hủy thuốc nhuộm/kháng sinh.', 'MnFe2O4/activated carbon và ferrite từ tính cho chất ô nhiễm bền.', 'ZnO đồng pha tạp Ta/C, Ce/C và tổ hợp GO/g-C3N4.', 'Oxide hỗn hợp CeO2-Fe2O3 cho oxy hóa CO nhiệt độ thấp.'], outputs: ['Nguyen et al. (2025), Powder Technology, DOI: 10.1016/j.powtec.2025.120650.', 'Kien et al. (2026), RSC Advances, DOI: 10.1039/d6ra00405a.', 'Le et al. (2024), Materials Research Bulletin, DOI: 10.1016/j.materresbull.2024.112913.', 'Luu et al. (2025), Nanoscale Advances, DOI: 10.1039/d5na00060b.', 'Luu et al. (2024), RSC Advances, DOI: 10.1039/d4ra00579a.'] },
      'pollution-assessment': { title: 'Đánh giá ô nhiễm vi nhựa, kim loại nặng và rác biển', lead: 'Kết hợp khảo sát thực địa, phân tích hóa học và đánh giá nguồn phát thải để hỗ trợ giải pháp quản lý môi trường.', studies: ['Vi nhựa và kim loại vết trong trầm tích sông.', 'Tương quan vi nhựa - kim loại nặng trong trầm tích đầm phá Tam Giang - Cầu Hai.', 'Rác biển theo mùa trên bãi biển miền Trung Việt Nam.', 'Rác nhựa tại bãi cát và nước mặt Thanh Hóa.'], outputs: ['Nguyen et al. (2023), Science of The Total Environment, DOI: 10.1016/j.scitotenv.2023.165145.', 'Duong et al. (2026), Marine Pollution Bulletin, DOI: 10.1016/j.marpolbul.2025.119106.', 'Duong et al. (2025), Marine Pollution Bulletin, DOI: 10.1016/j.marpolbul.2025.118046.', 'Dao et al. (2023), Environmental Monitoring and Assessment, DOI: 10.1007/s10661-022-10868-1.'] },
      'porous-materials': { title: 'Vật liệu xốp và hấp phụ khí/môi trường', lead: 'Biến tính bề mặt và khuyết tật trong vật liệu xốp để tăng chọn lọc hấp phụ và hiệu quả xử lý.', studies: ['UiO-66(Zr) khuyết tật giữ ethylenediamine cho hấp phụ CO2.', 'Oxide đất hiếm La2O3 và La2O3-CeO2 cho loại bỏ arsenite/phosphate.', 'Vật liệu hấp phụ và xúc tác có tâm hoạt tính oxide kim loại.', 'Kết nối hấp phụ - xúc tác trong xử lý nước và khí.'], outputs: ['Pham et al. (2023), Inorganic Chemistry Communications, DOI: 10.1016/j.inoche.2023.111476.', 'Nguyen et al. (2021), Desalination and Water Treatment, DOI: 10.5004/dwt.2021.27818.', 'Nhiem et al. (2021), Journal of Polymers and the Environment, DOI: 10.1007/s10924-020-01967-6.'] }
    },
    capabilities: [
      ['Tổng hợp', 'Sol-gel, thủy nhiệt, đồng kết tủa, phản ứng pha rắn, nung kết và xử lý nhiệt.'],
      ['Đặc trưng', 'Phân tích cấu trúc, hình thái, phổ dao động, phổ quang, bề mặt riêng và tính chất nhiệt.'],
      ['Thử nghiệm', 'Đánh giá xúc tác, chu kỳ ổn định, đáp ứng cảm biến, tính chất điện hóa và điều kiện mô phỏng ứng dụng.'],
      ['Hợp tác', 'Tư vấn vật liệu, đề tài chung, đào tạo sinh viên, kết nối công nghiệp và công bố khoa học.']
    ],
    peopleList: [
      { section: 'Head of the laboratory', members: [
        { name: 'PGS.TS. Đào Ngọc Nhiệm', role: 'Trưởng phòng', focus: 'Chiết tách và làm sạch đất hiếm, thủy luyện, thu hồi kim loại quý hiếm và công nghệ xử lý môi trường', email: 'nhiemdn@ims.vast.ac.vn', photo: '../assets/dao-ngoc-nhiem.jpg', links: [ { label: 'ORCID', url: 'https://orcid.org/0000-0002-7769-3701' }, { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Ngoc-Dao-2' } ] }
      ] },
      { section: 'Researchers', members: [
        { name: 'Dr. Quang-Bac Nguyen', role: 'Senior Researcher', focus: 'Chiết tách đất hiếm, thủy luyện kim loại quý hiếm, vật liệu nano và xử lý môi trường', email: 'bacnq@ims.vast.ac.vn', photo: '../assets/quang-bac-nguyen.jpg', links: [ { label: 'ORCID', url: 'https://orcid.org/0000-0003-2663-9710' }, { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=WQXpT18AAAAJ&hl=en' }, { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Quang-Bac-Nguyen?ev=hdr_xprf' } ] },
        { name: 'TS. Phạm Ngọc Chức', role: 'Nhân viên biên chế', focus: 'Phòng 408, nhà B2. Hướng nghiên cứu sẽ được cập nhật.', email: 'chucpn@ims.vast.ac.vn', photo: '../assets/environment-catalysis.svg', links: [ { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Chuc-Pham' } ] },
        { name: 'TS. Nguyễn Trung Kiên', role: 'Nhân viên biên chế', focus: 'Phòng 408, nhà B2. Hướng nghiên cứu sẽ được cập nhật.', email: 'ntkien@ims.vast.ac.vn', photo: '../assets/research-fields.svg', links: [ { label: 'ORCID', url: 'https://orcid.org/0000-0001-5213-3882' }, { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Kien-Nguyen-120' } ] },
        { name: 'ThS. Nguyễn Thị Hà Chi', role: 'Nhân viên biên chế', focus: 'Phòng 406, nhà B2. Hướng nghiên cứu sẽ được cập nhật.', email: 'chinth@ims.vast.ac.vn', photo: '../assets/rare-earth-catalyst.svg', links: [ { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Chi-Nguyen-94' } ] },
        { name: 'ThS. Nguyễn Đỗ Huy Tuấn', role: 'Nhân viên biên chế', focus: 'Phòng 408, nhà B2. Hướng nghiên cứu sẽ được cập nhật.', email: 'tuanndh@ims.vast.ac.vn', photo: '../assets/environment-catalysis.svg', links: [] },
        { name: 'ThS. Nguyễn Trần Dũng', role: 'Nhân viên biên chế', focus: 'Phòng 408, nhà B2. Hướng nghiên cứu sẽ được cập nhật.', email: 'dungnt@ims.vast.ac.vn', photo: '../assets/research-fields.svg', links: [] }
      ] },
      { section: 'Collaborators', members: [
        { name: 'TS. Dương Thị Lịm', role: 'Collaborator', focus: 'Giám đốc Trung tâm Phân tích Tổng hợp', email: 'duonglim79@gmail.com', photo: '../assets/duong-thi-lim.jpg', links: [ { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Duong-Lim' } ] },
        { name: 'TS. Nguyễn Vũ Ngọc Mai', role: 'Collaborator', focus: 'Faculty of Natural Science, Quy Nhon University, 170 An Duong Vuong Street, QuyNhon Nam Ward, Gia Lai 610000, Vietnam', email: 'nguyenvungocmai@qnu.edu.vn', photo: '../assets/nguyen-vu-ngoc-mai.jpg', links: [ { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Nguyen-Mai-14?ev=brs_overview' } ] },
        { name: 'TS. Lưu Thị Việt Hà', role: 'Collaborator', focus: 'Faculty of Chemical Engineering, Industrial University of Ho Chi Minh City, Ho Chi Minh 700000, Vietnam', email: 'luuthivietha@iuh.edu.vn', photo: '../assets/environment-catalysis.svg', links: [ { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Luu-Thi-Viet-Ha-2?ev=brs_overview' } ] },
        { name: 'Prof. Hiroshi Inoue', role: 'Collaborator', focus: 'Department of Applied Chemistry, Graduate School of Engineering, Osaka Metropolitan University', email: 'inoue-chem@omu.ac.jp', photo: '../assets/hiroshi-inoue.jpg', links: [ { label: 'ORCID', url: 'https://orcid.org/0000-0003-3811-6853' }, { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Hiroshi-Inoue' } ] },
        { name: 'TS. Phạm Ngô Nghĩa', role: 'Collaborator', focus: 'Witten/Herdecke University, Germany', photo: '../assets/research-fields.svg', links: [] }
      ] },
      { section: 'Students', members: [
        { name: 'Học viên & sinh viên', role: 'Graduate students', focus: 'Đề tài đất hiếm, thủy luyện, vật liệu nano môi trường và xử lý chất thải', photo: '../assets/research-fields.svg', links: [] }
      ] },
      { section: 'Former Members', members: [
        { name: 'Viện sĩ Đặng Vũ Minh', role: 'Former member', focus: 'Giáo sư, nhà hóa học Việt Nam, Tiến sĩ Khoa học, Viện sĩ nước ngoài của Viện Hàn lâm Khoa học Nga; nguyên Chủ tịch Viện Khoa học và Công nghệ Việt Nam; nguyên Ủy viên Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam; nguyên Chủ nhiệm Ủy ban Khoa học, Công nghệ và Môi trường của Quốc hội Việt Nam.', photo: '../assets/dang-vu-minh.jpg', links: [ { label: 'Wikipedia', url: 'https://vi.wikipedia.org/wiki/%C4%90%E1%BA%B7ng_V%C5%A9_Minh' } ] },
        { name: 'PGS.TS. Lưu Minh Đại', role: 'Nguyên Trưởng phòng Vật liệu Vô cơ', focus: 'Nhà khoa học gắn bó với Phòng Vật liệu Vô cơ, từng giữ vai trò Trưởng phòng và đóng góp vào định hướng nghiên cứu, đào tạo và phát triển chuyên môn của phòng.', photo: '../assets/luu-minh-dai.jpg', links: [] }
      ] }
    ],
    publicationList: [
      { type: 'section', title: 'Bài báo tiêu biểu' },
      { year: '2026', title: 'Decoration of MnFe2O4 nanoparticles on activated carbon as recoverable photocatalyst for perfluorooctanesulfonic acid degradation in water', url: 'https://doi.org/10.1039/d6ra00405a', meta: 'RSC Advances, 16(18). Q1, Impact Factor = 3.9.' },
      { year: '2026', title: 'Microwave-assisted synthesis of recoverable Fe2O3/Ce-doped ZnO/graphene oxide ternary photocatalyst for efficient solar-light-driven mineralization of organic dye in water', url: 'https://doi.org/10.1016/j.inoche.2026.116329', meta: 'Inorganic Chemistry Communications, p.116329. Q1, Impact Factor = 5.4.' },
      { year: '2026', title: 'Relationship between microplastics and heavy metals in Tam Giang-Cau Hai lagoon sediments', url: 'https://doi.org/10.1016/j.marpolbul.2025.119106', meta: 'Marine Pollution Bulletin, 224. Q1, Impact Factor = 4.9.' },
      { year: '2025', title: 'Microwave-assisted synthesis of self-assembled C-doped-ZnO/g-C3N4 heterojunction catalysts for effective photodegradation of ofloxacin antibiotic', url: 'https://doi.org/10.1039/d5na00060b', meta: 'Nanoscale Advances, 7(10). Q1, Impact Factor = 4.7.' },
      { year: '2025', title: 'Synthesis of monoclinic clinobisvanite BiVO4 for effective visible-light degradation of antibiotics in water: Photocatalytic performance, reaction kinetics, and mechanism', url: 'https://doi.org/10.1016/j.powtec.2025.120650', meta: 'Powder Technology, 453. Q1, Impact Factor = 5.18.' },
      { year: '2024', title: 'Enhanced photocatalytic performance of ZnO under visible light by co-doping of Ta and C using hydrothermal method', url: 'https://doi.org/10.1039/d4ra00579a', meta: 'RSC Advances, 14(18). Q1, Impact Factor = 3.9.' },
      { year: '2023', title: 'Microplastics and trace metals in river sediment: Prevalence and correlation with multiple factors', url: 'https://doi.org/10.1016/j.scitotenv.2023.165145', meta: 'Science of The Total Environment. Q1, Impact Factor = 9.8.' },
      { year: '2025', title: 'Abundance, distribution, and seasonal variation of marine litter on the beaches of central Vietnam', url: 'https://doi.org/10.1016/j.marpolbul.2025.118046', meta: 'Marine Pollution Bulletin, 216. Q1, Impact Factor = 4.9.' },
      { year: '2024', title: 'Efficient photocatalytic remediation of persistent organic pollutants using magnetically recoverable spinel manganese ferrite nanoparticles supported on activated carbon', url: 'https://doi.org/10.1016/j.materresbull.2024.112913', meta: 'Materials Research Bulletin, 178, p.112913. Impact Factor = 5.6.' },
      { year: '2023', title: 'Ethylenediamine-entrapped defective UiO-66(Zr) frameworks for improved CO2 adsorption and selectivity', url: 'https://doi.org/10.1016/j.inoche.2023.111476', meta: 'Inorganic Chemistry Communications, 158. Q1, Impact Factor = 3.8.' },
      { year: '2023', title: 'One-step hydrothermal preparation of Ta-doped ZnO nanorods for improving decolorization efficiency under visible light', url: 'https://doi.org/10.1039/d2ra07655a', meta: 'RSC Advances, 13(8), pp.5208-5218. Q1, Impact Factor = 4.0.' },
      { year: '2023', title: 'One-pot hydrothermal preparation of capsule-like nanocomposites of C/Ce-co-doped ZnO supported on graphene to enhance photodegradation', url: 'https://doi.org/10.1039/d2nj04937f', meta: 'New Journal of Chemistry. Q1, Impact Factor = 3.9.' },
      { type: 'section', title: 'Bằng sáng chế tiêu biểu' },
      { type: 'patent', year: '2025', title: 'Phương pháp chế biến khoáng vật xenotime', meta: 'Bằng độc quyền sáng chế số 44433.' },
      { type: 'patent', year: '2025', title: 'Process of manufacturing foliar fertilizer based on rare earth complexes supplemented with nano micronutrients', meta: 'VN Patent No. 52319.' },
      { type: 'patent', year: '2024', title: 'Quy trình chế biến quặng monazit', meta: 'Bằng độc quyền sáng chế số 41857.' },
      { type: 'patent', year: '2023', title: 'Phương pháp sản xuất phân bón hữu cơ vi lượng chứa Cu, Zn, Mo', meta: 'Bằng độc quyền sáng chế số 34960.' },
      { type: 'patent', year: '2019', title: 'Process of recovering antimony from antimony sources', meta: 'VN Patent No. 23004.' }
    ],
    activitiesList: [
      ['Seminar', 'Trao đổi học thuật về vật liệu đất hiếm phát quang', 'Cập nhật seminar nội bộ và khách mời trong lĩnh vực vật liệu vô cơ.'],
      ['Collaboration', 'Kết nối đề tài xúc tác xử lý môi trường', 'Phát triển hợp tác với các nhóm nghiên cứu và đối tác công nghiệp.'],
      ['Training', 'Hướng dẫn sinh viên về tổng hợp sol-gel và thủy nhiệt', 'Hoạt động đào tạo kỹ năng thí nghiệm, phân tích dữ liệu và viết báo cáo.']
    ]
  },
  en: {
    nav: { home: 'Home', research: 'Research', people: 'People', publications: 'Publications', activities: 'Activities', contact: 'Contact' },
    common: { labName: 'Inorganic Materials Laboratory', labShort: 'IML', affiliation: 'Institute of Materials Science', ctaResearch: 'Explore research', ctaContact: 'Start collaboration', sourceNote: 'Base content references public information from the Inorganic Materials Laboratory, Institute of Materials Science.' },
    home: { eyebrow: 'Inorganic materials • Rare earths • Environmental catalysis', title: 'Functional inorganic materials for energy, environment, and intelligent devices.', lead: 'We focus on rare-earth extraction and purification, hydrometallurgical recovery of valuable metals, nanomaterials for environmental treatment, industrial waste treatment technologies, and chemical pollution assessment.', aboutTitle: 'Connecting precise synthesis with application-level performance.', aboutText: 'Based on the research orientation of the Inorganic Materials Laboratory, Institute of Materials Science, the lab develops chemical and materials technologies for rare-earth purification, recovery of rare and valuable metals, nanomaterials for water/air treatment, industrial waste treatment, and environmental pollution assessment.', programsTitle: 'Core research directions', capabilitiesTitle: 'Research and collaboration capabilities', outputsTitle: 'Selected outputs and activities', collaborationTitle: 'Bring us a materials challenge.', collaborationText: 'We welcome joint research, student supervision, sponsored projects, materials testing, and technology-oriented consultation.' },
    research: { title: 'Research', lead: 'From materials synthesis to structure, properties, and applications.', intro: 'Our programs focus on rare-earth elements, hydrometallurgical recovery of valuable metals, nanomaterials for environmental treatment, industrial waste treatment, and chemical pollution assessment.' },
    people: { title: 'People', lead: 'An open research group built around careful experimentation and interdisciplinary collaboration.', intro: 'Replace these placeholder cards with the principal investigator, researchers, PhD students, graduate students, and active project members.' },
    publications: { title: 'Publications', lead: 'Journal papers, conferences, projects, and intellectual property can be updated regularly.', intro: 'The entries below are placeholders ready to be replaced with real publications.' },
    activities: { title: 'Activities', lead: 'News, seminars, collaborations, training, and academic activities of the lab.', intro: 'A card-based news structure with image, category, date, and short description.' },
    contact: { title: 'Contact', lead: 'Connect with us for research, training, and inorganic materials technology transfer.', intro: 'Send your project information, analysis request, or collaboration idea so the lab can respond with a suitable direction.', email: 'nhiemdn@ims.vast.ac.vn', address: '406B2, 18 Hoang Quoc Viet, Nghia Do, Ha Noi, Vietnam', mapsUrl: 'https://maps.app.goo.gl/9ETvBbCDyM5J5xkx8', mapsLabel: 'Open in Google Maps', head: { name: 'Assoc. Prof. Dr. Dao Ngoc Nhiem', title: 'Head of Laboratory', office: 'Room 406, Building B2', phone: '0915417696', email: 'nhiemdn@ims.vast.ac.vn', links: [ { label: 'ORCID', url: 'https://orcid.org/0000-0002-7769-3701' }, { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Ngoc-Dao-2' } ] }, hours: 'Monday - Friday, 08:00 - 17:00' },
    researchItems: [
      { slug: 'rare-earths', title: 'Rare-earth extraction, separation, and applications', text: 'From xenotime/monazite minerals to rare-earth compounds, micronutrient fertilizers, adsorbents, and Ce/La-based catalysts.', url: 'research-detail.html?topic=rare-earths' },
      { slug: 'hydrometallurgy', title: 'Hydrometallurgy and recovery of valuable metals', text: 'Developing ore-processing routes, antimony recovery, and separation of valuable metal streams from primary and secondary resources.', url: 'research-detail.html?topic=hydrometallurgy' },
      { slug: 'environmental-nanomaterials', title: 'Nanomaterials for environmental treatment', text: 'Designing BiVO4, ZnO, ferrite, GO/g-C3N4, and mixed oxide materials for photocatalysis, adsorption, and pollutant degradation.', url: 'research-detail.html?topic=environmental-nanomaterials' },
      { slug: 'pollution-assessment', title: 'Microplastics, heavy metals, and marine litter assessment', text: 'Field studies of river sediment, lagoons, beaches, and the relationship between microplastics, trace metals, and emission sources.', url: 'research-detail.html?topic=pollution-assessment' },
      { slug: 'porous-materials', title: 'Porous materials and adsorption for gas/environmental treatment', text: 'Functionalizing UiO-66(Zr), rare-earth oxides, and porous inorganic materials for CO2, arsenite, phosphate, and water treatment.', url: 'research-detail.html?topic=porous-materials' }
    ],

    researchDetails: {
      'rare-earths': { title: 'Rare-earth extraction, separation, and applications', lead: 'Unlocking the value of rare-earth minerals through chemical processing and functional materials.', studies: ['Chế biến khoáng vật xenotime và quặng monazit.', 'Sản xuất phức đất hiếm cho phân bón lá bổ sung vi lượng nano.', 'Vật liệu La2O3/CeO2 cho hấp phụ arsenite, phosphate và xúc tác môi trường.', 'Vật liệu Ce-doped ZnO, C/Ce-co-doped ZnO/graphene cho quang xúc tác.'], outputs: ['VN Patent No. 44433 (2025): Phương pháp chế biến khoáng vật xenotime.', 'VN Patent No. 52319 (2025): Process of manufacturing foliar fertilizer based on rare earth complexes supplemented with nano micronutrients.', 'VN Patent No. 41857 (2024): Quy trình chế biến quặng monazit.', 'Luu et al. (2026), Inorganic Chemistry Communications, DOI: 10.1016/j.inoche.2026.116329.', 'Nguyen et al. (2021), La2O3 nanoparticles for arsenite and phosphate removal.'] },
      'hydrometallurgy': { title: 'Thủy luyện và thu hồi kim loại quý hiếm', lead: 'Tối ưu hóa các bước hòa tách, phân chia, kết tủa và thu hồi kim loại từ quặng và nguồn thứ cấp.', studies: ['Thu hồi xenotime từ quặng giàu sắt-silicate.', 'Chế biến monazit theo hướng tách đất hiếm và giảm tạp.', 'Thu hồi antimony từ nguồn chứa antimony.', 'Kết nối thủy luyện với đánh giá môi trường và tận dụng phụ phẩm.'], outputs: ['VN Patent No. 23004 (2019): Process of recovering antimony from antimony sources.', 'A beneficiation study to recover xenotime minerals from rich-iron-silicate ores, DOI: 10.1002/cjce.25038.', 'VN Patent No. 44433 (2025) và VN Patent No. 41857 (2024).'] },
      'environmental-nanomaterials': { title: 'Vật liệu nano xử lý môi trường', lead: 'Thiết kế vật liệu vô cơ có thể thu hồi, bền và hoạt động dưới ánh sáng khả kiến/mặt trời.', studies: ['BiVO4, BiTaO4 và BiFeO3 cho phân hủy thuốc nhuộm/kháng sinh.', 'MnFe2O4/activated carbon và ferrite từ tính cho chất ô nhiễm bền.', 'ZnO đồng pha tạp Ta/C, Ce/C và tổ hợp GO/g-C3N4.', 'Oxide hỗn hợp CeO2-Fe2O3 cho oxy hóa CO nhiệt độ thấp.'], outputs: ['Nguyen et al. (2025), Powder Technology, DOI: 10.1016/j.powtec.2025.120650.', 'Kien et al. (2026), RSC Advances, DOI: 10.1039/d6ra00405a.', 'Le et al. (2024), Materials Research Bulletin, DOI: 10.1016/j.materresbull.2024.112913.', 'Luu et al. (2025), Nanoscale Advances, DOI: 10.1039/d5na00060b.', 'Luu et al. (2024), RSC Advances, DOI: 10.1039/d4ra00579a.'] },
      'pollution-assessment': { title: 'Đánh giá ô nhiễm vi nhựa, kim loại nặng và rác biển', lead: 'Kết hợp khảo sát thực địa, phân tích hóa học và đánh giá nguồn phát thải để hỗ trợ giải pháp quản lý môi trường.', studies: ['Vi nhựa và kim loại vết trong trầm tích sông.', 'Tương quan vi nhựa - kim loại nặng trong trầm tích đầm phá Tam Giang - Cầu Hai.', 'Rác biển theo mùa trên bãi biển miền Trung Việt Nam.', 'Rác nhựa tại bãi cát và nước mặt Thanh Hóa.'], outputs: ['Nguyen et al. (2023), Science of The Total Environment, DOI: 10.1016/j.scitotenv.2023.165145.', 'Duong et al. (2026), Marine Pollution Bulletin, DOI: 10.1016/j.marpolbul.2025.119106.', 'Duong et al. (2025), Marine Pollution Bulletin, DOI: 10.1016/j.marpolbul.2025.118046.', 'Dao et al. (2023), Environmental Monitoring and Assessment, DOI: 10.1007/s10661-022-10868-1.'] },
      'porous-materials': { title: 'Vật liệu xốp và hấp phụ khí/môi trường', lead: 'Biến tính bề mặt và khuyết tật trong vật liệu xốp để tăng chọn lọc hấp phụ và hiệu quả xử lý.', studies: ['UiO-66(Zr) khuyết tật giữ ethylenediamine cho hấp phụ CO2.', 'Oxide đất hiếm La2O3 và La2O3-CeO2 cho loại bỏ arsenite/phosphate.', 'Vật liệu hấp phụ và xúc tác có tâm hoạt tính oxide kim loại.', 'Kết nối hấp phụ - xúc tác trong xử lý nước và khí.'], outputs: ['Pham et al. (2023), Inorganic Chemistry Communications, DOI: 10.1016/j.inoche.2023.111476.', 'Nguyen et al. (2021), Desalination and Water Treatment, DOI: 10.5004/dwt.2021.27818.', 'Nhiem et al. (2021), Journal of Polymers and the Environment, DOI: 10.1007/s10924-020-01967-6.'] }
    },
    capabilities: [
      ['Synthesis', 'Sol-gel, hydrothermal, co-precipitation, solid-state reaction, sintering, and thermal treatment.'],
      ['Characterization', 'Structure, morphology, vibrational spectra, optical spectra, surface area, and thermal properties.'],
      ['Testing', 'Catalytic activity, stability cycles, sensing response, electrochemical behavior, and application-like conditions.'],
      ['Collaboration', 'Materials consultation, joint projects, student training, industrial links, and scientific publications.']
    ],
    peopleList: [
      { section: 'Head of the laboratory', members: [
        { name: 'Assoc. Prof. Dr. Dao Ngoc Nhiem', role: 'Head of Laboratory', focus: 'Rare-earth extraction and purification, hydrometallurgy, recovery of valuable metals, and environmental treatment technologies', email: 'nhiemdn@ims.vast.ac.vn', photo: '../assets/dao-ngoc-nhiem.jpg', links: [ { label: 'ORCID', url: 'https://orcid.org/0000-0002-7769-3701' }, { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Ngoc-Dao-2' } ] }
      ] },
      { section: 'Researchers', members: [
        { name: 'Dr. Quang-Bac Nguyen', role: 'Senior Researcher', focus: 'Rare-earth extraction, hydrometallurgy of valuable metals, nanomaterials, and environmental treatment', email: 'bacnq@ims.vast.ac.vn', photo: '../assets/quang-bac-nguyen.jpg', links: [ { label: 'ORCID', url: 'https://orcid.org/0000-0003-2663-9710' }, { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=WQXpT18AAAAJ&hl=en' }, { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Quang-Bac-Nguyen?ev=hdr_xprf' } ] },
        { name: 'Dr. Pham Ngoc Chuc', role: 'Research staff', focus: 'Office 408, Building B2. Research details will be updated.', email: 'chucpn@ims.vast.ac.vn', photo: '../assets/environment-catalysis.svg', links: [ { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Chuc-Pham' } ] },
        { name: 'Dr. Nguyen Trung Kien', role: 'Research staff', focus: 'Office 408, Building B2. Research details will be updated.', email: 'ntkien@ims.vast.ac.vn', photo: '../assets/research-fields.svg', links: [ { label: 'ORCID', url: 'https://orcid.org/0000-0001-5213-3882' }, { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Kien-Nguyen-120' } ] },
        { name: 'MSc. Nguyen Thi Ha Chi', role: 'Research staff', focus: 'Office 406, Building B2. Research details will be updated.', email: 'chinth@ims.vast.ac.vn', photo: '../assets/rare-earth-catalyst.svg', links: [ { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Chi-Nguyen-94' } ] },
        { name: 'MSc. Nguyen Do Huy Tuan', role: 'Research staff', focus: 'Office 408, Building B2. Research details will be updated.', email: 'tuanndh@ims.vast.ac.vn', photo: '../assets/environment-catalysis.svg', links: [] },
        { name: 'MSc. Nguyen Tran Dung', role: 'Research staff', focus: 'Office 408, Building B2. Research details will be updated.', email: 'dungnt@ims.vast.ac.vn', photo: '../assets/research-fields.svg', links: [] }
      ] },
      { section: 'Collaborators', members: [
        { name: 'Dr. Duong Thi Lim', role: 'Collaborator', focus: 'Director of the Center for Analytical and Synthetic Services', email: 'duonglim79@gmail.com', photo: '../assets/duong-thi-lim.jpg', links: [ { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Duong-Lim' } ] },
        { name: 'Dr. Nguyen Vu Ngoc Mai', role: 'Collaborator', focus: 'Faculty of Natural Science, Quy Nhon University, 170 An Duong Vuong Street, QuyNhon Nam Ward, Gia Lai 610000, Vietnam', email: 'nguyenvungocmai@qnu.edu.vn', photo: '../assets/nguyen-vu-ngoc-mai.jpg', links: [ { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Nguyen-Mai-14?ev=brs_overview' } ] },
        { name: 'Dr. Luu Thi Viet Ha', role: 'Collaborator', focus: 'Faculty of Chemical Engineering, Industrial University of Ho Chi Minh City, Ho Chi Minh 700000, Vietnam', email: 'luuthivietha@iuh.edu.vn', photo: '../assets/environment-catalysis.svg', links: [ { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Luu-Thi-Viet-Ha-2?ev=brs_overview' } ] },
        { name: 'Prof. Hiroshi Inoue', role: 'Collaborator', focus: 'Department of Applied Chemistry, Graduate School of Engineering, Osaka Metropolitan University', email: 'inoue-chem@omu.ac.jp', photo: '../assets/hiroshi-inoue.jpg', links: [ { label: 'ORCID', url: 'https://orcid.org/0000-0003-3811-6853' }, { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Hiroshi-Inoue' } ] },
        { name: 'Dr. Pham Ngo Nghia', role: 'Collaborator', focus: 'Witten/Herdecke University, Germany', photo: '../assets/research-fields.svg', links: [] }
      ] },
      { section: 'Students', members: [
        { name: 'Graduate Students', role: 'Students', focus: 'Rare earths, hydrometallurgy, environmental nanomaterials, and waste treatment projects', photo: '../assets/research-fields.svg', links: [] }
      ] },
      { section: 'Former Members', members: [
        { name: 'Academician Dang Vu Minh', role: 'Former member', focus: 'Vietnamese professor and chemist, Doctor of Science, foreign member of the Russian Academy of Sciences; former President of the Vietnam Academy of Science and Technology; former member of the Central Committee of the Communist Party of Vietnam; former Chair of the National Assembly Committee on Science, Technology and Environment.', photo: '../assets/dang-vu-minh.jpg', links: [ { label: 'Wikipedia', url: 'https://vi.wikipedia.org/wiki/%C4%90%E1%BA%B7ng_V%C5%A9_Minh' } ] },
        { name: 'Assoc. Prof. Dr. Luu Minh Dai', role: 'Former Head of the Inorganic Materials Laboratory', focus: 'A scientist associated with the Inorganic Materials Laboratory, formerly serving as Head of Laboratory and contributing to its research direction, training activities, and professional development.', photo: '../assets/luu-minh-dai.jpg', links: [] }
      ] }
    ],
    publicationList: [
      { type: 'section', title: 'Selected Papers' },
      { year: '2026', title: 'Decoration of MnFe2O4 nanoparticles on activated carbon as recoverable photocatalyst for perfluorooctanesulfonic acid degradation in water', url: 'https://doi.org/10.1039/d6ra00405a', meta: 'RSC Advances, 16(18). Q1, Impact Factor = 3.9.' },
      { year: '2026', title: 'Microwave-assisted synthesis of recoverable Fe2O3/Ce-doped ZnO/graphene oxide ternary photocatalyst for efficient solar-light-driven mineralization of organic dye in water', url: 'https://doi.org/10.1016/j.inoche.2026.116329', meta: 'Inorganic Chemistry Communications, p.116329. Q1, Impact Factor = 5.4.' },
      { year: '2026', title: 'Relationship between microplastics and heavy metals in Tam Giang-Cau Hai lagoon sediments', url: 'https://doi.org/10.1016/j.marpolbul.2025.119106', meta: 'Marine Pollution Bulletin, 224. Q1, Impact Factor = 4.9.' },
      { year: '2025', title: 'Microwave-assisted synthesis of self-assembled C-doped-ZnO/g-C3N4 heterojunction catalysts for effective photodegradation of ofloxacin antibiotic', url: 'https://doi.org/10.1039/d5na00060b', meta: 'Nanoscale Advances, 7(10). Q1, Impact Factor = 4.7.' },
      { year: '2025', title: 'Synthesis of monoclinic clinobisvanite BiVO4 for effective visible-light degradation of antibiotics in water: Photocatalytic performance, reaction kinetics, and mechanism', url: 'https://doi.org/10.1016/j.powtec.2025.120650', meta: 'Powder Technology, 453. Q1, Impact Factor = 5.18.' },
      { year: '2024', title: 'Enhanced photocatalytic performance of ZnO under visible light by co-doping of Ta and C using hydrothermal method', url: 'https://doi.org/10.1039/d4ra00579a', meta: 'RSC Advances, 14(18). Q1, Impact Factor = 3.9.' },
      { year: '2023', title: 'Microplastics and trace metals in river sediment: Prevalence and correlation with multiple factors', url: 'https://doi.org/10.1016/j.scitotenv.2023.165145', meta: 'Science of The Total Environment. Q1, Impact Factor = 9.8.' },
      { year: '2025', title: 'Abundance, distribution, and seasonal variation of marine litter on the beaches of central Vietnam', url: 'https://doi.org/10.1016/j.marpolbul.2025.118046', meta: 'Marine Pollution Bulletin, 216. Q1, Impact Factor = 4.9.' },
      { year: '2024', title: 'Efficient photocatalytic remediation of persistent organic pollutants using magnetically recoverable spinel manganese ferrite nanoparticles supported on activated carbon', url: 'https://doi.org/10.1016/j.materresbull.2024.112913', meta: 'Materials Research Bulletin, 178, p.112913. Impact Factor = 5.6.' },
      { year: '2023', title: 'Ethylenediamine-entrapped defective UiO-66(Zr) frameworks for improved CO2 adsorption and selectivity', url: 'https://doi.org/10.1016/j.inoche.2023.111476', meta: 'Inorganic Chemistry Communications, 158. Q1, Impact Factor = 3.8.' },
      { year: '2023', title: 'One-step hydrothermal preparation of Ta-doped ZnO nanorods for improving decolorization efficiency under visible light', url: 'https://doi.org/10.1039/d2ra07655a', meta: 'RSC Advances, 13(8), pp.5208-5218. Q1, Impact Factor = 4.0.' },
      { year: '2023', title: 'One-pot hydrothermal preparation of capsule-like nanocomposites of C/Ce-co-doped ZnO supported on graphene to enhance photodegradation', url: 'https://doi.org/10.1039/d2nj04937f', meta: 'New Journal of Chemistry. Q1, Impact Factor = 3.9.' },
      { type: 'section', title: 'Selected Patents' },
      { type: 'patent', year: '2025', title: 'Method for processing xenotime mineral', meta: 'VN Patent No. 44433.' },
      { type: 'patent', year: '2025', title: 'Process of manufacturing foliar fertilizer based on rare earth complexes supplemented with nano micronutrients', meta: 'VN Patent No. 52319.' },
      { type: 'patent', year: '2024', title: 'Process for processing monazite ore', meta: 'VN Patent No. 41857.' },
      { type: 'patent', year: '2023', title: 'Method for producing organic micronutrient fertilizer containing Cu, Zn, and Mo', meta: 'VN Patent No. 34960.' },
      { type: 'patent', year: '2019', title: 'Process of recovering antimony from antimony sources', meta: 'VN Patent No. 23004.' }
    ],
    activitiesList: [
      ['Seminar', 'Academic exchange on rare-earth luminescent materials', 'Internal and invited seminars in inorganic materials science.'],
      ['Collaboration', 'Environmental catalysis project connection', 'Joint development with research groups and industrial partners.'],
      ['Training', 'Student training in sol-gel and hydrothermal synthesis', 'Hands-on training in experimentation, data analysis, and reporting.']
    ]
  }
};

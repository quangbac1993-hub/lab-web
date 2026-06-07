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
      lead: 'Danh sách bài báo, hội nghị, đề tài và sở hữu trí tuệ có thể cập nhật định kỳ.',
      intro: 'Các mục dưới đây là dữ liệu mẫu để anh thay bằng công bố thật của phòng.'
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
      ['Chiết tách và làm sạch đất hiếm', 'Nghiên cứu quy trình chiết tách, tinh chế, phân chia các nguyên tố đất hiếm và phát triển các hướng ứng dụng trong vật liệu chức năng.'],
      ['Thủy luyện và thu hồi kim loại quý hiếm', 'Phát triển công nghệ thủy luyện, phân chia và thu hồi một số kim loại quý hiếm từ quặng, nguồn thứ cấp và dòng vật liệu có giá trị.'],
      ['Vật liệu nano xử lý môi trường', 'Chế tạo và ứng dụng vật liệu nano vô cơ trong xử lý môi trường nước, không khí, hấp phụ, xúc tác và phân hủy chất ô nhiễm.'],
      ['Công nghệ xử lý chất thải công nghiệp', 'Nghiên cứu công nghệ thích nghi để xử lý thải lỏng, thải rắn phát sinh từ các nhà máy và quá trình sản xuất.'],
      ['Phân tích hóa học và đánh giá ô nhiễm', 'Phân tích thành phần hóa học, đánh giá mức độ ô nhiễm môi trường và cung cấp dữ liệu khoa học cho giải pháp xử lý.']
    ],
    capabilities: [
      ['Tổng hợp', 'Sol-gel, thủy nhiệt, đồng kết tủa, phản ứng pha rắn, nung kết và xử lý nhiệt.'],
      ['Đặc trưng', 'Phân tích cấu trúc, hình thái, phổ dao động, phổ quang, bề mặt riêng và tính chất nhiệt.'],
      ['Thử nghiệm', 'Đánh giá xúc tác, chu kỳ ổn định, đáp ứng cảm biến, tính chất điện hóa và điều kiện mô phỏng ứng dụng.'],
      ['Hợp tác', 'Tư vấn vật liệu, đề tài chung, đào tạo sinh viên, kết nối công nghiệp và công bố khoa học.']
    ],
    peopleList: [
      { section: 'Head of the laboratory', members: [
        { name: 'PGS.TS. Đào Ngọc Nhiệm', role: 'Trưởng phòng', focus: 'Chiết tách và làm sạch đất hiếm, thủy luyện, thu hồi kim loại quý hiếm và công nghệ xử lý môi trường', email: 'nhiemdn@ims.vast.ac.vn', photo: '../assets/rare-earth-catalyst.svg', links: [ { label: 'ORCID', url: 'https://orcid.org/0000-0002-7769-3701' }, { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Ngoc-Dao-2' } ] }
      ] },
      { section: 'Researchers', members: [
        { name: 'Dr. Quang-Bac Nguyen', role: 'Senior Researcher', focus: 'Chiết tách đất hiếm, thủy luyện kim loại quý hiếm, vật liệu nano và xử lý môi trường', email: 'bacnq@ims.vast.ac.vn', photo: '../assets/quang-bac-nguyen.jpg', links: [ { label: 'ORCID', url: 'https://orcid.org/0000-0003-2663-9710' }, { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=WQXpT18AAAAJ&hl=en' }, { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Quang-Bac-Nguyen?ev=hdr_xprf' } ] },
        { name: 'Cán bộ nghiên cứu', role: 'Nghiên cứu viên', focus: 'Tổng hợp vật liệu, phân tích hóa học, đánh giá môi trường và phát triển quy trình xử lý', photo: '../assets/environment-catalysis.svg', links: [] }
      ] },
      { section: 'Collaborators', members: [
        { name: 'Đối tác hợp tác', role: 'Collaborators', focus: 'Các nhóm nghiên cứu, viện/trường và đối tác công nghiệp trong lĩnh vực đất hiếm, thủy luyện và môi trường', photo: '../assets/research-fields.svg', links: [] }
      ] },
      { section: 'Students', members: [
        { name: 'Học viên & sinh viên', role: 'Graduate students', focus: 'Đề tài đất hiếm, thủy luyện, vật liệu nano môi trường và xử lý chất thải', photo: '../assets/research-fields.svg', links: [] }
      ] },
      { section: 'Former Members', members: [
        { name: 'Cựu thành viên', role: 'Alumni', focus: 'Danh sách cựu thành viên sẽ được cập nhật khi có dữ liệu chính thức', photo: '../assets/rare-earth-catalyst.svg', links: [] }
      ] }
    ],
    publicationList: [
      ['2025', 'Rare-earth activated inorganic phosphors for optical sensing', 'Manuscript placeholder'],
      ['2024', 'Defect-engineered oxide catalysts for environmental remediation', 'Journal article placeholder'],
      ['2024', 'Advanced ceramic composites with tunable microstructure', 'Conference placeholder']
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
      ['Rare-earth extraction and purification', 'Developing processes for extraction, purification, separation of rare-earth elements, and application-oriented use in functional materials.'],
      ['Hydrometallurgy and recovery of valuable metals', 'Hydrometallurgical separation and recovery of selected rare and valuable metals from ores, secondary resources, and value-bearing streams.'],
      ['Nanomaterials for environmental treatment', 'Fabrication and application of inorganic nanomaterials for water and air treatment, adsorption, catalysis, and pollutant degradation.'],
      ['Industrial waste treatment technologies', 'Adaptive technologies for treating liquid and solid wastes from factories and industrial production processes.'],
      ['Chemical analysis and pollution assessment', 'Chemical analysis, environmental pollution assessment, and data support for selecting appropriate treatment solutions.']
    ],
    capabilities: [
      ['Synthesis', 'Sol-gel, hydrothermal, co-precipitation, solid-state reaction, sintering, and thermal treatment.'],
      ['Characterization', 'Structure, morphology, vibrational spectra, optical spectra, surface area, and thermal properties.'],
      ['Testing', 'Catalytic activity, stability cycles, sensing response, electrochemical behavior, and application-like conditions.'],
      ['Collaboration', 'Materials consultation, joint projects, student training, industrial links, and scientific publications.']
    ],
    peopleList: [
      { section: 'Head of the laboratory', members: [
        { name: 'Assoc. Prof. Dr. Dao Ngoc Nhiem', role: 'Head of Laboratory', focus: 'Rare-earth extraction and purification, hydrometallurgy, recovery of valuable metals, and environmental treatment technologies', email: 'nhiemdn@ims.vast.ac.vn', photo: '../assets/rare-earth-catalyst.svg', links: [ { label: 'ORCID', url: 'https://orcid.org/0000-0002-7769-3701' }, { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Ngoc-Dao-2' } ] }
      ] },
      { section: 'Researchers', members: [
        { name: 'Dr. Quang-Bac Nguyen', role: 'Senior Researcher', focus: 'Rare-earth extraction, hydrometallurgy of valuable metals, nanomaterials, and environmental treatment', email: 'bacnq@ims.vast.ac.vn', photo: '../assets/quang-bac-nguyen.jpg', links: [ { label: 'ORCID', url: 'https://orcid.org/0000-0003-2663-9710' }, { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=WQXpT18AAAAJ&hl=en' }, { label: 'ResearchGate', url: 'https://www.researchgate.net/profile/Quang-Bac-Nguyen?ev=hdr_xprf' } ] },
        { name: 'Research Staff', role: 'Researchers', focus: 'Chemical analysis, environmental assessment, materials processing, and treatment technology development', photo: '../assets/environment-catalysis.svg', links: [] }
      ] },
      { section: 'Collaborators', members: [
        { name: 'Research Partners', role: 'Collaborators', focus: 'Academic groups, institutes, universities, and industrial partners in rare earths, hydrometallurgy, and environmental technologies', photo: '../assets/research-fields.svg', links: [] }
      ] },
      { section: 'Students', members: [
        { name: 'Graduate Students', role: 'Students', focus: 'Rare earths, hydrometallurgy, environmental nanomaterials, and waste treatment projects', photo: '../assets/research-fields.svg', links: [] }
      ] },
      { section: 'Former Members', members: [
        { name: 'Former Members', role: 'Alumni', focus: 'Former member profiles will be added when official information is available', photo: '../assets/rare-earth-catalyst.svg', links: [] }
      ] }
    ],
    publicationList: [
      ['2025', 'Rare-earth activated inorganic phosphors for optical sensing', 'Manuscript placeholder'],
      ['2024', 'Defect-engineered oxide catalysts for environmental remediation', 'Journal article placeholder'],
      ['2024', 'Advanced ceramic composites with tunable microstructure', 'Conference placeholder']
    ],
    activitiesList: [
      ['Seminar', 'Academic exchange on rare-earth luminescent materials', 'Internal and invited seminars in inorganic materials science.'],
      ['Collaboration', 'Environmental catalysis project connection', 'Joint development with research groups and industrial partners.'],
      ['Training', 'Student training in sol-gel and hydrothermal synthesis', 'Hands-on training in experimentation, data analysis, and reporting.']
    ]
  }
};

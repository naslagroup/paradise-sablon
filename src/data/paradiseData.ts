export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  materials: string[];
  printTypes: string[];
  minOrder: string;
  leadTime: string;
  startingPrice: string;
  image: string;
  features: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'kaos' | 'kemeja' | 'polo' | 'hoodie' | 'jersey';
  categoryLabel: string;
  client: string;
  technique: string;
  material: string;
  quantity: string;
  image: string;
  tags: string[];
}

export const PARADISE_INFO = {
  name: "Paradise Sablon & Konveksi",
  tagline: "Spesialis Sablon Kaos Distro & Konveksi Seragam Terpercaya di Toroh, Grobogan",
  shortDesc: "Pusat pembuatan kaos custom, seragam kantor/PDH, polo shirt, jaket hoodie, dan jersey olahraga dengan sablon plastisol presisi, DTF tajam, dan jahitan kualitas distro.",
  address: "RXP6+GRC, Kernekan, Krenekan, Tunggak, Kec. Toroh, Kabupaten Grobogan, Jawa Tengah 58171",
  plusCode: "RXP6+GRC",
  googleMapsUrl: "https://maps.app.goo.gl/GTPNvdQ7xi2axnde6",
  googleMapsEmbedQuery: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15837.245842875152!2d110.9080!3d-7.1432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70b79e7be94bb1%3A0x8cf218f0f836da16!2sTunggak%2C%20Toroh%2C%20Grobogan%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid",
  instagramHandle: "@paradise.sablon",
  instagramUrl: "https://www.instagram.com/paradise.sablon",
  whatsappNumber: "+62 895-3134-2018",
  whatsappRaw: "6289531342018",
  operatingHours: {
    workshop: "Senin - Sabtu: 08.00 - 17.00 WIB",
    onlineConsultation: "Setiap Hari: 08.00 - 21.00 WIB (Fast Response)"
  },
  advantages: [
    {
      title: "Sablon Presisi & Tahan Lama",
      desc: "Menggunakan tinta Plastisol oil-based grade A dan DTF high-resolution. Warna solid, tidak retak, tahan cuci ratusan kali.",
      icon: "Sparkles"
    },
    {
      title: "Bahan 100% Asli & Berkualitas",
      desc: "Kain Cotton Combed 100% reaktif adem, Fleece katun lembut, serta American/Japan Drill tebal bertekstur kokoh.",
      icon: "Shirt"
    },
    {
      title: "Harga Tangan Pertama (Langsung Produsen)",
      desc: "Tanpa perantara! Dikerjakan langsung di workshop kami di Toroh dengan harga pabrik yang sangat kompetitif.",
      icon: "BadgePercent"
    },
    {
      title: "Jahitan Standar Distro & QC Ketat",
      desc: "Jahit rantai pundak, obras 4 benang rapat, dan double stick leher rapi menjamin pakaian awet dan elegan dipakai.",
      icon: "Scissors"
    },
    {
      title: "Gratis Konsultasi & Bantu Setting Desain",
      desc: "Belum punya desain fix atau bingung format file? Tim kami siap membantu layout mockup gratis sebelum naik cetak.",
      icon: "Palette"
    },
    {
      title: "Garansi Kepuasan Pelanggan",
      desc: "Komitmen penuh terhadap ketepatan waktu deadline dan garansi retur/perbaikan jika terjadi cacat produksi.",
      icon: "ShieldCheck"
    }
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "kaos-distro",
    title: "Sablon Kaos Distro & Komunitas",
    category: "Kaos & T-Shirt",
    badge: "Paling Populer",
    description: "Pembuatan kaos oblong (O-neck / V-neck) kualitas distro untuk event, komunitas motor, reuni, gathering kelas, brand clothing lokal, atau seragam harian.",
    materials: ["Cotton Combed 30s", "Cotton Combed 24s", "Cotton Combed 20s", "Heavyweight 16s"],
    printTypes: ["Plastisol High Density", "DTF Full Color", "Rubber Matsui", "Discharge"],
    minOrder: "12 pcs (Bisa satuan untuk DTF)",
    leadTime: "4 - 7 hari kerja",
    startingPrice: "Rp 45.000",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Jahit rantai pundak & stik leher rapat",
      "Kain 100% katun murni adem menyerap keringat",
      "Bisa sablon depan, belakang, lengan, & leher",
      "Packaging plastik OPP rapi per pcs"
    ]
  },
  {
    id: "kemeja-pdh-pdl",
    title: "Kemeja PDH, PDL & Seragam Kerja",
    category: "Kemeja & Seragam",
    badge: "Formal & Lapangan",
    description: "Kemeja seragam dinas, seragam kantor, organisasi kemahasiswaan, karang taruna, dan instansi dengan pola jahitan rapi serta bordir komputer presisi.",
    materials: ["American Drill 1919", "Japan Drill Original", "Nagata Drill", "Tropical Drill"],
    printTypes: ["Bordir Komputer High Stitch", "Aplikasi Sablon Plastisol"],
    minOrder: "12 pcs",
    leadTime: "7 - 12 hari kerja",
    startingPrice: "Rp 85.000",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Pola slim fit / regular fit nyaman bergerak",
      "Saku dada fungsional dengan variasi kancing",
      "Bordir komputer logo dada, punggung, & bendera",
      "Tahan cuci dan tidak mudah kusut di lapangan"
    ]
  },
  {
    id: "polo-shirt",
    title: "Kaos Polo (Wangki) Bordir & Sablon",
    category: "Polo Shirt",
    badge: "Elegan & Sporty",
    description: "Kaos berkerah yang cocok untuk seragam kantor semi-formal, seragam pameran, seragam resto/cafe, maupun panitia event.",
    materials: ["Lacoste Pique CVC", "Lacoste Katun Pique", "Pique Hexagon"],
    printTypes: ["Bordir Komputer", "Sablon Plastisol / DTF"],
    minOrder: "12 pcs",
    leadTime: "5 - 8 hari kerja",
    startingPrice: "Rp 65.000",
    image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Kerah rajut tebal anti melengkung",
      "Kancing 2-3 baris rapi dan kuat",
      "Bahan berpori halus sejuk dipakai seharian",
      "Bordir komputer tajam tanpa kerutan kain"
    ]
  },
  {
    id: "hoodie-jaket",
    title: "Jaket, Hoodie & Crewneck",
    category: "Outerwear",
    badge: "Streetwear & Hangat",
    description: "Hoodie zipper, hoodie pullover (jumper), sweater crewneck, coach jacket, dan varsity untuk angkatan sekolah, komunitas kampus, dan merchandise.",
    materials: ["Cotton Fleece Taiwan", "Baby Terry Katun", "Taslan Waterproof", "Parasut Milky"],
    printTypes: ["Plastisol Raster", "DTF Full Color", "Bordir Komputer"],
    minOrder: "12 pcs",
    leadTime: "7 - 10 hari kerja",
    startingPrice: "Rp 110.000",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Bulu fleece bagian dalam lembut & tidak gatal",
      "Tali hoodie katun premium & eyelet logam",
      "Karet rib lengan & pinggang elastis tebal",
      "Pola over-fit / regular fit kekinian"
    ]
  },
  {
    id: "jersey-olahraga",
    title: "Jersey Sublimasi Printing Full Color",
    category: "Sportswear",
    badge: "Full Custom Print",
    description: "Jersey custom printing untuk tim sepak bola, futsal, voli, badminton, gowes sepeda, running event, hingga tim e-sport dengan grafis tajam tanpa batas warna.",
    materials: ["Dryfit Milano", "Dryfit Benzema", "Dryfit Brazil", "Dryfit Paving"],
    printTypes: ["Full Sublimation Printing High Heat Press"],
    minOrder: "6 pcs",
    leadTime: "5 - 8 hari kerja",
    startingPrice: "Rp 75.000",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Tinta sublim menyatu langsung dengan serat kain (tidak terkelupas)",
      "Bahan dryfit cepat kering (quick-dry) & ringan",
      "Bebas custom nama punggung, nomor punggung, & sponsor",
      "Warna cerah awet meski sering terkena terik matahari"
    ]
  },
  {
    id: "merchandise-lain",
    title: "Tote Bag, Rompi & Atribut Acara",
    category: "Merchandise & Aksesoris",
    badge: "Pelengkap Event",
    description: "Pemesanan totebag kanvas/blacu, goodie bag spunbond, rompi lapangan, apron barista/koki, topi bordir, dan bendera komunitas.",
    materials: ["Kanvas Tebal", "Blacu Halus", "Drill", "Spunbond 75 gsm"],
    printTypes: ["Sablon Manual Rubber", "DTF", "Bordir"],
    minOrder: "24 pcs",
    leadTime: "4 - 7 hari kerja",
    startingPrice: "Rp 18.000",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop",
    features: [
      "Jahitan silang pegangan kuat menahan beban",
      "Pilihan resleting atau perekat velcro",
      "Cocok untuk souvenir seminar, expo, & wedding",
      "Harga grosir ekonomis"
    ]
  }
];

export const PRINTING_TECHNIQUES = [
  {
    name: "Sablon Plastisol",
    badge: "Standar Distro Premium",
    desc: "Tinta berbasis minyak (oil-based) yang menjadi standar wajib brand clothing distro ternama. Menghasilkan warna sangat cerah, detail garis tajam, dan permukaan sablon yang solid serta sedikit lentur elastis.",
    pros: ["Warna sangat pekat & solid", "Tahan cuci ratusan kali tanpa luntur", "Bisa efek tekstur timbul (High Density / HD)", "Detail raster gambar halus"],
    bestFor: "Kaos distro, kaos komunitas, artwork detail tinggi, apparel streetwear."
  },
  {
    name: "Sablon DTF (Direct to Film)",
    badge: "Full Color & Foto",
    desc: "Teknologi digital printing transfer film modern. Mampu mencetak gambar foto, gradasi kompleks, ribuan kombinasi warna tanpa batas, dengan lem perekat hotmelt yang lentur dan kuat menempel di kain.",
    pros: ["Bisa cetak foto & gradasi tanpa batas warna", "Bisa order satuan maupun lusinan", "Warna tajam beresolusi tinggi", "Bisa diaplikasikan ke semua warna kain"],
    bestFor: "Desain warna-warni, kaos event satuan, merchandise foto, desain rumit."
  },
  {
    name: "Sablon Rubber / Matsui",
    badge: "Water-based Lembut",
    desc: "Tinta berbasis air ramah lingkungan yang menyerap ke serat kain katun. Memiliki daya tutup yang baik, elastis, dan nyaman dipakai karena tidak terasa panas di dada.",
    pros: ["Handfeel lebih tipis & adem", "Tinta ramah lingkungan", "Harga sangat ekonomis untuk partai besar", "Tahan setrika jika menggunakan pasta khusus"],
    bestFor: "Kaos promosi, kaos reuni akbar, seragam panitia, kaos anak-anak."
  },
  {
    name: "Bordir Komputer Presisi",
    badge: "Elegan & Bertekstur 3D",
    desc: "Mesin bordir multi-head komputer dengan kerapatan tusukan benang tinggi. Menghasilkan logo dan tulisan yang sangat rapi, kokoh, dan berkesan formal eksklusif.",
    pros: ["Kesan sangat formal & profesional", "Benang bordir kuat dan tidak mungkin luntur", "Timbul nyata di permukaan kain", "Sangat presisi sesuai master desain vektor"],
    bestFor: "Kemeja kerja/PDH, kaos polo, topi, jaket drill, patch emblem."
  }
];

export const FABRIC_GUIDE = [
  {
    name: "Cotton Combed 30s",
    thickness: "Ketebalan Sedang (140 - 150 gsm)",
    feel: "Sangat Lembut & Sejuk",
    desc: "Bahan paling favorit di Indonesia. Dibuat dari 100% serat kapas alami melalui proses penyisiran (combing) sehingga serat kain halus, tidak berbulu, dan sangat sejuk di iklim tropis.",
    usage: "Kaos distro harian, kaos komunitas santai, merchandise event."
  },
  {
    name: "Cotton Combed 24s",
    thickness: "Ketebalan Tebal Sedang (175 - 185 gsm)",
    feel: "Kokoh, Lembut & Mantap",
    desc: "Sedikit lebih tebal daripada 30s namun tetap lembut dan menyerap keringat dengan prima. Tidak menerawang dan tidak mudah melar, menjadi pilihan favorit untuk kaos event & seragam komunitas.",
    usage: "Kaos angkatan sekolah, gathering perusahaan, kaos outdoor."
  },
  {
    name: "Lacoste Pique CVC",
    thickness: "Pori Rajut Khas Polo (200 - 220 gsm)",
    feel: "Berpori, Kokoh & Mewah",
    desc: "Kombinasi serat katun dan polyester dengan pola rajutan sarang lebah (waffle). Tahan susut, tidak mudah berkerut, serta memberikan tampilan profesional untuk pakaian berkerah.",
    usage: "Polo shirt seragam kantor, pakaian staf resto, seragam pameran."
  },
  {
    name: "American & Japan Drill",
    thickness: "Kain Anyaman Miring Kokoh",
    feel: "Kuat, Padat & Rapi",
    desc: "Kain standar nasional untuk kemeja seragam kerja, seragam lapangan PDL, dan seragam dinas. Tahan gesekan, warnanya awet, dan tetap nyaman saat dikenakan di luar ruangan.",
    usage: "Kemeja PDH, kemeja PDL lapangan, seragam mekanik, wearpack."
  },
  {
    name: "Cotton Fleece Taiwan",
    thickness: "Tebal & Hangat (280 - 300 gsm)",
    feel: "Bulu Dalam Super Lembut",
    desc: "Bahan utama jaket hoodie dan sweater premium. Bagian luar halus rapat dan bagian dalam memiliki lapisan bulu lembut penghangat yang tidak rontok setelah dicuci.",
    usage: "Hoodie zipper, jaket jumper, crewneck streetwear, jaket kelas."
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "p1",
    title: "Kaos Komunitas Motor RX King Grobogan",
    category: "kaos",
    categoryLabel: "Kaos Distro",
    client: "Komunitas Rider Grobogan",
    technique: "Plastisol Raster Depan-Belakang",
    material: "Cotton Combed 24s Hitam Reaktif",
    quantity: "150 pcs",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop",
    tags: ["Plastisol", "Combed 24s", "Komunitas"]
  },
  {
    id: "p2",
    title: "Kemeja PDH Karang Taruna Tunggak Toroh",
    category: "kemeja",
    categoryLabel: "Kemeja PDH",
    client: "Karang Taruna Tunas Harapan",
    technique: "Bordir Komputer Dada, Lengan & Punggung",
    material: "American Drill 1919 Navy Kombinasi Abu",
    quantity: "60 pcs",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=800&auto=format&fit=crop",
    tags: ["American Drill", "Bordir Komputer", "PDH"]
  },
  {
    id: "p3",
    title: "Polo Shirt Seragam Karyawan Toko & Bengkel",
    category: "polo",
    categoryLabel: "Polo Shirt",
    client: "Mitra Mandiri Teknik Purwodadi",
    technique: "Bordir Komputer Logo Dada & Sablon Kerah",
    material: "Lacoste CVC Premium Maroon",
    quantity: "35 pcs",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop",
    tags: ["Lacoste CVC", "Bordir", "Seragam"]
  },
  {
    id: "p4",
    title: "Hoodie Angkatan SMAN 1 Toroh",
    category: "hoodie",
    categoryLabel: "Hoodie & Jaket",
    client: "Panitia Wisuda Kelas XII",
    technique: "DTF Full Color & Plastisol Tipis",
    material: "Cotton Fleece Taiwan Hijau Bottle",
    quantity: "110 pcs",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop",
    tags: ["Cotton Fleece", "DTF", "Angkatan Sekolah"]
  },
  {
    id: "p5",
    title: "Jersey Futsal Full Sublimasi Grobogan Cup",
    category: "jersey",
    categoryLabel: "Jersey Olahraga",
    client: "Garuda Muda Futsal Club",
    technique: "Sublimasi Fullprint High Definition",
    material: "Dryfit Milano Quick-Dry",
    quantity: "24 set (Baju + Celana)",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=800&auto=format&fit=crop",
    tags: ["Sublimasi", "Dryfit Milano", "Custom Nameset"]
  },
  {
    id: "p6",
    title: "Kaos Reuni Akbar Alumni SMP Toroh",
    category: "kaos",
    categoryLabel: "Kaos Event",
    client: "Ikatan Alumni Angkatan 2012",
    technique: "Sablon Rubber Matsui Lembut A3",
    material: "Cotton Combed 30s Misty Grey",
    quantity: "200 pcs",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop",
    tags: ["Rubber", "Combed 30s", "Reuni"]
  }
];

export const ORDER_WORKFLOW = [
  {
    step: "01",
    title: "Konsultasi & Kirim Desain",
    desc: "Diskusikan kebutuhan Anda via WhatsApp (+62 895-3134-2018). Kirim ide/desain (Corel, AI, PSD, PDF, atau gambar JPG). Belum ada desain? Kami bantu buatkan!",
    icon: "MessageSquareText"
  },
  {
    step: "02",
    title: "Pilih Bahan & Mockup Digital",
    desc: "Tentukan pilihan jenis bahan, warna kain, dan teknik sablon/bordir. Kami buatkan preview digital (mockup) untuk persetujuan sebelum proses produksi.",
    icon: "FileCheck"
  },
  {
    step: "03",
    title: "Uang Muka (DP) & Jadwal Produksi",
    desc: "Setelah rincian dan mockup disetujui, pembayaran DP sebesar 50% untuk kepastian order dan pengadaan bahan baku.",
    icon: "CreditCard"
  },
  {
    step: "04",
    title: "Proses Produksi Workshop",
    desc: "Pengerjaan meliputi potong kain, sablon/bordir presisi, jahit rapi, hingga pembersihan benang sisa di workshop kami di Toroh.",
    icon: "Cpu"
  },
  {
    step: "05",
    title: "Quality Control (QC) & Packing",
    desc: "Pengecekan teliti pada ukuran, jahitan, dan sablon. Kaos disetrika uap dan dikemas plastik satu per satu dengan higienis dan rapi.",
    icon: "PackageCheck"
  },
  {
    step: "06",
    title: "Pelunasan & Pengiriman / Ambil",
    desc: "Pesanan siap! Pelunasan sisa tagihan, kemudian pesanan bisa diambil langsung ke workshop di Krenekan Tunggak atau dikirim via kurir/ekspedisi.",
    icon: "Truck"
  }
];

export const SIZE_CHART = {
  adult: [
    { size: "S", width: 47, length: 68, chest: 94 },
    { size: "M", width: 50, length: 70, chest: 100 },
    { size: "L", width: 53, length: 72, chest: 106 },
    { size: "XL", width: 56, length: 75, chest: 112 },
    { size: "XXL", width: 59, length: 77, chest: 118 },
    { size: "3XL", width: 63, length: 80, chest: 126 }
  ],
  kids: [
    { size: "S (2-3 th)", width: 33, length: 44, chest: 66 },
    { size: "M (4-5 th)", width: 36, length: 48, chest: 72 },
    { size: "L (6-7 th)", width: 39, length: 52, chest: 78 },
    { size: "XL (8-10 th)", width: 42, length: 56, chest: 84 }
  ]
};

export const FAQS = [
  {
    q: "Berapa minimal order di Paradise Sablon & Konveksi?",
    a: "Untuk sablon manual (Plastisol/Rubber) minimal order adalah 12 pcs (1 lusin). Untuk sablon DTF full color digital, kami melayani pemesanan satuan hingga ribuan pcs tanpa batas warna."
  },
  {
    q: "Berapa lama estimasi waktu pengerjaan pesanan?",
    a: "Rata-rata pengerjaan kaos sablon berkisar antara 4 hingga 7 hari kerja tergantung antrean dan kuantitas. Untuk kemeja PDH dan jaket berkisar 7 hingga 12 hari kerja. Jika Anda memiliki kebutuhan deadline khusus (urgent), silakan konsultasikan dengan kami."
  },
  {
    q: "Bagaimana jika saya belum memiliki desain siap cetak?",
    a: "Jangan khawatir! Tim desainer Paradise Sablon siap membantu Anda merapikan logo, membuat tata letak mockup pakaian, ataupun membuat konsep grafis secara gratis untuk setiap pesanan."
  },
  {
    q: "Apakah bisa kirim ke luar Grobogan / ke seluruh Indonesia?",
    a: "Tentu bisa! Selain melayani pengambilan langsung di workshop kami di Krenekan, Tunggak, Kec. Toroh, kami rutin mengirim pesanan ke Semarang, Solo, Kudus, Demak, Jakarta, hingga luar pulau Jawa melalui J&T, JNE, SiCepat, Indah Cargo, KALOG, dan travel."
  },
  {
    q: "Apakah ada garansi jika hasil sablon atau jahitan cacat?",
    a: "Ada! Kami memberikan garansi retur/perbaikan jika terjadi kesalahan produksi yang bersumber dari pihak kami (misal: cacat cetak, ukuran meleset jauh dari toleransi size chart, atau jahitan terbuka). Kepuasan Anda adalah prioritas kami."
  }
];

export const TESTIMONIALS = [
  {
    name: "Aris Munandar",
    role: "Ketua Komunitas Motor Grobogan",
    quote: "Hasil sablon plastisolnya tebal, rapi, dan warna merahnya bener-bener solid. Sudah dicuci berkali-kali buat turing tetap mulus gak ada retak sama sekali. Rekomendasi banget buat kawan-kawan komunitas di Toroh dan sekitarnya!",
    rating: 5,
    order: "150 pcs Kaos Combed 24s"
  },
  {
    name: "Bu Dwi Lestari, S.Pd",
    role: "Koordinator Reuni & Guru",
    quote: "Pesan kaos reuni akbar angkatan di Paradise Sablon sangat memuaskan. Dari awal konsultasi dilayani ramah, dibantu setting tulisan alumni, dan jadinya tepat waktu sebelum hari H acara. Kainnya adem banget.",
    rating: 5,
    order: "200 pcs Kaos Combed 30s"
  },
  {
    name: "Rian Hendrawan",
    role: "Pengurus Karang Taruna Tunggak",
    quote: "Bikin kemeja PDH organisasi di sini mantap betul. Bordir komputernya rapi, logo garuda dan bendera sangat presisi. Harganya juga langsung tangan pertama jadi masuk di anggaran kas pemuda.",
    rating: 5,
    order: "45 pcs Kemeja Drill Bordir"
  }
];

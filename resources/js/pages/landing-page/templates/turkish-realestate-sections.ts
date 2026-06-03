export const turkishRealEstateSections = {
  sections: [
    {
      key: 'header',
      transparent: false,
      background_color: '#ffffff',
      text_color: '#1f2937',
      button_style: 'gradient'
    },
    {
      key: 'hero',
      title: 'Dijital Kartvizitinizle Her Alıcıya Ulaşın',
      subtitle:
        "Türkiye'nin büyüyen gayrimenkul piyasasında Arap, Rus ve Avrupalı alıcılara çok dilli profilinizle öne çıkın. Tek NFC dokunuşu, tüm mülk portföyünüz.",
      announcement_text: '🏠 İstanbul Emlak Fuarı İçin Hazır Mısınız?',
      primary_button_text: 'Ücretsiz Deneyin',
      secondary_button_text: 'Giriş Yap',
      image: '',
      background_color: '#f8fafc',
      text_color: '#1f2937',
      layout: 'image-right',
      height: 620,
      stats: [
        { value: '1.000+', label: 'Emlak Danışmanı' },
        { value: '5', label: 'Dil Desteği' },
        { value: '%99', label: 'Memnuniyet' }
      ],
      card: {
        name: 'Ahmet Yılmaz',
        title: 'Gayrimenkul Danışmanı',
        company: 'Prestige Emlak',
        initials: 'AY'
      }
    },
    {
      key: 'features',
      title: 'Uluslararası Alıcıları Etkileyin',
      description:
        "Türkiye'de gayrimenkul satın almak isteyen Arap, Rus ve Avrupalı alıcılara profesyonel dijital kartvizitinizle ulaşın.",
      background_color: '#ffffff',
      layout: 'grid',
      columns: 3,
      image: '',
      show_icons: true,
      features_list: [
        {
          icon: 'globe',
          title: 'Çok Dilli Profil',
          description:
            'Arapça, Rusça, İngilizce ve Türkçe profilinizi tek NFC dokunuşuyla paylaşın. Yabancı alıcılar kendi dillerinde bilgi alır.'
        },
        {
          icon: 'wifi',
          title: 'NFC Kartvizit',
          description:
            'Müşterileriniz telefonlarını kartınıza dokundursun — mülk portföyünüz, iletişim bilgileriniz ve randevu sisteminiz anında açılsın.'
        },
        {
          icon: 'qr-code',
          title: 'QR Kod Paylaşımı',
          description:
            'Fuarlarda, mülk gösterimlerinde ve broşürlerde QR kodunuzu paylaşın. Saniyeler içinde bağlantı kurun.'
        },
        {
          icon: 'bar-chart',
          title: 'Mülk Portföyü',
          description:
            'Satılık ve kiralık mülklerinizi fotoğraf, fiyat ve m² bilgileriyle dijital kartvizitinizde sergileyin.'
        },
        {
          icon: 'smartphone',
          title: 'Online Randevu',
          description:
            'Mülk gösterimi için 7/24 online randevu alın. Takvim entegrasyonu ile hiç randevu kaçırmayın.'
        },
        {
          icon: 'shield',
          title: 'Analitik Takip',
          description:
            'Kaç kişi kartvizitinizi gördü, hangi mülklere tıkladı? Verilerle müşteri ilginizi anlayın ve daha iyi hizmet sunun.'
        }
      ]
    },
    {
      key: 'screenshots',
      title: 'Kardex Nasıl Çalışır?',
      subtitle:
        'Kolay kurulum, güçlü özellikler. Dakikalar içinde profesyonel dijital kartvizitinizi oluşturun.',
      screenshots_list: [
        {
          src: '/screenshots/hero.png',
          alt: 'Kardex Kontrol Paneli',
          title: 'Kontrol Paneli',
          description: 'Tüm mülklerinizi ve analitiğinizi tek ekranda yönetin'
        },
        {
          src: '/screenshots/vcard-builder.png',
          alt: 'Dijital Kartvizit Oluşturucu',
          title: 'Kartvizit Oluşturucu',
          description: 'Sürükle-bırak ile dakikalar içinde profesyonel kartvizit oluşturun'
        }
      ]
    },
    {
      key: 'why_choose_us',
      title: "Neden Türk Emlak Danışmanları Kardex'i Seçiyor?",
      subtitle: 'Kağıt kartvizit çağı bitti. Uluslararası alıcılar için dijital ol.',
      reasons: [
        {
          title: '5 Dakikada Hazır',
          description:
            'Profil oluşturun, mülklerinizi ekleyin, NFC kartınızı sipariş edin. İlk gününde kullanmaya başlayın.',
          icon: 'clock'
        },
        {
          title: 'Yabancı Alıcılar İçin',
          description:
            'Arap, Rus, Avrupalı alıcılar profilinizi kendi dillerinde görür. Dil bariyerini kaldırın, satışı kazanın.',
          icon: 'users'
        },
        {
          title: 'Piyasada Öne Çıkın',
          description:
            'Rakipleriniz kağıt kartvizit dağıtırken siz NFC teknolojisiyle güçlü bir izlenim bırakın.',
          icon: 'star'
        }
      ],
      stats: [
        { value: '1.000+', label: 'Emlak Danışmanı', color: 'blue' },
        { value: '5', label: 'Dil Desteği', color: 'green' },
        { value: '%99', label: 'Memnuniyet', color: 'purple' }
      ]
    },
    {
      key: 'templates',
      title: 'Emlak Danışmanlarına Özel Şablonlar',
      subtitle:
        'Lüks konuttan ticari gayrimenkule, her uzmanlık alanı için profesyonel şablonlar.',
      background_color: '#f8fafc',
      layout: 'carousel',
      columns: 3,
      templates_list: [
        { name: 'realestate', category: 'business' },
        { name: 'consulting', category: 'professional' },
        { name: 'lawfirm', category: 'professional' },
        { name: 'freelancer', category: 'professional' },
        { name: 'construction', category: 'business' },
        { name: 'neutral-professional', category: 'professional' }
      ],
      cta_text: 'Tüm Şablonları Gör',
      cta_link: '#'
    },
    {
      key: 'about',
      title: 'Kardex Hakkında',
      description:
        "Türkiye'deki emlak danışmanlarının uluslararası alıcılara daha kolay ulaşmasını sağlamak için geliştirdik.",
      story_title: 'Türk Emlak Piyasasını Dijitalleştiriyoruz',
      story_content:
        "Kağıt kartvizit dağıtmanın modası geçti. Arap, Rus ve Avrupalı alıcılar Türkiye'de mülk ararken profesyonel, dijital ve çok dilli bir deneyim bekliyor. Kardex bu boşluğu kapatmak için doğdu.",
      image: '',
      background_color: '#f9fafb',
      layout: 'image-right',
      stats: [
        { value: '1.000+', label: 'Danışman', color: 'blue' },
        { value: '5', label: 'Dil', color: 'green' },
        { value: 'NFC', label: 'Teknoloji', color: 'purple' }
      ]
    },
    {
      key: 'team',
      title: 'Ekibimizle Tanışın',
      subtitle: 'Türk gayrimenkul piyasasını ve dijital teknolojiyi birleştiren bir ekip.',
      cta_title: 'Ekibimize Katılmak İster misiniz?',
      cta_description: 'Her zaman yetenekli kişileri arıyoruz.',
      cta_button_text: 'Açık Pozisyonlar',
      members: []
    },
    {
      key: 'testimonials',
      title: 'Türk Emlak Danışmanları Ne Diyor?',
      subtitle: 'Gerçek danışmanlardan gerçek sonuçlar.',
      trust_title: "Profesyoneller Kardex'e Güveniyor",
      trust_stats: [
        { value: '4.9/5', label: 'Ortalama Puan', color: 'blue' },
        { value: '1.000+', label: 'Mutlu Danışman', color: 'green' }
      ],
      testimonials: [
        {
          name: 'Mehmet Kaya',
          role: 'Gayrimenkul Danışmanı',
          company: 'Beylikdüzü Emlak',
          content:
            'Arap alıcılara artık Arapça profilimle ulaşıyorum. İlk ayda 3 ekstra mülk gösterimi randevusu aldım.',
          rating: 5
        },
        {
          name: 'Zeynep Arslan',
          role: 'Satış Müdürü',
          company: 'İstanbul Gayrimenkul A.Ş.',
          content:
            'NFC kartımı emlak fuarında kullandım. Kağıt kartvizit dağıtmaktan çok daha profesyonel göründüm ve 40+ kişiyle anında bağlantı kurdum.',
          rating: 5
        },
        {
          name: 'Ali Demir',
          role: 'Müstakil Emlak Danışmanı',
          company: 'Kadıköy',
          content:
            'Rus müşterilerim profilimi Rusça görüyor, iletişim çok daha kolay. Dil engeli artık sorun değil.',
          rating: 5
        }
      ]
    },
    {
      key: 'active_campaigns',
      title: 'Öne Çıkan İlanlar',
      subtitle: 'Şu anda tanıttığımız gayrimenkul ilanlarını keşfedin',
      background_color: '#f8fafc',
      show_view_all: true,
      max_display: 6
    },
    {
      key: 'plans',
      title: 'Emlak Danışmanları İçin Planlar',
      subtitle:
        '14 günlük ücretsiz deneme. Kredi kartı gerekmez. iyzipay ile Türk Lirası üzerinden kolay ödeme.',
      faq_text: 'Planlar hakkında sorunuz mu var? Bize ulaşın'
    },
    {
      key: 'faq',
      title: 'Sık Sorulan Sorular',
      subtitle: 'Aklınızdaki soruların cevapları burada.',
      cta_text: 'Başka sorunuz mu var?',
      button_text: 'Bize Yazın',
      faqs: [
        {
          question: 'NFC kartvizit nasıl çalışır?',
          answer:
            'Müşterileriniz akıllı telefonlarını NFC kartınıza yaklaştırır ve profiliniz anında açılır. Uygulama indirmeye gerek yoktur, tüm modern telefonlarla uyumludur.'
        },
        {
          question: 'Kaç dilde profil oluşturabilirim?',
          answer:
            'Türkçe, İngilizce, Arapça, Rusça, Almanca ve daha fazla dili destekliyoruz. Yabancı alıcılarla kendi dillerinde iletişim kurabilirsiniz.'
        },
        {
          question: 'iyzipay ile ödeme yapabilir miyim?',
          answer:
            'Evet, Türk kullanıcılar için iyzipay üzerinden güvenli ödeme yapabilirsiniz. Türk Lirası (TRY) ile ödeme desteklenmektedir.'
        },
        {
          question: 'Sahibinden.com profilime bağlantı ekleyebilir miyim?',
          answer:
            'Evet, dijital kartvizitinize Sahibinden.com, Hürriyet Emlak, Zingat, Emlakjet ve diğer Türk emlak portallarınızı ekleyebilirsiniz.'
        },
        {
          question: 'Mülk portföyümü nasıl eklerim?',
          answer:
            'Kartvizit oluşturucuda "Öne Çıkan Mülkler" bölümüne fotoğraf, fiyat, m² ve açıklama ekleyebilirsiniz. Sınırsız mülk eklenebilir.'
        },
        {
          question: 'Acente olarak birden fazla danışman için kullanabilir miyim?',
          answer:
            'Evet, Acente planımız ile tüm ekibinize ayrı profiller oluşturabilirsiniz. Her danışmanın kendi kartı olur, siz merkezi olarak yönetirsiniz.'
        }
      ]
    },
    {
      key: 'newsletter',
      title: 'Türk Emlak Piyasasından Haberdar Olun',
      subtitle: 'Haftalık piyasa güncellemeleri ve dijital pazarlama ipuçları.',
      privacy_text: 'Spam yok. İstediğiniz zaman abonelikten çıkabilirsiniz.',
      benefits: [
        {
          icon: '📧',
          title: 'Haftalık Güncelleme',
          description: 'Yeni özellikler ve iyileştirmeler'
        },
        {
          icon: '🏠',
          title: 'Piyasa Trendleri',
          description: 'İstanbul ve Türkiye gayrimenkul haberleri'
        },
        {
          icon: '💡',
          title: 'Satış İpuçları',
          description: 'Yabancı alıcılara ulaşmak için pratik öneriler'
        }
      ]
    },
    {
      key: 'contact',
      title: 'İletişime Geçin',
      subtitle: 'Kardex hakkında sorularınız mı var? Size yardımcı olmaktan memnuniyet duyarız.',
      form_title: 'Bize Mesaj Gönderin',
      info_title: 'İletişim Bilgileri',
      info_description: 'Her sorunuzda yardıma hazırız.',
      layout: 'split',
      background_color: '#f9fafb',
      contact_info: {
        email: 'destek@kardex.cards',
        phone: '+90 (212) 000 00 00',
        address: 'İstanbul, Türkiye'
      },
      form_fields: [
        { name: 'name', label: 'Ad Soyad', type: 'text', required: true, placeholder: 'Adınızı giriniz' },
        { name: 'email', label: 'E-posta Adresi', type: 'email', required: true, placeholder: 'E-posta adresinizi giriniz' },
        { name: 'message', label: 'Mesajınız', type: 'textarea', required: true, placeholder: 'Size nasıl yardımcı olabiliriz?', rows: 5 }
      ],
      form_settings: {
        submit_button_text: 'Mesaj Gönder',
        success_message: 'Mesajınız için teşekkürler! En kısa sürede geri döneceğiz.',
        show_privacy_notice: true,
        privacy_notice: 'Bu formu göndererek Gizlilik Politikamızı kabul etmiş olursunuz.'
      }
    },
    {
      key: 'footer',
      description:
        'Türk emlak danışmanlarını dijital geleceğe taşıyoruz. Çok dilli profiller, NFC teknolojisi ve akıllı analitik.',
      newsletter_title: 'Güncel Kalın',
      newsletter_subtitle: 'Bültenimize abone olun',
      links: {
        product: [
          { name: 'Özellikler', href: '#features' },
          { name: 'Planlar', href: '#plans' },
          { name: 'Şablonlar', href: '#templates' }
        ],
        company: [
          { name: 'Hakkımızda', href: '#about' },
          { name: 'İletişim', href: '#contact' },
          { name: 'SSS', href: '#faq' }
        ]
      },
      social_links: [
        { name: 'Instagram', icon: 'Instagram', href: '#' },
        { name: 'LinkedIn', icon: 'Linkedin', href: '#' },
        { name: 'Twitter', icon: 'Twitter', href: '#' }
      ],
      section_titles: {
        product: 'Ürün',
        company: 'Şirket'
      }
    }
  ],
  theme: {
    primary_color: '#E05C00',
    secondary_color: '#ffffff',
    accent_color: '#fff7f0',
    logo_light: '',
    logo_dark: '',
    favicon: ''
  },
  seo: {
    meta_title: 'Kardex - Türk Emlak Danışmanları İçin Dijital Kartvizit',
    meta_description:
      "Türkiye'de gayrimenkul danışmanları için NFC ve çok dilli dijital kartvizit platformu. Arap, Rus ve Avrupalı alıcılara ulaşın.",
    meta_keywords:
      'dijital kartvizit, emlak danışmanı, NFC kart, Türkiye gayrimenkul, çok dilli profil, sahibinden, istanbul emlak'
  },
  custom_css: '',
  custom_js: '',
  section_order: [
    'header', 'hero', 'features', 'screenshots', 'why_choose_us', 'templates',
    'about', 'team', 'testimonials', 'active_campaigns', 'plans', 'faq',
    'newsletter', 'contact', 'footer'
  ],
  section_visibility: {
    header: true,
    hero: true,
    features: true,
    screenshots: true,
    why_choose_us: true,
    templates: true,
    about: true,
    team: false,
    testimonials: true,
    active_campaigns: false,
    plans: true,
    faq: true,
    newsletter: true,
    contact: true,
    footer: true
  }
};

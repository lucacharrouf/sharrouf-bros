import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Apply RTL class to html element for Arabic
    if (language === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.classList.add('rtl');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.classList.remove('rtl');
    }
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.locations': 'Locations',
    'nav.contact': 'Contact',
    'nav.getQuote': 'Get Quote',
    'nav.language': 'Language:',

    // Hero Section
    'hero.title': 'Woodworking Technology',
    'hero.subtitle': 'for the Middle East',
    'hero.description': 'Authorized SCM dealer providing state of art Italian woodworking solutions, complete service support, and genuine spare parts across Lebanon, the Middle East, and Africa.',
    'hero.viewProducts': 'View Our Products',
    'hero.getFreeQuote': 'Get Free Quote',
    'hero.yearsExperience': 'Years Experience',
    'hero.machinesSold': 'Machines Sold',
    'hero.authorizedDealer': 'Authorized Dealer',
    'hero.expertSupport': 'Expert Support',

    // SCM Partnership
    'scm.title': 'Proudly Representing',
    'scm.subtitle': 'Your Trusted SCM Partner in the Middle East',
    'scm.description': 'As the authorized dealer for SCM Group, we bring you the world\'s finest Italian woodworking machinery. With over 70 years of innovation, SCM represents excellence in precision engineering and cutting-edge technology.',
    'scm.excellence': 'Italian Excellence',
    'scm.excellenceDesc': 'Premium quality machinery designed and manufactured in Italy',
    'scm.support': '24/7 Support',
    'scm.supportDesc': 'Comprehensive technical support and maintenance services',
    'scm.parts': 'Genuine Parts',
    'scm.partsDesc': 'Original SCM spare parts and accessories available',
    'scm.training': 'Expert Training',
    'scm.trainingDesc': 'Professional training programs for optimal machine operation',

    // Services
    'services.title': 'Comprehensive Woodworking Solutions',
    'services.subtitle': 'From consultation to maintenance, we provide end-to-end support for your woodworking operations.',
    'services.machinery': 'Machinery Sales',
    'services.machineryDesc': 'Premium SCM woodworking machines for all production needs',
    'services.technical': 'Technical Support',
    'services.technicalDesc': '24/7 expert technical assistance and troubleshooting',
    'services.maintenance': 'Maintenance & Repair',
    'services.maintenanceDesc': 'Professional maintenance and repair services',
    'services.training.title': 'Training Programs',
    'services.trainingDesc': 'Comprehensive operator and technician training',
    'services.parts.title': 'Spare Parts',
    'services.partsDesc': 'Genuine SCM spare parts and accessories',
    'services.consultation': 'Consultation',
    'services.consultationDesc': 'Expert advice on optimal machinery solutions',

    // Products
    'products.title': 'SCM Woodworking Machinery',
    'products.subtitle': 'Discover our comprehensive range of Italian woodworking solutions',
    'products.cnc': 'CNC Machining Centers',
    'products.cncDesc': 'Advanced CNC solutions for precision woodworking and complex operations.',
    'products.beamSaw': 'Beam Saws',
    'products.beamSawDesc': 'High-precision panel sizing machines for optimal cutting performance.',
    'products.edgeBander': 'Edge Banders',
    'products.edgeBanderDesc': 'Professional edge banding solutions for perfect finishing.',
    'products.boring': 'Boring Machines',
    'products.boringDesc': 'Precision drilling and boring machines for various applications.',
    'products.learnMore': 'Learn More',

    // Why Choose Us
    'why.title': 'Why Choose Sharrouf Bros?',
    'why.subtitle': 'Your trusted partner for Italian woodworking excellence in the Middle East',
    'why.authorized': 'Authorized SCM Dealer',
    'why.authorizedDesc': 'Official partnership ensures genuine products and comprehensive support',
    'why.experience': '15+ Years Experience',
    'why.experienceDesc': 'Extensive expertise in woodworking machinery and customer service',
    'why.support.title': 'Complete Support',
    'why.supportDesc': 'From installation to maintenance, we provide end-to-end assistance',
    'why.regional': 'Regional Coverage',
    'why.regionalDesc': 'Serving Lebanon, Middle East, and Africa with dedicated local support',

    // Contact Form
    'contact.title': 'Request a Quote',
    'contact.subtitle': 'Get in touch with our experts for personalized machinery solutions',
    'contact.firstName': 'First Name',
    'contact.lastName': 'Last Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.company': 'Company Name',
    'contact.machineCategory': 'Machine Category',
    'contact.selectCategory': 'Select machine category',
    'contact.productionVolume': 'Production Volume',
    'contact.selectVolume': 'Select production volume',
    'contact.projectDetails': 'Project Details',
    'contact.projectDetailsPlaceholder': 'Tell us about your project requirements...',
    'contact.sendRequest': 'Send Quote Request',
    'contact.sending': 'Sending...',
    'contact.success': 'Quote request submitted successfully! We will contact you soon.',
    'contact.error': 'Failed to submit quote request. Please try again.',

    // Machine Categories
    'category.cnc': 'CNC Machining Centers',
    'category.edgeBanding': 'Edge Banding Machines',
    'category.panelSaw': 'Panel Saws',
    'category.boring': 'Boring Machines',
    'category.sanding': 'Sanding Machines',
    'category.other': 'Other',

    // Production Volumes
    'volume.small': 'Small Scale (1-50 pieces/day)',
    'volume.medium': 'Medium Scale (50-200 pieces/day)',
    'volume.large': 'Large Scale (200+ pieces/day)',
    'volume.industrial': 'Industrial Scale (1000+ pieces/day)',

    // Locations
    'locations.title': 'Our Locations',
    'locations.subtitle': 'Strategic presence across the Middle East and Africa',
    'locations.lebanon': 'Lebanon - Headquarters',
    'locations.lebanonAddress': 'Beirut, Lebanon',
    'locations.lebanonDesc': 'Main showroom and service center',

    // Footer
    'footer.tagline': 'Your trusted partner for Italian woodworking excellence',
    'footer.quickLinks': 'Quick Links',
    'footer.contactInfo': 'Contact Information',
    'footer.followUs': 'Follow Us',
    'footer.allRights': 'All rights reserved.',

    // Company Info
    'company.name': 'Sharrouf Bros',
    'company.tagline': 'SCM Authorized Dealer',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.products': 'المنتجات',
    'nav.services': 'الخدمات',
    'nav.about': 'معلومات عنا',
    'nav.locations': 'المواقع',
    'nav.contact': 'اتصل بنا',
    'nav.getQuote': 'احصل على عرض سعر',
    'nav.language': 'اللغة:',

    // Hero Section
    'hero.title': 'تكنولوجيا الأخشاب',
    'hero.subtitle': 'للشرق الأوسط',
    'hero.description': 'وكيل SCM المعتمد يوفر أحدث حلول الأخشاب الإيطالية، خدمة دعم شاملة، وقطع غيار أصلية عبر لبنان والشرق الأوسط وأفريقيا.',
    'hero.viewProducts': 'عرض منتجاتنا',
    'hero.getFreeQuote': 'احصل على عرض سعر مجاني',
    'hero.yearsExperience': 'سنوات من الخبرة',
    'hero.machinesSold': 'آلة مباعة',
    'hero.authorizedDealer': 'وكيل معتمد',
    'hero.expertSupport': 'دعم خبير',

    // SCM Partnership
    'scm.title': 'نمثل بفخر',
    'scm.subtitle': 'شريكك الموثوق لـ SCM في الشرق الأوسط',
    'scm.description': 'بصفتنا الوكيل المعتمد لمجموعة SCM، نقدم لك أفضل آلات الأخشاب الإيطالية في العالم. مع أكثر من 70 عاماً من الابتكار، تمثل SCM التميز في الهندسة الدقيقة والتكنولوجيا المتطورة.',
    'scm.excellence': 'التميز الإيطالي',
    'scm.excellenceDesc': 'آلات عالية الجودة مصممة ومصنعة في إيطاليا',
    'scm.support': 'دعم 24/7',
    'scm.supportDesc': 'دعم فني شامل وخدمات صيانة',
    'scm.parts': 'قطع غيار أصلية',
    'scm.partsDesc': 'قطع غيار وإكسسوارات SCM الأصلية متوفرة',
    'scm.training': 'تدريب خبير',
    'scm.trainingDesc': 'برامج تدريب مهنية لتشغيل الآلات الأمثل',

    // Services
    'services.title': 'حلول شاملة للأخشاب',
    'services.subtitle': 'من الاستشارة إلى الصيانة، نوفر دعماً شاملاً لعمليات الأخشاب الخاصة بك.',
    'services.machinery': 'مبيعات الآلات',
    'services.machineryDesc': 'آلات SCM المتميزة للأخشاب لجميع احتياجات الإنتاج',
    'services.technical': 'الدعم الفني',
    'services.technicalDesc': 'مساعدة فنية خبيرة واستكشاف أخطاء 24/7',
    'services.maintenance': 'الصيانة والإصلاح',
    'services.maintenanceDesc': 'خدمات صيانة وإصلاح مهنية',
    'services.training.title': 'برامج التدريب',
    'services.trainingDesc': 'تدريب شامل للمشغلين والفنيين',
    'services.parts.title': 'قطع الغيار',
    'services.partsDesc': 'قطع غيار وإكسسوارات SCM الأصلية',
    'services.consultation': 'الاستشارة',
    'services.consultationDesc': 'مشورة خبيرة حول حلول الآلات المثلى',

    // Products
    'products.title': 'آلات الأخشاب SCM',
    'products.subtitle': 'اكتشف مجموعتنا الشاملة من حلول الأخشاب الإيطالية',
    'products.cnc': 'مراكز التشغيل CNC',
    'products.cncDesc': 'حلول CNC متقدمة للأخشاب الدقيقة والعمليات المعقدة.',
    'products.beamSaw': 'منشار الحزمة',
    'products.beamSawDesc': 'آلات تحديد حجم الألواح عالية الدقة لأداء قطع مثالي.',
    'products.edgeBander': 'آلات ربط الحواف',
    'products.edgeBanderDesc': 'حلول ربط الحواف المهنية للتشطيب المثالي.',
    'products.boring': 'آلات الثقب',
    'products.boringDesc': 'آلات ثقب وحفر دقيقة لتطبيقات متنوعة.',
    'products.learnMore': 'اعرف أكثر',

    // Why Choose Us
    'why.title': 'لماذا تختار الشروف براذرز؟',
    'why.subtitle': 'شريكك الموثوق للتميز الإيطالي في الأخشاب في الشرق الأوسط',
    'why.authorized': 'وكيل SCM معتمد',
    'why.authorizedDesc': 'الشراكة الرسمية تضمن منتجات أصلية ودعم شامل',
    'why.experience': '15+ سنة خبرة',
    'why.experienceDesc': 'خبرة واسعة في آلات الأخشاب وخدمة العملاء',
    'why.support.title': 'دعم كامل',
    'why.supportDesc': 'من التركيب إلى الصيانة، نوفر مساعدة شاملة',
    'why.regional': 'تغطية إقليمية',
    'why.regionalDesc': 'خدمة لبنان والشرق الأوسط وأفريقيا بدعم محلي مخصص',

    // Contact Form
    'contact.title': 'طلب عرض سعر',
    'contact.subtitle': 'تواصل مع خبرائنا للحصول على حلول آلات مخصصة',
    'contact.firstName': 'الاسم الأول',
    'contact.lastName': 'اسم العائلة',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'الهاتف',
    'contact.company': 'اسم الشركة',
    'contact.machineCategory': 'فئة الآلة',
    'contact.selectCategory': 'اختر فئة الآلة',
    'contact.productionVolume': 'حجم الإنتاج',
    'contact.selectVolume': 'اختر حجم الإنتاج',
    'contact.projectDetails': 'تفاصيل المشروع',
    'contact.projectDetailsPlaceholder': 'أخبرنا عن متطلبات مشروعك...',
    'contact.sendRequest': 'إرسال طلب عرض السعر',
    'contact.sending': 'جاري الإرسال...',
    'contact.success': 'تم إرسال طلب عرض السعر بنجاح! سنتواصل معك قريباً.',
    'contact.error': 'فشل في إرسال طلب عرض السعر. يرجى المحاولة مرة أخرى.',

    // Machine Categories
    'category.cnc': 'مراكز التشغيل CNC',
    'category.edgeBanding': 'آلات ربط الحواف',
    'category.panelSaw': 'منشار الألواح',
    'category.boring': 'آلات الثقب',
    'category.sanding': 'آلات الصنفرة',
    'category.other': 'أخرى',

    // Production Volumes
    'volume.small': 'نطاق صغير (1-50 قطعة/يوم)',
    'volume.medium': 'نطاق متوسط (50-200 قطعة/يوم)',
    'volume.large': 'نطاق كبير (200+ قطعة/يوم)',
    'volume.industrial': 'نطاق صناعي (1000+ قطعة/يوم)',

    // Locations
    'locations.title': 'مواقعنا',
    'locations.subtitle': 'حضور استراتيجي عبر الشرق الأوسط وأفريقيا',
    'locations.lebanon': 'لبنان - المقر الرئيسي',
    'locations.lebanonAddress': 'بيروت، لبنان',
    'locations.lebanonDesc': 'صالة العرض الرئيسية ومركز الخدمة',

    // Footer
    'footer.tagline': 'شريكك الموثوق للتميز الإيطالي في الأخشاب',
    'footer.quickLinks': 'روابط سريعة',
    'footer.contactInfo': 'معلومات الاتصال',
    'footer.followUs': 'تابعنا',
    'footer.allRights': 'جميع الحقوق محفوظة.',

    // Company Info
    'company.name': 'الشروف براذرز',
    'company.tagline': 'وكيل SCM المعتمد',
  }
};
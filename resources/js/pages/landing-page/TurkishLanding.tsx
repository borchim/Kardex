import React from 'react';
import { Head, usePage } from '@inertiajs/react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ScreenshotsSection from './components/ScreenshotsSection';
import WhyChooseUs from './components/WhyChooseUs';
import TemplatesSection from './components/TemplatesSection';
import AboutUs from './components/AboutUs';
import TeamSection from './components/TeamSection';
import TestimonialsSection from './components/TestimonialsSection';
import PlansSection from './components/PlansSection';
import FaqSection from './components/FaqSection';
import NewsletterSection from './components/NewsletterSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ActiveCampaignsSection from './components/ActiveCampaignsSection';
import { useBrand } from '@/contexts/BrandContext';
import { THEME_COLORS } from '@/hooks/use-appearance';
import { useFavicon } from '@/hooks/use-favicon';
import { useTranslation } from 'react-i18next';

interface Plan {
  id: number;
  name: string;
  description: string;
  price: number;
  yearly_price?: number;
  duration: string;
  features?: string[];
  is_popular?: boolean;
  is_plan_enable: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  content: string;
  avatar?: string;
  rating: number;
}

interface Faq {
  id: number;
  question: string;
  answer: string;
}

interface LandingSettings {
  company_name: string;
  contact_email: string;
  contact_phone: string;
  contact_address: string;
  config_sections?: {
    sections: Array<{ key: string; [key: string]: any }>;
    theme?: {
      primary_color?: string;
      secondary_color?: string;
      accent_color?: string;
      logo_light?: string;
      logo_dark?: string;
      favicon?: string;
    };
    seo?: {
      meta_title?: string;
      meta_description?: string;
      meta_keywords?: string;
    };
    custom_css?: string;
    custom_js?: string;
    section_order?: string[];
    section_visibility?: { [key: string]: boolean };
  };
}

interface CustomPage {
  id: number;
  title: string;
  subtitle?: string;
  slug: string;
}

interface Campaign {
  id: number;
  name: string;
  description: string;
  start_date: string;
  end_date: string;
  business: {
    id: number;
    name: string;
    slug: string;
    url_prefix?: string;
    custom_domain?: string;
  };
}

interface PageProps {
  plans: Plan[];
  testimonials: Testimonial[];
  faqs: Faq[];
  customPages: CustomPage[];
  settings: LandingSettings;
  activeCampaigns: Campaign[];
  seo_data?: {
    meta_title?: string;
    meta_description?: string;
    keywords?: string;
    og_image?: string;
  };
  flash?: {
    success?: string;
    error?: string;
  };
}

export default function TurkishLanding() {
  const { plans, testimonials, faqs, customPages = [], settings, activeCampaigns = [], seo_data, flash } = usePage<PageProps>().props;
  const { i18n } = useTranslation();

  useFavicon();

  const { themeColor, customColor } = useBrand();
  const configPrimaryColor = settings.config_sections?.theme?.primary_color;
  const primaryColor = configPrimaryColor || (themeColor === 'custom' ? customColor : THEME_COLORS[themeColor as keyof typeof THEME_COLORS]);
  const page = usePage<any>();
  const { auth } = page.props;

  React.useEffect(() => {
    i18n.changeLanguage('tr');
  }, []);

  const getSectionData = (key: string) =>
    settings.config_sections?.sections?.find((s) => s.key === key) || {};

  const isSectionVisible = (key: string) =>
    settings.config_sections?.section_visibility?.[key] !== false;

  const sectionOrder = settings.config_sections?.section_order || [
    'header', 'hero', 'features', 'screenshots', 'why_choose_us', 'templates',
    'about', 'team', 'testimonials', 'active_campaigns', 'plans', 'faq',
    'newsletter', 'contact', 'footer',
  ];

  const sectionComponents = {
    header: () => isSectionVisible('header') && (
      <Header
        settings={settings}
        sectionData={getSectionData('header')}
        customPages={customPages}
        brandColor={primaryColor}
        user={auth.user}
      />
    ),
    hero: () => isSectionVisible('hero') && (
      <HeroSection settings={settings} sectionData={getSectionData('hero')} brandColor={primaryColor} />
    ),
    features: () => isSectionVisible('features') && (
      <FeaturesSection settings={settings} sectionData={getSectionData('features')} brandColor={primaryColor} />
    ),
    screenshots: () => isSectionVisible('screenshots') && (
      <ScreenshotsSection settings={settings} sectionData={getSectionData('screenshots')} brandColor={primaryColor} />
    ),
    why_choose_us: () => isSectionVisible('why_choose_us') && (
      <WhyChooseUs settings={settings} sectionData={getSectionData('why_choose_us')} brandColor={primaryColor} />
    ),
    templates: () => isSectionVisible('templates') && (
      <TemplatesSection settings={settings} sectionData={getSectionData('templates')} brandColor={primaryColor} />
    ),
    about: () => isSectionVisible('about') && (
      <AboutUs settings={settings} sectionData={getSectionData('about')} brandColor={primaryColor} />
    ),
    team: () => isSectionVisible('team') && (
      <TeamSection settings={settings} sectionData={getSectionData('team')} brandColor={primaryColor} />
    ),
    testimonials: () => isSectionVisible('testimonials') && (
      <TestimonialsSection
        testimonials={testimonials}
        settings={settings}
        sectionData={getSectionData('testimonials')}
        brandColor={primaryColor}
      />
    ),
    active_campaigns: () => isSectionVisible('active_campaigns') && activeCampaigns.length > 0 && (
      <ActiveCampaignsSection
        campaigns={activeCampaigns}
        settings={settings}
        sectionData={getSectionData('active_campaigns')}
        brandColor={primaryColor}
      />
    ),
    plans: () => isSectionVisible('plans') && (
      <PlansSection plans={plans} settings={settings} sectionData={getSectionData('plans')} brandColor={primaryColor} />
    ),
    faq: () => isSectionVisible('faq') && (
      <FaqSection faqs={faqs} settings={settings} sectionData={getSectionData('faq')} brandColor={primaryColor} />
    ),
    newsletter: () => isSectionVisible('newsletter') && (
      <NewsletterSection flash={flash} settings={settings} sectionData={getSectionData('newsletter')} brandColor={primaryColor} />
    ),
    contact: () => isSectionVisible('contact') && (
      <ContactSection flash={flash} settings={settings} sectionData={getSectionData('contact')} brandColor={primaryColor} />
    ),
    footer: () => isSectionVisible('footer') && (
      <Footer settings={settings} sectionData={getSectionData('footer')} brandColor={primaryColor} />
    ),
  };

  return (
    <>
      <Head title={seo_data?.meta_title || 'Kardex - Türk Emlak Danışmanları İçin Dijital Kartvizit'}>
        <meta name="description" content={seo_data?.meta_description || "Türkiye'de gayrimenkul danışmanları için NFC ve çok dilli dijital kartvizit platformu."} />
        <meta name="keywords" content={seo_data?.keywords || 'dijital kartvizit, emlak danışmanı, NFC kart, Türkiye gayrimenkul'} />
        <meta property="og:title" content={seo_data?.meta_title || 'Kardex - Türk Emlak Danışmanları İçin Dijital Kartvizit'} />
        <meta property="og:description" content={seo_data?.meta_description || "Türkiye'de gayrimenkul danışmanları için NFC ve çok dilli dijital kartvizit platformu."} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo_data?.meta_title || 'Kardex - Türk Emlak Danışmanları İçin Dijital Kartvizit'} />
        <link rel="alternate" hrefLang="tr" href="/tr" />
      </Head>

      <div
        className="min-h-screen bg-white"
        data-landing-page="true"
        style={{
          scrollBehavior: 'smooth',
          '--brand-color': primaryColor,
          '--primary-color': settings.config_sections?.theme?.primary_color || primaryColor,
          '--secondary-color': settings.config_sections?.theme?.secondary_color || '#8b5cf6',
          '--accent-color': settings.config_sections?.theme?.accent_color || '#10b77f',
        } as React.CSSProperties}
      >
        {sectionOrder.map((sectionKey) => {
          const Component = sectionComponents[sectionKey as keyof typeof sectionComponents];
          return Component ? <React.Fragment key={sectionKey}>{Component()}</React.Fragment> : null;
        })}
      </div>
    </>
  );
}

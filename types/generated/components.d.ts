import type { Schema, Struct } from '@strapi/strapi';

export interface AboutFounder extends Struct.ComponentSchema {
  collectionName: 'components_about_founders';
  info: {
    displayName: 'Founder';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface AboutProcess extends Struct.ComponentSchema {
  collectionName: 'components_about_processes';
  info: {
    displayName: 'Process';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Enumeration<
      ['pencil', 'search', 'package', 'truck']
    > &
      Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutTeam extends Struct.ComponentSchema {
  collectionName: 'components_about_teams';
  info: {
    displayName: 'Team';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AboutValue extends Struct.ComponentSchema {
  collectionName: 'components_about_values';
  info: {
    displayName: 'Value';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Enumeration<['gem', 'award', 'leaf']> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CategoriesFeatures extends Struct.ComponentSchema {
  collectionName: 'components_categories_features';
  info: {
    displayName: 'Features';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Enumeration<
      [
        'globe',
        'layers',
        'diamond',
        'shield',
        'gem',
        'hammer',
        'star',
        'sparkles',
      ]
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContactUsConnect extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_connects';
  info: {
    displayName: 'Connect';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Enumeration<['facebook', 'instagram', 'linkedin']> &
      Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContactUsContact extends Struct.ComponentSchema {
  collectionName: 'components_contact_us_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    content: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Enumeration<['map', 'phone', 'mail']> &
      Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    link_text: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterBusinessHours extends Struct.ComponentSchema {
  collectionName: 'components_footer_business_hours';
  info: {
    displayName: 'Business hours';
  };
  attributes: {
    content: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterContact extends Struct.ComponentSchema {
  collectionName: 'components_footer_contacts';
  info: {
    displayName: 'contact';
  };
  attributes: {
    email: Schema.Attribute.Email & Schema.Attribute.Required;
    phone: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterFooter extends Struct.ComponentSchema {
  collectionName: 'components_footer_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    business_hours: Schema.Attribute.Component<'footer.business-hours', false>;
    contact: Schema.Attribute.Component<'footer.contact', false>;
    info: Schema.Attribute.Component<'footer.info', false>;
  };
}

export interface FooterInfo extends Struct.ComponentSchema {
  collectionName: 'components_footer_infos';
  info: {
    displayName: 'Info';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    facebook: Schema.Attribute.String & Schema.Attribute.Required;
    instagram: Schema.Attribute.String & Schema.Attribute.Required;
    linkedin: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FrequentlyAskedQuestionsFrequentlyAskedQuestions
  extends Struct.ComponentSchema {
  collectionName: 'components_frequently_asked_questions_frequently_asked_questions';
  info: {
    displayName: 'Frequently asked questions';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Enumeration<['globe', 'ship', 'stars', 'diamond']> &
      Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HeroHome extends Struct.ComponentSchema {
  collectionName: 'components_hero_homes';
  info: {
    description: '';
    displayName: 'Home';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    prefix: Schema.Attribute.String & Schema.Attribute.Required;
    suffix: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HeroOthers extends Struct.ComponentSchema {
  collectionName: 'components_hero_others';
  info: {
    description: '';
    displayName: 'Others';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface StatsStats extends Struct.ComponentSchema {
  collectionName: 'components_stats_stats';
  info: {
    displayName: 'Stats';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<['clock', 'shield', 'globe']> &
      Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface TestimonialsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_testimonials_testimonials';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    author: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WhoWeAreImages extends Struct.ComponentSchema {
  collectionName: 'components_who_we_are_images';
  info: {
    description: '';
    displayName: 'Who we are content';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    images: Schema.Attribute.Component<'who-we-are.who-we-are', true> &
      Schema.Attribute.Required;
  };
}

export interface WhoWeAreWhoWeAre extends Struct.ComponentSchema {
  collectionName: 'components_who_we_are_who_we_ares';
  info: {
    description: '';
    displayName: 'Image';
  };
  attributes: {
    large_image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    small_image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface WhyChooseUsWhyChooseUs extends Struct.ComponentSchema {
  collectionName: 'components_why_choose_us_why_choose_uses';
  info: {
    description: '';
    displayName: 'Why choose us';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<['gem', 'tool', 'users']> &
      Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.founder': AboutFounder;
      'about.process': AboutProcess;
      'about.team': AboutTeam;
      'about.value': AboutValue;
      'categories.features': CategoriesFeatures;
      'contact-us.connect': ContactUsConnect;
      'contact-us.contact': ContactUsContact;
      'footer.business-hours': FooterBusinessHours;
      'footer.contact': FooterContact;
      'footer.footer': FooterFooter;
      'footer.info': FooterInfo;
      'frequently-asked-questions.frequently-asked-questions': FrequentlyAskedQuestionsFrequentlyAskedQuestions;
      'hero.home': HeroHome;
      'hero.others': HeroOthers;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
      'stats.stats': StatsStats;
      'testimonials.testimonials': TestimonialsTestimonials;
      'who-we-are.images': WhoWeAreImages;
      'who-we-are.who-we-are': WhoWeAreWhoWeAre;
      'why-choose-us.why-choose-us': WhyChooseUsWhyChooseUs;
    }
  }
}

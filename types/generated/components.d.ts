import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionsSponsoredBy extends Schema.Component {
  collectionName: 'components_sections_sponsored_bies';
  info: {
    displayName: 'SponsoredBy';
    description: '';
  };
  attributes: {
    isShow: Attribute.Boolean & Attribute.DefaultTo<true>;
    sponsors: Attribute.Media<'images', true>;
  };
}

export interface SectionsSingleTypeId extends Schema.Component {
  collectionName: 'components_sections_single_type_ids';
  info: {
    displayName: 'SingleTypeId';
    description: '';
  };
  attributes: {
    isShow: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    singleTypeId: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'footer'>;
  };
}

export interface SectionsOurStats extends Schema.Component {
  collectionName: 'components_sections_our_stats';
  info: {
    displayName: 'OurStats';
    description: '';
  };
  attributes: {
    isShow: Attribute.Boolean & Attribute.DefaultTo<true>;
    title: Attribute.String;
    subtitle: Attribute.String;
    shortDesc: Attribute.String;
    highlights: Attribute.Component<'components.highlights', true>;
  };
}

export interface SectionsNavbar extends Schema.Component {
  collectionName: 'components_sections_navbars';
  info: {
    displayName: 'Navbar';
    description: '';
  };
  attributes: {
    isShow: Attribute.Boolean & Attribute.DefaultTo<true>;
    logo: Attribute.Media<'images'>;
    menuItems: Attribute.Component<'components.menu-item', true>;
    ctas: Attribute.Component<'components.cta', true>;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    isShow: Attribute.Boolean & Attribute.DefaultTo<true>;
    heroText: Attribute.RichText;
    heroImage: Attribute.Media<'images'>;
    ctas: Attribute.Component<'components.cta', true>;
  };
}

export interface SectionsFooter extends Schema.Component {
  collectionName: 'components_sections_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    isShow: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface SectionsFaq extends Schema.Component {
  collectionName: 'components_sections_faqs';
  info: {
    displayName: 'Faq';
    description: '';
  };
  attributes: {
    isShow: Attribute.Boolean & Attribute.DefaultTo<true>;
    title: Attribute.String;
    shortDesc: Attribute.String;
    faqs: Attribute.Component<'components.faqs', true>;
  };
}

export interface SectionsEventContent extends Schema.Component {
  collectionName: 'components_sections_event_contents';
  info: {
    displayName: 'EventContent';
    description: '';
  };
  attributes: {
    isShow: Attribute.Boolean & Attribute.DefaultTo<true>;
    title: Attribute.String;
    speakers: Attribute.Component<'components.speakers', true>;
  };
}

export interface SectionsAboutEvent extends Schema.Component {
  collectionName: 'components_sections_about_events';
  info: {
    displayName: 'AboutEvent';
  };
  attributes: {
    isShow: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface ComponentsSpeakers extends Schema.Component {
  collectionName: 'components_components_speakers';
  info: {
    displayName: 'speakers';
  };
  attributes: {
    title: Attribute.String;
    name: Attribute.String;
    position: Attribute.String;
    panel: Attribute.String;
    img: Attribute.Media<'images'>;
  };
}

export interface ComponentsMenuItem extends Schema.Component {
  collectionName: 'components_components_menu_items';
  info: {
    displayName: 'menuItem';
    description: '';
  };
  attributes: {
    icon: Attribute.String;
    name: Attribute.String;
    link: Attribute.String;
  };
}

export interface ComponentsHighlights extends Schema.Component {
  collectionName: 'components_components_highlights';
  info: {
    displayName: 'highlights';
  };
  attributes: {
    title: Attribute.String;
    count: Attribute.String;
  };
}

export interface ComponentsFaqs extends Schema.Component {
  collectionName: 'components_components_faqs';
  info: {
    displayName: 'faqs';
  };
  attributes: {
    title: Attribute.String;
    desc: Attribute.String;
  };
}

export interface ComponentsCta extends Schema.Component {
  collectionName: 'components_components_ctas';
  info: {
    displayName: 'cta';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    variant: Attribute.Enumeration<
      ['contained', 'filled', 'gradient', 'outlined', 'text']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'contained'>;
    type: Attribute.Enumeration<['primary', 'secondary']> &
      Attribute.Required &
      Attribute.DefaultTo<'secondary'>;
    startIcon: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'sections.sponsored-by': SectionsSponsoredBy;
      'sections.single-type-id': SectionsSingleTypeId;
      'sections.our-stats': SectionsOurStats;
      'sections.navbar': SectionsNavbar;
      'sections.hero': SectionsHero;
      'sections.footer': SectionsFooter;
      'sections.faq': SectionsFaq;
      'sections.event-content': SectionsEventContent;
      'sections.about-event': SectionsAboutEvent;
      'components.speakers': ComponentsSpeakers;
      'components.menu-item': ComponentsMenuItem;
      'components.highlights': ComponentsHighlights;
      'components.faqs': ComponentsFaqs;
      'components.cta': ComponentsCta;
    }
  }
}

import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentMediaItem extends Schema.Component {
  collectionName: 'components_content_media_items';
  info: {
    displayName: 'Media Item';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Media;
  };
}

export interface ContentText extends Schema.Component {
  collectionName: 'components_content_texts';
  info: {
    displayName: 'Text';
    description: '';
  };
  attributes: {
    content: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.media-item': ContentMediaItem;
      'content.text': ContentText;
    }
  }
}

import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentTextEditorJs extends Schema.Component {
  collectionName: 'components_content_text_editor_js_s';
  info: {
    displayName: 'Text (Editor.js)';
  };
  attributes: {
    content: Attribute.RichText;
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
      'content.text-editor-js': ContentTextEditorJs;
      'content.text': ContentText;
    }
  }
}

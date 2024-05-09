import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import {documentInternationalization} from '@sanity/document-internationalization'
import {schemaTypes} from './schemaTypes'
import { i18n } from './i18n.config'

export default defineConfig({
  name: 'default',
  title: 'psychologist',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET as string,

  basePath: '/studio',

  plugins: [
    structureTool(), 
    visionTool(),
    documentInternationalization({
      // Required configuration
      supportedLanguages: i18n.languages,
      schemaTypes: ['header', 'mainPage', 'blogPosts', 'footer'],
    })
  ],

  schema: {
    types: schemaTypes,
    // Filter out the default template for new type documents
    templates: (prev) =>
      prev.filter((template) => !['header', 'mainPage', 'blogPosts', 'footer'].includes(template.id)),
  },
})

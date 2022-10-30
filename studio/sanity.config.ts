import {codeInput} from '@sanity/code-input'
import {createConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {structure} from './structure'
import {visionTool} from '@sanity/vision'
import {dashboardTool, projectInfoWidget, projectUsersWidget} from '@sanity/dashboard'

export default createConfig({
  name: 'default',
  title: 'mujaj.dev',

  projectId: 'yw21ya6w',
  dataset: 'production',

  plugins: [
    deskTool({structure}),
    codeInput(),
    dashboardTool({widgets: [projectInfoWidget(), projectUsersWidget()]}),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})

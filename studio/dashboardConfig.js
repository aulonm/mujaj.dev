export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60478a858bd416e646a27ed8',
                  title: 'Sanity Studio',
                  name: 'mujaj-dev-studio',
                  apiId: '668d4a87-8fa7-4a88-82b3-75d08b78e9cb'
                },
                {
                  buildHookId: '60478a85138c6316fea57c79',
                  title: 'Blog Website',
                  name: 'mujaj-dev',
                  apiId: '1299bbb0-8bff-4138-8fe1-da7986c96dcd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aulonm/mujaj.dev',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://mujaj-dev.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}}
  ]
}

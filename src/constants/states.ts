export const STATES = [
    {
      id: 'pb',
      name: 'Punjab',
      path: '/pb',
      disabled: false,
      content: {
        hero: {
          title: 'ROI Punjab',
          description: 'Land of the Five Rivers'
        }
      }
    },
    {
      id: 'up',
      name: 'Uttar Pradesh',
      disabled: true,
      content: {
        hero: {
          title: 'ROI Uttar Pradesh',
          description: 'The Land of the Ganga and the Yamuna'
        }
      }
    },
    {
      id: 'mp',
      name: 'Madhya Pradesh',
      disabled: true,
      content: {
        hero: {
          title: 'ROI Madhya Pradesh',
          description: 'The Heart of India'
        }
      }
    },
    // Add more states...
  ] as const;
  
  export type StateId = typeof STATES[number]['id'];
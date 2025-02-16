import { CONSULTANTS } from "./consultants";

export const STATES = [
    {
      id: 'pb',
      name: 'Punjab', 
      disabled: false,
      content: {
        hero: {
          title: 'ROI Punjab',
          description: 'Land of the Five Rivers'
        },
        courses_grid: {
          heading: 'Courses',
          body: 'Registrations Open!',
          courses: [
            { 
              id: 'course1',
              name: 'Social Entrepreneurship',
              steps: [
                { id: 'step1' }
              ]
            },
            {
              id: 'course2',
              name: 'Fellowship',
              steps: [
                { id: 'step2' }
              ]
            }
          ]
        },
        journey: {
          slice_type: "journey",
          variation: "imageOnRight", // or "imageOnLeft"
          primary: {
            theme: "Blue", // Can be "Blue", "Orange", "Navy", or "Lime"
            heading: "Your Journey Starts Here",
            body: "Begin your educational journey with our comprehensive courses.",
            button: {
              text: "Start Learning",
              url: "/courses",
            },
            imageSet: "discover", // Reference the image set ID
          },
        },
        teamgrid: {
          heading: "Mentors",
          consultants: CONSULTANTS
        }
      }, 
    },
    {
      id: 'up',
      name: 'Uttar Pradesh',
      disabled: true,
      content: {
        hero: {
          title: 'ROI Uttar Pradesh',
          description: 'The Land of the Ganga and the Yamuna'
        },
        courses_grid: {
          heading: 'Courses',
          body: 'Registrations Open!',
          courses: [
            { 
              id: 'course2',
              steps: [
                { id: 'step2' }
              ]
            }
          ]
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
    }
  ] as const;

export type StateId = typeof STATES[number]['id'];
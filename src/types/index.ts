export interface StateContent {
    hero: {
      title: string;
      description: string;
    };
    // Add more content sections
  }
  
  export interface State {
    id: string;
    name: string;
    path: string;
    content: StateContent;
    disabled?: boolean;
  }
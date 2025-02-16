interface Course {
  id: string;
  steps: {
    id: string;
  }[];
}

interface CoursesGrid {
  heading: string;
  body: string;
  courses: Course[];
}

export interface StateContent {
  hero: {
    title: string;
    description: string;
  };
  courses_grid?: CoursesGrid;
}

export interface State {
  id: string;
  name: string;
  path: string;
  content: StateContent;
  disabled?: boolean;
}
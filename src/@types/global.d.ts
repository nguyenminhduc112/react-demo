type TypeProps = {
  name: string;
};

type TypeTodo = {
  todo: {
    title: string;
    completed: boolean;
  };
  handleEdit: (todo: any, title: string) => void;
  togggleComplete: (todo: any) => void;
  handledDelete: (todo: any) => void;
};

class todo {
  id: number;
  title: string;

  constructor(todoText: string) {
    this.title = todoText;
    this.id = Math.random();
  }
}

export default todo;

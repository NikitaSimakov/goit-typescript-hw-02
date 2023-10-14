/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Props {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page<T extends Props> extends Component<T> {
  constructor(props: T) {
    super(props);
  }
  pageInfo(): void {
    console.log(this.props.title);
  }
}

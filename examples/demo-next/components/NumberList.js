function ListItem(props) {
  return <li>{props.value}</li>;
}

export default function NumberList(props) {
  const { numbers } = props;
  const listItems = numbers.map((number) => <ListItem value={number} key={number.toString()}>{number}</ListItem>);
  return (
    <ul>{listItems}</ul>
  );
}

const List = (props: { id: string; text: string }) => {
  return <li key={props.id}>{props.text}</li>;
};

export default List;

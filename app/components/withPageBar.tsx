const withPageBar = (props: { title: string; }) => ({
  title: props.title.toUpperCase(),
  headerStyle: {
    backgroundColor: '#346',
  },
  headerTintColor: "#fff",
});

export default withPageBar;

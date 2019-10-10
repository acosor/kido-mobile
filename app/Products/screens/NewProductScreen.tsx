import React from "react";
import { StyleSheet } from "react-native";
import { Button, Container, Content, Footer, FooterTab, Form, Input, Item, Label, Text } from "native-base";
import { NavigationContainerProps } from "react-navigation";

import withPageBar from "../../components/withPageBar";

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    flex: 1,
  },
  content:{
    paddingLeft: 8,
    paddingRight: 8,
  },
  button: {
    backgroundColor: "#27d",
  },
  label: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

interface Props extends NavigationContainerProps { }

export default class NewProductScreen extends React.Component<Props> {
  static navigationOptions = withPageBar({ title: "New Product" });

  render() {
    return (
      <Container>
        <Content style={styles.content}>
          <Form>
            <Item floatingLabel>
              <Label>SKU.</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Title</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Type</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Price</Label>
              <Input />
            </Item>
          </Form>
        </Content>
        <Footer>
          <FooterTab>
            <Button full style={styles.button}>
              <Text style={styles.label}>Save</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

import React from "react";

import { LoadingMessage } from "./LoadingMessage";

interface Props {}
interface State {
  isLoading: boolean;
}
export class InitializeApp extends React.Component<Props, State> {
  public state: { isLoading: boolean } = {
    isLoading: true,
  };

  async componentDidMount() {
    this.setState({
      isLoading: false,
    });
  }

  public render() {
    return this.state.isLoading ? <LoadingMessage /> : this.props.children;
  }
}

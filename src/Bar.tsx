/**
 */
import React, { Component } from 'react';
import { Foo } from './Foo';

type State = {};
type Props = {};
export class Bar extends Component<Props, State> {
  render() {
    return (
      <Foo foo="sdf"/>
    );
  }
}
import React, { Component } from 'react';
import { gsap } from 'gsap';


class Reveal extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    gsap.from(this.myRef.current, { opacity: 0, duration: 1 });
  }

  render() {
    return (
      <div ref={this.myRef} className='text-[6rem] text-black z-30'>
        This is my component.
      </div>
    );
  }
}

export default Reveal;
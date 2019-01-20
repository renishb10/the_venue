import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Fade';

import CustomButton from '../utils/CustomButton';

class Discount extends Component {
  
  state = {
      discountStart: 0,
      discountEnd: 35
  }

  percentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
        this.setState({
            discountStart: this.state.discountStart + 1
        })
    }
  }

  componentDidUpdate() {
      setTimeout(() => {
          this.percentage()
      }, 30)
  }

  render() {
    return (
      <div className="center_wrapper">
        
        <div className="discount_wrapper">
            <Fade
                onReveal={() => this.percentage()}
            >
                <div className="discount_percentage">
                    <span>{this.state.discountStart}%</span>
                    <span>OFF</span>
                </div>
            </Fade>

            <Slide right>
                <div className="discount_description">
                    <h3>Purchase tickets before 15th December</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    <CustomButton text="Purchase Tickets" bck="#ffa800" color="#ffffff" link="#" />
                </div>
            </Slide> 
        </div>
      </div>
    )
  }
}

export default Discount;

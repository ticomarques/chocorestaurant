import React, { Component } from 'react'
import styled from 'styled-components'
import {styles} from '../../../utils/index'
import {FaInstagram, FaTwitter, FaFacebook} from 'react-icons/fa'

export default class NavbarIcons extends Component {
  state = {
    icons: [{
      id: 0,
      icon: <FaFacebook className="icon facebook-icon" />,
      link: 'https://www.facebook.com'
    }, {
      id: 1,
      icon: <FaTwitter className="icon twitter-icon" />,
      link: 'https://www.twitter.com'
    }, {
      id: 2,
      icon: <FaInstagram className="icon instagram-icon" />,
      link: 'https://www.instagram.com'
    }]
  }
  render() {
    return (
      <IconWrapper>
        {this.state.icons.map((item) => {
          return(
            <a href={item.path} key={item.id} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>
          )
        })}
      </IconWrapper>
    )
  }
}

const IconWrapper = styled.div`
  .icon{
    font-size: 1.3rem;
    cursor: pointer;
    ${styles.transFunction()};
    &:hover{
      color: ${styles.colors.mainYellow};
    }
  }
  .facebook-icon {
    color: #3b579d;
  }
  .twitter-icon {
    color: #3ab7f0;
  }
  .instagram-icon {
    color: #da5f53;
  }
  display:none;
  @media (min-width: 768px){
    display:flex;
    width: 10rem;
    justify-content: space-around;
  }
`;

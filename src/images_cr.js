import React from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import image1 from './images/lifestyle_thmb_img01.png';
import image2 from './images/lifestyle_thmb_img02.png';
import image3 from './images/lifestyle_thmb_img03.png';
import image4 from './images/lifestyle_thmb_img04.png';

const images = [{ source: 'https://jpeg.org/images/jpeg2000-home.jpg' }, { source: 'https://jpeg.org/images/jpeg-home.jpg' }];

export default class Component extends React.Component {
  state = { modalIsOpen: false };
  toggleModal = () => {
    this.setState(state => ({ modalIsOpen: !state.modalIsOpen }));
  };
  render() {
    const { modalIsOpen } = this.state;

    return (
        
      <ModalGateway>
        {modalIsOpen ? (
          <Modal onClose={this.toggleModal}>
            <Carousel views={images} />
          </Modal>
        ) : null}
      </ModalGateway>
    );
  }
}
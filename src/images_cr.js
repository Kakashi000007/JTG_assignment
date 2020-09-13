import React from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';

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
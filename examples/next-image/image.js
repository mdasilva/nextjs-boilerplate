import React, { memo } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import checkProps from '@jam3/react-check-extra-props';

import styles from './image.module.scss';

function NextImage({ className }) {
  return (
    <div className={classnames(styles.NextImage, className)}>
      NextImage component
      <div className={styles.imageBox}>
        <Image
          src="/assets/images/share-image.jpg"
          alt="layout responsive: The image will scale the dimensions down for smaller viewports and scale up for larger viewports"
          width=""
          height=""
          layout="responsive"
        />
        <Image
          src="/assets/images/share-image.jpg"
          alt="layout intrinsic: The image will scale the dimensions down for smaller viewports but maintain the original dimensions for larger viewports"
          width="700"
          height="500"
          sizes="700px"
        />
      </div>
    </div>
  );
}

NextImage.propTypes = checkProps({
  className: PropTypes.string
});

NextImage.defaultProps = {};

export default memo(NextImage);

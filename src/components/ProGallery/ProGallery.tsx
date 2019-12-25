import * as React from 'react';
import styles from './ProGallery.st.css';
import { ProGallery as Gallery } from 'pro-gallery';

import {
  galleryOptions,
  ProGalleryItem,
  ProGalleryLayouts,
  ProGalleryOptions,
} from './types';
import {
  defaultCollageOptions,
  defaultColumnOptions,
  defaultGridOptions,
  defaultMasonryOptions,
  defaultPanoramaOptions,
  defaultSliderOptions,
  defaultSlideShowOptions,
  defaultThumbnailsOptions,
} from './defaultOptionByLayout';

export interface ProGalleryProps {
  width: number;
  height: number;
  items: ProGalleryItem[];
  options: ProGalleryOptions;
  scrollingElement: any;
  eventsListener: Function;
  domId: string;
}

interface State {}

/** ProGallery */
export class ProGallery extends React.Component<ProGalleryProps, State> {
  static displayName = 'ProGallery';

  render() {
    const container = {
      width: this.props.width,
      height: this.props.height,
    };

    const {
      domId,
      items,
      scrollingElement,
      eventsListener,
      ...rest
    } = this.props;
    let { options } = this.props;
    switch (options.galleryLayout) {
      case ProGalleryLayouts.Collage:
        options = { ...defaultCollageOptions, ...options };
        break;
      case ProGalleryLayouts.Column:
        options = { ...defaultColumnOptions, ...options };
        break;
      case ProGalleryLayouts.Grid:
        options = { ...defaultGridOptions, ...options };
        break;
      case ProGalleryLayouts.Masonry:
        options = { ...defaultMasonryOptions, ...options };
        break;
      case ProGalleryLayouts.Panorama:
        options = { ...defaultPanoramaOptions, ...options };
        break;
      case ProGalleryLayouts.Slider:
        options = { ...defaultSliderOptions, ...options };
        break;
      case ProGalleryLayouts.SlideShow:
        options = { ...defaultSlideShowOptions, ...options };
        break;
      case ProGalleryLayouts.Thumbnails:
        options = { ...defaultThumbnailsOptions, ...options };
        break;
      default:
        options = { ...defaultCollageOptions, ...options };
    }
    return (
      <div {...styles('root', {}, rest)}>
        <Gallery
          domId={domId}
          items={items}
          options={options as galleryOptions}
          container={container}
          eventsListener={eventsListener}
          scrollingElement={scrollingElement}
        />
      </div>
    );
  }
}
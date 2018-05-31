import React from 'react';

import { storiesOf } from '@storybook/react';

// Included addons
import { doc } from 'storybook-readme';

// Included components
import Resizable from 're-resizable';

// Readme files
import Grid from './layout/grid.md';
import Grid__Container from './layout/grid__container.md';
import Grid__Row from './layout/grid__row.md';
import Grid__Col from './layout/grid__col.md';
import MediaObject from './layout/media-object.md';
import LayoutUtilities from './layout/layout-utilities.md';


// COMPONENTS
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

// HOCs
import { withCodePreview } from './HOCs/with-docs'


storiesOf('Layout/-Grid Components', module)
.add('Container', doc(Grid__Container))
.add('Row', doc(Grid__Row))
.add('Column', doc(Grid__Col))

storiesOf('Layout', module)
.add('Grid', doc(Grid))
.add('Media Object', withCodePreview(MediaObject, () =>
    <div className="media">
      <img className="mr-3" src="http://via.placeholder.com/120x120" alt="Generic placeholder image"/>
      <div className="media-body">
        <h5 className="mt-0">Media heading</h5>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
        Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
        Fusce condimentum nunc ac nisi vulputate fringilla.
      </div>
    </div>
  ))


  .add('Utilities for layout', doc(LayoutUtilities))

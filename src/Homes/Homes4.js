import React from 'react';

import './styles.css';

const Homes4 = () => {
  return (
    <>
      <div class="section">
        <span class="section__label">Aone-customs</span>
        <div class="section__group">
          <a href="/Aboutaone" class="rlink text-underlined text-underlined_v3">
            <span class="text-underlined__label">About Aone</span>
          </a>
        </div>
        <div class="section__group">
          <button
            class="rbutton ui-button text-underlined text-underlined_v3"
            type="button"
          >
            <span class="text-underlined__label">I'm the button</span>
          </button>
        </div>
        <div class="section__group">
          <span class="text-underlined text-underlined_v3">
            <span class="text-underlined__label">I'm the span</span>
          </span>
        </div>
        <div class="section__group">
          <a class="rlink text-underlined text-underlined_v3">
            <span class="text-underlined__label">I'm the logical a</span>
          </a>
        </div>
        <div class="section__group">
          <button
            class="rbutton ui-button text-underlined text-underlined_v3"
            type="button"
            disabled
          >
            <span class="text-underlined__label">I'm the disabled button</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Homes4;

const { html } = require('htm/preact');

const Footer = ({ onclick }) => html`
  <footer>
    <div
      class="add"
      onclick=${onclick}}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
    </div>
  </footer>
`;

module.exports.default = Footer;

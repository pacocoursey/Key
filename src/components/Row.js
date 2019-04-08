const { html, Component } = require('htm/preact');
const Checkbox = require('./Checkbox').default;
const Dropdown = require('./Dropdown').default;
const Input = require('./Input').default;

const options = [
  'click',
  'right click',
  'left',
  'right',
  'up',
  'down',
];

class Row extends Component {
  constructor() {
    super();

    this.state = {
      choice: options[0],
    };
  }

  handleChange(e) {
    if (e.target.value) {
      this.setState({
        choice: e.target.value,
      });
    }
  }

  render() {
    const { name, key, onremove } = this.props;
    const { choice } = this.state;

    return html`
      <div class="row">
        <${Checkbox}
          onchange=${() => { console.log('eee'); }}
          id=${key}
          checked
        />
        <div>${name}</div>
        <${Dropdown}
          options=${options}
          onchange=${e => this.handleChange(e)}
        />
        ${choice === 'click' || choice === 'right click' ? html`<${Input} hide />` : html`<${Input} />`}
        <div
          class="remove"
          onclick=${onremove}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </div>
      </div>
    `;
  }
}

module.exports.default = Row;

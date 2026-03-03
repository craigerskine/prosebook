---
title: Button
desc: Interactive element to perform an action or navigate to another page.
ico: 'mdi:button-cursor'

styles: |
  .prs-btn {
    padding: .25rem 1rem;
    border-width: var(--prs-border-btn);
    border-style: solid;
    border-color: transparent;
    font-size: 1rem;
    line-height: 1.375rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    cursor: pointer;
    user-select: none;
    text-decoration-line: none;
    border-radius: var(--prs-radius-btn);
    transition-property: var(--prs-transition-property);
    transition-timing-function: var(--prs-transition-timing);
    transition-duration: var(--prs-transition-duration);
    /* etc. */
  }

controls:
  - name: text
    type: text
    label: Text
    desc: Button text should be as simple as possible and should NEVER exceed 1 line. It is highly recommended to line clamp the button text to a single line.
    default: Button

  - name: withIcon
    type: select
    label: With icon
    desc: Use <svg>, <iconify-icon> or .icon. It is recommended to use iconify-icon with mdi:(Material Design Icons)
    default: no icon
    options:
      - no icon
      - leading
      - trailing

  - name: variant
    type: radio
    label: Variant
    desc: Primary is contained/solid, Secondary is outlined, and Tertiary is ghosted.
    default: primary
    options:
      - primary
      - secondary
      - tertiary

  - name: color
    type: radio
    label: Color
    desc: Default is primary brand color, success/danger can be used in specific success/danger scenarios.
    default: default
    options:
      - default
      - success
      - danger

  - name: size
    type: radio
    label: Size
    desc: Use sm when space is limited, use lg for large CTA scenarios.
    default: default
    options:
      - default
      - sm
      - lg

  - name: shape
    type: radio
    label: Shape
    desc: For icons ONLY. Make sure your icon has the appropriate aria-label or sr-only label for screen readers.
    default: default
    options:
      - default
      - square
      - circle

  - name: state
    type: radio
    label: State
    desc: These states will happen automatically when using valid sematic markup. We do include classes to force hover and focus states but you should avoid using those classes in your application.
    default: default
    options:
      - default
      - hover
      - focus
      - disabled

preview: |
  <button
    class="prs-btn"
    :class="{
      'prs-btn-primary': variant === 'primary',
      'prs-btn-secondary': variant === 'secondary',
      'prs-btn-tertiary': variant === 'tertiary',
      'prs-btn-success': color === 'success',
      'prs-btn-danger': color === 'danger',
      'prs-btn-sm': size === 'sm',
      'prs-btn-lg': size === 'lg',
      'prs-btn-square': shape === 'square',
      'prs-btn-circle': shape === 'circle',
      'prs-btn_hover': state === 'hover',
      'prs-btn_focus': state === 'focus',
    }"
    :disabled="state === 'disabled'"
  >
    <iconify-icon x-show="shape !== 'default' || (withIcon === 'leading')" icon="mdi:close" class="icon" noobserver></iconify-icon>
    <span x-show="shape === 'default'" x-text="text ? text : 'Button'" class="line-clamp-1"></span>
    <iconify-icon x-show="(withIcon === 'trailing' && shape === 'default')" icon="mdi:close" class="icon" noobserver></iconify-icon>
  </button>

code:
  html: |
    <button class="prs-btn{variant}{color}{size}{shape}{state}"{disabled}>
      {icon}{text}{iconEnd}
    </button>
  logic:
    text: "this.shape === 'default' ? this.text : '<svg class=\"icon\"></svg>'"
    icon: "(this.shape === 'default' && this.withIcon === 'leading') ? '<svg class=\"icon\"></svg> ' : ''"
    iconEnd: "(this.shape === 'default' && this.withIcon === 'trailing') ? ' <svg class=\"icon\"></svg>' : ''"
    variant: "this.variant === 'primary' ? ' prs-btn-primary' : ' prs-btn-' +this.variant"
    color: "this.color === 'default' ? '' : ' prs-btn-' +this.color"
    size: "this.size === 'default' ? '' : ' prs-btn-' +this.size"
    shape: "this.shape === 'default' ? '' : ' prs-btn-' +this.shape"
    state: "(this.state === 'default' || this.state === 'disabled') ? '' : ' prs-btn_' +this.state"
    disabled: "this.state === 'disabled' ? ' disabled' : ''"
---

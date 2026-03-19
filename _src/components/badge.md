---
title: Badge
desc: Small count or label that appears on another element, often used to display notifications or status information.
ico: mdi:app-notification
keywords:
  - count
  - info
  - status
  - tag

controls:
  - name: text
    type: text
    label: Text
    desc: Badge text should be as simple as possible and should NEVER exceed 1 line. It is highly recommended to line clamp the badge text to a single line.
    default: Badge

  - name: variant
    type: radio
    label: Variant
    desc: Background color, foreground color, and border color variants. "Current" takes the nearest parent's color style and uses it as the border as well as the text color.
    default: default
    options:
      - default
      - info
      - success
      - warning
      - danger
      - current

  - name: shape
    type: radio
    label: Shape
    desc: Pill shape has full border radius and sharp shape has hard corner radius.
    default: default
    options:
      - default
      - pill
      - sharp

preview: |
  <span
    class="prs-badge max-w-80"
    :class="{
      'prs-badge-info': variant === 'info',
      'prs-badge-success': variant === 'success',
      'prs-badge-warning': variant === 'warning',
      'prs-badge-danger': variant === 'danger',
      'prs-badge-current': variant === 'current',
      'prs-badge-pill': shape === 'pill',
      'prs-badge-sharp': shape === 'sharp',
    }"
  >
    <span x-text="text ? text : 'Badge'" class="line-clamp-1 pointer-events-none"></span>
  </span>

code:
  html: |
    <span class="prs-badge{variant}{shape}">
      {text}
    </span>
  logic:
    text: "this.text"
    variant: "this.variant === 'default' ? '' : ' prs-badge-'+ this.variant"
    shape: "this.shape === 'default' ? '' : ' prs-badge-'+ this.shape"
---

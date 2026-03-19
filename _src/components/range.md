---
title: Range
desc: A range input allows users to select a value from a specified range.
ico: mdi:slider
keywords:
  - slider

controls:
  - name: withLabel
    type: toggle
    label: With label
    desc: Display label. Make sure to include aria-label to account for missing label text.
    default: false

  - name: variant
    type: radio
    label: Variant
    desc: Color variants.
    default: primary
    options:
      - primary
      - secondary
      - accent
      - info
      - success
      - warning
      - danger

  - name: state
    type: radio
    label: State
    desc: These states will happen automatically when using valid sematic markup.
    default: default
    options:
      - default
      - focus
      - disabled

preview: |
  <div class="w-xl max-w-xs">
    <label class="form-control">
      <span x-show="withLabel" x-transition class="prs-label">
        <span class="prs-label-text">Label</span>
      </span>
      <input
        type="range"
        min="1"
        max="5"
        value="2"
        step="1"
        class="prs-range"
        :class="{
          'prs-range-secondary': variant === 'secondary',
          'prs-range-accent': variant === 'accent',
          'prs-range-info': variant === 'info',
          'prs-range-success': variant === 'success',
          'prs-range-warning': variant === 'warning',
          'prs-range-danger': variant === 'danger',
          'prs-range_focus': state === 'focus',
        }"
        aria-label="Label"
        :disabled="state === 'disabled'" />
    </label>
  </div>

code:
  html: |
    <label class="prs-form-control">
      {withLabel}<input
        type="range"
        min="1"
        max="5"
        value="2"
        step="1"
        class="prs-range{variant}{focus}"
        aria-label="Label"{disabled}
      />
    </label>
  logic:
    withLabel: "this.withLabel ? '<span class=\"prs-label\">\\n    <span class=\"prs-label-text\">Label</span>\\n  </span>\\n  ' : ''"
    variant: "this.variant !== 'primary' ? 'prs-range-'+ this.variant : ''"
    focus: "this.state === 'focus' ? ' prs-range_focus' : ''"
    disabled: "this.state === 'disabled' ? '\\n    disabled' : ''"

---

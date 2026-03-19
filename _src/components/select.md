---
title: Select
desc: Form element that allows users to to pick a value from a list of options.
ico: mdi:form-select
keywords:
  - option
  - dropdown

controls:
  - name: withLabel
    type: toggle
    label: With label
    desc: Display label. Make sure to include aria-label to account for missing label text.
    default: false

  - name: state
    type: radio
    label: State
    desc: These states will happen automatically when using valid sematic markup.
    default: default
    options:
      - default
      - focus
      - disabled
    
  - name: ghost
    type: toggle
    label: Ghost
    desc: Border-less and background-less. Alternate display for extreme cases.
    default: false

preview: |
  <label class="prs-form-control w-xl max-w-xs">
    <span x-show="withLabel" class="prs-label"><span class="prs-label-text">Label</span></span>
    <select
      class="prs-input prs-select"
      :class="{
        'prs-input-ghost': ghost,
        'prs-input_hover': state === 'hover',
        'prs-input_focus': state === 'focus',
      }"
      :disabled="state === 'disabled'"
    >
      <option selected disabled>Choose:</option>
      <template x-for="i in 5">
        <option x-text="'Option '+ i"></option>
      </template>
    </select>
  </label>

code:
  html: |
    <label class="prs-form-control">
      {withLabel}<select class="prs-input prs-select{ghost}{state}"{disabled}>
        <option selected disabled>Choose:</option>
        <option value="1">Option</option>
      </select>
    </label>
  logic:
    withLabel: "this.withLabel ? '<span class=\"prs-label\">\\n    <span class=\"prs-label-text\">Label</span>\\n  </span>\\n  ' : ''"
    ghost: "this.ghost ? ' prs-input-ghost' : ''"
    state: "this.state === 'focus' ? ' prs-input_focus' : ''"
    disabled: "this.state === 'disabled' ? ' disabled' : ''"
---

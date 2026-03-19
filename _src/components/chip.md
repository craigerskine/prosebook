---
title: Chip
desc: Small, interactive element that represents an input, attribute, or action.
ico: mdi:tag
keywords:
  - tag

controls:
  - name: text
    type: text
    label: Text
    desc: As always, keep it simple.
    default: Text

  - name: variant
    type: radio
    label: Variant
    desc: Color variants.
    default: default
    options:
      - default
      - active

  - name: state
    type: radio
    label: State
    desc: ...
    default: default
    options:
      - default
      - hover
      - focus
    
  - name: icon
    type: toggle
    label: With icon
    desc: ...
    default: false

  - name: close
    type: toggle
    label: With close
    desc: ...
    default: false

  - name: disabled
    type: toggle
    label: Disabled
    desc: ...
    default: false

preview: |
  <button
    class="prs-chip"
    :class="{
      'prs-chip_active': variant === 'active',
      'prs-chip_hover': state === 'hover',
      'prs-chip_focus': state === 'focus',
    }"
    :disabled="disabled"
  >
    <span x-show="icon" x-transition class="icon"><iconify-icon icon="mdi:checkbox-marked" class="iconify text-xl" noobserver></iconify-icon></span>
    <span class="prs-chip-label" x-text="text"></span>
    <span x-show="close" x-transition class="close"><iconify-icon icon="mdi:close" class="iconify" noobserver></iconify-icon></span>
  </button>

code:
  html: |
    <div class="">
      {text}
    </div>
  logic:
    text: "this.text"
---

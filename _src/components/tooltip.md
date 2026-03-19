---
title: Tooltip
desc: Small pop-up element that provides additional information when users hover or focus on an element.
ico: mdi:tooltip
keywords:
  - notification
  - popover

controls:
  - name: text
    type: text
    label: Text
    desc: Some desc.
    default: Text
    options:

preview: |
  <div
    class="prs-BLAH"
    :class="{
      '': variant === '',
    }"
    x-text="text"
  ></div>

code:
  html: |
    <div class="">
      {text}
    </div>
  logic:
    text: "this.text"
---

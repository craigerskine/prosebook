---
title: Toggle
desc: Form element that allows users to switch between two states, such as on and off.
ico: mdi:toggle-switch
keywords:
  - boolean
  - checkbox
  - form
  - switch

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

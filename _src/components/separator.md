---
status: beta
title: Separator
desc: A visual way to separate sections of content or elements either horizontally or vertically.
ico: mdi:divide
keywords:
  - divide
  - divider
  - horizontal
  - rule
  - vertical

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

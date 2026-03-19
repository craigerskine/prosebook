---
title: Loading
desc: Page or container loading indicators.
ico: mdi:progress-helper
keywords:
  - bounce
  - scale
  - pulse
  - spinner

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

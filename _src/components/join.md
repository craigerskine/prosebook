---
status: beta
title: Join
desc: A CSS utility component that allows you to join two or more elements together. This looks best when the items have borders or background colors.
ico: mdi:format-horizontal-align-center
keywords:
  - combine
  - group
  - utility

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

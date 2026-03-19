---
title: Input
desc: Form element that allows users to input and edit text or data into a website page.
ico: mdi:form-textbox
keywords:
  - color
  - date
  - datetime-local
  - email
  - file
  - form
  - hidden
  - image
  - month
  - number
  - password
  - range
  - search
  - tel
  - text
  - textarea
  - time
  - url
  - week

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

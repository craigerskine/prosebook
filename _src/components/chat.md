---
status: beta
title: Chat
desc: Used to show conversation and all its data, including the author image, author name, time, etc.
ico: mdi:chat-processing
keywords:
  - ai
  - chat
  - bubble

alert:
  ico: mdi:wheelchair-accessibility
  body: |
    **For best accessibility:**  
    The maximum width of a chat bubble should be around **65ch**{ .kbd .kbd-sm }. This will ensure the best readability.

controls:
  - name: text
    type: text
    label: Text
    desc: Placeholder text.
    default: Lorem ipsum dolor
    options:

  - name: variant
    type: radio
    label: Variant
    desc: Color variants.
    default: default
    options:
      - default
      - primary
      - secondary
      - accent
      - info
      - success
      - warning
      - danger

  - name: position
    type: radio
    label: Position
    desc: Use "Start" for response or received messages. Use "End" for sent messages.
    default: start
    options:
      - start
      - end

  - name: avatar
    type: toggle
    label: Avatar
    desc: Optional avatar display.
    default: false

  - name: header
    type: toggle
    label: Header
    desc: Optional header display
    default: false

  - name: footer
    type: toggle
    label: Footer
    desc: Optional footer display.
    default: false

preview: |
  <div class="w-xl max-w-xs">
    <div
      class="prs-chat prs-chat-start"
      :class="{
        'prs-chat-start': position === 'start',
        'prs-chat-end': position === 'end',
      }"
    >
      <div x-show="avatar" x-transition class="prs-chat-image prs-avatar prs-avatar-md"><img src="https://placehold.net/4.png" alt="Chat bubble component" /></div>
      <div x-show="header" x-transition class="prs-chat-header">Header text <time>HH:MM</time></div>
      <div
        class="prs-chat-bubble"
        :class="{
          'prs-chat-bubble-primary': variant === 'primary',
          'prs-chat-bubble-secondary': variant === 'secondary',
          'prs-chat-bubble-accent': variant === 'accent',
          'prs-chat-bubble-info': variant === 'info',
          'prs-chat-bubble-success': variant === 'success',
          'prs-chat-bubble-warning': variant === 'warning',
          'prs-chat-bubble-danger': variant === 'danger',
        }"
        x-text="text"
      ></div>
      <div x-show="footer" x-transition class="prs-chat-footer">Footer text</div>
    </div>
  </div>

code:
  html: |
    <div class="prs-chat {position}">
      {avatar}{header}<div class="prs-chat-bubble{variant}">{text}</div>{footer}
    </div>
  logic:
    text: "this.text"
    variant: "this.variant !== 'default' ? ' prs-chat-bubble-'+ this.variant : ''"
    position: "'prs-chat-'+ this.position"
    avatar: "this.avatar ? '<div class=\"prs-chat-image prs-avatar prs-avatar-md\"><img /></div>\\n  ' : ''"
    header: "this.header ? '<div class=\"prs-chat-header\">Header text <time>HH:MM</time></div>\\n  ' : ''"
    footer: "this.footer ? '\\n  <div class=\"prs-chat-footer\">Footer text</div>' : ''"

---

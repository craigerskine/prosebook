---
title: Alert
desc: Message box that provides important information to the user, such as warnings, errors, or other notifications.
ico: mdi:message-badge
keywords:
  - message
  - notification
  - toast

alert:
  ico: mdi:wheelchair-accessibility
  body: |
    **For best accessibility:**  
    Please use **role**{ .kbd .kbd-sm } and **aria-live**{ .kbd .kbd-sm } attributes depending on your use case.

controls:
  - name: variant
    type: select
    label: Variant
    desc: Color variants.
    default: default
    options:
      - default
      - info
      - success
      - warning
      - danger
      - neutral

  - name: withIcon
    type: toggle
    label: With icon
    desc: Optional preceding icon.
    default: false

  - name: withClose
    type: toggle
    label: With close
    desc: Optional close gadget icon.
    default: false

  - name: ghost
    type: toggle
    label: Ghost
    desc: Ghost-like styles.
    default: false

preview: |
  <div class="w-96 max-w-xs">
    <div
      role="alert"
      class="prs-alert"
      :class="{
        'prs-alert-info': variant === 'info',
        'prs-alert-success': variant === 'success',
        'prs-alert-warning': variant === 'warning',
        'prs-alert-danger': variant === 'danger',
        'prs-alert-neutral': variant === 'neutral',
        'prs-alert-ghost': ghost,
      }"
    >
      <div x-show="withIcon" class="icon" aria-hidden="true" style="display: none">
        <iconify-icon :icon="variant === 'success'  ? 'mdi:check-circle-outline' :
          variant === 'warning' ? 'mdi:warning-outline' :
          variant === 'danger' ? 'mdi:cancel' :
          'mdi:information-outline'" noobserver></iconify-icon>
      </div>
      <div class="prs-alert-content"><span x-text="variant" class="capitalize"></span> message slot...</div>
      <button x-show="withClose" class="close" aria-label="Close" style="display: none">
        <iconify-icon icon="mdi:close" noobserver></iconify-icon>
      </button>
    </div>
  </div>

code:
  html: |
    <div class="prs-alert{variant}{ghost}" role="alert">
      {withIcon}
      <div class="prs-alert-content">Alert message</div>
      {withClose}
    </div>
  logic:
    variant: "this.variant === 'default' ? '' : ' prs-alert-'+ this.variant"
    withIcon: "this.withIcon ? '<span class=\"icon\" aria-hidden=\"true\"><svg></svg></span>' : '<!-- icon -->'"
    withClose: "this.withClose ? '<button class=\"close\" aria-label=\"Close\"><svg></svg></button>' : '<!-- close -->'"
    ghost: "this.ghost ? ' prs-alert-ghost' : ''"
---

Make sure to use the appropriate `role` and `aria-live` attributes depending on your use case.

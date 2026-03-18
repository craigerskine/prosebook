---
status: beta
title: Avatar
desc: Used to show a thumbnail representation of an individual or business in the interface.
ico: mdi:account-circle
keywords:
  - account
  - initials
  - offline
  - online
  - user

controls:
  - name: variant
    type: radio
    label: Variant
    desc: Custom image, user icon, or name initials.
    default: image
    options:
      - image
      - icon
      - initials

  - name: size
    type: select
    label: Size
    desc: From extra small to 2x large sizes.
    default: default
    options:
      - xs
      - sm
      - md
      - default
      - lg
      - xl
      - 2xl

  - name: status
    type: toggle
    label: Status
    desc: Optional status 'dot' display
    default: false

preview: |
  <div
    class="prs-avatar"
    :class="{
      'prs-avatar-xs': size === 'xs',
      'prs-avatar-sm': size === 'sm',
      'prs-avatar-md': size === 'md',
      'prs-avatar-lg': size === 'lg',
      'prs-avatar-xl': size === 'xl',
      'prs-avatar-2xl': size === '2xl',
      'prs-avatar-online': status,
    }"
  >
    <img x-show="variant === 'image'" src="https://placehold.net/4.png" alt="Avatar component" />
    <iconify-icon x-show="variant === 'icon'" icon="mdi:account" width="100%" height="100%" noobserver></iconify-icon>
    <span x-show="variant === 'initials'" class="prs-avatar-placeholder">WW</span>
  </div>

code:
  html: |
    <div class="prs-avatar{size}{status}">
      {variant}
    </div>
  logic:
    variant: "this.variant === 'image' ? '<img />' : (this.variant === 'icon' ? '<svg class=\"icon\" role=\"img\" arial-label=\"Avatar\"></svg>' : '<span class=\"prs-avatar-placeholder\">WW</span>')"
    size: "this.size === 'default' ? '' : ' prs-avatar-'+ this.size"
    status: "this.status ? ' prs-avatar-online' : ''"
---

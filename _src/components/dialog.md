---
title: Dialog
desc: Modal window that prompts the user to take an action or provides important information.
ico: mdi:card-multiple
keywords:
  - modal
  - popover
  - popup

alert:
  ico: mdi:wheelchair-accessibility
  body: |
    **For best accessibility:**  
    Please use the **dialog**{ .kbd .kbd-sm } tag. It automatically comes with **FREE** accessibility features like keyboard controls, focus trap with access to browser controls (react focus trap does NOT support this and is NOT accessible), unlimited dialog nesting/stacking, optional click outside to close, etc.

controls:
  - name: title
    type: text
    label: Title
    desc: Title should be as simple as possible and should NEVER exceed 1 line.
    default: Dialog title

  - name: body
    type: text
    label: Body
    desc: Should be as simple and easy to parse as possible.
    default: Lorem ipsum

  - name: bordered
    type: toggle
    label: Bordered
    desc: Add separators between the header and the footer/actions blocks.
    default: true

  - name: withActions
    type: toggle
    label: With actions
    desc: Show the actions block/section
    default: true

previewHeight: 25
preview: |
  <div class="absolute inset-0">
    <div id="dialog_id" class="!bg-black/50 prs-dialog !min-w-full !min-h-full !absolute" role="dialog" :class="bordered && 'prs-dialog-bordered'" open>
      <div class="prs-dialog-box !max-h-72">
        <div class="prs-dialog-header">
          <h2 x-text="title ? title : 'Dialog title'" class="line-clamp-1"></h2>
          <button onclick="this.closest('dialog').close()" aria-label="Close" class="prs-dialog-close">
            <iconify-icon icon="mdi:close" class="iconify text-2xl" noobserver></iconify-icon>
          </button>
        </div>
        <div class="prs-dialog-body">
          <p x-text="body ? body : 'Lorem ipsum'"></p>
        </div>
        <div class="prs-dialog-action" :hidden="!withActions">
          <button class="prs-btn prs-btn-secondary" onclick="this.closest('dialog').close()">Secondary</button>
          <button class="prs-btn prs-btn-primary">Primary</button>
        </div>
      </div>
      <form method="dialog" class="prs-dialog-backdrop">
        <button>close</button>
      </form>
    </div>
  </div>

code:
  html: |
    <dialog id="dialog_id" class="prs-dialog{bordered}">
      <div class="prs-dialog-box">
        <div class="prs-dialog-header">
          <h2>{title}</h2>
          <button onclick="this.closest('dialog').close()" aria-label="Close" class="prs-dialog-close">
            <svg width="24" height="24" role="img"></svg>
          </button>
        </div>
        <div class="prs-dialog-body">
          <p>{body}</p>
        </div>
        <div class="prs-dialog-action"{withActions}>
          <button class="prs-btn prs-btn-secondary" onclick="this.closest('dialog').close()">Secondary</button>
          <button class="prs-btn prs-btn-primary">Primary</button>
        </div>
      </div>
      <form method="dialog" class="prs-dialog-backdrop">
        <button>close</button>
      </form>
    </dialog>
  logic:
    title: "this.title"
    body: "this.body"
    bordered: "this.bordered ? ' prs-dialog-bordered' : ''"
    withActions: "this.withActions ? '' : ' hidden'"
---

To prevent <kbd>esc ⎋</kbd> or click outside to close you can use `closedby="none|closerequest"`.

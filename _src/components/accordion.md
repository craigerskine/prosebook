---
title: Accordion
desc: Vertically stacked list of items, each item can be expanded or collapsed to reveal the content associated with that item.
ico: mdi:arrow-collapse-vertical
keywords:
  - collapse
  - details
  - disclosure
  - summary
  
alert:
  ico: mdi:wheelchair-accessibility
  body: |
    **For best accessibility:**  
    Please use `details`{ .badge .badge-neutral .badge-dash .badge-sm } and `summary`{ .badge .badge-neutral .badge-dash .badge-sm } tags. Our CSS takes care of motion-safe sliding open/close animations.

controls:
  - name: exclusive
    type: toggle
    label: Exclusive
    desc: Allow only one detail open at a time.
    default: false

  - name: open
    type: toggle
    label: Open
    desc: The detail will open automatically when interacted with, but you can force it open by adding an open attribute.
    default: false

previewHeight: 25 #rem
preview: |
  <div class="w-screen max-w-lg">
    <div class="prs-accordion">
      <details :name="exclusive && 'group-name'" :open="open">
        <summary>Summary</summary>
        <div class="prs-accordion-content">
          Lorem ipsum dolor sit amet. Ad aute proident do eu ad eu consectetur ad esse incididunt mollit non.
        </div>
      </details>
      <details :name="exclusive && 'group-name'">
        <summary>Here's a summary with a very long label so we can test the wrapping and make sure the icon position, flex gap, and flex-shrink rules are working properly</summary>
        <div class="prs-accordion-content">
          Lorem ipsum dolor sit amet. Ad aute proident do eu ad eu consectetur ad esse incididunt mollit non.
        </div>
      </details>
      <details :name="exclusive && 'group-name'">
        <summary>The third summary</summary>
        <div class="prs-accordion-content">
          Lorem ipsum dolor sit amet. Ad aute proident do eu ad eu consectetur ad esse incididunt mollit non.
        </div>
      </details>
    </div>
  </div>

code:
  html: |
    <div class="prs-accordion">
      <details{exclusive}{open}>
        <summary>Summary</summary>
        <div class="prs-accordion-content">
          Content
        </div>
      </details>
      <details{exclusive}>[...]</details>
      <details{exclusive}>[...]</details>
    </div>
  logic:
    exclusive: "this.exclusive ? ' name=\"group-name\"' : ''"
    open: "this.open ? ' open' : ''"
---

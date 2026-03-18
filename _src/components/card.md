---
title: Card
desc: Flexible and extensible content container with multiple variants and options.
ico: mdi:card-text
keywords:
  - container

controls:
  - name: title
    type: text
    label: Title
    desc: Card header title
    default: 'Card header'

  - name: body
    type: text
    label: Body
    desc: Card body content
    default: 'Lorem ipsum'

  - name: bordered
    type: toggle
    label: Bordered
    desc: Add a border around the entire card.
    default: false

  - name: action
    type: toggle
    label: Actionable
    desc: Show action placeholders.
    default: false

  - name: collapse
    type: toggle
    label: Collapsible
    desc: NOT compatible with Actionable. Allows the card body to collapse by clicking on the header. This works just like details/summary tags but with a smoother animation.
    default: false

  - name: collapseIndent
    type: toggle
    label: Collapsible Indent
    desc: ONLY compatible with Collapsible. Indents the body content to line up with the header text (minus the chevron).
    default: false

previewHeight: 25
preview: |
  <div x-data="{ expanded: true }" class="prs-card w-screen max-w-lg" :class="{
    'prs-card-bordered': bordered,
    'prs-card-action': action,
    'prs-card-collapse': collapse,
    'prs-card-indent': collapseIndent,
  }">
    <a x-show="collapse" @click.prevent="expanded = !expanded" :aria-expanded="expanded" href="#" class="prs-card-header">
      <div class="icon" aria-hidden="true"><iconify-icon icon="mdi:chevron-right" width="100%" height="100%" class="iconify" noobserver></iconify-icon></div>
      <div class="prs-card-title" x-text="title ? title : 'Card header'"></div>
    </a>
    <div x-show="!collapse" class="prs-card-header">
      <div class="prs-card-title" x-text="title ? title : 'Card header'"></div>
      <button x-show="action" class="prs-btn prs-btn-tertiary">Action</button>
    </div>
    <div x-show="collapse">
      <div x-show="expanded" x-collapse class="prs-card-body">
        <div class="prs-card-content">
          <p x-text="body ? body : 'Lorem ipsum'"></p>
        </div>
      </div>
    </div>
    <div x-show="!collapse" class="prs-card-content">
      <p x-text="body ? body : 'Lorem ipsum'"></p>
    </div>
    <div x-show="action && !collapse" class="prs-card-footer">
      <button class="prs-btn prs-btn-secondary">Action</button>
      <button class="prs-btn prs-btn-primary">Action</button>
    </div>
  </div>

code:
  html: |
    <div class="prs-card{bordered}{action}{collapse}{collapseIndent}">
      <{aTag}{aAttr} class="prs-card-header">
        {chevron}<div class="prs-card-title">{title}</div>
      </{aTag}>
      {cWrapStart}{cSpace}<div class="prs-card-content">
        {cSpace}<p>{body}</p>
      {cSpace}</div>{cWrapEnd}{actionBlock}
    </div>
  logic:
    title: "this.title"
    body: "this.body"
    bordered: "this.bordered ? ' prs-card-bordered' : ''"
    action: "this.action ? ' prs-card-action' : ''"
    actionBlock: "this.action ? '\\n  <div class=\"prs-card-footer\">...</div>' : ''"
    collapse: "this.collapse ? ' prs-card-collapse' : ''"
    collapseIndent: "this.collapseIndent ? ' prs-card-indent' : ''"
    aTag: "this.collapse ? 'a' : 'div'"
    aAttr: "this.collapse ? ' href=\"#\" onClick=\"{handleCollapse}\"' : ''"
    cWrapStart: "this.collapse ? '<div data-collapse=\"{handleCollapse}\" class=\"prs-card-body\">\\n  ' : ''"
    cWrapEnd: "this.collapse ? '\\n  </div>' : ''"
    cSpace: "this.collapse ? '  ' : ''"
    chevron: "this.collapse ? '<div class=\"icon\" aria-hidden=\"true\"><svg></svg></div>\\n    ' : ''"
---

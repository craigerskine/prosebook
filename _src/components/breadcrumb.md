---
title: Breadcrumb
desc: Navigation aid that helps users understand their location within a website's hierarchy and navigate back to previous sections.
ico: mdi:dots-horizontal
keywords:
  - nav
  - path

alert:
  ico: mdi:wheelchair-accessibility
  body: |
    **For best accessibility:**  
    Please use **nav**{ .kbd .kbd-sm } with nested **ol**{ .kbd .kbd-sm } tags as well as  **role="navigation"**{ .kbd .kbd-sm } and **aria-label**{ .kbd .kbd-sm } attributes.

controls:
  - name: current
    type: text
    label: Current
    desc: Text should be as simple as possible and should NEVER exceed 1 line. We have max-width and truncation logic in place so things stay responsive.
    default: Current

preview: |
  <nav class="prs-breadcrumb" role="navigation" aria-label="Breadcrumbs">
    <ol>
      <li><a @click.prevent href="/" title="Home">Home</a></li>
      <li><a @click.prevent href="../../" title="...">Parent with a really long name to see truncation</a></li>
      <li><a @click.prevent href="../" title="Parent">Parent</a></li>
      <li :title="current" x-text="current !== '' ? current : 'Current'"></li>
    </ol>
  </nav>

code:
  html: |
    <nav class="prs-breadcrumb" role="navigation" aria-label="Breadcrumbs">
      <ol>
        <li><a href="/">Home</a></li>
        <li><a href="../../">Parent with a really long name to see truncation</a></li>
        <li><a href="../">Parent</a></li>
        <li title="{current}">{current}</li>
      </ol>
    </nav>
  logic:
    current: "this.current"
---

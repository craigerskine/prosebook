---
title: Checkbox
desc: Form element that allows users to select one or more options from a set.
ico: mdi:checkbox-marked-outline
keywords:
  - boolean
  - form
  - switch
  - toggle

controls:
  - name: label
    type: text
    label: Label
    desc: As always, keep it simple.
    default: Label

  - name: size
    type: radio
    label: Size
    desc: Optional sizes.
    default: default
    options:
      - default
      - lg
      - xl

  - name: focused
    type: toggle
    label: Focused
    desc: Focused state will happen automatically when using valid markup. We do include a class to force focused state but you should avoid using it in your application.
    default: false

  - name: checked
    type: toggle
    label: Checked
    desc: Default state or checked state.
    default: false

  - name: indeterminate
    type: toggle
    label: Indeterminate
    desc: If this is enabled the checked/unchecked toggle does not have an affect.
    default: false

  - name: disabled
    type: toggle
    label: Disabled
    desc: Disabled state.
    default: false

preview: |
  <label
    class="prs-checkbox-label"
    x-init="
      $watch('indeterminate', value => {
        $refs.prsCheckbox.indeterminate = value;
      })
    "
  >
    <input
      type="checkbox"
      x-model="checked"
      x-ref="prsCheckbox"
      class="prs-checkbox"
      :class="{
        'prs-checkbox-lg': size === 'lg',
        'prs-checkbox-xl': size === 'xl',
        'prs-checkbox_focus': focused,
      }"
      :disabled="disabled" />
    <span x-text="label ? label : 'Label'"></span>
  </label>

code:
  html: |
    <label class="prs-checkbox-label">
      <input type="checkbox" class="prs-checkbox{size}{focused}"{disabled} />
      <span>{label}</span>
    </label>
  logic:
    label: "this.label ? this.label : ''"
    size: "this.size !== 'default' ? ' prs-checkbox-'+ this.size : ''"
    focused: "this.focused ? ' prs-checkbox_focus' : ''"
    disabled: "this.disabled ? ' disabled' : ''"
---

<script setup lang="ts">
const rawHtml = '<span style="color: red;">Red text here!</span>';

const objectOfAttrs = {
  id: 'some_test_id',
  class: 'some-test-class',
};

const dynamicAttributeName = 'data-test-attribute';
const dynamicEventName = 'click';

function onClick() {
  console.log('onClick');
}
</script>

<template>
  <div class="template-syntax-view">
    <h1>
      <a
        href="https://vuejs.org/guide/essentials/template-syntax.html"
        target="_blank"
        >{{ $t('views.templateSyntax.title') }}</a
      >
    </h1>

    <p>Using v-html directive: <span v-html="rawHtml"></span></p>

    <p v-bind="objectOfAttrs">Dynamically Binding Multiple Attributes</p>

    <p :[dynamicAttributeName]="'test'">Dynamic Arguments</p>
    <p @[dynamicEventName]="onClick()">Dynamic Events</p>
  </div>
</template>

<style scoped lang="scss"></style>

<script lang="ts" setup>
import type { PrimitiveProps } from 'radix-vue'
import { Primitive } from 'radix-vue'

const props = withDefaults(
  defineProps<
    PrimitiveProps & {
      class?: any
    }
  >(),
  {
    as: 'div',
  },
)

const forwarded = reactiveOmit(props, 'class')

const styles = tv({
  base: 'container mx-auto',
})
</script>

<template>
  <Primitive :class="styles({ class: props.class })" v-bind="forwarded">
    <slot />
  </Primitive>
</template>
